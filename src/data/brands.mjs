// ============================================================
// Brand pages - /brands/<slug>/
// NOTE(client): Norton has NOT confirmed factory-authorized dealer
// status for any brand. Copy is deliberately written around what
// Norton actually does - sell, service, repair, and supply parts -
// with no "authorized dealer" claims. Update if client confirms.
// ============================================================

export const BRANDS_OVERVIEW = {
  metaTitle: 'Brands We Sell & Service | Marathon, Cram-A-Lot, Max-Pak, Harris & More | Norton Equipment',
  metaDesc:
    'Norton Equipment sells, services, repairs, and supplies parts for every major compactor and baler brand: Marathon, Cram-A-Lot, Max-Pak, Harris, Selco, PTR, Wastequip, and more. Mid-South coverage since 1997.',
  h1: 'Every Major Brand. One Phone Number.',
  kicker: 'Sell · Service · Repair · Parts',
  sub: 'Buyers shop by brand, and machines break by brand, but Norton Equipment works on all of them. These are the lines we know deepest, plus the dozens more we service in the field every week.',
  alsoService: ['PTR', 'Wastequip', 'International Baler', 'Bramidan', 'Harmony', 'Bace', 'Sebright', 'Load King', 'Compactors Inc.'],
};

export const BRANDS = [
  {
    slug: 'marathon',
    name: 'Marathon',
    kicker: 'Compactors · Balers · RamJet',
    short: 'One of America’s most recognized compactor and baler names for 50+ years.',
    metaTitle: 'Marathon Compactors & Balers | Sales, Service, Parts | Norton Equipment',
    metaDesc:
      'Marathon compactor and baler sales, service, repair, and parts across the Mid-South. RamJet stationary and self-contained compactors, apartment compactors, pre-crushers, and balers: Norton Equipment, since 1997.',
    intro: [
      'Marathon Equipment has been one of the most recognized names in on-site waste compaction in America for more than fifty years. The RamJet line alone covers most of the compactor family (stationary and self-contained units, apartment and high-rise compactors, and pre-crushers) and Marathon builds a full range of vertical and horizontal balers besides. When a facilities manager in the Mid-South says "the compactor," odds are good the nameplate says Marathon.',
      'Norton Equipment sells, installs, services, repairs, and supplies parts for Marathon machines throughout our service area. Our techs have worked on RamJets for decades (hydraulics, controls, doors, and structural steel) and when you are speccing a new machine, we will tell you honestly where Marathon is the right call and where another line fits your application better. That is the advantage of an independent dealer: you get the right machine, not the only machine.',
    ],
    knownFor: [
      { h: 'RamJet compactors', p: 'The flagship line: stationary and self-contained compactors from light commercial through heavy industrial duty.' },
      { h: 'Apartment & high-rise systems', p: 'Chute-fed compactors and containers that have equipped multi-family buildings for generations.' },
      { h: 'Pre-crushers & specialty units', p: 'Heavy pre-crusher and specialty compaction equipment for industrial waste.' },
      { h: 'Vertical & horizontal balers', p: 'A complete baler range that shares the brand’s heavy-build reputation.' },
    ],
    weProvide: [
      'New Marathon compactor and baler sales with honest cross-brand comparisons',
      'Repair and emergency service on all Marathon models, any age',
      'Preventive maintenance programs for Marathon fleets',
      'Parts sourcing: current and legacy RamJet components',
      'Refurbishment and structural rebuilds of older Marathon machines',
      'Installation, relocation, and removal',
    ],
    faq: { q: 'Do you repair older Marathon RamJet compactors?', a: 'Yes: RamJets are long-lived machines and we service every generation still in the field, including structural floor and hook rebuilds in our fabrication shop when decades of cycles catch up with the steel.' },
  },
  {
    slug: 'cram-a-lot',
    name: 'Cram-A-Lot',
    kicker: 'Arkansas-Built · Full Range',
    short: 'The regional powerhouse. 70+ compactor and 30+ baler models built in Arkansas.',
    metaTitle: 'Cram-A-Lot Compactors & Balers | Sales, Service, Parts | Norton Equipment',
    metaDesc:
      'Cram-A-Lot compactor and baler sales, service, repair, and parts in the Mid-South. Arkansas-built by J.V. Manufacturing. 70+ compactor models and 30+ balers. Norton Equipment, Byhalia MS.',
    intro: [
      'Cram-A-Lot, built by J.V. Manufacturing in Springdale, Arkansas, is the Mid-South’s hometown heavyweight. The catalog is enormous (more than seventy compactor models and thirty-plus balers) covering stationary, self-contained, and vertical compactors, pre-crushers, augers, and a full baler line from back-room verticals to automatic horizontals. For customers who like their equipment built regionally, with factory support a state away rather than a continent, Cram-A-Lot is the natural first look.',
      'Norton Equipment sells, installs, services, repairs, and supplies parts for Cram-A-Lot machines across our territory. The proximity matters in practice: parts and factory answers move fast, and the machines are engineered by people who understand Mid-South operations. Our techs know the line inside and out, and because we are independent, we will put a Cram-A-Lot quote next to a Marathon or Max-Pak quote and let the right machine win.',
    ],
    knownFor: [
      { h: 'Massive model range', p: 'Over 70 compactor models and 30 baler models: from 2-yard verticals to heavy industrial systems, there is a Cram-A-Lot spec for nearly any application.' },
      { h: 'Arkansas manufacturing', p: 'Built by J.V. Manufacturing in Springdale, AR: regional support, regional parts, and a name Mid-South operators trust.' },
      { h: 'Heavy structural build', p: 'A reputation for thick steel and straightforward, serviceable engineering.' },
      { h: 'Full equipment family', p: 'Compactors, pre-crushers, augers, verticals, horizontals, and specialty machines under one brand.' },
    ],
    weProvide: [
      'New Cram-A-Lot equipment sales across the full catalog',
      'Repair and emergency service on all Cram-A-Lot models',
      'Preventive maintenance programs',
      'Fast regional parts supply',
      'Refurbishment of older Cram-A-Lot machines',
      'Installation, relocation, and removal',
    ],
    faq: { q: 'Why choose an Arkansas-built brand?', a: 'Practical reasons: parts and factory support are close, freight is cheaper, lead times are shorter, and the machines are proven in exactly the operations this region runs: distribution, retail, food, and agriculture.' },
  },
  {
    slug: 'max-pak',
    name: 'Max-Pak',
    kicker: 'Built Heavy Since 1976',
    short: 'Balers and compactors built to outlast. 90%+ of their balers still run.',
    metaTitle: 'Max-Pak Balers & Compactors | Sales, Service, Parts | Norton Equipment',
    metaDesc:
      'Max-Pak baler and compactor sales, service, repair, and parts across the Mid-South. Built heavy since 1976, more than 90% of Max-Pak balers ever built are still working. Norton Equipment.',
    intro: [
      'Max-Pak has been building balers and compactors since 1976 with one guiding idea: make it heavy, make it simple, make it last. The company’s own famous statistic says it best, more than ninety percent of the balers they have ever built are still working. If you have shopped vertical balers in the Mid-South, you have seen the proof; Max-Pak machines like the MP60HD are back-room fixtures that outlive the stores around them.',
      'Norton Equipment sells, installs, services, repairs, and supplies parts and wire for Max-Pak equipment across our territory. We know these machines down to the weld seams (the MP60HD has long been a staple of our own recommendations) and their durability makes them stars of the reconditioned market too: a rebuilt Max-Pak is about the safest used-equipment purchase in the industry. New, used, or the one you already own, we keep Max-Paks baling.',
    ],
    knownFor: [
      { h: 'Legendary durability', p: 'More than 90% of all Max-Pak balers ever built are still in service: an industry statistic nobody else touches.' },
      { h: 'The MP60HD and vertical line', p: 'Heavy-duty 60″ and 72″ vertical balers that produce dense, mill-ready bales cycle after cycle for decades.' },
      { h: 'Simple, serviceable design', p: 'Straightforward hydraulics and controls that technicians can actually maintain: a big reason the machines last.' },
      { h: 'Compactors too', p: 'A solid line of compaction equipment sharing the same built-heavy philosophy.' },
    ],
    weProvide: [
      'New Max-Pak baler and compactor sales',
      'Repair and service on every Max-Pak model and vintage',
      'Reconditioned Max-Pak balers: the used-market favorite',
      'Parts and baling wire sized to Max-Pak chambers',
      'Preventive maintenance programs',
      'Installation, relocation, and removal',
    ],
    faq: { q: 'Is a used Max-Pak baler a good buy?', a: 'Generally one of the best in the industry, the machines are so overbuilt that a shop-reconditioned unit routinely delivers another decade of service. Ours are rebuilt and warrantied in our Byhalia shop.' },
  },
  {
    slug: 'harris-selco',
    name: 'Harris / Selco',
    kicker: 'Vertical Downstroke Workhorses',
    short: 'The classic vertical downstroke balers of retail and warehouse back rooms.',
    metaTitle: 'Harris & Selco Balers | Sales, Service, Parts | Norton Equipment',
    metaDesc:
      'Harris and Selco vertical baler sales, service, repair, and parts across the Mid-South. The classic downstroke balers of retail and warehouse back rooms: serviced by Norton Equipment since 1997.',
    intro: [
      'Harris is one of the oldest names in recycling equipment (a lineage of baler engineering stretching back over a century) and its Selco vertical baler line became the definitive back-room machine: the vertical downstroke balers you find crushing cardboard behind supermarkets, big-box stores, and warehouse docks across the country. Simple, tough, and everywhere.',
      'Norton Equipment sells, services, repairs, and supplies parts and wire for Harris and Selco balers throughout the Mid-South. Because these machines are so widespread, they are a constant presence on our service routes: doors, latches, cylinders, and controls we can practically service from memory. If your fleet standardized on Selco verticals years ago, we will keep them running; if you are adding machines, we will quote Harris alongside the other majors and let the numbers decide.',
    ],
    knownFor: [
      { h: 'The definitive vertical baler', p: 'Selco downstroke balers set the template for the retail back-room machine: millions of bales of OCC start in one every week.' },
      { h: 'Century-deep engineering', p: 'The Harris name carries some of the longest continuous baler-building experience in the world, from verticals to massive export balers.' },
      { h: 'Fleet ubiquity', p: 'Chains and distributors standardized on these machines for decades, which means parts knowledge and service familiarity everywhere: including here.' },
      { h: 'Simple to run, simple to keep', p: 'Straightforward controls and serviceable hydraulics that hold up under high-turnover retail staffing.' },
    ],
    weProvide: [
      'Harris / Selco vertical baler sales',
      'Repair and service on all Harris and Selco models',
      'Reconditioned Selco balers from our shop',
      'Parts and correctly sized baling wire',
      'Preventive maintenance for multi-store fleets',
      'Installation, relocation, and removal',
    ],
    faq: { q: 'Our stores run old Selco balers: can you maintain the whole fleet?', a: 'Yes. Multi-site vertical baler fleets are ideal preventive maintenance customers: one schedule, one vendor, one condition report per store, and far fewer emergency calls.' },
  },
];
