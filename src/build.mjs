#!/usr/bin/env node
// ============================================================
// Norton Equipment Co. - static site generator (zero deps)
// Usage:  node src/build.mjs
// Output: static HTML written to the repository root.
// ============================================================

import { mkdirSync, writeFileSync, rmSync, existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SITE } from './site.mjs';
import { COMPACTOR_OVERVIEW, COMPACTORS, BALER_OVERVIEW, BALERS } from './data/equipment.mjs';
import { SERVICES_OVERVIEW, SERVICES } from './data/services.mjs';
import { BRANDS_OVERVIEW, BRANDS } from './data/brands.mjs';
import { CITIES, STATES } from './data/cities.mjs';
import { POSTS } from './data/blog.mjs';
import { LEGACY_POSTS } from './data/blog-legacy.mjs';
import { TESTIMONIALS, TESTIMONIALS_ARE_PLACEHOLDERS, TRUSTED_BY } from './data/testimonials.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Draft mode: keeps the whole site noindex. Live as of launch, so this is
// off; flipping it back to true re-blocks the site from search engines.
const DRAFT = false;

const BUILD_DATE = new Date().toISOString().slice(0, 10);
const pagesWritten = [];

// ---------------- helpers ----------------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function out(path, html) {
  const file = join(ROOT, path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  if (path.endsWith('index.html')) {
    pagesWritten.push('/' + path.replace(/index\.html$/, ''));
  }
}

// ---------------- icons ----------------
const SOCIAL_IC = {
  Facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.93 8.44-9.94Z"/></svg>',
  LinkedIn: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.96 3.76-1.96C21.6 8.68 22 11.1 22 14.24V21h-4v-6c0-1.43-.03-3.28-2-3.28-2 0-2.31 1.56-2.31 3.17V21h-4V9Z"/></svg>',
};

// Vercel serves /assets/* with `immutable, max-age=1yr`. Without a version in
// the URL a returning visitor keeps the old CSS forever, which is how the
// footer icons rendered unstyled at full size. Hash the file contents so the
// URL changes whenever the file does.
function assetHash(relPath) {
  try {
    return createHash('sha1').update(readFileSync(join(ROOT, relPath))).digest('hex').slice(0, 8);
  } catch { return BUILD_DATE.replace(/-/g, ''); }
}
const CSS_V = assetHash('assets/css/site.css');
const JS_V = assetHash('assets/js/site.js');



const IC = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.74a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-11"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7L22 7"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35a1 1 0 0 0-.78-.38H14"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  gauge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
};

// ---------------- photos ----------------
// Real photos pulled from Norton's current site + shop. Keyed by page slug.
// Client photo set (Drive, 8/3): real Norton installs and fabrication work,
// colour-graded to the site palette so they sit inside the design rather than
// on top of it. Remaining graphic heroes are pages with no photo in the set.
//  - pre-crusher: NO photo supplied. Still awaiting one.
//  - vertical-apartment: no vertical-compactor shot in the set (baler photos
//    are a different machine, so they are deliberately not reused here).
const PAGE_PHOTOS = {
  'hub:compactors': ['n-compactors-hub', 'A 4-yard stationary compactor under a 14-foot enclosure fabricated by Norton'],
  'self-contained': ['n-self-contained', 'Self-contained compactor installed on a customer pad'],
  'stationary': ['n-stationary', 'Stationary compactor set at a dock door'],
  'auger': ['n-auger', 'Auger compactor with enclosure at a loading dock'],
  'front-load-rear-load': ['n-front-load', 'Front-load container rebuilt in the Norton fabrication shop'],
  'used': ['n-used-compactor', 'Reconditioned compactor with a Norton service truck on site'],
  'steel-options': ['n-steel-options', 'A 14-foot compactor enclosure fabricated and installed by Norton'],
  'hub:balers': ['n-balers-hub', 'Horizontal baler and fabricated hopper running in a customer plant'],
  'vertical-balers': ['n-vertical-balers', 'New vertical baler installed and ready to run'],
  'horizontal-balers': ['n-horizontal-balers', 'Horizontal baler install with a Norton-fabricated infeed hopper'],
  'two-ram-balers': ['n-two-ram', 'High-volume baling line in a distribution centre'],
  'refurbished-balers': ['n-refurbished-balers', 'A vertical baler refurbished by Norton, installed on site'],
  'used-balers': ['n-used-balers', 'A used vertical baler on the floor'],
  'baling-wire': ['baling-wire', 'Baled cardboard tied with Norton-supplied wire'],
  'hub:services': ['n-services-hub', 'Norton crew servicing a baling line in the field'],
  'compactor-repair': ['n-repair', 'Compactor guide rails set and aligned during a repair'],
  'baler-service': ['baler-service', 'Vertical baler mid-cycle during a service visit'],
  'preventive-maintenance': ['baler-chamber', 'Inside a baler chamber during inspection'],
  'equipment-refurbishment': ['n-refurbishment', 'A compactor rebuilt and re-enclosed by the Norton shop'],
  'equipment-logistics': ['n-logistics', 'Compactors loaded for delivery across the Mid-South'],
  'rigging': ['n-rigging', 'A Norton forklift moving heavy machinery during a plant clear-out'],
  'waste-stream-consultations': ['bale-stacks', 'Baled cardboard staged for market'],
  'equipment-evaluations': ['eval-baler', 'Baler under evaluation'],
  'brand:max-pak': ['n-vertical-baler-alt', 'A Max-Pak vertical baler installed by Norton'],
};


// Emit srcset only when the 800w variant actually exists on disk, so an
// image that was already small enough never points at a missing file.
function srcsetAttr(name, fullW = 1500, sizes = '(max-width:860px) 100vw, 50vw') {
  if (!existsSync(join(ROOT, 'assets', 'img', `${name}-800.webp`))) return '';
  return ` srcset="/assets/img/${name}-800.webp 800w, /assets/img/${name}.webp ${fullW}w" sizes="${sizes}"`;
}

// Photos ship at 1500w for desktop and 800w for phones. The sizes hint
// defaults to the widest slot a figure occupies (a page hero at ~50vw),
// so a phone pulls the 800w file instead of a 1500w one it cannot use.
function photoFig(name, alt, { eager = false, cls = '', sizes = '(max-width:860px) 100vw, 50vw' } = {}) {
  return `<figure class="ph-frame${cls ? ' ' + cls : ''}">
    <img src="/assets/img/${name}.webp"${srcsetAttr(name, 1500, sizes)} alt="${esc(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'}>
    <span class="ph-hz" aria-hidden="true"></span>
    <span class="ph-corner" aria-hidden="true"></span>
  </figure>`;
}

const BOLT_SVG = '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><polygon points="24,3 42,13.5 42,34.5 24,45 6,34.5 6,13.5" fill="rgba(216,165,49,.12)" stroke="#d8a531" stroke-width="1.6"/><circle cx="24" cy="24" r="7" fill="none" stroke="#d8a531" stroke-width="1.4"/></svg>';

// ---------------- JSON-LD ----------------
function ldLocalBusiness() {
  return {
    '@type': 'LocalBusiness',
    '@id': SITE.baseUrl + '/#business',
    name: SITE.legalName,
    url: SITE.baseUrl + '/',
    telephone: '+1-662-838-7900',
    foundingDate: SITE.founded,
    slogan: SITE.tagline,
    description: 'Norton Equipment Company sells, services, and refurbishes commercial trash compactors, balers, and recycling equipment across the Mid-South (any brand, any model) since 1997.',
    address: { '@type': 'PostalAddress', streetAddress: SITE.address.street, addressLocality: SITE.address.city, addressRegion: SITE.address.state, postalCode: SITE.address.zip, addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHours: SITE.hoursSchema,
    areaServed: [
      { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 35.1495, longitude: -90.049 }, geoRadius: '160934' },
      ...STATES.map((s) => ({ '@type': 'State', name: s.name })),
    ],
    logo: SITE.baseUrl + '/assets/img/logo-full.webp',
    image: [SITE.baseUrl + '/assets/img/n-truck.webp', SITE.baseUrl + '/assets/img/n-hero-dock.webp'],
    sameAs: SITE.social.map((s) => s.url),
  };
}

function ldBreadcrumbs(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c.label, item: SITE.baseUrl + c.href,
    })),
  };
}

function ldFaq(faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

function ldService(name, desc, url) {
  return {
    '@type': 'Service', name, description: desc, url: SITE.baseUrl + url,
    provider: { '@id': SITE.baseUrl + '/#business' },
    areaServed: STATES.map((s) => ({ '@type': 'State', name: s.name })),
  };
}

// ---------------- shared chrome ----------------
function navDropdowns() {
  const compactorLinks = [
    { href: '/trash-compactors/', label: 'All Trash Compactors', all: true },
    ...COMPACTORS.map((c) => ({ href: `/trash-compactors/${c.slug}/`, label: c.name })),
    { href: '/services/compactor-repair/', label: 'Compactor Repair & Service' },
  ];
  const balerLinks = [
    { href: '/balers-recycling/', label: 'All Balers & Recycling', all: true },
    ...BALERS.map((b) => ({ href: `/balers-recycling/${b.slug}/`, label: b.name })),
  ];
  const serviceLinks = [
    { href: '/services/', label: 'All Services', all: true },
    ...SERVICES.map((s) => ({ href: `/services/${s.slug}/`, label: s.name })),
  ];
  const brandLinks = [
    { href: '/brands/', label: 'All Brands', all: true },
    ...BRANDS.map((b) => ({ href: `/brands/${b.slug}/`, label: b.name })),
  ];
  const locationLinks = [
    { href: '/locations/', label: 'All Locations', all: true },
    ...STATES.map((s) => ({ href: `/locations/#${s.abbr.toLowerCase()}`, label: `${s.name} Cities` })),
  ];
  const aboutLinks = [
    { href: '/about/', label: 'About Norton Equipment' },
    { href: '/testimonials/', label: 'Testimonials' },
    { href: '/blog/', label: 'Blog' },
    { href: '/contact/', label: 'Contact' },
  ];
  return { compactorLinks, balerLinks, serviceLinks, brandLinks, locationLinks, aboutLinks };
}

function ddList(links, wide = false) {
  const items = links
    .map((l) => `<li><a href="${l.href}"${l.all ? ' class="dd-all"' : ''}>${esc(l.label)}</a></li>`)
    .join('');
  return `<ul class="dd${wide ? ' dd-wide' : ''}">${items}</ul>`;
}

function headerHtml(activePath) {
  const dd = navDropdowns();
  const item = (href, label, list, wide) => {
    const current = activePath.startsWith(href) && href !== '/';
    return `<li>
      <a href="${href}"${current ? ' aria-current="true"' : ''} aria-haspopup="true" aria-expanded="false">${label}<span class="caret" aria-hidden="true"></span></a>
      ${ddList(list, wide)}
    </li>`;
  };
  return `
<a class="skip-link" href="#main">Skip to content</a>
<div class="topbar">
  <div class="wrap">
    <span class="tb-item">${IC.pin}<span>${esc(SITE.address.street)}, ${esc(SITE.address.city)}, ${esc(SITE.address.state)} ${esc(SITE.address.zip)}</span></span>
    <div class="tb-right">
      <span class="tb-item tb-hours">${IC.clock}<span>${esc(SITE.hours)}</span></span>
      <a class="tb-item" href="${SITE.phoneHref}">${IC.phone}<span>${esc(SITE.phone)}</span></a>
    </div>
  </div>
</div>
<header class="nav" id="nav">
  <div class="wrap nav-in">
    <a href="/" class="brand" aria-label="Norton Equipment Company home page">
      <img src="/assets/img/logo-badge.webp" alt="" width="58" height="32">
      <span class="txt"><b>Norton Equipment</b><span>Compactors · Balers · Service</span></span>
    </a>
    <nav aria-label="Primary">
      <ul class="nav-links" id="navlinks">
        ${item('/trash-compactors/', 'Trash Compactors', dd.compactorLinks, true)}
        ${item('/balers-recycling/', 'Balers &amp; Recycling', dd.balerLinks)}
        ${item('/services/', 'Services', dd.serviceLinks, true)}
        ${item('/brands/', 'Brands', dd.brandLinks)}
        ${item('/locations/', 'Locations', dd.locationLinks)}
        ${item('/about/', 'About', dd.aboutLinks)}
      </ul>
    </nav>
    <div class="nav-actions">
      <a href="${SITE.phoneHref}" class="nav-call" aria-label="Call Norton Equipment at ${esc(SITE.phone)}">${IC.phone}<span>${esc(SITE.phone)}</span></a>
      <a href="/request-a-quote/" class="nav-cta" aria-label="Request a quote">Request a Quote <span class="arw">→</span></a>
      <button class="menu-btn" id="menuBtn" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="mobile-bar" role="navigation" aria-label="Quick actions">
  <a href="${SITE.phoneHref}" class="mb-call">${IC.phone}<span>Call ${esc(SITE.phone)}</span></a>
  <a href="/request-a-quote/" class="mb-quote">Quote <span class="arw">→</span></a>
</div>`;
}

function ctaBand(opts = {}) {
  // Default is baled cardboard, which suits balers and general pages. Compactor
  // pages pass their own so the band shows the machine the page is about.
  const photo = opts.photo || 'bales-closeup';
  const h = opts.heading || `Let’s put the right <span class="gold">machine</span> on your pad.`;
  const p = opts.text || `Free waste stream evaluations across the Mid-South. Talk to a real person who has been doing this since 1997, no pressure, no hauling strings attached.`;
  return `
<section class="sec cta-band">
  <div class="cta-photo" aria-hidden="true" style="background-image:url(/assets/img/${photo}.webp)"></div>
  <div class="grid-lines" aria-hidden="true"></div>
  <div class="wrap">
    <h2 class="reveal">${h}</h2>
    <p class="reveal" data-d="1">${p}</p>
    <div class="close-cta reveal" data-d="2">
      <a href="${SITE.phoneHref}" class="btn btn-gold btn-lg">${IC.phone}Call ${esc(SITE.phone)}</a>
      <a href="/request-a-quote/" class="btn btn-ghost btn-lg">Request a Quote <span class="arw">→</span></a>
    </div>
    <p class="sub-call reveal" data-d="3">Prefer email? <a href="/contact/">Contact us here</a></p>
  </div>
</section>`;
}

function footerHtml() {
  const svc = SERVICES.slice(0, 6).map((s) => `<a href="/services/${s.slug}/">${esc(s.cardTitle)}</a>`).join('');
  const eq = [
    ...COMPACTORS.slice(0, 3).map((c) => `<a href="/trash-compactors/${c.slug}/">${esc(c.name)}</a>`),
    `<a href="/balers-recycling/vertical-balers/">Vertical Balers</a>`,
    `<a href="/balers-recycling/baling-wire/">Baling Wire</a>`,
    `<a href="/balers-recycling/two-ram-balers/">Two-Ram Balers</a>`,
  ].join('');
  const co = [
    `<a href="/about/">About Us</a>`, `<a href="/testimonials/">Testimonials</a>`, `<a href="/blog/">Blog</a>`,
    `<a href="/locations/">Service Area</a>`, `<a href="/contact/">Contact</a>`, `<a href="/request-a-quote/">Request a Quote</a>`,
  ].join('');
  return `
<footer>
  <div class="wrap foot-grid">
    <div class="foot-about">
      <div class="foot-brand">
        <img src="/assets/img/logo-badge.webp" alt="Norton Equipment Company emblem" width="64" height="35" loading="lazy">
        <div><b>Norton Equipment Company</b><span>Est. March ${SITE.founded} · Byhalia, MS</span></div>
      </div>
      <p class="foot-tagline">Built on service. Backed by experience.</p>
      <div class="foot-nap">
        <span>${IC.pin}<span>${esc(SITE.address.street)}, ${esc(SITE.address.city)}, ${esc(SITE.address.state)} ${esc(SITE.address.zip)}</span></span>
        <a href="${SITE.phoneHref}">${IC.phone}<span>${esc(SITE.phone)}</span></a>
        <span>${IC.clock}<span>${esc(SITE.hours)}</span></span>
      </div>
      <div class="foot-social">
        ${SITE.social.map((s) => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="Norton Equipment on ${esc(s.name)}">${SOCIAL_IC[s.name] || ''}</a>`).join('')}
      </div>
    </div>
    <div><div class="foot-h">Equipment</div><div class="foot-links">${eq}</div></div>
    <div><div class="foot-h">Services</div><div class="foot-links">${svc}</div></div>
    <div><div class="foot-h">Company</div><div class="foot-links">${co}</div></div>
  </div>
  <div class="foot-bottom">
    <div class="wrap">
      <span>© ${new Date().getFullYear()} ${esc(SITE.legalName)}. All rights reserved.</span>
      <span><a href="/privacy-policy/">Privacy Policy</a></span>
      <span><a href="/terms/">Terms of Use</a></span>
      <span><a href="/accessibility/">Accessibility</a></span>
      <span class="aurex">Site by <a href="mailto:kalob@aurexagency.com">Aurex Agency</a></span>
    </div>
  </div>
</footer>`;
}

// ---------------- page shell ----------------

// ---------------- SERP fitting ----------------
// Google renders roughly 60 characters of <title> and 155 of the description
// before truncating mid-phrase, which reads as sloppy in the results page.
// These trim on structural boundaries instead: titles shed pipe-separated
// middle segments (keeping the lead keywords and the brand), descriptions
// shed middle sentences (keeping the opening and any phone-number CTA).
const TITLE_MAX = 60;
const DESC_MAX = 155;

function fitTitle(title) {
  if (title.length <= TITLE_MAX) return title;
  const parts = title.split(' | ');
  if (parts.length > 2) {
    const first = parts[0], last = parts[parts.length - 1];
    const middles = parts.slice(1, -1);
    for (let keep = middles.length - 1; keep >= 0; keep--) {
      const c = [first, ...middles.slice(0, keep), last].join(' | ');
      if (c.length <= TITLE_MAX) return c;
    }
  }
  const first = parts[0];
  for (const suffix of [' | Norton Equipment', ' | Norton', '']) {
    if ((first + suffix).length <= TITLE_MAX) return first + suffix;
  }
  return first;
}

function fitDesc(desc) {
  if (desc.length <= DESC_MAX) return desc;
  // Trim to a word boundary, then shed any dangling connector so the text
  // does not end on "and" or "with" when the SERP appends its ellipsis.
  const clamp = (s) => {
    if (s.length <= DESC_MAX) return s;
    let c = s.slice(0, DESC_MAX + 1).replace(/\s+\S*$/, '');
    for (;;) {
      const trimmed = c.replace(/[\s,;:–-]*\b(and|or|with|plus|for|from|the|a|an|to|of|in|on|at|by)\s*$/i, '');
      if (trimmed === c) break;
      c = trimmed;
    }
    return c.replace(/[\s,;:–-]+$/, '');
  };
  const sentences = desc.match(/[^.!?]+[.!?]+(\s|$)/g)?.map((s) => s.trim()) || [desc];
  if (sentences.length < 2) return clamp(desc);
  const last = sentences[sentences.length - 1];
  const cta = /\(\d{3}\)\s?\d{3}-\d{4}|call /i.test(last) ? last : null;
  // the opening sentence alone can exceed the budget, so clamp before extending
  let out = clamp(sentences[0]);
  if (out !== sentences[0]) return out;
  for (const s of sentences.slice(1, cta ? -1 : undefined)) {
    if ((out + ' ' + s + (cta ? ' ' + cta : '')).length <= DESC_MAX) out += ' ' + s;
    else break;
  }
  if (cta && (out + ' ' + cta).length <= DESC_MAX) out += ' ' + cta;
  return out;
}

function layout({ path, title, desc, body, ld = [], ogType = 'website', ctaOpts, noCta = false, ogImage = '/assets/img/logo-full.webp', preloadImg = null }) {
  title = fitTitle(title);
  desc = fitDesc(desc);
  const canonical = SITE.baseUrl + path;
  const jsonLd = { '@context': 'https://schema.org', '@graph': [ldLocalBusiness(), ...ld] };
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
${SITE.searchConsoleToken ? `<meta name="google-site-verification" content="${SITE.searchConsoleToken}">` : ''}
${SITE.analyticsId ? `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${SITE.analyticsId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${SITE.analyticsId}');
</script>` : ''}
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${DRAFT ? '<meta name="robots" content="noindex,nofollow"><!-- DRAFT MODE: remove via src/build.mjs before launch -->' : ''}
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="${ogImage === '/assets/img/logo-full.webp' ? 'summary' : 'summary_large_image'}">
<meta property="og:image" content="${SITE.baseUrl}${ogImage}">
<meta name="theme-color" content="#0a0b0d">
<link rel="icon" href="/assets/img/favicon-48.png" type="image/png" sizes="48x48">
<link rel="icon" href="/assets/img/favicon-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
${preloadImg ? `<link rel="preload" href="${preloadImg}" as="image" fetchpriority="high">` : ''}
<link rel="preload" href="/assets/fonts/barlow-condensed-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/barlow-condensed-600.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/source-sans-3-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/site.css?v=${CSS_V}">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
<div id="progress" aria-hidden="true"></div>
${headerHtml(path)}
<main id="main">
${body}
</main>
${noCta ? '' : ctaBand(ctaOpts)}
${footerHtml()}
<script src="/assets/js/site.js?v=${JS_V}" defer></script>
</body>
</html>`;
}

function crumbsHtml(crumbs) {
  return `<nav class="crumbs" aria-label="Breadcrumb">${crumbs
    .map((c, i) => (i === crumbs.length - 1 ? `<span aria-current="page">${esc(c.label)}</span>` : `<a href="${c.href}">${esc(c.label)}</a><span class="sep">/</span>`))
    .join('')}</nav>`;
}


// Keep <title> inside Google's ~60ch render width: drop to the short brand
// suffix, then to no suffix, rather than letting it truncate mid-phrase.
function titleWithBrand(base) {
  for (const suffix of [' | Norton Equipment', ' | Norton', '']) {
    if ((base + suffix).length <= 60) return base + suffix;
  }
  return base;
}

function gallerySection(items, eyebrow, heading) {
  if (!items || !items.length) return '';
  return `
<div class="hazard" aria-hidden="true"></div>

<section class="sec sec-paper">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">${esc(eyebrow)}</span>
      <h2>${esc(heading)}</h2>
    </div>
    <div class="sf-grid reveal" data-d="1">
      ${items.map((x) => `<figure class="sf-item">${photoFig(x.img, x.alt, { sizes: '(max-width:480px) 100vw, (max-width:960px) 50vw, 25vw' })}<figcaption>${esc(x.cap)}</figcaption></figure>`).join('')}
    </div>
  </div>
</section>`;
}

function pageHero({ crumbs, kicker, h1, sub, chips = [], ctas = true, photo = null }) {
  const media = photo ? `
    <div class="phero-media">
      ${photoFig(photo[0], photo[1], { eager: true, cls: 'kenburns' })}
    </div>` : '';
  return `
<div class="phero${photo ? ' has-media' : ''}">
  <div class="grid-lines" aria-hidden="true"></div>
  ${photo ? `<div class="phero-bg" aria-hidden="true" style="background-image:url(/assets/img/${photo[0]}.webp)"></div>` : ''}
  <div class="wrap phero-in">
    <div class="phero-txt">
      ${crumbsHtml(crumbs)}
      ${kicker ? `<span class="kick">${esc(kicker)}</span>` : ''}
      <h1>${h1}</h1>
      ${sub ? `<p class="sub">${sub}</p>` : ''}
      ${chips.length ? `<div class="chips">${chips.map((c) => `<span class="chip"><span class="dot"></span>${esc(c)}</span>`).join('')}</div>` : ''}
      ${ctas ? `<div class="hero-cta">
        <a href="${SITE.phoneHref}" class="btn btn-gold" data-magnetic>${IC.phone}Call ${esc(SITE.phone)}</a>
        <a href="/request-a-quote/" class="btn btn-ghost" data-magnetic>Request a Quote <span class="arw">→</span></a>
      </div>` : ''}
    </div>
    ${media}
  </div>
</div>
<div class="hazard" aria-hidden="true"></div>`;
}

function faqSection(faqs, { dark = false } = {}) {
  if (!faqs || !faqs.length) return '';
  return `
<section class="sec ${dark ? 'sec-dark' : 'sec-paper-2'}">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Straight Answers</span>
      <h2>Frequently Asked Questions</h2>
    </div>
    <div class="faq">
      ${faqs.map((f, i) => `
      <details class="reveal"${i === 0 ? ' open' : ''}>
        <summary>${esc(f.q)}<span class="pm" aria-hidden="true"></span></summary>
        <div class="ans">${f.a}</div>
      </details>`).join('')}
    </div>
  </div>
</section>`;
}

const checkLi = (t) => `<li>${IC.check}<span>${t}</span></li>`;

// Mid-page conversion strip: phone-first, used on long pages
function phoneStrip(line) {
  return `
<div class="phone-strip">
  <div class="wrap ps-in">
    <p class="ps-txt">${line || 'Machine down? Sizing question? <em>Talk to a real tech, not a call center.</em>'}</p>
    <div class="ps-actions">
      <a class="ps-num" href="${SITE.phoneHref}">${IC.phone}<span>${esc(SITE.phone)}</span></a>
      <a class="btn btn-dark" href="/request-a-quote/">Request a Quote <span class="arw">→</span></a>
    </div>
  </div>
</div>`;
}

// "Trusted by" strip of real customers (from Norton's own testimonials)
function trustedBy({ dark = true } = {}) {
  return `
<div class="trusted${dark ? '' : ' trusted-lt'}">
  <span class="tr-lbl">Trusted by</span>
  ${TRUSTED_BY.map((n) => `<span class="tr-name">${esc(n)}</span>`).join('<span class="tr-dot" aria-hidden="true"></span>')}
</div>`;
}

// Interactive machine finder (logic lives in assets/js/site.js)
function finderSection({ dark = true } = {}) {
  return `
<section class="sec ${dark ? 'sec-dark finder-dark' : 'sec-paper-2'}" id="machine-finder">
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="eyebrow">60-Second Machine Finder</span>
      <h2>Three questions. The right machine.</h2>
      <p>No forms, no email gate. Answer honestly and we will point you at the exact equipment page, the same way we would on the phone.</p>
    </div>
    <div class="finder reveal" data-d="1" data-finder>
      <noscript><p class="center">The finder needs JavaScript. No problem: browse <a href="/trash-compactors/">all compactors</a> or call ${esc(SITE.phone)}.</p></noscript>
    </div>
  </div>
</section>`;
}

// ============================================================
// HOME PAGE
// ============================================================
function buildHome() {
  const marqueeNames = [...BRANDS.map((b) => b.name), ...BRANDS_OVERVIEW.alsoService.slice(0, 5)];
  const track = marqueeNames.map((n) => `<span class="brand-t">${esc(n)}</span>`).join('');

  const cityChips = (abbr) => CITIES.filter((c) => c.abbr === abbr)
    .map((c) => `<a class="city" href="/locations/${c.slug}/">${IC.pin}${esc(c.city)}, ${c.abbr}</a>`).join('');

  const postCards = POSTS.slice(0, 3).map((p, i) => `
    <a class="post-card reveal" data-d="${i + 1}" href="/blog/${p.slug}/">
      ${p.img ? `<span class="pc-img"><img src="/assets/img/${p.img}.webp"${srcsetAttr(p.img, 1500, '(max-width:480px) 100vw, (max-width:960px) 50vw, 33vw')} alt="" loading="lazy"></span>` : '<div class="pc-top" aria-hidden="true"></div>'}
      <div class="pc-body">
        <div class="meta"><span>${p.date}</span><span>${p.readMins} min read</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.excerpt)}</p>
        <span class="go">Read Article ${IC.arrow}</span>
      </div>
    </a>`).join('');

  const body = `
<section class="hero" id="top">
  <div class="hero-bg">
    <img class="hero-photo" src="/assets/img/n-hero-dock.webp"${srcsetAttr('n-hero-dock', 1900, '100vw')} alt="" fetchpriority="high" data-parallax-bg>
    <div class="hero-shade" aria-hidden="true"></div>
    <div class="grid-lines" aria-hidden="true"></div>
    <div class="hero-glow" aria-hidden="true"></div>
    <span class="bolt-float" style="top:18%;right:11%;width:44px" data-depth="30">${BOLT_SVG}</span>
    <span class="bolt-float" style="bottom:20%;right:23%;width:26px" data-depth="50">${BOLT_SVG}</span>
  </div>
  <div class="wrap hero-in">
    <div class="hero-tag">
      <span class="chip"><span class="dot"></span>Since 1997</span>
      <span class="chip">Any Brand · Any Model</span>
      <span class="chip">Serving 100 Miles Around Memphis</span>
    </div>
    <h1 class="hero-h">
      <span class="ln"><span>Built for the work</span></span>
      <span class="ln"><span class="gold">behind the waste.</span></span>
    </h1>
    <p class="script-line">Built on service. Backed by experience. Byhalia, Mississippi.</p>
    <p class="hero-sub">Commercial trash compactors and balers: sold, installed, serviced, and rebuilt across <b style="color:var(--silver-hi)">West Tennessee, North Mississippi, and East Arkansas</b>. Independent since 1997, with our own techs and a full fabrication shop behind every machine.</p>
    <div class="hero-cta">
      <a href="${SITE.phoneHref}" class="btn btn-gold btn-lg" data-magnetic>${IC.phone}Call ${esc(SITE.phone)}</a>
      <a href="/request-a-quote/" class="btn btn-ghost btn-lg" data-magnetic>Request a Quote <span class="arw">→</span></a>
    </div>
    <p class="hero-service">Machine down? We prioritize service calls across the Mid-South. <a href="/services/compactor-repair/">Emergency repair &rsaquo;</a></p>
    <div class="hero-paths">
      <a class="path-card has-photo" href="/trash-compactors/" data-tilt>
        <span class="pc-photo"><img src="/assets/img/compactor-green.webp"${srcsetAttr('compactor-green', 1400, '(max-width:860px) 100vw, 33vw')} alt="" loading="lazy" width="600" height="450"></span>
        <span class="pc-body">
          <span class="pc-kick">Shop &amp; Service</span>
          <h2>Trash Compactors</h2>
          <p>Self-contained, stationary, vertical, pre-crusher, auger, plus used and repair for every brand.</p>
          <span class="pc-go">Explore Compactors ${IC.arrow}</span>
        </span>
      </a>
      <a class="path-card has-photo" href="/balers-recycling/" data-tilt>
        <span class="pc-photo"><img src="/assets/img/balers-mp60hd.webp"${srcsetAttr('balers-mp60hd', 1400, '(max-width:860px) 100vw, 33vw')} alt="" loading="lazy" width="600" height="450"></span>
        <span class="pc-body">
          <span class="pc-kick">Shop &amp; Service</span>
          <h2>Balers &amp; Recycling</h2>
          <p>Vertical, horizontal, and two-ram balers, plus baling wire. The business Norton was built on.</p>
          <span class="pc-go">Explore Balers ${IC.arrow}</span>
        </span>
      </a>
    </div>
  </div>
</section>

<div class="stats">
  <div class="wrap">
    <div class="stats-grid">
      <div class="stat reveal"><div class="num">1997</div><div class="lab">Serving the Mid-South<br>Since</div></div>
      <div class="stat reveal" data-d="1"><div class="num" data-count="100">0</div><div class="lab">Mile Service Radius<br>From Memphis</div></div>
      <div class="stat reveal" data-d="2"><div class="num" data-count="3">0</div><div class="lab">States Covered<br>TN · MS · AR</div></div>
      <div class="stat reveal" data-d="3"><div class="num" data-count="31">0<span class="u">+</span></div><div class="lab">Cities Served<br>Across the Region</div></div>
    </div>
  </div>
</div>

<section class="sec sec-dark-2">
  <div class="wrap">
    <div class="split">
      <div class="reveal">
        <p class="pullquote mt-2">Equipment <em>built to last</em>, backed by people who <em>actually show up</em>.</p>
      </div>
      <div class="reveal" data-d="1">
        <p style="color:var(--silver-hi);font-size:17.5px;margin-bottom:18px">Norton Equipment started in 1997 as Norton Compressor Service and grew into the Mid-South’s independent specialist for waste and recycling equipment. Independent is the key word.</p>
        <p style="margin-bottom:24px;font-size:15.5px">National haulers lock equipment into hauling contracts. Single-brand dealers sell whatever the factory ships. We sell, service, and rebuild <b style="color:var(--silver-hi)">every major brand</b>, so the machine on your pad is the right one, and your hauling contract stays yours to bid.</p>
        <ul class="checks">
          ${checkLi('Our own service techs, not subcontractors')}
          ${checkLi('An in-house fabrication shop that rebuilds machines others only replace')}
          ${checkLi('New and reconditioned options quoted side by side')}
          ${checkLi('Free on-site waste stream evaluations with honest math')}
        </ul>
        <div class="hero-cta" style="margin-top:30px">
          <a href="/about/" class="btn btn-ghost">Our Story Since 1997 <span class="arw">→</span></a>
        </div>
      </div>
    </div>
    <div class="sf-grid reveal" data-d="2" style="margin-top:56px">
      <figure class="sf-item">${photoFig('n-vertical-balers', 'A new vertical baler installed by Norton', { sizes: '(max-width:480px) 100vw, (max-width:960px) 50vw, 25vw' })}<figcaption>New machines, installed and running</figcaption></figure>
      <figure class="sf-item">${photoFig('n-services-hub', 'Norton crew servicing a baling line', { sizes: '(max-width:480px) 100vw, (max-width:960px) 50vw, 25vw' })}<figcaption>Service, any brand</figcaption></figure>
      <figure class="sf-item">${photoFig('n-steel-options', 'A compactor enclosure fabricated by Norton', { sizes: '(max-width:480px) 100vw, (max-width:960px) 50vw, 25vw' })}<figcaption>Steel built for the site</figcaption></figure>
      <figure class="sf-item">${photoFig('n-rigging', 'A Norton forklift moving heavy machinery', { sizes: '(max-width:480px) 100vw, (max-width:960px) 50vw, 25vw' })}<figcaption>Rigging &amp; equipment logistics</figcaption></figure>
    </div>
  </div>
</section>

<div class="hazard" aria-hidden="true"></div>

<section class="sec sec-paper" id="find-compactor">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Trash Compactors</span>
      <h2>Start with your waste. We'll name the machine.</h2>
      <p>Not sure which compactor fits? Answer three questions, the same ones we'd ask on the phone, and land on the exact machine for your operation.</p>
    </div>
    <div class="finder reveal" data-d="1" data-finder>
      <noscript><p class="center">The finder needs JavaScript. No problem: browse <a href="/trash-compactors/">all compactors</a> or call ${esc(SITE.phone)}.</p></noscript>
    </div>
    <div class="branch-row reveal" data-d="2">
      <span class="branch-lead">Already know your stream?</span>
      <a class="branch" href="/trash-compactors/self-contained/">
        <span class="branch-tag">Wet waste</span>
        <b>Self-Contained</b>
        <span class="branch-sub">Grocery, food service, hospitals. Sealed and leak-tight.</span>
        <span class="branch-go">See the machine ${IC.arrow}</span>
      </a>
      <a class="branch" href="/trash-compactors/stationary/">
        <span class="branch-tag">Dry waste</span>
        <b>Stationary</b>
        <span class="branch-sub">Warehouses, DCs, retail. High volume, low cost per haul.</span>
        <span class="branch-go">See the machine ${IC.arrow}</span>
      </a>
    </div>
    <p class="type-list reveal" data-d="3"><span class="tl-lbl">Full lineup:</span> ${COMPACTORS.filter((c) => !['self-contained', 'stationary'].includes(c.slug)).map((c) => `<a href="/trash-compactors/${c.slug}/">${esc(c.cardTitle)}</a>`).join('<i aria-hidden="true">·</i>')}</p>
  </div>
</section>

<section class="sec sec-paper-2">
  <div class="wrap">
    <div class="sec-head reveal">
      <h2>The machines Norton was built on.</h2>
      <p>Balers of every kind, plus the wire that ties it all, turning your cardboard from a hauling cost into a commodity since 1997.</p>
    </div>
    <div class="feature-split reveal">
      <a class="feature-main" href="/balers-recycling/vertical-balers/">
        ${photoFig('n-vertical-baler-alt', 'A Max-Pak vertical baler installed by Norton')}
        <span class="fm-body">
          <span class="fm-tag">Flagship line</span>
          <b>Vertical Balers</b>
          <span class="fm-sub">The back-room workhorse for retail, grocery, and warehouses. We stock every size, install it, train your crew, and keep the wire coming.</span>
          <span class="go">Explore vertical balers ${IC.arrow}</span>
        </span>
      </a>
      <ul class="feature-list reveal" data-d="1">
        ${BALERS.filter((b) => b.slug !== 'vertical-balers').map((b) => `<li><a href="/balers-recycling/${b.slug}/"><b>${esc(b.cardTitle)}</b><span>${esc(b.short)}</span>${IC.arrow}</a></li>`).join('')}
      </ul>
    </div>
  </div>
</section>

<section class="sec sec-dark">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Services</span>
      <h2>Sold by some. Serviced by Norton.</h2>
      <p>Repair, maintenance, refurbishment, fabrication, logistics, and consultations: for any machine, no matter who sold it or whose name is on it.</p>
    </div>
    <div class="svc-flagships reveal">
      ${[['compactor-repair', IC.wrench], ['baler-service', IC.box], ['preventive-maintenance', IC.gauge]].map(([slug, ic]) => { const s = SERVICES.find((x) => x.slug === slug); return `
      <a class="svc-flag" href="/services/${s.slug}/">
        <span class="svc-flag-ic">${ic}</span>
        <b>${esc(s.cardTitle)}</b>
        <span>${esc(s.short)}</span>
        <span class="go">Learn more ${IC.arrow}</span>
      </a>`; }).join('')}
    </div>
    <div class="svc-more reveal" data-d="1">
      <span class="svc-more-lbl">The rest of the shop</span>
      <ul class="link-cols">
        ${SERVICES.filter((s) => !['compactor-repair', 'baler-service', 'preventive-maintenance'].includes(s.slug)).map((s) => `<li><a href="/services/${s.slug}/">${IC.check}${esc(s.cardTitle)}</a></li>`).join('')}
      </ul>
    </div>
  </div>
</section>

<section class="sec sec-paper">
  <div class="wrap">
    <div class="sec-head reveal">
      <h2>Shop by brand. Serviced regardless.</h2>
      <p>People search by name. When someone types "Marathon compactor" or "Max-Pak baler," Norton is who shows up, whether we're placing a new machine or fixing one already in the field.</p>
    </div>
    <div class="marquee-wrap reveal" style="margin-bottom:34px">
      <div class="marquee-lbl">Sold &amp; serviced across the region</div>
      <div class="marquee"><div class="track">${track}${track}</div></div>
    </div>
    <dl class="brand-lines reveal" data-d="1">
      ${BRANDS.map((b) => `<div class="brand-line"><dt><a href="/brands/${b.slug}/">${esc(b.name)}</a></dt><dd>${esc(b.short)}</dd><a class="bl-go" href="/brands/${b.slug}/" aria-label="${esc(b.name)} page">${IC.arrow}</a></div>`).join('')}
    </dl>
    <p class="mt-2"><a class="btn btn-dark" href="/brands/">All Brands <span class="arw">→</span></a></p>
  </div>
</section>

<section class="sec sec-dark-2">
  <div class="wrap">
    <div class="sec-head reveal">
      <h2>100 miles of coverage, three states deep.</h2>
      <p>${esc(SITE.serviceAreaBlurb)} If your city is on this map, our trucks are already nearby.</p>
    </div>
    <div class="reveal"><div class="state-h">Tennessee</div><div class="cities">${cityChips('TN')}</div></div>
    <div class="reveal" data-d="1"><div class="state-h">Mississippi</div><div class="cities">${cityChips('MS')}</div></div>
    <div class="reveal" data-d="2"><div class="state-h">Arkansas</div><div class="cities">${cityChips('AR')}</div></div>
  </div>
</section>

<section class="sec sec-paper">
  <div class="wrap">
    <div class="sec-head reveal">
      <h2>Don't take our word for it.</h2>
      <p>Real reviews from the operations that depend on Norton, from national retailers to Memphis logistics floors.</p>
    </div>
    ${TESTIMONIALS_ARE_PLACEHOLDERS ? `<div class="draft-note reveal"><b>Draft Note</b>Sample quotes shown for layout. Final site will feature Norton’s verified customer reviews.</div>` : ''}
    <figure class="quote-feature reveal">
      <blockquote>${esc(TESTIMONIALS[0].quote)}</blockquote>
      <figcaption><b>${esc(TESTIMONIALS[0].name)}</b><span>${esc(TESTIMONIALS[0].role)}</span></figcaption>
    </figure>
    <div class="quote-row">
      ${TESTIMONIALS.slice(1, 3).map((t, i) => `
      <figure class="quote-card reveal" data-d="${i + 1}">
        <span class="qmark" aria-hidden="true">“</span>
        <blockquote>${esc(t.quote)}</blockquote>
        <figcaption class="who"><b>${esc(t.name)}</b><span>${esc(t.role)}</span></figcaption>
      </figure>`).join('')}
    </div>
    <p class="mt-3 center"><a class="btn btn-dark" href="/testimonials/">More Testimonials <span class="arw">→</span></a></p>
  </div>
</section>

<section class="sec sec-paper-2">
  <div class="wrap">
    <div class="sec-head reveal">
      <h2>Straight talk on waste equipment.</h2>
    </div>
    <div class="grid-3">${postCards}</div>
    <p class="mt-3 center"><a class="btn btn-dark" href="/blog/">All Articles <span class="arw">→</span></a></p>
  </div>
</section>

<div class="hazard" aria-hidden="true"></div>

<section class="sec social-band">
  <div class="wrap sb-in reveal">
    <div class="sb-copy">
      <span class="eyebrow">Follow Along</span>
      <h2>See the work as it happens.</h2>
      <p>New installs, shop rebuilds, and fabrication jobs go up on Facebook and LinkedIn. It is the quickest way to see what a machine looks like on a real pad before you buy one.</p>
    </div>
    <div class="sb-links">
      ${SITE.social.map((s) => `<a class="sb-link" href="${s.url}" target="_blank" rel="noopener">${SOCIAL_IC[s.name] || ''}<span>${esc(s.name)}</span><span class="arw">→</span></a>`).join('')}
    </div>
  </div>
</section>`;

  out('index.html', layout({
    preloadImg: '/assets/img/n-hero-dock.webp',
    ogImage: '/assets/img/n-truck.webp',
    path: '/',
    title: 'Norton Equipment Co. | Trash Compactors & Balers: Sales, Service & Parts | Memphis & Mid-South',
    desc: 'Commercial trash compactors and balers sold, serviced, and rebuilt across the Mid-South since 1997. Any brand, any model. Call (662) 838-7900.',
    body,
    ld: [],
  }));
}

// ============================================================
// EQUIPMENT PAGES
// ============================================================
function equipmentDetail(basePath, baseLabel, item, siblings) {
  const path = `${basePath}${item.slug}/`;
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: baseLabel, href: basePath },
    { label: item.name, href: path },
  ];
  const related = (item.related || [])
    .map((slug) => siblings.find((s) => s.slug === slug))
    .filter(Boolean)
    .map((r, i) => `
      <a class="tcard reveal" data-d="${i + 1}" href="${basePath}${r.slug}/">
        <div class="kick">${esc(r.kicker)}</div>
        <h3>${esc(r.cardTitle)}</h3>
        <p>${esc(r.short)}</p>
        <span class="go">View Details ${IC.arrow}</span>
      </a>`).join('');

  const body = `
${pageHero({
    crumbs,
    kicker: item.kicker,
    h1: esc(item.name),
    sub: esc(item.short),
    chips: ['Sales', 'Installation', 'Service · Any Brand', 'Mid-South Delivery'],
    photo: PAGE_PHOTOS[item.slug] || null,
  })}

<section class="sec sec-paper">
  <div class="wrap">
    <div class="split">
      <div class="prose reveal">
        ${item.intro.map((p, i) => `<p${i === 0 ? ' class="lead"' : ''}>${p}</p>`).join('')}
      </div>
      <div class="reveal" data-d="1">
        <div class="form-card">
          <span class="eyebrow">Built For</span>
          <ul class="checks mt-2">
            ${item.bestFor.map((b) => checkLi(esc(b))).join('')}
          </ul>
          <div class="form-alt">Not sure it fits your operation? <a href="/services/waste-stream-consultations/">Get a free waste stream consultation</a>. We’ll size it from your real volume.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-paper-2">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Why It Works</span>
      <h2>What you get with Norton.</h2>
    </div>
    <div class="flist">
      ${item.features.map((f, i) => `
      <div class="fitem reveal" data-d="${i % 4}">
        <div class="fmark" aria-hidden="true"></div>
        <div><h3>${esc(f.h)}</h3><p>${f.p}</p></div>
      </div>`).join('')}
    </div>
  </div>
</section>

${gallerySection(item.gallery, item.galleryEyebrow || 'Our Work', item.galleryHeading || 'Built and installed by Norton.')}

${phoneStrip()}

${faqSection(item.faqs)}

${related ? `
<section class="sec sec-paper">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Related Equipment</span>
      <h2>Also worth a look.</h2>
    </div>
    <div class="grid-3">${related}</div>
  </div>
</section>` : ''}`;

  out(`${path.slice(1)}index.html`, layout({
    path,
    title: item.metaTitle,
    desc: item.metaDesc,
    body,
    ld: [
      ldBreadcrumbs(crumbs),
      ldService(item.name, item.metaDesc, path),
      ldFaq(item.faqs),
    ],
    ctaOpts: { heading: `Ready to talk <span class="gold">${esc(item.cardTitle.toLowerCase())}</span>?`, photo: basePath === '/trash-compactors/' ? 'n-cta-compactors' : 'n-cta-balers' },
  }));
}

function equipmentHub(basePath, overview, items, extraCards = '', photoKey = null) {
  const crumbs = [{ label: 'Home', href: '/' }, { label: overview.name, href: basePath }];
  const cards = overview.types.map((t, i) => {
    const it = items.find((x) => x.slug === t.slug);
    return `
    <a class="tcard reveal" data-d="${(i % 3) + 1}" href="${basePath}${t.slug}/">
      <div class="kick">${esc(it.kicker)}</div>
      <h3>${esc(it.cardTitle)}</h3>
      <p>${esc(t.blurb)}</p>
      <span class="go">View Details ${IC.arrow}</span>
    </a>`;
  }).join('');

  const body = `
${pageHero({
    crumbs,
    kicker: overview.kicker,
    h1: esc(overview.h1),
    sub: esc(overview.sub),
    chips: ['Since 1997', 'Any Brand · Any Model', 'TN · MS · AR'],
    photo: photoKey ? PAGE_PHOTOS[photoKey] : null,
  })}

<section class="sec sec-paper">
  <div class="wrap">
    <div class="prose reveal">
      ${overview.intro.map((p, i) => `<p${i === 0 ? ' class="lead"' : ''}>${p}</p>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec-paper-2">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">The Lineup</span>
      <h2>Find your machine.</h2>
    </div>
    <div class="grid-3">${cards}${extraCards}</div>
  </div>
</section>

${basePath === '/trash-compactors/' ? finderSection() : ''}

${faqSection(overview.faqs, { dark: false })}`;

  out(`${basePath.slice(1)}index.html`, layout({
    path: basePath,
    title: overview.metaTitle,
    desc: overview.metaDesc,
    body,
    ld: [ldBreadcrumbs(crumbs), ldService(overview.name, overview.metaDesc, basePath), ldFaq(overview.faqs)],
    ctaOpts: { photo: basePath === '/trash-compactors/' ? 'n-cta-compactors' : 'n-cta-balers' },
  }));
}

function buildEquipment() {
  const repairCard = `
    <a class="tcard reveal" href="/services/compactor-repair/">
      <div class="kick">All Brands · Fast Response</div>
      <h3>Compactor Repair &amp; Service</h3>
      <p>Down machine? Hydraulics, controls, doors, and structural repair, dispatched across the Mid-South.</p>
      <span class="go">Get It Fixed ${IC.arrow}</span>
    </a>`;
  equipmentHub('/trash-compactors/', COMPACTOR_OVERVIEW, COMPACTORS, repairCard, 'hub:compactors');
  COMPACTORS.forEach((c) => equipmentDetail('/trash-compactors/', 'Trash Compactors', c, COMPACTORS));

  const balerSvcCard = `
    <a class="tcard reveal" href="/services/baler-service/">
      <div class="kick">All Brands · Since 1997</div>
      <h3>Baler Service &amp; Repair</h3>
      <p>The original Norton trade: hydraulics, doors, controls, and structural repair for every baler brand.</p>
      <span class="go">Get It Fixed ${IC.arrow}</span>
    </a>`;
  equipmentHub('/balers-recycling/', BALER_OVERVIEW, BALERS, balerSvcCard, 'hub:balers');
  BALERS.forEach((b) => equipmentDetail('/balers-recycling/', 'Balers & Recycling', b, BALERS));
}

// ============================================================
// SERVICES
// ============================================================
function buildServices() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }];
  const cards = SERVICES.map((s, i) => `
    <a class="tcard reveal" data-d="${(i % 3) + 1}" href="/services/${s.slug}/">
      <div class="kick">${esc(s.kicker)}</div>
      <h3>${esc(s.cardTitle)}</h3>
      <p>${esc(s.short)}</p>
      <span class="go">Learn More ${IC.arrow}</span>
    </a>`).join('');

  const body = `
${pageHero({
    crumbs,
    kicker: SERVICES_OVERVIEW.kicker,
    h1: esc(SERVICES_OVERVIEW.h1),
    sub: esc(SERVICES_OVERVIEW.sub),
    chips: ['Our Own Techs', 'In-House Fabrication', '100-Mile Radius'],
    photo: PAGE_PHOTOS['hub:services'],
  })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="grid-3">${cards}</div>
  </div>
</section>
<section class="sec sec-dark-2">
  <div class="wrap">
    <div class="split">
      <div class="reveal">
        <span class="eyebrow">Why Norton Service</span>
        <p class="pullquote mt-2">The brand on the machine <em>doesn’t matter</em>. The name on the truck <em>does</em>.</p>
      </div>
      <div class="reveal" data-d="1">
        <ul class="checks">
          ${checkLi('Every major make and model: Marathon, Cram-A-Lot, Max-Pak, Harris, PTR, Wastequip, and more')}
          ${checkLi('An in-house fabrication shop that rebuilds machines others can only replace')}
          ${checkLi('Preventive maintenance programs with written condition reports')}
          ${checkLi('Honest repair-vs-replace advice, with reconditioned alternatives quoted')}
        </ul>
      </div>
    </div>
  </div>
</section>`;

  out('services/index.html', layout({
    path: '/services/',
    title: SERVICES_OVERVIEW.metaTitle,
    desc: SERVICES_OVERVIEW.metaDesc,
    body,
    ld: [ldBreadcrumbs(crumbs)],
    ctaOpts: { heading: 'Down machine? <span class="gold">Call now.</span>', text: `One number covers repair, maintenance, fabrication, and logistics across the Mid-South: ${SITE.phone}.` },
  }));

  SERVICES.forEach((s) => {
    const path = `/services/${s.slug}/`;
    const crumbs2 = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: s.name, href: path }];
    const related = (s.related || [])
      .map((slug) => SERVICES.find((x) => x.slug === slug))
      .filter(Boolean)
      .map((r, i) => `
      <a class="tcard reveal" data-d="${i + 1}" href="/services/${r.slug}/">
        <div class="kick">${esc(r.kicker)}</div>
        <h3>${esc(r.cardTitle)}</h3>
        <p>${esc(r.short)}</p>
        <span class="go">Learn More ${IC.arrow}</span>
      </a>`).join('');

    const body2 = `
${pageHero({
      crumbs: crumbs2,
      kicker: s.kicker,
      h1: esc(s.name),
      sub: esc(s.short),
      chips: ['Any Brand · Any Model', 'Our Own Techs', 'TN · MS · AR'],
      photo: PAGE_PHOTOS[s.slug] || null,
    })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="prose reveal">
      ${s.intro.map((p, i) => `<p${i === 0 ? ' class="lead"' : ''}>${p}</p>`).join('')}
    </div>
  </div>
</section>
<section class="sec sec-paper-2">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">What’s Included</span>
      <h2>How we handle it.</h2>
    </div>
    <div class="flist">
      ${s.features.map((f, i) => `
      <div class="fitem reveal" data-d="${i % 4}">
        <div class="fmark" aria-hidden="true"></div>
        <div><h3>${esc(f.h)}</h3><p>${f.p}</p></div>
      </div>`).join('')}
    </div>
  </div>
</section>

${gallerySection(s.gallery, s.galleryEyebrow || 'Our Work', s.galleryHeading || 'On the job across the Mid-South.')}

${phoneStrip('Down machine? <em>We prioritize those calls.</em>')}

${faqSection(s.faqs)}
${related ? `
<section class="sec sec-paper">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Related Services</span>
      <h2>Often paired with this.</h2>
    </div>
    <div class="grid-3">${related}</div>
  </div>
</section>` : ''}`;

    out(`services/${s.slug}/index.html`, layout({
      path,
      title: s.metaTitle,
      desc: s.metaDesc,
      body: body2,
      ld: [ldBreadcrumbs(crumbs2), ldService(s.name, s.metaDesc, path), ldFaq(s.faqs)],
      ctaOpts: { heading: `Need <span class="gold">${esc(s.cardTitle.toLowerCase())}</span>? We’re close.` },
    }));
  });
}

// ============================================================
// BRANDS
// ============================================================
function buildBrands() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Brands', href: '/brands/' }];
  const cards = BRANDS.map((b, i) => `
    <a class="tcard reveal" data-d="${i + 1}" href="/brands/${b.slug}/">
      <div class="kick">${esc(b.kicker)}</div>
      <h3>${esc(b.name)}</h3>
      <p>${esc(b.short)}</p>
      <span class="go">Brand Page ${IC.arrow}</span>
    </a>`).join('');
  const also = BRANDS_OVERVIEW.alsoService.map((n) => `<span class="city">${IC.check}${esc(n)}</span>`).join('');

  const body = `
${pageHero({
    crumbs,
    kicker: BRANDS_OVERVIEW.kicker,
    h1: esc(BRANDS_OVERVIEW.h1),
    sub: esc(BRANDS_OVERVIEW.sub),
    chips: ['Independent Dealer', 'All Brands Serviced', 'Parts & Wire Supplied'],
  })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Featured Lines</span>
      <h2>The brands we know deepest.</h2>
    </div>
    <div class="grid-2">${cards}</div>
  </div>
</section>
<section class="sec sec-dark-2">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Also Serviced in the Field</span>
      <h2>If it compacts or bales, we work on it.</h2>
      <p>These lines (and plenty more) are already on our service routes. Brand pages for them can be added anytime. The service exists today.</p>
    </div>
    <div class="cities reveal" data-d="1">${also}</div>
  </div>
</section>`;

  out('brands/index.html', layout({
    path: '/brands/',
    title: BRANDS_OVERVIEW.metaTitle,
    desc: BRANDS_OVERVIEW.metaDesc,
    body,
    ld: [ldBreadcrumbs(crumbs)],
  }));

  BRANDS.forEach((b) => {
    const path = `/brands/${b.slug}/`;
    const crumbs2 = [{ label: 'Home', href: '/' }, { label: 'Brands', href: '/brands/' }, { label: b.name, href: path }];
    const body2 = `
${pageHero({
      crumbs: crumbs2,
      kicker: b.kicker,
      h1: `${esc(b.name)} <span style="-webkit-text-stroke:1.5px var(--gold);color:transparent">Sales &amp; Service</span>`,
      sub: esc(b.short),
      chips: b.authorized ? ['Authorized Dealer', 'We Service It', 'We Stock Parts For It'] : ['We Sell It', 'We Service It', 'We Stock Parts For It'],
      photo: PAGE_PHOTOS['brand:' + b.slug] || null,
    })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="prose reveal">
      ${b.intro.map((p, i) => `<p${i === 0 ? ' class="lead"' : ''}>${p}</p>`).join('')}
    </div>
  </div>
</section>
<section class="sec sec-paper-2">
  <div class="wrap">
    <div class="split">
      <div>
        <div class="sec-head reveal">
          <span class="eyebrow">Known For</span>
          <h2>Why buyers ask for ${esc(b.name)}.</h2>
        </div>
        <div class="flist">
          ${b.knownFor.map((f, i) => `
          <div class="fitem reveal" data-d="${i}">
            <div class="fmark" aria-hidden="true"></div>
            <div><h3>${esc(f.h)}</h3><p>${f.p}</p></div>
          </div>`).join('')}
        </div>
      </div>
      <div class="reveal" data-d="1">
        <div class="form-card sticky" style="top:130px">
          ${b.authorized ? `<div class="auth-badge">${IC.check}<span>Authorized ${esc(b.name)} Dealer</span></div>` : ''}
          <span class="eyebrow">Norton × ${esc(b.name)}</span>
          <ul class="checks mt-2">
            ${b.weProvide.map((w) => checkLi(esc(w))).join('')}
          </ul>
          <div class="form-alt">Have a ${esc(b.name)} machine that needs attention? <a href="${SITE.phoneHref}">Call ${esc(SITE.phone)}</a> or <a href="/request-a-quote/">request service online</a>.</div>
        </div>
      </div>
    </div>
  </div>
</section>
${faqSection([b.faq])}`;

    out(`brands/${b.slug}/index.html`, layout({
      path,
      title: b.metaTitle,
      desc: b.metaDesc,
      body: body2,
      ld: [ldBreadcrumbs(crumbs2), ldService(`${b.name} equipment sales & service`, b.metaDesc, path), ldFaq([b.faq])],
      ctaOpts: { heading: `${esc(b.name)} on your pad? <span class="gold">We’ve got it.</span>` },
    }));
  });
}

// ============================================================
// LOCATIONS
// ============================================================
function buildLocations() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations/' }];
  const stateBlocks = STATES.map((s) => {
    const chips = CITIES.filter((c) => c.abbr === s.abbr)
      .map((c) => `<a class="city" href="/locations/${c.slug}/">${IC.pin}${esc(c.city)}, ${c.abbr}</a>`).join('');
    return `<div id="${s.abbr.toLowerCase()}" class="reveal"><div class="state-h">${esc(s.name)}</div><div class="cities">${chips}</div></div>`;
  }).join('');

  const body = `
${pageHero({
    crumbs,
    kicker: 'Local Service · Real Coverage',
    h1: 'Serving 100 Miles Around Memphis',
    sub: 'Thirty-one cities across West Tennessee, North Mississippi, and East Arkansas, with equipment sales, service routes, and delivery running through every one of them. Home base: Byhalia, MS.',
    chips: ['TN · MS · AR', 'Since 1997', 'Any Brand · Any Model'],
  })}
<section class="sec sec-dark">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Pick Your City</span>
      <h2>Find Norton near you.</h2>
      <p>Every city below is inside our confirmed service radius. Farther out? Call anyway, sales and project work often travel beyond the routine service ring.</p>
    </div>
    ${stateBlocks}
  </div>
</section>`;

  out('locations/index.html', layout({
    path: '/locations/',
    title: 'Service Area & Locations | Memphis, North MS, West TN, East AR | Norton Equipment',
    desc: 'Compactor and baler sales, service, and delivery in 31 cities within 100 miles of Memphis. Find your city and what we cover there.',
    body,
    ld: [ldBreadcrumbs(crumbs)],
  }));

  CITIES.forEach((c) => {
    const path = `/locations/${c.slug}/`;
    const crumbs2 = [{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations/' }, { label: `${c.city}, ${c.abbr}`, href: path }];
    const nearby = (c.nearby || [])
      .map((slug) => CITIES.find((x) => x.slug === slug))
      .filter(Boolean)
      .map((n) => `<a class="city" href="/locations/${n.slug}/">${IC.pin}${esc(n.city)}, ${n.abbr}</a>`).join('');

    const equipLinks = [
      { href: '/trash-compactors/', label: 'Commercial Trash Compactors' },
      { href: '/trash-compactors/self-contained/', label: 'Self-Contained Compactors' },
      { href: '/trash-compactors/stationary/', label: 'Stationary Compactors' },
      { href: '/balers-recycling/', label: 'Balers & Recycling' },
      { href: '/balers-recycling/vertical-balers/', label: 'Vertical Balers' },
      { href: '/balers-recycling/baling-wire/', label: 'Baling Wire Delivery' },
    ];
    const svcLinks = [
      { href: '/services/compactor-repair/', label: 'Compactor Repair' },
      { href: '/services/baler-service/', label: 'Baler Service' },
      { href: '/services/preventive-maintenance/', label: 'Preventive Maintenance' },
      { href: '/services/equipment-refurbishment/', label: 'Equipment Refurbishment' },
      { href: '/services/equipment-logistics/', label: 'Equipment Logistics' },
      { href: '/services/waste-stream-consultations/', label: 'Free Waste Stream Consultation' },
    ];
    const dist = c.miles === 0 ? 'Home base' : `~${c.miles} miles from our shop`;
    const faqs = [
      {
        q: `Do you charge extra for service calls in ${c.city}?`,
        a: `${c.city} is inside our standard 100-mile service area, so it is covered by our normal dispatch, no long-distance premiums. Call ${SITE.phone} for scheduling and current response times.`,
      },
      {
        q: `Can you deliver and install equipment in ${c.city}, ${c.abbr}?`,
        a: `Yes. Our own <a href="/services/equipment-logistics/">equipment logistics crew</a> handles delivery, rigging, installation, and old-machine removal throughout the ${c.city} area.`,
      },
      {
        q: `Which brands do you service in ${c.city}?`,
        a: `All of them: Marathon, Cram-A-Lot, Max-Pak, Harris/Selco, PTR, Wastequip, and every other major make. If it compacts or bales, we work on it.`,
      },
    ];

    const body2 = `
${pageHero({
      crumbs: crumbs2,
      kicker: `${c.city} · ${c.state}`,
      h1: `Compactors, Balers &amp; Equipment Service in <span style="color:var(--gold)">${esc(c.city)}, ${c.abbr}</span>`,
      sub: `Sales, repair, and preventive maintenance for commercial trash compactors, balers, and recycling equipment: serving ${esc(c.city)} from Byhalia, MS since 1997.`,
      chips: [dist, 'Any Brand · Any Model', 'Free On-Site Evaluations'],
    })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="split">
      <div class="prose reveal">
        ${c.angle.map((p, i) => `<p${i === 0 ? ' class="lead"' : ''}>${esc(p)}</p>`).join('')}
        <h2>Who we serve in ${esc(c.city)}</h2>
        <ul>
          ${c.industries.map((ind) => `<li>${esc(ind)}</li>`).join('')}
        </ul>
        <p>Not on the list? If your ${esc(c.city)} operation generates waste or recyclables, the conversation is worth thirty minutes. Our <a href="/services/waste-stream-consultations/">waste stream consultation</a> is free and comes with real numbers.</p>
      </div>
      <div class="reveal" data-d="1">
        <div class="form-card">
          <span class="eyebrow">Available in ${esc(c.city)}</span>
          <div class="mt-2" style="display:grid;gap:8px">
            ${equipLinks.map((l) => `<a href="${l.href}" style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:11px 14px;border:1px solid var(--line-lt);border-radius:3px;font-size:14px;color:var(--body-on-paper);font-weight:600">${esc(l.label)} ${IC.arrow}</a>`).join('')}
          </div>
          <span class="eyebrow" style="margin-top:26px;display:inline-flex">Service &amp; Support</span>
          <div class="mt-2" style="display:grid;gap:8px">
            ${svcLinks.map((l) => `<a href="${l.href}" style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:11px 14px;border:1px solid var(--line-lt);border-radius:3px;font-size:14px;color:var(--body-on-paper);font-weight:600">${esc(l.label)} ${IC.arrow}</a>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
${phoneStrip(`In or near ${esc(c.city)}? <em>Our trucks already run this way.</em>`)}

${faqSection(faqs)}
<section class="sec sec-dark">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Nearby Coverage</span>
      <h2>Also serving the neighbors.</h2>
    </div>
    <div class="cities reveal" data-d="1">${nearby}<a class="city" href="/locations/">${IC.pin}All Locations</a></div>
  </div>
</section>`;

    out(`locations/${c.slug}/index.html`, layout({
      path,
      title: `Trash Compactors & Balers in ${c.city}, ${c.abbr} | Norton`,
      desc: `Compactor and baler sales, repair, and service in ${c.city}, ${c.state}. Any brand, any model, since 1997. Call (662) 838-7900.`,
      body: body2,
      ld: [
        ldBreadcrumbs(crumbs2),
        { ...ldService(`Waste & recycling equipment sales and service in ${c.city}, ${c.abbr}`, `Compactor and baler sales, service, and maintenance in ${c.city}, ${c.state}.`, path), areaServed: { '@type': 'City', name: `${c.city}`, containedInPlace: { '@type': 'State', name: c.state } } },
        ldFaq(faqs.map((f) => ({ q: f.q, a: f.a.replace(/<[^>]+>/g, '') }))),
      ],
      ctaOpts: { heading: `${esc(c.city)}, let’s talk <span class="gold">equipment.</span>` },
    }));
  });
}

// ============================================================
// ABOUT / TESTIMONIALS / CONTACT / QUOTE / PRIVACY / 404
// ============================================================
function buildAbout() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'About', href: '/about/' }];
  const body = `
${pageHero({
    crumbs,
    kicker: 'Est. 1997 · Byhalia, Mississippi',
    h1: 'From Compressor Shop to <span style="color:var(--gold)">Mid-South Mainstay</span>',
    sub: 'Built from the ground up through hard work, trusted service, and decades of experience... here’s how we got here.',
    chips: ['Independent Since Day One', 'In-House Fabrication', 'Any Brand · Any Model'],
  })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="split">
      <div class="prose reveal">
        <h2 class="sr-only">Our story</h2>
        <p class="lead">Norton Equipment Company started in March 1997 as Norton Compressor Service, a hands-on Byhalia shop built around one idea: fix it right, show up when you say you will, and the work will speak for itself.</p>
        <div class="timeline">
          <div class="tl-item reveal"><div class="tl-node"></div><div><span class="tl-year">March 1997</span><h3>Norton Compressor Service</h3><p>Founded in Byhalia, Mississippi, providing parts, repairs, and maintenance for air compressors throughout the Memphis area.</p></div></div>
          <div class="tl-item reveal" data-d="1"><div class="tl-node"></div><div><span class="tl-year">The Rebrand</span><h3>Norton Equipment Company</h3><p>As the team's expertise in recycling machinery became the thing customers asked for, the company rebranded, filling the region's need for qualified service on balers and recycling systems.</p></div></div>
          <div class="tl-item reveal" data-d="2"><div class="tl-node"></div><div><span class="tl-year">Today</span><h3>The Mid-South's Independent Specialist</h3><p>Sales, service, parts, and refurbishment for commercial trash compactors, balers, and recycling equipment, with a service department carrying over 80 years of combined experience, and equipment installed for national chains far beyond the home territory.</p></div></div>
        </div>
        <p>The Mid-South noticed. Compressor work led to hydraulics, hydraulics led to balers, and balers led to the whole world of waste and recycling equipment. Today national names like Williams-Sonoma and Waste Connections keep Norton on speed dial, and the same techs who handle their installs answer the phone for a single grocery store baler in Holly Springs.</p>
        <p>Two things set that growth apart. First, independence: Norton never became a captive dealer or a hauler's equipment arm, so every recommendation is built on what fits the customer, not what is on the truck. Second, the in-house fabrication shop: because the team can build and rebuild the steel and hydraulics on a machine themselves, "that can't be fixed" becomes "picked it up Tuesday, back Thursday." Almost nobody else in this market can bring a machine back that far.</p>
        <p>Today the business leads with the fastest-growing side of the industry (commercial trash compactors) while staying every bit as strong in the balers and recycling equipment it was built on. The service radius runs 100 miles out from the Memphis metro, covering West Tennessee, North Mississippi, and East Arkansas from the shop in Byhalia.</p>
        <h2>What we believe</h2>
        <ul>
          <li><strong>Sell the right machine, not the nearest one.</strong> New or reconditioned, quoted side by side, with the math shown.</li>
          <li><strong>Service is the product.</strong> The machine is steel and hydraulics; what you are really buying is the years after the install.</li>
          <li><strong>Independence is customer leverage.</strong> Our equipment never locks your hauling contract. Ever.</li>
          <li><strong>Safety is not a line item, it is built into every job.</strong> Every technician is OSHA-trained, equipment- and factory-certified, and carries multiple safety credentials. That commitment has helped us maintain an impeccable safety record across decades of installations and service calls.</li>
          <li><strong>If it's steel, it's fixable.</strong> The in-house fabrication shop is the difference between a quote for a new machine and a repair that costs a fraction of it.</li>
        </ul>
      </div>
      <div class="reveal" data-d="1">
        <div class="form-card glance-card">
          <img class="glance-badge" src="/assets/img/logo-full-light.webp" alt="Norton Equipment Co." width="640" height="460" loading="lazy">
          <span class="eyebrow">Norton at a Glance</span>
          <ul class="checks mt-2">
            ${checkLi('<strong>Founded:</strong> March 1997, as Norton Compressor Service')}
            ${checkLi('<strong>Home:</strong> 60 Amy Ln, Byhalia, MS 38611')}
            ${checkLi('<strong>Territory:</strong> ~100 miles around Memphis: TN, MS, AR')}
            ${checkLi('<strong>Trades:</strong> Compactors, balers, baling wire')}
            ${checkLi('<strong>Service bench:</strong> 80+ years combined experience')}
            ${checkLi('<strong>Certifications:</strong> OSHA-trained, factory &amp; machine certified')}
            ${checkLi('<strong>Capabilities:</strong> Sales · Service · Parts · Refurbishment · Fabrication · Logistics')}
            ${checkLi('<strong>Brands:</strong> All of them, sold and serviced independently')}
          </ul>
          <div class="form-alt">Want the customer's-eye view? <a href="/testimonials/">Read the testimonials</a>, or just <a href="${SITE.phoneHref}">call ${esc(SITE.phone)}</a> and judge us by the conversation.</div>
        </div>
      </div>
    </div>
    <figure class="family-band reveal">
      <picture>
        <source media="(max-width:700px)" srcset="/assets/img/norton-family-stacked.webp" width="860" height="1697">
        <img src="/assets/img/norton-family-wide.webp" alt="The Norton family: the founders alongside JT and Hillary" width="1120" height="577" loading="lazy">
      </picture>
      <figcaption>The Norton family.</figcaption>
    </figure>
  </div>
</section>`;

  out('about/index.html', layout({
    path: '/about/',
    title: 'About Norton Equipment | Since 1997 | Byhalia, MS',
    desc: 'Founded in 1997 as Norton Compressor Service, now the Mid-South’s independent specialist in compactors and balers. Family-run, from Byhalia, MS.',
    body,
    ld: [ldBreadcrumbs(crumbs)],
  }));
}

function quoteBody(t) {
  const lead = Array.isArray(t.quote) ? t.quote : [t.quote];
  let html = lead.map((p) => `<p>${esc(p)}</p>`).join('');
  if (t.list && t.list.length) {
    html += `<ul class="q-list">${t.list.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  }
  if (t.after) {
    const after = Array.isArray(t.after) ? t.after : [t.after];
    html += after.map((p) => `<p>${esc(p)}</p>`).join('');
  }
  return html;
}

function buildTestimonials() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Testimonials', href: '/testimonials/' }];
  const quotes = TESTIMONIALS.map((t, i) => `
    <div class="quote-card${t.wide ? ' wide' : ''} reveal" data-d="${(i % 3) + 1}">
      <span class="qmark" aria-hidden="true">“</span>
      <div class="q-body">${quoteBody(t)}</div>
      <div class="who"><b>${esc(t.name)}</b><span>${esc(t.role)}</span></div>
      <span class="qtag">${esc(t.tag)}</span>
    </div>`).join('');
  const body = `
${pageHero({
    crumbs,
    kicker: 'Word Around the Region',
    h1: 'Trusted Where It Counts',
    sub: 'Real reviews, real names, real operations: from national retail installs to Memphis logistics floors, in their own words.',
  })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">What Our Customers Say</span>
      <h2>Straight from the people who rely on us in the field.</h2>
    </div>
    ${TESTIMONIALS_ARE_PLACEHOLDERS ? `<div class="draft-note reveal"><b>Draft Note</b>Sample quotes shown for layout review only. The launch version of this page will feature Norton’s real, verified customer reviews, cleaned up and tagged by industry and city per the site plan.</div>` : ''}
    <div class="grid-3">${quotes}</div>
  </div>
</section>`;
  out('testimonials/index.html', layout({
    path: '/testimonials/',
    title: 'Customer Testimonials | Norton Equipment',
    desc: 'What Mid-South businesses say about Norton Equipment’s compactor and baler sales, service, and support: reviews tagged by industry and city.',
    body,
    ld: [ldBreadcrumbs(crumbs)],
  }));
}

function formHtml({ subject, service = false }) {
  return `
<form class="form-grid" data-quote-form data-subject="${esc(subject)}" data-mailto="${esc(SITE.formTo)}" data-endpoint="/api/contact/" name="quote" method="POST">
  <input type="hidden" name="form-name" value="quote">
  <p style="display:none"><label>Don’t fill this out: <input name="bot-field"></label></p>
  <div class="field"><label for="f-name">Name <span class="req">*</span></label><input id="f-name" name="Name" required autocomplete="name"></div>
  <div class="field"><label for="f-company">Company</label><input id="f-company" name="Company" autocomplete="organization"></div>
  <div class="field"><label for="f-phone">Phone <span class="req">*</span></label><input id="f-phone" name="Phone" type="tel" required autocomplete="tel"></div>
  <div class="field"><label for="f-email">Email</label><input id="f-email" name="Email" type="email" autocomplete="email"></div>
  <div class="field"><label for="f-city">City / State</label><input id="f-city" name="City" placeholder="e.g. Olive Branch, MS"></div>
  <div class="field"><label for="f-interest">I’m interested in ${service ? '' : ''}</label>
    <select id="f-interest" name="Interest" required>
      <option value="" selected disabled>Choose one…</option>
      <option>Trash compactor - purchase</option>
      <option>Baler or recycling equipment</option>
      <option>Used / reconditioned equipment</option>
      <option>${service ? 'Service or repair - down machine' : 'Service or repair'}</option>
      <option>Preventive maintenance program</option>
      <option>Baling wire</option>
      <option>Equipment move / removal</option>
      <option>Free waste stream consultation</option>
      <option>Something else</option>
    </select>
  </div>
  <div class="field full"><label for="f-msg">Tell us about your operation</label><textarea id="f-msg" name="Message" placeholder="Waste type &amp; weekly volume, current setup, brand/model if it’s a repair, whatever you know."></textarea></div>
  <div class="full">
    <button type="submit" class="btn btn-gold btn-lg" style="width:100%">Submit <span class="arw">→</span></button>
    <p class="form-status" data-form-status role="status" aria-live="polite" hidden></p>
    <p class="form-consent">By clicking “Submit,” you agree to Norton Equipment Co.'s <a href="/terms/">Terms of Use</a> and <a href="/privacy-policy/">Privacy Policy</a>. You consent to receive phone calls and SMS messages from Norton Equipment Co. to provide updates on your order and/or for marketing purposes. Message frequency depends on your activity. You may opt-out by texting “STOP.” Message and data rates may apply.</p>
    <p class="form-note">We respond within one business day, usually much faster. Down machine? Skip the form and call <a href="${SITE.phoneHref}" class="fn-call">${esc(SITE.phone)}</a>.</p>
  </div>
</form>`;
}

function buildQuote() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Request a Quote', href: '/request-a-quote/' }];
  const body = `
${pageHero({
    crumbs,
    kicker: 'No Pressure · No Hauling Strings',
    h1: 'Request a Quote',
    sub: 'Tell us what you’re dealing with and we’ll come back with real options: new and reconditioned, quoted side by side with honest math.',
    ctas: false,
  })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="split">
      <div class="reveal">
        <div class="form-card">${formHtml({ subject: 'Quote Request - Norton Equipment Website' })}</div>
      </div>
      <div class="reveal" data-d="1">
        <div class="sec-head"><span class="eyebrow">What Happens Next</span><h2>Three steps, zero runaround.</h2></div>
        <div class="flist">
          <div class="fitem"><div class="idx">01</div><div><h3>We call you back</h3><p>Within one business day, a real person who knows the equipment (not a call center) follows up on your request.</p></div></div>
          <div class="fitem"><div class="idx">02</div><div><h3>We look at the real situation</h3><p>For most requests we’ll do a free on-site walk-through: your waste, your dock, your invoices. Sizing from reality beats sizing from a form.</p></div></div>
          <div class="fitem"><div class="idx">03</div><div><h3>You get options with math</h3><p>New and used quoted side by side, with payback math from your actual hauling costs. Then it’s your call, no chasing, no lock-ins.</p></div></div>
        </div>
        <div class="info-tile mt-2">
          <div class="ic">${IC.phone}</div>
          <div><b>Rather just talk?</b><p><a href="${SITE.phoneHref}">${esc(SITE.phone)}</a> · ${esc(SITE.hours)}</p></div>
        </div>
      </div>
    </div>
  </div>
</section>`;
  out('request-a-quote/index.html', layout({
    path: '/request-a-quote/',
    title: 'Request a Quote | Compactors, Balers & Service | Norton Equipment',
    desc: 'Request a quote for commercial trash compactors, balers, service, or baling wire. Norton Equipment quotes new and reconditioned options side by side. Serving the Mid-South since 1997.',
    body,
    ld: [ldBreadcrumbs(crumbs)],
    noCta: true,
  }));
}

function buildContact() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact/' }];
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.name}, ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`)}`;
  const body = `
${pageHero({
    crumbs,
    kicker: 'Byhalia, Mississippi · Since 1997',
    h1: 'Talk to a Real Person',
    sub: 'Quotes, service calls, parts, wire, or just an honest opinion about a machine. One number covers it all.',
    ctas: false,
  })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="grid-2" style="margin-bottom:22px">
      <div class="info-tile reveal"><div class="ic">${IC.phone}</div><div><b>Phone</b><p><a href="${SITE.phoneHref}">${esc(SITE.phone)}</a>, fastest for down machines${SITE.fax ? `<br><span style="color:var(--muted-on-paper)">Fax ${esc(SITE.fax)}</span>` : ''}</p></div></div>
      <div class="info-tile reveal" data-d="1"><div class="ic">${IC.mail}</div><div><b>Email</b><p><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p></div></div>
      <div class="info-tile reveal" data-d="2"><div class="ic">${IC.pin}</div><div><b>Shop &amp; Office</b><p>${esc(SITE.address.street)}, ${esc(SITE.address.city)}, ${esc(SITE.address.state)} ${esc(SITE.address.zip)}<br><a href="${mapsUrl}" rel="noopener" target="_blank">Get directions →</a></p></div></div>
      <div class="info-tile reveal" data-d="3"><div class="ic">${IC.clock}</div><div><b>Hours</b><p>${esc(SITE.hours)}<br>Service dispatch throughout the region</p></div></div>
    </div>
    <div class="split">
      <div class="reveal">
        <div class="sec-head"><span class="eyebrow">Send a Message</span><h2>Quote or service request.</h2></div>
        <div class="form-card">${formHtml({ subject: 'Contact - Norton Equipment Website', service: true })}</div>
      </div>
      <div class="reveal" data-d="1">
        <div class="sec-head"><span class="eyebrow">Coverage</span><h2>Where we run.</h2></div>
        <p style="margin-bottom:18px">${esc(SITE.serviceAreaBlurb)} Regular routes cover 31 cities, see the full <a href="/locations/" style="color:var(--gold-deep);font-weight:700">service area</a>.</p>
        <ul class="checks">
          ${checkLi('Sales, delivery &amp; installation region-wide')}
          ${checkLi('Service dispatch across the full 100-mile radius')}
          ${checkLi('Baling wire delivery on scheduled routes')}
          ${checkLi('Project &amp; logistics work quoted beyond the ring, just ask')}
        </ul>
      </div>
    </div>
  </div>
</section>`;
  out('contact/index.html', layout({
    path: '/contact/',
    title: 'Contact Norton Equipment | Byhalia, MS | (662) 838-7900',
    desc: 'Contact Norton Equipment: 60 Amy Ln, Byhalia, MS 38611. Call (662) 838-7900 for compactor and baler sales, service, parts, and baling wire across the Mid-South.',
    body,
    ld: [ldBreadcrumbs(crumbs)],
    noCta: true,
  }));
}

function buildPrivacy() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Privacy Policy', href: '/privacy-policy/' }];
  const body = `
${pageHero({ crumbs, kicker: 'The Fine Print', h1: 'Privacy Policy', sub: '', ctas: false })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="prose reveal legal">
      <p class="lead"><strong>Effective Date:</strong> April 22, 2025</p>

      <h2>1. Introduction</h2>
      <p>We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website, use our services, or interact with us, including through SMS communications.</p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and payment information when you register, make a purchase, or contact us.</li>
        <li><strong>Non-Personal Information:</strong> Browser type, operating system, IP address, and browsing behavior collected through cookies and similar technologies.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the collected information to:</p>
      <ul>
        <li>Provide and improve our services.</li>
        <li>Process transactions and send related information.</li>
        <li>Respond to inquiries and provide customer support.</li>
        <li>Send promotional communications, if you have opted in.</li>
        <li>Analyze website usage to enhance user experience.</li>
      </ul>

      <h2>4. Information Sharing and Disclosure</h2>
      <p>We do not sell or rent your personal information. We may share information with:</p>
      <ul>
        <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our website and conducting our business, provided they agree to keep information confidential.</li>
        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>We implement appropriate security measures, including SSL encryption, to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

      <h2>6. Cookies and Tracking Technologies</h2>
      <p>We use cookies to enhance your experience, analyze site traffic, and serve targeted advertisements. You can control cookie preferences through your browser settings. Disabling cookies may affect site functionality.</p>

      <h2>7. SMS Campaign Policy</h2>
      <h3>7.1. Consent and Opt-In</h3>
      <p>By providing your mobile number and opting into our SMS program, you consent to receive text messages from us. Message frequency may vary. Standard message and data rates may apply.</p>
      <h3>7.2. Information Collected</h3>
      <p>When you opt into our SMS program, we may collect:</p>
      <ul>
        <li><strong>Mobile Phone Number:</strong> To send you SMS messages.</li>
        <li><strong>Name and Preferences:</strong> If provided, to personalize messages.</li>
        <li><strong>Interaction Data:</strong> Details about your interactions with our messages, including delivery status and response times.</li>
      </ul>
      <h3>7.3. Use of Information</h3>
      <p>We use the collected information to:</p>
      <ul>
        <li>Send you transactional messages related to your account or purchases.</li>
        <li>Provide promotional offers, updates, and other marketing communications.</li>
        <li>Improve our services and customer experience.</li>
      </ul>
      <h3>7.4. Opt-Out Instructions</h3>
      <p>You can opt out of receiving SMS messages at any time by replying “STOP” to any of our messages. After opting out, you will receive a confirmation message, and no further messages will be sent unless you opt in again.</p>
      <h3>7.5. Data Sharing and Disclosure</h3>
      <p>We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our SMS program, provided they agree to keep your information confidential and use it only for the purposes specified by us.</p>
      <h3>7.6. Data Security</h3>
      <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      <h3>7.7. Data Retention</h3>
      <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.</p>

      <h2>8. Credit Card Information Usage</h2>
      <h3>8.1. Collection and Use</h3>
      <p>We collect credit card information solely to process authorized transactions, such as purchases or donations. This information includes the cardholder's name, card number, expiration date, and security code. We do not use this information for any other purposes without your explicit consent.</p>
      <h3>8.2. Secure Processing</h3>
      <p>All credit card transactions are processed through Payment Card Industry Data Security Standard (PCI DSS) compliant payment gateways. These gateways employ encryption and other security measures to protect your data during transmission.</p>
      <h3>8.3. Data Storage</h3>
      <p>We do not store your credit card information on our servers. Any necessary information is securely stored by our payment processors, who are obligated to maintain the confidentiality and security of your data.</p>
      <h3>8.4. Access Control</h3>
      <p>Access to credit card information is restricted to authorized personnel who require it to perform their job functions. These individuals are trained in data protection and are bound by confidentiality agreements.</p>
      <h3>8.5. Disclosure</h3>
      <p>We do not sell, trade, or rent your credit card information to third parties. We may disclose your information only when required by law or to protect our rights and safety, or that of others.</p>
      <h3>8.6. Retention</h3>
      <p>We retain credit card information only for as long as necessary to complete the transaction or as required by law. After this period, the information is securely disposed of to prevent unauthorized access.</p>
      <h3>8.7. Your Rights</h3>
      <p>You have the right to access, correct, or delete your credit card information held by us. To exercise these rights, please contact us at <a href="${SITE.phoneHref}">${esc(SITE.phone)}</a>.</p>

      <h2>9. Your Rights and Choices</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access, update, or delete your personal information.</li>
        <li>Opt out of receiving promotional communications.</li>
        <li>Disable cookies through your browser settings.</li>
      </ul>

      <h2>10. Children's Privacy</h2>
      <p>Our services are not directed to individuals under 13. We do not knowingly collect personal information from children.</p>

      <h2>11. Changes to This Policy</h2>
      <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. We encourage you to review this policy regularly to stay informed about our information practices.</p>

      <h2>12. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, you may contact us using the information below.</p>
      <p>
        ${esc(SITE.legalName)}<br>
        ${esc(SITE.address.street)}, ${esc(SITE.address.city)}, ${esc(SITE.address.state)} ${esc(SITE.address.zip)}<br>
        <a href="mailto:${esc(SITE.emailCc)}">${esc(SITE.emailCc)}</a><br>
        <a href="${SITE.phoneHref}">${esc(SITE.phone)}</a>
      </p>
    </div>
  </div>
</section>`;
  out('privacy-policy/index.html', layout({
    path: '/privacy-policy/',
    title: 'Privacy Policy | Norton Equipment',
    desc: 'Privacy policy for Norton Equipment Co.: how we collect, use, and protect your information, including our SMS communications and opt-out terms.',
    body,
    ld: [ldBreadcrumbs(crumbs)],
    noCta: true,
  }));
}

function buildTerms() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Terms of Use', href: '/terms/' }];
  const body = `
${pageHero({ crumbs, kicker: 'The Fine Print', h1: 'Terms of Use', sub: '', ctas: false })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="prose reveal legal">
      <p class="lead"><strong>Effective Date:</strong> April 22, 2025</p>

      <h2>1. Acceptance of These Terms</h2>
      <p>These Terms of Use (the “Terms”) govern your access to and use of the website of ${esc(SITE.legalName)} (“Norton Equipment,” “we,” “us,” or “our”), located at ${esc(SITE.baseUrl.replace('https://', ''))}, and any related content, services, and communications (collectively, the “Services”). By accessing or using the Services, you agree to be bound by these Terms and by our <a href="/privacy-policy/">Privacy Policy</a>. If you do not agree, please do not use the Services.</p>

      <h2>2. Who We Are</h2>
      <p>Norton Equipment Co. sells, services, and refurbishes commercial trash compactors, balers, and recycling equipment across the Mid-South. Information on this website is provided for general informational purposes and does not constitute a binding offer, quote, or warranty unless confirmed by us in writing.</p>

      <h2>3. Use of the Services</h2>
      <p>You agree to use the Services only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Services by, any third party. You agree not to:</p>
      <ul>
        <li>Use the Services in violation of any applicable law or regulation.</li>
        <li>Attempt to gain unauthorized access to any portion of the Services, other accounts, or any systems or networks connected to the Services.</li>
        <li>Introduce viruses, malware, or other harmful code, or otherwise interfere with the proper working of the Services.</li>
        <li>Copy, scrape, harvest, or collect information about other users, or use automated means to access the Services without our permission.</li>
      </ul>

      <h2>4. Quotes, Pricing, and Availability</h2>
      <p>Product descriptions, specifications, pricing, and availability shown on this website are subject to change without notice and may contain errors. Any quote we provide is an estimate based on the information available to us and is not binding until confirmed in a written agreement or invoice. Equipment sizing and recommendations are guidance, not guarantees, and depend on the accuracy of the information you provide.</p>

      <h2>5. Communications Consent</h2>
      <p>When you submit a form, call, or text us, you consent to receive communications from us related to your request, including phone calls, email, and SMS text messages, as described in our <a href="/privacy-policy/">Privacy Policy</a>. Message frequency depends on your activity. You may opt out of SMS messages at any time by replying “STOP.” Message and data rates may apply. Consent to marketing messages is not a condition of any purchase.</p>

      <h2>6. Intellectual Property</h2>
      <p>All content on this website, including text, graphics, logos, images, and the “Norton Equipment Co.” name and marks, is owned by or licensed to us and is protected by applicable intellectual property laws. You may view and print content for your own personal, non-commercial use. You may not otherwise reproduce, distribute, modify, or create derivative works from our content without our prior written permission.</p>

      <h2>7. Third-Party Links</h2>
      <p>The Services may contain links to third-party websites or resources. We provide these links for convenience only and do not endorse and are not responsible for the content, products, or practices of any third-party sites. Your use of third-party websites is at your own risk and subject to their terms.</p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>The Services are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement, regarding the website and its content. We do not warrant that the Services will be uninterrupted, error-free, or free of harmful components. This section does not affect any separate written warranty we may provide with equipment or services we sell.</p>

      <h2>9. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, Norton Equipment and its owners, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or relating to your use of, or inability to use, the Services, whether based on warranty, contract, tort, or any other legal theory.</p>

      <h2>10. Indemnification</h2>
      <p>You agree to indemnify and hold harmless Norton Equipment and its owners, employees, and agents from any claims, damages, liabilities, and expenses (including reasonable attorneys' fees) arising out of your use of the Services or your violation of these Terms.</p>

      <h2>11. Governing Law</h2>
      <p>These Terms are governed by the laws of the State of Mississippi, without regard to its conflict-of-laws principles. Any dispute arising out of or relating to these Terms or the Services will be subject to the exclusive jurisdiction of the state and federal courts located in Mississippi.</p>

      <h2>12. Changes to These Terms</h2>
      <p>We may update these Terms from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the Services after changes are posted constitutes your acceptance of the revised Terms.</p>

      <h2>13. Contact Us</h2>
      <p>If you have questions about these Terms, you may contact us using the information below.</p>
      <p>
        ${esc(SITE.legalName)}<br>
        ${esc(SITE.address.street)}, ${esc(SITE.address.city)}, ${esc(SITE.address.state)} ${esc(SITE.address.zip)}<br>
        <a href="mailto:${esc(SITE.emailCc)}">${esc(SITE.emailCc)}</a><br>
        <a href="${SITE.phoneHref}">${esc(SITE.phone)}</a>
      </p>
    </div>
  </div>
</section>`;
  out('terms/index.html', layout({
    path: '/terms/',
    title: 'Terms of Use | Norton Equipment',
    desc: 'Terms of Use for the Norton Equipment Co. website: acceptable use, communications consent, disclaimers, and limitation of liability.',
    body,
    ld: [ldBreadcrumbs(crumbs)],
    noCta: true,
  }));
}

function buildAccessibility() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Accessibility', href: '/accessibility/' }];
  const body = `
${pageHero({ crumbs, kicker: 'The Fine Print', h1: 'Accessibility Statement', sub: '', ctas: false })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="prose reveal legal">
      <p class="lead">${esc(SITE.legalName)} is committed to making its website accessible to everyone, including people with disabilities. We want every visitor to be able to find information about our equipment and services and to reach us easily.</p>

      <h2>Our Standard</h2>
      <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, which are the standards referenced by the Americans with Disabilities Act (ADA). These guidelines explain how to make web content more accessible for people with a wide range of disabilities, including visual, hearing, cognitive, and motor impairments.</p>

      <h2>What We Have Done</h2>
      <p>Steps we have taken on this website include:</p>
      <ul>
        <li>Semantic, structured HTML with a “Skip to content” link and clear heading order.</li>
        <li>Text and interface colors chosen to meet AA contrast ratios.</li>
        <li>Descriptive alternative text for meaningful images.</li>
        <li>Labeled forms with clear instructions and status messages.</li>
        <li>Full keyboard operability, with a visible focus indicator for keyboard users.</li>
        <li>Support for the operating system's “reduce motion” setting, which pauses non-essential animation.</li>
        <li>Responsive layouts that work across phones, tablets, and desktops.</li>
      </ul>

      <h2>Ongoing Effort</h2>
      <p>Accessibility is an ongoing effort rather than a one-time task. We review new content and features as they are added and work to correct issues we become aware of. Some content provided by third parties may not be fully under our control.</p>

      <h2>Need Help or Found a Problem?</h2>
      <p>If you have trouble using any part of this website, or if you would like information in a different format, please tell us. We will do our best to help and to fix the issue.</p>
      <p>
        ${esc(SITE.legalName)}<br>
        ${esc(SITE.address.street)}, ${esc(SITE.address.city)}, ${esc(SITE.address.state)} ${esc(SITE.address.zip)}<br>
        <a href="mailto:${esc(SITE.emailCc)}">${esc(SITE.emailCc)}</a><br>
        <a href="${SITE.phoneHref}">${esc(SITE.phone)}</a>
      </p>
      <p>When you contact us, please describe the page and the problem so we can respond as quickly as possible.</p>
    </div>
  </div>
</section>`;
  out('accessibility/index.html', layout({
    path: '/accessibility/',
    title: 'Accessibility Statement | Norton Equipment',
    desc: 'Norton Equipment Co. is committed to WCAG 2.1 AA accessibility. Learn what we have done and how to report an accessibility issue.',
    body,
    ld: [ldBreadcrumbs(crumbs)],
    noCta: true,
  }));
}

function build404() {
  const body = `
<section class="sec sec-dark" style="min-height:60vh;display:flex;align-items:center">
  <div class="wrap center">
    <span class="eyebrow" style="justify-content:center">Error 404</span>
    <h1 style="font-size:clamp(40px,8vw,90px);text-transform:uppercase;margin:18px 0">Page not <span style="color:var(--gold)">found.</span></h1>
    <p style="max-width:520px;margin:0 auto 34px;color:var(--silver)">Looks like this page got hauled off. Try the equipment lineup, the service list, or just call us, a human beats a 404 every time.</p>
    <div class="close-cta" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
      <a href="/" class="btn btn-gold">Back to Home <span class="arw">→</span></a>
      <a href="${SITE.phoneHref}" class="btn btn-ghost">Call ${esc(SITE.phone)}</a>
    </div>
  </div>
</section>`;
  const html = layout({ path: '/404.html', title: 'Page Not Found | Norton Equipment', desc: 'Page not found.', body, noCta: true });
  writeFileSync(join(ROOT, '404.html'), html);
}

// ============================================================
// BLOG
// ============================================================
function buildBlog() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }];
  const card = (p, i, base) => `
    <a class="post-card reveal" data-d="${(i % 3) + 1}" href="${base}${p.slug}/">
      ${p.img ? `<span class="pc-img"><img src="/assets/img/${p.img}.webp"${srcsetAttr(p.img, 1500, '(max-width:480px) 100vw, (max-width:960px) 50vw, 33vw')} alt="" loading="lazy"></span>` : '<div class="pc-top" aria-hidden="true"></div>'}
      <div class="pc-body">
        <div class="meta"><span>${p.date}</span><span>${p.readMins} min read</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.excerpt)}</p>
        <span class="go">Read Article ${IC.arrow}</span>
      </div>
    </a>`;
  const cards = POSTS.map((p, i) => card(p, i, '/blog/')).join('');
  const legacyCards = LEGACY_POSTS.map((p, i) => card(p, i, '/')).join('');

  const body = `
${pageHero({
    crumbs,
    kicker: 'Guides · Straight Talk · No Fluff',
    h1: 'The Norton Blog',
    sub: 'Buying guides and honest math for the people who deal with the waste: weighted toward compactors, because that’s where the questions are.',
    ctas: false,
  })}
<section class="sec sec-paper">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">New Guides</span><h2>Start here.</h2></div>
    <div class="grid-3">${cards}</div>
  </div>
</section>
<section class="sec sec-paper-2">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">From the Norton Archive</span><h2>Every article, right where it's always lived.</h2>
      <p>The full library from nortonequipmentco.com, migrated with the exact same web addresses, so every link and search ranking carries over.</p></div>
    <div class="grid-3">${legacyCards}</div>
  </div>
</section>`;

  out('blog/index.html', layout({
    path: '/blog/',
    title: 'Blog | Compactor & Baler Guides | Norton Equipment',
    desc: 'Buying guides and straight talk on commercial trash compactors, balers, and what waste equipment really costs.',
    body,
    ld: [ldBreadcrumbs(crumbs)],
  }));

  POSTS.forEach((p) => {
    const path = `/blog/${p.slug}/`;
    const crumbs2 = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: p.title, href: path }];
    const others = POSTS.filter((x) => x.slug !== p.slug).slice(0, 3).map((o, i) => `
      <a class="post-card reveal" data-d="${i + 1}" href="/blog/${o.slug}/">
        <div class="pc-top" aria-hidden="true"></div>
        <div class="pc-body">
          <div class="meta"><span>${o.date}</span><span>${o.readMins} min read</span></div>
          <h3>${esc(o.title)}</h3>
          <p>${esc(o.excerpt)}</p>
          <span class="go">Read Article ${IC.arrow}</span>
        </div>
      </a>`).join('');

    const body2 = `
<div class="phero">
  <div class="grid-lines" aria-hidden="true"></div>
  <div class="wrap phero-in">
    ${crumbsHtml([crumbs2[0], crumbs2[1], { label: 'Article', href: path }])}
    <span class="kick">From the Norton Blog</span>
    <h1 style="font-size:clamp(28px,4.4vw,50px);text-transform:none;letter-spacing:0;line-height:1.12;max-width:880px">${esc(p.title)}</h1>
    <div class="post-hero-meta">
      <span>${IC.cal}${p.date}</span>
      <span>${IC.clock}${p.readMins} min read</span>
      <span>${IC.doc}Norton Equipment</span>
    </div>
  </div>
</div>
<div class="hazard" aria-hidden="true"></div>
<article class="sec sec-paper">
  <div class="wrap">
    <div class="prose reveal">${p.body}</div>
  </div>
</article>
<section class="sec sec-paper-2">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Keep Reading</span><h2>More from the blog.</h2></div>
    <div class="grid-3">${others}</div>
  </div>
</section>`;

    out(`blog/${p.slug}/index.html`, layout({
      path,
      title: titleWithBrand(p.title),
      desc: p.metaDesc,
      body: body2,
      ogType: 'article',
      ld: [
        ldBreadcrumbs(crumbs2),
        {
          '@type': 'BlogPosting',
          headline: p.title,
          description: p.metaDesc,
          datePublished: p.date,
          dateModified: p.date,
          url: SITE.baseUrl + path,
          author: { '@type': 'Organization', name: SITE.name },
          publisher: { '@id': SITE.baseUrl + '/#business' },
          mainEntityOfPage: SITE.baseUrl + path,
        },
      ],
    }));
  });
}


function buildLegacyBlog() {
  LEGACY_POSTS.forEach((p) => {
    const path = `/${p.slug}/`;
    const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: p.title, href: path }];
    const others = [...LEGACY_POSTS.filter((x) => x.slug !== p.slug)].slice(0, 3).map((o, i) => `
      <a class="post-card reveal" data-d="${i + 1}" href="/${o.slug}/">
        ${o.img ? `<span class="pc-img"><img src="/assets/img/${o.img}.webp" alt="" loading="lazy"></span>` : '<div class="pc-top" aria-hidden="true"></div>'}
        <div class="pc-body">
          <div class="meta"><span>${o.date}</span><span>${o.readMins} min read</span></div>
          <h3>${esc(o.title)}</h3>
          <p>${esc(o.excerpt)}</p>
          <span class="go">Read Article ${IC.arrow}</span>
        </div>
      </a>`).join('');

    const body = `
<div class="phero${p.img ? ' has-media' : ''}">
  <div class="grid-lines" aria-hidden="true"></div>
  <div class="wrap phero-in">
    <div class="phero-txt">
      ${crumbsHtml([crumbs[0], crumbs[1], { label: 'Article', href: path }])}
      <span class="kick">From the Norton Blog</span>
      <h1 style="font-size:clamp(28px,4.4vw,48px);text-transform:none;letter-spacing:0;line-height:1.12;max-width:880px">${esc(p.title)}</h1>
      <div class="post-hero-meta">
        <span>${IC.cal}${p.date}</span>
        <span>${IC.clock}${p.readMins} min read</span>
        <span>${IC.doc}Norton Equipment</span>
      </div>
    </div>
    ${p.img ? `<div class="phero-media">${photoFig(p.img, p.title, { eager: true, cls: 'kenburns' })}</div>` : ''}
  </div>
</div>
<div class="hazard" aria-hidden="true"></div>
<article class="sec sec-paper">
  <div class="wrap">
    <div class="prose reveal">${p.body}</div>
  </div>
</article>
${phoneStrip('Liked the straight talk? <em>It sounds exactly like our phone calls.</em>')}
<section class="sec sec-paper-2">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Keep Reading</span><h2>More from the blog.</h2></div>
    <div class="grid-3">${others}</div>
  </div>
</section>`;

    out(`${p.slug}/index.html`, layout({
      path,
      title: titleWithBrand(p.title),
      desc: p.metaDesc,
      body,
      ogType: 'article',
      ogImage: p.img ? `/assets/img/${p.img}.webp` : undefined,
      ld: [
        ldBreadcrumbs(crumbs),
        {
          '@type': 'BlogPosting',
          headline: p.title,
          description: p.metaDesc,
          datePublished: p.date,
          dateModified: p.date,
          url: SITE.baseUrl + path,
          ...(p.img ? { image: SITE.baseUrl + `/assets/img/${p.img}.webp` } : {}),
          author: { '@type': 'Organization', name: SITE.name },
          publisher: { '@id': SITE.baseUrl + '/#business' },
          mainEntityOfPage: SITE.baseUrl + path,
        },
      ],
    }));
  });
}

// ============================================================
// SITEMAP & ROBOTS
// ============================================================
function buildMeta() {
  const urls = pagesWritten
    .map((p) => `  <url><loc>${SITE.baseUrl}${p}</loc><lastmod>${BUILD_DATE}</lastmod></url>`)
    .join('\n');
  writeFileSync(join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  writeFileSync(join(ROOT, 'robots.txt'), DRAFT
    ? `# DRAFT SITE, blocked until launch. Update via src/build.mjs (DRAFT flag).\nUser-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\n\nSitemap: ${SITE.baseUrl}/sitemap.xml\n`);
  writeFileSync(join(ROOT, '.nojekyll'), '');
}

// ============================================================
// RUN
// ============================================================
const GENERATED = ['trash-compactors', 'balers-recycling', 'services', 'brands', 'locations', 'about', 'testimonials', 'contact', 'request-a-quote', 'privacy-policy', 'terms', 'accessibility', 'blog', ...LEGACY_POSTS.map((p) => p.slug)];
for (const dir of GENERATED) {
  const p = join(ROOT, dir);
  if (existsSync(p)) rmSync(p, { recursive: true });
}

buildHome();
buildEquipment();
buildServices();
buildBrands();
buildLocations();
buildAbout();
buildTestimonials();
buildQuote();
buildContact();
buildPrivacy();
buildTerms();
buildAccessibility();
buildBlog();
buildLegacyBlog();
build404();
buildMeta();

console.log(`Built ${pagesWritten.length} pages + 404, sitemap.xml, robots.txt (${DRAFT ? 'DRAFT/noindex' : 'PRODUCTION'} mode).`);
