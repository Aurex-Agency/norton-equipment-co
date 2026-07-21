// ============================================================
// Service pages — /services/<slug>/
// ============================================================

export const SERVICES_OVERVIEW = {
  metaTitle: 'Equipment Service & Repair | Compactors, Balers & More | Norton Equipment',
  metaDesc:
    'Factory-quality service for compactors, balers, conveyors, and recycling equipment — any brand, any model. Repair, preventive maintenance, refurbishment, fabrication, and logistics across the Mid-South since 1997.',
  h1: 'Service That Keeps the Mid-South Running',
  kicker: 'Any Brand · Any Model · Since 1997',
  sub: 'Norton Equipment started as a service company in 1997, and service is still the backbone. Our techs and in-house fabrication shop repair, maintain, rebuild, and relocate waste and recycling equipment across a 100-mile radius of Memphis — no matter whose name is on the machine.',
};

export const SERVICES = [
  {
    slug: 'compactor-repair',
    name: 'Compactor Repair & Service',
    cardTitle: 'Compactor Repair',
    kicker: 'All Brands · Fast Response',
    short: 'Repair and emergency service for every compactor make and model.',
    metaTitle: 'Compactor Repair & Service | All Brands | Memphis & Mid-South | Norton Equipment',
    metaDesc:
      'Commercial trash compactor repair near Memphis — hydraulics, controls, doors, rams, and structural repair on all brands. Fast response across North Mississippi, West Tennessee, and East Arkansas. Call (662) 838-7900.',
    intro: [
      'A down compactor backs up a whole operation fast: waste piles on the dock, the hauler cannot pull a jammed container, and suddenly the least glamorous machine on the property is the most urgent. Compactor repair is one of the most common calls we run — and one we have been answering across the Mid-South since 1997.',
      'Our techs troubleshoot and repair every major brand: Marathon, Cram-A-Lot, Max-Pak, PTR, Wastequip, and the rest. Hydraulic cylinders and power units, valves and hoses, limit switches and photo eyes, control panels, door latches and hinges, rams and ram shoes — and when the problem is structural, our in-house welding and fabrication shop rebuilds floors, hooks, and guides that other service companies can only quote replacements for.',
    ],
    features: [
      { h: 'All makes, all models', p: 'The brand on the panel does not matter. If it compacts trash, we work on it — and have for decades.' },
      { h: 'Hydraulics & controls', p: 'Cylinders resealed or replaced, power units rebuilt, valves, hoses, relays, PLCs, photo eyes, and interlocks diagnosed and fixed right.' },
      { h: 'Structural repair in-house', p: 'Cracked floors, worn ram shoes, bent doors, broken hooks — our fabrication shop repairs the steel, not just the symptoms.' },
      { h: 'Straight talk on repair vs. replace', p: 'When a machine is not worth fixing, we say so, and show you reconditioned and rental options that beat a new-machine quote.' },
    ],
    faqs: [
      { q: 'How fast can you get to a down compactor?', a: 'We prioritize down-machine calls and dispatch across our 100-mile service radius from Byhalia — typically same-day or next-day depending on location and parts. Call (662) 838-7900 and we will give you a real ETA, not a window.' },
      { q: 'My compactor is from a hauler — can you work on it?', a: 'If the hauler owns the machine, service is contractually theirs. If you own or rent it from anyone else, we can work on it. Not sure? We can help you read the contract — and show you what owning your own equipment saves.' },
      { q: 'Do you stock compactor parts?', a: 'We stock common wear and electrical parts and have overnight relationships for the rest. Our fab shop covers the structural side same-week in most cases.' },
    ],
    related: ['preventive-maintenance', 'equipment-refurbishment', 'welding-fabrication'],
  },
  {
    slug: 'baler-service',
    name: 'Baler Service & Repair',
    cardTitle: 'Baler Service',
    kicker: 'The Original Norton Trade',
    short: 'Repair, parts, and service for vertical and horizontal balers.',
    metaTitle: 'Baler Service & Repair | Vertical & Horizontal, All Brands | Norton Equipment',
    metaDesc:
      'Cardboard baler repair and service across the Mid-South — hydraulics, doors, chains, controls, and structural repair on all vertical and horizontal baler brands. Norton Equipment, since 1997.',
    intro: [
      'Balers built this company. We have been repairing them across the Mid-South since 1997, and there is very little a vertical or horizontal baler can do that our techs have not seen: cylinders that drift, doors that will not latch, chains and shear pins, tramp metal in the ram path, controls that mysteriously stop after a storm.',
      'We service every brand — Max-Pak, Harris, Selco, Cram-A-Lot, Marathon, International Baler, and more — with stocked common parts, in-house fabrication for platens, doors, and chamber repairs, and honest advice when a machine has reached the end of economic life. Most service customers eventually put us on a preventive maintenance schedule, because the cheapest repair is the one that never happens.',
    ],
    features: [
      { h: 'Vertical & horizontal expertise', p: 'From back-room 60-inch verticals to auto-tie horizontal lines with conveyors — one call covers the whole machine population.' },
      { h: 'Hydraulic & electrical repair', p: 'Cylinders, pumps, valves, hoses, motors, starters, relays, and safety circuits — diagnosed on site, repaired to spec.' },
      { h: 'Structural & door repair', p: 'Sprung doors, cracked welds, worn platens, and chamber damage repaired in-house by our fabrication shop.' },
      { h: 'Operator retraining', p: 'Half of baler damage is operator-inflicted. We retrain crews during service visits at no drama and no lecture.' },
    ],
    faqs: [
      { q: 'My baler won’t make a full bale anymore — what’s wrong?', a: 'Usually pressure loss: a worn cylinder, tired pump, or relief valve out of adjustment. Sometimes it is a platen dragging on a damaged chamber. Either way it is diagnosable in one visit, and usually fixable in the same one.' },
      { q: 'Do you sell baler parts without a service call?', a: 'Yes — call with your make, model, and serial and we will quote parts for your own techs to install, including wire, buttons, switches, and cylinders.' },
      { q: 'Is an old baler worth repairing?', a: 'Often yes — these machines are mostly steel. When repair costs cross about half the price of a reconditioned replacement, we will tell you and show you both numbers.' },
    ],
    related: ['preventive-maintenance', 'compactor-repair', 'equipment-refurbishment'],
  },
  {
    slug: 'preventive-maintenance',
    name: 'Preventive Maintenance',
    cardTitle: 'Preventive Maintenance',
    kicker: 'Scheduled · Documented · Cheaper Than Downtime',
    short: 'Scheduled PM programs that prevent the expensive phone call.',
    metaTitle: 'Preventive Maintenance Programs | Compactors & Balers | Norton Equipment',
    metaDesc:
      'Scheduled preventive maintenance for compactors, balers, and conveyors across the Mid-South. Inspections, fluids, adjustments, and documentation that extend equipment life and prevent downtime.',
    intro: [
      'Every compactor and baler failure we see falls into two piles: the freak accident, and the slow-motion breakdown that a twenty-minute inspection would have caught months earlier. The second pile is much bigger. Preventive maintenance is how you stay out of it.',
      'Our PM programs put your equipment on a schedule — quarterly is typical, monthly for hard-running machines. Each visit covers hydraulic fluid condition and leaks, cylinder and packing wear, chains, latches, and interlocks, electrical connections and controls, structural inspection of floors, welds, and ram paths, lubrication, and adjustment. You get a written condition report after every visit, so budget surprises become budget line items you saw coming a year away.',
    ],
    features: [
      { h: 'Scheduled, not someday', p: 'We track the schedule and show up — you do not have to remember the machine exists until the report lands in your inbox.' },
      { h: 'Full-machine checklist', p: 'Hydraulics, electrics, structure, safety systems, and lubrication on a documented checklist tuned per machine type.' },
      { h: 'Priority service response', p: 'PM customers go to the front of the line when something does break — and it breaks far less often.' },
      { h: 'Life-cycle budgeting', p: 'Condition reports build a paper trail that turns "the compactor died" into "the compactor is due in Q3 next year, as planned."' },
    ],
    faqs: [
      { q: 'What does a PM program cost?', a: 'Programs are priced per machine per visit, with multi-machine and multi-site discounts. It is consistently a fraction of one emergency repair with downtime — we will quote your fleet from a simple equipment list.' },
      { q: 'How often should equipment be serviced?', a: 'Quarterly suits most single-shift operations; monthly for high-cycle machines like DC compactors and horizontal balers. We recommend a cadence after the first inspection.' },
      { q: 'Can you take over maintenance on equipment another company installed?', a: 'Absolutely — brand and origin do not matter. The first visit establishes a baseline condition report, and the program runs from there.' },
    ],
    related: ['compactor-repair', 'baler-service', 'equipment-evaluations'],
  },
  {
    slug: 'equipment-evaluations',
    name: 'Equipment Evaluations & Inspections',
    cardTitle: 'Evaluations & Inspections',
    kicker: 'Know What You’ve Got',
    short: 'Independent condition assessments for purchases, audits, and budgets.',
    metaTitle: 'Equipment Evaluations & Inspections | Independent Assessments | Norton Equipment',
    metaDesc:
      'Independent condition evaluations of compactors, balers, and recycling equipment — pre-purchase inspections, safety audits, fleet assessments, and end-of-lease reviews across the Mid-South.',
    intro: [
      'Sometimes you need an expert set of eyes before money moves: a used baler you found online, a compactor conveying with a building purchase, a fleet you inherited in an acquisition, a machine your insurer or safety auditor is asking questions about. Our evaluation service puts a Norton technician in front of the machine and a written, independent assessment in your hands.',
      'We inspect structure, hydraulics, electrical systems, safety interlocks and guarding, and cycle performance under load, then report condition, expected remaining life, needed repairs with real prices, and a straight verdict — buy it, fix it, or walk away. Because we recondition equipment for a living, we know exactly what problems cost to fix, and because the report is what you are paying for, the advice is not bent toward selling you anything.',
    ],
    features: [
      { h: 'Pre-purchase inspections', p: 'Before you wire money for a used machine, know what the cylinder, chamber, and controls actually look like under the paint.' },
      { h: 'Safety & compliance audits', p: 'Interlocks, guarding, lockout points, and controls checked against current standards, with a punch list your safety officer can act on.' },
      { h: 'Fleet & site assessments', p: 'Multi-machine walk-downs for new facility managers, acquisitions, and budget season — every unit tagged, rated, and reported.' },
      { h: 'Written, defensible reports', p: 'Condition, photos, repair estimates, and remaining-life opinion in a document you can hand to a CFO, insurer, or seller.' },
    ],
    faqs: [
      { q: 'Will you inspect a machine I’m buying from someone else?', a: 'Yes — that is the most common evaluation we do. We will meet the machine anywhere in our service area, or review video and records for equipment further out.' },
      { q: 'What does an evaluation cost?', a: 'Single-machine inspections are a flat fee that we will quote when you call; fleet assessments are priced per site. If you buy the machine and have us recondition or install it, we credit the inspection fee.' },
      { q: 'Can an evaluation help me sell my equipment?', a: 'A documented independent condition report consistently helps machines sell faster and closer to asking price. We also buy equipment directly, if you would rather skip the listing.' },
    ],
    related: ['equipment-refurbishment', 'preventive-maintenance', 'waste-stream-consultations'],
  },
  {
    slug: 'equipment-refurbishment',
    name: 'Equipment Refurbishment',
    cardTitle: 'Refurbishment',
    kicker: 'Rebuild It Right',
    short: 'Full rebuilds that give tired machines a second decade.',
    metaTitle: 'Equipment Refurbishment | Baler & Compactor Rebuilds | Norton Equipment',
    metaDesc:
      'Full refurbishment of balers, compactors, and recycling equipment — hydraulics, structure, controls, and paint. Rebuild your existing machine for a fraction of replacement cost. Norton Equipment, Byhalia MS.',
    intro: [
      'When a good machine gets old, you have three options: live with the breakdowns, buy new, or refurbish. Refurbishment is the option most owners never get offered — because most dealers would rather sell you a machine than rebuild yours. We do both, so you get the honest comparison.',
      'A Norton refurbishment is a real rebuild, in our shop or on your site: hydraulic system resealed or replaced, cylinders rebuilt, structural steel repaired by our fabrication team — floors, platens, ram shoes, doors, hooks — electrical controls updated, safety systems brought to current standards, and a repaint that makes the machine look like it runs, because now it does. Typical cost lands at 30–50% of new, for a machine that is good for many more years of duty.',
    ],
    features: [
      { h: 'Hydraulic system rebuilds', p: 'Cylinders resealed or re-barreled, pumps and valves replaced or rebuilt, hoses re-run, fluid systems flushed and set to spec.' },
      { h: 'Structural restoration', p: 'Cracked floors, worn guides, sprung doors, and fatigued welds cut out and rebuilt with new steel — not patched over.' },
      { h: 'Controls & safety updates', p: 'Modern panels, switches, and interlocks that end nuisance faults and satisfy today’s safety audits.' },
      { h: 'On-site or in-shop', p: 'Smaller machines come to Byhalia; big stationary units and installed systems get rebuilt where they sit, on a schedule that respects your operation.' },
    ],
    faqs: [
      { q: 'Is refurbishment worth it versus buying used or new?', a: 'If the core structure is sound, refurbishment usually wins: 30–50% of new cost, zero surprises about the machine’s history, and no changes to your pad, power, or workflow. If the frame is done, we will say so and show you reconditioned alternatives.' },
      { q: 'How long does a refurbishment take?', a: 'In-shop rebuilds typically run one to three weeks depending on scope and parts. On-site structural work is scheduled around your operating hours. Loaner and rental units can cover the gap.' },
      { q: 'Will a refurbished machine pass a safety audit?', a: 'That is part of the job — interlocks, guarding, and controls are brought to current standards and documented in the completion report.' },
    ],
    related: ['welding-fabrication', 'equipment-evaluations', 'compactor-repair'],
  },
  {
    slug: 'welding-fabrication',
    name: 'Welding & Metal Fabrication',
    cardTitle: 'Welding & Fabrication',
    kicker: 'The In-House Edge',
    short: 'A full fabrication shop behind every machine we touch.',
    metaTitle: 'Industrial Welding & Metal Fabrication | Norton Equipment, Byhalia MS',
    metaDesc:
      'In-house industrial welding and metal fabrication — compactor and baler structural repair, chutes, hoppers, guards, enclosures, and custom steel work for the Mid-South. Norton Equipment since 1997.',
    intro: [
      'Most equipment dealers can swap parts. Very few can rebuild the steel itself. Norton Equipment runs a full welding and metal fabrication shop in Byhalia — and it changes what "repair" means for our customers. A cracked compactor floor, a torn baler chamber, a bent enclosure gate, a feed chute that never fit right: these are fabrication problems, and we solve them in-house instead of quoting you a replacement machine.',
      'The shop also builds new: hoppers, chutes, cart tippers, guards and safety rails, platforms and stairs, compactor enclosures, dumpster lids and doors, wear liners, and the one-off brackets and transitions that make an equipment installation actually fit the building. Structural steel, stainless for food environments, and aluminum — MIG, TIG, and stick, in the shop or with mobile welding on your site.',
    ],
    features: [
      { h: 'Equipment structural repair', p: 'Compactor floors and hooks, baler platens and chambers, container rails and doors — cut out, re-plated, and rewelded to duty.' },
      { h: 'Custom chutes, hoppers & guards', p: 'Feed works and safety systems designed around your machine and your building, not adapted from a catalog.' },
      { h: 'Mobile welding service', p: 'Truck-mounted rigs bring the shop to your site for repairs that cannot travel — docks, enclosures, installed machines.' },
      { h: 'Materials & methods', p: 'Carbon steel, stainless, and aluminum; MIG, TIG, and stick; plasma cutting and forming for plate work.' },
    ],
    faqs: [
      { q: 'Do you take fabrication jobs unrelated to waste equipment?', a: 'Yes — the shop handles general industrial fabrication and repair for area businesses: racks, stairs, rails, brackets, repairs to material-handling gear, and custom steel projects. If it is metal and it matters, bring it by.' },
      { q: 'Can you fabricate parts that manufacturers no longer make?', a: 'Frequently. Obsolete doors, guards, hoppers, and structural components get measured from the machine and rebuilt — often stronger than original.' },
      { q: 'Is your welding certified?', a: 'Our welders work to industry-standard structural practice, and we can discuss certification requirements for specific jobs during quoting.' },
    ],
    related: ['equipment-refurbishment', 'compactor-repair', 'equipment-logistics'],
  },
  {
    slug: 'conveyor-service',
    name: 'Conveyor Service & Repair',
    cardTitle: 'Conveyor Service',
    kicker: 'Keep the Line Moving',
    short: 'Belts, bearings, drives, and tracking — fixed fast.',
    metaTitle: 'Conveyor Service & Repair | Recycling & Industrial Lines | Norton Equipment',
    metaDesc:
      'Conveyor repair and service for recycling and industrial lines — belts, lacing, rollers, bearings, drives, and tracking, plus guarding and rebuilds. Mid-South coverage from Norton Equipment.',
    intro: [
      'When a conveyor stops, everything it feeds stops with it — the baler starves, the sort line backs up, and material piles where people need to walk. Conveyor service is about restoring flow fast and then fixing the reason it stopped, and we have been doing both across the Mid-South for decades.',
      'Our techs handle belt replacement and lacing, tracking and tensioning, rollers and idlers, bearings and pulleys, gearboxes and drives, chain and apron repairs on steel-belt machines, and the electrical side — motors, starters, VFDs, and safety circuits. The fabrication shop backs it up with side walls, transitions, guards, and structural repairs that keep an aging line safe and productive.',
    ],
    features: [
      { h: 'Belt work done right', p: 'Replacement, splicing, and lacing with proper tracking and tension — the difference between a belt that lasts years and one that shreds in months.' },
      { h: 'Mechanical drivetrain repair', p: 'Rollers, idlers, bearings, pulleys, gearboxes, and chains serviced or replaced, with root-cause diagnosis rather than parts roulette.' },
      { h: 'Electrical & controls', p: 'Motors, starters, VFDs, e-stops, and interlocks diagnosed and repaired to keep the line compliant and moving.' },
      { h: 'Rebuilds & retrofits', p: 'Worn lines rebuilt, guards added, and sections re-fabricated in-house — usually far cheaper than replacement conveyors.' },
    ],
    faqs: [
      { q: 'My belt keeps tracking off — can that be fixed permanently?', a: 'Usually yes. Chronic mistracking traces to worn lagging, seized idlers, a racked frame, or bad loading geometry. We find the cause instead of endlessly nudging the tracking, and the problem stays fixed.' },
      { q: 'Do you service in-ground pit conveyors?', a: 'Yes — pit conveyors feeding balers are a specialty, including chain and apron repair, floor plates, and cleanout work.' },
      { q: 'Can you inspect our conveyors on a schedule?', a: 'Conveyors fit perfectly into our preventive maintenance programs — bearings, belts, and drives inspected on the same visit as your baler or compactor.' },
    ],
    related: ['preventive-maintenance', 'welding-fabrication', 'equipment-logistics'],
  },
  {
    slug: 'equipment-logistics',
    name: 'Equipment Logistics',
    cardTitle: 'Equipment Logistics',
    kicker: 'Delivery · Install · Relocation · Removal',
    short: 'Heavy equipment moved, installed, and removed — turnkey.',
    metaTitle: 'Equipment Logistics | Delivery, Installation, Relocation & Removal | Norton Equipment',
    metaDesc:
      'Turnkey waste equipment logistics — delivery, rigging, installation, plant relocations, and old equipment removal across the Mid-South. Norton Equipment moves balers, compactors, and conveyors safely.',
    intro: [
      'A ten-thousand-pound baler does not deliver itself. Getting waste and recycling equipment onto a site, through the building, onto the pad, powered, tested, and running — and getting the old machine out — is its own trade, and it is one of ours.',
      'We deliver and install the equipment we sell, but the service stands on its own too: relocating machines between facilities, moving lines during plant rearrangements, extracting dead equipment from tight back rooms, and hauling away machines we buy from closing operations. Our crews bring the trucks, trailers, forklifts, and rigging know-how; our fab shop builds the odd bracket, chute, or dock plate that every real-world install eventually needs.',
    ],
    features: [
      { h: 'Delivery & rigging', p: 'Trucking, offloading, and precision placement of balers, compactors, conveyors, and shredders — including tight-clearance back-room sets.' },
      { h: 'Turnkey installation', p: 'Anchoring, power coordination, chute and feed hookups, commissioning, and operator training in one scheduled visit.' },
      { h: 'Plant & line relocations', p: 'Teardown, transport, reinstallation, and recommissioning when equipment moves between buildings — with downtime planned in hours, not weeks.' },
      { h: 'Removal & buyback', p: 'Dead machine in the way? We extract and haul it — and if it has value, we will buy it and put that toward its replacement.' },
    ],
    faqs: [
      { q: 'Can you remove a baler from inside a store?', a: 'Yes — extracting vertical balers through retail back rooms and narrow corridors is routine work for our crews, done outside business hours when needed.' },
      { q: 'Do you move equipment you didn’t sell?', a: 'All the time. We relocate and install machines from any source, and we will inspect them during the move so you know what condition they arrived in.' },
      { q: 'How far will you deliver?', a: 'Standard logistics coverage matches our 100-mile service radius from the Memphis area; longer hauls are quoted case by case — ask.' },
    ],
    related: ['welding-fabrication', 'equipment-evaluations', 'equipment-refurbishment'],
  },
  {
    slug: 'waste-stream-consultations',
    name: 'Waste Stream Consultations',
    cardTitle: 'Waste Stream Consultations',
    kicker: 'Free · On-Site · No Strings',
    short: 'A free on-site audit that finds the money hiding in your waste.',
    metaTitle: 'Waste Stream Consultations | Free On-Site Waste Audits | Norton Equipment',
    metaDesc:
      'Free on-site waste stream consultations across the Mid-South — hauling cost analysis, recycling revenue opportunities, and equipment recommendations with real numbers. Norton Equipment, since 1997.',
    intro: [
      'Most businesses treat their waste bill like the weather — it just happens to them. It shouldn’t. Between right-sized equipment, fewer hauls, renegotiated service, and commodities you could be selling instead of paying to dump, a typical operation is leaving real money in the dumpster. A waste stream consultation finds it.',
      'We walk your site, look at what you throw away and how, review your hauling invoices, and produce a straightforward analysis: where the volume comes from, what equipment (if any) pays for itself, what your cardboard or plastics are worth as commodities, and what your hauling schedule should look like. It is free, it takes about an hour of your time, and there is no obligation — if the honest answer is "keep your dumpsters," that is the answer you will get. Norton has been reading Mid-South waste streams since 1997; the audit is how we prove it before you spend a dollar.',
    ],
    features: [
      { h: 'Hauling invoice analysis', p: 'We decode the fees, fuel surcharges, and container rents on your invoices and benchmark them against what the local market actually charges.' },
      { h: 'Volume & stream assessment', p: 'What you generate, where it comes from, and which streams compact, bale, or sell — measured on site, not guessed.' },
      { h: 'Equipment ROI math', p: 'If a compactor or baler makes sense, you get payback math built from your real volumes and current hauling rates — buy, rent, and used options side by side.' },
      { h: 'Commodity revenue check', p: 'Current market context for cardboard, film, and other recyclables, and what local buyers pay for mill-size bales.' },
    ],
    faqs: [
      { q: 'Is the consultation really free?', a: 'Yes. It is how we earn equipment and service business — by showing our work first. If nothing we sell makes sense for you, the analysis is yours to keep anyway.' },
      { q: 'What should I have ready?', a: 'Two or three months of hauling invoices and thirty minutes for a walk-through. That is enough for a solid first analysis.' },
      { q: 'Can you help renegotiate my hauling contract?', a: 'We will arm you with the numbers and the container/compaction strategy that gives you leverage. Owning or renting your own equipment — instead of the hauler’s — is usually the single biggest unlock.' },
    ],
    related: ['equipment-evaluations', 'compactor-repair', 'preventive-maintenance'],
  },
];
