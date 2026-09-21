# Norton Equipment Co. website

Production website for Norton Equipment Co. in Byhalia, Mississippi. A zero-dependency Node generator renders 104 indexable pages plus a noindex 404 into plain HTML at the repository root. Vercel runs the build and serves the site; `/api/contact/` handles inquiries through Resend.

## Build and validation

```bash
node src/build.mjs
python3 scripts/check-site.py
node --test scripts/test-lead-tracking.mjs
python3 -m http.server 8000
```

Use Node 18+ and Python 3. The static local server previews pages but cannot run the contact API. Tests mock the API and analytics; they never send an email.

`VERCEL_ENV=preview` or `development` builds include noindex directives, disallow crawling, and omit analytics. Production builds are indexable. The browser also restricts GA4 loading to the production domain. Always rebuild without the preview environment before committing generated HTML.

## Content and templates

| Path | Purpose |
|---|---|
| `src/site.mjs` | Business identity, contact details, service area, analytics ID |
| `src/build.mjs` | Templates, shared schema, internal links, sitemap, robots |
| `src/data/search.mjs` | Authored search snippets and local planning sections |
| `src/data/equipment.mjs` | Compactor and baler pages |
| `src/data/services.mjs` | Equipment service pages |
| `src/data/brands.mjs` | Supported brands and authorized-dealer distinctions |
| `src/data/cities.mjs` | 31 city pages |
| `src/data/blog-approved.mjs` | Three approved September 2026 articles |
| `src/data/blog.mjs` | Existing commercial compactor guides |
| `src/data/blog-legacy.mjs` | Migrated articles with preserved original URLs |
| `assets/css/site.css` | Design system and responsive article layouts |
| `assets/js/site.js` | Navigation, forms, interaction and lead measurement |
| `api/contact.js` | Inquiry endpoint and delivery configuration |

Edit source modules and rebuild; do not hand-edit generated HTML or minified CSS. Preserve existing URLs and redirects in `vercel.json`. Norton only claims factory authorization for MAX-PAK; used balers are sold as-is, and refurbished balers have a shop warranty subject to written terms. Service scheduling depends on urgency and availability.

## Search and AI discovery

The three new guides cover baler troubleshooting, used versus refurbished balers, and compactor installation. Each includes a concise answer, section navigation, relevant service links, FAQs, and a project-specific contact path. Business identity, service areas, authorship, and WebPage/Service/BlogPosting relationships are available in JSON-LD and reflected in visible content.

The production robots policy permits crawling. Search discovery relies on accessible HTML, accurate information, useful content, and internal links. `llms.txt` is an optional navigation aid, not a requirement or a guarantee of AI citations. Structured data likewise does not guarantee rankings or rich results.

Sitemap `lastmod` uses the later of the shared template date and the page content date. Update dates when content changes; do not refresh them on every build.

`check-site.py` checks every sitemap page for metadata, canonicals, headings, schema identity, visible FAQ consistency, internal links and anchors, local assets, and the new guides' links. It checks production output, not preview output.

## Lead measurement

The existing GA4 tag receives these events on the production domain:

| Event | Meaning |
|---|---|
| `phone_click` | Click on a telephone link; not a completed phone call |
| `quote_click` | Click through to the quote page |
| `lead_form_start` | First input in a form attempt |
| `generate_lead` | Contact API returns success after provider acceptance |
| `lead_form_fallback` | Form could not be accepted and opens an email draft |

A submitted lead is not proof of inbox delivery, a qualified opportunity, or a sale. Invalid forms, honeypot submissions, errors, and mailto fallbacks never fire `generate_lead`. Repeated clicks while sending are ignored.

Custom event properties use page paths and categorical values. Form names, emails, phone numbers, and message text are not sent as custom analytics properties. Entry page and a coarse traffic-source category persist in session storage for up to 30 minutes of inactivity. Referrers and allowlisted `utm_source` values recognize Google, Bing, ChatGPT, Perplexity, Claude, Gemini, and Copilot; missing referrers can appear as direct. These categories do not distinguish all organic and paid traffic. The same entry-page/source context is included in inquiry emails to help sales qualify results.

## Production release and account follow-up

1. Review and merge the branch, then verify the production deployment, redirects, sitemap, robots, and the three article URLs.
2. With the business's permission, perform one identified production inquiry and confirm both intended mailboxes receive it. Mock tests cannot verify Resend credentials or final delivery.
3. In GA4, verify events in DebugView/Realtime and mark `generate_lead` as a key event. Register event-scoped custom dimensions for `traffic_source`, `landing_page`, `interest_type`, and `form_type` if needed for reporting. Keep phone clicks and enhanced-measurement `form_submit` events separate from submitted leads.
4. In Search Console, submit `/sitemap.xml`, inspect the new URLs, and compare non-brand impressions, clicks, landing pages, and inquiries over 28- and 90-day periods. In Bing Webmaster Tools, verify crawl/index status. Run `node scripts/indexnow.mjs` only after the updated URLs and key file are live.
5. Confirm Google Business Profile hours, service categories, address, phone, website URL, and real service coverage. Account settings require account access and are not changed by this repository.
6. Have the sales team track qualified calls/inquiries, quoted opportunities, and won revenue. Evaluate search and AI referrals by those outcomes alongside traffic. AI referral attribution is incomplete when platforms omit referrers.

No rankings, AI citations, or customer volume are guaranteed by a code change. Use the measured baseline and actual inquiries to prioritize the next content updates.
