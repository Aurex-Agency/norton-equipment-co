// November 2026 guides. Written to the query clusters Search Console already
// shows the site for (baler safety and training, compactor cost, horizontal
// balers, baler cost). No named technical reviewer, customer result, staff
// credential, or inventory claim is made. Price ranges are planning ranges;
// every quote depends on specification, condition, site preparation, delivery,
// and installation.
export const NOVEMBER_UPDATED = '2026-11-16';

// Pages whose visible content, titles, or guide links changed in this release
// (sitemap lastmod). New articles and refreshed posts carry their own dates.
export const NOVEMBER_UPDATED_PAGES = new Set([
  'index.html', 'blog/index.html',
  'trash-compactors/index.html', 'trash-compactors/self-contained/index.html', 'trash-compactors/stationary/index.html', 'trash-compactors/vertical-apartment/index.html', 'trash-compactors/pre-crusher/index.html', 'trash-compactors/auger/index.html', 'trash-compactors/front-load-rear-load/index.html', 'trash-compactors/steel-options/index.html', 'trash-compactors/used/index.html',
  'balers-recycling/index.html', 'balers-recycling/vertical-balers/index.html', 'balers-recycling/horizontal-balers/index.html', 'balers-recycling/two-ram-balers/index.html', 'balers-recycling/specialty-balers/index.html', 'balers-recycling/refurbished-balers/index.html', 'balers-recycling/used-balers/index.html', 'balers-recycling/baling-wire/index.html',
  'services/index.html', 'services/compactor-repair/index.html', 'services/baler-service/index.html', 'services/preventive-maintenance/index.html', 'services/equipment-evaluations/index.html', 'services/equipment-refurbishment/index.html', 'services/equipment-logistics/index.html', 'services/rigging/index.html', 'services/waste-stream-consultations/index.html',
  'brands/index.html', 'brands/marathon/index.html', 'brands/cram-a-lot/index.html', 'brands/max-pak/index.html', 'brands/mac-corp/index.html', 'brands/ptr/index.html', 'brands/bace/index.html',
  'locations/memphis-tn/index.html',
  'how-to-choose-the-right-baler/index.html',
]);

const table = (caption, headers, rows) => `<div class="article-table" role="region" aria-label="${caption}" tabindex="0"><table><caption>${caption}</caption><thead><tr>${headers.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, i) => (i ? `<td>${cell}</td>` : `<th scope="row">${cell}</th>`)).join('')}</tr>`).join('')}</tbody></table></div>`;

const PRICE_NOTE = '<p><em>About these numbers:</em> they are planning ranges drawn from what commercial equipment typically sells for, not a quote. Every Norton quote depends on the exact specification, condition, site preparation, delivery, and installation. Call <a href="tel:+16628387900">(662) 838-7900</a> for a number tied to your machine and your site.</p>';

export const NOVEMBER_POSTS = [
  // ------------------------------------------------------------------
  // 1. Safety and operator training
  // ------------------------------------------------------------------
  {
    slug: 'cardboard-baler-safety-training-guide',
    title: 'Cardboard Baler Safety and Operator Training Guide: OSHA, ANSI, and Who Is Allowed to Run the Machine',
    seoTitle: 'Cardboard Baler Safety & Operator Training Guide | Norton',
    metaDesc: 'Who may operate a cardboard baler, what OSHA and ANSI Z245.5 require, the federal rule on workers under 18, lockout for jams, and a training checklist you can print.',
    date: '2026-11-16',
    readMins: 12,
    img: 'baler-chamber',
    imgAlt: 'Open chamber of a vertical cardboard baler with the door swung aside',
    topic: 'Baler safety and training',
    excerpt: 'Who may operate a baler, what training has to cover, the federal rule on 16 and 17 year olds, and how to clear a jam without putting anyone inside the chamber.',
    answer: 'Only trained, authorized employees who are 18 or older may operate or unload a cardboard baler. Workers who are 16 or 17 may load one only when the machine meets ANSI Z245.5, cannot cycle while loading, and carries the required Department of Labor notice. Training must cover loading limits, the emergency stop, bale ejection, wire tying, and the rule that jams are cleared under lockout, never by hand.',
    cta: {
      title: 'Have the safety systems on your baler checked.',
      text: 'Interlocks, guards, key switches, and emergency stops wear like everything else. Tell us the make, model, and location and Norton can schedule a safety-system inspection as part of preventive maintenance.',
      intent: 'maintenance',
      label: 'Request a safety inspection',
    },
    about: [
      { '@type': 'Legislation', name: '29 CFR 570.63, Hazardous Occupations Order No. 12 (paper-products machines)', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-V/subchapter-A/part-570/subpart-E/section-570.63' },
      { '@type': 'Legislation', name: '29 CFR 1910.147, The control of hazardous energy (lockout/tagout)', url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147' },
      { '@type': 'Legislation', name: '29 CFR 1910.212, General requirements for all machines', url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212' },
    ],
    related: [
      { href: '/services/preventive-maintenance/', label: 'Preventive maintenance programs' },
      { href: '/services/baler-service/', label: 'Baler service and repair' },
      { href: '/services/equipment-evaluations/', label: 'Safety and compliance evaluations' },
      { href: '/blog/commercial-baler-maintenance-checklist/', label: 'Baler maintenance checklist' },
      { href: '/blog/commercial-baler-troubleshooting/', label: 'Baler troubleshooting guide' },
      { href: '/balers-recycling/vertical-balers/', label: 'Vertical balers' },
    ],
    sourcesTitle: 'Rules and references cited',
    sourcesIntro: 'The machine manual and your facility’s written procedures govern the specific baler. These are the public sources this guide draws on:',
    sources: [
      { url: 'https://www.dol.gov/agencies/whd/fact-sheets/57-flsa-balers', label: 'U.S. Department of Labor, Fact Sheet #57: Hazardous Occupations Order No. 12, balers and compactors' },
      { url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-V/subchapter-A/part-570/subpart-E/section-570.63', label: 'eCFR, 29 CFR 570.63: occupations involving the operation of paper-products machines' },
      { url: 'https://www.osha.gov/control-hazardous-energy', label: 'OSHA, Control of hazardous energy (lockout/tagout)' },
      { url: 'https://www.osha.gov/machine-guarding', label: 'OSHA, Machine guarding' },
      { url: 'https://www.cdc.gov/niosh/face/', label: 'NIOSH Fatality Assessment and Control Evaluation (FACE) program reports' },
    ],
    body: `<h2>Why this guide exists</h2>
<p>A cardboard baler is a slow machine. The ram takes most of a minute to travel, there is no blade, and nothing about it looks dangerous from across a back room. That is exactly why it hurts people. Balers injure workers who reach into the chamber to free a stuck box, who climb on the door to stamp material down, who bypass an interlock so a jammed machine will cycle, or who stand under a bale as it tips out of the chamber. NIOSH fatality investigations describe the same handful of scenarios over and over, and almost every one involved an operator who had not been trained on the specific machine or a safeguard that had been defeated.</p>
<p>This guide is for the store manager, warehouse lead, or safety coordinator who has a baler in the building and needs to know what the rules actually say, who is allowed to touch the machine, and what a training program has to cover. It applies to vertical downstroke balers first, because that is what most retail, grocery, and warehouse back rooms run, with notes for horizontal balers and compactors where the rules differ. It is written from the dealer side: Norton has installed, serviced, and retrained operators on these machines across the Mid-South since 1997.</p>
<p>It is not a substitute for the manufacturer’s manual, your facility’s written procedures, or legal advice. Where the rules below and your manual disagree, follow the manual and ask the manufacturer.</p>

<h2>The rules that actually apply to a baler</h2>
<p>There is no OSHA standard written specifically for balers. People look for one and conclude there are no rules. There are, and they come from three places.</p>
${table('Rules that govern commercial baler operation', ['Rule', 'What it covers', 'Who it binds'], [
  ['<strong>OSHA 29 CFR 1910.212</strong> (machine guarding)', 'Points of operation, nip points, and moving parts must be guarded so no part of the operator’s body is in the danger zone during the cycle. On a baler this is the chamber door, its interlock, and the gate or safety bar.', 'Every employer'],
  ['<strong>OSHA 29 CFR 1910.147</strong> (lockout/tagout)', 'Servicing and maintenance, which includes clearing jams, requires the machine to be isolated from its energy source and locked out by an authorized employee following a written procedure.', 'Every employer with powered equipment'],
  ['<strong>OSHA General Duty Clause</strong>, Section 5(a)(1)', 'Where no specific standard applies, the employer must still provide a workplace free of recognized hazards. OSHA cites baler incidents under this clause and under 1910.212 and 1910.147.', 'Every employer'],
  ['<strong>ANSI Z245.5</strong> (baling equipment)', 'The voluntary consensus standard for the design, installation, maintenance, and operation of balers: guarding, interlocks, key-controlled switches, warning labels, and operator training. OSHA and the Department of Labor both reference it.', 'Manufacturers, installers, owners, and operators who adopt it; required for the minor-loading exception below'],
  ['<strong>FLSA Hazardous Occupations Order 12</strong>, 29 CFR 570.63', 'Federal child labor rule for paper-products machines. Prohibits anyone under 18 from operating or unloading a baler or compactor, with a narrow exception that lets 16 and 17 year olds load one.', 'Every employer with workers under 18'],
  ['<strong>OSHA 29 CFR 1910.132</strong> (PPE) and <strong>1910.178</strong> (forklifts)', 'Eye and hand protection where wire and cardboard edges create a hazard; forklift training and certification for anyone moving finished bales.', 'Every employer'],
])}
<p>State plans in Tennessee (TOSHA) and other state-plan states enforce standards at least as strict as the federal rules above. Mississippi and Arkansas are federal OSHA states. The requirements in this guide are the federal floor.</p>

<h2>Who is allowed to operate a baler</h2>
<p>Two filters decide this: age and training.</p>
<h3>Workers under 18: the federal rule retail managers get wrong</h3>
<p>Hazardous Occupations Order 12 prohibits anyone under 18 from <strong>operating</strong> or <strong>unloading</strong> a scrap paper baler or a paper box compactor, and from assisting in either. That part is absolute. No training certificate or parental permission changes it.</p>
<p>Congress carved out one exception in 1996 and the Department of Labor spelled out its conditions in 29 CFR 570.63. A 16 or 17 year old may <strong>load</strong> a baler or compactor, and only load it, when all of the following are true:</p>
<ol>
<li>The machine meets ANSI Z245.5-1990 for balers (or ANSI Z245.2-1992 for compactors), or a later edition the Department of Labor has determined is at least as protective. The manufacturer’s compliance plate or documentation is how you prove this.</li>
<li>The machine includes an on-off switch with a key lock or an equivalent system, and the key or control stays in the custody of an employee who is 18 or older.</li>
<li>The machine cannot be operated while it is being loaded. On a compliant vertical baler the door interlock does this: the ram cannot cycle while the loading door is open.</li>
<li>The employer posts a notice on the machine stating that it meets the applicable ANSI standard, that 16 and 17 year olds may load it but may not operate or unload it, and that no one under 16 may load, operate, or unload it.</li>
</ol>
<p>Workers under 16 may not load, operate, or unload under any condition. “Unloading” includes tying off and ejecting the bale, so a 17 year old who loads the chamber must step away and let an adult finish it. The Department of Labor’s <a href="https://www.dol.gov/agencies/whd/fact-sheets/57-flsa-balers">Fact Sheet 57</a> walks through the notice requirement and the list of approved standard editions. If your baler predates the 1990 standard or has no compliance documentation, the exception does not apply and nobody under 18 may touch it.</p>
<h3>Workers 18 and older: authorized means trained and named</h3>
<p>Being an adult is the floor, not the qualification. OSHA’s expectation, and ANSI Z245.5’s requirement, is that only employees who have been trained on that specific machine and designated by the employer operate it. In practice this means a written list of authorized operators per machine, a signed training record for each, and a key or access control that keeps everyone else off it. A new hire with five years on a different brand of baler is not authorized on yours until someone trains them on yours.</p>

<h2>What operator training must cover</h2>
<p>ANSI Z245.5 requires the employer to train operators before they use the machine and to cover the manufacturer’s instructions, the hazards, the safeguards, and the procedures for normal operation and for abnormal conditions. The table below is the content Norton covers when installing a baler and retraining a crew, organized so you can use it as a syllabus. The <a href="/resources/baler-operator-training-checklist.html">printable operator training checklist</a> has the same items with sign-off lines.</p>
${table('Baler operator training checklist', ['Topic', 'What the operator must be able to do', 'Why it is on the list'], [
  ['Pre-shift inspection', 'Walk around the machine; confirm guards, door, latch, and interlock are intact; confirm the emergency stop is reachable; look for hydraulic fluid on the floor; confirm wire supply.', 'Most defeated safeguards were damaged first and worked around second. The walk-around catches damage before someone improvises.'],
  ['Controls and the emergency stop', 'Identify every control on the panel, start and stop the ram, and hit the emergency stop from the operating position without looking for it.', 'Operators freeze under stress. The stop has to be muscle memory.'],
  ['Approved material and loading limits', 'Load only the material the machine is rated for, flattened, below the fill line; keep hands and arms outside the chamber opening at all times; never load while the ram is moving.', 'Overfilling causes jams and bridging. Jams invite reaching in.'],
  ['The chamber is off limits', 'State the rule: no body part enters the chamber for any reason while the machine is energized. Material that will not go in is pushed with the door or with an approved tool from outside, never by hand or foot.', 'Reaching into the chamber during a cycle is the leading cause of baler amputations and fatalities in NIOSH reports.'],
  ['Cycle and full-bale indication', 'Recognize the full-bale light, gauge, or ram position that means the bale is ready; stop loading at that point.', 'Operators who keep stuffing a full chamber create jams and oversize bales.'],
  ['Wire tying', 'Thread ties through the chamber slots from the outside, twist off correctly, keep eyes protected from wire ends, and know the number of ties the machine requires.', 'Wire ends cut hands and eyes. Under-tied bales burst during ejection or handling.'],
  ['Bale ejection', 'Open the door only when the ram is at the top and the machine is stopped, stand clear of the tip path, use the ejector, and never pull a bale by hand or stand in front of a tipping bale.', 'A 60 inch bale weighs more than a refrigerator. A 72 inch bale can exceed 1,000 pounds.'],
  ['Bale handling', 'Only forklift-certified employees move bales; stack per the facility’s limit; keep bale storage out of aisles and away from exits.', 'Crushing injuries during handling are as common as chamber injuries and far less discussed.'],
  ['Jams and faults', 'Stop the machine, remove the key, report to the supervisor. Do not open panels, do not bypass the door switch, do not reach in. Jam clearing is done under lockout by an authorized person.', 'This is the single rule that prevents most serious baler injuries.'],
  ['When to stop and call service', 'Describe the stop conditions: ram drifts or stalls, door will not latch, interlock does not stop the cycle, hydraulic leak, grinding or banging, burning smell, any safety device that does not work.', 'An operator who can name the stop conditions does not have to decide under pressure.'],
  ['Housekeeping and the work area', 'Keep the floor around the machine clear of loose cardboard, wire scrap, and fluid; keep the emergency stop and the door swing unobstructed.', 'Slips and trips around balers are routine recordables. Clutter also hides leaks.'],
  ['PPE', 'Cut-resistant gloves for wire and cardboard edges, safety glasses when tying, and footwear the facility requires for bale handling.', 'Site rules may add more. These are the minimum that matter around wire.'],
])}

<h2>The three habits that cause most baler injuries</h2>
<p>If a training session can only drive home three things, these are the three.</p>
<h3>1. Reaching into the chamber</h3>
<p>A box bridges across the chamber. The operator reaches in to knock it down. A coworker, or the operator’s own knee, hits the start button. Or the operator leans in while the ram is still at the top of its stroke and the cycle resumes. Every version ends the same way. The rule is absolute: nothing enters the chamber while the machine is energized. Bridged material is cleared by closing the door and cycling, or by stopping the machine, removing the key, and letting an authorized person deal with it under lockout.</p>
<h3>2. Bypassing the interlock</h3>
<p>The door interlock is what makes a vertical baler legal to load. When it fails, the machine will not cycle, and someone taps the switch, tapes it closed, or jumpers the circuit so the shift can finish. From that moment the machine can crush an arm with the door open, and the minor-loading exception described above no longer applies because the machine no longer meets the standard. A failed interlock is a stop-and-call-service condition. The baler stays down until it is repaired.</p>
<h3>3. Treating the bale as harmless</h3>
<p>Operators respect the ram and ignore the bale. A finished vertical bale weighs several hundred to more than a thousand pounds and comes out of the chamber by tipping forward. Standing in its path, pulling it by the wire, or trying to walk it out of the chamber without the ejector causes crush injuries that never make the ram statistics. Ejection is a two-step process: ram up and machine stopped, then eject with the operator clear of the tip path.</p>

<h2>Lockout/tagout for jams and maintenance</h2>
<p>OSHA’s lockout/tagout standard, 29 CFR 1910.147, applies whenever an employee could be exposed to the unexpected energization or movement of a machine during servicing. Clearing a jam is servicing. The standard has a narrow exception for minor servicing that is routine, repetitive, and integral to production, but only when the work is done using alternative measures that give effective protection. Pulling cardboard out of a baler chamber with the power on does not qualify, and OSHA has cited employers who argued otherwise.</p>
<p>A compliant jam-clearing procedure for a vertical baler looks like this. The exact steps come from the manufacturer’s manual and your facility’s written energy-control procedure.</p>
<ol>
<li><strong>Stop the machine</strong> using the normal stop control, then the emergency stop.</li>
<li><strong>Notify affected employees</strong> that the baler is going down for service.</li>
<li><strong>Isolate the energy source.</strong> Turn the disconnect switch off at the panel. The key switch on the control panel is an operating control, not an energy isolating device, and does not count as lockout on its own.</li>
<li><strong>Apply the lock and tag.</strong> The authorized employee’s personal lock goes on the disconnect, with a tag identifying who applied it.</li>
<li><strong>Release stored energy.</strong> Balers store energy in the hydraulic system and in the raised ram. Follow the manual’s procedure for lowering the platen or blocking it before anyone reaches under it. Never work beneath a raised ram that is held only by hydraulic pressure.</li>
<li><strong>Verify isolation.</strong> Attempt to start the machine with the controls. Nothing should happen.</li>
<li><strong>Clear the jam</strong>, then remove tools and material, restore guards, and confirm everyone is clear.</li>
<li><strong>Remove the lock</strong> (only the person who applied it), restore power, and test the interlock before returning the machine to production.</li>
</ol>
<p>Only employees the employer has designated and trained as <strong>authorized</strong> may perform these steps. Everyone else who works near the machine is an <strong>affected</strong> employee and must be trained to recognize a lockout and to never attempt to start a locked-out machine. The standard also requires a periodic inspection of each energy-control procedure at least annually, performed by an authorized employee other than the one using the procedure, and documented. If your baler has never had a written lockout procedure or an annual inspection of it, that is the first gap to close.</p>

<h2>Training records: what to keep and what an inspector asks for</h2>
<p>An OSHA compliance officer investigating a baler incident asks for the same documents every time. Keeping them current is most of compliance.</p>
<ul>
<li><strong>The list of authorized operators</strong> for each machine, with the date each was trained and by whom.</li>
<li><strong>Training content</strong>: the syllabus or checklist used, matched to the manufacturer’s manual for the specific model.</li>
<li><strong>Lockout/tagout documentation</strong>: the written energy-control procedure for the baler, the list of authorized employees, training records for authorized and affected employees, and the annual periodic inspection certification.</li>
<li><strong>Machine documentation</strong>: the manual, the ANSI compliance plate or letter, and the posted Department of Labor notice if anyone under 18 loads the machine.</li>
<li><strong>Maintenance and inspection records</strong> showing interlocks and emergency stops were tested, which is where a <a href="/blog/commercial-baler-maintenance-checklist/">maintenance checklist</a> and a <a href="/services/preventive-maintenance/">preventive maintenance program</a> earn their keep.</li>
</ul>
<p>How often to retrain: OSHA’s lockout standard requires retraining whenever job assignments change, a new hazard is introduced, procedures change, or an inspection shows an employee is not following the procedure. Most facilities add an annual refresher and retrain every operator after any incident or near miss. New hires and transfers are trained before they operate, not during their first week of operating.</p>

<h2>Compactor training: the differences that matter</h2>
<p>Search for baler training and half the results are about compactors, because the rules overlap. Hazardous Occupations Order 12 covers both, and the loading exception for 16 and 17 year olds applies to paper box compactors meeting ANSI Z245.2. The hazards differ in a few ways worth calling out in a combined program:</p>
<ul>
<li><strong>Chute and hopper doors.</strong> On a <a href="/trash-compactors/stationary/">stationary</a> or <a href="/trash-compactors/self-contained/">self-contained compactor</a>, the charge box is loaded through a chute, hopper, or through-wall door. The door interlock and any gate must prevent the ram from cycling while a person could be in the charge box. Never climb into a hopper or chute to clear material.</li>
<li><strong>Key switches and remote starts.</strong> Many compactors start from a key switch at the loading point or from a remote station. Operators need to know every location the machine can be started from, because lockout must cover all of them.</li>
<li><strong>Container handling.</strong> Receiver containers are swapped by the hauler’s roll-off truck. Employees stay clear during pulls, and the compactor is never cycled with the container detached.</li>
<li><strong>Chute-fed apartment compactors</strong> start automatically when a photo eye sees material. Anyone servicing the trash room must lock out the compactor before working at the chute discharge.</li>
</ul>
<p>The <a href="/blog/trash-compactor-maintenance-checklist/">compactor maintenance checklist</a> covers the operator observations that go with this training.</p>

<h2>A baler safety program in one page</h2>
<ul>
<li>Nobody under 18 operates or unloads. Sixteen and seventeen year olds load only on a documented ANSI-compliant machine with a key switch held by an adult, a door interlock that prevents cycling while loading, and the DOL notice posted.</li>
<li>Only named, trained, authorized adults run the machine. Keep the list and the training records.</li>
<li>Nothing enters the chamber while the machine is energized. Ever.</li>
<li>A failed interlock, guard, or emergency stop takes the machine out of service until it is repaired.</li>
<li>Jams are cleared under written lockout/tagout by an authorized employee, with stored hydraulic energy released and the ram blocked.</li>
<li>Bales are ejected with the ram up and the machine stopped, with the operator clear of the tip path, and moved only by forklift-certified employees.</li>
<li>Retrain annually, after any incident, and whenever the machine, the procedure, or the job changes.</li>
</ul>

<h2>Where Norton fits</h2>
<p>Norton installs balers with operator training included, retrains crews on machines we did not sell, and tests interlocks, key switches, and emergency stops as part of every <a href="/services/preventive-maintenance/">preventive maintenance visit</a>. If a safeguard on your baler is damaged or bypassed, call <a href="tel:+16628387900">(662) 838-7900</a> and take the machine out of service until it is fixed. If you are not sure whether an older baler meets the ANSI standard, an <a href="/services/equipment-evaluations/">equipment evaluation</a> documents the condition of its guarding and controls so you can make the call with facts.</p>`,
    faqs: [
      { q: 'Do you need a certification to operate a cardboard baler?', a: 'There is no government-issued baler license. The employer must train each operator on the specific machine, keep a record of that training, and designate who is authorized to run it. ANSI Z245.5 and OSHA both put that responsibility on the employer, and OSHA asks for the records after an incident.' },
      { q: 'Can a 17 year old use a cardboard baler?', a: 'A 16 or 17 year old may load a baler, and only load it, if the machine meets ANSI Z245.5, has a key-controlled switch held by an adult, cannot cycle while being loaded, and carries the posted Department of Labor notice. No one under 18 may operate the baler or unload it, which includes tying and ejecting the bale. No one under 16 may load, operate, or unload.' },
      { q: 'What is ANSI Z245.5?', a: 'ANSI Z245.5 is the American National Standard for baling equipment. It sets safety requirements for the design, installation, maintenance, and operation of balers, including guarding, interlocks, key-controlled switches, labeling, and operator training. It is voluntary on its own, but the federal rule that lets 16 and 17 year olds load a baler requires the machine to meet it.' },
      { q: 'How often should baler safety training be repeated?', a: 'Train every operator before they first use the machine, retrain after any incident or near miss, and retrain whenever the machine, the procedure, or the job assignment changes. Most facilities also run an annual refresher, and OSHA requires an annual inspection of each lockout/tagout procedure.' },
      { q: 'Is lockout/tagout required to clear a baler jam?', a: 'Yes in almost every case. Clearing a jam is servicing under OSHA 29 CFR 1910.147, and reaching into a chamber with the power on does not meet the minor-servicing exception. The machine is shut down, the disconnect is locked and tagged, stored hydraulic energy is released and the ram is blocked, and isolation is verified before anyone reaches in.' },
      { q: 'Who posts the Department of Labor notice on a baler?', a: 'The employer. The notice must state that the machine meets the applicable ANSI standard, that 16 and 17 year olds may load it but may not operate or unload it, and that no one under 16 may load, operate, or unload it. Without the notice, the loading exception for minors does not apply.' },
      { q: 'What PPE is required to run a baler?', a: 'OSHA requires the employer to assess the hazards and provide PPE that fits them. Around a baler that means cut-resistant gloves for wire and cardboard edges, eye protection while tying, and whatever footwear the facility requires for handling bales. Your site’s written hazard assessment may add more.' },
      { q: 'What does OSHA cite for on balers?', a: 'Common citations after baler incidents are 29 CFR 1910.147 for missing or unfollowed lockout procedures, 1910.212 for defeated or missing guards and interlocks, the General Duty Clause for recognized hazards, and child labor violations under Hazardous Occupations Order 12. Penalty amounts are adjusted every year and are published at osha.gov/penalties.' },
    ],
  },

  // ------------------------------------------------------------------
  // 2. Commercial trash compactor cost
  // ------------------------------------------------------------------
  {
    slug: 'commercial-trash-compactor-cost',
    title: 'How Much Does a Commercial Trash Compactor Cost? Purchase, Installation, Rental, and the Hauler Math',
    seoTitle: 'Commercial Trash Compactor Cost: Price, Installation & Payback | Norton',
    metaDesc: 'Commercial trash compactor prices by type, what installation really costs line by line, new versus reconditioned versus the hauler’s machine, and how to work out the payback.',
    date: '2026-11-16',
    readMins: 11,
    img: 'n-stationary',
    imgAlt: 'A stationary compactor and receiver container on a concrete pad behind a commercial building',
    topic: 'Compactor cost',
    excerpt: 'Price ranges for every compactor type, the installation line items that surprise first-time buyers, a five-year cost comparison, and the monthly savings math.',
    answer: 'A new commercial trash compactor typically costs between about $8,000 for a small vertical unit and $60,000 or more for a large pre-crusher or auger, before installation. Self-contained compactors for wet waste commonly run $20,000 to $45,000 and stationary compactors $15,000 to $35,000 plus a receiver container. Installation adds a concrete pad, three-phase power, and often a chute or enclosure. Reconditioned machines cut the equipment price by roughly 30 to 60 percent.',
    cta: {
      title: 'Get a number for your site, not a range.',
      text: 'Send Norton your waste type, current pickup schedule, and a few hauling invoices. We will quote the machine, the installation, and the payback side by side, new and reconditioned.',
      intent: 'compactor',
      label: 'Request a compactor quote',
    },
    related: [
      { href: '/trash-compactors/', label: 'Commercial trash compactors' },
      { href: '/trash-compactors/self-contained/', label: 'Self-contained compactors' },
      { href: '/trash-compactors/stationary/', label: 'Stationary compactors' },
      { href: '/trash-compactors/used/', label: 'Reconditioned compactors' },
      { href: '/trash-compactors/steel-options/', label: 'Decks, chutes, and enclosures' },
      { href: '/services/waste-stream-consultations/', label: 'Free waste stream consultation' },
    ],
    sourcesTitle: 'Further reading',
    sourcesIntro: 'Background on waste reduction economics and the equipment categories referenced in this guide:',
    sources: [
      { url: 'https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling', label: 'U.S. EPA, Facts and figures about materials, waste and recycling' },
      { url: 'https://www.osha.gov/control-hazardous-energy', label: 'OSHA, Control of hazardous energy, for the servicing requirements that affect operating cost' },
    ],
    body: `<h2>The short version, then the long one</h2>
<p>Search for the price of a commercial trash compactor and you get residential kitchen units, municipal fee schedules, and manufacturers who will not publish a number. This guide gives you the numbers a dealer actually works with: what each type of machine costs, what the installation adds, how a reconditioned unit changes the math, what the hauler’s “free” compactor really costs, and how to work out whether any of it pays back for your site. The ranges are planning ranges. The quote for your machine depends on specification, condition, site preparation, delivery, and installation, and that is the number to make decisions on.</p>

<h2>Compactor prices by type</h2>
<p>Commercial compactors fall into five families, and the family decides the price band before any option does. If you are not sure which family fits your waste, the <a href="/blog/commercial-trash-compactor-buying-guide/">buying guide</a> covers types and sizing and the <a href="/blog/self-contained-vs-stationary-compactors/">self-contained versus stationary comparison</a> settles the most common question.</p>
${table('Typical new commercial compactor price ranges, equipment only', ['Compactor type', 'Typical new price', 'What drives the number', 'Common applications'], [
  ['<a href="/trash-compactors/vertical-apartment/">Vertical and apartment</a>', 'About $8,000 to $20,000', 'Container size (2 to 8 yard front-load), chute-fed versus hand-fed, controls and guarding', 'Apartments, high-rise trash rooms, small retail, restaurants'],
  ['<a href="/trash-compactors/stationary/">Stationary</a>', 'About $15,000 to $35,000, plus receiver container', 'Charge box size (2 to 6 yards), compaction force, cycle time, feed configuration, power unit', 'Warehouses, distribution centers, retail, manufacturing'],
  ['<a href="/trash-compactors/self-contained/">Self-contained</a>', 'About $20,000 to $45,000', 'Total capacity (roughly 15 to 35 yards), liquid-tight construction, charge chamber size, sump and drain options', 'Grocery, restaurants, hospitals, hotels, food processing'],
  ['<a href="/trash-compactors/pre-crusher/">Pre-crusher</a>', 'About $30,000 to $60,000 or more', 'Crushing force, breaker door, structural gauge, charge box size', 'Manufacturing, pallets and drums, product destruction'],
  ['<a href="/trash-compactors/auger/">Auger</a>', 'About $30,000 to $60,000 or more', 'Screw diameter and drive, hopper and feed system, container interface', 'High-volume cardboard and wood waste, printers, packaging plants'],
  ['<a href="/trash-compactors/used/">Reconditioned, any type</a>', 'Commonly 30 to 60 percent below new', 'Age, size, condition of the core, scope of the rebuild, warranty terms', 'Any of the above where capital matters more than a factory lead time'],
])}
${PRICE_NOTE}

<h2>What moves a compactor quote up or down</h2>
<p>Two stationary compactors with the same charge box can differ by ten thousand dollars. These are the specifications behind the gap.</p>
<ul>
<li><strong>Charge box and container size.</strong> A larger charge box accepts bigger items and more volume per cycle. A larger receiver container or self-contained body means fewer pulls but a bigger machine and a bigger pad.</li>
<li><strong>Compaction force and cycle time.</strong> Measured in pounds of ram force and seconds per cycle. More force packs denser loads and costs more in cylinder, power unit, and structure. High-force machines also demand more of the receiver container.</li>
<li><strong>Power unit.</strong> Most commercial compactors run three-phase power at 208, 230, or 460 volts. A tri-voltage power unit, a larger motor for faster cycles, or a remote power unit mounted inside the building all add cost.</li>
<li><strong>Liquid-tight construction.</strong> Self-contained units are fully welded with a sump to hold liquids. That construction is why they cost more than a stationary machine of similar capacity, and why they are the only right answer for wet waste.</li>
<li><strong>Feed configuration.</strong> Ground feed is the base. Dock feed, through-wall chutes, doghouses, hoppers, and cart tippers are added steel, and are usually quoted as installation rather than equipment.</li>
<li><strong>Controls and safety options.</strong> Key switches, remote start stations, full-container indicators, photo-eye auto start on chute-fed machines, and interlocked gates.</li>
<li><strong>Steel options.</strong> <a href="/trash-compactors/steel-options/">Walk-on and drive-on decks, enclosures, and guards</a> are fabricated per site. They are not optional when a safety audit or a landlord says they are not.</li>
</ul>

<h2>Installation costs, line by line</h2>
<p>Installation is where first-time buyers get surprised, because the equipment quote is the number they remember and the site work is the number they pay. The <a href="/blog/commercial-compactor-installation-guide/">compactor installation guide</a> explains each item in detail. Here is what the line items are and what tends to drive each one. Ranges are intentionally wide; the site decides.</p>
${table('Compactor installation line items', ['Line item', 'What it is', 'What drives the cost'], [
  ['Concrete pad', 'A reinforced pad sized for the compactor, the container, and the roll-off truck’s approach, typically six inches or more of reinforced concrete on compacted base. Many sites already have one that needs repair or extension.', 'Pad size, existing slab condition, drainage, local concrete pricing. Commonly several thousand dollars for a new pad.'],
  ['Electrical service', 'A three-phase circuit from the panel to a fused disconnect at the machine, sized to the power unit. If the building lacks three-phase at the dock, the utility and electrician conversation comes first.', 'Distance from the panel, conduit route, whether three-phase exists, whether a service upgrade is needed. From modest to the single largest line on the job.'],
  ['Chute, doghouse, or through-wall door', 'The steel that gets waste from inside the building into the charge box without walking it outside. Fabricated to the wall, the dock height, and the machine.', 'Opening size, wall construction, dock height, whether a security door or interlocked gate is included. A simple ground-feed install skips this entirely.'],
  ['Delivery and rigging', 'Trucking the machine to the site, offloading, placement on the pad, anchoring, and hookup to the container.', 'Distance, access, whether the machine is set outdoors on a pad or threaded through a building. <a href="/services/equipment-logistics/">Norton’s own logistics crew</a> handles this on machines we sell.'],
  ['Commissioning and training', 'Pressure and cycle testing, interlock and safety verification, and operator training on the specific machine.', 'Usually included in a dealer installation. Confirm it is in writing.'],
  ['Permits and inspections', 'Electrical permit for the new circuit, sometimes a building permit for the pad or an enclosure, occasionally a zoning or screening requirement.', 'Municipality. Enclosures in particular are often required by the jurisdiction or the landlord rather than chosen.'],
  ['Old equipment removal', 'Disconnecting, extracting, and hauling the previous compactor or dumpsters.', 'Whether the old machine has value, how it comes out, and whether it is hauler-owned.'],
])}
<p>A useful rule: get every one of those lines in the quote before you sign anything, and ask which are included and which are allowances. A compactor quote that stops at the machine is not a quote for a working compactor.</p>

<h2>New, reconditioned, or the hauler’s machine: five years, side by side</h2>
<p>There are three ways to put a compactor on your pad, and they have very different costs once you follow the money for five years. The <a href="/blog/buy-new-used-or-hauler-compactor/">new versus reconditioned versus hauler article</a> covers the reasoning. The table puts numbers on it.</p>
<p><strong>This example is hypothetical.</strong> It uses the middle of the stationary price range, a reconditioned unit at 45 percent below new, and a maintenance budget of a few hundred dollars per visit on a quarterly program. The hauler column assumes the equipment is bundled into a hauling contract at a monthly premium over open-market hauling rates, which is how the “free” machine is paid for.</p>
${table('Hypothetical five-year cost of a mid-size stationary compactor', ['Cost over five years', 'New, owned', 'Reconditioned, owned', 'Hauler-supplied'], [
  ['Equipment', '$25,000', '$13,750', '$0'],
  ['Installation (pad repair, power, chute)', '$8,000', '$8,000', '$8,000 (site work is still yours)'],
  ['Preventive maintenance, quarterly', '$6,000', '$6,000', 'Included in contract'],
  ['Repairs outside maintenance', '$1,500', '$3,000', 'Included in contract'],
  ['Hauling premium for bundled equipment', '$0', '$0', '$18,000 ($300 a month over market rate)'],
  ['Hauling contract leverage at renewals', 'Yours to bid', 'Yours to bid', 'None while their machine is on your pad'],
  ['Residual value of the machine at year five', 'Resellable', 'Resellable', '$0'],
  ['<strong>Five-year total</strong>', '<strong>$40,500</strong>', '<strong>$30,750</strong>', '<strong>$26,000 plus every renewal you cannot bid</strong>'],
])}
<p>The hauler column looks cheapest for exactly as long as you do not price the contract lock. The premium in the table is a placeholder; your own number is the difference between your bundled hauling rate and the rates you could get by bidding the work. On most sites that difference, compounded over every renewal, is larger than the entire new-versus-reconditioned gap. Owning the machine, new or reconditioned, is what keeps the hauling biddable.</p>

<h2>How much a compactor saves per month</h2>
<p>Hauling is billed per pull, not per pound. A compactor cuts the number of pulls, which is where the money is. The <a href="/blog/how-a-trash-compactor-cuts-your-hauling-bill/">hauling bill article</a> walks through the mechanism. The arithmetic you can do yourself looks like this.</p>
<ol>
<li><strong>Count your pulls.</strong> How many times a week does a truck lift or pull a container, across every container on the site? Multiply by your per-pull charge, with surcharges, to get a monthly figure.</li>
<li><strong>Apply the compaction ratio.</strong> Dry commercial waste compacts at roughly 4 to 1. Divide weekly loose yards by four to get compacted yards, then divide by the receiver container size to see how often it fills.</li>
<li><strong>Price the new schedule.</strong> A roll-off pull costs more than a dumpster lift but happens far less often. Add container rent and disposal tonnage, which does not change much because the weight is the same.</li>
<li><strong>Subtract.</strong> The difference is the monthly saving. Divide the installed cost by it for the payback period.</li>
</ol>
<p><strong>A hypothetical example</strong>, the same one used elsewhere on this site so the numbers line up: a distribution operation running two 8-yard dumpsters pulled five times a week each at about $95 a pull with surcharges pays roughly $4,100 a month. The same volume through a 30-yard stationary compactor compacts into about one pull a week at roughly $450 plus disposal, about $2,300 a month with container rent. That is about $1,800 a month, or $21,600 a year. Against a $28,000 installed new machine the payback is around 16 months. Against a reconditioned machine it is under a year. Your invoices will produce a different number, which is why a <a href="/services/waste-stream-consultations/">waste stream consultation</a> starts by reading them.</p>

<h2>Rental and leasing</h2>
<p>Norton does not advertise compactor rental, and most dealers who do are quoting a lease by another name. Leasing makes sense in three situations: a site you may leave within a few years, a capital budget that is closed for the year while the operating budget is open, and a seasonal operation that needs the machine for part of the year. In each case compare the total of lease payments against the owned cost above, ask who is responsible for maintenance and repairs, and read the end-of-term terms. A reconditioned machine often does what the lease was meant to do, at a lower total cost, with the machine yours at the end.</p>

<h2>Questions to ask before you take a compactor quote</h2>
<ul>
<li>Is this the equipment price or the installed price, and which installation lines are included?</li>
<li>Will you quote new and reconditioned side by side?</li>
<li>Who services the machine after the install, and where do they dispatch from?</li>
<li>Does this deal tie my hauling contract to the equipment?</li>
<li>What warranty applies, and what does it exclude?</li>
<li>Will you model the payback from my own hauling invoices before I buy?</li>
</ul>
<p>Norton has sized, sold, installed, and serviced commercial compactors across the Mid-South since 1997 and quotes new and reconditioned machines side by side with the installation spelled out. Call <a href="tel:+16628387900">(662) 838-7900</a> or <a href="/request-a-quote/?interest=compactor">request a quote</a> with your waste type and current pickup schedule.</p>`,
    faqs: [
      { q: 'How much does a 30-yard self-contained compactor cost?', a: 'A new self-contained compactor in the 25 to 35 yard range typically falls toward the upper part of the $20,000 to $45,000 band before installation, depending on charge chamber size, compaction force, and liquid-handling options. Reconditioned units run 30 to 60 percent less. Installation is quoted separately.' },
      { q: 'What does it cost to install a commercial trash compactor?', a: 'Installation covers the concrete pad, a three-phase circuit and disconnect, any chute or through-wall door, delivery and rigging, commissioning, and permits. On a site with an existing pad and nearby three-phase power it can be modest. On a site that needs a new pad, a long power run, and a fabricated chute it can approach the cost of a smaller machine. Get every line quoted.' },
      { q: 'Is a used or reconditioned compactor worth it?', a: 'Usually, if the reconditioning was real. A compactor is a steel box with hydraulics, and a properly rebuilt machine with resealed hydraulics, serviced cylinders, repaired wear surfaces, and tested controls can run for another decade at 30 to 60 percent below new. Ask what was done, what is warrantied, and who services it afterward.' },
      { q: 'How much does a compactor save per month?', a: 'It depends on how many pulls you pay for now. Dry waste compacts about 4 to 1, so a site paying for daily dumpster lifts typically drops to one roll-off pull every week or two. Savings of several hundred to a couple of thousand dollars a month are common for mid-size commercial sites. Work it from your own invoices rather than a national average.' },
      { q: 'Who pays for the concrete pad?', a: 'The property owner or tenant, under whatever the lease says. The pad is site work, not equipment, so it is rarely included in a compactor price and never included in a hauler’s bundled equipment deal. Check whether your site already has a usable pad before assuming a new one.' },
      { q: 'Can I keep my current hauler with a compactor?', a: 'Yes. Stationary compactors use standard roll-off receiver containers and self-contained units are built to standard roll-off hoist specifications, so any hauler with a roll-off truck can service them. Owning the compactor yourself is what keeps that choice open at every contract renewal.' },
      { q: 'How long does a commercial compactor last?', a: 'With scheduled maintenance, 10 to 20 years is a reasonable expectation, and well-built machines go longer with a rebuild of hydraulics and wear surfaces along the way. Duty cycle, waste type, and whether leaks and faults are addressed early matter more than the calendar.' },
      { q: 'What voltage does a commercial compactor need?', a: 'Most run three-phase power at 208, 230, or 460 volts; many power units are tri-voltage and configured at installation. Some small vertical units run single-phase. Confirm the exact power unit specification before any electrical work is quoted, and check whether three-phase service is available at the dock.' },
    ],
  },

  // ------------------------------------------------------------------
  // 3. Horizontal baler buyer's guide
  // ------------------------------------------------------------------
  {
    slug: 'horizontal-baler-guide',
    title: 'Horizontal Baler Buyer’s Guide: Closed-Door, Open-End Auto-Tie, and Two-Ram',
    seoTitle: 'Horizontal Baler Guide: Closed-Door, Auto-Tie & Two-Ram | Norton',
    metaDesc: 'How the three horizontal baler designs differ in throughput, labor, footprint, power, wire, and price, when to move up from a vertical baler, and what to inspect on a used one.',
    date: '2026-11-16',
    readMins: 12,
    img: 'horizontal-baler',
    imgAlt: 'A horizontal baler with its hopper and bale chamber in a recycling operation',
    topic: 'Horizontal balers',
    excerpt: 'Vertical versus horizontal in one table, then the three horizontal designs compared on throughput, labor, site requirements, wire, and price, with a used-machine inspection list.',
    answer: 'A horizontal baler is the right machine once cardboard volume passes roughly 15 to 20 tons a month or baling has become someone’s full-time job. Closed-door manual-tie balers fit growing operations at the lower end of that range. Open-end auto-tie balers run continuously from a conveyor for distribution centers and recyclers. Two-ram balers handle multiple materials and the highest volumes. Each step up adds throughput, automation, footprint, power, and price.',
    cta: {
      title: 'Scope the horizontal baler around the whole line.',
      text: 'Bring your peak material rate, shifts, floor plan, and what your recycler accepts. Norton will compare closed-door, auto-tie, and two-ram options with the conveyor, power, and installation included.',
      intent: 'baler',
      label: 'Discuss a horizontal baler project',
    },
    related: [
      { href: '/balers-recycling/horizontal-balers/', label: 'Horizontal balers' },
      { href: '/balers-recycling/two-ram-balers/', label: 'Two-ram balers' },
      { href: '/balers-recycling/vertical-balers/', label: 'Vertical balers' },
      { href: '/balers-recycling/used-balers/', label: 'Used balers' },
      { href: '/balers-recycling/refurbished-balers/', label: 'Refurbished balers' },
      { href: '/balers-recycling/baling-wire/', label: 'Baling wire' },
      { href: '/services/equipment-logistics/', label: 'Delivery, rigging, and installation' },
    ],
    sourcesTitle: 'Further reading',
    sourcesIntro: 'Manufacturer specifications govern the machine you are quoted. For category background:',
    sources: [
      { url: 'https://maxpakbalers.com/', label: 'MAX-PAK baler specifications (Norton is a factory-authorized MAX-PAK dealer)' },
      { url: 'https://www.marathonequipment.com/', label: 'Marathon Equipment horizontal baler product information' },
      { url: 'https://www.recyclingtoday.com/', label: 'Recycling Today, equipment and commodity market coverage' },
    ],
    body: `<h2>Who this guide is for</h2>
<p>You have a vertical baler, or several, and someone is standing at it most of the shift. Or you are planning a distribution center, a recycling line, or a plant with continuous packaging waste and the question is not whether to bale but how. Horizontal balers are built to order, which means the catalog is confusing and the prices are not published. This guide explains the three horizontal designs, what each one is for, what it needs from your building, and what it costs, so that the conversation with a dealer starts from the right machine.</p>
<p>Norton sells, installs, and services horizontal and two-ram balers across the Mid-South and rebuilds them in Byhalia. We also sell vertical balers, which is why the first section is about not buying a horizontal baler before you need one.</p>

<h2>Vertical or horizontal: the one-table answer</h2>
<p>A <a href="/balers-recycling/vertical-balers/">vertical baler</a> compresses downward into a chamber the size of a doorway. An operator loads it, cycles it, ties the bale, and ejects it. A horizontal baler compresses sideways through a long chamber fed from an open hopper, and the design scales from a manual-tie machine to a fully automatic line.</p>
${table('Vertical versus horizontal balers', ['Factor', 'Vertical baler', 'Horizontal baler'], [
  ['Cardboard volume', 'A few bales a week up to roughly 15 tons a month', 'Roughly 15 to 20 tons a month and up; auto-tie and two-ram machines process that in a shift'],
  ['Throughput', 'One bale per 20 to 40 minutes of operator time, depending on size', 'Closed-door: about 1 to 3 tons an hour. Auto-tie: several tons an hour from a conveyor. Two-ram: higher still on mixed materials'],
  ['Operator time', 'Load, cycle, tie, eject by hand; a few minutes per cycle', 'Closed-door: load and tie. Auto-tie and two-ram: minimal, fed by conveyor or cart tipper'],
  ['Bale weight', 'About 100 to 300 pounds on a 30 inch machine, 600 to 1,000 on a 60 inch, 750 to 1,100 on a 72 inch high-density', 'About 800 to 1,200 pounds on a closed-door, 1,000 to 1,800 on an auto-tie, 1,200 to 2,000 or more on a two-ram'],
  ['Footprint', 'Roughly the floor area of a doorway plus loading and ejection space', 'A long chamber plus hopper, conveyor or feed area, and bale exit; often 30 to 60 feet of line'],
  ['Power', 'Many run 208 to 230 volt single-phase; larger units three-phase', 'Three-phase, commonly 230 or 460 volt, with motors from about 20 horsepower upward'],
  ['Who it fits', 'Retail, grocery, hotels, warehouses with moderate cardboard, schools, manufacturers with one packaging stream', 'Distribution centers, recyclers, printers and converters, bottlers, plants baling continuously or baling several materials'],
  ['Typical new price', 'About $6,000 to $20,000', 'Closed-door from about $30,000; auto-tie and two-ram systems scale well beyond that'],
])}
<p>The honest rule: most stores, restaurants, hotels, and mid-size warehouses should run a 60 or 72 inch vertical and grow into a horizontal only if volume forces it. Distribution centers, recyclers, and plants baling all day should skip straight to a horizontal sized with headroom. If you are between those, the <a href="/how-to-choose-the-right-baler/">baler sizing guide</a> and its worksheet turn your peak volume into a usable throughput requirement.</p>

<h2>Closed-door horizontal balers</h2>
<p>A closed-door horizontal, sometimes called a manual-tie horizontal, is the entry point. Material is loaded into the hopper by hand, cart tipper, or a short conveyor. The ram compresses it sideways against a closed end door until the bale reaches length. The operator then opens the door, ties the bale with wire by hand through slots in the chamber, and the ram pushes the finished bale out.</p>
<ul>
<li><strong>Throughput:</strong> commonly 1 to 3 tons of cardboard an hour, limited mostly by how fast the hopper is fed and how long tying takes.</li>
<li><strong>Typical bale:</strong> 800 to 1,200 pounds of OCC, roughly 30 by 48 inches in section and 48 to 60 inches long, dense enough for mill acceptance.</li>
<li><strong>Labor:</strong> an operator is still involved at every bale, but loading is continuous and the machine does the compressing while they do other work.</li>
<li><strong>Who buys it:</strong> operations that have outgrown a 72 inch vertical, retailers consolidating cardboard from several stores, manufacturers with a single packaging stream and one or two shifts.</li>
<li><strong>Wire:</strong> single-loop or double-loop bale ties, longer and heavier than vertical ties because the bale is bigger and denser.</li>
</ul>

<h2>Open-end auto-tie horizontal balers</h2>
<p>An open-end auto-tie baler runs continuously. Material arrives on a conveyor or air system into the hopper, a photo eye starts the ram, and the ram compresses each charge against the previous bale in a chamber with no end door. When a bale reaches length, an automatic wire tier wraps and knots it with four to six strands of wire, and the next bale pushes it out the end onto the floor or a bale conveyor. No one has to be at the machine.</p>
<ul>
<li><strong>Throughput:</strong> several tons an hour on OCC, set by ram force, chamber size, and conveyor feed. Models range from compact units for a single distribution center to machines that bale 20 or more tons an hour.</li>
<li><strong>Typical bale:</strong> 1,000 to 1,800 pounds at mill density, uniform in size, which is what buyers pay for.</li>
<li><strong>Labor:</strong> minimal. Someone keeps the conveyor fed and moves finished bales. Wire is loaded by the box or stem.</li>
<li><strong>Who buys it:</strong> distribution and fulfillment centers, recyclers, printers, converters, bottling and packaging plants, any site where cardboard arrives all shift.</li>
<li><strong>Wire:</strong> boxed or stem wire in the gauge the tier is built for, run through the automatic tier. Wire choice affects tier reliability more than anything else on the machine.</li>
</ul>

<h2>Two-ram balers</h2>
<p>A two-ram baler separates compressing from ejecting. The main ram compresses material against a fixed wall in a chamber that is loaded from above. When the bale is complete, a second ram ejects it sideways, out of the way of the next charge, while an automatic tier wraps it. Because the chamber is open at the top and the eject stroke clears it completely, the machine can switch materials between bales and produce very dense bales of material that a single-ram machine struggles with.</p>
<ul>
<li><strong>Throughput:</strong> the highest of the three, and the most forgiving of mixed and springy material.</li>
<li><strong>Typical bale:</strong> 1,200 to 2,000 pounds or more, export density, in a consistent size.</li>
<li><strong>Materials:</strong> OCC, mixed paper, PET and HDPE containers, film, aluminum cans, non-ferrous metals, and other commodities, often several in the same shift.</li>
<li><strong>Who buys it:</strong> recycling processors and material recovery facilities, large manufacturers with multiple recyclable streams, consolidation and transfer operations.</li>
<li><strong>Why it costs more:</strong> two large cylinders, a heavier structure to resist the compressive loads of dense plastics and metals, bigger motors and power units, and controls that manage material changeovers. It is a capital project with a longer lead time, and it is almost always fed by a conveyor and surrounded by sorting and bale-handling equipment.</li>
</ul>

<h2>Sizing a horizontal baler by volume</h2>
<p>Average volume hides the bottleneck. Size to the busiest period, with headroom.</p>
<ol>
<li><strong>Measure peak material.</strong> Weigh or estimate the cardboard generated during the busiest shift or receiving window, not the weekly average. The <a href="/resources/baler-sizing-worksheet.html">sizing worksheet</a> records this.</li>
<li><strong>Convert to pounds per hour.</strong> Peak pounds divided by the hours available to bale during that window is the throughput the machine and its feed system must sustain, before allowing for breaks, tying, and interruptions.</li>
<li><strong>Pick the feed.</strong> Hand or cart loading tops out quickly. A floor conveyor or cart tipper is what lets an auto-tie machine reach its rated throughput. Pit conveyors keep the floor clear but need a pit.</li>
<li><strong>Check the bale against the recycler.</strong> Ask what bale weight and dimensions the buyer or mill wants. Heavier bales fill trailers to weight and bring the best price, but every bale has to be moved by your forklift.</li>
<li><strong>Add growth.</strong> A machine sized to today’s peak is undersized the first year volume grows. Specify headroom, not maximum.</li>
</ol>
<p>Bale weight drives the revenue side of this math. The <a href="/cardboard-bale-weight/">cardboard bale weight guide</a> covers typical weights by machine and what a bale is worth.</p>

<h2>What a horizontal baler needs from your building</h2>
<ul>
<li><strong>Floor space.</strong> The baler, its hopper, the conveyor or feed area, bale exit, bale staging, forklift aisles, and service access. A compact auto-tie line can need 30 to 60 feet in length. Walk it with a tape before you shop.</li>
<li><strong>Floor and pit.</strong> Horizontal balers are heavy, commonly 15,000 to 40,000 pounds and more for two-ram machines, and need a slab rated for it. A pit conveyor needs an excavated and formed pit. Floor-level conveyors avoid the pit at the cost of a ramp or more floor space.</li>
<li><strong>Power.</strong> Three-phase service sized to the power unit, often 460 volt, with a disconnect at the machine. Auto-tie and two-ram machines can draw well over 50 horsepower across motors. Confirm what the dock has before anything is ordered.</li>
<li><strong>Ceiling height.</strong> Hoppers, conveyor discharge heights, and any dust or air system need clearance, and a two-ram chamber loaded from above needs more than a closed-door machine.</li>
<li><strong>Bale handling.</strong> A forklift rated for the bale weight with clamp or forks, a staging area, and a loading path to the trailer. Plan bale storage for a missed pickup.</li>
<li><strong>Delivery access.</strong> The machine arrives on a flatbed and is set by crane or heavy forklift. <a href="/services/rigging/">Rigging</a> and <a href="/services/equipment-logistics/">installation</a> are part of the project, not an afterthought.</li>
</ul>

<h2>New, used, and refurbished horizontal balers</h2>
<p>Horizontal balers are mostly heavy steel and hydraulics, which makes a rebuilt machine a serious option. The <a href="/blog/used-vs-refurbished-balers/">used versus refurbished guide</a> explains the difference in detail. In short, a <a href="/balers-recycling/used-balers/">used baler</a> is sold as-is, inspected and described but not rebuilt. A <a href="/balers-recycling/refurbished-balers/">refurbished baler</a> has been through Norton’s shop in Byhalia: cylinders resealed or rebuilt, hydraulics flushed and tested, wear surfaces and chamber repaired, controls and safety circuits verified, cycle-tested under load, and covered by a shop warranty. Refurbished costs roughly half of new.</p>
<p>What to inspect on any used horizontal baler before you buy, or have a <a href="/services/equipment-evaluations/">Norton evaluation</a> inspect for you:</p>
<ul>
<li>Ram face, chamber floor, and side liners for wear, scoring, and gaps where material can wedge.</li>
<li>Main cylinder rod and seals for scoring and leakage; eject cylinder on a two-ram.</li>
<li>Hydraulic power unit: pump noise, fluid condition, hose age, valve leaks, and whether pressures hold at specification.</li>
<li>Shear blade or knife condition where the design has one.</li>
<li>Wire tier on auto-tie machines: track wear, needle condition, knotter operation, and fault history. The tier is the most maintenance-intensive part of the machine.</li>
<li>Controls: PLC and HMI age, photo eyes, limit switches, emergency stops, and interlocks on hopper doors and access panels.</li>
<li>Structure: cracks at cylinder mounts, chamber welds, hopper, and feet.</li>
<li>Hours, cycle count, fault log, and maintenance records if they exist.</li>
</ul>

<h2>Bale weight, density, and what the bale is worth</h2>
<p>Recyclers and mills buy OCC by the ton, and they pay for density and cleanliness. A horizontal baler earns its price in two ways beyond labor: heavier bales fill a trailer to its weight limit in fewer bales, and uniform mill-size bales qualify for mill pricing rather than a dealer’s pickup rate. Published national averages for baled OCC moved through a wide range during 2026, roughly between $60 and $100 a ton depending on the month and region, and what a local buyer pays for picked-up bales is lower than the published mill price. Treat bale revenue as an offset to hauling cost, with the labor saving as the main return on a horizontal baler, and ask your recycler for a written price and pickup schedule before you size the machine to it.</p>

<h2>What to bring to a horizontal baler quote</h2>
<ul>
<li>Peak and average cardboard volume, by shift, and how it was measured.</li>
<li>Other materials you might bale, now or later.</li>
<li>A floor plan with the proposed location, ceiling height, and the path from receiving to the baler.</li>
<li>Available power at the location: voltage, phase, and panel capacity.</li>
<li>Your recycler’s bale requirements and pickup frequency.</li>
<li>Forklift capacity and bale storage area.</li>
<li>Whether new, refurbished, or used is on the table.</li>
</ul>
<p>Norton scopes horizontal and two-ram projects as a complete line: machine, conveyor, power coordination, rigging, installation, wire, operator training, and service afterward. We quote new and refurbished side by side. Call <a href="tel:+16628387900">(662) 838-7900</a> or <a href="/request-a-quote/?interest=baler">describe your project</a> and we will start with the material, not the machine.</p>`,
    faqs: [
      { q: 'What is a closed-door baler?', a: 'A closed-door baler is a horizontal baler whose chamber ends in a door that stays shut while the ram compresses material against it. When the bale reaches length, the operator opens the door, ties the bale by hand through chamber slots, and the ram pushes it out. It is the manual-tie entry point to horizontal baling, usually 1 to 3 tons an hour.' },
      { q: 'What is a two-ram baler used for?', a: 'A two-ram baler uses one ram to compress and a second to eject, which lets it clear the chamber between bales and switch materials. Recyclers and large plants use two-ram balers for OCC, mixed paper, PET and HDPE, film, cans, and non-ferrous metal, often several materials in the same shift, at the highest densities and volumes.' },
      { q: 'How many tons per hour does a horizontal baler process?', a: 'Closed-door manual-tie machines typically run 1 to 3 tons of cardboard an hour. Open-end auto-tie balers run several tons an hour from a conveyor, with large models rated at 20 tons an hour or more. Two-ram balers go higher still on mixed material. Real throughput depends on how fast the hopper is fed.' },
      { q: 'How much space does a horizontal baler need?', a: 'Plan for the machine, its hopper, the conveyor or feed area, the bale exit, bale staging, forklift aisles, and service access. A compact auto-tie line often needs 30 to 60 feet in length, plus a pit if the conveyor is pit-fed. Measure the proposed location and the delivery path before you request quotes.' },
      { q: 'Can a horizontal baler run on single-phase power?', a: 'Generally no. Horizontal balers run three-phase motors, commonly at 230 or 460 volts, with power units from roughly 20 horsepower upward. If the building has no three-phase service at the location, the electrical conversation comes before the equipment conversation. Confirm the exact power unit specification for the quoted machine.' },
      { q: 'What wire does an auto-tie baler use?', a: 'Boxed or stem wire fed continuously through the automatic tier, in the gauge the tier is designed for. Closed-door balers use longer, heavier single-loop or double-loop bale ties applied by hand. Using the wrong gauge or a poor-quality wire is the most common cause of tier faults, so match the wire to the machine manual.' },
      { q: 'When should I upgrade from a vertical baler to a horizontal baler?', a: 'When cardboard volume passes roughly 15 to 20 tons a month, when baling has become someone’s full-time job, or when the recycler wants heavier and more uniform bales than a vertical can make. Below that volume a 72 inch high-density vertical usually costs less to own. Measure peak volume first.' },
      { q: 'Are used horizontal balers a good buy?', a: 'They can be, because the machine is mostly heavy steel and hydraulics. Inspect the ram and chamber wear surfaces, cylinders, power unit, wire tier, controls, and structural welds, and get the fault and maintenance history. A used baler is sold as-is; a refurbished one has been rebuilt and carries a shop warranty at roughly half the cost of new. An independent evaluation before purchase is money well spent.' },
    ],
  },

  // ------------------------------------------------------------------
  // 4. Cardboard baler cost (recovers the URL that still ranks)
  // ------------------------------------------------------------------
  {
    slug: 'how-much-does-a-baler-cost',
    title: 'How Much Does a Cardboard Baler Cost? Vertical, Horizontal, Used, and Refurbished, With What a Bale Pays Back',
    seoTitle: 'How Much Does a Cardboard Baler Cost? 2026 Price Guide | Norton',
    metaDesc: 'Cardboard baler prices by size and type, new versus refurbished versus used, installation and wire costs, and a payback example from bales per week and current OCC prices.',
    date: '2026-11-16',
    readMins: 11,
    img: 'n-vertical-balers',
    imgAlt: 'New vertical cardboard balers lined up for delivery at Norton Equipment',
    topic: 'Baler cost',
    excerpt: 'Price ranges for every baler class, what changes the number, what installation and wire cost, and a hypothetical payback from bales per week and current cardboard prices.',
    answer: 'A new vertical cardboard baler typically costs $6,000 to $20,000 depending on chamber size and bale weight, with 60 inch machines in the middle of that range and 72 inch high-density models at the top. Horizontal balers start around $30,000 for a closed-door machine and climb with automation. Refurbished balers from Norton’s shop cost roughly half of new and carry a shop warranty. Used balers sold as-is cost less again. Installation for a vertical baler is usually modest.',
    cta: {
      title: 'See new, refurbished, and used priced side by side.',
      text: 'Tell Norton your weekly cardboard volume, available space, and power, and we will quote the baler classes that fit, with installation, wire, and training spelled out.',
      intent: 'used',
      label: 'Ask about refurbished and used balers',
    },
    related: [
      { href: '/balers-recycling/vertical-balers/', label: 'Vertical balers' },
      { href: '/balers-recycling/horizontal-balers/', label: 'Horizontal balers' },
      { href: '/balers-recycling/refurbished-balers/', label: 'Refurbished balers' },
      { href: '/balers-recycling/used-balers/', label: 'Used balers' },
      { href: '/balers-recycling/baling-wire/', label: 'Baling wire' },
      { href: '/services/equipment-evaluations/', label: 'Pre-purchase evaluations' },
      { href: '/how-to-choose-the-right-baler/', label: 'What size baler do I need?' },
    ],
    sourcesTitle: 'Further reading',
    sourcesIntro: 'Manufacturer specifications and published commodity pricing referenced in this guide:',
    sources: [
      { url: 'https://maxpakbalers.com/vertical-balers/', label: 'MAX-PAK vertical baler specifications' },
      { url: 'https://www.recyclingtoday.com/', label: 'Recycling Today, recovered paper pricing and market coverage' },
      { url: 'https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling', label: 'U.S. EPA, Facts and figures about materials, waste and recycling' },
    ],
    body: `<h2>Why nobody publishes baler prices, and why we do</h2>
<p>Manufacturers sell through dealers, dealers quote installed, and every quote carries freight, rigging, and site conditions that vary. So the price pages you find are either residential trash compactors or a form that promises a quote. This guide gives you the ranges a dealer actually works from, by machine class and by condition, plus the costs around the machine and a worked example of what a bale pays back. The ranges are planning ranges. Your quote depends on the exact specification, condition, site preparation, delivery, and installation.</p>
<p>Norton has sold new, refurbished, and used balers across the Mid-South since 1997 and rebuilds them in our Byhalia shop. We quote all three side by side, which is the only honest way to answer the question in the title.</p>

<h2>Cardboard baler prices by class</h2>
<p>The size of the chamber decides the bale, and the bale decides the machine. The classes below run from a back-room machine for a convenience store to a two-ram system for a recycling plant.</p>
${table('Typical cardboard baler price ranges by class and condition', ['Baler class', 'Typical bale', 'New', 'Refurbished (Norton shop, warrantied)', 'Used (as-is)'], [
  ['Small vertical, 30 to 42 inch chamber', 'About 100 to 300 pounds on the smallest machines, up to roughly 500 on a 42 inch', 'About $6,000 to $10,000', 'Roughly half of new', 'Below refurbished; price reflects condition'],
  ['Standard vertical, 60 inch', 'About 600 to 1,000 pounds', 'About $9,000 to $15,000', 'Roughly half of new', 'Below refurbished'],
  ['High-density vertical, 72 inch', 'About 750 to 1,100 pounds, mill-size', 'About $14,000 to $20,000 or more with options', 'Roughly half of new', 'Below refurbished'],
  ['Closed-door horizontal, manual tie', 'About 800 to 1,200 pounds', 'From about $30,000', 'Quoted per machine; scope of rebuild varies', 'Quoted per machine'],
  ['Open-end auto-tie horizontal', 'About 1,000 to 1,800 pounds', 'Scales with throughput and conveyor; a capital project', 'Quoted per machine', 'Quoted per machine'],
  ['Two-ram', 'About 1,200 to 2,000 pounds or more, multi-material', 'The largest investment in the category; quoted as a system', 'Quoted per machine', 'Quoted per machine'],
])}
${PRICE_NOTE}
<p>Two notes on the table. First, the 60 inch vertical is the most common commercial baler in America because it sits where most businesses’ volume does: a store or warehouse producing a few bales a week. Second, horizontal balers are ordered and built to the job, so their prices are quoted as a project that includes the feed system, power, and installation. The <a href="/blog/horizontal-baler-guide/">horizontal baler guide</a> explains the three designs and what each one needs.</p>

<h2>What changes the price of a baler</h2>
<ul>
<li><strong>Chamber size and bale weight.</strong> The biggest factor. A wider, taller chamber means a heavier bale, a larger cylinder, a heavier frame, and a bigger motor.</li>
<li><strong>Cylinder force and cycle time.</strong> High-density models use more hydraulic force to pack a heavier bale into the same chamber, which costs more in cylinder, pump, and structure, and is what makes a 72 inch bale mill-size.</li>
<li><strong>Power.</strong> Single-phase 208 or 230 volt machines are the base for verticals. Three-phase and higher-horsepower power units add cost but cycle faster.</li>
<li><strong>Doors, ejection, and controls.</strong> Interlocked doors are standard. Powered bale ejectors, bale chamber lights, full-bale indicators, and UL-listed control panels are options on some models and standard on others.</li>
<li><strong>Safety package.</strong> Key-controlled switches, door interlocks, and the manufacturer’s ANSI Z245.5 compliance are what let the machine be used legally and, with the posted notice, loaded by 16 and 17 year olds. The <a href="/blog/cardboard-baler-safety-training-guide/">baler safety and training guide</a> covers the rules. Do not buy a machine without them.</li>
<li><strong>Auto-tie and feed systems.</strong> On horizontals, the wire tier, conveyor, cart tipper, and controls are most of the price above the base machine.</li>
<li><strong>Freight and rigging.</strong> A 60 inch vertical weighs on the order of two tons. Freight from the factory and placement in a back room are real costs, usually included in a dealer’s installed quote. Confirm.</li>
</ul>

<h2>Installation and site preparation for a baler</h2>
<p>Here is the good news that compactor buyers do not get: a vertical baler is usually inexpensive to install. There is no concrete pad, no receiver container, and no roll-off truck approach. A typical vertical baler installation is a half day: deliver, set, anchor to the slab, connect to a dedicated circuit with a disconnect, test the interlocks and cycle, and train the crew. The items that add cost:</p>
<ul>
<li><strong>Power.</strong> A dedicated circuit and disconnect. Many verticals run single-phase; high-density and three-phase models need three-phase service at the location.</li>
<li><strong>Floor.</strong> A level concrete floor rated for the machine and the bale. Most warehouse and back-room slabs qualify.</li>
<li><strong>Clearance.</strong> Room for the door to swing, the bale to eject and tip, a pallet jack or forklift to take it away, and a technician to reach the power unit.</li>
<li><strong>Access.</strong> The machine has to get through the building. Norton’s <a href="/services/equipment-logistics/">logistics crew</a> sets verticals through retail back rooms routinely, after hours when needed.</li>
<li><strong>Wire supply.</strong> A pallet of the right ties on day one.</li>
</ul>
<p>Horizontal balers are a different project: a slab rated for 15,000 pounds and up, three-phase power sized to the power unit, a conveyor and possibly a pit, and crane or heavy forklift placement. Budget for installation the way you would for a compactor and get every line quoted.</p>

<h2>Operating costs: wire, power, and maintenance</h2>
<ul>
<li><strong>Baling wire.</strong> A vertical bale takes four or five single-loop or double-loop ties, so wire costs a few dollars per bale, and the right gauge and length matter more than the price per tie. Auto-tie horizontals use boxed or stem wire by the ton. The <a href="/balers-recycling/baling-wire/">baling wire page</a> covers matching wire to the machine; Norton delivers on scheduled routes.</li>
<li><strong>Electricity.</strong> A vertical baler runs a 5 to 15 horsepower motor for under a minute per cycle. On a few bales a day the power cost is small enough to ignore. Horizontals running all shift are a line item, still modest against labor.</li>
<li><strong>Maintenance.</strong> Hydraulic fluid and filter changes, hose inspection, door and latch adjustment, interlock and emergency stop testing. A <a href="/services/preventive-maintenance/">quarterly preventive maintenance visit</a> on a vertical is a few hundred dollars and catches the leaks and worn hoses that otherwise become a down machine. The <a href="/blog/commercial-baler-maintenance-checklist/">baler maintenance checklist</a> covers what operators watch between visits.</li>
<li><strong>Labor.</strong> The real operating cost of a vertical is the operator’s time: a few minutes per cycle plus tying and ejection. When that time becomes a full shift, the horizontal conversation starts.</li>
</ul>

<h2>Does a baler pay for itself? A worked example</h2>
<p><strong>This example is hypothetical and illustrative.</strong> It is not a Norton customer result and your numbers will differ. The method is what matters.</p>
<p>A grocery store receives deliveries daily and fills an 8-yard dumpster with loose cardboard three times a week on top of its trash service, at about $95 a pull with surcharges. That is roughly $1,235 a month for cardboard pulls alone. The store installs a 60 inch vertical baler and produces about eight 700-pound bales a week, roughly 2.8 tons of OCC.</p>
${table('Hypothetical monthly payback on a 60 inch vertical baler', ['Line', 'Before the baler', 'With the baler'], [
  ['Cardboard dumpster pulls', '12 pulls a month at about $95: about $1,140', '0'],
  ['Overflow and extra pickups', 'About $95 a month', '0'],
  ['Bale pickup', 'None', 'Recycler collects bales on a schedule; many pick up free at this volume, some pay'],
  ['OCC revenue at a local pickup rate', 'None', 'About 12 tons a month; if the local buyer pays $40 a ton for picked-up bales, about $480. If they pay nothing but haul free, $0'],
  ['Wire', 'None', 'About 35 bales a month at a few dollars each: about $120'],
  ['Preventive maintenance', 'None', 'About $100 a month averaged'],
  ['<strong>Net monthly change</strong>', '', '<strong>About $1,015 to $1,495 a month better off</strong>'],
])}
<p>Against a new 60 inch baler installed at $12,000 the payback is eight to twelve months. Against a refurbished machine at roughly half that, it is well under a year. If the store sells bales at a mill-size price instead of a pickup rate, the return improves; if the recycler charges for pickup, it worsens. Three things decide your version of this table: how many pulls you pay for now, what a local buyer will do with your bales, and how many bales you will actually make. The <a href="/blog/how-a-trash-compactor-cuts-your-hauling-bill/">hauling bill article</a> covers the pull-count side and the <a href="/cardboard-bale-weight/">bale weight guide</a> covers what a bale weighs and is worth. Norton’s <a href="/services/waste-stream-consultations/">waste stream consultation</a> runs the math from your own invoices at no charge.</p>
<p>On OCC pricing: published national averages for baled old corrugated containers moved through a wide range in 2026, roughly $60 to $100 a ton depending on the month and region. What a local recycler pays for a picked-up bale from a single store is lower than the published mill price and sometimes zero in exchange for free pickup. Ask for a written price and pickup schedule before you count on revenue.</p>

<h2>New, refurbished, or used: the decision table</h2>
<p>The <a href="/blog/used-vs-refurbished-balers/">used versus refurbished guide</a> explains the difference in detail. The short version is in the table.</p>
${table('Choosing between a new, refurbished, and used baler', ['Factor', 'New', 'Refurbished', 'Used, as-is'], [
  ['Price', 'Full', 'Roughly half of new', 'Lowest; reflects condition'],
  ['Condition', 'Factory new', 'Rebuilt in Norton’s shop: cylinder resealed, hydraulics flushed and tested, chamber and platen inspected, doors trued, interlocks verified, cycle-tested under load', 'Inspected and described; not rebuilt'],
  ['Warranty', 'Manufacturer warranty', 'Shop warranty with written terms', 'None; sold as-is'],
  ['Lead time', 'Factory lead time, often several months', 'Shorter; cores and some finished machines are kept on hand', 'Immediate if the machine exists'],
  ['Best for', 'Stable sites with the capital and a preference for factory warranty and the latest controls', 'Most retail, grocery, and warehouse buyers who want the lower number without the risk', 'Buyers with their own maintenance crew, spares and backups, budget-first purchases'],
  ['Risk', 'Lowest', 'Low; documented rebuild', 'Buyer carries it; a pre-purchase evaluation reduces it'],
])}

<h2>Financing and leasing, in general terms</h2>
<p>Most equipment lenders finance balers, and many dealers can introduce a finance partner. Typical structures are an equipment loan over three to five years or a fair-market-value lease with a purchase option at the end. Compare the total of payments against the cash price, confirm who carries maintenance, and watch the end-of-term terms on a lease. A refurbished machine often fits a cash budget that a new machine would push into financing, which is one of the reasons it is the most common choice for a first baler.</p>

<h2>Questions to ask before you buy a baler</h2>
<ul>
<li>Is the price installed, with delivery, rigging, anchoring, power hookup, testing, and operator training included?</li>
<li>Does the machine meet ANSI Z245.5 and come with the documentation and the key-controlled switch?</li>
<li>What bale weight and dimensions will it produce with my material, and will my recycler accept them?</li>
<li>What wire does it take, and can you deliver it?</li>
<li>Will you quote new, refurbished, and used side by side?</li>
<li>Who services it, and from where?</li>
<li>Will you buy it back or trade it when I outgrow it?</li>
</ul>
<p>Norton answers yes to the last four. Call <a href="tel:+16628387900">(662) 838-7900</a> or <a href="/request-a-quote/?interest=used">tell us your volume</a> and we will quote the classes that fit, new and refurbished side by side, with the installation written out.</p>`,
    faqs: [
      { q: 'How much is a vertical cardboard baler?', a: 'New vertical balers typically run $6,000 to $20,000. Small 30 to 42 inch machines sit at the low end, 60 inch machines in the middle at roughly $9,000 to $15,000, and 72 inch high-density models at the top. Refurbished verticals cost roughly half of new, and used machines sold as-is cost less again. Installation for a vertical is usually a half day.' },
      { q: 'How much does a 72 inch baler cost?', a: 'A new 72 inch high-density vertical baler typically costs about $14,000 to $20,000, more with powered ejection, three-phase power units, or other options. It produces mill-size bales of roughly 750 to 1,100 pounds. A refurbished 72 inch machine from Norton’s shop costs roughly half of new.' },
      { q: 'Is a used baler worth it?', a: 'It can be, if you know what you are buying. A used baler is sold as-is: inspected and described, but not rebuilt and not warrantied. It suits buyers with their own maintenance crew, a need for a spare, or a strict budget. If you want the machine gone through and warrantied, a refurbished baler at roughly half of new is the lower-risk choice.' },
      { q: 'What does a refurbished baler cost?', a: 'Roughly half the cost of a comparable new machine. A Norton refurbishment resealed or rebuilt the cylinder, flushed and tested the hydraulics, inspected the chamber and platen, trued the doors, verified the interlocks, and cycle-tested the machine under load, and it ships with a shop warranty with written terms.' },
      { q: 'How much does baling wire cost per bale?', a: 'A vertical bale takes four or five single-loop or double-loop ties, so wire runs a few dollars per bale depending on gauge and length. Auto-tie horizontal balers use boxed or stem wire bought by weight. The right gauge for your machine and bale matters more than the price per tie, because under-gauge wire breaks and costs you the bale.' },
      { q: 'Can a baler pay for itself?', a: 'Often within a year or two. The saving comes from eliminating cardboard dumpster pulls and overflow charges, offset by wire and maintenance, plus whatever a recycler pays or saves you for picked-up bales. A store paying for several cardboard pulls a week commonly recovers a refurbished vertical in under a year. Run the math from your own invoices.' },
      { q: 'How long does a cardboard baler last?', a: 'A vertical baler is a thick steel chamber and a hydraulic cylinder. With hydraulic maintenance and interlock testing, 15 to 20 years of service is common, and a rebuild of the cylinder and hydraulics extends it further. Duty cycle and whether leaks are fixed early matter more than age.' },
      { q: 'Does Norton buy back balers?', a: 'Yes. Norton buys balers and compactors outright, takes trades when customers step up to a larger machine, and handles the rigging and removal. Many customers move from a refurbished 60 inch baler to a new 72 inch high-density machine with us a few years later.' },
    ],
  },
];

// Refreshes to legacy archive posts in this release. Merged over the original
// entries the same way SEPTEMBER_UPDATES is, so the URL and publish date stay.
export const NOVEMBER_UPDATES = {
  'cardboard-bale-weight': {
    title: 'Cardboard Bale Weight by Baler Size (and What a Bale Is Worth)',
    metaDesc: 'Typical cardboard bale weights for 30, 48, 60, and 72 inch vertical balers and for horizontal and two-ram machines, how much the baler itself weighs, and what a bale of OCC is worth in 2026.',
    excerpt: 'Typical bale weights by baler size, what changes them, how much the baler itself weighs, and what a bale of cardboard is worth.',
    readMins: 7,
    updated: '2026-11-16',
    answer: 'A cardboard bale weighs anywhere from about 100 pounds out of a small vertical baler to 2,000 pounds or more out of a two-ram. A standard 60 inch vertical baler makes bales of roughly 600 to 1,000 pounds; a 72 inch high-density vertical makes mill-size bales of 750 to 1,100 pounds; auto-tie horizontals make 1,000 to 1,800 pound bales. Density, moisture, and the type of cardboard move the number.',
    cta: { title: 'Size the baler to the bale your recycler wants.', text: 'Tell Norton your weekly cardboard volume and what your recycler accepts. We will match the machine to the bale, with wire, installation, and service included in the quote.', intent: 'baler', label: 'Discuss baler sizing' },
    body: `<h2>Why bale weight matters</h2>
<p>If you handle, transport, or sell cardboard, bale weight is the number everything else runs on. It decides which forklift moves the bale, how many bales fill a trailer, whether the recycler treats your material as mill-size, and what the bale is worth. It also decides which baler you should buy, because the chamber size sets the bale. This guide gives typical weights by machine, explains what moves them, answers the related question of how much the baler itself weighs, and puts a current value on the bale.</p>

<h2>Cardboard bale weight by baler size</h2>
<p>These are typical ranges for dry, well-compressed old corrugated containers (OCC). Your bales will land inside them if the machine is working to specification and the operator fills the chamber before tying.</p>
${table('Typical cardboard bale weights by baler type', ['Baler', 'Typical bale dimensions', 'Typical bale weight', 'Who makes them'], [
  ['Small vertical, 30 inch chamber', 'About 30 by 24 by 30 inches', 'About 100 to 300 pounds', 'Convenience stores, small retail, offices'],
  ['Mid-size vertical, 42 to 48 inch chamber', 'About 42 to 48 inches wide by 30 by 40 inches', 'About 300 to 600 pounds', 'Retail, restaurants, smaller warehouses'],
  ['Standard vertical, 60 inch chamber', 'About 60 by 30 by 48 inches', 'About 600 to 1,000 pounds', 'Grocery, big-box retail, warehouses, distribution back rooms'],
  ['High-density vertical, 72 inch chamber', 'About 72 by 30 by 48 inches', 'About 750 to 1,100 pounds, mill-size', 'High-volume retail, warehouses, manufacturers'],
  ['Closed-door horizontal', 'About 30 by 48 inches by 48 to 60 inches long', 'About 800 to 1,200 pounds', 'Operations that outgrew a vertical'],
  ['Open-end auto-tie horizontal', 'About 30 by 44 to 48 inches by 60 inches long', 'About 1,000 to 1,800 pounds', 'Distribution centers, recyclers, printers'],
  ['Two-ram', 'About 30 by 48 by 60 inches or larger', 'About 1,200 to 2,000 pounds or more', 'Recycling processors, multi-material plants'],
])}
<p>The <a href="/how-to-choose-the-right-baler/">baler sizing guide</a> turns your weekly cardboard volume into a machine class, and the <a href="/blog/horizontal-baler-guide/">horizontal baler guide</a> covers the three horizontal designs in the lower half of the table.</p>

<h2>What makes one bale heavier than another</h2>
<ol>
<li><strong>Chamber size.</strong> The biggest factor. A 72 inch chamber holds more cardboard than a 60 inch chamber at the same density.</li>
<li><strong>Compression force.</strong> High-density balers use more hydraulic force to pack more material into the same chamber. That is the difference between a standard 60 inch bale and a high-density one, and between a vertical bale and a horizontal one.</li>
<li><strong>How full the chamber is when the operator ties.</strong> Tying early makes light bales. Most verticals have a full-bale indicator; use it.</li>
<li><strong>Moisture.</strong> Wet cardboard weighs more and is worth less. Recyclers deduct for moisture and may reject soaked bales. Store cardboard and bales under cover.</li>
<li><strong>Type of cardboard.</strong> Heavy double-wall shipping cartons make denser bales than light single-wall retail packaging. Mixed paper and chipboard in the bale lower both weight and grade.</li>
<li><strong>Wire.</strong> Under-tied bales expand after ejection and lose density. Use the number and gauge of ties the machine manual calls for; the <a href="/balers-recycling/baling-wire/">baling wire page</a> covers the choices.</li>
</ol>

<h2>How much does a cardboard baler weigh?</h2>
<p>The machine, not the bale. This matters for the slab, the delivery truck, and the rigging plan.</p>
${table('Approximate shipping weight of commercial balers', ['Baler', 'Approximate machine weight'], [
  ['Small vertical, 30 inch', 'About 1,500 to 2,500 pounds'],
  ['Standard vertical, 60 inch', 'About 3,500 to 5,500 pounds'],
  ['High-density vertical, 72 inch', 'About 5,500 to 8,000 pounds'],
  ['Closed-door horizontal', 'About 10,000 to 20,000 pounds'],
  ['Open-end auto-tie horizontal', 'About 15,000 to 40,000 pounds depending on size'],
  ['Two-ram', 'About 40,000 pounds to well over 100,000 pounds'],
])}
<p>These are planning figures; the manufacturer’s specification sheet for the exact model governs. Any vertical baler is a forklift or crane set, not a pallet jack job, and horizontal machines need a slab rated for the load. Norton’s <a href="/services/equipment-logistics/">logistics crew</a> handles delivery and placement for the machines we sell and relocates machines we did not.</p>

<h2>What a bale of cardboard is worth in 2026</h2>
<p>Recyclers and mills buy OCC by the ton, so a 1,000 pound bale is half a ton of commodity. Published national averages for baled OCC moved through a wide range during 2026, roughly between $60 and $100 a ton depending on the month and region, after several years of swings in both directions. Two cautions when you turn that into a number for your bales:</p>
<ul>
<li>The published price is a mill price for truckload quantities of mill-size bales. A local recycler picking up a handful of bales from a single store pays less, sometimes nothing in exchange for free pickup. Ask for a written price and pickup schedule.</li>
<li>Density and cleanliness decide the grade. Dry, well-tied, cardboard-only bales from a high-density vertical or a horizontal qualify for the best treatment. Light, wet, or contaminated bales do not.</li>
</ul>
<p>Even at a low pickup rate, the bale is doing its main job: cardboard that used to fill a dumpster you paid to have pulled is now leaving for free or for money. The <a href="/blog/how-much-does-a-baler-cost/">baler cost guide</a> works through a payback example built on bales per week, and the <a href="/services/waste-stream-consultations/">waste stream consultation</a> runs it from your own invoices.</p>

<h2>Handling bales safely</h2>
<p>A 60 inch bale weighs more than most people expect and comes out of the chamber by tipping forward. Eject with the ram up and the machine stopped, stand clear of the tip path, and move bales only with a forklift rated for the weight and operated by a certified driver. Stack within the facility’s limit and keep bale storage out of aisles and away from exits. The <a href="/blog/cardboard-baler-safety-training-guide/">baler safety and training guide</a> covers ejection, handling, and the rest of operator training.</p>

<h2>Choosing a baler around the bale</h2>
<p>Start from the bale your recycler wants and your forklift can move, then work back to the machine. A store producing a few bales a week fits a 60 inch vertical. Serious volume or a recycler paying mill prices points to a 72 inch high-density vertical. When baling becomes a full shift, the horizontal conversation starts. Norton sells and services all of them, new, <a href="/balers-recycling/refurbished-balers/">refurbished</a>, and <a href="/balers-recycling/used-balers/">used</a>, and delivers the wire. Call <a href="tel:+16628387900">(662) 838-7900</a> with your weekly volume and we will match the machine to the bale.</p>`,
    faqs: [
      { q: 'How much does a cardboard bale weigh?', a: 'Small bales from 30 inch vertical balers weigh about 100 to 300 pounds, 60 inch vertical bales 600 to 1,000 pounds, 72 inch high-density bales 750 to 1,100 pounds, auto-tie horizontal bales 1,000 to 1,800 pounds, and two-ram bales 1,200 to 2,000 pounds or more. Moisture, density, and cardboard type move the number within those ranges.' },
      { q: 'How much does a cardboard baler weigh?', a: 'A small 30 inch vertical baler weighs roughly 1,500 to 2,500 pounds, a 60 inch vertical 3,500 to 5,500 pounds, and a 72 inch high-density vertical 5,500 to 8,000 pounds. Horizontal balers run from about 10,000 to 40,000 pounds and two-ram machines from 40,000 pounds to well over 100,000. Check the manufacturer’s specification for the exact model.' },
      { q: 'What makes one bale heavier than another?', a: 'Chamber size, compression force, how full the chamber is when the operator ties, moisture, the type of cardboard, and proper tying. A dry, well-tied bale from a high-density baler weighs more per cubic foot and is worth more than a light or wet one.' },
      { q: 'How much is a bale of cardboard worth?', a: 'Published national averages for baled OCC ran roughly $60 to $100 a ton through 2026, so a 1,000 pound bale is worth about $30 to $50 at mill prices. A local recycler picking up a few bales from one store pays less, sometimes nothing in exchange for free pickup. The main saving is the dumpster pulls you no longer pay for.' },
    ],
    related: [
      { href: '/balers-recycling/vertical-balers/', label: 'Vertical balers' },
      { href: '/balers-recycling/horizontal-balers/', label: 'Horizontal balers' },
      { href: '/balers-recycling/baling-wire/', label: 'Baling wire delivery' },
      { href: '/blog/how-much-does-a-baler-cost/', label: 'What a cardboard baler costs' },
    ],
  },

  'trash-compactor-repair-signs': {
    title: '7 Signs Your Commercial Trash Compactor Needs Repair',
    metaDesc: 'Seven commercial trash compactor warning signs, what the operator should do for each, what the likely cause is, and when to stop the machine and call for repair. Norton services every brand in the Mid-South.',
    excerpt: 'Seven compactor warning signs with the safe operator response for each, what usually causes them, and when to shut the machine down and call.',
    readMins: 7,
    updated: '2026-11-16',
    answer: 'A commercial trash compactor needs repair when it will not start, cycles slowly or stalls, leaks hydraulic fluid, makes new noises, will not latch or seat the container, throws repeated control faults, or has a safety device that does not work. Operators should stop the machine, remove the key, and report it. Nobody reaches into the charge box or opens a panel; that work is done under lockout by a technician.',
    cta: { title: 'Compactor acting up? Tell us what you see.', text: 'Give Norton the make, model, location, and the symptom from the list above. We service every brand of compactor across the Mid-South and prioritize down machines.', intent: 'repair', label: 'Request compactor repair' },
    body: `<h2>Catch it before it stops</h2>
<p>A commercial trash compactor almost always warns you before it fails. The warnings are easy to miss on a busy dock because the machine still runs, just a little slower, a little louder, or with a puddle under it that someone wipes up. This guide lists the seven signs that mean a repair is coming, what the operator should do about each one, and what is usually behind it. It is written for the person who runs the dock, not the technician. The repair itself is done under lockout by a qualified person; the operator’s job is to notice, stop, and report.</p>
<p>For the daily and scheduled checks that catch these signs early, use the <a href="/blog/trash-compactor-maintenance-checklist/">compactor maintenance checklist</a>. For what to have ready when you call, see the <a href="/blog/compactor-repair-request-checklist/">repair request checklist</a>.</p>

<h2>The seven signs</h2>
${table('Compactor warning signs, operator response, and likely cause', ['Sign', 'What the operator does', 'What is usually behind it'], [
  ['<strong>1. It will not start</strong>', 'Confirm the key switch and disconnect are on and the container is seated. If it still does not start, stop and report. Do not open the control panel.', 'A failed start switch, a tripped breaker or overload, a safety interlock or full-container switch that has failed or is reading an unseated container, corroded contacts, or a motor or contactor problem. Often a quick fix; occasionally a sign of a larger electrical fault.'],
  ['<strong>2. The cycle is slow, hesitates, or stalls</strong>', 'Note how long a cycle takes compared with normal and whether the ram hesitates at a particular point. Stop if it stalls under load. Report.', 'Low hydraulic fluid, a worn pump, a leaking cylinder seal, a sticking valve, or air in the system. Slow cycles are the most common early warning and the one most often ignored.'],
  ['<strong>3. Hydraulic fluid on the pad or under the power unit</strong>', 'Stop the machine and report. Do not run your hand along hoses to find the leak and do not keep running it because the puddle is small.', 'A hose, fitting, cylinder seal, or valve leaking. A small leak drops the fluid level, which overheats the pump and turns a hose repair into a pump or cylinder replacement. It is also a slip hazard.'],
  ['<strong>4. New noises: grinding, banging, squealing, or a straining motor</strong>', 'Describe the sound and when in the cycle it happens. Stop if it is a bang or grind under load. Report.', 'Worn ram guides or shoes, debris between the ram and the floor, a failing pump bearing, loose structural components, or a motor under strain. Noise is information; a machine that suddenly sounds different has changed.'],
  ['<strong>5. The container will not seat or the door will not latch</strong>', 'Do not force the door, the ratchet binders, or the container. Coordinate with the hauler if the container is the problem. Report.', 'Bent or worn latch hardware, a damaged container, a misaligned ram or guide, or debris in the way. Forcing it bends steel that then has to be rebuilt.'],
  ['<strong>6. Repeated control faults or a machine that resets and stops again</strong>', 'Write down the exact fault code or light pattern and what was happening. Stop resetting it. Report.', 'A failing photo eye or limit switch, a loose connection, a pressure switch out of adjustment, or a controller fault. Resetting a fault repeatedly without finding the cause is how a nuisance fault becomes a safety problem.'],
  ['<strong>7. A safety device that does not work</strong>', 'Take the machine out of service immediately. A compactor whose emergency stop, interlock, gate, or guard does not work is not used until it is repaired.', 'Damaged switches, wiring, or guarding. Never bypass, tape, or jumper a safety device to finish a shift.'],
])}

<h2>Two signs that are not usually repairs</h2>
<p><strong>Odor.</strong> Trash smells. A compactor that is cleaned and, on a <a href="/trash-compactors/self-contained/">self-contained unit</a>, drained on schedule should not smell worse than its contents. If odor is the only complaint, the fix is cleaning and a review of what is going in. If a self-contained unit is leaking liquid, that is a seal or sump problem and belongs in the table above.</p>
<p><strong>Full-container light.</strong> On most compactors a light or gauge tells you the container is full. That is a call to the hauler, not to a technician, unless the light comes on when the container is clearly not full, which is a pressure switch issue.</p>

<h2>What not to do while you wait</h2>
<ul>
<li>Do not reach into the charge box or hopper for any reason while the machine is energized.</li>
<li>Do not open electrical panels or hydraulic enclosures.</li>
<li>Do not bypass, tape, or jumper an interlock, gate switch, or emergency stop.</li>
<li>Do not keep running a machine that is leaking, grinding, or stalling because the dock is busy. The repair gets more expensive by the hour.</li>
<li>Do not let the hauler pull a container from a machine that is jammed against it without the technician involved.</li>
</ul>
<p>Internal inspection, jam clearing, and repair happen under your facility’s lockout/tagout procedure by trained, authorized personnel. The <a href="/blog/cardboard-baler-safety-training-guide/">safety and training guide</a> covers the rules for balers and compactors.</p>

<h2>Repair, rebuild, or replace</h2>
<p>Most of the seven signs are repairs: a hose, a switch, a seal, a latch. When the same fault keeps returning, or the structure is cracked, or the machine is old enough that parts are scarce, the conversation changes. A <a href="/services/equipment-evaluations/">Norton evaluation</a> documents the condition and gives you the three numbers: the repair, a <a href="/services/equipment-refurbishment/">rebuild</a> of hydraulics and wear surfaces, and a <a href="/trash-compactors/used/">reconditioned</a> or new replacement. The <a href="/blog/repair-vs-refurbish-commercial-compactor/">repair versus refurbish guide</a> explains how to compare them. The <a href="/blog/commercial-trash-compactor-cost/">compactor cost guide</a> has the price ranges.</p>

<h2>Calling Norton for compactor repair</h2>
<p>Norton repairs every brand of commercial compactor across West Tennessee, North Mississippi, and East Arkansas: Marathon, Cram-A-Lot, PTR, BACE, Mac Corp, Wastequip, and the rest. Hydraulics, controls, doors and latches, rams and shoes, and structural work in our own fabrication shop. Have the make, model, serial number, location, and the symptom ready. Tell us if the machine is down; we prioritize those calls, with response depending on urgency and technician availability. Call <a href="tel:+16628387900">(662) 838-7900</a> or <a href="/request-a-quote/?interest=repair">request service online</a>.</p>`,
    faqs: [
      { q: 'What are the signs a commercial trash compactor needs repair?', a: 'It will not start, the cycle is slow or stalls, hydraulic fluid appears on the pad, it makes new grinding or banging noises, the container or door will not seat or latch, it throws repeated control faults, or a safety device does not work. Any of these means stop the machine, remove the key, and call for service.' },
      { q: 'Why won’t my compactor turn on?', a: 'Usually a failed start switch, a tripped breaker or overload, a safety interlock or full-container switch that is open or has failed, corroded contacts, or a contactor or motor problem. It is rarely a dead machine. A technician tests the circuit and the motor before anyone talks about replacement.' },
      { q: 'Should I keep running a compactor that leaks hydraulic fluid?', a: 'No. A leak lowers the fluid level, overheats the pump, and turns a hose or seal repair into a pump or cylinder failure. It is also a slip hazard on the pad. Shut the machine down and report it.' },
      { q: 'Can an operator clear a compactor jam?', a: 'No. Operators never reach into the charge box or hopper while the machine is energized. Jam clearing and internal work are done under the facility’s lockout/tagout procedure by trained, authorized personnel.' },
    ],
  },
};
