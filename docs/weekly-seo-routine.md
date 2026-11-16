# Weekly SEO routine (Monday mornings)

This is the procedure the scheduled task `norton-weekly-seo` follows every Monday. It runs locally on Kalob's Mac in the Claude desktop app, in a fresh session with no memory of previous runs, so everything it needs is here or in the repo. A human (Kalob, then the client) approves the result by merging the pull request; nothing is published by the routine itself.

Started November 16, 2026, after the four-article November release ([plan](seo-plan-2026-11.md), [release notes](seo-release-2026-11-16.md)).

## Output every Monday

1. **A report** at `docs/reports/YYYY-MM-DD.md` (the Monday date), also pasted as the PR description and summarized in the task's final message. Sections, in order:
   - **Traffic this week.** Search Console last 7 days versus the prior 7 days (clicks, impressions, CTR, average position) and last 28 days versus the prior 28. GA4 organic sessions, engagement rate, and `generate_lead` events for the same windows. Direct traffic is bot and monitor traffic; report it in one line and judge the site on Organic Search only.
   - **What moved.** Top five queries and pages by click gain and loss week over week. Any new page-one rankings. Status of the posts published in the last four weeks (indexed, impressions, position).
   - **What could be improved.** Three to five specific, data-backed items: pages with high impressions and CTR under 1 percent (title or description rewrite), queries with 50 or more impressions and no page built for them (content gap), pages crawled but not indexed, broken or redirected internal links, and anything in the Page indexing report that changed. Each item names the page, the number behind it, and the fix.
   - **This week's post.** Title, URL, target query cluster with its impressions and current position, a two-sentence summary, word count, and the internal links added to it from commercial pages.
   - **Done this week.** Every change in the PR, including the small fixes from the improvement list that were made rather than only recommended.
   - **Waiting on Kalob.** Merge the PR; any GA4 or GSC account setting that needs a human; anything the client has to confirm (a claim, a photo, a price).
2. **One new guide** of 1,500 to 2,500 words in `src/data/blog-weekly.mjs`, in the same format as the November posts (`src/data/blog-november.mjs`), with an answer summary, at least one comparison or data table, six to eight visible FAQs, cited outside sources, a prefilled CTA, and inbound links from at least two commercial pages (`RELATED_GUIDES` in `src/build.mjs`, and where natural a sentence in `src/data/seo-sections.mjs`).
3. **One to three small fixes** from the improvement list that are safe to make without client input: a title or description rewrite in `src/data/search.mjs` or on the post entry, an internal link, a redirect for a live 404, a sitemap correction.
4. **A pull request** from a branch named `seo/weekly-YYYY-MM-DD` against `main`, with the report as its body.

## Procedure

### 0. Setup

- Working directory: `/Users/kalobadair/Desktop/Claude/Clients/norton-equipment-co`.
- `git fetch origin`, then `git checkout -b seo/weekly-YYYY-MM-DD origin/main`. Production deploys from `origin/main`; never compare against the local `main`.
- Read this file, `docs/seo-plan-2026-11.md` (the strategy and the query clusters), the most recent file in `docs/reports/`, and `src/data/blog-november.mjs` (the article format).
- The repo's privacy hook refuses Bash commands that name `src/build.mjs`, `scripts/check-site.py`, `scripts/test-lead-tracking.mjs`, or `src/data/*.mjs`. Run the build and checks through the Terminal panel tool and read those files with the Read tool. Plain git commands and `curl` are fine in Bash.

### 1. Pull the numbers (Claude in Chrome, Kalob is signed in)

Open your own tab group (`tabs_context_mcp` with `createIfEmpty`) and close your tabs when done. Do not change any account setting in either product.

- Search Console: `https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Anortonequipmentco.com`. Set the date filter to last 7 days with "Compare" to the previous period, read the four totals, then the Queries and Pages tabs sorted by clicks and by impressions. Repeat for last 28 days. Then open the Page indexing report and note the not-indexed counts and any new reasons.
- GA4: `https://analytics.google.com/analytics/web/#/p548441565/` (account 403442245, property 548441565). If a different property opens, use the property picker and search "norton". Read Traffic acquisition for the last 7 and 28 days with comparison, and the Landing page report filtered to Organic Search. Key events: count `generate_lead` separately from `phone_click` and `quote_click`.
- Live checks with curl: the four November URLs, the previous weekly posts, and the redirects in `vercel.json` added since November (expect 200s and single 308s).

### 2. Choose the post

Pick one topic, in this order of preference:

1. A query cluster from the plan or from this week's Search Console data with 50 or more impressions, position worse than 15, and no page on the site built for it.
2. The next item in the backlog below that is not yet written.
3. A page-two post (position 11 to 20) that would rank with a substantial rewrite, treated as a refresh via `WEEKLY_UPDATES` instead of a new URL.

Check that no existing post already covers it (`grep -ril` across `src/data/blog*.mjs` and `llms.txt`). If it does, link to it and pick the next topic.

### 3. Write it

Follow the November format exactly. Rules that are not negotiable:

- No em dashes anywhere, in prose, tables, or FAQs.
- No invented jobs, customers, customer results, staff names or credentials, inventory, warranties beyond what the product pages say, ratings, or reviews. Payback and savings examples are labeled hypothetical.
- Refurbished balers are "roughly half the cost of new" and carry a shop warranty. Used balers are sold as-is with no warranty. Norton claims factory authorization for MAX-PAK only. Conveyors and rentals are not advertised services. Emergency service response "depends on urgency and technician availability" at emergency rates.
- Prices are planning ranges that depend on specification, condition, site preparation, delivery, and installation. Reuse the ranges already on the site (compactor buying guide and cost guide, baler cost guide) rather than inventing new ones.
- Safety content defers to the manufacturer's manual, the facility's written procedures, OSHA 1910.147 and 1910.212, ANSI Z245.5, and 29 CFR 570.63 for minors. Operators never reach into a chamber or bypass an interlock.
- Cite public sources (DOL, OSHA, EPA, eCFR, manufacturer specification pages, Recycling Today) in `sources`, with `sourcesTitle` and `sourcesIntro` set for non-safety topics.
- Link to at least three existing guides and two commercial pages inside the body. Add the new slug to `RELATED_GUIDES` on at least two commercial pages in the first three positions (only the first three render). If an existing post gets displaced, make sure it still appears in the first three somewhere, or `check-site.py` fails the inbound-link check.
- Add the slug to the approved-article list in `scripts/check-site.py`.
- Add any page whose visible content or links changed to `WEEKLY_UPDATED_PAGES` with the Monday date.

### 4. Build and check (Terminal panel tool)

```
node src/build.mjs && python3 scripts/check-site.py && node --test scripts/test-lead-tracking.mjs && git diff --check
```

All three must pass. Then start `python3 -m http.server 8787 --bind 127.0.0.1` in a terminal tab, open the new post and any changed page in the built-in browser at desktop and 375 px wide, confirm no horizontal overflow and no console errors, and stop the server.

### 5. Report, commit, PR

- Write `docs/reports/YYYY-MM-DD.md` in the format above.
- Stage with `git add -u` plus the new paths (new `blog/<slug>/` directory, the report, anything else new). Never `git add -A`; the working tree may hold stray untracked copies.
- Commit with a message that says what shipped, ending with `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`. Push and open the PR with `gh pr create --base main`, body = the report, ending with `🤖 Generated with [Claude Code](https://claude.com/claude-code)`. If Bash refuses the commit, write the message and body to files and run the git and gh commands in the Terminal panel tool.
- Final message to Kalob: the report's traffic table, the three to five improvement items, the post title and PR link, and what is waiting on him.

### 6. Follow up on last week

If posts or fixes were merged to `origin/main` since the last report, do the post-deploy work for them: confirm the URLs return 200 live, run `node scripts/indexnow.mjs <paths>` in the terminal, and in Search Console use URL inspection to request indexing on each new URL. Note what was done in the report.

## Topic backlog (from the November Search Console pull; re-rank with fresh data each week)

| Priority | Working title | URL slug | Cluster and evidence |
|---|---|---|---|
| 1 | Vertical Baler Buyer's Guide: 30 to 72 Inch, What Size, What It Costs to Run | `vertical-baler-buyers-guide` | vertical baler / vertical balers / vertical cardboard baler / vertical balers for sale, about 900 impressions a quarter at positions 43 to 59; product page converts at 0.3 percent |
| 2 | Compactor Safety Training: Chute Doors, Key Switches, and Who May Operate | `compactor-safety-training-guide` | compactor safety training / compactor training / how to use a cardboard compactor, about 300 impressions; the baler safety guide covers it in one section only |
| 3 | Baler Repair Near Me: What a Service Call Costs and What to Expect | `baler-repair-service-call-guide` | baler repair / baler repair near me / cardboard baler repair near me, about 2,400 impressions at positions 20 to 40; the service page is the only target |
| 4 | How to Sell Baled Cardboard: Finding a Buyer, Grades, and What Mills Pay | `how-to-sell-baled-cardboard` | OCC price, sell cardboard bales, cardboard recycling for business; supports the baler cost and bale weight guides |
| 5 | Baling Wire Gauge and Length Chart by Baler Size | `baling-wire-gauge-chart` | baling wire gauge, bale tie length, 60 inch baler wire; baling wire page has 1,044 impressions and no clicks |
| 6 | Self-Contained Compactor Installation Requirements | `self-contained-compactor-installation` | self-contained compactor installation, compactor pad requirements, compactor electrical requirements |
| 7 | Commercial Compactor Maintenance Cost and What a PM Visit Includes | `compactor-maintenance-cost` | compactor maintenance cost, compactor service contract |
| 8 | Baler Hydraulic Problems: Slow Ram, Drift, Leaks, and What They Mean | `baler-hydraulic-problems` | baler hydraulic problems, baler ram slow, baler won't cycle; extends the troubleshooting guide |
| 9 | Trash Compactor for a Grocery Store: Sizing the Wet and Dry Streams | `grocery-store-trash-compactor` | grocery store compactor, supermarket baler and compactor; strongest local industry on city pages |
| 10 | Should You Rent or Lease a Compactor or Baler? | `rent-or-lease-compactor-baler` | compactor rental cost, baler rental; Norton does not advertise rental, so the post explains the lease math and points to reconditioned equipment |
| 11 | Two-Ram Baler Buyer's Guide | `two-ram-baler-guide` | 2 ram baler / two ram balers, about 450 impressions; covered as a section in the horizontal guide, worth its own page once that guide is indexed |
| 12 | What Is a Stationary Compactor? Receiver Containers, Pulls, and Who Uses One | `what-is-a-stationary-compactor` | stationary compactor, stationary compactor vs self contained; the product page sits at 933 impressions and no clicks |

## Standing items that need Kalob or the client

- GA4: make `generate_lead` the only primary key event and demote `phone_click` and `quote_click`; add a filter or saved comparison excluding the data-center Direct traffic (Ashburn, Singapore, Council Bluffs, Frankfurt); register `traffic_source`, `landing_page`, `interest_type`, and `form_type` as custom dimensions.
- Client-supplied material that would strengthen the content: real job photos with permission, confirmed project examples, current refurbished inventory, named technician experience, and recent reviews. Do not add any of these without confirmation.
