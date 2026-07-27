// ============================================================
// Location pages - the confirmed 100-mile ring (30 cities).
// Each page gets a genuinely unique local angle, per the plan:
// "written specifically for that town, not copied and pasted."
// The 100-200 mile ring ships after the client sets the radius.
// ============================================================

export const CITIES = [
  // ---------------- TENNESSEE ----------------
  {
    slug: 'memphis-tn', city: 'Memphis', state: 'Tennessee', abbr: 'TN', miles: 35,
    angle: [
      'Memphis is one of the largest distribution and logistics hubs in North America, a city where freight is the hometown industry and millions of square feet of warehouse space turn over cardboard, stretch wrap, and packaging waste around the clock. Every one of those docks needs compaction or baling that keeps pace, and every hauling contract in town rewards the operation that ships dense loads instead of air.',
      'Norton Equipment has served Memphis businesses from just across the state line in Byhalia since 1997, about 35 minutes from downtown. From distribution centers along Lamar Avenue and the airport corridor to groceries, hospitals, hotels, and multi-family towers, we sell, install, and service the compactors and balers that keep the city’s waste moving: any brand, any model.',
    ],
    industries: ['Distribution & logistics', 'Warehousing & fulfillment', 'Grocery & retail', 'Hospitals & medical', 'Hotels & hospitality', 'Multi-family & high-rise'],
    nearby: ['bartlett-tn', 'germantown-tn', 'west-memphis-ar', 'southaven-ms'],
  },
  {
    slug: 'bartlett-tn', city: 'Bartlett', state: 'Tennessee', abbr: 'TN', miles: 42,
    angle: [
      'Bartlett pairs one of the Memphis area’s strongest retail corridors with a genuine manufacturing base: the Bartlett Corporate Park and Stage Road industrial areas are home to medical device, machining, and light-manufacturing operations that generate steady streams of corrugated, plastics, and production scrap.',
      'We support Bartlett plants and retailers with stationary compactors, vertical balers, and the preventive maintenance that keeps single-machine back rooms from becoming emergencies. Byhalia is about 45 minutes out, and Bartlett sits on our regular service routes through northeast Shelby County.',
    ],
    industries: ['Medical device & precision manufacturing', 'Light industrial & machining', 'Retail centers', 'Grocery', 'Schools & municipal', 'Distribution'],
    nearby: ['memphis-tn', 'lakeland-tn', 'arlington-tn', 'cordova-tn'],
  },
  {
    slug: 'cordova-tn', city: 'Cordova', state: 'Tennessee', abbr: 'TN', miles: 38,
    angle: [
      'Cordova is retail country: the Germantown Parkway corridor packs big-box stores, grocery anchors, restaurants, and shopping centers into a few dense miles, and every loading dock on that strip fights the same battle: too much cardboard, too little space, and a hauler invoice that grows every quarter.',
      'That is vertical baler and front-load compactor territory, and it is bread-and-butter work for Norton Equipment. We size machines for Cordova back rooms, deliver and install around business hours, keep the wire coming, and answer the service calls fast from our shop about 40 minutes south in Byhalia.',
    ],
    industries: ['Big-box & strip retail', 'Grocery & supermarkets', 'Restaurants & QSR', 'Apartment communities', 'Offices & medical clinics', 'Fitness & entertainment'],
    nearby: ['bartlett-tn', 'germantown-tn', 'memphis-tn', 'collierville-tn'],
  },
  {
    slug: 'germantown-tn', city: 'Germantown', state: 'Tennessee', abbr: 'TN', miles: 28,
    angle: [
      'Germantown runs on retail, medical, and professional campuses, a polished suburb where site appearance is not negotiable. Overflowing dumpsters and stained pads do not survive long here, which is exactly the problem compaction solves: sealed self-contained units for food and medical waste streams, verticals for retail cardboard, and enclosures that keep the waste corner presentable.',
      'Byhalia is barely 30 minutes away, making Germantown one of the closest Tennessee markets we serve. Clinics, groceries, shopping districts, and municipal facilities get same-territory response and machines matched to tight, visible sites.',
    ],
    industries: ['Medical offices & clinics', 'Grocery & specialty retail', 'Restaurants', 'Municipal & schools', 'Churches & campuses', 'Professional offices'],
    nearby: ['collierville-tn', 'cordova-tn', 'memphis-tn', 'olive-branch-ms'],
  },
  {
    slug: 'collierville-tn', city: 'Collierville', state: 'Tennessee', abbr: 'TN', miles: 22,
    angle: [
      'Collierville has quietly become one of the strongest business addresses in the metro: corporate campuses and distribution operations along the Highway 385 corridor, a booming retail and restaurant scene around Carriage Crossing, and industrial parks that keep expanding east. Growth like that generates waste volume that outruns dumpster service fast.',
      'We are about 25 minutes away. Collierville is effectively next door to our Byhalia shop. That means quick evaluations, fast installs, and service response that a dealer across the metro cannot match, whether the machine is a DC stationary compactor or a restaurant-row front-load unit.',
    ],
    industries: ['Corporate campuses & logistics', 'Distribution centers', 'Retail & restaurants', 'Light manufacturing', 'Medical', 'Schools & municipal'],
    nearby: ['germantown-tn', 'olive-branch-ms', 'byhalia-ms', 'memphis-tn'],
  },
  {
    slug: 'millington-tn', city: 'Millington', state: 'Tennessee', abbr: 'TN', miles: 55,
    angle: [
      'Millington is anchored by Naval Support Activity Mid-South and the industrial and aviation businesses that grew up around it, plus a solid retail strip serving northern Shelby County. Institutional sites like these run on documented, dependable service: safety-compliant machines, scheduled maintenance, and paperwork done right.',
      'Norton Equipment supports Millington facilities with compactor and baler sales, preventive maintenance programs, and repair on all brands. We run north Shelby routes regularly, about an hour from our Byhalia shop.',
    ],
    industries: ['Government & military support', 'Aviation & industrial', 'Retail & grocery', 'Schools & municipal', 'Logistics', 'Multi-family'],
    nearby: ['memphis-tn', 'covington-tn', 'bartlett-tn', 'arlington-tn'],
  },
  {
    slug: 'arlington-tn', city: 'Arlington', state: 'Tennessee', abbr: 'TN', miles: 48,
    angle: [
      'Arlington is one of the fastest-growing towns in Shelby County, and its industrial side is growing with it: the I-40 corridor position has pulled in medical manufacturing, distribution, and contractor operations alongside new retail serving the housing boom.',
      'Growing operations are exactly who should get equipment sized with headroom. We help Arlington businesses spec compactors and balers for the volume they will have in three years, not just today, with sizing that lets you add capacity as the town grows. Byhalia is about 50 minutes south.',
    ],
    industries: ['Medical & device manufacturing', 'Distribution & logistics', 'Contractors & trades', 'New retail & grocery', 'Schools & municipal', 'Restaurants'],
    nearby: ['lakeland-tn', 'bartlett-tn', 'millington-tn', 'memphis-tn'],
  },
  {
    slug: 'lakeland-tn', city: 'Lakeland', state: 'Tennessee', abbr: 'TN', miles: 45,
    angle: [
      'Lakeland’s stretch of the I-40 corridor has become a distribution address in its own right, with warehouse space and flex industrial parks filling in alongside the retail growth on Highway 64. Dock-fed stationary compactors and baler lines are the standard kit for these buildings.',
      'We serve Lakeland from Byhalia (roughly 45 minutes) with equipment sales, turnkey installation, and the service-any-brand coverage that matters when a building changes tenants and inherits whatever machine the last occupant left behind.',
    ],
    industries: ['Warehousing & distribution', 'Flex industrial', 'Retail & grocery', 'Restaurants', 'Schools & municipal', 'Multi-family'],
    nearby: ['arlington-tn', 'bartlett-tn', 'cordova-tn', 'memphis-tn'],
  },
  {
    slug: 'covington-tn', city: 'Covington', state: 'Tennessee', abbr: 'TN', miles: 75,
    angle: [
      'Covington is Tipton County’s industrial center, with a manufacturing base (automotive components, consumer products, and food processing among them) that is heavy for a town its size. Plants like these run real waste streams: production scrap, corrugated, and packaging that justify serious compaction and baling equipment.',
      'Norton Equipment covers Covington with plant-grade machines, preventive maintenance, and the chutes, hoppers, and guards that production environments always end up needing. We are about 80 minutes out, and worth the drive. Ask the plants we already serve up Highway 51.',
    ],
    industries: ['Automotive & component manufacturing', 'Consumer products', 'Food processing', 'Distribution', 'Retail & grocery', 'Municipal'],
    nearby: ['millington-tn', 'brownsville-tn', 'memphis-tn', 'dyersburg-tn'],
  },
  {
    slug: 'brownsville-tn', city: 'Brownsville', state: 'Tennessee', abbr: 'TN', miles: 85,
    angle: [
      'Brownsville sits at the edge of the biggest industrial story in Tennessee: the BlueOval City megasite at nearby Stanton is transforming Haywood County, pulling suppliers, contractors, and logistics operations into a corridor that was quiet farmland a few years ago. New plants mean new waste streams, and getting equipment specced right from day one beats retrofitting later.',
      'We support Brownsville and the surrounding corridor with compactor and baler sales, installation, and all-brand service, about 90 minutes from our Byhalia shop. If you are standing up a new facility in Haywood County, our free waste stream consultation is the right first call.',
    ],
    industries: ['Automotive suppliers & contractors', 'New industrial construction', 'Agriculture & processing', 'Distribution', 'Retail & grocery', 'Municipal'],
    nearby: ['covington-tn', 'jackson-tn', 'dyersburg-tn', 'memphis-tn'],
  },
  {
    slug: 'dyersburg-tn', city: 'Dyersburg', state: 'Tennessee', abbr: 'TN', miles: 110,
    angle: [
      'Dyersburg anchors northwest Tennessee’s manufacturing economy: steel wire, rubber and plastics, and food production have deep roots here, supported by river, rail, and the I-155 crossing. Heavy industry means heavy-duty waste equipment: pre-crushers for bulky scrap, stationary compactors on the docks, and balers for the corrugated that never stops.',
      'Dyersburg sits at the northern edge of our confirmed service ring, and we cover it with scheduled service routes, plant maintenance programs, and equipment projects. For installs and refurbishments, distance is irrelevant. We mobilize for the job.',
    ],
    industries: ['Steel & wire products', 'Rubber & plastics', 'Food production', 'Agriculture', 'Distribution', 'Retail & grocery'],
    nearby: ['covington-tn', 'brownsville-tn', 'jackson-tn', 'blytheville-ar'],
  },
  {
    slug: 'jackson-tn', city: 'Jackson', state: 'Tennessee', abbr: 'TN', miles: 105,
    angle: [
      'Jackson is West Tennessee’s second city and a genuine industrial center: appliance and automotive-related manufacturing, food and beverage plants, and a growing distribution footprint along I-40, plus the retail gravity that serves fifteen surrounding counties. It is exactly the kind of market where equipment fleets sprawl across brands and vintages.',
      'That sprawl is our specialty: Norton services any brand and any model, which lets Jackson facility managers consolidate compactor and baler maintenance under one vendor. We cover Jackson at the eastern edge of our 100-mile ring with sales, service programs, and full project work.',
    ],
    industries: ['Appliance & automotive manufacturing', 'Food & beverage plants', 'Distribution & logistics', 'Regional retail & grocery', 'Hospitals & medical', 'Higher education'],
    nearby: ['brownsville-tn', 'dyersburg-tn', 'corinth-ms', 'memphis-tn'],
  },

  // ---------------- MISSISSIPPI ----------------
  {
    slug: 'byhalia-ms', city: 'Byhalia', state: 'Mississippi', abbr: 'MS', miles: 0,
    angle: [
      'Byhalia is home. Norton Equipment has operated from here since 1997, and our shop at 60 Amy Ln (service bays, repair shop, and reconditioned equipment inventory) sits right in the middle of one of the most explosive industrial corridors in the South. The Chickasaw Trails industrial area and the Highway 78/I-22 corridor have filled with million-square-foot distribution centers, and Marshall County keeps recruiting more.',
      'For Byhalia and Marshall County operations, working with us means the shop is minutes away: same-day eyes on a down machine, wire off the shelf, and techs who drive past your dock on the way to work. If your building is on the corridor, you are our closest neighbor. Call us first.',
    ],
    industries: ['Mega-distribution & fulfillment', 'Logistics & trucking', 'Manufacturing', 'Building products', 'Agriculture', 'Local retail & schools'],
    nearby: ['olive-branch-ms', 'holly-springs-ms', 'collierville-tn', 'hernando-ms'],
  },
  {
    slug: 'southaven-ms', city: 'Southaven', state: 'Mississippi', abbr: 'MS', miles: 30,
    angle: [
      'Southaven is Mississippi’s front porch on Memphis and one of the state’s largest cities: a retail powerhouse around Southaven Towne Center and Goodman Road, plus serious warehouse and distribution space stacked along Stateline and Airways. Cardboard is practically a municipal export here.',
      'We equip Southaven’s stores, restaurants, DCs, and apartment communities with vertical balers, compactors, and reconditioned options, backed by service routes that run DeSoto County constantly. Our Byhalia shop is barely half an hour east. "Compactor repair near me" in Southaven should ring our phone: (662) 838-7900.',
    ],
    industries: ['Big-box retail & malls', 'Warehousing & distribution', 'Restaurants & entertainment', 'Grocery', 'Multi-family', 'Medical'],
    nearby: ['horn-lake-ms', 'olive-branch-ms', 'hernando-ms', 'memphis-tn'],
  },
  {
    slug: 'horn-lake-ms', city: 'Horn Lake', state: 'Mississippi', abbr: 'MS', miles: 35,
    angle: [
      'Horn Lake works for a living: industrial parks and flex space off Goodman Road and along the I-55/I-69 corridor, trucking and contractor yards, and a retail strip serving one of DeSoto County’s densest populations. It is a town full of mid-size operations where one compactor or baler carries the whole waste program.',
      'When that one machine matters, service response is everything. Horn Lake is on our home-county routes (about 35 minutes from the Byhalia shop) for repairs, preventive maintenance, reconditioned machines, and wire delivery.',
    ],
    industries: ['Light industrial & flex', 'Trucking & contractor yards', 'Retail & grocery', 'Restaurants', 'Multi-family', 'Schools & municipal'],
    nearby: ['southaven-ms', 'hernando-ms', 'olive-branch-ms', 'west-memphis-ar'],
  },
  {
    slug: 'olive-branch-ms', city: 'Olive Branch', state: 'Mississippi', abbr: 'MS', miles: 18,
    angle: [
      'Olive Branch is one of the premier distribution addresses in the entire Memphis metro, the corridor from the DeSoto County line through the Metro industrial parks holds some of the largest warehouse and fulfillment footprints in the region, moving everything from pharmaceuticals to power tools. Every one of those buildings lives and dies by dock throughput, and waste equipment is part of that math.',
      'This is prime Norton territory: our Byhalia shop is roughly 20 minutes away, and Olive Branch DCs are the single most common address on our service tickets. Stationary compactors, auger machines, horizontal baler lines, enclosures, and PM programs: specced, installed, and serviced from next door.',
    ],
    industries: ['Mega-distribution & fulfillment', '3PL & logistics', 'Light manufacturing', 'Aviation & industrial', 'Retail & grocery', 'Multi-family'],
    nearby: ['byhalia-ms', 'southaven-ms', 'collierville-tn', 'germantown-tn'],
  },
  {
    slug: 'hernando-ms', city: 'Hernando', state: 'Mississippi', abbr: 'MS', miles: 35,
    angle: [
      'Hernando is DeSoto County’s seat and its fastest-charming downtown, but around the square, the town runs a real commercial economy: I-55 corridor businesses, medical and professional offices, groceries, schools, and contractors serving the county’s residential boom.',
      'Hernando businesses typically need right-sized equipment (a 60-inch vertical baler, a front-load container, a reconditioned compactor) rather than industrial giants, and honest sizing is the difference between a machine that pays for itself and one that just takes up pad space. That honest sizing conversation is free, and we are about 35 minutes away.',
    ],
    industries: ['Grocery & retail', 'Medical & professional offices', 'Restaurants', 'Schools & municipal', 'Contractors', 'Agriculture'],
    nearby: ['southaven-ms', 'horn-lake-ms', 'byhalia-ms', 'batesville-ms'],
  },
  {
    slug: 'holly-springs-ms', city: 'Holly Springs', state: 'Mississippi', abbr: 'MS', miles: 15,
    angle: [
      'Holly Springs is fifteen minutes down the road from our shop. Marshall County neighbors in the most literal sense. The town mixes a historic square economy with real industry: manufacturing and distribution operations in the industrial park, agricultural businesses, and Rust College anchoring the institutional side.',
      'For Holly Springs operations, Norton is the hometown equipment company: immediate service response, wire and parts off the shelf in Byhalia, and machines (new, reconditioned, or rented) delivered and installed by people you will see at the gas station on Saturday.',
    ],
    industries: ['Manufacturing & industrial park', 'Agriculture & timber', 'Higher education', 'Grocery & retail', 'Municipal', 'Distribution'],
    nearby: ['byhalia-ms', 'new-albany-ms', 'oxford-ms', 'collierville-tn'],
  },
  {
    slug: 'batesville-ms', city: 'Batesville', state: 'Mississippi', abbr: 'MS', miles: 55,
    angle: [
      'Batesville commands the I-55/Highway 6 crossroads of the north Delta: a genuine manufacturing town with plants in electrical products, industrial components, and food, plus the retail hub role for Panola County. Its industrial park has decades of production history and the waste streams to prove it.',
      'We serve Batesville plants and retailers with the full line: stationary compactors and balers for production waste, service on whatever brands are already on the pads, refurbishment that stretches capital budgets, and PM programs that keep single-machine sites out of trouble. About an hour from the shop, on routes we run weekly.',
    ],
    industries: ['Electrical & industrial manufacturing', 'Food production', 'Distribution', 'Retail & grocery', 'Agriculture', 'Schools & municipal'],
    nearby: ['oxford-ms', 'hernando-ms', 'clarksdale-ms', 'byhalia-ms'],
  },
  {
    slug: 'oxford-ms', city: 'Oxford', state: 'Mississippi', abbr: 'MS', miles: 50,
    angle: [
      'Oxford runs on the University of Mississippi and everything that orbits it: a hospitality and restaurant scene that outperforms cities three times its size, game-day retail surges, student housing by the thousands of beds, and a growing medical and professional base. Waste volume here swings hard with the calendar, which makes flexible equipment strategy matter.',
      'We help Oxford operations handle the swing: right-sized compactors for student housing and hotels, balers for grocery and campus-area retail, flexible sizing for seasonal surges, and service programs timed around the academic year. Byhalia is about an hour north.',
    ],
    industries: ['University & campus facilities', 'Restaurants & hospitality', 'Student housing & multi-family', 'Grocery & retail', 'Medical', 'Construction'],
    nearby: ['batesville-ms', 'holly-springs-ms', 'new-albany-ms', 'byhalia-ms'],
  },
  {
    slug: 'clarksdale-ms', city: 'Clarksdale', state: 'Mississippi', abbr: 'MS', miles: 75,
    angle: [
      'Clarksdale is the commercial heart of the upper Delta: agriculture and ag processing, food distribution, healthcare, and a tourism economy built on the blues. Delta operations tend to run equipment hard and long, and they need a service partner who shows up rather than a dealer who only answers for machines under warranty.',
      'Norton services all brands and vintages, which is precisely what Delta equipment fleets need. We cover Clarksdale and Coahoma County with repair, maintenance programs, reconditioned machines, and wire delivery, about 90 minutes from the shop.',
    ],
    industries: ['Agriculture & ag processing', 'Food distribution', 'Healthcare', 'Tourism & hospitality', 'Retail & grocery', 'Municipal'],
    nearby: ['tunica-ms', 'batesville-ms', 'hernando-ms', 'forrest-city-ar'],
  },
  {
    slug: 'new-albany-ms', city: 'New Albany', state: 'Mississippi', abbr: 'MS', miles: 50,
    angle: [
      'New Albany sits at the center of north Mississippi’s furniture manufacturing belt, with upholstered furniture plants and their suppliers spread through Union County and its neighbors. Furniture production creates one of the toughest waste profiles in industry (bulky frames and trim, mountains of cardboard, foam, and film) that ordinary dumpster service simply cannot digest economically.',
      'That profile is a Norton specialty: pre-crushers for bulky scrap, balers for corrugated and film, and right-sized compaction for the high-volume trash a furniture line throws off. We are about an hour away on I-22 and already deep in the furniture corridor.',
    ],
    industries: ['Furniture manufacturing', 'Suppliers & components', 'Distribution', 'Healthcare', 'Retail & grocery', 'Agriculture'],
    nearby: ['holly-springs-ms', 'oxford-ms', 'corinth-ms', 'byhalia-ms'],
  },
  {
    slug: 'corinth-ms', city: 'Corinth', state: 'Mississippi', abbr: 'MS', miles: 90,
    angle: [
      'Corinth’s crossroads heritage is industrial fact, not just Civil War history: the city carries one of northeast Mississippi’s strongest manufacturing rosters, from machinery and metal products to consumer goods, with rail access that keeps plants competitive. Metalworking and machinery plants generate scrap streams that reward smart equipment: dense loads are money in this town.',
      'We support Corinth at the eastern edge of our ring with plant-grade compactors and balers, all-brand repair, refurbishment projects, and preventive maintenance routes. For a manufacturing city, our in-house repair capability travels well.',
    ],
    industries: ['Machinery & metal products', 'Consumer goods manufacturing', 'Rail-served industry', 'Healthcare', 'Retail & grocery', 'Distribution'],
    nearby: ['new-albany-ms', 'jackson-tn', 'oxford-ms', 'byhalia-ms'],
  },
  {
    slug: 'tunica-ms', city: 'Tunica', state: 'Mississippi', abbr: 'MS', miles: 50,
    angle: [
      'Tunica runs two economies at once: the casino resort corridor along the river: hotels, restaurants, and entertainment venues that generate hospitality waste at scale, much of it wet, and the Delta agriculture that surrounds it. Resorts need leak-tight self-contained compactors and reliable service; ag operations need equipment that shrugs off dust and hard use.',
      'Norton Equipment covers both from about an hour away: sealed compaction for the resorts’ food-heavy streams, balers for their cardboard, and rugged, serviceable machines for the farm and gin side of the county.',
    ],
    industries: ['Casino resorts & hotels', 'Restaurants & entertainment', 'Agriculture & gins', 'Distribution', 'Retail & grocery', 'Municipal'],
    nearby: ['clarksdale-ms', 'hernando-ms', 'horn-lake-ms', 'west-memphis-ar'],
  },

  // ---------------- ARKANSAS ----------------
  {
    slug: 'west-memphis-ar', city: 'West Memphis', state: 'Arkansas', abbr: 'AR', miles: 45,
    angle: [
      'West Memphis is the trucking crossroads of America: I-40 and I-55 meet here, and the city has built its economy on the freight that never stops rolling through: truck stops and travel plazas, terminals and cross-docks, warehouses, and the steel and industrial operations along the river. High-traffic sites generate high-volume waste, and downtime is measured in blocked docks.',
      'We serve West Memphis and Crittenden County with stationary compactors, balers, reconditioned options, and fast all-brand repair: about 50 minutes from the Byhalia shop, straight across the metro. It is one of the first markets our new location pages were built to win, because the searches are there and the service always has been.',
    ],
    industries: ['Trucking & terminals', 'Travel plazas & fuel', 'Warehousing & cross-dock', 'Steel & river industry', 'Retail & grocery', 'Municipal'],
    nearby: ['marion-ar', 'memphis-tn', 'forrest-city-ar', 'southaven-ms'],
  },
  {
    slug: 'marion-ar', city: 'Marion', state: 'Arkansas', abbr: 'AR', miles: 50,
    angle: [
      'Marion has turned its I-55 frontage into one of east Arkansas’s fastest-growing logistics addresses, with distribution and industrial park development pulling operations across the river from Memphis, alongside the retail growth that follows rooftops in Crittenden County.',
      'New buildings deserve equipment planned in, not bolted on: we help Marion operations spec dock compactors, baler rooms, and enclosures during fit-out, then back them with maintenance routes that already run this corridor weekly. Roughly 55 minutes from our shop.',
    ],
    industries: ['Distribution & logistics', 'Industrial park operations', 'Retail & grocery', 'Schools & municipal', 'Contractors', 'Agriculture'],
    nearby: ['west-memphis-ar', 'memphis-tn', 'osceola-ar', 'forrest-city-ar'],
  },
  {
    slug: 'forrest-city-ar', city: 'Forrest City', state: 'Arkansas', abbr: 'AR', miles: 85,
    angle: [
      'Forrest City anchors the I-40 corridor between Memphis and Little Rock: a manufacturing and distribution town in the heart of east Arkansas farm country, with food processing, steel and industrial products, and the retail hub role for St. Francis County.',
      'Out here, equipment support is about reliability at distance: machines specced to run without babysitting, preventive maintenance on a route schedule, and a service company that answers the phone when something breaks. That is exactly how we cover Forrest City, about 90 minutes west of the shop.',
    ],
    industries: ['Food processing', 'Steel & industrial products', 'Agriculture', 'Distribution', 'Retail & grocery', 'Corrections & institutional'],
    nearby: ['west-memphis-ar', 'marion-ar', 'clarksdale-ms', 'jonesboro-ar'],
  },
  {
    slug: 'osceola-ar', city: 'Osceola', state: 'Arkansas', abbr: 'AR', miles: 90,
    angle: [
      'Osceola is at the center of northeast Arkansas’s steel boom: the Mississippi County river corridor has become one of the largest steel-producing regions in America, and the mills have pulled a wave of suppliers, processors, and logistics operations into town with them. Steel-adjacent industry produces punishing waste streams: banding, dunnage, pallets, drums, and bulky scrap that eats ordinary equipment.',
      'That is pre-crusher and heavy-stationary territory, backed by our own shop for the wear repairs industrial machines accumulate. We cover Osceola and the river corridor at the edge of our ring, and we build project schedules around mill-country realities.',
    ],
    industries: ['Steel mills & processors', 'Industrial suppliers', 'River & rail logistics', 'Agriculture', 'Retail & grocery', 'Municipal'],
    nearby: ['blytheville-ar', 'marion-ar', 'dyersburg-tn', 'jonesboro-ar'],
  },
  {
    slug: 'blytheville-ar', city: 'Blytheville', state: 'Arkansas', abbr: 'AR', miles: 105,
    angle: [
      'Blytheville shares the Mississippi County steel corridor with Osceola and adds its own industrial base around the former air base and the I-55 corridor. Between the mills, their supplier network, and the ag economy, this is one of the hardest-working stretches of Arkansas, and its waste equipment works just as hard.',
      'At the northwest corner of our confirmed ring, Blytheville gets the same coverage philosophy as the rest of mill country: heavy-duty machines specced honestly, all-brand repair, refurbishment that saves capital, and scheduled maintenance that respects the distance by preventing the emergency.',
    ],
    industries: ['Steel & metals', 'Industrial suppliers', 'Aviation & aerospace park', 'Agriculture', 'Distribution', 'Retail & grocery'],
    nearby: ['osceola-ar', 'jonesboro-ar', 'dyersburg-tn', 'marion-ar'],
  },
  {
    slug: 'jonesboro-ar', city: 'Jonesboro', state: 'Arkansas', abbr: 'AR', miles: 110,
    angle: [
      'Jonesboro is northeast Arkansas’s capital in everything but name: a food manufacturing powerhouse with some of the largest processing plants in the region, plus Arkansas State University, a major medical sector, and the retail draw of half a dozen counties. Food plants mean wet, heavy, hygiene-critical waste streams; that is self-contained compactor country, with balers on the packaging side.',
      '"Compactor repair Jonesboro" is exactly the search this page exists to win, because the service has existed all along: Norton covers Jonesboro at the western edge of our 100-mile ring with equipment sales, all-brand repair, PM programs, and project installs for the plants that keep the region fed.',
    ],
    industries: ['Food manufacturing & processing', 'Higher education', 'Hospitals & medical', 'Distribution', 'Big-box retail & grocery', 'Agriculture'],
    nearby: ['blytheville-ar', 'osceola-ar', 'forrest-city-ar', 'west-memphis-ar'],
  },
];

export const STATES = [
  { name: 'Tennessee', abbr: 'TN' },
  { name: 'Mississippi', abbr: 'MS' },
  { name: 'Arkansas', abbr: 'AR' },
];
