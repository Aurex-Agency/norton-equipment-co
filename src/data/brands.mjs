// ============================================================
// Brand pages - /brands/<slug>/
// Client-confirmed set 7/26: Marathon, Cram-A-Lot, Max-Pak, Mac Corp,
// PTR, BACE. (Harris/Selco dropped as a dedicated page; Harris American
// moved to the serviced-brands list.) Max-Pak is a confirmed factory-
// authorized line (balers). Max-Pak no longer makes compactors, so its
// copy is baler-focused. New brand pages (Mac Corp, PTR, BACE) are
// written around what Norton actually does; confirm any brand-specific
// manufacturer detail with the client before adding more claims.
// ============================================================

export const BRANDS_OVERVIEW = {
  metaTitle: 'Brands We Sell & Service | Marathon, Cram-A-Lot, Max-Pak, PTR, BACE & More | Norton Equipment',
  metaDesc:
    'Norton Equipment sells, services, repairs, and supplies parts for every major compactor and baler brand: Marathon, Cram-A-Lot, Max-Pak, Mac Corp, PTR, BACE, Harris American, and more. Mid-South coverage since 1997.',
  h1: 'Every Major Brand. One Phone Number.',
  kicker: 'Sell · Service · Repair · Parts',
  sub: 'Buyers shop by brand, and machines break by brand, but Norton Equipment works on all of them. These are the lines we know deepest, plus the makes we service in the field every week.',
  alsoService: ['Harris American', 'International Baler', 'Wastequip', 'Harmony', 'Bramidan', 'Sebright'],
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
    faq: { q: 'Do you repair older Marathon RamJet compactors?', a: 'Yes: RamJets are long-lived machines and we service every generation still in the field, including structural floor rebuilds in our shop when decades of cycles catch up with the steel.' },
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
      'Norton Equipment sells, installs, services, repairs, and supplies parts for Cram-A-Lot machines across our territory. The proximity matters in practice: parts and factory answers move fast, and the machines are engineered by people who understand Mid-South operations. Our techs know the line inside and out, and because we are independent, we will put a Cram-A-Lot quote next to a Marathon or PTR quote and let the right machine win.',
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
    kicker: 'Authorized Dealer · Balers Since 1976',
    authorized: true,
    short: 'Balers built to outlast, and the one line we carry as a factory-authorized dealer.',
    metaTitle: 'Max-Pak Balers | Authorized Dealer, Service & Parts | Norton Equipment',
    metaDesc:
      'Norton Equipment is a factory-authorized Max-Pak dealer. Max-Pak baler sales, service, repair, parts, and wire across the Mid-South. Built heavy since 1976, more than 90% of Max-Pak balers ever built are still working.',
    intro: [
      'Max-Pak has been building balers since 1976 with one guiding idea: make it heavy, make it simple, make it last. The company’s own famous statistic says it best, more than ninety percent of the balers they have ever built are still working. If you have shopped vertical balers in the Mid-South, you have seen the proof; Max-Pak machines like the MP60HD are back-room fixtures that outlive the stores around them.',
      'Norton Equipment is a factory-authorized Max-Pak dealer, and it is the one line we carry with that direct manufacturer relationship. We sell, install, service, repair, and supply parts and wire for Max-Pak balers across our territory, and we know these machines down to the weld seams. Their durability makes them stars of the reconditioned market too: a rebuilt Max-Pak is about the safest used-equipment purchase in the industry.',
    ],
    knownFor: [
      { h: 'Legendary durability', p: 'More than 90% of all Max-Pak balers ever built are still in service: an industry statistic nobody else touches.' },
      { h: 'The MP60HD and vertical line', p: 'Heavy-duty 60″ and 72″ vertical balers that produce dense, mill-ready bales cycle after cycle for decades.' },
      { h: 'Simple, serviceable design', p: 'Straightforward hydraulics and controls that technicians can actually maintain: a big reason the machines last.' },
      { h: 'A relationship, not just a nameplate', p: 'As an authorized dealer, we place new Max-Pak balers with direct factory support behind the sale.' },
    ],
    weProvide: [
      'New Max-Pak baler sales as a factory-authorized dealer',
      'Repair and service on every Max-Pak model and vintage',
      'Reconditioned Max-Pak balers: the used-market favorite',
      'Parts and baling wire sized to Max-Pak chambers',
      'Preventive maintenance programs',
      'Installation, relocation, and removal',
    ],
    faq: { q: 'Is a used Max-Pak baler a good buy?', a: 'Generally one of the best in the industry, the machines are so overbuilt that a shop-reconditioned unit routinely delivers another decade of service. Ours are rebuilt and warrantied in our Byhalia shop.' },
  },
  {
    slug: 'mac-corp',
    name: 'Mac Corp',
    kicker: 'Sold · Serviced · Supported',
    short: 'A line Norton sells, services, repairs, and sources parts for across the Mid-South.',
    metaTitle: 'Mac Corp Equipment | Sales, Service, Parts | Norton Equipment',
    metaDesc:
      'Mac Corp waste and recycling equipment sales, service, repair, and parts across Memphis, North Mississippi, West Tennessee, and East Arkansas. Norton Equipment, independent since 1997.',
    intro: [
      'Mac Corp is one of the lines Norton Equipment places and stands behind across the Mid-South. Whether you are speccing a new machine or keeping an existing one running, we handle the sale, the install, the service, and the parts, the same way we do for every brand we carry.',
      'Because we are independent, a Mac Corp quote sits next to a Marathon, Cram-A-Lot, PTR, or BACE quote, and we help you choose the machine that actually fits your waste stream and your dock, not the only one on the truck. And once it is on your pad, our own techs keep it there.',
    ],
    knownFor: [
      { h: 'Sold and supported locally', p: 'New-machine sales with Norton handling delivery, installation, and setup across the 100-mile service ring.' },
      { h: 'Serviced by our own techs', p: 'Repair, preventive maintenance, and parts, whether the machine came from us or was already in the field.' },
      { h: 'Independent advice', p: 'We quote Mac Corp against the other major lines and recommend what fits, not what is convenient.' },
    ],
    weProvide: [
      'New Mac Corp equipment sales',
      'Repair and service on Mac Corp machines',
      'Preventive maintenance programs',
      'Parts sourcing and support',
      'Refurbishment of older units',
      'Installation, relocation, and removal',
    ],
    faq: { q: 'Do you service Mac Corp equipment you didn’t sell?', a: 'Yes. We service every major make and model across the Mid-South, whether or not the machine originally came from us.' },
  },
  {
    slug: 'ptr',
    name: 'PTR',
    kicker: 'Compactors · Balers · Heavy Duty',
    short: 'Heavy-duty balers and compactors, sold and serviced by Norton across the Mid-South.',
    metaTitle: 'PTR Balers & Compactors | Sales, Service, Parts | Norton Equipment',
    metaDesc:
      'PTR baler and compactor sales, service, repair, and parts across the Mid-South. Norton Equipment sells and services PTR equipment for warehouses, retail, and industry, independent since 1997.',
    intro: [
      'PTR builds balers and compactors with a reputation for heavy, hard-working machines, and it is one of the lines Norton Equipment most wants to be known for placing and servicing across the Mid-South. From stationary and self-contained compactors to balers for volume operations, PTR equipment shows up on the docks Norton serves every week.',
      'Norton sells, installs, services, repairs, and sources parts for PTR machines throughout our territory. As an independent dealer, we will put a PTR quote next to Marathon, Cram-A-Lot, or BACE and help you pick the right machine, then back it with our own technicians and our fabrication shop for the structural work.',
    ],
    knownFor: [
      { h: 'Heavy-duty compactors', p: 'Stationary and self-contained compaction equipment built for demanding, high-volume sites.' },
      { h: 'Baler lineup', p: 'Balers for warehouse, retail, and industrial cardboard and packaging.' },
      { h: 'Serviceable in the field', p: 'Straightforward hydraulics and controls our techs support region-wide.' },
    ],
    weProvide: [
      'New PTR compactor and baler sales',
      'Repair and emergency service on all PTR models',
      'Preventive maintenance programs',
      'Parts sourcing and support',
      'Refurbishment and structural rebuilds',
      'Installation, relocation, and removal',
    ],
    faq: { q: 'Do you stock parts for PTR machines?', a: 'We stock common wear and electrical parts and source the rest quickly, and our fabrication shop handles the structural repairs many older machines eventually need.' },
  },
  {
    slug: 'bace',
    name: 'BACE',
    kicker: 'Balers · Compactors · Value-Built',
    short: 'Balers and compactors Norton sells, services, and repairs across the Mid-South.',
    metaTitle: 'BACE Balers & Compactors | Sales, Service, Parts | Norton Equipment',
    metaDesc:
      'BACE baler and compactor sales, service, repair, and parts across Memphis, North Mississippi, West Tennessee, and East Arkansas. Norton Equipment, independent since 1997.',
    intro: [
      'BACE builds a broad range of balers and compactors, and it is one of the lines Norton Equipment carries and services across the Mid-South. Whether you need a vertical baler for a back room or a compactor for a busy dock, BACE equipment is part of the lineup we sell, install, and keep running.',
      'Norton sells, services, repairs, and sources parts for BACE machines throughout our territory. Independent by design, we quote BACE against Marathon, Cram-A-Lot, PTR, and the rest, and recommend the machine that fits your operation, then stand behind it with our own service techs.',
    ],
    knownFor: [
      { h: 'Balers for every back room', p: 'Vertical balers sized for retail, grocery, and warehouse cardboard.' },
      { h: 'Compactors for the dock', p: 'Compaction equipment for higher-volume dry-waste operations.' },
      { h: 'Value-engineered and serviceable', p: 'Machines our techs support and keep running region-wide.' },
    ],
    weProvide: [
      'New BACE baler and compactor sales',
      'Repair and emergency service on all BACE models',
      'Preventive maintenance programs',
      'Parts sourcing and support',
      'Refurbishment of older units',
      'Installation, relocation, and removal',
    ],
    faq: { q: 'Can you service a BACE machine that didn’t come from Norton?', a: 'Yes. We service every major make and model across the Mid-South, no matter where the machine originally came from.' },
  },
];
