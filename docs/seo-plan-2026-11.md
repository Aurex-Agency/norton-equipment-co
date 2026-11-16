# Norton Equipment SEO plan, November 2026

Prepared November 16, 2026 from Google Search Console (Aug 15 to Nov 14, 2026, compared with the prior 3 months) and GA4 (same window). Approved and implemented the same day on branch `seo/november-2026`; see [the release notes](seo-release-2026-11-16.md) for what shipped and the post-deploy checklist.

## 1. Where traffic stands

### Search Console, last 3 months vs prior 3 months

| Metric | Last 3 months | Prior 3 months |
|---|---|---|
| Clicks | 229 | 15 |
| Impressions | 45,500 | 1,780 |
| Average CTR | 0.5% | 0.8% |
| Average position | 28.3 | 51.5 |

The relaunch is working. Impressions are up roughly 25x and the site now ranks for about 1,000 distinct queries. The problem is conversion of impressions into clicks: most of the volume sits at positions 30 to 65, which is page 3 to 7. Only brand terms and a handful of guides sit on page 1.

### What Google is already showing the site for (non-brand, zero or near-zero clicks)

| Query cluster | Impressions (90 days) | Current position | Best current page |
|---|---|---|---|
| commercial trash compactor / commercial compactor / commercial trash compactors / industrial trash compactor | ~2,060 | 32 to 65 | /trash-compactors/ (1,968 imp, 0.1% CTR, pos 50.7) |
| baler repair / baler service / baler maintenance / baler repair near me / cardboard baler repair near me / baler servicing | ~2,400 | 20 to 40 | /services/baler-service/ (1,944 imp, 0.1% CTR, pos 41) |
| horizontal baler / horizontal balers / horizontal baler for sale / 2 ram baler / two ram balers / closed door baler | ~1,600 | 40 to 72 | /balers-recycling/horizontal-balers/ (1,572 imp, 0% CTR, pos 59) |
| cardboard baler training / cardboard baler safety / baler safety / baler training / compactor safety training / compactor training / cardboard compactor safety | ~1,700 | 14 to 64 | /baler-safety-tips/ (1,972 imp, 0.4%) and /the-safest-way-to-use-a-baler/ (1,200 imp, 0%) |
| vertical baler / vertical balers / vertical cardboard baler / vertical balers for sale | ~900 | 43 to 59 | /balers-recycling/vertical-balers/ (1,285 imp, 0.3%, pos 50) |
| how much does a bale of cardboard weigh / cardboard bale weigh / how much does a cardboard baler weigh | ~380 | 19 to 21 | /cardboard-bale-weight/ (1,214 imp, 0.2%, pos 15.5) |
| commercial trash compactor sizes / trash compactor sizes / trash compactor installation cost / commercial trash compactor price | ~380 | 11 to 25 | /blog/commercial-trash-compactor-buying-guide/ (6,076 imp, 0.4%, pos 15.9) |
| trash compactor repair / commercial trash compactor repair / compactor repair near me | ~900 | 17 to 52 | /trash-compactor-repair-signs/ (1,541 imp, 0%) and /services/compactor-repair/ (871 imp, 0%) |

A deleted URL, /blog/how-much-does-a-baler-cost/, still returns 404 yet earned 123 impressions and 3 clicks at position 19. Google has not given up on it. That is a free ranking to recover.

The conveyor cluster (~900 impressions, plus 2,317 on the old conveyor-service URL) is out of territory (Indianapolis, Fort Wayne, Des Moines, Milwaukee) and Norton does not advertise conveyor work. Ignore it.

### GA4, Aug 15 to Nov 14

| Channel | Sessions | Engagement rate | Avg engagement | Key events |
|---|---|---|---|---|
| Direct | 1,654 | 10.3% | 3s | 46 |
| Organic Search | 377 | 52.5% | 41s | 17 |
| Referral | 25 | 36% | 28s | 0 |
| AI Assistant | 11 | 63.6% | 17s | 1 |

Direct is 80% of sessions and behaves like bots and uptime monitors (3-second sessions, top cities Ashburn, Singapore, Council Bluffs, Frankfurt). Organic is the real audience and it engages well. Organic landing pages are led by the homepage, the compactor hub, the balers hub, and the three guides that rank on page 1 (buying guide, installation guide, baler troubleshooting). The contact page shows 22 key events from 19 sessions, which means phone and quote clicks are being counted as key events alongside submitted leads. That inflates the number and should be fixed in the GA4 account (see section 4).

### Indexing

103 pages indexed, 57 not indexed. The 57 break down as 30 redirects (correct), 4 real 404s, 12 discovered-not-indexed, 9 crawled-not-indexed, and 2 canonical duplicates. Live 404s found: /blog/page/2/, /blog/page/3/, /recycling-equipment/, /blog/how-much-does-a-baler-cost/, and the two September articles (see next point). /vertical-baler-or-horizontal-baler/ was crawled in September and left out of the index despite being 1,300 words; it overlaps the sizing guide and the horizontal baler product page.

### The single biggest finding

The September 25 SEO branch (`codex/seo-updates-9-25`, three commits ahead of main) was never deployed. Live checks today:

- /blog/commercial-baler-maintenance-checklist/ returns 404
- /blog/baler-vs-compactor/ returns 404
- /recycling-equipment/ returns 404
- /resources/ printables return 404

The homepage and blog index on that branch link to these URLs. Deploying the branch is the first step of everything below and costs nothing.

## 2. Four new articles

Each article follows the existing approved-article format in `src/data/blog-approved.mjs`: a 40-word answer summary up top, section navigation, a comparison or data table, FAQs with matching FAQPage schema, BlogPosting schema with Norton as author and publisher, related service links, cited outside sources, and a project-specific inquiry CTA that prefills the quote form. Target 1,800 to 2,500 words each. No em dashes. No invented jobs, customer results, staff credentials, or inventory.

### Article 1: The Cardboard Baler Safety and Operator Training Guide (OSHA, ANSI, and who is allowed to run the machine)

- URL: /blog/cardboard-baler-safety-training-guide/
- Target cluster: cardboard baler training, cardboard baler safety, baler safety, baler training, compactor safety training, compactor training, cardboard compactor safety, how to use a cardboard compactor. About 1,800 impressions a quarter today at positions 14 to 64, with nothing on the site built for it.
- Why it wins: competitors ranking here are training-video vendors and generic safety sites. None of them combine the federal rules, the voluntary standard, the lockout procedure, and a usable training checklist in one place from an equipment dealer.
- Outline:
  1. Answer summary: who may operate a baler, what training must cover, and the three rules that cause most injuries.
  2. The rules that actually apply: no baler-specific OSHA standard exists; ANSI Z245.5 is the voluntary benchmark; OSHA 29 CFR 1910.147 lockout/tagout governs jams and maintenance; 29 CFR 1910.212 machine guarding.
  3. Minors and balers: FLSA Hazardous Occupations Order 12 (29 CFR 570.63). Under 18 may not operate or unload. 16 and 17 year olds may load only when the machine meets the ANSI standard, cannot cycle while loading, and the required notice is posted on the machine. This is the section retail and grocery managers search for and get wrong.
  4. Operator training checklist (table): pre-shift inspection, loading limits, never reaching into the chamber, bale ejection, wire tying, emergency stop, when to stop and call service. Printable companion in /resources/.
  5. Lockout/tagout for jams: the step list, who is authorized, what a non-authorized operator does instead.
  6. Training records: what to keep, how often to retrain, what an inspector asks for.
  7. Compactor-specific notes (chute doors, key switches, container safety) so the article also covers compactor training queries.
  8. FAQs (8): Do you need certification to operate a baler? Can a 17 year old use a cardboard baler? What is ANSI Z245.5? How often should baler training be repeated? Is lockout required to clear a jam? Who posts the DOL notice? What PPE is required? What does OSHA fine for?
- Links out: dol.gov Fact Sheet 57, eCFR 29 CFR 570.63, osha.gov lockout/tagout, osha.gov machine guarding, NIOSH baler fatality reports.
- Links in: baler service, preventive maintenance, vertical balers, equipment evaluations, baler troubleshooting guide, baler maintenance checklist.
- CTA intent: preventive maintenance (safety-system inspection).
- Consolidation: 301 /baler-safety-tips/ (714 words) and /the-safest-way-to-use-a-baler/ (823 words) into this guide. Together they hold 3,172 impressions and 8 clicks. Pooling them into one authoritative URL is the standard play and the content in both is fully covered by the new guide. This is a judgment call and can be skipped if Norton wants the old URLs kept.

### Article 2: How Much Does a Commercial Trash Compactor Cost? (Purchase, installation, rental, and the hauler math)

- URL: /blog/commercial-trash-compactor-cost/
- Target cluster: commercial trash compactor price, trash compactor installation cost, commercial trash compactor cost, how much does a compactor cost, compactor rental cost. It also takes cost intent off the buying guide, whose title currently promises types, sizing, and cost in one page and converts at 0.4%.
- Why it wins: web search for this topic returns residential kitchen compactor prices and municipal fee sheets. There is no good dealer-written commercial cost page. The buying guide already carries approved 2026 price ranges; this article expands them.
- Outline:
  1. Answer summary with the range by type.
  2. Price range table by type: vertical/apartment, self-contained (new and reconditioned), stationary with container, pre-crusher, auger. Use the ranges already approved in the buying guide and state that pricing depends on specification, condition, site prep, delivery, and installation (the language in llms.txt).
  3. What drives the number: yard size, compaction force, tri-voltage power unit, liquid-tight build, remote power unit, steel options (decks, chutes, enclosures).
  4. Installation costs line by line: concrete pad, 3-phase power run and disconnect, chute or doghouse, rigging and delivery, permits. Link the installation guide.
  5. New vs reconditioned vs the hauler's "free" compactor: a 5-year total cost table with a clearly hypothetical example. Link the existing new/used/hauler article.
  6. Monthly savings model: pulls per month before and after, tipping fees, and a payback example labeled hypothetical. Link the hauling-bill article.
  7. Rental and lease: when it makes sense.
  8. FAQs (8): How much is a 30-yard self-contained compactor? What does it cost to install? Is a used compactor worth it? What does a compactor save per month? Who pays for the pad? Can I keep my hauler? How long does a compactor last? What voltage does it need?
- Links out: EPA WARM or EPA source-reduction page, a manufacturer spec sheet (Marathon), OSHA where relevant.
- Links in: compactor hub, self-contained, stationary, used compactors, steel options, compactor installation guide, buying guide, hauling-bill article, waste stream consultation.
- CTA intent: quote (compactor).

### Article 3: Horizontal Baler Buyer's Guide: Closed-Door, Open-End Auto-Tie, and Two-Ram

- URL: /blog/horizontal-baler-guide/
- Target cluster: horizontal baler, horizontal balers, horizontal baler for sale, horizontal balers for sale, 2 ram baler, two ram balers, closed door baler, downstroke baler vs horizontal. About 1,600 impressions a quarter at positions 40 to 72. The product pages are thin on comparison content, which is what these searchers want before they call.
- Why it wins: current results are manufacturer catalogs (Harmony, American Baler) and a 2011 trade article. A dealer guide that compares the three designs on throughput, labor, footprint, power, wire, and price, with a "when to move up from a vertical" section, is better than anything ranking.
- Outline:
  1. Answer summary: which design fits which volume.
  2. Vertical vs horizontal, in one table: tons per hour, operator time, bale weight, footprint, power, who it fits. Absorbs the old vertical-vs-horizontal post.
  3. Closed-door manual-tie horizontal: how it works, typical bale, who buys it.
  4. Open-end auto-tie: continuous extrusion, conveyor or air feed, wire tier, who buys it.
  5. Two-ram: multi-material, bale density, why it costs more.
  6. Sizing by volume: bales per week, cardboard tonnage, conveyor vs floor feed. Links the sizing guide.
  7. Site requirements: pit or floor level, conveyor pit, 3-phase power, ceiling height, bale handling and forklift.
  8. New, used, and refurbished horizontal balers: what Norton rebuilds in Byhalia, what to inspect. Links used-vs-refurbished guide.
  9. Bale weight and revenue: typical horizontal bale weights and current OCC pricing context. Links bale weight article.
  10. FAQs (8): What is a closed-door baler? What is a two-ram baler used for? How many tons per hour does a horizontal baler process? How much space does one need? Can a horizontal baler run on single-phase power? What wire does an auto-tie baler use? When should I upgrade from a vertical baler? Are used horizontal balers a good buy?
- Links out: manufacturer specifications (MAX-PAK, Marathon, Harmony), Recycling Today baler guide, EPA baler fact sheet.
- Links in: horizontal balers, two-ram balers, vertical balers, used balers, refurbished balers, baling wire, rigging, equipment logistics, sizing guide.
- CTA intent: quote (baler).
- Consolidation: 301 /vertical-baler-or-horizontal-baler/ into this guide. Google crawled it in September and chose not to index it. Its content becomes section 2.

### Article 4: How Much Does a Cardboard Baler Cost? (Vertical, horizontal, used, and refurbished, with what a bale pays back)

- URL: /blog/how-much-does-a-baler-cost/ (the exact URL that currently 404s and still ranks at position 19 with 123 impressions). Republishing at the same path recovers that ranking immediately.
- Target cluster: how much does a baler cost, cardboard baler price, cardboard baler cost, vertical baler price, used baler for sale, refurbished baler cost. Purchase intent, the highest-value traffic on the site.
- Why it wins: nobody with a service territory writes a frank price page. Norton's positioning is straight talk with real math. This article is that positioning in one URL.
- Outline:
  1. Answer summary with the range by class.
  2. Price range table: small vertical (30 inch), standard vertical (60 and 72 inch), closed-door horizontal, open-end auto-tie, two-ram. New vs refurbished vs used as-is. Refurbished at roughly half the cost of new is already approved copy.
  3. What changes the price: bale size and weight, cycle time, motor and hydraulics, auto-tie, controls, safety package, freight and rigging.
  4. Installation and site prep: power, floor, clearance, wire supply. Usually far less than a compactor; say so.
  5. Operating costs: wire per bale, electricity, maintenance program.
  6. Payback: a hypothetical grocery or DC example with bales per week, bale weight, current OCC price per ton, and hauling pulls avoided. Links the hauling-bill article and bale weight article.
  7. Used vs refurbished vs new decision table. Links the used-vs-refurbished guide.
  8. Financing and lease notes, stated generally.
  9. FAQs (8): How much is a vertical cardboard baler? How much is a 72-inch baler? Is a used baler worth it? What does a refurbished baler cost? How much does baling wire cost per bale? Can a baler pay for itself? How long does a baler last? Does Norton buy back balers?
- Links out: Fastmarkets or Recycling Today OCC pricing, manufacturer specs, EPA.
- Links in: vertical balers, horizontal balers, used balers, refurbished balers, baling wire, equipment evaluations, equipment refurbishment, sizing guide, bale weight article.
- CTA intent: used/refurbished options.

Together the four articles target roughly 5,500 impressions a quarter that the site already receives at page 3 to 7, plus purchase-intent terms it does not yet rank for, and they create a linked cluster (safety, cost, horizontal, baler cost) that supports the product and service pages.

## 3. Site-wide SEO updates

### A. Deploy what is already built (day one)

1. Merge `codex/seo-updates-9-25` into main and deploy. That ships two articles, the refreshed sizing guide, the printables, eight commercial-page additions, and five redirects.
2. Add redirects for the remaining live 404s: /blog/page/:n/ to /blog/, /blog/how-much-does-a-baler-cost/ becomes Article 4 (no redirect needed).
3. Verify every redirect returns a single 308 to a 200 page, then run the GSC "Validate fix" on the 404 report.

### B. Title and meta rewrites on the eleven high-impression, low-CTR pages

Current titles are built as "Thing in Memphis & North MS | Norton". That is right for the 31 city pages but wrong for the product and service pages, which Google is showing for national generic queries. Rewrite each to lead with the exact query, add a differentiator, and keep the location in the description. Examples:

| Page | Current title | Proposed title |
|---|---|---|
| /trash-compactors/ | Commercial Trash Compactors in Memphis & North MS \| Norton | Commercial Trash Compactors: Self-Contained, Stationary, Vertical & Auger \| Norton |
| /services/baler-service/ | Baler Repair in Memphis & North Mississippi \| Norton | Baler Repair & Service, Any Brand: Vertical, Horizontal, Two-Ram \| Norton |
| /balers-recycling/horizontal-balers/ | Horizontal Balers \| Memphis & North MS \| Norton Equipment | Horizontal Balers for Sale: Closed-Door, Open-End & Two-Ram \| Norton |
| /balers-recycling/vertical-balers/ | Vertical Cardboard Balers \| Memphis & North MS \| Norton | Vertical Cardboard Balers: 30 to 72 Inch, New & Refurbished \| Norton |
| /balers-recycling/two-ram-balers/ | Two-Ram Balers for Commercial Recycling \| Norton Equipment | Two-Ram Balers: Multi-Material Baling for Recyclers & Plants \| Norton |
| /balers-recycling/baling-wire/ | Baling Wire & Bale Ties \| Memphis & North MS \| Norton | Baling Wire & Bale Ties: Single-Loop, Double-Loop, Boxed Wire \| Norton |
| /services/compactor-repair/ | Compactor Repair in Memphis & North Mississippi \| Norton | Commercial Trash Compactor Repair: Hydraulics, Controls, Structure \| Norton |
| /trash-compactors/stationary/ | Stationary Compactors in Memphis & North MS \| Norton | Stationary Compactors: Sizes, Containers & Dry-Waste Applications \| Norton |
| /blog/commercial-trash-compactor-buying-guide/ | The Commercial Trash Compactor Buying Guide: Types, Sizing, and Cost | Commercial Trash Compactor Buying Guide: Types & Sizes (2 to 40 Yard) |
| /trash-compactor-repair-signs/ | Clear Signs Your Trash Compactor Needs to Be Repaired | 7 Signs Your Commercial Trash Compactor Needs Repair |
| /locations/memphis-tn/ | Trash Compactors & Balers in Memphis, TN \| Norton | Compactor & Baler Sales, Repair & Service in Memphis, TN \| Norton |

Each description is rewritten to under 155 characters with the phone number on service pages.

### C. Content refreshes on pages that already rank on page 2

1. /cardboard-bale-weight/ (1,214 impressions, position 15.5, 0.2% CTR): add a bale weight table by baler size (30, 48, 60, 72 inch vertical; closed-door and auto-tie horizontal; two-ram), a "how much does a cardboard baler weigh" section (107 impressions, position 19), and a 2026 OCC price context paragraph with a source. New title: "Cardboard Bale Weight by Baler Size (and What a Bale Is Worth)".
2. /trash-compactor-repair-signs/ (1,541 impressions, 0 clicks): expand from 885 words to about 1,500, add a symptom table with safe operator response and who to call, link the compactor repair service page and the maintenance checklist, add FAQ schema.
3. /blog/commercial-trash-compactor-buying-guide/ (6,076 impressions, 0.4% CTR): add a dedicated "Compactor sizes" section with a yard-size table (vertical 2 to 6, stationary 2 to 6 with 30 to 40 yard containers, self-contained 20 to 35), compaction ratio rules, and a dumpster-to-compactor conversion table. Move detailed pricing to Article 2 and link it. This targets "commercial trash compactor sizes" (178 impressions at 17.3) and "trash compactor sizes" (83 at 25).
4. /services/baler-service/ and /services/compactor-repair/: add a short "What to have ready when you call" block and a "Brands we service" list that names the brands already on /brands/, so the pages match "baler repair near me" and "cardboard baler repair near me" intent (585 impressions, positions 20 to 35).

### D. Internal linking

1. Every product page under /balers-recycling/ links the horizontal guide, the baler cost article, and the safety guide in its guide block. Every page under /trash-compactors/ links the compactor cost article and the buying guide.
2. The 31 city pages add one sentence each in the baler and compactor sections linking the safety guide and the matching cost article.
3. Homepage guide cards, blog index, and llms.txt list all four new articles.
4. The four articles cross-link each other where natural (safety to cost, horizontal to baler cost, compactor cost to buying guide).

### E. Redirect consolidations

| From | To | Reason |
|---|---|---|
| /baler-safety-tips/ | /blog/cardboard-baler-safety-training-guide/ | 714-word legacy post, fully superseded |
| /the-safest-way-to-use-a-baler/ | /blog/cardboard-baler-safety-training-guide/ | 823-word legacy post, fully superseded |
| /vertical-baler-or-horizontal-baler/ | /blog/horizontal-baler-guide/ | Crawled, not indexed; content absorbed |
| /blog/page/:n/ | /blog/ | Live 404s from the old WordPress pagination |

Redirected posts are removed from the sitemap, blog index, and llms.txt. Any internal link to them is updated to the new target.

### F. Schema and technical

1. New articles ship BlogPosting with author and publisher as the Norton organization, FAQPage from the visible FAQ, BreadcrumbList, and `about` entities for the regulations cited in Article 1.
2. Add `dateModified` to every refreshed page and update sitemap lastmod only on pages that changed.
3. Run the existing `check-site.py` and `test-lead-tracking.mjs` suites before commit. Add the four new slugs to the guide link checks.
4. Submit the sitemap in GSC and request indexing on the four new URLs and the three refreshed URLs after deploy. Run `scripts/indexnow.mjs` after the URLs are live.

### G. Measurement changes (account settings, not code; need account access)

1. In GA4, keep `generate_lead` as the only primary key event. Mark `phone_click` and `quote_click` as secondary or remove key-event status, so the 36 key events in the last 28 days stop being dominated by clicks on the contact page.
2. Add a GA4 internal-traffic or bot filter for the data-center traffic (Ashburn, Singapore, Council Bluffs, Frankfurt) or at least a saved comparison that excludes it, so Direct stops hiding organic performance.
3. Register event-scoped custom dimensions for `traffic_source`, `landing_page`, `interest_type`, and `form_type` (already sent by the site, not yet reportable).
4. Baseline to beat, measured 90 days after deploy: non-brand clicks above 500 a quarter, average position for the eight clusters above into the top 20, organic sessions above 700, organic `generate_lead` above 10.

## 4. What I need from you

1. Approval of the four article topics and URLs as listed.
2. A yes or no on the three post consolidations in section 3E. My recommendation is yes.
3. Approval to merge and deploy the September branch as step one.
4. For the GA4 account changes in 3G, either do them yourself or tell me to do them in the GA4 interface.

## 5. Execution order once approved

1. Merge and deploy the September branch; verify live URLs and redirects.
2. Write the four articles in `src/data/blog-november.mjs` using the approved-article format, with printable companion for the safety checklist.
3. Title and description rewrites, content refreshes, consolidation redirects, internal links, sitemap, llms.txt.
4. Build, run the checks, browser-verify desktop and mobile, commit on a new branch, open the PR.
5. After production deploy: GSC sitemap resubmit, URL inspection and indexing requests, IndexNow, validate the 404 fix.
