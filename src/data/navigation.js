// src/data/navigation.js
export const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Blog',     path: '/blog' },
  { label: 'Contact',  path: '/contact' },
];

export const footerColumns = [
  {
    heading: 'Services',
    links: [
      { label: 'Ocean Freight',         path: '/services/ocean-freight' },
      { label: 'Air Freight',           path: '/services/air-freight' },
      { label: 'Contract Logistics',    path: '/services/contract-logistics' },
      { label: 'Corporate Transport',   path: '/services/corporate-transport' },
      { label: 'Cargo Express',         path: '/services/cargo-express' },
      { label: 'Goods Transportation',  path: '/services/goods-transportation' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',     path: '/about' },
      { label: 'Blog',      path: '/blog' },
      { label: 'Employees', path: '/about' },
      { label: 'Legal',     path: '/contact' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Nigeria Office',  path: '/contact' },
      { label: 'UK Office',      path: '/contact' },
      { label: 'US Office',      path: '/contact' },
      { label: 'Get a Quote',    path: '/contact' },
    ],
  },
];
