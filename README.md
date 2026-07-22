# Norton Equipment Co. - Website

The production website for **Norton Equipment Company** (Byhalia, MS), built by
**Aurex Agency** per the approved *Rebuild + Market Domination* plan. This is the
**full-site draft**: 100 pages, compactors leading, balers kept strong, city
pages across the confirmed 100-mile ring, and all 24 legacy blog posts migrated
1:1 for the domain takeover.

## Stack

Zero-dependency static site. A small Node generator (`src/build.mjs`) renders
every page from content data modules into plain HTML at the repo root - no
framework, no npm install, no external requests at runtime (fonts self-hosted).
That's the whole speed story: static HTML + one CSS file + ~2 KB of JS.

```bash
node src/build.mjs   # regenerate the site (Node 18+)
python3 -m http.server 8000   # preview locally
```

## Where things live

| Path | What it is |
|---|---|
| `src/site.mjs` | NAP, phone, hours, **canonical domain**, draft email |
| `src/data/equipment.mjs` | All compactor + baler/recycling page content |
| `src/data/services.mjs` | The nine service pages |
| `src/data/brands.mjs` | Marathon, Cram-A-Lot, Max-Pak, Harris/Selco |
| `src/data/cities.mjs` | 30 city pages (100-mile ring), unique copy per town |
| `src/data/blog.mjs` | The five new compactor-weighted articles |
| `src/data/blog-legacy.mjs` | All 24 posts migrated from the current WP site (slugs preserved at root) |
| `src/data/testimonials.mjs` | Real customer reviews migrated from the current site |
| `src/build.mjs` | Templates, JSON-LD schema, sitemap/robots, `DRAFT` flag |
| `assets/` | CSS design system, JS, self-hosted fonts, NEC badge |

Generated output (do not hand-edit; re-run the build instead): `index.html`,
`trash-compactors/`, `balers-recycling/`, `services/`, `brands/`, `locations/`,
`blog/`, `about/`, `testimonials/`, `contact/`, `request-a-quote/`,
`privacy-policy/`, `404.html`, `sitemap.xml`, `robots.txt`.

## Site map (76 pages)

- **Home** - compactors + balers dual path, trust strip, full lineups
- **Trash Compactors (10)** - hub + self-contained, stationary, vertical/apartment,
  pre-crusher, auger, front/rear-load, enclosures, used, rental
- **Balers & Recycling (8)** - hub + vertical, horizontal, used vertical,
  shredders, conveyors, baling wire, used recycling equipment
- **Services (10)** - hub + compactor repair, baler service, preventive
  maintenance, evaluations, refurbishment, welding & fabrication, conveyor
  service, logistics, waste stream consultations
- **Brands (5)** - hub + 4 brand pages (no "authorized dealer" claims - see below)
- **Locations (31)** - hub + 30 city pages: 12 TN, 12 MS, 6 AR
- **Blog (30)** - index + 5 new guides + 24 legacy posts at their original
  root-level URLs (e.g. `/how-to-choose-the-right-baler/`), each with its
  original image, so rankings and links survive the domain move
- About, Testimonials, Contact, Request a Quote, Privacy, 404

Every page: canonical + OG tags, LocalBusiness/Service/FAQ/Breadcrumb/BlogPosting
JSON-LD as appropriate, breadcrumbs, sticky Request-a-Quote CTA, click-to-call
everywhere (mobile FAB included).

## Client decisions still pending (from the companion sheet)

1. **Compactor/baler types they actually carry** - all plan-listed pages were
   built; delete entries from `equipment.mjs` if the client drops any.
2. **Brand list + factory-authorized status** - copy currently claims only
   sell/service/repair/parts (safe). If Norton confirms authorized-dealer status
   for a brand, strengthen that page's copy (`brands.mjs` has a note).
3. **Service radius beyond 100 miles** - the 100-200 mile ring (Tupelo, Little
   Rock, Paducah, etc.) is not built yet; add cities to `cities.mjs` when the
   radius is set.
4. **Sales vs. service radius split** - city pages currently assume both.

## Launch checklist

- [ ] Set the real production domain in `src/site.mjs` (`baseUrl`) and confirm `email`
- [ ] Flip `DRAFT = false` in `src/build.mjs` → removes `noindex`, opens robots.txt
- [ ] Wire the forms: they're Netlify-forms-ready out of the box; on other hosts
      swap in a form backend (until then they fall back to a mailto: draft)
- [ ] Add real photography (facility, techs, machines) - layout is image-light by
      design but hero/about slots will take photos well
- [ ] Google Analytics / Search Console + Google Business Profile work (off-site
      scope from the plan)
- [ ] Rebuild (`node src/build.mjs`) and deploy

## SEO for the domain takeover

`vercel.json` carries 301 redirects for every old URL whose structure changed
(`/equipment/*`, `/service-types/*`, state pages, `/about-norton-equipment/`,
`/contact-us/`). Blog posts kept their exact original URLs, so they need no
redirects at all. When the domain moves, nothing 404s and link equity carries.

## Deploy

Any static host. Netlify/Vercel/Cloudflare Pages: point at the repo root, no
build command needed (or use `node src/build.mjs` as the build command for
auto-rebuilds). GitHub Pages: serve root (`.nojekyll` included).
