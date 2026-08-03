/* Norton Equipment Co. - site behavior (no dependencies) */
(function () {
  'use strict';

  // hero entrance
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });

  // mobile menu
  var header = document.getElementById('nav');
  var menuBtn = document.getElementById('menuBtn');
  if (menuBtn && header) {
    menuBtn.addEventListener('click', function () {
      var open = header.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // dropdowns: click-to-toggle on touch/mobile, hover handles desktop via CSS
  var mq = window.matchMedia('(max-width: 1260px)');
  function setExpanded(li, on) {
    var t = li.querySelector('a');
    if (t) t.setAttribute('aria-expanded', on ? 'true' : 'false');
  }
  document.querySelectorAll('.nav-links > li').forEach(function (li) {
    var trigger = li.querySelector('a');
    var dd = li.querySelector('.dd');
    if (!dd || !trigger) return;
    trigger.addEventListener('click', function (e) {
      if (mq.matches) {
        e.preventDefault();
        var wasOpen = li.classList.contains('open');
        li.parentElement.querySelectorAll('li.open').forEach(function (o) { o.classList.remove('open'); setExpanded(o, false); });
        if (!wasOpen) { li.classList.add('open'); setExpanded(li, true); }
      }
    });
    // keyboard/desktop: reflect the CSS focus-within disclosure in aria-expanded
    li.addEventListener('focusin', function () { setExpanded(li, true); });
    li.addEventListener('focusout', function (e) {
      if (!li.contains(e.relatedTarget)) setExpanded(li, false);
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-links li.open').forEach(function (o) { o.classList.remove('open'); });
      document.querySelectorAll('.nav-links > li > a[aria-expanded="true"]').forEach(function (a) { a.setAttribute('aria-expanded', 'false'); });
      if (header) header.classList.remove('open');
    }
  });

  // scroll reveal
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // count-up stats
  var nums = document.querySelectorAll('[data-count]');
  if (nums.length && !reduced && 'IntersectionObserver' in window) {
    var nio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        nio.unobserve(en.target);
        var el = en.target, target = parseInt(el.getAttribute('data-count'), 10) || 0;
        var suffix = el.querySelector('.u'), t0 = null, dur = 1400;
        function tick(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var val = Math.round(target * eased);
          el.firstChild.nodeValue = String(val);
          if (p < 1) requestAnimationFrame(tick);
          else el.firstChild.nodeValue = String(target);
        }
        // normalize: text node first, keep .u span
        if (el.firstChild && el.firstChild.nodeType !== 3) el.insertBefore(document.createTextNode('0'), el.firstChild);
        requestAnimationFrame(tick);
        void suffix; // suffix stays in place
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { nio.observe(el); });
  } else {
    // Reduced motion (or no IntersectionObserver): skip the count-up but still
    // show the real figure. Without this the markup's placeholder 0 sticks and
    // the page reads "0 states covered".
    nums.forEach(function (el) {
      var target = el.getAttribute('data-count') || '0';
      if (el.firstChild && el.firstChild.nodeType === 3) el.firstChild.nodeValue = target;
      else el.insertBefore(document.createTextNode(target), el.firstChild);
    });
  }

  // Quote form. Transport seam:
  //   - data-endpoint present  -> POST JSON, show real success/error states (wire at launch)
  //   - otherwise               -> mailto transport, but NEVER silent: the status region
  //                                always tells the user what happened + the phone fallback
  document.querySelectorAll('form[data-quote-form]').forEach(function (form) {
    var statusEl = form.querySelector('[data-form-status]');
    var btn = form.querySelector('button[type="submit"]');
    var phone = form.getAttribute('data-phone') || '(662) 838-7900';

    function setStatus(kind, html) {
      if (!statusEl) return;
      statusEl.hidden = false;
      statusEl.className = 'form-status is-' + kind;
      statusEl.innerHTML = html;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var d = new FormData(form);
      var name = (d.get('Name') || '').toString().trim().split(' ')[0];
      var endpoint = form.getAttribute('data-endpoint');

      if (endpoint) {
        // Real backend path (enabled at launch).
        if (btn) { btn.disabled = true; }
        setStatus('pending', 'Sending your request…');
        var payload = {};
        d.forEach(function (v, k) { if (k !== 'form-name' && k !== 'bot-field') payload[k] = v; });
        fetch(endpoint, {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
        }).then(function (r) {
          if (!r.ok) throw new Error('bad status');
          form.reset();
          setStatus('ok', '<b>Got it' + (name ? ', ' + name : '') + '.</b> A real person will call you back within one business day. Need us sooner? Call <a href="tel:+16628387900">' + phone + '</a>.');
        }).catch(function () {
          setStatus('err', 'Something went wrong on our end. Please call <a href="tel:+16628387900">' + phone + '</a> or email us directly, we don’t want to miss you.');
        }).finally(function () { if (btn) { btn.disabled = false; } });
        return;
      }

      // Interim transport: open the visitor's email app, and say so plainly.
      var lines = [];
      d.forEach(function (v, k) { if (k !== 'form-name' && k !== 'bot-field' && v) lines.push(k + ': ' + v); });
      var subject = encodeURIComponent(form.getAttribute('data-subject') || 'Quote Request - Norton Equipment Website');
      var body = encodeURIComponent(lines.join('\n'));
      var mailto = 'mailto:' + (form.getAttribute('data-mailto') || 'info@nortonequipmentco.com') + '?subject=' + subject + '&body=' + body;
      setStatus('pending', '<b>Opening your email app…</b> Send the draft and we’ll reply within one business day. If nothing opened, call <a href="tel:+16628387900">' + phone + '</a>.');
      window.location.href = mailto;
    });
  });
})();

/* ============================================================
   WOW layer: progress, magnetic, tilt, parallax, machine finder
   ============================================================ */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;

  // scroll progress bar
  var bar = document.getElementById('progress');
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // magnetic buttons
  if (!reduced && finePointer) {
    document.querySelectorAll('[data-magnetic]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) / r.width;
        var y = (e.clientY - r.top - r.height / 2) / r.height;
        el.style.transform = 'translate(' + x * 10 + 'px,' + y * 8 + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  // 3D tilt cards
  if (!reduced && finePointer) {
    document.querySelectorAll('[data-tilt]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
        var ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
        el.style.transform = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-3px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  // hero parallax: photo drifts on scroll, bolts follow the mouse
  var heroPhoto = document.querySelector('[data-parallax-bg]');
  if (heroPhoto && !reduced) {
    document.addEventListener('scroll', function () {
      var y = Math.min(window.scrollY, 900);
      heroPhoto.style.transform = 'translateY(' + y * 0.18 + 'px)';
    }, { passive: true });
  }
  var bolts = document.querySelectorAll('.bolt-float');
  if (bolts.length && !reduced && finePointer) {
    var hero = document.querySelector('.hero');
    hero && hero.addEventListener('mousemove', function (e) {
      var cx = e.clientX / window.innerWidth - 0.5;
      var cy = e.clientY / window.innerHeight - 0.5;
      bolts.forEach(function (b) {
        var d = parseFloat(b.getAttribute('data-depth') || '30');
        b.style.transform = 'translate(' + cx * d + 'px,' + cy * d + 'px) rotate(' + cx * d + 'deg)';
      });
    });
  }

  // ---------- machine finder ----------
  var FINDER = {
    start: 'q1',
    q1: {
      q: 'What does most of your waste look like?',
      opts: [
        { b: 'Wet or food waste', s: 'Grocery, restaurant, hospital, hotel', next: 'r_self' },
        { b: 'Dry cardboard & packaging', s: 'Warehouse, retail, manufacturing', next: 'q2' },
        { b: 'Bulky items', s: 'Pallets, drums, crates, furniture', next: 'r_pre' },
        { b: 'Mixed general trash', s: 'A bit of everything', next: 'q2' }
      ]
    },
    q2: {
      q: 'How much of it, honestly?',
      opts: [
        { b: 'A few yards a week', s: 'Dumpsters fill slowly', next: 'q3' },
        { b: 'Dumpsters fill fast', s: 'Multiple pickups every week', next: 'r_stat' },
        { b: 'It never stops', s: 'High-volume DC or plant, continuous feed', next: 'r_auger' }
      ]
    },
    q3: {
      q: 'How much room do you have?',
      opts: [
        { b: 'Tight or indoors', s: 'Trash room, parking deck, small pad', next: 'r_vert' },
        { b: 'Standard pad or dock', s: 'Room for a container outside', next: 'r_stat_pad' }
      ]
    },
    r_self: { kick: 'Our recommendation', h: 'Self-Contained Compactor', p: 'Wet waste needs a sealed, leak-tight machine. Compactor and container are one welded body, so nothing drips, smells, or draws pests.', url: '/trash-compactors/self-contained/', note: 'High volume? Ask us about self-contained auger units.' },
    r_pre: { kick: 'Our recommendation', h: 'Pre-Crusher Compactor', p: 'Bulky items bridge and jam standard machines. A pre-crusher flattens pallets, drums, and furniture against a hardened hook before compacting.', url: '/trash-compactors/pre-crusher/', note: 'Lots of oversized loads? We will spec the charge chamber to your biggest items.' },
    r_stat: { kick: 'Our recommendation', h: 'Stationary Compactor', p: 'The workhorse for high-volume dry waste. It stays bolted to your pad and packs a detachable receiver container your hauler swaps out.', url: '/trash-compactors/stationary/', note: 'Heavy on cardboard? A <a href="/balers-recycling/vertical-balers/">baler</a> can turn part of that stream into revenue.' },
    r_auger: { kick: 'Our recommendation', h: 'Auger Compactor', p: 'Continuous screw compaction with no cycle time and the heaviest container payloads in the industry. Built for waste that never stops.', url: '/trash-compactors/auger/', note: 'We will confirm the math against a stationary unit on site.' },
    r_vert: { kick: 'Our recommendation', h: 'Vertical / Apartment Compactor', p: 'Real compaction in a footprint a few feet square, feeding standard front-load containers your hauler already lifts.', url: '/trash-compactors/vertical-apartment/', note: 'Chute-fed high-rise? We service and install those systems too.' },
    r_stat_pad: { kick: 'Our recommendation', h: 'Stationary Compactor', p: 'With room on the pad for a receiver container, a right-sized stationary compactor gives you real compaction and the lowest cost per haul, even at modest volume.', url: '/trash-compactors/stationary/', note: 'Just need the right hauler container instead? We supply <a href="/trash-compactors/front-load-rear-load/">front-load and rear-load containers</a> too.' }
  };

  document.querySelectorAll('[data-finder]').forEach(function (root) {
    var trail = [];
    var STEPS = ['q1', 'q2', 'q3'];
    function dots(cur) {
      var isResult = cur.indexOf('r_') === 0;
      return '<div class="fd-dots">' + STEPS.map(function (s, i) {
        var on = isResult || STEPS.indexOf(cur) >= i;
        return '<i class="' + (on ? 'on' : '') + '"></i>';
      }).join('') + '</div>';
    }
    function render(key) {
      var node = FINDER[key];
      var head = '<div class="fd-head"><span class="fd-title">Machine Finder</span>' + dots(key) + '</div>';
      var html;
      if (key.indexOf('r_') === 0) {
        html = head + '<div class="fd-body"><div class="fd-result">' +
          '<div><span class="fr-kick">' + node.kick + '</span><h3>' + node.h + '</h3><p>' + node.p + '</p>' +
          '<p class="fr-note">' + node.note + '</p></div>' +
          '<div class="fr-ctas">' +
          '<a class="btn btn-gold" href="' + node.url + '">See the Machine <span class="arw">→</span></a>' +
          '<a class="btn btn-ghost" href="/request-a-quote/">Get a Quote</a>' +
          '</div></div>' +
          '<button class="fd-back" type="button" data-restart>↺ Start over</button></div>';
      } else {
        html = head + '<div class="fd-body"><div class="fd-q">' + node.q + '</div><div class="fd-opts">' +
          node.opts.map(function (o, i) {
            return '<button class="fd-opt" type="button" data-next="' + o.next + '">' +
              '<span class="fo-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>' +
              '<span><b>' + o.b + '</b><small>' + o.s + '</small></span></button>';
          }).join('') + '</div>' +
          (trail.length ? '<button class="fd-back" type="button" data-back>← Back</button>' : '') +
          '</div>';
      }
      root.innerHTML = html;
      root.querySelectorAll('[data-next]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          trail.push(key);
          render(btn.getAttribute('data-next'));
        });
      });
      var back = root.querySelector('[data-back]');
      back && back.addEventListener('click', function () { render(trail.pop() || 'q1'); });
      var restart = root.querySelector('[data-restart]');
      restart && restart.addEventListener('click', function () { trail = []; render('q1'); });
    }
    render('q1');
  });
})();
