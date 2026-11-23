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

const table = (caption, headers, rows) => `<div class="article-table" role="region" aria-label="${caption}" tabindex="0"><table><caption>${caption}</caption><thead><tr>${headers.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, i) => (i ? `<td>${cell}</td>` : `<th scope="row">${cell}</th>`)).join('')}</tr>`).join('')}</tbody></table></div>`;

const PRICE_NOTE = '<p><em>About these numbers:</em> they are planning ranges drawn from what commercial equipment typically sells for, not a quote. Every Norton quote depends on the exact specification, condition, site preparation, delivery, and installation. Call <a href="tel:+16628387900">(662) 838-7900</a> for a number tied to your machine and your site.</p>';

export const WEEKLY_POSTS = [
  // ------------------------------------------------------------------
  // 2026-11-23: vertical baler buyer's guide (backlog item 1)
  // ------------------------------------------------------------------
  {
    slug: 'vertical-baler-buyers-guide',
    title: 'Vertical Baler Buyer’s Guide: 30 to 72 Inch, What Size You Need, and What It Costs to Run',
    seoTitle: 'Vertical Baler Buyer’s Guide: 30 to 72 Inch Sizes & Costs | Norton',
    metaDesc: 'How to choose a vertical cardboard baler: 30, 42, 60, and 72 inch sizes compared on bale weight, volume, power, space, price, and running cost, plus what to check before you buy.',
    date: '2026-11-23',
    readMins: 11,
    img: 'n-vertical-balers',
    imgAlt: 'New vertical cardboard balers lined up for delivery at Norton Equipment',
    topic: 'Vertical balers',
    excerpt: 'The four common vertical baler sizes compared on bale weight, volume, power, space, and price, how to size one from your own cardboard, and what it costs to run.',
    answer: 'Most businesses that need a vertical baler need a 60 inch machine: it makes 600 to 1,000 pound bales, runs on single-phase power in many models, and handles a few bales a week up to several a day. Smaller 30 to 42 inch machines suit tight back rooms with light volume. A 72 inch high-density baler makes mill-size bales for sites that sell OCC or produce over roughly 10 tons a month. New verticals run about $6,000 to $20,000; refurbished cost roughly half of new.',
    cta: {
      title: 'Get the right size the first time.',
      text: 'Tell Norton how much cardboard you produce, where the baler would go, and what power is there. We will recommend a chamber size and quote new and refurbished side by side, installed.',
      intent: 'baler',
      label: 'Size and price a vertical baler',
    },
    related: [
      { href: '/balers-recycling/vertical-balers/', label: 'Vertical balers' },
      { href: '/balers-recycling/refurbished-balers/', label: 'Refurbished balers' },
      { href: '/balers-recycling/used-balers/', label: 'Used balers' },
      { href: '/balers-recycling/baling-wire/', label: 'Baling wire' },
      { href: '/services/baler-service/', label: 'Baler service and repair' },
      { href: '/services/equipment-logistics/', label: 'Delivery and installation' },
      { href: '/how-to-choose-the-right-baler/', label: 'What size baler do I need?' },
    ],
    sourcesTitle: 'Further reading',
    sourcesIntro: 'Manufacturer specifications govern the machine you are quoted. For the rules and background referenced in this guide:',
    sources: [
      { url: 'https://maxpakbalers.com/vertical-balers/', label: 'MAX-PAK vertical baler specifications (Norton is a factory-authorized MAX-PAK dealer)' },
      { url: 'https://www.ecfr.gov/current/title-29/subtitle-A/chapter-V/subchapter-A/part-570/subpart-E/section-570.63', label: 'eCFR, 29 CFR 570.63: minors and paper balers and compactors' },
      { url: 'https://www.osha.gov/control-hazardous-energy', label: 'OSHA, control of hazardous energy (lockout/tagout, 29 CFR 1910.147)' },
      { url: 'https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling', label: 'U.S. EPA, Facts and figures about materials, waste and recycling' },
    ],
    body: `<h2>Who this guide is for</h2>
<p>You are paying for cardboard dumpster pulls, or your back room is full of flattened boxes, and someone has said the word baler. A vertical baler is the machine most stores, restaurants, hotels, schools, and warehouses end up with: a steel chamber about the size of a doorway that an operator loads from the front, compresses with a hydraulic ram from above, ties with wire, and ejects as a finished bale. The catalog question is which one. Vertical balers come in chamber widths from about 30 to 72 inches, and the wrong size costs you either floor space and money you did not need to spend, or a machine that cannot keep up.</p>
<p>Norton has sold, installed, and serviced vertical balers across Memphis and the Mid-South since 1997, and rebuilds them in our Byhalia shop. This guide walks through the sizes, how to match one to your volume, what the machine needs from your building, what it costs to buy and to run, and what to check before you sign.</p>

<h2>Vertical baler sizes compared</h2>
<p>Vertical balers are named by the width of the bale chamber. Width sets the bale size, the bale size sets the bale weight, and the bale weight decides whether a recycler will pay for it, haul it free, or charge you. Here are the four common classes.</p>
${table('Vertical baler sizes compared', ['Chamber size', 'Typical bale weight', 'Fits about this much cardboard', 'Power', 'Typical new price', 'Who it fits'], [
  ['30 inch', 'About 100 to 300 pounds', 'A few bales a week; light, steady volume', 'Usually single-phase', 'About $6,000 to $10,000 (small class)', 'Convenience stores, small restaurants, offices, tight back rooms'],
  ['42 inch', 'Up to roughly 500 pounds', 'Several bales a week', 'Single-phase on many models', 'About $6,000 to $10,000 (small class)', 'Pharmacies, smaller retail, light manufacturing, schools'],
  ['60 inch', 'About 600 to 1,000 pounds', 'A few bales a week up to several a day', 'Many run 208 to 230 volt single-phase; three-phase options', 'About $9,000 to $15,000', 'Grocery, big-box and mid-size retail, hotels, warehouses, most manufacturers'],
  ['72 inch high-density', 'About 750 to 1,100 pounds, mill-size', 'Heavy daily volume, roughly up to 15 tons a month', 'Often three-phase', 'About $14,000 to $20,000 or more with options', 'Distribution and high-volume retail sites that sell bales by the ton'],
])}
${PRICE_NOTE}
<p>The 60 inch class is the most common commercial baler because it sits where most businesses’ volume does, and its bale is heavy enough that many recyclers will collect it. Above about 15 to 20 tons a month, or when baling becomes someone’s full-time job, the conversation moves to a horizontal baler; the <a href="/blog/horizontal-baler-guide/">horizontal baler guide</a> covers that step. For the full price picture across every class, see <a href="/blog/how-much-does-a-baler-cost/">how much a cardboard baler costs</a>.</p>

<h2>How to size a vertical baler from your own cardboard</h2>
<p>Average volume is the wrong number. Size to the busiest week of the year, because that is when a too-small machine leaves boxes on the floor.</p>
<ol>
<li><strong>Count what you throw away now.</strong> How many cardboard dumpster pulls do you pay for in a month, and how full is the container at each pull? Your hauler invoices hold the answer. A store paying for several pulls a week has a strong case for a baler.</li>
<li><strong>Estimate the peak.</strong> Note your busiest receiving days and seasonal peaks. Retail volume around the holidays can run well above the yearly average; the <a href="/blog/retail-seasonal-cardboard-plan/">seasonal cardboard plan</a> covers how to plan for it.</li>
<li><strong>Convert to bales.</strong> Divide expected cardboard weight per week by the bale weight of the class you are considering. If a 42 inch machine would need to be emptied twice a day, step up to a 60 inch. If a 60 inch machine is producing a bale or more every shift and your recycler pays more for mill-size bales, look at a 72 inch.</li>
<li><strong>Ask the recycler first.</strong> Find out what bale weight and size they accept, how many bales they need for a pickup, and whether they pay, haul free, or charge. The <a href="/blog/recycler-requirements-before-buying-baler/">recycler requirements guide</a> lists the questions. Many buyers want 1,000 pound class bales before they pay; smaller bales may only earn free pickup.</li>
<li><strong>Leave room to grow.</strong> A machine that is right on the edge today is undersized the first time volume rises.</li>
</ol>
<p>The <a href="/how-to-choose-the-right-baler/">baler sizing guide</a> and its <a href="/resources/baler-sizing-worksheet.html">printable worksheet</a> turn these numbers into a recommendation, and the <a href="/cardboard-bale-weight/">cardboard bale weight guide</a> shows typical bale weights and what a bale is worth.</p>

<h2>What a vertical baler needs from your building</h2>
<p>Vertical balers are far simpler to install than compactors. There is no concrete pad, no receiver container, and no roll-off truck approach. They still need the right spot.</p>
${table('Site checklist for a vertical baler', ['Requirement', 'What to confirm', 'Why it matters'], [
  ['Floor space', 'The machine footprint plus room to open the door, eject and tip the bale, and bring a pallet jack or forklift in', 'The bale has to leave the machine and the room; a baler wedged into a corner becomes a storage problem'],
  ['Ceiling height', 'Overall machine height from the spec sheet against ceiling, lights, sprinklers, and ductwork', 'The cylinder sits on top of the chamber; larger machines are tall'],
  ['Floor', 'Level concrete rated for the machine and a full bale', 'A 60 inch vertical weighs on the order of two tons; it is anchored to the slab'],
  ['Power', 'Voltage and phase at the location, a dedicated circuit, and a disconnect within sight of the machine', 'Many verticals run single-phase; high-density and three-phase models need three-phase service'],
  ['Delivery path', 'Door widths, aisle turns, and dock access from the truck to the final spot', 'The machine arrives on a pallet and is set by forklift; after-hours delivery is common in retail'],
  ['Bale storage', 'Where finished bales wait for pickup, and how many', 'A missed pickup should not block the receiving door'],
])}
<p>Norton’s <a href="/services/equipment-logistics/">delivery and installation crew</a> sets verticals in retail back rooms and warehouses routinely: deliver, set, anchor, connect to the circuit, test the interlocks and a full cycle, and train the people who will run it.</p>

<h2>Features that matter on a vertical baler</h2>
<ul>
<li><strong>Interlocked doors and key-controlled start.</strong> The loading gate and bale door should be interlocked so the ram cannot move with either open, and the machine should start with a key switch that a supervisor controls. These features are what make the machine compliant and safe to run.</li>
<li><strong>ANSI Z245.5 compliance and documentation.</strong> The voluntary national standard for balers. Under federal child labor rules (29 CFR 570.63), 16 and 17 year olds may only load a baler that meets the standard, cannot operate or unload it, and the required notice must be posted on the machine. Workers under 16 may not load it at all. If anyone under 18 works near your baler, buy a compliant machine.</li>
<li><strong>Bale ejection.</strong> Most verticals eject the bale with the ram and a chain or strap assist. Powered or easier ejection saves time and strain on 60 and 72 inch bales.</li>
<li><strong>Full-bale indicator and cycle controls.</strong> A light or counter that tells the operator when to tie saves wire and keeps bale weights consistent.</li>
<li><strong>Power unit.</strong> Single-phase units are simpler to install; three-phase units cycle faster on high-density machines. Match the unit to what the building already has.</li>
<li><strong>Wire tie slots and tie method.</strong> Verticals use four or five manual bale ties. Check the tie length and gauge the machine calls for before you order wire; the <a href="/balers-recycling/baling-wire/">baling wire page</a> covers matching ties to the chamber.</li>
</ul>

<h2>What a vertical baler costs to run</h2>
<p>The purchase price is the visible number. The running cost is small but real, and it decides whether the baler pays for itself.</p>
${table('Typical running costs of a vertical baler', ['Cost', 'What drives it', 'Planning figure'], [
  ['Baling wire', 'Four or five ties per bale; gauge and length set by the chamber', 'A few dollars per bale'],
  ['Electricity', 'A 5 to 15 horsepower motor running under a minute per cycle', 'Small enough to ignore at a few bales a day'],
  ['Preventive maintenance', 'Hydraulic fluid and filter, hoses, door latches, interlock and emergency stop testing', 'A quarterly visit runs a few hundred dollars'],
  ['Operator time', 'Loading, cycling, tying, and ejecting', 'A few minutes per cycle plus tying; roughly 20 to 40 minutes of operator time per bale, depending on size'],
  ['Repairs', 'Hose failures, seal leaks, worn latches, switch faults', 'Lowest on machines with regular maintenance'],
])}
<p>Operator time is the cost buyers forget. <strong>A hypothetical example:</strong> a store making eight bales a week at about 30 minutes of operator time each spends about four labor hours a week baling. That is usually far less than the time spent breaking down and hauling boxes to a dumpster, but it is not zero, and it is why a site producing a bale every hour should be looking at a larger machine or a horizontal baler. This example is illustrative, not a Norton customer result.</p>
<p>Maintenance is what keeps the machine safe and the running cost low. Operators should follow the <a href="/blog/commercial-baler-maintenance-checklist/">baler maintenance checklist</a> between visits, and Norton’s <a href="/services/preventive-maintenance/">preventive maintenance program</a> covers the hydraulic and safety checks on a schedule. When something does go wrong, the <a href="/blog/commercial-baler-troubleshooting/">baler troubleshooting guide</a> explains what an operator can safely check and when to call <a href="/services/baler-service/">baler service</a>.</p>

<h2>New, refurbished, or used vertical baler</h2>
<p>Vertical balers are mostly a thick steel chamber and one hydraulic cylinder, which makes a rebuilt machine a sound choice for many buyers. The <a href="/blog/used-vs-refurbished-balers/">used versus refurbished guide</a> explains the difference in detail.</p>
${table('New, refurbished, and used vertical balers compared', ['Factor', 'New', 'Refurbished', 'Used, as-is'], [
  ['Price', 'Full', 'Roughly half the cost of new', 'Lowest; reflects condition'],
  ['Condition', 'Factory new', 'Rebuilt in Norton’s Byhalia shop: cylinder resealed or rebuilt, hydraulics flushed and tested, chamber and doors repaired, interlocks verified, cycle-tested under load', 'Inspected and described; not rebuilt'],
  ['Warranty', 'Manufacturer warranty', 'Shop warranty with written terms', 'None; sold as-is'],
  ['Best for', 'Buyers who want the latest controls and a factory warranty', 'Most first-time buyers who want a lower price without the risk', 'Buyers with their own maintenance crew or a need for a spare'],
])}
<p>See current options on the <a href="/balers-recycling/refurbished-balers/">refurbished balers</a> and <a href="/balers-recycling/used-balers/">used balers</a> pages, or ask for a <a href="/services/equipment-evaluations/">pre-purchase evaluation</a> of a machine you found elsewhere.</p>

<h2>What to check on a used vertical baler</h2>
<ul>
<li>Chamber walls, platen, and floor for cracks, bulges, and gaps where cardboard can wedge.</li>
<li>Cylinder rod and seals for scoring and leaks; oil under the machine is a warning.</li>
<li>Hydraulic hoses for age, cracking, and chafing; pump noise and fluid condition.</li>
<li>Door latches and hinges: the door should close and lock without force.</li>
<li>Every interlock and the emergency stop, tested with the machine empty. The ram must not move with a door open.</li>
<li>Key switch, warning labels, and the ANSI Z245.5 documentation.</li>
<li>Electrical: the voltage and phase on the nameplate match your building.</li>
</ul>
<p>Test a used machine only as the manual allows, with the chamber empty and doors closed. Never reach into the chamber, and never bypass an interlock to see the ram move.</p>

<h2>Safety and who may run the baler</h2>
<p>There is no baler-specific OSHA standard, but OSHA’s lockout/tagout rule (29 CFR 1910.147) covers clearing jams and maintenance, and its machine guarding rule (29 CFR 1910.212) applies to the machine. ANSI Z245.5 is the voluntary benchmark that manufacturers build to. Follow the manufacturer’s manual and your facility’s written procedures. Operators load, cycle, tie, and eject; they never reach into the chamber, never ride or climb on the machine, and never bypass an interlock. A jam is cleared only by an authorized person after the machine is locked out. The <a href="/blog/cardboard-baler-safety-training-guide/">baler safety and operator training guide</a> covers training, records, and the child labor rules in full.</p>

<h2>Questions to ask before you buy a vertical baler</h2>
<ul>
<li>What chamber size do you recommend for my volume, and why?</li>
<li>What bale weight will it make with my cardboard, and will my recycler accept it?</li>
<li>Does it run on the power I have at that location?</li>
<li>Is the price installed, with delivery, anchoring, power hookup, testing, and operator training?</li>
<li>Does it meet ANSI Z245.5, with a key switch and the required notice?</li>
<li>What wire does it take, and can you deliver it?</li>
<li>Can you quote new and refurbished side by side?</li>
<li>Who services it, and how far away are they?</li>
</ul>
<p>Norton quotes new and refurbished verticals side by side, installs them, delivers wire on scheduled routes, and services every major brand. Call <a href="tel:+16628387900">(662) 838-7900</a> or <a href="/request-a-quote/?interest=baler">tell us about your cardboard</a> and we will recommend a size before we recommend a machine. If you are still deciding whether you need a baler or a compactor, start with <a href="/blog/baler-vs-compactor/">baler versus compactor</a>.</p>`,
    faqs: [
      { q: 'What size vertical baler do I need?', a: 'Most businesses need a 60 inch vertical baler, which makes 600 to 1,000 pound bales and handles a few bales a week up to several a day. A 30 or 42 inch machine suits small back rooms with light volume. A 72 inch high-density machine suits sites producing roughly 10 tons a month or more that sell bales by the ton.' },
      { q: 'How much does a vertical baler cost?', a: 'New vertical balers typically run about $6,000 to $20,000. Small 30 to 42 inch machines sit at the low end, 60 inch machines at roughly $9,000 to $15,000, and 72 inch high-density models at about $14,000 to $20,000 or more. Refurbished machines cost roughly half the cost of new. These are planning ranges, not quotes.' },
      { q: 'How much does a vertical baler bale weigh?', a: 'It depends on the chamber. A 30 inch machine makes bales of about 100 to 300 pounds, a 42 inch up to roughly 500, a 60 inch about 600 to 1,000, and a 72 inch high-density about 750 to 1,100 pounds. Actual weight depends on the cardboard, how full the chamber is when tied, and the machine’s force.' },
      { q: 'Can a vertical baler run on single-phase power?', a: 'Many can. Numerous 30 to 60 inch vertical balers run on 208 to 230 volt single-phase power, which is why they are easy to install in retail back rooms. High-density 72 inch machines and faster models often need three-phase. Confirm the voltage and phase at the exact location before ordering.' },
      { q: 'How much space does a vertical baler need?', a: 'Plan for the machine footprint plus room to open the door, eject and tip the bale, and bring in a pallet jack or forklift, and check the overall height against the ceiling, lights, and sprinklers. Also plan where finished bales wait for pickup. Measure the spot and the delivery path before you request quotes.' },
      { q: 'Can a 16 or 17 year old use a vertical baler?', a: 'Only to load it, and only if the baler meets ANSI Z245.5, cannot be operated while being loaded, and has the required notice posted, under 29 CFR 570.63. Workers under 18 may not operate or unload it, and workers under 16 may not load it. Check the regulation and your state rules.' },
      { q: 'When should I choose a horizontal baler instead?', a: 'When cardboard volume passes roughly 15 to 20 tons a month, when baling has become someone’s full-time job, or when your recycler wants heavier, uniform bales than a vertical can make. Below that, a 60 or 72 inch vertical usually costs less to buy, install, and run.' },
      { q: 'Is a refurbished vertical baler a good buy?', a: 'For many first-time buyers it is the best value. A Norton refurbished baler has been rebuilt in our Byhalia shop, cycle-tested under load, and carries a shop warranty, at roughly half the cost of new. A used baler sold as-is costs less but has no warranty, so it suits buyers with their own maintenance crew.' },
    ],
  },
];

// Refreshes to legacy archive posts, merged over the original entries by slug
// (same mechanism as SEPTEMBER_UPDATES and NOVEMBER_UPDATES).
export const WEEKLY_UPDATES = {};

// Pages whose visible content or links changed in a weekly release, with the
// date of that change, for sitemap lastmod. Example:
//   ['balers-recycling/vertical-balers/index.html', '2026-11-23']
export const WEEKLY_UPDATED_PAGES = new Map([
  ['balers-recycling/vertical-balers/index.html', '2026-11-23'],
  ['balers-recycling/refurbished-balers/index.html', '2026-11-23'],
  ['services/baler-service/index.html', '2026-11-23'],
  ['brands/max-pak/index.html', '2026-11-23'],
  ['index.html', '2026-11-23'],
  ['blog/index.html', '2026-11-23'],
]);
