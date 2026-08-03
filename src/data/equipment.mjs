// ============================================================
// Equipment pages - trash compactors (lead) + balers & recycling
// Each entry renders to /<family>/<slug>/index.html
//
// Client/JT notes applied 7/26:
//  - Rentals removed as an advertised offering (future growth area).
//  - Shredders and Conveyors removed (Norton does not typically
//    sell or install them).
//  - Front-Load & Rear-Load reframed as CONTAINERS (they do not
//    compact); 3:1 ratio claim removed.
//  - Copy corrections on self-contained, stationary, vertical/
//    apartment, pre-crusher, and auger per JT.
//  - Balers: umbrella term is "Balers" (not "Cardboard Balers");
//    added Two-Ram and Specialty balers.
//  - Used/refurbished framed as made-to-order / short turnaround.
//
// Client revisions applied 7/31:
//  - Compactor Enclosures reworked into Steel Options: custom steel
//    built per site (walk-on/drive-on decks, chutes, enclosures,
//    guards). Moved to /trash-compactors/steel-options/.
//  - Used and Refurbished balers split into separate pages; the old
//    "Used Vertical Balers" page was refurbished content throughout.
//  - Used Recycling Equipment page removed, absorbed by the two above.
//  - Specialty balers: Norton sources them, does not build them.
//  - Warranty (confirmed 7/31): refurbished balers carry a shop
//    warranty; used balers are sold as-is with none.
//  - PENDING CLIENT: photos for stationary, pre-crusher, used
//    compactors, and steel options; whether the plant tear-out
//    customer can be named.
// ============================================================

export const COMPACTOR_OVERVIEW = {
  slug: '',
  name: 'Commercial Trash Compactors',
  kicker: 'Sales · Service · Any Brand',
  metaTitle: 'Commercial Trash Compactors | Sales & Service in the Mid-South | Norton Equipment',
  metaDesc:
    'Commercial trash compactor sales, installation, and service across Memphis, North Mississippi, West Tennessee, and East Arkansas. Self-contained, stationary, vertical, pre-crusher, and auger compactors: every major brand, since 1997.',
  h1: 'Commercial Trash Compactors',
  sub: 'The right compactor cuts hauling pickups by half or more. Norton Equipment sells, installs, services, and refurbishes every major type of commercial trash compactor across the Mid-South, and we service any brand, any model.',
  intro: [
    'A commercial trash compactor is the fastest way to shrink a hauling bill. Instead of paying to haul air in half-empty containers, a compactor crushes waste into a fraction of its volume, so you pay for fewer pickups and keep a cleaner site.',
    'The catch is that "compactor" covers a family of very different machines. A grocery store with wet food waste needs a leak-tight self-contained unit. A distribution center moving mountains of dry cardboard and packaging needs a stationary compactor matched to a receiver container. An apartment building needs a compact vertical unit that fits a trash room. Pick wrong and you buy problems; pick right and the machine pays for itself.',
    'That is where we come in. Norton Equipment has been sizing, selling, installing, and servicing waste equipment in the Mid-South since 1997. We are not tied to one manufacturer and we do not lock you into a hauling contract. We spec the machine that fits your waste stream, your dock, and your budget, then we stand behind it with our own service techs.',
  ],
  types: [
    { slug: 'self-contained', blurb: 'Leak-tight units for wet waste: grocery, restaurants, hospitals, food service.' },
    { slug: 'stationary', blurb: 'High-volume dry waste: warehouses, DCs, retail, manufacturing.' },
    { slug: 'vertical-apartment', blurb: 'Tight footprints: behind stores and at the end of apartment trash chutes.' },
    { slug: 'pre-crusher', blurb: 'Crushes bulky industrial waste before compaction: pallets, drums, furniture.' },
    { slug: 'auger', blurb: 'Screw-driven compaction for high-volume cardboard and wood waste.' },
    { slug: 'front-load-rear-load', blurb: 'Hauler-compatible front-load and rear-load containers (no compaction).' },
    { slug: 'steel-options', blurb: 'Walk-on and drive-on decks, chutes, enclosures, and guards, built per site.' },
    { slug: 'used', blurb: 'Reconditioned compactors, built to order on a short turnaround.' },
  ],
  faqs: [
    {
      q: 'How much does a commercial trash compactor cost?',
      a: 'New commercial compactors typically run from around $15,000 for smaller vertical and stationary units to $40,000+ for large self-contained, pre-crusher, and auger machines, plus installation. Reconditioned units bring the entry cost down. The honest answer depends on your waste type and volume. Call (662) 838-7900 and we will spec it in one conversation.',
    },
    {
      q: 'Do you service compactors you didn’t sell?',
      a: 'Yes. We service and repair every major make and model (Marathon, Cram-A-Lot, PTR, BACE, and more) whether or not it came from us. All makes, all models.',
    },
    {
      q: 'How fast can you get to a service call?',
      a: 'Our goal is to respond to service requests within 24 hours across the North Mississippi and Memphis area. If a machine is down, tell us when you call (662) 838-7900 and we will prioritize it.',
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
    short: 'Leak-tight compaction for wet waste: grocery, food service, hospitals.',
    metaTitle: 'Self-Contained Trash Compactors | Wet Waste | Norton Equipment',
    metaDesc:
      'Self-contained trash compactors for grocery stores, restaurants, hospitals, and food service in the Mid-South. Leak-tight wet-waste compaction: sales, installation, and service from Norton Equipment, Byhalia MS.',
    intro: [
      'A self-contained compactor combines the compaction unit and the container into one sealed, leak-tight body. When the container is full, the whole machine is hauled away, emptied, and returned. Nothing drips on the pad and nothing leaks down the street behind the truck.',
      'That makes self-contained units the standard answer for wet waste: grocery stores, restaurants and commissaries, hospitals and care facilities, hotels, and food processors. If your waste stream has liquid in it, this is almost certainly your machine, and health inspectors agree.',
    ],
    bestFor: ['Grocery stores & supermarkets', 'Restaurants & commissaries', 'Hospitals & care facilities', 'Hotels & hospitality', 'Food processing plants', 'Convenience & retail with food waste'],
    features: [
      { h: 'Leak-tight construction', p: 'Fully welded, sealed container with liquid retention: no leachate on the pad, no drips, no slip hazards behind the store.' },
      { h: 'Sized to your volume', p: 'Common sizes run roughly 15 to 35 cubic yards with 2-yard charge chambers. We size the unit to your pickup schedule so you are not paying to haul a half-empty box.' },
      { h: 'Pest control', p: 'A sealed body keeps rodents, birds, and flies out of the waste and liquid off the pad. For food retail, that alone can justify the machine.' },
      { h: 'Hauler compatible', p: 'Built to standard roll-off hoist specs, so any hauler in the Memphis area can pick it up. You keep the leverage in your hauling contract.' },
    ],
    faqs: [
      { q: 'What’s the difference between self-contained and stationary compactors?', a: 'A self-contained compactor is one sealed unit (compactor and container together) hauled away as a whole. A stationary compactor stays bolted to your pad and pushes waste into a detachable receiver container. Wet waste needs self-contained; dry waste usually runs cheaper on stationary.' },
      { q: 'How often will it need to be hauled?', a: 'A properly sized self-contained unit typically cuts pickups from daily-or-every-other-day dumpster service down to once every one to two weeks, depending on volume. We size it from your current hauling history.' },
      { q: 'Do you install and maintain them?', a: 'Yes: full turnkey install (pad, power, chutes or through-wall feed if needed) plus preventive maintenance and emergency repair from our own techs. We service all brands.' },
    ],
    related: ['stationary', 'used', 'vertical-apartment'],
  },
  {
    slug: 'stationary',
    name: 'Stationary Compactors',
    cardTitle: 'Stationary',
    kicker: 'Dry Waste · High Volume',
    short: 'High-volume dry-waste compaction for warehouses, DCs, retail, and manufacturing.',
    metaTitle: 'Stationary Trash Compactors | Warehouses & Distribution | Norton Equipment',
    metaDesc:
      'Stationary compactors for warehouses, distribution centers, retail, and manufacturing across Memphis and the Mid-South. Sales, installation, and service from Norton Equipment.',
    intro: [
      'A stationary compactor is the workhorse of dry waste. The compactor stays anchored to your pad and rams waste into a detachable receiver container; when the container is full, the hauler swaps it and the compactor keeps working. Downtime is basically zero, and cost per hauled yard is as low as it gets.',
      'For the Memphis metro (one of the largest warehouse and distribution markets in America) this is the machine behind the building. Cardboard, shrink wrap, packaging, floor sweepings, break-room trash: a properly sized stationary unit compacts roughly four loose yards into one.',
    ],
    bestFor: ['Distribution centers & warehouses', 'Manufacturing plants', 'Big-box & strip retail', 'Printers & converters', 'Schools & institutions', 'Transfer & logistics operations'],
    features: [
      { h: 'Maximum payloads', p: 'Compaction ratios of roughly 3:1 to 4:1 on typical dry waste mean your hauler moves full, heavy containers, not air. Fewer pulls, smaller bill.' },
      { h: 'Continuous operation', p: 'Because the receiver container detaches, the compactor never leaves your dock. Swap the box and keep feeding.' },
      { h: 'Feed options', p: 'Ground feed, dock feed, through-wall chute, or hopper with cart tipper. We configure the feed setup that fits your building.' },
      { h: 'Ratings for every duty', p: 'From 2-yard charge chambers for retail to heavy-gauge industrial units for round-the-clock DCs. We match cycle force and chamber size to your waste.' },
    ],
    faqs: [
      { q: 'Can a stationary compactor handle any wet waste?', a: 'Incidental moisture is fine, but free liquid will leak from the receiver container, that is what self-contained units are for. Mixed streams are worth a quick waste audit, which we do free on-site.' },
      { q: 'What power do I need?', a: 'Most commercial units run 208/230/460V three-phase. If your building lacks three-phase at the dock, we will tell you before you buy and coordinate the rest of the install.' },
      { q: 'Do stationary compactors work with any hauler?', a: 'Yes, receiver containers are standard roll-off equipment. You keep full freedom to bid your hauling out, which is exactly the leverage national haulers hope you never use.' },
    ],
    related: ['self-contained', 'pre-crusher', 'auger'],
  },
  {
    slug: 'vertical-apartment',
    name: 'Vertical & Apartment Compactors',
    cardTitle: 'Vertical & Apartment',
    kicker: 'Tight Spaces · Hand-Fed & Chute-Fed',
    short: 'Compact machines for behind stores and at the end of apartment trash chutes.',
    metaTitle: 'Vertical & Apartment Compactors | Tight Spaces & Multi-Family | Norton Equipment',
    metaDesc:
      'Vertical compactors for retail, restaurants, and hotels, plus apartment and high-rise chute-fed compaction systems in Memphis and the Mid-South. Sales, chute systems, service, and maintenance from Norton Equipment.',
    intro: [
      'Not every site has the footprint for a machine, a container, and the hauler’s truck to service it. Vertical compactors pack waste downward into a standard front-load container or cart inside a footprint just a few feet square, so they fit where a full compactor-and-receiver setup will not.',
      'A vertical compactor is hand-fed and typically goes behind a store, retail center, restaurant, or hotel. An apartment compactor is its multi-family cousin: it sits at the end of a trash chute or in a central collection room, taking what residents drop and packing it into a container your hauler already lifts. We sell, install, and service both across the Memphis metro.',
    ],
    bestFor: ['Retail & shopping centers', 'Restaurants & hotels', 'Apartment complexes & high-rises', 'Parking structures & trash rooms', 'Small-footprint sites', 'Municipal & campus housing'],
    features: [
      { h: 'Small footprint, real compaction', p: 'Vertical units compact into standard 2- to 8-yard front-load containers your hauler already lifts, typically several bags’ volume into the space of one.' },
      { h: 'Hand-fed or chute-fed', p: 'Hand-fed units go behind stores and restaurants; chute-fed apartment systems sit at the base of a trash chute or in a central collection room. We supply and service both.' },
      { h: 'Resident-proof controls', p: 'Keyed or interlocked operation, full guarding, and simple controls that survive real-world use by hundreds of residents.' },
      { h: 'Cleaner corrals', p: 'Contained compaction means no overflowing dumpsters, fewer bulk-pile complaints, and a property that shows better.' },
    ],
    faqs: [
      { q: 'Will a vertical compactor work with my current hauler?', a: 'Yes: vertical units compact into standard front-load containers, so your existing route service continues unchanged. You just need far fewer lifts.' },
      { q: 'Can you service the compactor at the bottom of our trash chute?', a: 'That is one of the most common calls we run. We service chute-fed apartment and high-rise compactors across the metro, all brands, and fabricate replacement parts in-house when manufacturers are slow.' },
      { q: 'What about recycling at multi-family properties?', a: 'We can pair a compactor with a baler or additional containers for a clean dual-stream setup, and our waste stream consultation will tell you if the numbers work.' },
    ],
    related: ['front-load-rear-load', 'steel-options', 'used'],
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
      'Some waste refuses to compact politely. Pallets, drums, crates, furniture, appliances, manufacturing rejects: bulky items bridge inside a standard compactor, cycle after cycle, and wear the machine out fighting them. A pre-crusher solves it with brute force: a reinforced chamber and ram crush the load flat against a breaker door before pushing it into the receiver container.',
      'For manufacturers, furniture and appliance operations, distribution centers with heavy pallet waste, and industrial plants around the Mid-South, a pre-crusher turns the bulkiest waste stream in the building into the most efficient one.',
    ],
    bestFor: ['Manufacturing & industrial plants', 'Furniture & appliance operations', 'Distribution centers with pallet waste', 'Construction & demolition support', 'Military & institutional sites', 'Product destruction programs'],
    features: [
      { h: 'Crush-then-compact cycle', p: 'The ram crushes bulky items flat against a hardened breaker door before transferring them to the container: no bridging, no jamming, maximum density.' },
      { h: 'Heavy structural build', p: 'Thicker floors, reinforced sidewalls, and high-force cylinders built for abuse. This is the machine you buy when you have already worn out a standard compactor.' },
      { h: 'Certified destruction', p: 'Pre-crushers are a strong tool for secure product destruction: returns, recalls, and off-spec goods crushed on site.' },
      { h: 'Sized with the right receiver', p: 'We pair the crusher with receiver containers and hauling arrangements matched to dense, heavy loads.' },
    ],
    faqs: [
      { q: 'Do I need a pre-crusher or just a bigger stationary compactor?', a: 'If your waste is mostly loose dry material with occasional bulky items, a heavy-duty stationary unit may do. If pallets, drums, or furniture are a daily fact of life, a pre-crusher will outlast and outperform anything else. Send us photos of your waste stream and we will give you a straight answer.' },
      { q: 'Can a pre-crusher handle metal drums?', a: 'Yes: crushing steel drums (empty and rinsed) is a classic pre-crusher duty, along with banding, strapping, and light structural scrap.' },
      { q: 'What maintenance do they need?', a: 'Hydraulics, packing, and wear surfaces on a schedule. Our preventive maintenance plans keep cycle force where the spec sheet says it should be, and our shop rebuilds floors and wear surfaces when the years add up.' },
    ],
    related: ['stationary', 'auger', 'used'],
  },
  {
    slug: 'auger',
    name: 'Auger Compactors',
    cardTitle: 'Auger',
    kicker: 'Cardboard & Wood · High Volume',
    short: 'Screw-driven compaction for high-volume cardboard and wood waste.',
    metaTitle: 'Auger Compactors | High-Volume Cardboard & Wood Waste | Norton Equipment',
    metaDesc:
      'Auger compactors for high-volume cardboard and wood waste. A rotating screw tears and forces material into the container for top density. Sales, installation, and service from Norton Equipment in the Mid-South.',
    intro: [
      'An auger compactor replaces the ram with a large rotating screw that tears material apart and forces it into the container. It cycles like any compactor, but it is built for a steady, high-volume feed and packs cardboard and wood waste to densities a ram machine struggles to match.',
      'Auger units are at their best on cardboard and wood: high-volume distribution centers, manufacturing lines with continuous cardboard and wood scrap, printers, and packaging plants. They are not the right fit for mixed municipal trash or a general big-box retail waste stream, and we will tell you when a stationary ram unit is the smarter buy.',
    ],
    bestFor: ['High-volume cardboard operations', 'Wood-waste & pallet operations', 'Manufacturing with continuous scrap', 'Printing & packaging plants', 'Distribution & fulfillment (cardboard)', 'Recyclers'],
    features: [
      { h: 'Built for continuous feed', p: 'The screw runs as material arrives, so a cart tipper or conveyor line can keep it fed through a busy shift.' },
      { h: 'Highest container density', p: 'The tearing-and-packing action routinely loads noticeably more weight per container than a comparable ram compactor on cardboard and wood. Fewer pulls, period.' },
      { h: 'Best on cardboard & wood', p: 'Augers earn their keep on cardboard and wood waste. For wet or mixed municipal waste, a self-contained or stationary ram unit is the better tool.' },
      { h: 'Low jam rates on bulky OCC', p: 'The screw self-clears most bridging that stalls ram machines on high-volume corrugated.' },
    ],
    faqs: [
      { q: 'Auger vs. ram compactor, which is cheaper to run?', a: 'On high-volume cardboard and wood, augers pull ahead on hauling savings because container payloads are so much heavier. On lower volumes or mixed waste, a well-sized stationary ram unit is usually the better buy. We will run your numbers honestly.' },
      { q: 'Is an auger a shredder?', a: 'No. An auger does not shred; its screw tears material and forces it into the container. It reduces and densifies, but it is a compactor, not a size-reduction shredder.' },
      { q: 'Do you service auger compactors?', a: 'Yes: screws, drives, gearboxes, and controls, all brands. Our shop also rebuilds flighting and hoppers that other shops would replace outright.' },
    ],
    related: ['stationary', 'pre-crusher', 'used'],
  },
  {
    slug: 'front-load-rear-load',
    name: 'Front-Load & Rear-Load Containers',
    cardTitle: 'Front-Load & Rear-Load Containers',
    kicker: 'Route-Truck Compatible · Containers',
    short: 'Standard hauler-compatible containers for regular pickup routes.',
    metaTitle: 'Front-Load & Rear-Load Containers | Route-Compatible | Norton Equipment',
    metaDesc:
      'Front-load and rear-load waste containers compatible with standard hauler route trucks, for retail, restaurants, and multi-tenant sites in the Mid-South. Norton Equipment: sales & service since 1997.',
    intro: [
      'Front-load and rear-load containers are the everyday steel cans your hauler’s route trucks lift and empty on a schedule (commonly 2 to 8 yards front-load, plus rear-load carts and containers). They do not compact: they hold and present the waste for pickup, which is exactly what many restaurants, strip retailers, and multi-tenant sites need.',
      'Norton supplies and services front-load and rear-load containers across the Memphis metro. When your volume grows to the point that you are paying for too many pickups, that is the moment to step up to a compactor, and we will show you where that line is. Until then, a clean, well-sized container on a right-sized route is the simplest setup there is.',
    ],
    bestFor: ['Restaurants & QSR', 'Strip centers & multi-tenant retail', 'Schools & campuses', 'Office parks', 'C-stores & fuel sites', 'Municipal facilities'],
    features: [
      { h: 'Works with your route service', p: 'Standard front-load and rear-load sizes your hauler’s trucks already lift: no special equipment, no contract gymnastics.' },
      { h: 'Clean, contained sites', p: 'Lids stay closed, corrals stay tidy, and windblown litter stops being the neighbor’s problem.' },
      { h: 'Durable steel', p: 'Built to take daily route-truck handling, with repair and replacement handled locally by our crew.' },
      { h: 'A clear upgrade path', p: 'When pickups start piling up, we help you compare staying on containers against stepping up to a vertical or stationary compactor.' },
    ],
    faqs: [
      { q: 'Do front-load containers compact the waste?', a: 'No. Front-load and rear-load containers hold waste for pickup, they do not compact it. If you want to cut the number of pickups, that is what a compactor does, and we can size one for you.' },
      { q: 'When should I switch from a container to a compactor?', a: 'When you are paying for frequent pickups on containers that leave light, a compactor usually pays for itself. Send us a couple of months of hauling invoices and we will run the comparison.' },
      { q: 'Can you service and replace our existing containers?', a: 'Yes, we handle containers as part of keeping your whole waste setup running, alongside the compactors and balers we service.' },
    ],
    related: ['vertical-apartment', 'stationary', 'steel-options'],
  },
  {
    // PENDING CLIENT PHOTO: client asked for a different image here. Using a
    // fabrication shot until they send one of Norton's own steel work.
    slug: 'steel-options',
    name: 'Steel Options',
    cardTitle: 'Steel Options',
    kicker: 'Built Custom · Per Site · Measured to Fit',
    short: 'Walk-on decks, drive-on decks, chutes, enclosures, and guards, built custom for your site.',
    metaTitle: 'Steel Options | Decks, Chutes, Enclosures & Guards | Norton Equipment',
    metaDesc:
      'Custom steel built per site by Norton Equipment: walk-on decks, drive-on decks, feed chutes, compactor enclosures, safety guards, and more. Measured to fit your machine and building across the Mid-South.',
    intro: [
      'Steel options are the parts we build around your machine rather than a type of compactor. Walk-on decks, drive-on decks, feed chutes, compactor enclosures, guards, rails, stairs, hoppers, and platforms. Whatever the site needs to make the equipment safe, reachable, and easy to feed.',
      'Every one of these is built custom, per site. We measure your machine, your pad, and your building, then fabricate and install to those numbers. Nothing here comes out of a catalog to be forced into place, and because we service the equipment inside it, the crew building the steel already knows how the machine has to be reached.',
      'That applies whether or not we sold you the compactor. Brand does not matter. If you have a machine that needs a deck, a chute, or guarding around it, we will come measure it.',
    ],
    bestFor: ['Retail & grocery sites', 'Distribution centers', 'Multi-family properties', 'Hospitals & campuses', 'Municipal facilities', 'Any site with safety audits'],
    features: [
      { h: 'Walk-on & drive-on decks', p: 'Decks built to your grade and your loading height, rated for foot traffic or for driving onto, so material gets to the machine the way your site actually works.' },
      { h: 'Chutes, hoppers & platforms', p: 'Through-wall chutes, dock-height hoppers, cart tippers, stairs, and platforms built to your building rather than to a standard drawing.' },
      { h: 'Compactor enclosures', p: 'Locking gates and screens that end after-hours dumping and scavenging, and keep the waste corner from being the first thing a customer sees.' },
      { h: 'Guards & safety steel', p: 'Access guarding, rails, gates, and interlocked panels that keep hands and forklifts out of the charge chamber, and your safety officer satisfied.' },
    ],
    galleryEyebrow: 'Recent Steel',
    galleryHeading: 'Measured, fabricated, installed.',
    gallery: [
      { img: 'n-walk-on-deck', alt: 'A walk-on deck with guard rails built by Norton', cap: 'Walk-on deck with guard rails' },
      { img: 'n-chute', alt: 'A fabricated feed chute and doghouse on a customer wall', cap: 'Feed chute & doghouse' },
      { img: 'n-thru-wall-door', alt: 'A dual sliding through-wall door fabricated by Norton', cap: 'Through-wall door' },
      { img: 'n-hopper', alt: 'A rear feed hopper with gate fabricated by Norton', cap: 'Rear feed hopper with gate' },
    ],
    faqs: [
      { q: 'What steel options can you build?', a: 'Walk-on decks, drive-on decks, chutes, hoppers, enclosures, guards, rails, stairs, and platforms. If it is steel that goes around your equipment, ask. Most of what we build is one-off work for a specific site.' },
      { q: 'Can you build steel for a machine from another dealer?', a: 'Yes. We measure your machine and pad and build to fit: brand does not matter.' },
      { q: 'Do these require permits?', a: 'Depends on the municipality and whether the structure is load-bearing. We have built across three states and will flag anything your jurisdiction requires.' },
      { q: 'Can you repair damaged decks or guarding?', a: 'Yes, we repair or rebuild bent rails, gates, decks, and panels, usually faster and cheaper than replacement.' },
    ],
    related: ['stationary', 'self-contained', 'vertical-apartment'],
  },
  {
    // PENDING JT (7/26): JT wants a working session on this page + a correct
    // photo (current scraped image was a baler). Framed as made-to-order.
    slug: 'used',
    name: 'Used Compactors',
    cardTitle: 'Used Compactors',
    kicker: 'Reconditioned · Built to Order · Short Turnaround',
    short: 'Shop-reconditioned compactors, built to order on a short turnaround.',
    metaTitle: 'Used & Reconditioned Trash Compactors | Norton Equipment',
    metaDesc:
      'Reconditioned trash compactors rebuilt to your spec: inspected, cycle-tested, and warrantied, on a short turnaround across the Mid-South.',
    intro: [
      'A commercial compactor is a steel box with hydraulics, which means a properly reconditioned machine can run for another decade at a fraction of new cost. The difference between a bargain and a headache is who did the reconditioning.',
      'We build reconditioned compactors to order rather than holding a big lot: tell us what you need and we source the right core, then it goes through our fabrication shop, hydraulics tested and resealed, cylinders and packing serviced, floors and wear surfaces gone through, controls checked, and the machine cycle-tested under load before it ships. Turnaround is usually short, and we stand behind it because we are also the ones who will service it in the field.',
    ],
    bestFor: ['Budget-conscious operations', 'Backup & secondary machines', 'Seasonal facilities', 'Startups & expansions', 'Replacing a failed unit fast', 'Fleet standardization on a budget'],
    features: [
      { h: 'Shop-reconditioned, not "as-is"', p: 'Hydraulics, electrics, structure, and safety systems are gone through in our shop, not pressure-washed and flipped.' },
      { h: 'Built to order, short turnaround', p: 'We source and recondition to your spec rather than pushing whatever is on a lot, and turnaround is usually quick. Tell us what you need.' },
      { h: 'Warrantied & supported', p: 'Reconditioned units carry a shop warranty and full access to our parts and service network.' },
    ],
    faqs: [
      { q: 'How much does a used compactor save?', a: 'Typically 30-60% versus new, depending on age, size, and condition. On larger machines that is real money, often enough to fund installation and an enclosure.' },
      { q: 'Do you keep used machines in stock?', a: 'We build reconditioned units to order on a short turnaround rather than holding a large lot. Call (662) 838-7900 with what you need and we will source and rebuild the right machine.' },
      { q: 'What warranty comes with a reconditioned unit?', a: 'Shop warranty terms vary by machine and are quoted with the unit. Every unit is also backed by our regular service and parts operation.' },
    ],
    related: ['stationary', 'self-contained', 'pre-crusher'],
  },
];

// ------------------------------------------------------------
// Balers & recycling  (JT: umbrella term is "Balers", then highlight kinds)
// ------------------------------------------------------------

export const BALER_OVERVIEW = {
  slug: '',
  name: 'Balers & Recycling Equipment',
  kicker: 'The Business Norton Was Built On',
  metaTitle: 'Balers & Recycling Equipment | Sales & Service | Norton Equipment',
  metaDesc:
    'Vertical, horizontal, two-ram, and specialty balers, plus refurbished machines and wire delivery across the Mid-South since 1997.',
  h1: 'Balers & Recycling Equipment',
  sub: 'Balers built Norton Equipment’s reputation. From back-room vertical balers to automatic horizontal and two-ram systems, we sell, service, refurbish, and supply wire for the machines that turn your cardboard from a cost into a revenue line.',
  intro: [
    'Loose cardboard is a triple expense: it fills containers you pay to haul, eats labor to break down, and clutters the back room. Baled cardboard is the opposite, a commodity that recyclers pay for. A baler is the machine that flips that switch, and it has been the heart of Norton Equipment’s business since 1997.',
    'We cover the full range of balers: vertical balers for back rooms, horizontal and two-ram balers for volume operations, and specialty balers for materials like foam and film. Add reconditioned equipment for tight budgets and the bale wire that ties every load, and one call covers the machine, the install, the service, and the consumables.',
    'And because we service any brand and any model with our own techs, the baler you already own is just as welcome as the one you buy from us.',
  ],
  types: [
    { slug: 'vertical-balers', blurb: 'The back-room workhorse for retail, grocery, and warehouses.' },
    { slug: 'horizontal-balers', blurb: 'High-volume automatic baling, built to the job.' },
    { slug: 'two-ram-balers', blurb: 'Multi-material baling for recyclers and high-volume plants.' },
    { slug: 'specialty-balers', blurb: 'Foam, film, and other specialty materials, sourced to order.' },
    { slug: 'refurbished-balers', blurb: 'Rebuilt in our shop, cycle-tested, and warrantied.' },
    { slug: 'used-balers', blurb: 'Sold as they came in: inspected, described, priced accordingly.' },
    { slug: 'baling-wire', blurb: 'Single-loop and double-loop wire, delivered across the Mid-South.' },
  ],
  faqs: [
    { q: 'What does a baler cost?', a: 'New vertical balers generally run from about $6,000 to $20,000 depending on size and features; horizontal and two-ram systems start around $30,000 and scale with automation. Reconditioned verticals cost far less. We quote exact numbers after a quick conversation about your volume.' },
    { q: 'Can I sell my baled cardboard?', a: 'Yes, mill-size bales of clean OCC (old corrugated cardboard) are a traded commodity. Depending on market prices and your volume, bales can offset hauling costs or become a genuine revenue line. Our waste stream consultation covers the current market and local buyers.' },
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
    metaTitle: 'Vertical Balers | Sales, Install & Service | Norton Equipment',
    metaDesc:
      'Vertical downstroke balers for retail, grocery, and warehouses. Sales, installation, service, parts, and wire across the Mid-South from Norton Equipment: since 1997.',
    intro: [
      'The vertical downstroke baler is the most common recycling machine in America for a reason: it fits through a standard doorway footprint, runs on modest power, and turns a mountain of loose cardboard into dense, stackable, sellable bales with one operator and a few minutes a day.',
      'We sell and service the full range (from 42-inch balers for small retail up to wide-body 72-inch machines producing mill-size bales) and we stock the wire, do the operator training, and answer the service calls afterward. New machines are ordered to your spec, and we keep reconditioned units moving through the shop. If a back room in the Mid-South has a baler in it, odds are decent we have had a hand on it.',
    ],
    bestFor: ['Grocery & supermarkets', 'Big-box & strip retail', 'Warehouses & DCs', 'Manufacturers', 'Schools & hospitals', 'Hotels & distribution back rooms'],
    features: [
      { h: 'Every size class', p: '42″, 60″, and 72″ chambers; standard and high-density models. Mill-size bales (roughly 750-1,100 lbs on a 72″ HD) command the best recycler prices.' },
      { h: 'Simple, safe operation', p: 'Modern interlocked doors, keyed controls, and UL-listed panels. We train your crew at install and re-train new hires on request.' },
      { h: 'Low cost to run', p: 'Single-phase power options, minimal maintenance, and wire as the only consumable. Most stores recover the cost in reduced hauling within 12-24 months.' },
      { h: 'Parts & service network', p: 'We stock common cylinders, valves, switches, and platens, and our shop handles doors, chambers, and structural repairs in-house.' },
    ],
    faqs: [
      { q: 'What size vertical baler do I need?', a: 'It depends on your weekly cardboard volume and whether you want to sell bales. A store producing 20+ loose yards weekly usually justifies a 60″ machine; serious volume or resale ambitions point to a 72″ high-density. We size it free, on site.' },
      { q: 'What power does a vertical baler need?', a: 'Many run on 208/230V single-phase, normal commercial power. Larger high-density units may want three-phase. We confirm before you order.' },
      { q: 'How long does installation take?', a: 'Typically a half day: set, anchor, wire, test, and train. We handle delivery and rigging with our own equipment logistics crew.' },
    ],
    related: ['refurbished-balers', 'horizontal-balers', 'baling-wire'],
  },
  {
    slug: 'horizontal-balers',
    name: 'Horizontal Balers',
    cardTitle: 'Horizontal Balers',
    kicker: 'High Volume · Automatic · Built to Order',
    short: 'Automatic high-volume baling for DCs, recyclers, and manufacturers, built to the job.',
    metaTitle: 'Horizontal Balers | High-Volume Automatic Baling | Norton Equipment',
    metaDesc:
      'Horizontal balers for distribution centers, recyclers, and manufacturers in the Mid-South. High-volume automatic baling, ordered and built to the job, with installation and service from Norton Equipment.',
    intro: [
      'When cardboard volume outgrows a vertical baler (when someone is baling all shift instead of a few minutes a day) a horizontal baler changes the operation. Material feeds continuously into an open hopper, the ram runs automatically, and finished mill-size bales eject tied and ready to stack.',
      'We design, sell, install, and service horizontal systems across the Mid-South: closed-door manual-tie machines for growing operations and full auto-tie balers for serious volume. These are ordered and built to the job, and our crew handles the feed works, tippers, and setup that make the whole line run as one machine.',
    ],
    bestFor: ['Distribution & fulfillment centers', 'Recycling processors', 'Large manufacturers', 'Printers & converters', 'Multi-store consolidation points', 'Bottling & packaging plants'],
    features: [
      { h: 'Continuous automatic operation', p: 'Photo-eye start, automatic cycling, and auto-tie options mean the baler works while your people do something else.' },
      { h: 'Mill-spec bales', p: 'Dense, uniform export/mill bales maximize the price per ton your material brings and the payload per truck.' },
      { h: 'Built and installed to your building', p: 'Feed works, tippers, and setup fabricated and configured to your site so the line runs as one machine.' },
      { h: 'Multi-material capability', p: 'OCC, shrink film, PET, aluminum, non-ferrous: one machine, multiple commodity streams with the right options.' },
    ],
    faqs: [
      { q: 'At what volume does a horizontal baler make sense?', a: 'A common threshold is roughly 15-20 tons of cardboard per month: below that, a high-density vertical usually wins on cost. Labor matters too: if baling is a full-time job, automation pays. We will model both options for you.' },
      { q: 'Are horizontal balers in stock or built to order?', a: 'Horizontal systems are ordered and built to the job so the machine and feed setup fit your building and volume. We scope it with you and handle delivery, install, and commissioning.' },
      { q: 'Can you move or reinstall an existing horizontal system?', a: 'Yes, equipment logistics is one of our core services. We relocate, level, re-power, and recommission baling systems, including ones we did not originally install.' },
    ],
    related: ['two-ram-balers', 'vertical-balers', 'baling-wire'],
  },
  {
    slug: 'two-ram-balers',
    name: 'Two-Ram Balers',
    cardTitle: 'Two-Ram Balers',
    kicker: 'Multi-Material · High Volume · Built to Order',
    short: 'Automatic two-ram balers for recyclers and high-volume, multi-material plants.',
    metaTitle: 'Two-Ram Balers | Multi-Material High-Volume Baling | Norton Equipment',
    metaDesc:
      'Two-ram balers for recyclers and high-volume plants across the Mid-South: multi-material baling of OCC, plastics, and more, built to the job. Sales, installation, and service from Norton Equipment.',
    intro: [
      'A two-ram baler is the heavy hitter of the baling world. One ram compresses the charge while a second ram ejects the finished bale, so the machine handles a relentless, mixed feed and switches between materials without missing a beat. It is the baler you find at recyclers and high-volume plants that bale more than just cardboard.',
      'Norton sells, installs, and services two-ram balers across the Mid-South, ordered and built to the job. Whether you are baling OCC, plastics, or a mix of commodities, we scope the machine to your material and volume and back it with our own service techs.',
    ],
    bestFor: ['Recycling processors & MRFs', 'High-volume manufacturers', 'Multi-commodity operations', 'Plastics & film recyclers', 'Large distribution centers', 'Consolidation & transfer operations'],
    features: [
      { h: 'Two rams, no waiting', p: 'A dedicated gathering ram and eject ram let the machine keep taking material while it clears finished bales.' },
      { h: 'Multi-material by design', p: 'OCC, plastics, film, and mixed commodities: two-ram balers switch materials as needed without a hassle.' },
      { h: 'Built to the job', p: 'Ordered and configured to your material, volume, and building rather than pulled off a shelf.' },
      { h: 'Serviced by our own techs', p: 'Hydraulics, controls, and structure supported region-wide, whoever built the machine.' },
    ],
    faqs: [
      { q: 'Two-ram or single-ram horizontal, which do I need?', a: 'Single-ram (closed-door or auto-tie) horizontals are ideal for high-volume cardboard. Two-ram machines earn their keep when you bale several materials or need maximum throughput on a mixed stream. We will match the machine to your material.' },
      { q: 'Are two-ram balers built to order?', a: 'Yes, they are ordered and built to the job so the machine fits your material, volume, and floor plan. We scope it with you and handle install and commissioning.' },
      { q: 'Do you service two-ram balers from other dealers?', a: 'Yes. We service every major make and model, whether or not the machine came from us.' },
    ],
    related: ['horizontal-balers', 'vertical-balers', 'baling-wire'],
  },
  {
    slug: 'specialty-balers',
    name: 'Specialty Balers',
    cardTitle: 'Specialty Balers',
    kicker: 'Foam, Film & More · Sourced to Order',
    short: 'Balers for foam, film, and other specialty materials, sourced to your spec.',
    metaTitle: 'Specialty Balers | Foam, Film & Hard-to-Bale Materials | Norton Equipment',
    metaDesc:
      'Specialty balers for foam, film, and other hard-to-bale materials across the Mid-South. Sourced to order and serviced by Norton Equipment, independent since 1997.',
    intro: [
      'Not everything bales like cardboard. Foam, film, plastics, and other springy or lightweight materials need a baler built for the way they behave, with the chamber, hold-downs, and tie system to keep the bale together after the ram lets go.',
      'Norton can recommend and source specialty balers to order for the materials you actually handle. Tell us what you are baling and the volume, and we will spec the right machine, install it, and keep it running with our own service techs.',
    ],
    bestFor: ['Foam & packaging manufacturers', 'Film & plastics operations', 'Furniture & bedding plants', 'Textile & apparel operations', 'Specialty recyclers', 'Any hard-to-bale material'],
    features: [
      { h: 'Matched to the material', p: 'Chamber, hold-downs, and tie system specified for foam, film, or whatever springy material you handle, so the bale holds.' },
      { h: 'Sourced to order', p: 'Specialty balers are sourced and configured to your material and volume rather than stocked.' },
      { h: 'Dense, shippable bales', p: 'The right specialty baler turns a bulky, awkward material into a tight bale you can store, sell, or ship efficiently.' },
      { h: 'Serviced locally', p: 'Install, parts, and service from our own crew across the Mid-South.' },
    ],
    faqs: [
      { q: 'Can you bale foam or film?', a: 'Yes, foam and film are classic specialty-baler jobs. The machine needs the right chamber and tie system so the bale holds after compression, and we spec that to your material.' },
      { q: 'Are specialty balers in stock?', a: 'They are sourced to order to fit your specific material and volume. Send us a sample or a description and we will spec the machine.' },
      { q: 'Do you service specialty balers?', a: 'Yes, our techs service specialty balers alongside vertical, horizontal, and two-ram machines across the region.' },
    ],
    related: ['two-ram-balers', 'horizontal-balers', 'baling-wire'],
  },
  {
    slug: 'refurbished-balers',
    name: 'Refurbished Balers',
    cardTitle: 'Refurbished Balers',
    kicker: 'Rebuilt In Our Shop · Warrantied',
    short: 'Balers stripped and rebuilt in our Byhalia shop, at roughly half the cost of new.',
    metaTitle: 'Refurbished Balers | Rebuilt In-House & Warrantied | Norton Equipment',
    metaDesc:
      'Vertical and horizontal balers rebuilt in our Byhalia shop: resealed, flushed, safety-verified, cycle-tested, and warrantied. Serving the Mid-South.',
    intro: [
      'A baler is a thick steel chamber and a hydraulic cylinder. Rebuilt properly, a ten-year-old machine will bale cardboard for another decade, at roughly half the price of new. That has made refurbished balers one of the smartest purchases in the industry, and one of Norton’s specialties since the beginning.',
      'Refurbished means we actually fix the machine ourselves. It goes through our Byhalia shop: cylinder resealed, hydraulics flushed and tested, chamber and platen inspected, doors and latches trued, controls and safety interlocks verified, then cycle-tested under load. Each one ships with a shop warranty and our service network behind it. If a machine cannot be brought to standard, we scrap it rather than sell it.',
      'That is the difference between our refurbished machines and our used ones. A used baler is sold the way it came in. A refurbished baler has been through the shop. If you want the lower number and can live with a machine as-is, start with used balers instead.',
    ],
    bestFor: ['Small & mid-size retail', 'Startups adding recycling', 'Second machines & backups', 'Budget-driven replacements', 'Seasonal operations', 'Franchise rollouts'],
    features: [
      { h: 'Fully shop-reconditioned', p: 'Hydraulics, electrics, structure, and safety systems rebuilt and verified in house, not just painted.' },
      { h: 'About half the cost of new', p: 'Typical refurbished 60″ machines land at 40-60% of new pricing, with install and training included in the quote.' },
      { h: 'Refurbished to order', p: 'We keep cores and some finished refurbs ready; most machines go through the shop to your spec on a short turnaround. Call for what is ready now.' },
      { h: 'Trade up anytime', p: 'We buy back and trade as you grow: many customers step from a refurbished 60″ to a new 72″ HD with us a few years later.' },
    ],
    faqs: [
      { q: 'What is the difference between used and refurbished?', a: 'A used baler is sold as it came in. A refurbished baler has been through our Byhalia shop: rebuilt, cycle-tested, and covered by a shop warranty. Refurbished costs more and carries far less risk.' },
      { q: 'How do I know a refurbished baler is safe?', a: 'Every machine leaves our shop with interlocks, guards, and controls tested against current standards, and we document the reconditioning. If a machine cannot be brought to standard, we scrap it. We will not sell it.' },
      { q: 'Do you have refurbished balers ready now?', a: 'We keep cores and some finished refurbs on hand, and build the rest to order on a short turnaround. Call (662) 838-7900 and we will tell you what is ready and what we can turn around quickly.' },
      { q: 'Will you install a refurbished baler and train my team?', a: 'Delivery, rigging, anchoring, power hookup, testing, and operator training are all part of the deal, exactly as with a new machine.' },
    ],
    related: ['used-balers', 'vertical-balers', 'baling-wire'],
  },
  {
    // CONFIRMED CLIENT 7/31: used balers carry NO warranty; they are sold
    // as-is. Refurbished machines are the ones that carry the shop warranty.
    // Do not add warranty language here without checking first.
    slug: 'used-balers',
    name: 'Used Balers',
    cardTitle: 'Used Balers',
    kicker: 'Sold As-Is · Inspected & Disclosed',
    short: 'Machines sold as they came in: inspected, honestly described, priced accordingly.',
    metaTitle: 'Used Balers | Sold As-Is | Norton Equipment',
    metaDesc:
      'Used vertical and horizontal balers sold as-is by Norton Equipment in Byhalia, MS. Inspected and honestly described, priced below refurbished. Serving Memphis, North Mississippi, West Tennessee, and East Arkansas.',
    intro: [
      'A used baler is exactly that: a working machine we bought, took in on trade, or pulled out of a closing plant, offered the way it came to us. We inspect it and tell you what we found, but we have not rebuilt it, and the price reflects that.',
      'This is the right buy when you know what you are looking at. Processors with their own maintenance crew, operations that need a spare or a backup, and buyers who would rather put the money into a second machine than into a rebuild all do well here. If you want the machine gone through and warrantied before it lands on your floor, our refurbished balers are the answer instead.',
      'Either way you get the honest version. We will tell you what a machine needs, what it is worth, and when you are better off spending a little more. The Mid-South equipment grapevine runs through our shop, so if we do not have what you want, tell us and we will watch for it.',
    ],
    bestFor: ['Buyers with their own maintenance crew', 'Spare & backup machines', 'Budget-first purchases', 'Plant liquidations (we buy)', 'Specific-machine searches', 'Operations that rebuild in house'],
    features: [
      { h: 'Sold as-is, described honestly', p: 'We inspect every machine and tell you what we found, including what it will likely need. No surprises after the truck leaves.' },
      { h: 'The lowest entry price', p: 'Used machines sit below refurbished pricing because the shop work has not been done. You are buying the steel and the hydraulics, not a rebuild.' },
      { h: 'We buy equipment too', p: 'Closing a plant or upgrading a line? We buy balers and compactors outright, and handle the rigging and removal ourselves.' },
      { h: 'Locator service', p: 'Hunting a specific model? We search dealer and processor networks across the region and will tell you when one surfaces.' },
    ],
    faqs: [
      { q: 'What is the difference between used and refurbished?', a: 'Used means the machine is sold as it came in: inspected and described, but not rebuilt. Refurbished means we actually fixed it in our Byhalia shop, cycle-tested it, and backed it with a shop warranty. Used costs less and carries more risk.' },
      { q: 'Does a used baler come with a warranty?', a: 'Used machines are sold as-is. If you want a machine backed by a shop warranty, look at our refurbished balers, which are rebuilt in house before they ship.' },
      { q: 'Can you deliver and install a used baler?', a: 'Yes. Delivery, rigging, anchoring, and power hookup are available on any machine we sell, and our techs service it afterward whether or not we rebuilt it.' },
      { q: 'Can I have a used machine refurbished before delivery?', a: 'Yes, and many buyers do. Tell us what you want done and we will quote the shop work on top of the machine. At that point it becomes a refurbished baler.' },
    ],
    related: ['refurbished-balers', 'vertical-balers', 'horizontal-balers'],
  },
  {
    slug: 'baling-wire',
    name: 'Baling Wire',
    cardTitle: 'Baling Wire',
    kicker: 'Single-Loop · Double-Loop · Delivered',
    short: 'Single-loop and double-loop bale ties, boxed wire, delivered regionally.',
    metaTitle: 'Baling Wire | Single-Loop & Double-Loop Bale Ties, Delivered | Norton Equipment',
    metaDesc:
      'Single-loop and double-loop bale ties in every standard length and gauge, plus boxed stem wire, delivered across the Mid-South.',
    intro: [
      'Wire is the one consumable every baler needs, and running out stops your recycling program cold. Norton Equipment stocks and delivers baling wire across the Mid-South: single-loop bale ties for standard vertical balers, double-loop ties for fast tying and heavier bales, and boxed stem wire for auto-tie horizontal machines.',
      'Which wire you need depends on your machine and your bales. Single-loop ties thread through the baler’s chamber slots and twist off at a loop, the everyday answer for most vertical balers. Double-loop ties have a preformed loop on each end that hook together, tying faster and holding more expansion force, which matters on high-density machines and springy material like plastics and film. Longer or heavier bales need longer, heavier-gauge ties. If that paragraph raised questions, call us: matching wire to machine is a thirty-second conversation that prevents broken bales and blown budgets.',
    ],
    bestFor: ['Grocery & retail balers', 'Distribution centers', 'Recyclers & processors', 'Manufacturers', 'Farms & ag operations', 'Anyone tired of wire surprises'],
    features: [
      { h: 'Single-loop bale ties', p: 'Standard lengths from 10′ to 21′ in 10- to 14-gauge: the everyday tie for vertical balers, sized to your chamber.' },
      { h: 'Double-loop bale ties', p: 'Faster tying and higher hold for high-density balers and expansive materials. Loop-to-loop connection, no twisting.' },
      { h: 'Boxed & stem wire', p: 'Continuous wire for auto-tie horizontal balers, in the gauges your machine’s manual actually calls for.' },
      { h: 'Regional delivery', p: 'Scheduled and will-call delivery across our service area. Standing orders keep high-volume operations from ever calling in a panic.' },
    ],
    faqs: [
      { q: 'Single-loop vs. double-loop, which do I need?', a: 'Most standard vertical balers use single-loop ties. Step up to double-loop when you run a high-density baler, bale expansive material (plastics, film, foam), or want faster tying. When in doubt, tell us your baler model. We will match it from memory more often than not.' },
      { q: 'What length and gauge should I order?', a: 'Length is set by your bale chamber (a 60″ baler commonly runs 14′-16′ ties; 72″ machines run longer); gauge by bale weight and material spring. It is printed in your manual, or just ask us.' },
      { q: 'Do you deliver wire without an equipment purchase?', a: 'Yes, wire delivery is its own business for us. Plenty of customers started with a pallet of ties and became equipment customers later.' },
    ],
    related: ['vertical-balers', 'horizontal-balers', 'refurbished-balers'],
  },
];
