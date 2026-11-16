// Weekly guides, one per Monday, written by the scheduled "norton-weekly-seo"
// task (see docs/weekly-seo-routine.md). Newest first. Same format as
// blog-november.mjs: slug, title, seoTitle, metaDesc, date, readMins, img,
// imgAlt, topic, excerpt, answer, cta{title,text,intent,label}, related[],
// sourcesTitle, sourcesIntro, sources[], body (HTML), faqs[].
//
// House rules: no em dashes; no invented jobs, customers, staff credentials,
// inventory, or ratings; refurbished balers are "roughly half the cost of new";
// used balers are sold as-is; Norton is factory-authorized for MAX-PAK only;
// conveyors are not an advertised service; price figures are planning ranges.
export const WEEKLY_POSTS = [];

// Refreshes to legacy archive posts, merged over the original entries by slug
// (same mechanism as SEPTEMBER_UPDATES and NOVEMBER_UPDATES).
export const WEEKLY_UPDATES = {};

// Pages whose visible content or links changed in a weekly release, with the
// date of that change, for sitemap lastmod. Example:
//   ['balers-recycling/vertical-balers/index.html', '2026-11-23']
export const WEEKLY_UPDATED_PAGES = new Map([]);
