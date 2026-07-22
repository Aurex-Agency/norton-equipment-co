# Design

Visual system for nortonequipmentco.com. Source of truth: `assets/css/site.css` (tokens in `:root`) and the templates in `src/build.mjs`. Industrial steel-and-gold identity derived from the NEC diamond-plate badge logo, warmed with real shop photography and a serif-italic accent voice.

## Theme

Dark industrial chrome (ink/steel) for the site frame: top bar, header, heroes, footer, CTA bands, and feature sections. Warm light "paper" surfaces for long-form reading: equipment/service/city body copy, blog articles, forms. The alternation is deliberate rhythm: dark sells, light explains. Hazard-stripe dividers (45° ink/gold) mark the seam between registers.

## Colors

Defined as CSS custom properties in `assets/css/site.css`. Hex values are canonical; keep them exactly.

- Ink (page bg, dark sections): `--ink #0a0b0d`, `--ink-2 #0f1116`
- Steel ramp (cards, borders on dark): `--steel-900 #14161c`, `--steel-800 #191c23`, `--steel-700 #22262f`, `--steel-500 #3c424f`, `--line #262b34`
- Silver text ramp (on dark): `--silver-hi #eef1f6` (headings), `--silver #b9c0cb` (body), `--silver-2 #8c94a1` (muted)
- Brand gold (the only accent hue): `--gold #d8a531`, `--gold-hi #f2c95a`, `--gold-deep #a97c1c`, `--gold-soft rgba(216,165,49,.14)`
- Paper surfaces (light sections): `--paper #f4f1ea`, `--paper-2 #e9e5da`, cards `--card #ffffff`, borders `--line-lt #ddd7c9`
- Text on paper: `--ink-on-paper #171512` (headings), `--body-on-paper #45413a` (body), `--muted-on-paper #6a655c` (muted; never for body copy)

Rules: gold is for action and emphasis (CTAs, hover states, kickers, nodes), never for body text on paper. On dark, gold-deep is too dim for text; use `--gold` or `--gold-hi`. Body contrast targets WCAG AA (4.5:1) minimum.

## Typography

Self-hosted woff2 only (`assets/fonts/`), no external requests.

- Display: **Barlow Condensed** 500/600/700. All headings, buttons, nav, kickers, stats. Uppercase for H1/H2/section headings and UI labels; sentence case for card H3s in blog contexts. Letter-spacing: tight-to-neutral on large display (0 to .01em), wide only on small labels (.1-.3em).
- Body: **Source Sans 3** 400/600/700 (+400 italic). 16-17px base in prose, line-height 1.65, max width ~72ch.
- Accent: **Lora italic** 500/600. The "homey" voice, echoing the logo's gold script tagline. Used for: testimonial quote bodies, photo captions, the footer tagline, hero script line, timeline year labels, and `<em>` inside phone strips and section subs. Never for headings or UI chrome.

Hierarchy pattern: gold kicker (Barlow, caps, tracked) → display heading (Barlow, uppercase, clamp scale ≤ ~62px interior / ~100px home hero) → sub paragraph (Source Sans). Section headings carry a 64px gold underline bar that draws in on reveal.

## Iconography & imagery

- Icons: inline stroke SVGs (Feather-style, 2px stroke), gold or context color. No icon fonts, no emoji in UI.
- Logo: real NEC diamond-plate badge (`assets/img/logo-badge.webp`) in chrome; full logo with wordmark + tagline (`logo-full.webp`) on light surfaces only (dark wordmark).
- Photography: real shop/equipment WebP photos in `assets/img/` (balers on the Norton floor, welding sparks, bale yards). Photos render inside `.ph-frame`: clipped top-right corner (26px notch), gold corner fill, hazard-stripe base strip, 1px border, hover zoom, optional Ken Burns drift. Page heroes pair the frame with an offset gold outline (`.phero-media::before`).
- No stock-illustration style, no 3D blobs, no generic icon-in-circle cards.

## Spacing & layout

- Wrap: 1180px (`--wrap`), header 1460px. Section padding `clamp(68px, 9vw, 120px)`.
- Grids: `.grid-2/3/4` collapsing 4→2→1 and 3→2→1 at 960/600px. Header collapses to hamburger at 1260px.
- Radius: 2px buttons/chips, 4-6px cards, 8px finder. Square-ish = industrial; never pill buttons.
- Z-scale: content < mobile-bar (96) < header (100) < dropdowns (110) < progress bar (200).

## Components

- Buttons: `.btn-gold` (gradient gold, shine sweep on hover, magnetic on hero), `.btn-ghost` (steel outline), `.btn-dark`. Arrow glyph `→` slides on hover.
- Phone strip `.phone-strip`: full-width gold band with condensed caps line + phone + quote button; appears mid-page on every long page.
- Mobile action bar `.mobile-bar`: fixed bottom Call + Quote, ≤960px.
- Cards: light `tcard` (gold top-bar draw on hover), dark `dcard` (gold left edge, translate-x hover), quote cards (Lora italic body, gold quote mark, tag chip), post cards (photo or hazard top).
- Machine finder `.finder`: 3-question quiz panel, gold progress dots, result with CTA pair.
- FAQ: `<details>` accordions, gold plus/minus, first item open.
- Timeline `.timeline` (About): gold nodes on a fading rule, Lora year labels.
- Trusted-by strip: Lora "Trusted by" + Barlow caps customer names with gold dots.

## Motion

Ease-out curves only (`--ease`, `--ease-out`); no bounce or elastic. Signature moves: scroll progress bar (gold gradient), kinetic hero headline (line-mask rise), scroll reveals (translateY 34px, staggered ≤6), count-up stats, marquee (brands), Ken Burns on hero photos, mouse-parallax gold bolts (home hero, fine pointers only), magnetic CTAs, 3D card tilt ≤6°, dropdown fade-rise. Everything has a `prefers-reduced-motion` fallback: reveals become visible, animations disabled. Never gate content visibility on JS-triggered classes without the reduced-motion/no-JS fallback path.

## Voice in UI

Straight talk, first person plural, phone-first. Numbers over adjectives ("cuts pickups by two-thirds", not "dramatically reduces"). CTAs are verbs: "Request a Quote", "Call (662) 838-7900", "See the Machine". No em dashes anywhere; use colons, commas, parentheses, or sentence breaks.
