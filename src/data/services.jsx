import Bus from "../media/Bus";
import Plane from "../media/Plane";
import Ship from "../media/Ship";
import Tractor from "../media/Tractor";
import Train from "../media/Train";

// src/data/services.js
export const services = [
  {
    id: 'ocean-freight',
    title: 'Ocean Freight',
    slug: 'ocean-freight',
    tagline: 'International supply chains involves challenging regulations.',
    description:
      'We manage all aspects of ocean freight including FCL and LCL shipments, customs documentation, and port handling. Our global network of carriers ensures competitive rates and reliable transit times for cargo of any size.',
    longDescription:
      'Multi-modal container units, designed as reusable carriers to facilitate unit load handling of the goods contained, are also referred to as cargo, specially by shipping lines and logistics operators. Our ocean freight services span every major trade lane across the globe.',
    image: <Ship/>,
    icon: '🚢',
    features: ['FCL & LCL', 'Port Handling', 'Customs Docs', 'Track & Trace'],
  },
  {
    id: 'air-freight',
    title: 'Air Freight',
    slug: 'air-freight',
    tagline: 'International supply chains involves challenging regulations.',
    description:
      'Speed and reliability for time-critical shipments. Our air freight solutions cover direct and consolidated services from all major airports, with full customs brokerage support and door-to-door delivery.',
    longDescription:
      'Multi-modal container units, designed as reusable carriers to facilitate unit load handling of the goods contained, are also referred to as cargo, specially by shipping lines and logistics operators. Air freight ensures your goods arrive on schedule, every time.',
    image: <Plane/>,
    icon: '✈️',
    features: ['Express Delivery', 'Charter Services', 'Dangerous Goods', 'Cold Chain'],
  },
  {
    id: 'contract-logistics',
    title: 'Contract Logistics',
    slug: 'contract-logistics',
    tagline: 'International supply chains involves challenging regulations.',
    description:
      'Tailored warehousing, fulfilment, and distribution solutions designed around your business. We take ownership of your logistics operations so you can focus on growth.',
    longDescription:
      'The word cargo refers in particular to goods or produce being conveyed generally for commercial gain by ship, boat, or aircraft, although the term is now often extended to cover all types of freight. Our contract logistics teams embed within your supply chain.',
    image: <Tractor/>,
    icon: '🏭',
    features: ['Warehousing', 'Pick & Pack', 'Returns Mgmt', 'Inventory Ctrl'],
  },
  {
    id: 'corporate-transportation',
    title: 'Corporate Transportation',
    slug: 'corporate-transportation',
    tagline: 'International supply chains involves challenging regulations.',
    description:
      'Fleet management and transport planning for corporate accounts. We handle large-scale ground logistics across West Africa and beyond, with real-time visibility and dedicated account management.',
    longDescription:
      'The word cargo refers in particular to goods or produce being conveyed generally for commercial gain. Our corporate fleet solutions deliver reliability at scale, with bespoke routing and live tracking.',
    image: <Bus/>,
    icon: '🚛',
    features: ['Fleet Mgmt', 'Route Planning', 'Live Tracking', 'Dedicated Drivers'],
  },
  {
    id: 'cargo-express',
    title: 'Cargo Express',
    slug: 'cargo-express',
    tagline: 'International supply chains involves challenging regulations.',
    description:
      'Same-day and next-day delivery options for urgent shipments. Our Cargo Express network operates 24/7, covering Lagos, Abuja, Port Harcourt, and key international corridors.',
    longDescription:
      'The word cargo refers in particular to goods or produce being conveyed generally for commercial gain. Express cargo moves fast — and so do we.',
    image: <Bus/>,
    icon: '⚡',
    features: ['Same-Day', 'Night Dispatch', 'Priority Handling', 'Live ETA'],
  },
  {
    id: 'goods-transportation',
    title: 'Goods Transportation',
    slug: 'goods-transportation',
    tagline: 'International supply chains involves challenging regulations.',
    description:
      'End-to-end overland freight services for bulk goods, perishables, and hazardous materials. Our experienced drivers and modern fleet cover all major highways safely and efficiently.',
    longDescription:
      'The word cargo refers in particular to goods or produce being conveyed generally for commercial gain. From farm to factory, we move goods across borders with care.',
    image: <Train/>,
    icon: '📦',
    features: ['Bulk Loads', 'Refrigerated', 'Hazmat', 'Cross-Border'],
  },
];

export const serviceHighlights = [
  { label: 'Customer Satisfaction Tools', icon: '⭐' },
  { label: 'Freight Payment Options',     icon: '💳' },
  { label: 'Management & Reporting',      icon: '📊' },
  { label: 'Compliance Solutions',        icon: '✅' },
];
