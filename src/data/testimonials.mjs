// ============================================================
// Testimonials - REAL customer reviews from nortonequipmentco.com
// and client-supplied. Client update 7/26: removed Jabil, Pratt
// Industries, and Katt Worldwide Logistics (no longer active accounts).
// Client-supplied reviews added: Wastequip, Amazon, WM, and Recycling
// Management Resources (RMR).
//
// Model notes:
//  - `quote` may be a string OR an array of paragraph strings.
//  - `list` (optional) renders as a bulleted block after the lead.
//  - `after` (optional) renders as paragraph(s) after the list.
//  - `wide` (optional) makes the card span the full testimonials grid.
// The home page only surfaces the first three (index 0-2), so those are
// kept concise; the long-form reviews live on the testimonials page.
// ============================================================

export const TESTIMONIALS_ARE_PLACEHOLDERS = false;

// Client-confirmed active accounts. Logo strip pending client sign-off.
export const TRUSTED_BY = ['Williams-Sonoma', 'Waste Connections'];

export const TESTIMONIALS = [
  {
    quote:
      'Working with Norton Equipment has been an outstanding experience. Their professionalism, attention to detail, and commitment to delivering quality products and services have consistently exceeded our expectations. They are a trusted partner we highly recommend.',
    name: 'Lisa R.',
    role: 'Senior Account Manager, WM',
    tag: 'Waste & Hauling',
  },
  {
    quote:
      'Norton Equipment Company is responsive, communicative, and does high quality work. They have experienced technicians that are capable of troubleshooting and are always working in the best interest of their clients and the end users of the equipment.',
    name: 'Cheri',
    role: 'Wastequip',
    tag: 'Equipment Manufacturer',
  },
  {
    quote:
      'Norton Equipment excels in service by providing high quality service technicians that do quality service work and equipment installation. They have provided excellent equipment knowledge in selection and installation. They adapt to our needs and schedules and truly know what dependability is. I consider Norton Equipment a valued business partner. They offer the greatest value of all, "Integrity" in business.',
    name: 'Michael Gaugh',
    role: 'Waste Connections',
    tag: 'Waste & Hauling',
  },
  {
    quote:
      'I have been very pleased with the service Norton Equipment has provided Williams-Sonoma for over 10 years that I have known them. From the sale of new and used equipment, installation in our locations all over the country, repair parts, and fast service when a machine is out of service, I know I can count on Norton!',
    name: 'David Dygert',
    role: 'Williams-Sonoma',
    tag: 'National Retail',
  },
  {
    quote:
      'Norton Equipment is #1 in service and equipment in the mid-south area and beyond, providing quality service, support, and equipment for Williams-Sonoma for 10 years.',
    name: 'Eric Marsiglia',
    role: 'Williams-Sonoma',
    tag: 'Distribution',
  },
  {
    wide: true,
    quote: [
      'Norton Equipment has consistently proven to be a reliable and responsive partner for all our repair needs. When equipment issues arise, their team responds quickly to minimize downtime and keep operations running smoothly.',
      'What truly sets Norton apart is the professionalism of their service technicians. Each tech takes the time to clearly explain the issues they discover during diagnostics and walks us through exactly what repairs were performed to resolve the problem. This transparency and clear communication gives us confidence in the quality of their work and helps us better understand our equipment maintenance needs.',
      'I highly recommend Norton Equipment for their dependable service, quick response times, and knowledgeable, professional technicians.',
    ],
    name: 'Wesley',
    role: 'Amazon',
    tag: 'Fulfillment',
  },
  {
    wide: true,
    quote: [
      'We at Recycling Management Resources in Olive Branch, MS have been using Norton Equipment Company as our main mechanical, hydraulic, welding, fabricating, and just overall vendor for our baler, shredder, and guillotine equipment and any plant needs for close to 4 years now. I really do not have the right words to express my gratitude and appreciation for them. I will sum it up using adjectives:',
    ],
    list: [
      'Honest',
      'Trustworthy',
      'Knowledgeable in their field',
      'Extra-milers',
      'Reliable',
      'Dependable',
      'Accountable',
      'Golden Rulers',
      'Networking, even with competitors in their field (that has been huge). ZERO egos right there.',
      'Customer based and customer driven',
    ],
    after: [
      'Early on, one of the first calls I had put into NEC was a request for emergency Sunday work. Without hesitation, JT, George, Garry, Hunter, Tracy, and a few others responded like it was just what they do. (And it was football season!!)',
      'Hillary and her office staff are A one and are extremely in sync with field operations.',
    ],
    name: 'Dave',
    role: 'Recycling Management Resources',
    tag: 'Recycling · Olive Branch, MS',
  },
];
