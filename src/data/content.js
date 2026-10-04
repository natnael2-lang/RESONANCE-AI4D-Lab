// ---------------------------------------------------------------------------
// Single source of truth for the homepage.
// To add a navbar tab, a focus area, a vision pillar or a partner, add ONE
// object to the matching array below. The header, drawer, search, cards and
// footer all render from this file.
//
// CONTENT RULE: every visible word comes from the existing RESONANCE site.
// Nothing here is invented.
// ---------------------------------------------------------------------------

const BASE = 'https://sites.google.com/aait.edu.et/resonance-lab/home';

export const site = {
  name: 'RESONANCE AI4D Lab @CTBE',
  // Cropped from the site's own header (low resolution). Replace with the original file.
  logo: '/assets/logo.png',
};

export const links = {
  apply: `${BASE}/get-involved/application-202526`,
};

// Add new tabs here. Give an item `children` to make it a dropdown.
// Tabs beyond MAX_VISIBLE_TABS collapse into a "More" menu on desktop.
export const MAX_VISIBLE_TABS = 7;

export const nav = [
  { id: 'about', label: 'About', href: `${BASE}/about` },
  { id: 'research', label: 'Research', href: `${BASE}/research` },
  { id: 'team', label: 'Team', href: `${BASE}/team` },
  { id: 'news', label: 'News & Events', href: `${BASE}/news-events` },
  { id: 'publications', label: 'Publications', href: `${BASE}/publications` },
  {
    id: 'get-involved',
    label: 'Get Involved',
    href: `${BASE}/get-involved`,
    children: [{ label: 'Application 2025/26', href: `${BASE}/get-involved/application-202526` }],
  },
  { id: 'contact', label: 'Contact', href: `${BASE}/contact` },
];

export const vision = [
  {
    title: 'Innovation Hub',
    text: 'Positioning Ethiopia as a leader in Responsible AI for development, advancing key SDGs.',
  },
  {
    title: 'Sustainable Solutions',
    text: "Creating ethical and scalable AI solutions tailored to Ethiopia's specific needs in health, agriculture, governance, and energy.",
  },
  {
    title: 'Collaborative Ecosystem',
    text: 'Fostering collaborations between academia, government, industry, and communities.',
  },
];

// The hero reuses the lab's first vision statement and emphasises its key phrase.
export const hero = {
  title: ['RESONANCE', 'AI4D Lab'],
  lead: vision[0].text,
  highlight: 'Responsible AI for development',
};

// `icon` must match a key in components/Icon.jsx. Tints follow the existing
// site's four card colours (blue, green, purple, yellow). Classes are written
// out in full so Tailwind can see them.
export const focusAreas = [
  {
    id: 'health',
    title: 'Innovative Health Solutions',
    icon: 'health',
    href: `${BASE}/research`,
    tint: 'bg-blue-50',
    iconStyle: 'bg-white text-logo-blue',
    bar: 'bg-logo-blue',
    node: 'fill-sky-400',
  },
  {
    id: 'agriculture',
    title: 'Resilient Agriculture & Food Systems',
    icon: 'agriculture',
    href: `${BASE}/research`,
    tint: 'bg-green-50',
    iconStyle: 'bg-white text-brand-700',
    bar: 'bg-brand-500',
    node: 'fill-brand-400',
  },
  {
    id: 'governance',
    title: 'Inclusive Governance & Justice',
    icon: 'governance',
    href: `${BASE}/research`,
    tint: 'bg-purple-50',
    iconStyle: 'bg-white text-purple-700',
    bar: 'bg-purple-500',
    node: 'fill-purple-400',
  },
  {
    id: 'energy',
    title: 'Sustainable Energy & Climate Resilience',
    icon: 'energy',
    href: `${BASE}/research`,
    tint: 'bg-yellow-50',
    iconStyle: 'bg-white text-amber-700',
    bar: 'bg-amber-500',
    node: 'fill-amber-400',
  },
];

export const join = {
  title: 'Ready to Join Our Team?',
  text: 'Applications for our MSc and PhD research positions are now open. Explore the opportunities and apply today!',
  linkText: 'Visit our "Call for Applications Page".',
  button: 'Apply Now',
};

// Logos were cropped from the live site's screenshots (low resolution); replace
// with the originals. The Canada logo is cut off on the site, so it shows as text.
export const partners = [
  { name: 'Artificial Intelligence for Development', logo: '/assets/Artifical.png' },
  { name: 'International Development Research Centre (IDRC · CRDI)', logo: '/assets/CRDI.png' },
  { name: 'UK International Development', logo: '/assets/UK.png' },
];

// Everything searchable, built from the data above. Type labels reuse the site's own section names.
export const searchIndex = [
  ...nav.flatMap((n) => [
    { title: n.label, type: 'Page', href: n.href },
    ...(n.children || []).map((c) => ({ title: c.label, type: 'Page', href: c.href, text: n.label })),
  ]),
  ...focusAreas.map((f) => ({ title: f.title, type: 'Key Focus Areas', href: '#focus' })),
  ...vision.map((v) => ({ title: v.title, type: 'Our Vision', href: '#vision', text: v.text })),
  { title: 'Call for Applications Page', type: 'Page', href: links.apply },
  ...partners.map((p) => ({ title: p.name, type: 'Our Partners', href: '#partners' })),
];
