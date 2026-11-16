# Norton SEO release — September 25, 2026

Prepared on `codex/seo-updates-9-25`. This is a branch implementation, not a production deployment. No GA4/GSC account settings, Google Drive originals, or business listings were changed in this implementation.

## Content included

| Action | Website URL | Approved source |
|---|---|---|
| New | `/blog/commercial-baler-maintenance-checklist/` | [Maintenance article](https://docs.google.com/document/d/1uAeVDxZoWDq7_Rb9xg05tdJIL2kqLJ6qzW98vWQ8Mz0/edit) |
| New | `/blog/baler-vs-compactor/` | [Comparison article](https://docs.google.com/document/d/1dT1Ad4k20KfuregBHk-j5UksrBo-JOKk6QqB_S3IeWE/edit) |
| Refresh; retain original URL and publication date | `/how-to-choose-the-right-baler/` | [Sizing article](https://docs.google.com/document/d/1cBNl4M4dLPVuVHtl2SYNjTDUOC3ELgWbqOK7YNp2dSA/edit) |

Approved source content was adapted in `src/data/blog-september.mjs`, with answer summaries, comparison content, contextual links, inquiry CTAs, visible FAQs, and matching article/FAQ schema. Added a clearly hypothetical sizing calculation and two printable HTML companions that users can print or save as PDF. Printables use `noindex,follow` and stay outside the sitemap.

Two older maintenance posts now have separate purposes: maintenance's business benefits and operator work habits. Original URLs/publication dates remain. This removes overlapping generic schedules and unsafe maintenance advice from those two articles.

Eight commercial pages gained buying/service planning guidance: baler service, compactor repair, preventive maintenance, the compactor hub, vertical balers, horizontal balers, used balers, and refurbished balers. Internal guide links were updated on relevant pages. Maintenance language now defers to machine instructions and qualified assessment rather than universal service intervals or guaranteed savings.

The MAX-PAK vertical baler example links to [manufacturer specifications](https://maxpakbalers.com/vertical-balers/) and distinguishes bale dimensions from machine footprint. Safety guidance links to [OSHA hazardous-energy control](https://www.osha.gov/control-hazardous-energy). No invented jobs, customer results, staff credentials, equipment inventory, or ratings were added. Answer summaries and explicit relationships support search/AI comprehension; they do not guarantee rankings or citations.

## Redirects

All five are permanent Vercel redirects, targeting existing canonical pages directly:

| Legacy URL | Destination |
|---|---|
| `/service-types/service-repair-parts/` | `/services/baler-service/` |
| `/recycling-equipment/` | `/balers-recycling/` |
| `/about-us/` | `/about/` |
| `/equipment/cardboard-balers-memphis/` | `/balers-recycling/` |
| `/equipment/cardboard-balers-memphis/used-vertical-balers/` | `/balers-recycling/refurbished-balers/` |

The last mapping matches the existing non-Memphis version of that historical used-vertical-baler route. New article URLs join the sitemap, blog, homepage cards, and existing text discovery file. Page content dates reflect the changes; the sizing article retains its historical publication date. Adjust the two new publication dates if release is delayed.

## Measurement and validation

Existing lead tracking remains in place: an accepted form response triggers `generate_lead`; phone clicks are intent events; failed delivery does not count as a lead. Added the `consultation` interest mapping so the comparison article prefills the free waste-stream consultation option. Sizing uses equipment evaluation; maintenance uses preventive maintenance.

- `node src/build.mjs`: 106 indexable pages plus 404, resources, and metadata.
- `python3 scripts/check-site.py`: passed all 106 pages, unique metadata, canonical URLs, sitemap, internal links/fragments/assets, visible FAQs, article/entity schema, and crawler access.
- `node --test scripts/test-lead-tracking.mjs`: 16 passed, including both new article inquiry paths.
- `git diff --check`: passed.
- Browser: desktop article presentation; mobile article and horizontally scrolling comparison table without page-wide overflow; consultation CTA selects the correct form option.
- Production delivery, deployed redirects, Core Web Vitals, and ranking gains are not established by local tests.

## Production release checklist

1. Review and merge/deploy this branch. Check the two new article dates match release timing. Keep preview deployments noindex.
2. Confirm the five legacy routes produce a single permanent redirect to the intended 200 page. Confirm new articles, refreshed sizing guide, printables, canonical tags, and sitemap on the live domain.
3. Submit a clearly identified test inquiry after coordinating its recipient. Confirm email delivery and the corresponding GA4 `generate_lead` event exactly once, with no personal data in analytics. Remove test leads from business reporting. Verify phone-click events separately.
4. In GSC, inspect the new articles, refreshed sizing guide, and priority service pages; request indexing after the production URLs are available. Check the existing canonical sitemap submission before removing any obsolete submission. Retain useful historical diagnostics; do not blanket-remove excluded URLs.
5. Validate fixes for the observed legacy 404s after live redirect confirmation. Recheck old reported errors that already resolve successfully before treating them as current defects.
6. In GA4, confirm `generate_lead` is the primary lead key event; segment organic landing pages, accepted inquiries, and phone intent. Audit the unusually large Direct traffic segment before drawing conversion conclusions.
7. Keep a weekly 28-day comparison and monthly 90-day review: nonbrand clicks, priority page/query positions and CTR, organic engaged sessions, qualified inquiries, and lead quality. Use the GSC generative-AI beta report available in this account and track identifiable AI referrals separately. Neither metric is a complete measure of AI visibility.

## Baseline from the approved audit

| Source / period | Observed baseline |
|---|---|
| GA4, Aug 28–Sep 24 | 714 sessions; 80 organic sessions; 42 engaged organic sessions; 52.5% organic engagement rate |
| GA4, same period | 7 `generate_lead` events: Direct 4, Organic 2, AI referral 1; these are not yet reconciled to qualified leads |
| GSC, Aug 27–Sep 23 | 60 clicks; 10,837 impressions; 0.6% CTR; 36.5 average position |
| GSC generative-AI beta, audit view | 401 impressions across 45 page rows |

Longer-term items require operating input: confirmed project examples and original job photos, factual technician/reviewer information, current inventory, customer review collection, manufacturer/dealer citations, and ongoing article/CTR iteration. No new claims or third-party outreach were fabricated to mark those items complete. Google Drive source synchronization can follow the reviewed branch copy; the client-approved originals remain intact.
