// ============================================================
// Norton Equipment Co. - site-wide configuration
// Draft build by Aurex Agency. Update baseUrl before launch.
// ============================================================

export const SITE = {
  name: 'Norton Equipment Company',
  shortName: 'Norton Equipment',
  legalName: 'Norton Equipment Company',
  baseUrl: 'https://nortonequipmentco.com',
  phone: '(662) 838-7900',
  phoneHref: 'tel:+16628387900',
  email: 'info@nortonequipmentco.com', // TODO(launch): confirm with client
  address: {
    street: '60 Amy Ln',
    city: 'Byhalia',
    state: 'MS',
    zip: '38611',
  },
  geo: { lat: 34.8723, lng: -89.6906 }, // Byhalia, MS
  hours: 'Mon-Fri · 7:00 AM - 4:30 PM',
  hoursSchema: 'Mo-Fr 07:00-16:30',
  founded: '1997',
  serviceAreaBlurb:
    'Serving the Mid-South within roughly 100 miles of Memphis: West Tennessee, North Mississippi, and East Arkansas.',
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
