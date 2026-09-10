#!/usr/bin/env node
// Submit changed URLs to IndexNow (Bing, Yandex, Naver, Seznam share the index).
// Usage:
//   node scripts/indexnow.mjs                 # every URL in sitemap.xml
//   node scripts/indexnow.mjs /blog/ /about/  # specific paths
// Run after a production deploy; the key file must already be live at /<key>.txt.
import { readFileSync } from 'node:fs';
import { SITE } from '../src/site.mjs';

const host = new URL(SITE.baseUrl).host;
const args = process.argv.slice(2);
const urls = args.length
  ? args.map((p) => SITE.baseUrl + p)
  : [...readFileSync(new URL('../sitemap.xml', import.meta.url), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key: SITE.indexNowKey, keyLocation: `${SITE.baseUrl}/${SITE.indexNowKey}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urls.length} URL(s)`);
if (!res.ok) process.exit(1);
