// ============================================================
// Norton Equipment Co. - site-wide configuration
// Draft build by Aurex Agency. Update baseUrl before launch.
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
  // Leads route here (client-confirmed 7/26): service@ primary, hillary@ cc.
  email: 'service@nortonequipmentco.com',
  emailCc: 'hillary@nortonequipmentco.com',
  address: {
    street: '60 Amy Ln',
    city: 'Byhalia',
    state: 'MS',
    zip: '38611',
  },
  geo: { lat: 34.8723, lng: -89.6906 }, // Byhalia, MS
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
