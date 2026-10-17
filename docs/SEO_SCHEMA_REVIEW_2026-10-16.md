# SEO and schema review, 2026-10-16

Removed undocumented $$$ priceRange in the site generator and regenerated all checked-in HTML. Existing equipment, service and buyer-guide content remains intact.

Based on the verified Vercel production source `main` at `43cd78b03c84`. Reviewed existing SEO work before making this focused follow-up.

Validation: site generation; scripts/check-site.py; lead tracking tests. The built-page validator parsed 105 JSON-LD blocks across 105 HTML files using the official Schema.org vocabulary and found no issues in the implemented checks. Representative homepage checks at desktop and mobile widths found no horizontal overflow, with primary conversion paths present. No production lead was submitted.

Remaining dependencies: Verify equipment availability, condition and real project evidence for future buyer content.

This PR is independently reviewable. After release, recrawl production and recheck Search Console; local validation does not guarantee Google indexing or rich-result display.

Also redirect confirmed legacy /about-us/ and /service-types/service-repair-parts/ 404s to /about/ and the current service hub. The source URLs returned 404 in a live check on 2026-10-16; all replacement destinations returned 200.
