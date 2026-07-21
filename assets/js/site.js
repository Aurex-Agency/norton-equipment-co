/* Norton Equipment Co. — site behavior (no dependencies) */
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
  document.querySelectorAll('.nav-links > li').forEach(function (li) {
    var trigger = li.querySelector('a');
    var dd = li.querySelector('.dd');
    if (!dd || !trigger) return;
    trigger.addEventListener('click', function (e) {
      if (mq.matches) {
        e.preventDefault();
        var wasOpen = li.classList.contains('open');
        li.parentElement.querySelectorAll('li.open').forEach(function (o) { o.classList.remove('open'); });
        if (!wasOpen) li.classList.add('open');
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-links li.open').forEach(function (o) { o.classList.remove('open'); });
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
  }

  // quote form: mailto fallback until a form backend / Netlify is wired up.
  // Forms carry data-netlify attributes so they work automatically on Netlify.
  document.querySelectorAll('form[data-quote-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var isNetlify = /netlify/.test(document.documentElement.getAttribute('data-host') || '');
      if (isNetlify) return; // let Netlify handle it
      e.preventDefault();
      var d = new FormData(form);
      var lines = [];
      d.forEach(function (v, k) { if (k !== 'form-name' && v) lines.push(k + ': ' + v); });
      var subject = encodeURIComponent(form.getAttribute('data-subject') || 'Quote Request — Norton Equipment Website');
      var body = encodeURIComponent(lines.join('\n'));
      window.location.href = 'mailto:' + (form.getAttribute('data-mailto') || 'info@nortonequipmentco.com') + '?subject=' + subject + '&body=' + body;
    });
  });
})();
