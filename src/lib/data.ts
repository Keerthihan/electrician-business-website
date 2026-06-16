import { ServiceItem, TestimonialItem, AreaItem, GalleryItem } from '../types';
import ambientOutdoorGardenLuminaire from './images/Ambient Outdoor Garden Luminaire .jpg';
import electricalWork from './images/ele.jpg';
import kitchenExtensionLedDownlighting from './images/Kitchen extension LED downlighting.jpg';
import metalConsumerUnitWithSpd from './images/Metal Consumer Unit with SPD.jpg';
import premiumBrushedChromeSockets from './images/Premium Brushed Chrome Sockets.jpg';
import wallboxPulsarPlusInstall from './images/Wallbox Pulsar Plus Install.jpg';
import zappiSmartEvChargerInstallation from './images/Zappi Smart EV Charger Installation.jpg';

export const SERVICES: ServiceItem[] = [
  {
    id: 'consumer-unit-upgrades',
    title: 'Consumer Unit Upgrades',
    description: 'Modern, fire-rated metal fuse boards with full RCD protection to ensure your home meets current safety regulations.',
    detailedDescription: 'Your consumer unit (fuse board) is the heart of your home\'s electrical system. We replace old, hazardous plastic boards with modern, fully-compliant metal consumer units containing Surge Protection Devices (SPD) and Residual Current Devices (RCD) to prevent shocks and fires.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'full-partial-rewires',
    title: 'Full/Partial Rewires',
    description: 'Complete replacement of old wiring, switches, and sockets to improve property safety and reliable power delivery.',
    detailedDescription: 'Old or deteriorating wiring poses severe safety and fire hazards. We offer both full rewires for renovations and partial rewires for specific circuits or extensions, all fully certified and designed for modern electrical demands.',
    iconName: 'Zap',
  },
  {
    id: 'ev-charger-installation',
    title: 'EV Charger Installation',
    description: 'NICEIC-approved smart home charging points for all electric vehicle brands with fast charging capabilities.',
    detailedDescription: 'Charge your electric vehicle securely and quickly at home. As approved EV charger installers, we guide you from selecting the optimal unit (e.g., Zappi, Ohme, Wallbox) to complete wiring, smart app setup, and electrical grid compliance notifications.',
    iconName: 'BatteryCharging',
  },
  {
    id: 'fault-finding-repairs',
    title: 'Fault Finding & Repairs',
    description: 'Rapid identification and safe repair of flickering lights, tripping fuses, and faulty appliances.',
    detailedDescription: 'Tripping fuses or persistent power failures can be incredibly frustrating and potentially dangerous. Using calibrated precision diagnostic tools, we identify the exact root cause of the fault within minutes to safely reinstate your power.',
    iconName: 'Wrench',
  },
  {
    id: 'sockets-lighting',
    title: 'Sockets & Lighting',
    description: 'Installation of stylish downlights, USB sockets, dimmer switches, and outbuilding power connections.',
    detailedDescription: 'Enhance your living space with smart lighting, sleek modern chrome or brass sockets with integrated fast USB-charging, ambient LED strip features, or fully weatherproof exterior sockets to run garden equipment.',
    iconName: 'Lightbulb',
  },
  {
    id: 'pat-testing',
    title: 'PAT Testing',
    description: 'Portable Appliance Testing for landlords, local businesses, and offices to ensure statutory safety compliance.',
    detailedDescription: 'Ensure your business or rental property complies with Health & Safety laws. We provide thorough inspection and testing of all plug-in appliances, complete with detailed itemised logs, pass/fail labels, and compliance certificates.',
    iconName: 'CheckSquare',
  },
  {
    id: 'security-lighting-cctv',
    title: 'Security Lighting & CCTV',
    description: 'Smart security camera systems and motion-detection floodlights to deter intruders and protect your property.',
    detailedDescription: 'Secure your family and home with intelligent security solutions. We install ultra-bright, low-consumption LED security floodlights and state-of-the-art high-definition CCTV camera systems that send real-time alerts straight to your smartphone.',
    iconName: 'Eye',
  },
  {
    id: 'commercial-electrical-work',
    title: 'Commercial Electrical Work',
    description: 'Comprehensive design, three-phase wiring, maintenance, and emergency light testing for businesses.',
    detailedDescription: 'We deliver professional commercial services tailored specifically to restaurants, offices, retail spaces, and industrial units. From three-phase distribution installs to emergency light testing and scheduled maintenance contracts.',
    iconName: 'Briefcase',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    location: 'Sutton Coldfield, Birmingham',
    rating: 5,
    text: 'PowerSafe upgraded our old fuse box to a modern fire-rated consumer unit. David was extremely polite, arrived exactly on time, laid down protective flooring sheets, and left the cupboard cleaner than it was before! Completely stress-free experience, couldn\'t recommend them enough.',
    date: '10 May 2026',
  },
  {
    id: 't2',
    name: 'Mark Thompson',
    location: 'Solihull, Birmingham',
    rating: 5,
    text: 'Had an EV charger installed on our driveway. The advice given beforehand was incredibly helpful and the installation was extremely neat, with the cable routed beautifully under the floorboards rather than exposed on the outside walls. Exceptional skill and detailing.',
    date: '28 April 2026',
  },
  {
    id: 't3',
    name: 'Amara Patel',
    location: 'Edgbaston, Birmingham',
    rating: 5,
    text: 'Our ring circuit kept tripping every time the boiler kicked in. David diagnosed the faulty wiring route behind the kitchen tiles and repaired it with minimum disruption. He is an outstanding fault finder and explained exactly what the issue was. Fantastic value!',
    date: '15 April 2026',
  },
  {
    id: 't4',
    name: 'James Connor',
    location: 'Harborne, Birmingham',
    rating: 5,
    text: 'Required a landlord PAT testing and safety certificate for my rental flat. Exceptionally responsive over email, came out within 48 hours, tested everything diligently, and sent the PDF certificates by that evening. A top-tier professional service.',
    date: '02 April 2026',
  },
  {
    id: 't5',
    name: 'Linda & Robert',
    location: 'Moseley, Birmingham',
    rating: 5,
    text: 'Fabulous full garden LED lighting design installed by PowerSafe. The house now looks modern and inviting, and we feel much safer at night. The smart sensors work beautifully. 5-star work!',
    date: '20 March 2026',
  },
  {
    id: 't6',
    name: 'Gareth Evans',
    location: 'Halesowen, Birmingham',
    rating: 4,
    text: 'Great experience using PowerSafe for our office rewiring project. Minimal disruption to our day-to-day work, fully accredited, and quick turnaround. Very transparent pricing with no nasty hidden surprises at the end.',
    date: '11 March 2026',
  },
  {
    id: 't7',
    name: 'Chloe Matthews',
    location: 'Kings Heath, Birmingham',
    rating: 5,
    text: 'David came out within 45 minutes on a Sunday night when our fuseboard started sparkling and cutting our heating off. He resolved the burnt neutral wire in no time and saved us from a freezing night! True emergency savior.',
    date: '01 March 2026',
  },
  {
    id: 't8',
    name: 'Raj Singh',
    location: 'West Bromwich',
    rating: 5,
    text: 'Professional, courteous, and efficient. PowerSafe installed outdoor sockets and upgraded our garage fuse box. Everything works flawlessly and the price match was superb. Will definitely use again.',
    date: '18 February 2026',
  },
  {
    id: 't9',
    name: 'Fiona Gallagher',
    location: 'Bournville, Birmingham',
    rating: 5,
    text: 'I hired PowerSafe to fit 12 dimmable LED ceiling downlights in our kitchen extension. Exceptionally neat work and the advice on color temperatures (warm white vs cool) was spot-on. It has completely transformed the room.',
    date: '04 February 2026',
  },
];

export const AREAS: AreaItem[] = [
  { id: 'a1', name: 'Birmingham City Centre', postcodePrefix: 'B1 - B5', county: 'West Midlands', distanceMiles: 1.2 },
  { id: 'a2', name: 'Sutton Coldfield', postcodePrefix: 'B72 - B76', county: 'West Midlands', distanceMiles: 7.5 },
  { id: 'a3', name: 'Solihull', postcodePrefix: 'B90 - B94', county: 'West Midlands', distanceMiles: 8.1 },
  { id: 'a4', name: 'Edgbaston', postcodePrefix: 'B15', county: 'West Midlands', distanceMiles: 2.0 },
  { id: 'a5', name: 'Harborne', postcodePrefix: 'B17', county: 'West Midlands', distanceMiles: 3.4 },
  { id: 'a6', name: 'Moseley', postcodePrefix: 'B13', county: 'West Midlands', distanceMiles: 2.8 },
  { id: 'a7', name: 'Kings Heath', postcodePrefix: 'B14', county: 'West Midlands', distanceMiles: 3.9 },
  { id: 'a8', name: 'Bournville', postcodePrefix: 'B30', county: 'West Midlands', distanceMiles: 4.8 },
  { id: 'a9', name: 'Halesowen', postcodePrefix: 'B62 - B63', county: 'West Midlands', distanceMiles: 8.5 },
  { id: 'a10', name: 'West Bromwich', postcodePrefix: 'B70 - B71', county: 'West Midlands', distanceMiles: 6.2 },
  { id: 'a11', name: 'Dudley', postcodePrefix: 'DY1 - DY3', county: 'West Midlands', distanceMiles: 10.2 },
  { id: 'a12', name: 'Walsall', postcodePrefix: 'WS1 - WS5', county: 'West Midlands', distanceMiles: 9.8 },
  { id: 'a13', name: 'Stourbridge', postcodePrefix: 'DY8', county: 'West Midlands', distanceMiles: 12.5 },
  { id: 'a14', name: 'Erdington', postcodePrefix: 'B23 - B24', county: 'West Midlands', distanceMiles: 5.0 },
  { id: 'a15', name: 'Selly Oak', postcodePrefix: 'B29', county: 'West Midlands', distanceMiles: 4.1 },
  { id: 'a16', name: 'Handsworth', postcodePrefix: 'B19 - B21', county: 'West Midlands', distanceMiles: 3.1 },
  { id: 'a17', name: 'Shirley', postcodePrefix: 'B90', county: 'West Midlands', distanceMiles: 6.9 },
  { id: 'a18', name: 'Aston', postcodePrefix: 'B6', county: 'West Midlands', distanceMiles: 2.5 },
  { id: 'a19', name: 'Perry Barr', postcodePrefix: 'B42', county: 'West Midlands', distanceMiles: 4.3 },
  { id: 'a20', name: 'Castle Bromwich', postcodePrefix: 'B36', county: 'West Midlands', distanceMiles: 6.0 },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Modern RCD Fuse Board Upgrade',
    category: 'consumer-units',
    imageUrl: metalConsumerUnitWithSpd,
    description: 'Replaced a dangerous 1980s plastic rewirable fuseboard with a fully fire-retardant metal consumer unit containing global SPDs and dual safety RCDs.',
  },
  {
    id: 'g2',
    title: 'Zappi Smart EV Charger Installation',
    category: 'ev-chargers',
    imageUrl: zappiSmartEvChargerInstallation,
    description: 'Neat driveway installation of a 7.2 kW Zappi Eco-Smart Charger, linked to the client\'s solar panels to execute charging using surplus solar power.',
  },
  {
    id: 'g3',
    title: 'Kitchen extension LED downlighting',
    category: 'lighting',
    imageUrl: kitchenExtensionLedDownlighting,
    description: 'A grid of 12 fire-rated dimmable LED spotlight modules providing bright, uniform illumination for meal preparations and soft, warm ambient loops.',
  },
  {
    id: 'g4',
    title: 'High-Level Conduit Industrial Wiring',
    category: 'rewires',
    imageUrl: electricalWork,
    description: 'Galvanised steel conduits configured perfectly for absolute durability in a newly built mechanical workshop near Castle Bromwich.',
  },
  {
    id: 'g5',
    title: 'Premium Brushed Chrome Sockets',
    category: 'lighting',
    imageUrl: premiumBrushedChromeSockets,
    description: 'Swapped all generic white sockets in a living area for premium brushed steel plates with integrated fast-charge Type-C and Type-A USB docks.',
  },
  {
    id: 'g6',
    title: 'Wallbox Pulsar Plus Install',
    category: 'ev-chargers',
    imageUrl: wallboxPulsarPlusInstall,
    description: 'Sleek, compact EV charger installation with subtle, discrete armored cable routing passing under block paving paths.',
  },
  {
    id: 'g7',
    title: 'Full Victorian Home Rewire',
    category: 'rewires',
    imageUrl: electricalWork,
    description: 'Complete top-to-bottom rewrite of a three-story Victorian terraced home, including chasing plaster, run testing, and fitting 48 terminal sockets.',
  },
  {
    id: 'g8',
    title: 'Metal Consumer Unit with SPD',
    category: 'consumer-units',
    imageUrl: metalConsumerUnitWithSpd,
    description: 'NICEIC-approved dual RCD protective split consumer unit fitted for a local commercial retail outlet.',
  },
  {
    id: 'g9',
    title: 'Ambient Outdoor Garden Luminaire',
    category: 'lighting',
    imageUrl: ambientOutdoorGardenLuminaire,
    description: 'Low-voltage garden landscape lighting setup highlighting mature trees and patio slabs, controlled via a mobile client application.',
  }
];
