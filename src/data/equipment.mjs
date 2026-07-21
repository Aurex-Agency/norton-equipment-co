// ============================================================
// Equipment pages — trash compactors (lead) + balers & recycling
// Each entry renders to /<family>/<slug>/index.html
// ============================================================

export const COMPACTOR_OVERVIEW = {
  slug: '',
  name: 'Commercial Trash Compactors',
  kicker: 'Sales · Service · Rental · Any Brand',
  metaTitle: 'Commercial Trash Compactors | Sales, Service & Rental in the Mid-South | Norton Equipment',
  metaDesc:
    'Commercial trash compactor sales, installation, service, and rental across Memphis, North Mississippi, West Tennessee, and East Arkansas. Self-contained, stationary, vertical, pre-crusher, and auger compactors — every major brand, since 1997.',
  h1: 'Commercial Trash Compactors',
  sub: 'The right compactor cuts hauling pickups by half or more. Norton Equipment sells, installs, services, rents, and refurbishes every major type of commercial trash compactor across the Mid-South — and we service any brand, any model.',
  intro: [
    'A commercial trash compactor is the fastest way to shrink a hauling bill. Instead of paying to haul air in half-empty containers, a compactor crushes waste into a fraction of its volume, so you pay for fewer pickups, keep a cleaner site, and stop feeding the local raccoons.',
    'The catch is that "compactor" covers a family of very different machines. A grocery store with wet food waste needs a leak-tight self-contained unit. A distribution center moving mountains of dry cardboard and packaging needs a stationary compactor matched to a receiver container. An apartment tower needs a compact vertical unit that fits a trash room. Pick wrong and you buy problems; pick right and the machine pays for itself.',
    'That is where we come in. Norton Equipment has been sizing, selling, installing, and servicing waste equipment in the Mid-South since 1997. We are not tied to one manufacturer and we do not lock you into a hauling contract — we spec the machine that fits your waste stream, your dock, and your budget, then we stand behind it with our own service techs and a full fabrication shop.',
  ],
  types: [
    { slug: 'self-contained', blurb: 'Leak-tight units for wet waste — grocery, restaurants, hospitals, food service.' },
    { slug: 'stationary', blurb: 'High-volume dry waste — warehouses, DCs, retail, manufacturing.' },
    { slug: 'vertical-apartment', blurb: 'Tight footprints — apartments, high-rises, urban sites.' },
    { slug: 'pre-crusher', blurb: 'Crushes bulky industrial waste before compaction — pallets, drums, furniture.' },
    { slug: 'auger', blurb: 'Continuous-feed screw compaction for high-volume operations.' },
    { slug: 'front-load-rear-load', blurb: 'Hauler-compatible containers for standard pickup routes.' },
    { slug: 'enclosures', blurb: 'Guards, chutes, and enclosures that keep sites safe and clean.' },
    { slug: 'used', blurb: 'Reconditioned compactors, inspected and warrantied.' },
    { slug: 'rental', blurb: 'Monthly-fee compactors with service included — no capital outlay.' },
  ],
  faqs: [
    {
      q: 'How much does a commercial trash compactor cost?',
      a: 'New commercial compactors typically run from around $15,000 for smaller vertical and stationary units to $40,000+ for large self-contained, pre-crusher, and auger machines, plus installation. Reconditioned units and monthly rentals bring the entry cost down dramatically. The honest answer depends on your waste type and volume — call (662) 838-7900 and we will spec it in one conversation.',
    },
    {
      q: 'Do you service compactors you didn’t sell?',
      a: 'Yes. We service and repair every major make and model — Marathon, Cram-A-Lot, Max-Pak, PTR, Wastequip, and more — whether or not it came from us. Our techs and in-house fabrication shop handle everything from control panels to structural steel.',
    },
    {
      q: 'Should I rent or buy a compactor?',
      a: 'If you want a predictable monthly cost with maintenance included, rent. If you plan to run the machine hard for a decade, buying usually wins on total cost. We offer both — and we will show you the math for your volume, not a sales pitch.',
    },
    {
      q: 'What size compactor do I need?',
      a: 'Sizing depends on waste type (wet or dry), weekly volume, available space, and your hauler’s container requirements. We do free on-site evaluations across our 100-mile service area to spec it right the first time.',
    },
  ],
};

export const COMPACTORS = [
  {
    slug: 'self-contained',
    name: 'Self-Contained Compactors',
    cardTitle: 'Self-Contained',
    kicker: 'Wet Waste · Leak-Tight',
    short: 'Leak-tight compaction for wet waste — grocery, food service, hospitals.',
    metaTitle: 'Self-Contained Trash Compactors | Wet Waste | Norton Equipment',
    metaDesc:
      'Self-contained trash compactors for grocery stores, restaurants, hospitals, and food service in the Mid-South. Leak-tight wet-waste compaction — sales, installation, service, and rental from Norton Equipment, Byhalia MS.',
    intro: [
      'A self-contained compactor bolts the compaction unit and the container into one sealed, leak-tight body. When the container is full, the whole machine is hauled away, emptied, and returned. Nothing drips on the pad, nothing leaks down the street behind the truck, and nothing smells up the loading dock.',
      'That makes self-contained units the standard answer for wet waste: grocery stores, restaurants and commissaries, hospitals and care facilities, hotels, and food processors. If your waste stream has liquid in it, this is almost certainly your machine — and health inspectors agree.',
    ],
    bestFor: ['Grocery stores & supermarkets', 'Restaurants & commissaries', 'Hospitals & care facilities', 'Hotels & hospitality', 'Food processing plants', 'Convenience & retail with food waste'],
    features: [
      { h: 'Leak-tight construction', p: 'Fully welded, sealed container with liquid retention — no leachate on the pad, no odor complaints, no slip hazards behind the store.' },
      { h: 'Sized to your volume', p: 'Common sizes run roughly 15 to 35 cubic yards with 2- to 4-yard charge boxes. We size the unit to your pickup schedule so you are not paying to haul a half-empty box.' },
      { h: 'Odor & pest control', p: 'A sealed machine starves rodents, birds, and flies of an open buffet. For food retail, that alone can justify the machine.' },
      { h: 'Hauler compatible', p: 'Built to standard roll-off hoist specs, so any hauler in the Memphis area can pick it up. You keep the leverage in your hauling contract.' },
    ],
    faqs: [
      { q: 'What’s the difference between self-contained and stationary compactors?', a: 'A self-contained compactor is one sealed unit — compactor and container together — hauled away as a whole. A stationary compactor stays bolted to your pad and pushes waste into a detachable receiver container. Wet waste needs self-contained; dry waste usually runs cheaper on stationary.' },
      { q: 'How often will it need to be hauled?', a: 'A properly sized self-contained unit typically cuts pickups from daily-or-every-other-day dumpster service down to once every one to two weeks, depending on volume. We size it from your current hauling history.' },
      { q: 'Do you install and maintain them?', a: 'Yes — full turnkey install (pad, power, chutes or through-wall feed if needed) plus preventive maintenance and emergency repair from our own techs. We service all brands.' },
    ],
    related: ['stationary', 'rental', 'used'],
  },
  {
    slug: 'stationary',
    name: 'Stationary Compactors',
    cardTitle: 'Stationary',
    kicker: 'Dry Waste · High Volume',
    short: 'High-volume dry-waste compaction for warehouses, DCs, retail, and manufacturing.',
    metaTitle: 'Stationary Trash Compactors | Warehouses & Distribution | Norton Equipment',
    metaDesc:
      'Stationary compactors for warehouses, distribution centers, retail, and manufacturing across Memphis and the Mid-South. Sales, installation, service, and rental from Norton Equipment.',
    intro: [
      'A stationary compactor is the workhorse of dry waste. The compactor stays anchored to your pad and rams waste into a detachable receiver container; when the container is full, the hauler swaps it and the compactor keeps working. Downtime is basically zero, and cost per hauled yard is as low as it gets.',
      'For the Memphis metro — one of the largest warehouse and distribution markets in America — this is the machine behind the building. Cardboard, shrink wrap, packaging, floor sweepings, break-room trash: a properly sized stationary unit takes eight loose yards and turns them into one.',
    ],
    bestFor: ['Distribution centers & warehouses', 'Manufacturing plants', 'Big-box & strip retail', 'Printers & converters', 'Schools & institutions', 'Transfer & logistics operations'],
    features: [
      { h: 'Maximum payloads', p: 'Compaction ratios up to roughly 4:1 on typical dry waste mean your hauler moves full, heavy containers — not air. Fewer pulls, smaller bill.' },
      { h: 'Continuous operation', p: 'Because the receiver container detaches, the compactor never leaves your dock. Swap the box and keep feeding.' },
      { h: 'Feed options', p: 'Ground feed, dock feed, through-wall chute, or hopper with cart tipper — we configure and fabricate the feed setup that fits your building.' },
      { h: 'Ratings for every duty', p: 'From 2-yard charge boxes for retail to heavy-gauge industrial units for round-the-clock DCs. We match cycle force and box size to your waste.' },
    ],
    faqs: [
      { q: 'Can a stationary compactor handle any wet waste?', a: 'Incidental moisture is fine, but free liquid will leak from the receiver container — that is what self-contained units are for. Mixed streams are worth a quick waste audit, which we do free on-site.' },
      { q: 'What power do I need?', a: 'Most commercial units run 208/230/460V three-phase. If your building lacks three-phase at the dock, we will tell you before you buy, and our electricians-partners and fab shop handle the rest of the install.' },
      { q: 'Do stationary compactors work with any hauler?', a: 'Yes — receiver containers are standard roll-off equipment. You keep full freedom to bid your hauling out, which is exactly the leverage national haulers hope you never use.' },
    ],
    related: ['self-contained', 'pre-crusher', 'auger'],
  },
  {
    slug: 'vertical-apartment',
    name: 'Vertical & Apartment Compactors',
    cardTitle: 'Vertical & Apartment',
    kicker: 'Tight Spaces · Multi-Family',
    short: 'Compact footprint machines for apartments, high-rises, and tight sites.',
    metaTitle: 'Vertical & Apartment Compactors | Multi-Family & Tight Spaces | Norton Equipment',
    metaDesc:
      'Vertical compactors and apartment/high-rise trash compaction systems for multi-family properties in Memphis and the Mid-South. Sales, chute systems, service, and maintenance from Norton Equipment.',
    intro: [
      'Not every site has room for a 40-foot machine-plus-container footprint. Vertical compactors pack waste downward into a standard front-load container or cart inside a footprint just a few feet square — perfect for apartment complexes, high-rises, parking-deck trash rooms, small retail, and anywhere real estate is tight.',
      'For multi-family properties, compaction is about more than hauling costs: it is curb appeal, pest control, and fewer overflowing corrals between pickups. Property managers across the Memphis metro run vertical units at the end of trash chutes or in central collection rooms, and we keep them running.',
    ],
    bestFor: ['Apartment complexes', 'High-rise residential & offices', 'Hotels & mixed-use buildings', 'Parking structures & trash rooms', 'Small-footprint retail', 'Municipal & campus housing'],
    features: [
      { h: 'Small footprint, real compaction', p: 'Vertical units compact into standard 2- to 8-yard front-load containers your hauler already lifts — typically 3–4 bags’ volume into the space of one.' },
      { h: 'Chute-fed systems', p: 'For high-rises we supply and service chute-fed compactor systems, including diverters, sanitizers, and interlocks.' },
      { h: 'Resident-proof controls', p: 'Keyed or interlocked operation, full guarding, and simple controls that survive real-world use by hundreds of residents.' },
      { h: 'Cleaner corrals', p: 'Contained compaction means no overflowing dumpsters, fewer bulk-pile complaints, and a property that shows better.' },
    ],
    faqs: [
      { q: 'Will a vertical compactor work with my current hauler?', a: 'Yes — vertical units compact into standard front-load containers, so your existing route service continues unchanged. You just need far fewer lifts.' },
      { q: 'Can you service the compactor at the bottom of our trash chute?', a: 'That is one of the most common calls we run. We service chute-fed apartment and high-rise compactors across the metro — all brands — and fabricate replacement parts in-house when manufacturers are slow.' },
      { q: 'What about recycling at multi-family properties?', a: 'We can pair a compactor with cardboard balers or additional containers for a clean dual-stream setup, and our waste stream consultation will tell you if the numbers work.' },
    ],
    related: ['front-load-rear-load', 'rental', 'enclosures'],
  },
  {
    slug: 'pre-crusher',
    name: 'Pre-Crusher Compactors',
    cardTitle: 'Pre-Crusher',
    kicker: 'Bulky Industrial Waste',
    short: 'Crushes pallets, drums, crates, and furniture before compaction.',
    metaTitle: 'Pre-Crusher Compactors | Bulky Industrial Waste | Norton Equipment',
    metaDesc:
      'Pre-crusher compactors for pallets, drums, crates, furniture, and bulky industrial waste. Sales, installation, and service across Memphis, North Mississippi, West Tennessee, and East Arkansas.',
    intro: [
      'Some waste refuses to compact politely. Pallets, drums, crates, furniture, appliances, manufacturing rejects — bulky items bridge inside a standard compactor, cycle after cycle, and wear the machine out fighting them. A pre-crusher solves it with brute force: a reinforced chamber and ram crush the load flat against a retaining hook before pushing it into the receiver container.',
      'For manufacturers, furniture and appliance operations, distribution centers with heavy pallet waste, and industrial plants around the Mid-South, a pre-crusher turns the nastiest waste stream in the building into the most efficient one.',
    ],
    bestFor: ['Manufacturing & industrial plants', 'Furniture & appliance operations', 'Distribution centers with pallet waste', 'Construction & demolition support', 'Military & institutional sites', 'Product destruction programs'],
    features: [
      { h: 'Crush-then-compact cycle', p: 'The ram crushes bulky items flat against a hardened crusher hook before transferring them to the container — no bridging, no jamming, maximum density.' },
      { h: 'Heavy structural build', p: 'Thicker floors, reinforced sidewalls, and high-force cylinders built for abuse. This is the machine you buy when you have already destroyed a standard compactor.' },
      { h: 'Certified destruction', p: 'Pre-crushers are the tool of choice for secure product destruction — returns, recalls, and off-spec goods verifiably crushed on site.' },
      { h: 'Sized with the right receiver', p: 'We pair the crusher with receiver containers and hauling arrangements matched to dense, heavy loads.' },
    ],
    faqs: [
      { q: 'Do I need a pre-crusher or just a bigger stationary compactor?', a: 'If your waste is mostly loose dry material with occasional bulky items, a heavy-duty stationary unit may do. If pallets, drums, or furniture are a daily fact of life, a pre-crusher will outlast and outperform anything else. Send us photos of your waste stream and we will give you a straight answer.' },
      { q: 'Can a pre-crusher handle metal drums?', a: 'Yes — crushing steel drums (empty and rinsed) is a classic pre-crusher duty, along with banding, strapping, and light structural scrap.' },
      { q: 'What maintenance do they need?', a: 'Hydraulics, packing, and wear surfaces on a schedule. Our preventive maintenance plans keep cycle force where the spec sheet says it should be — and our fab shop rebuilds floors and hooks when the years add up.' },
    ],
    related: ['stationary', 'auger', 'used'],
  },
  {
    slug: 'auger',
    name: 'Auger Compactors',
    cardTitle: 'Auger',
    kicker: 'Continuous Feed · Max Density',
    short: 'Screw-driven continuous compaction for high-volume operations.',
    metaTitle: 'Auger Compactors | Continuous High-Volume Compaction | Norton Equipment',
    metaDesc:
      'Auger compactors for continuous-feed, high-volume waste operations. Screw compaction achieves top container density. Sales, installation, and service from Norton Equipment in the Mid-South.',
    intro: [
      'An auger compactor replaces the ram with a massive rotating screw that grinds and pushes waste into the container continuously — no cycle time, no waiting between charges. Material is shredded and packed simultaneously, achieving container densities that ram machines cannot touch.',
      'Auger units shine where waste never stops: high-volume distribution centers, big-box retail with relentless cardboard, manufacturing lines with continuous trim and scrap. If your team queues at the compactor or your containers still leave light, an auger changes the math.',
    ],
    bestFor: ['High-volume distribution centers', 'Big-box retail & supercenters', 'Manufacturing with continuous scrap', 'E-commerce fulfillment', 'Beverage & bottling plants', 'Printing & packaging plants'],
    features: [
      { h: 'Continuous feed', p: 'No cycle to wait on — the screw runs as material arrives, so a cart tipper or conveyor line can feed it nonstop.' },
      { h: 'Highest container density', p: 'The shredding-packing action routinely loads 20–40% more weight per container than a comparable ram compactor. Fewer pulls, period.' },
      { h: 'Destroys as it packs', p: 'Product that goes through an auger is unrecoverable — a built-in answer for destruction requirements.' },
      { h: 'Low jam rates', p: 'The screw self-clears most bridging that stalls ram machines on mixed packaging waste.' },
    ],
    faqs: [
      { q: 'Auger vs. ram compactor — which is cheaper to run?', a: 'Augers cost more up front but pull ahead on hauling savings in truly high-volume operations because container payloads are so much heavier. Below roughly 40–50 yards of loose waste a day, a well-sized stationary ram unit is usually the better buy. We will run your numbers honestly.' },
      { q: 'Can an auger handle wet waste?', a: 'Auger units are available in self-contained, leak-tight configurations for high-volume wet applications like food processing. Ask us about the specific stream.' },
      { q: 'Do you service auger compactors?', a: 'Yes — screws, drives, gearboxes, and controls, all brands. Our welding and fabrication shop also rebuilds flighting and hoppers that other shops would replace outright.' },
    ],
    related: ['stationary', 'pre-crusher', 'rental'],
  },
  {
    slug: 'front-load-rear-load',
    name: 'Front-Load & Rear-Load Compactors',
    cardTitle: 'Front-Load & Rear-Load',
    kicker: 'Route-Truck Compatible',
    short: 'Compaction into standard hauler containers on regular routes.',
    metaTitle: 'Front-Load & Rear-Load Compactors | Route-Compatible | Norton Equipment',
    metaDesc:
      'Front-load and rear-load compactor systems compatible with standard hauler route trucks. Ideal for retail, restaurants, and multi-tenant sites in the Mid-South. Norton Equipment — sales & service since 1997.',
    intro: [
      'Not every site generates enough waste to justify roll-off service. Front-load and rear-load compactors compact into the same standard containers your hauler’s route trucks already lift — 2 to 8 yards front-load, or rear-load carts and containers — so you keep ordinary route service while cutting pickups by two-thirds or more.',
      'They are the sweet spot for restaurants, strip retail, shopping centers, schools, and multi-tenant properties across the Memphis metro: compactor economics without roll-off logistics.',
    ],
    bestFor: ['Restaurants & QSR', 'Strip centers & multi-tenant retail', 'Schools & campuses', 'Office parks', 'C-stores & fuel sites', 'Municipal facilities'],
    features: [
      { h: 'Works with your route service', p: 'Compacts directly into standard front-load or rear-load containers — no hauling contract changes, no special trucks.' },
      { h: 'Two-thirds fewer lifts', p: 'Typical 3:1 compaction turns six pickups a week into two. The unit often pays for itself inside the first contract year.' },
      { h: 'Clean, contained sites', p: 'Lids stay closed, corrals stay clean, and windblown litter stops being the neighbor’s problem.' },
      { h: 'Simple, tough mechanics', p: 'Fewer moving parts than large industrial machines — and every part serviceable by our techs.' },
    ],
    faqs: [
      { q: 'Will my hauler’s truck lift a compaction container?', a: 'Yes — that is the point of this class of machine. Compacted front-load containers run heavier per lift, so confirm your hauler’s weight limits; we help you spec around them.' },
      { q: 'Is this the same as an apartment vertical compactor?', a: 'They are close cousins. Vertical units are the common front-load-compatible style; this page covers the broader family, including horizontal front-load and rear-load configurations. We will match the style to your site during a free evaluation.' },
      { q: 'What does one cost?', a: 'Smaller front-load-compatible compactors are among the most affordable machines we sell, and rental programs put them on site for a flat monthly fee. Call for current numbers.' },
    ],
    related: ['vertical-apartment', 'rental', 'enclosures'],
  },
  {
    slug: 'enclosures',
    name: 'Compactor Enclosures',
    cardTitle: 'Enclosures',
    kicker: 'Safety · Security · Site Appearance',
    short: 'Guards, chutes, gates, and enclosures — fabricated in-house.',
    metaTitle: 'Compactor Enclosures, Chutes & Guarding | Custom Fabrication | Norton Equipment',
    metaDesc:
      'Compactor enclosures, safety guarding, feed chutes, gates, and security screens — custom fabricated in-house by Norton Equipment. Keep your compactor safe, secure, and code-compliant in the Mid-South.',
    intro: [
      'A compactor is a powerful machine sitting outdoors at the least supervised corner of your property. Enclosures keep it safe, secure, and presentable: guarding that satisfies safety audits, gates and screens that stop after-hours dumping, chutes and hoppers that make feeding faster and cleaner, and sight screens that keep the machine off the street view.',
      'Unlike most dealers, we do not order enclosures from a catalog and hope they fit. Norton Equipment runs its own welding and fabrication shop, so guards, rails, chutes, stairs, platforms, and enclosures are built to your machine and your pad — measured, fabricated, and installed by the same company that services the compactor inside them.',
    ],
    bestFor: ['Retail & grocery sites', 'Distribution centers', 'Multi-family properties', 'Hospitals & campuses', 'Municipal facilities', 'Any site with safety audits'],
    features: [
      { h: 'Safety guarding & interlocks', p: 'Access guarding, gates, and interlocked panels that keep hands and forklifts out of the charge box — and your safety officer satisfied.' },
      { h: 'Security enclosures', p: 'Locking gates and screens that end after-hours dumping and scavenging on your pad.' },
      { h: 'Chutes, hoppers & platforms', p: 'Through-wall chutes, dock-height hoppers, cart tippers, stairs, and platforms fabricated to your building — not adapted from someone else’s.' },
      { h: 'Site appearance', p: 'Architectural screening that keeps the waste corner from being the first thing a customer sees.' },
    ],
    faqs: [
      { q: 'Can you match an enclosure to an existing compactor from another dealer?', a: 'Yes. We measure your machine and pad and fabricate to fit — brand does not matter.' },
      { q: 'Do enclosures require permits?', a: 'Depends on the municipality and whether the enclosure is structural. We have built them across three states and will flag anything your jurisdiction requires.' },
      { q: 'Can you repair damaged guarding?', a: 'Our fab shop repairs or rebuilds bent rails, gates, and panels — usually cheaper and faster than replacement.' },
    ],
    related: ['stationary', 'self-contained', 'vertical-apartment'],
  },
  {
    slug: 'used',
    name: 'Used Compactors',
    cardTitle: 'Used Compactors',
    kicker: 'Reconditioned · Inspected · Warrantied',
    short: 'Shop-reconditioned compactors at a fraction of new price.',
    metaTitle: 'Used & Reconditioned Trash Compactors | Norton Equipment',
    metaDesc:
      'Used and reconditioned commercial trash compactors — inspected, rebuilt, and warrantied by Norton Equipment. Self-contained, stationary, and vertical units available across the Mid-South.',
    intro: [
      'A commercial compactor is a steel box with hydraulics — which means a properly reconditioned machine can run for another decade at a fraction of new cost. The difference between a bargain and a headache is who did the reconditioning.',
      'Every used compactor we sell goes through our own shop: hydraulics tested and resealed, cylinders and packing serviced, floors and wear surfaces inspected and rebuilt where needed by our fabrication team, controls gone through, and the machine cycle-tested under load before it ships. Then we stand behind it, because we are also the ones who will service it in the field.',
    ],
    bestFor: ['Budget-conscious operations', 'Backup & secondary machines', 'Seasonal facilities', 'Startups & expansions', 'Replacing a failed unit fast', 'Fleet standardization on a budget'],
    features: [
      { h: 'Shop-reconditioned, not "as-is"', p: 'Hydraulics, electrics, structure, and safety systems are gone through in our shop — not pressure-washed and flipped.' },
      { h: 'Inventory moves fast', p: 'Available units change weekly as trade-ins and buyouts come through. Call for the current list — if we do not have it, we will find it.' },
      { h: 'Warrantied & supported', p: 'Reconditioned units carry a shop warranty and full access to our parts and service network.' },
      { h: 'Trade-ins welcome', p: 'Upgrading? We buy and trade compactors and balers, which is where much of our reconditioned inventory comes from.' },
    ],
    faqs: [
      { q: 'How much does a used compactor save?', a: 'Typically 30–60% versus new, depending on age, size, and condition. On larger machines that is real money — often enough to fund installation and an enclosure.' },
      { q: 'What warranty comes with a reconditioned unit?', a: 'Shop warranty terms vary by machine and are quoted with the unit. Every unit is also backed by our regular service and parts operation.' },
      { q: 'Can I see the machine before buying?', a: 'Absolutely — inspect it at our Byhalia shop, or we will send cycle-test video and inspection notes if you are buying from a distance.' },
    ],
    related: ['rental', 'stationary', 'self-contained'],
  },
  {
    slug: 'rental',
    name: 'Compactor Rental',
    cardTitle: 'Rental',
    kicker: 'Flat Monthly Fee · Service Included',
    short: 'Compactors on a flat monthly fee with maintenance included.',
    metaTitle: 'Commercial Compactor Rental | Monthly Programs | Norton Equipment',
    metaDesc:
      'Rent a commercial trash compactor for a flat monthly fee with maintenance included. Norton Equipment rental programs across Memphis, North Mississippi, West Tennessee, and East Arkansas.',
    intro: [
      'Not every operation wants to own a compactor. A rental program puts the right machine on your pad for a flat monthly fee — installation handled, maintenance included, repairs on us. Your hauling bill drops immediately and your capital stays in the business.',
      'Rental also removes risk: if your volume changes, your machine can change with it. Seasonal operations, growing companies, multi-site managers standardizing costs, and anyone burned by an aging machine they own — this is the program built for you. And unlike hauler-provided compactors, our rentals never lock you into a hauling contract.',
    ],
    bestFor: ['Businesses avoiding capital outlay', 'Seasonal & variable-volume operations', 'Multi-site cost standardization', 'Short- and mid-term projects', 'Companies stuck with failing owned units', 'Anyone escaping hauler equipment lock-in'],
    features: [
      { h: 'One flat monthly number', p: 'Machine, maintenance, and repairs in one predictable line item. Budgeting done.' },
      { h: 'No hauling strings attached', p: 'Hauler-supplied compactors tie the machine to their contract. Ours don’t — bid your hauling freely and keep the savings.' },
      { h: 'Service included', p: 'Preventive maintenance and repair calls are part of the program, handled by the same techs who service machines we sell.' },
      { h: 'Upgrade paths', p: 'Outgrow the machine? We swap it. Want to own it later? Ask about purchase options on your unit.' },
    ],
    faqs: [
      { q: 'What does compactor rental cost per month?', a: 'Monthly rates depend on machine type and term — vertical units rent for a few hundred dollars monthly; large self-contained and stationary programs are quoted to the application. In most cases the hauling savings exceed the rental fee from month one.' },
      { q: 'Who handles repairs on a rented compactor?', a: 'We do, as part of the program. If the machine goes down, you call us and we fix it — that is the deal.' },
      { q: 'Is there a minimum term?', a: 'Programs are typically 12–60 months; shorter project terms are available. We will structure it around your situation.' },
    ],
    related: ['used', 'self-contained', 'front-load-rear-load'],
  },
];

// ------------------------------------------------------------
// Balers & recycling
// ------------------------------------------------------------

export const BALER_OVERVIEW = {
  slug: '',
  name: 'Cardboard Balers & Recycling Equipment',
  kicker: 'The Business Norton Was Built On',
  metaTitle: 'Cardboard Balers & Recycling Equipment | Sales & Service | Norton Equipment',
  metaDesc:
    'Cardboard balers, shredders, conveyors, and baling wire — sales, service, and reconditioned equipment across the Mid-South since 1997. Vertical and horizontal balers for every volume. Norton Equipment, Byhalia MS.',
  h1: 'Cardboard Balers & Recycling Equipment',
  sub: 'Balers built Norton Equipment’s reputation. From back-room vertical balers to full horizontal systems with conveyors, we sell, service, refurbish, and supply wire for the machines that turn your cardboard from a cost into a revenue line.',
  intro: [
    'Loose cardboard is a triple expense: it fills containers you pay to haul, eats labor to break down, and clutters the back room. Baled cardboard is the opposite — a commodity that recyclers pay for. A baler is the machine that flips that switch, and it has been the heart of Norton Equipment’s business since 1997.',
    'We cover the whole recycling line: vertical balers for back rooms, horizontal balers for volume operations, shredders for secure destruction, conveyors to feed it all, reconditioned equipment for tight budgets, and the bale wire that ties every load. One call covers the machine, the install, the service, and the consumables.',
    'And because we service any brand and any model — with our own techs and an in-house fabrication shop — the baler you already own is just as welcome as the one you buy from us.',
  ],
  types: [
    { slug: 'vertical-balers', blurb: 'The back-room workhorse for retail, grocery, and warehouses.' },
    { slug: 'horizontal-balers', blurb: 'High-volume automatic baling for DCs and recyclers.' },
    { slug: 'used-vertical-balers', blurb: 'Shop-reconditioned balers, inspected and warrantied.' },
    { slug: 'shredders', blurb: 'Industrial shredding for secure destruction and volume reduction.' },
    { slug: 'conveyors', blurb: 'Feed systems that keep balers and sort lines moving.' },
    { slug: 'baling-wire', blurb: 'Single-loop and double-loop wire, delivered across the Mid-South.' },
    { slug: 'used-recycling-equipment', blurb: 'Reconditioned balers, conveyors, and more.' },
  ],
  faqs: [
    { q: 'What does a cardboard baler cost?', a: 'New vertical balers generally run from about $6,000 to $20,000 depending on size and features; horizontal systems start around $30,000 and scale with automation. Reconditioned verticals cost far less. We quote exact numbers after a quick conversation about your volume.' },
    { q: 'Can I sell my baled cardboard?', a: 'Yes — mill-size bales of clean OCC (old corrugated cardboard) are a traded commodity. Depending on market prices and your volume, bales can offset hauling costs or become a genuine revenue line. Our waste stream consultation covers the current market and local buyers.' },
    { q: 'Do you repair balers you didn’t sell?', a: 'Every day. We service all major makes and models across the Mid-South, stock common parts, and fabricate what we can’t buy.' },
  ],
};

export const BALERS = [
  {
    slug: 'vertical-balers',
    name: 'Vertical Balers',
    cardTitle: 'Vertical Balers',
    kicker: 'The Back-Room Workhorse',
    short: 'The standard downstroke baler for retail, grocery, and warehouse back rooms.',
    metaTitle: 'Vertical Cardboard Balers | Sales, Install & Service | Norton Equipment',
    metaDesc:
      'Vertical downstroke cardboard balers for retail, grocery, and warehouses. Sales, installation, service, parts, and wire across the Mid-South from Norton Equipment — since 1997.',
    intro: [
      'The vertical downstroke baler is the most common recycling machine in America for a reason: it fits through a standard doorway footprint, runs on modest power, and turns a mountain of loose cardboard into dense, stackable, sellable bales with one operator and a few minutes a day.',
      'We sell and service the full range — from 42-inch balers for small retail up to wide-body 72-inch machines producing mill-size bales — and we stock the wire, do the operator training, and answer the service calls afterward. If a back room in the Mid-South has a baler in it, odds are decent we have had a hand on it.',
    ],
    bestFor: ['Grocery & supermarkets', 'Big-box & strip retail', 'Warehouses & DCs', 'Manufacturers', 'Schools & hospitals', 'Hotels & distribution back rooms'],
    features: [
      { h: 'Every size class', p: '42″, 60″, and 72″ chambers; standard and high-density models. Mill-size bales (roughly 750–1,100 lbs on a 72″ HD) command the best recycler prices.' },
      { h: 'Simple, safe operation', p: 'Modern interlocked doors, keyed controls, and UL-listed panels. We train your crew at install and re-train new hires on request.' },
      { h: 'Low cost to run', p: 'Single-phase power options, minimal maintenance, and wire as the only consumable. Most stores recover the cost in reduced hauling within 12–24 months.' },
      { h: 'Parts & service network', p: 'We stock common cylinders, valves, switches, and platens relationships — and our fab shop handles doors, chambers, and structural repairs in-house.' },
    ],
    faqs: [
      { q: 'What size vertical baler do I need?', a: 'It depends on your weekly cardboard volume and whether you want to sell bales. A store producing 20+ loose yards weekly usually justifies a 60″ machine; serious volume or resale ambitions point to a 72″ high-density. We size it free, on site.' },
      { q: 'What power does a vertical baler need?', a: 'Many run on 208/230V single-phase — normal commercial power. Larger high-density units may want three-phase. We confirm before you order.' },
      { q: 'How long does installation take?', a: 'Typically a half day: set, anchor, wire, test, and train. We handle delivery and rigging with our own equipment logistics crew.' },
    ],
    related: ['horizontal-balers', 'used-vertical-balers', 'baling-wire'],
  },
  {
    slug: 'horizontal-balers',
    name: 'Horizontal Balers',
    cardTitle: 'Horizontal Balers',
    kicker: 'High Volume · Automatic',
    short: 'Automatic high-volume baling for DCs, recyclers, and manufacturers.',
    metaTitle: 'Horizontal Balers | High-Volume Automatic Baling Systems | Norton Equipment',
    metaDesc:
      'Horizontal balers and full baling systems with conveyors for distribution centers, recyclers, and manufacturers in the Mid-South. Sales, installation, and service from Norton Equipment.',
    intro: [
      'When cardboard volume outgrows a vertical baler — when someone is baling all shift instead of a few minutes a day — a horizontal baler changes the operation. Material feeds continuously from a conveyor or chute into an open hopper, the ram runs automatically, and finished mill-size bales eject tied and ready to stack.',
      'We design, sell, install, and service horizontal systems across the Mid-South: closed-door manual-tie machines for growing operations, full auto-tie balers for serious volume, and the conveyors, tippers, and fabricated feed works that make the whole line run as one machine.',
    ],
    bestFor: ['Distribution & fulfillment centers', 'Recycling processors', 'Large manufacturers', 'Printers & converters', 'Multi-store consolidation points', 'Bottling & packaging plants'],
    features: [
      { h: 'Continuous automatic operation', p: 'Photo-eye start, automatic cycling, and auto-tie options mean the baler works while your people do something else.' },
      { h: 'Mill-spec bales', p: 'Dense, uniform export/mill bales maximize the price per ton your material brings and the payload per truck.' },
      { h: 'Full-line integration', p: 'We pair balers with in-ground or above-floor conveyors, cart tippers, and air systems — engineered and fabricated to your building.' },
      { h: 'Multi-material capability', p: 'OCC, shrink film, PET, aluminum, non-ferrous — one machine, multiple commodity streams with the right options.' },
    ],
    faqs: [
      { q: 'At what volume does a horizontal baler make sense?', a: 'A common threshold is roughly 15–20 tons of cardboard per month — below that, a high-density vertical usually wins on cost. Labor matters too: if baling is a full-time job, automation pays. We will model both options for you.' },
      { q: 'Do horizontal balers require a pit?', a: 'No — many run above-floor with ramp or dock feed. In-ground conveyor pits improve ergonomics for high volume but are optional. Our team has designed both across the region.' },
      { q: 'Can you move or reinstall an existing horizontal system?', a: 'Yes — equipment logistics is one of our core services. We relocate, level, re-power, and recommission baling systems, including ones we did not originally install.' },
    ],
    related: ['conveyors', 'vertical-balers', 'baling-wire'],
  },
  {
    slug: 'used-vertical-balers',
    name: 'Used Vertical Balers',
    cardTitle: 'Used Vertical Balers',
    kicker: 'Reconditioned · Warrantied',
    short: 'Shop-rebuilt vertical balers at roughly half the cost of new.',
    metaTitle: 'Used Vertical Balers | Reconditioned & Warrantied | Norton Equipment',
    metaDesc:
      'Used and reconditioned vertical cardboard balers — rebuilt, cycle-tested, and warrantied by Norton Equipment. Serving Memphis, North Mississippi, West Tennessee, and East Arkansas.',
    intro: [
      'A vertical baler is a thick steel chamber and a hydraulic cylinder. Rebuilt properly, a ten-year-old machine will bale cardboard for another decade — at roughly half the price of new. That has made reconditioned balers one of the smartest purchases in the industry, and one of Norton’s specialties since the beginning.',
      'Our used balers are not auction flips. Each machine is torn down in our Byhalia shop: cylinder resealed, hydraulics flushed and tested, chamber and platen inspected, doors and latches trued by our fabrication team, controls and safety interlocks verified, then the whole machine cycle-tested under load. It ships with a shop warranty and our service network behind it.',
    ],
    bestFor: ['Small & mid-size retail', 'Startups adding recycling', 'Second machines & backups', 'Budget-driven replacements', 'Seasonal operations', 'Franchise rollouts'],
    features: [
      { h: 'Fully shop-reconditioned', p: 'Hydraulics, electrics, structure, and safety systems rebuilt and verified — not just painted.' },
      { h: 'About half the cost of new', p: 'Typical reconditioned 60″ machines land at 40–60% of new pricing, with install and training included in the quote.' },
      { h: 'Rotating inventory', p: 'Trade-ins and buyouts keep fresh machines coming through the shop. Call for what is on the floor this week.' },
      { h: 'Trade up anytime', p: 'We buy back and trade as you grow — many customers step from a used 60″ to a new 72″ HD with us a few years later.' },
    ],
    faqs: [
      { q: 'How do I know a used baler is safe?', a: 'Every machine leaves our shop with interlocks, guards, and controls tested against current standards, and we document the reconditioning. If a machine cannot be brought to standard, we scrap it — we will not sell it.' },
      { q: 'Do used balers come with a warranty?', a: 'Yes — shop warranty terms are quoted with each unit, and parts and service are always a phone call away.' },
      { q: 'Will you install a used baler and train my team?', a: 'Delivery, rigging, anchoring, power hookup, testing, and operator training are all part of the deal, exactly as with a new machine.' },
    ],
    related: ['vertical-balers', 'used-recycling-equipment', 'baling-wire'],
  },
  {
    slug: 'shredders',
    name: 'Industrial Shredders',
    cardTitle: 'Shredders',
    kicker: 'Destruction · Volume Reduction',
    short: 'Industrial shredding for secure destruction and volume reduction.',
    metaTitle: 'Industrial Shredders | Secure Destruction & Volume Reduction | Norton Equipment',
    metaDesc:
      'Industrial shredders for secure product destruction, document destruction, and waste volume reduction. Sales and service across the Mid-South from Norton Equipment.',
    intro: [
      'Some material cannot just be thrown away. Off-spec product, branded goods, returned merchandise, sensitive documents, and proprietary parts need verifiable destruction — and bulky scrap often needs size reduction before it can be baled, conveyed, or hauled economically. Industrial shredders do both.',
      'We supply and service shredders from single-shaft grinders to heavy twin-shaft shear shredders, matched to the material: paper and cardboard, plastics and film, wood and pallets, drums, e-scrap, and mixed industrial waste. Paired with a baler or compactor downstream, a shredder turns a destruction liability into a managed, documented process.',
    ],
    bestFor: ['Product destruction programs', 'Manufacturers with off-spec goods', 'Document & media destruction', 'Pallet & wood waste operations', 'Plastics recyclers', 'E-scrap processors'],
    features: [
      { h: 'Matched to the material', p: 'Shaft count, cutter geometry, screen size, and drive power are specified to what you actually feed it — the difference between a shredder that runs and one that jams.' },
      { h: 'Verifiable destruction', p: 'Shredded product is unrecoverable, supporting brand-protection and compliance requirements with documented throughput.' },
      { h: 'System integration', p: 'Infeed conveyors, discharge conveyors, and downstream balers or compactors engineered as one line — and fabricated in-house where needed.' },
      { h: 'Service & knives', p: 'Knife sharpening and replacement, screen changes, drive service, and rebuilds keep throughput at spec.' },
    ],
    faqs: [
      { q: 'What can an industrial shredder handle?', a: 'The right machine handles cardboard, paper, plastics, film, textiles, wood, pallets, drums, and light metals. The wrong machine handles none of them for long — which is why we spec from a sample of your actual material.' },
      { q: 'Can shredded material be baled?', a: 'Usually yes, and often it should be: shredded OCC and film bale densely and ship efficiently. We design shredder-to-baler lines regularly.' },
      { q: 'Do you service existing shredders?', a: 'Yes — knives, screens, drives, and controls on all major brands, plus fabrication for hoppers, guards, and wear liners.' },
    ],
    related: ['horizontal-balers', 'conveyors', 'used-recycling-equipment'],
  },
  {
    slug: 'conveyors',
    name: 'Conveyors',
    cardTitle: 'Conveyors',
    kicker: 'Feed Systems · Sort Lines',
    short: 'Incline, slider-bed, and steel-belt conveyors for recycling lines.',
    metaTitle: 'Recycling Conveyors | Sales, Install & Repair | Norton Equipment',
    metaDesc:
      'Incline, slider-bed, and steel-belt conveyors for balers, shredders, and sort lines. Sales, installation, relocation, and repair across the Mid-South from Norton Equipment.',
    intro: [
      'A horizontal baler is only as fast as what feeds it. Conveyors are the circulatory system of a recycling operation — moving material from the floor, the pit, or the sort line into balers, shredders, and compactors at the pace the machines want to run.',
      'We sell, install, relocate, and repair the full range: rubber-belt slider beds and troughing conveyors, steel-belt and hinged-apron machines for punishing loads, incline and pit conveyors for baler infeed, and sorting stations. Because we run our own fabrication shop, transitions, hoppers, side walls, and supports are built to your line — not forced from a catalog.',
    ],
    bestFor: ['Recycling processors & MRFs', 'Distribution centers with baler lines', 'Manufacturers moving scrap', 'Pallet & wood operations', 'E-scrap & specialty sorters', 'Any operation feeding a horizontal baler'],
    features: [
      { h: 'Every construction type', p: 'Slider-bed, troughed idler, steel-belt, hinged-apron, drag-chain — specified to the material’s weight, abrasiveness, and flow.' },
      { h: 'In-ground & incline systems', p: 'Pit conveyors and incline infeeds designed to your building, with guarding and access engineered in.' },
      { h: 'Repair that shows up', p: 'Belts, lacing, rollers, bearings, drives, and tracking issues fixed by techs who work on these lines weekly — see our conveyor service page.' },
      { h: 'Fabricated to fit', p: 'Hoppers, transitions, supports, and crossovers welded in-house, which is usually the difference between "installed" and "installed right."' },
    ],
    faqs: [
      { q: 'Can you add a conveyor to my existing baler?', a: 'In most cases yes — infeed conveyors retrofit well to horizontal balers and many shredders. We survey the line, confirm heights and speeds, and quote the whole retrofit including controls.' },
      { q: 'Do you move conveyors between buildings?', a: 'Yes. Relocating processing lines is part of our equipment logistics service — teardown, transport, reinstall, and recommissioning.' },
      { q: 'What about conveyor guarding and compliance?', a: 'We fabricate and install guarding, emergency stops, and crossovers to keep the line compliant and your people safe.' },
    ],
    related: ['horizontal-balers', 'shredders', 'used-recycling-equipment'],
  },
  {
    slug: 'baling-wire',
    name: 'Baling Wire',
    cardTitle: 'Baling Wire',
    kicker: 'Single-Loop · Double-Loop · Delivered',
    short: 'Single-loop and double-loop bale ties, boxed wire, delivered regionally.',
    metaTitle: 'Baling Wire | Single-Loop & Double-Loop Bale Ties, Delivered | Norton Equipment',
    metaDesc:
      'Cardboard baling wire — single-loop and double-loop bale ties in every standard length and gauge, delivered across Memphis, North Mississippi, West Tennessee, and East Arkansas by Norton Equipment.',
    intro: [
      'Wire is the one consumable every baler needs, and running out stops your recycling program cold. Norton Equipment stocks and delivers baling wire across the Mid-South: single-loop bale ties for standard vertical balers, double-loop ties for fast tying and heavier bales, and boxed stem wire for auto-tie horizontal machines.',
      'Which wire you need depends on your machine and your bales. Single-loop ties thread through the baler’s chamber slots and twist off at a loop — the everyday answer for most vertical balers. Double-loop ties have a preformed loop on each end that hook together, tying faster and holding more expansion force, which matters on high-density machines and springy material like plastics and shrink film. Longer or heavier bales need longer, heavier-gauge ties. If that paragraph raised questions, call us — matching wire to machine is a thirty-second conversation that prevents broken bales and blown budgets.',
    ],
    bestFor: ['Grocery & retail balers', 'Distribution centers', 'Recyclers & processors', 'Manufacturers', 'Farms & ag operations', 'Anyone tired of wire surprises'],
    features: [
      { h: 'Single-loop bale ties', p: 'Standard lengths from 10′ to 21′ in 10- to 14-gauge — the everyday tie for vertical balers, sized to your chamber.' },
      { h: 'Double-loop bale ties', p: 'Faster tying and higher hold for high-density balers and expansive materials. Loop-to-loop connection, no twisting.' },
      { h: 'Boxed & stem wire', p: 'Continuous wire for auto-tie horizontal balers, in the gauges your machine’s manual actually calls for.' },
      { h: 'Regional delivery', p: 'Scheduled and will-call delivery across our service area. Standing orders keep high-volume operations from ever calling in a panic.' },
    ],
    faqs: [
      { q: 'Single-loop vs. double-loop — which do I need?', a: 'Most standard vertical balers use single-loop ties. Step up to double-loop when you run a high-density baler, bale expansive material (plastics, film, foam), or want faster tying. When in doubt, tell us your baler model — we will match it from memory more often than not.' },
      { q: 'What length and gauge should I order?', a: 'Length is set by your bale chamber (a 60″ baler commonly runs 14′–16′ ties; 72″ machines run longer); gauge by bale weight and material spring. It is printed in your manual, or just ask us.' },
      { q: 'Do you deliver wire without an equipment purchase?', a: 'Yes — wire delivery is its own business for us. Plenty of customers started with a pallet of ties and became equipment customers later.' },
    ],
    related: ['vertical-balers', 'horizontal-balers', 'used-vertical-balers'],
  },
  {
    slug: 'used-recycling-equipment',
    name: 'Used Recycling Equipment',
    cardTitle: 'Used Recycling Equipment',
    kicker: 'Balers · Conveyors · More',
    short: 'Reconditioned balers, conveyors, shredders, and support equipment.',
    metaTitle: 'Used Recycling Equipment | Reconditioned Balers, Conveyors & More | Norton Equipment',
    metaDesc:
      'Used and reconditioned recycling equipment — balers, conveyors, shredders, and support machinery — inspected and rebuilt by Norton Equipment in Byhalia, MS. Buy, sell, and trade.',
    intro: [
      'Recycling equipment is built heavy, which means good machines outlive their first owners’ needs. Our used equipment operation captures that value: we buy, recondition, and resell balers, conveyors, shredders, and support equipment — and we buy machines outright when companies close, consolidate, or upgrade.',
      'Everything we resell goes through the same shop discipline as our used balers and compactors: inspected, rebuilt where it counts, safety systems verified, cycle-tested, and backed by our service network. If you are hunting a specific machine, tell us — the Mid-South equipment grapevine runs through our shop, and we can usually find it.',
    ],
    bestFor: ['Budget-minded processors', 'Growing recycling programs', 'Backup & spare machines', 'Plant liquidations (we buy)', 'Specific-machine searches', 'Trade-in upgrades'],
    features: [
      { h: 'Rotating multi-category inventory', p: 'Vertical and horizontal balers, conveyors, shredders, tippers, and odd finds — the floor changes monthly. Call for the current list.' },
      { h: 'We buy equipment too', p: 'Closing a plant or upgrading a line? We buy balers, compactors, and conveyors outright, and handle the rigging and removal ourselves.' },
      { h: 'Locator service', p: 'Need a specific model? We search dealer and processor networks across the region and recondition what we find before it reaches you.' },
      { h: 'Backed like new machines', p: 'Shop warranty, parts support, and the same service techs — a used machine from Norton is not an orphan.' },
    ],
    faqs: [
      { q: 'What used equipment is in stock right now?', a: 'Inventory turns fast, so the honest answer is: call (662) 838-7900 or send the quote form. Tell us what you are hunting and we will send photos and specs of matches on the floor — or find one.' },
      { q: 'Do you buy single machines or only full plants?', a: 'Both. One tired vertical baler or an entire processing line — if it is waste or recycling equipment, we will look at it.' },
      { q: 'Can used equipment be financed or rented?', a: 'Ask about terms on larger reconditioned machines and rent-to-own paths on select units.' },
    ],
    related: ['used-vertical-balers', 'conveyors', 'shredders'],
  },
];
