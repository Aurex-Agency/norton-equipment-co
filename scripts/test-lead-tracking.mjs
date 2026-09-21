import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

// Exercise the actual tracking/form controller without analytics requests,
// real email delivery, a browser dependency, or a live provider key.
const file = readFileSync(new URL('../assets/js/site.js', import.meta.url), 'utf8');
const controller = file.slice(0, file.indexOf('})();') + 5);
const settle = () => new Promise((resolve) => setImmediate(resolve));

function fixture({ status = 200, result = { ok: true }, reject = false, valid = true, bot = '', query = '', referrer = '', storageDisabled = false, analyticsThrows = false, deferred = false, savedAcquisition = null } = {}) {
  const events = [], requests = [], formEvents = {}, documentEvents = {};
  const location = { pathname: '/request-a-quote/', hostname: 'nortonequipmentco.com', search: query, href: 'https://nortonequipmentco.com/request-a-quote/' + query };
  const optionNames = ['Service or repair', 'Used / reconditioned equipment', 'Compactor installation', 'Equipment evaluation'];
  const select = { value: 'Service or repair', options: optionNames.map((value) => ({ value })) };
  const button = { disabled: false }, statusEl = { hidden: true, innerHTML: '' };
  const values = { Name: '<img src=x onerror=alert(1)>', Phone: '555-0101', Email: 'private@example.test', Message: 'private inquiry', 'bot-field': bot, Interest: select.value };
  let resets = 0, finish;
  const form = {
    querySelector: (s) => s === '[data-form-status]' ? statusEl : s === '[name="Interest"]' ? select : button,
    getAttribute: (s) => ({ 'data-endpoint': '/api/contact/', 'data-subject': 'Quote request', 'data-mailto': 'service@example.test' }[s] || null),
    addEventListener: (event, handler) => { formEvents[event] = handler; },
    reportValidity: () => valid,
    reset: () => { resets++; },
  };
  const document = {
    referrer,
    body: { classList: { add() {} } },
    getElementById: () => null,
    querySelectorAll: (s) => s === 'form[data-quote-form]' ? [form] : [],
    addEventListener: (event, handler) => { documentEvents[event] = handler; },
  };
  const storage = new Map();
  if (savedAcquisition) storage.set('norton_acquisition', JSON.stringify(savedAcquisition));
  const window = {
    location, matchMedia: () => ({ matches: true }), addEventListener() {},
    gtag: (...args) => { if (analyticsThrows) throw new Error('Analytics unavailable'); events.push(args); },
  };
  class FormData {
    constructor() { this.data = { ...values, Interest: select.value }; }
    get(key) { return this.data[key]; }
    forEach(fn) { Object.entries(this.data).forEach(([key, value]) => fn(value, key)); }
  }
  vm.runInNewContext(controller, {
    window, document, URL, URLSearchParams, FormData, requestAnimationFrame() {},
    sessionStorage: {
      getItem: (key) => { if (storageDisabled) throw new Error('Blocked'); return storage.get(key); },
      setItem: (key, value) => { storage.set(key, value); },
    },
    fetch: (url, options) => {
      requests.push({ url, payload: JSON.parse(options.body) });
      if (reject) return Promise.reject(new Error('Network failure'));
      const response = { status, ok: status >= 200 && status < 300, json: async () => result };
      return deferred ? new Promise((resolve) => { finish = () => resolve(response); }) : Promise.resolve(response);
    },
  });
  return { events, requests, select, button, statusEl, location, formEvents, documentEvents, finish: () => finish(), resets: () => resets, submit: () => formEvents.submit({ preventDefault() {} }) };
}

test('internal navigation retains the original search entry page for the inquiry', async () => {
  const f = fixture({ referrer: 'https://nortonequipmentco.com/blog/commercial-baler-troubleshooting/', savedAcquisition: { at: Date.now(), context: { landing_page: '/blog/commercial-baler-troubleshooting/', traffic_source: 'chatgpt' } } });
  f.submit(); await settle();
  assert.equal(f.requests[0].payload['Landing page'], '/blog/commercial-baler-troubleshooting/');
  assert.equal(f.events.find((e) => e[1] === 'generate_lead')[2].traffic_source, 'chatgpt');
});

test('a new external visit replaces previous acquisition context', async () => {
  const f = fixture({ referrer: 'https://www.bing.com/search?q=baler', savedAcquisition: { at: Date.now(), context: { landing_page: '/old/', traffic_source: 'chatgpt' } } });
  f.submit(); await settle();
  assert.equal(f.requests[0].payload['Landing page'], '/request-a-quote/');
  assert.equal(f.events.find((e) => e[1] === 'generate_lead')[2].traffic_source, 'bing');
});

test('expired acquisition context is not attributed to a later inquiry', async () => {
  const f = fixture({ savedAcquisition: { at: Date.now() - 1800001, context: { landing_page: '/old/', traffic_source: 'chatgpt' } } });
  f.submit(); await settle();
  assert.equal(f.events.find((e) => e[1] === 'generate_lead')[2].traffic_source, 'direct');
});

test('accepted request records one lead, preserves attribution, and excludes personal data', async () => {
  const f = fixture({ referrer: 'https://www.perplexity.ai/search/private-query', query: '?interest=installation' });
  assert.equal(f.select.value, 'Compactor installation');
  f.submit(); await settle();
  const leads = f.events.filter((e) => e[1] === 'generate_lead');
  assert.equal(leads.length, 1);
  assert.equal(leads[0][2].interest_type, 'installation');
  assert.equal(leads[0][2].traffic_source, 'perplexity');
  assert.equal(f.requests[0].payload['Traffic source'], 'perplexity');
  assert.equal(f.requests[0].payload['Landing page'], '/request-a-quote/');
  assert.equal(f.resets(), 1);
  assert.equal(f.button.disabled, false);
  assert.match(f.statusEl.innerHTML, /request has been received/);
  assert.doesNotMatch(f.statusEl.innerHTML, /onerror|<img/);
  assert.doesNotMatch(JSON.stringify(f.events), /private|555|onerror/);
});

for (const options of [{ status: 503 }, { status: 502 }, { reject: true }, { result: { ok: false } }]) {
  test('failed or unconfigured delivery uses fallback without a conversion: ' + JSON.stringify(options), async () => {
    const f = fixture(options); f.submit(); await settle();
    assert.equal(f.events.filter((e) => e[1] === 'generate_lead').length, 0);
    assert.equal(f.events.filter((e) => e[1] === 'lead_form_fallback').length, 1);
    assert.match(f.location.href, /^mailto:/);
    assert.equal(f.resets(), 0);
    assert.equal(f.button.disabled, false);
  });
}

test('invalid and honeypot forms produce neither mail nor a lead', () => {
  for (const options of [{ valid: false }, { bot: 'spam' }]) {
    const f = fixture(options); f.submit();
    assert.equal(f.requests.length, 0);
    assert.equal(f.events.length, 0);
  }
});

test('rapid double-submit cannot send duplicate requests', async () => {
  const f = fixture({ deferred: true });
  f.submit(); f.submit();
  assert.equal(f.requests.length, 1);
  assert.equal(f.button.disabled, true);
  f.finish(); await settle();
  assert.equal(f.events.filter((e) => e[1] === 'generate_lead').length, 1);
});

test('storage and analytics failures cannot break lead submission', async () => {
  const f = fixture({ storageDisabled: true, analyticsThrows: true });
  f.submit(); await settle();
  assert.equal(f.requests.length, 1);
  assert.equal(f.resets(), 1);
  assert.match(f.statusEl.innerHTML, /received/);
});

test('arbitrary query values cannot prefill fields or leak into analytics', async () => {
  const f = fixture({ query: '?interest=__proto__&utm_source=private@example.test' });
  f.submit(); await settle();
  assert.equal(f.select.value, 'Service or repair');
  assert.equal(f.events.find((e) => e[1] === 'generate_lead')[2].traffic_source, 'campaign_other');
  assert.doesNotMatch(JSON.stringify(f.events), /private@example/);
});

test('phone clicks are intent events, not successful leads', () => {
  const f = fixture();
  const link = { getAttribute: () => 'tel:+16628387900', closest: (s) => s === 'article' ? {} : null };
  f.documentEvents.click({ target: { closest: () => link } });
  assert.equal(f.events[0][1], 'phone_click');
  assert.equal(f.events[0][2].placement, 'article');
  assert.equal(f.events.filter((e) => e[1] === 'generate_lead').length, 0);
  assert.doesNotMatch(JSON.stringify(f.events), /16628387900/);
});

test('form starts are counted once per attempt', () => {
  const f = fixture();
  f.formEvents.input(); f.formEvents.input();
  assert.equal(f.events.filter((e) => e[1] === 'lead_form_start').length, 1);
});
