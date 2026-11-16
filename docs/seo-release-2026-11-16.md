# Norton SEO release, November 16, 2026

Implements [the November plan](seo-plan-2026-11.md) on branch `seo/november-2026`, cut from `main`. The unmerged September commit (`c9301b9`, two articles, sizing-guide refresh, printables, commercial-page blocks, redirects) was ported onto current `main` as part of this branch, so merging this one branch ships both releases. Nothing here changes GA4 or GSC account settings.

## New guides (`src/data/blog-november.mjs`)

| URL | Title | Target cluster |
|---|---|---|
| `/blog/cardboard-baler-safety-training-guide/` | Cardboard Baler Safety and Operator Training Guide | cardboard baler training, baler safety, compactor safety training |
| `/blog/commercial-trash-compactor-cost/` | How Much Does a Commercial Trash Compactor Cost? | commercial trash compactor price, installation cost |
| `/blog/horizontal-baler-guide/` | Horizontal Baler Buyer’s Guide: Closed-Door, Open-End Auto-Tie, and Two-Ram | horizontal baler(s), two ram baler, closed door baler |
| `/blog/how-much-does-a-baler-cost/` | How Much Does a Cardboard Baler Cost? | how much does a baler cost, cardboard baler price (recovers a 404 URL still ranking) |

Each has an answer summary, section navigation, comparison tables, eight visible FAQs with FAQPage schema, BlogPosting schema (Norton as author and publisher), cited outside sources, and a prefilled inquiry CTA. The safety guide also carries `about` entities for 29 CFR 570.63, 1910.147, and 1910.212 and a printable operator training checklist at `/resources/baler-operator-training-checklist.html` (noindex, outside the sitemap). Price figures are labeled as planning ranges; the two payback examples are labeled hypothetical. No jobs, customers, staff credentials, inventory, or ratings were invented.

## Refreshed pages

- `/cardboard-bale-weight/`: new title, bale-weight table by baler size, machine-weight table, 2026 OCC price context, handling safety. Original URL and publish date retained.
- `/trash-compactor-repair-signs/`: retitled "7 Signs Your Commercial Trash Compactor Needs Repair", symptom table with operator response and likely cause, FAQ schema. Original URL and publish date retained.
- `/blog/commercial-trash-compactor-buying-guide/`: new "Commercial trash compactor sizes" section with a size table by type and a dumpster-to-compactor conversion table; detailed pricing moved to the cost guide and linked.
- `/services/baler-service/` and `/services/compactor-repair/`: "Brands we service" list linking the brand pages, and a "What to have ready when you call" block on baler service.
- `/how-to-choose-the-right-baler/`: link to the retired vertical-vs-horizontal post now points at the horizontal guide.

## Title and description rewrites (`src/data/search.mjs`)

Generic-query pages now lead with the query instead of "in Memphis & North MS": compactor hub, stationary, vertical balers, horizontal balers, two-ram, baling wire, compactor repair, baler service, Memphis city page. The buying guide and repair-signs post have new titles in their data entries.

## Consolidation redirects (`vercel.json`)

| From | To |
|---|---|
| `/baler-safety-tips/` | `/blog/cardboard-baler-safety-training-guide/` |
| `/the-safest-way-to-use-a-baler/` | `/blog/cardboard-baler-safety-training-guide/` |
| `/vertical-baler-or-horizontal-baler/` | `/blog/horizontal-baler-guide/` |
| `/blog/page/:page/` | `/blog/` |

The three retired posts are filtered out of the build in `src/build.mjs` (`RETIRED_LEGACY`), removed from the sitemap, blog index, and `llms.txt`, and their directories deleted from the repo. The September redirects (`/recycling-equipment/`, `/equipment/cardboard-balers-memphis/` and its sub-path) are included. `/service-types/service-repair-parts/` keeps main's existing target.

## Internal linking

`RELATED_GUIDES` in `src/build.mjs` puts the matching cost guide first on every compactor and baler product page, the horizontal guide on horizontal, two-ram, specialty, logistics, and rigging pages, and the safety guide on the services hub, baler service, preventive maintenance, and vertical balers. All 31 city pages add one paragraph linking the two cost guides and the safety guide. The homepage guide cards, blog index, and `llms.txt` list the four new articles automatically.

## Validation

- `node src/build.mjs`: 111 indexable pages plus 404, resources, sitemap, robots, llms.txt.
- `python3 scripts/check-site.py`: PASS. The approved-article check now covers the four November slugs and the two September slugs, and verifies each consolidated post redirects to a live page and is absent from the build and sitemap.
- `node --test scripts/test-lead-tracking.mjs`: 17 passed.
- `git diff --check`: clean.

## Production checklist

1. Merge and deploy. Confirm the four new URLs, the two September URLs, and the printables return 200 on the live domain.
2. Confirm each redirect above returns a single 308 to a 200 page, including `/blog/page/2/` and `/blog/page/3/`.
3. In GSC: resubmit the sitemap, request indexing on the four new URLs and the three refreshed URLs, and run "Validate fix" on the 404 report.
4. Run `node scripts/indexnow.mjs` with the changed URLs.
5. In GA4 (account settings, not code): keep `generate_lead` as the only primary key event and demote `phone_click` and `quote_click`; add a filter or comparison that excludes the data-center Direct traffic; register the `traffic_source`, `landing_page`, `interest_type`, and `form_type` custom dimensions.
6. Baseline to beat at 90 days after deploy, from the plan: non-brand clicks above 500 a quarter, the eight target clusters inside the top 20, organic sessions above 700, organic `generate_lead` above 10.
