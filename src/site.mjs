// ============================================================
// Norton Equipment Co. - site-wide configuration
// Built by Aurex Agency.
// ============================================================

export const SITE = {
  // Client-confirmed 7/26: business name shown as "Norton Equipment Co."
  name: 'Norton Equipment Co.',
  shortName: 'Norton Equipment',
  legalName: 'Norton Equipment Co.',
  baseUrl: 'https://nortonequipmentco.com',
  phone: '(662) 838-7900',
  phoneHref: 'tel:+16628387900',
  fax: '(662) 838-7979', // client-confirmed 7/26
  // Displayed contact address on the contact page.
  email: 'service@nortonequipmentco.com',
  emailCc: 'hillary@nortonequipmentco.com',
  // Client-confirmed 8/4: EVERY website form submission goes to Hillary.
  // Used by the /api/contact handler and by the mailto fallback.
  formTo: 'hillary@nortonequipmentco.com',
  address: {
    street: '60 Amy Ln',
    city: 'Byhalia',
    state: 'MS',
    zip: '38611',
  },
  geo: { lat: 34.8723, lng: -89.6906 }, // Byhalia, MS
  // Google Analytics 4 measurement ID (client-supplied 8/4). Emitted in the
  // head of every page; set to null to remove analytics site-wide.
  analyticsId: 'G-MJV5ZSNM0L',
  // Google Search Console HTML-tag verification. Paste the content value from
  // Search Console > Add property > HTML tag. Leave null if verifying by DNS.
  searchConsoleToken: null,
  // Client-supplied 8/3. Also emitted as schema.org sameAs on every page.
  social: [
    { name: 'Facebook', url: 'https://www.facebook.com/nortonequipment/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/norton-equipment-co/' },
  ],
  // Office hours client-confirmed 7/26: Mon-Thu 7:30-4:30, Fri 7:30-4:00.
  hours: 'Mon-Thu 7:30 AM to 4:30 PM · Fri 7:30 AM to 4:00 PM',
  hoursSchema: ['Mo-Th 07:30-16:30', 'Fr 07:30-16:00'],
  founded: '1997',
  // Client-confirmed 7/26: 100-mile service ring, TN / MS / AR only (no Louisiana).
  serviceAreaBlurb:
    'Serving the Mid-South within roughly 100 miles of Byhalia and Memphis: West Tennessee, North Mississippi, and East Arkansas.',
  tagline: 'Built for the work behind the waste.',
};

export const NAV = [
  { label: 'Trash Compactors', href: '/trash-compactors/', dropdown: 'compactors' },
  { label: 'Balers & Recycling', href: '/balers-recycling/', dropdown: 'balers' },
  { label: 'Services', href: '/services/', dropdown: 'services' },
  { label: 'Brands', href: '/brands/', dropdown: 'brands' },
  { label: 'Locations', href: '/locations/', dropdown: 'locations' },
  { label: 'About', href: '/about/', dropdown: 'about' },
];
