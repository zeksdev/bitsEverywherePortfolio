// Presentation configuration
export const SLIDE_CONFIG = {
  totalSlides: 8,
  slideDurations: {
    0: 15000,  // Slide 1: Naslov/Uvod
    1: 15000,  // Slide 2: Pregled kompanije
    2: 15000,  // Slide 5: myFleet
    3: 15000,  // Slide 6: TempTrack
    4: 15000,  // Slide 7: e-CMR Connect
    5: 15000,  // Slide 8: Sertifikati
    6: 15000,  // Slide 9: Tehnološki stack
    7: 15000,  // Slide 10: Kontakt
  },
  enableAutoAdvance: true,
  enableKeyboardControls: true,
};

// Company information
export const COMPANY_INFO = {
  name: 'bitsEverywhere d.o.o',
  tagline: 'Savremena softverska rešenja za transport i logistiku',
  technologies: ['.NET', 'Azure', 'IoT', 'AI'],
  phone: '+381 63 528 065',
  email: 'office@bitseverywhere.rs',
  location: 'Laze Kostića 11-21000-Novi Sad-Srbija',
  website: 'https://bitseverywhere.com',
};

// Products information
export const PRODUCTS = {
  myFleet: {
    name: 'myFleet',
    tagline: 'Upravljanje Transportom',
    color: '#1E88E5',
    features: [
      { icon: 'FaBolt', text: 'Analitika Flote u Realnom Vremenu' },
      { icon: 'FaMapMarkedAlt', text: 'Podsetnici' },
      { icon: 'FaChartLine', text: 'Upravljanje troškovima voznog parka' },
      { icon: 'FaCloud', text: 'Cloud-baziran SaaS' },
    ],
  },
  tempTrack: {
    name: 'TempTrack',
    tagline: 'Monitoring temperature i vlažnosti vazduha u skladištima',
    color: '#00BCD4',
    features: [
      { icon: 'FaBroadcastTower', text: 'LoRaWAN bežična tehnologija' },
      { icon: 'FaThermometerHalf', text: 'Praćenje temperatura u realnom vremenu' },
      { icon: 'FaChartBar', text: 'Analitika i izveštavanje' },
      { icon: 'FaMobileAlt', text: 'Mobilna aplikacija' },
    ],
  },
  eCMR: {
    name: 'e-CMR Connect',
    tagline: 'Digitalna Transportna Dokumentacija',
    subtitle: 'Usklađeno. Digitalno. Transparentno.',
    color: '#39FF14',
    features: [
      { icon: 'FaLock', title: 'eIDAS Usklađenost', desc: 'Pravno važeći digitalni potpisi' },
      { icon: 'FaEye', title: 'Vidljivost u Realnom Vremenu', desc: 'Praćenje pošiljki od početka do kraja' },
      { icon: 'FaFileAlt', title: 'Operacije Bez Papira', desc: 'Smanjenje dokumentacione opterećenosti' },
      { icon: 'FaGlobe', title: 'Regionalni Fokus', desc: 'Optimizovano za države zapadnog Balkana' },
    ],
    status: 'Uskoro',
  },
};

// Core competencies
export const COMPETENCIES = [
  {
    title: 'Azure Cloud',
    description: 'Sertifikovani Azure razvoj sa AI-potpomognutim razmeštanjem',
    icon: 'FaCloud',
    color: '#0066CC',
  },
  {
    title: '.NET Razvoj',
    description: 'Ekspertski .NET/C# razvoj za skalabilna rešenja',
    icon: 'FaCog',
    color: '#00D9FF',
  },
  {
    title: 'IoT Rešenja',
    description: 'Full-stack IoT platforme za upravljanje pametnim uređajima',
    icon: 'FaNetworkWired',
    color: '#39FF14',
  },
];

// Certifications
export const CERTIFICATIONS = [
  {
    title: 'Microsoft Certified Azure Developer',
    subtitle: 'Ekspertski Azure cloud razvoj',
    icon: '/microsoft-certified-azure-developer-associate.png',
    color: '#0066CC',
  },
  {
    title: 'Microsoft Certified Azure IoT Developer',
    subtitle: 'Specijalizovana IoT rešenja',
    icon: '/microsoft-certified-azure-iot-developer-specialty.png',
    color: '#39FF14',
  },
  {
    title: 'Microsoft Certified Azure AI Engineer',
    subtitle: 'Napredne AI implementacije',
    icon: '/azure_ai_certificate.png',
    color: '#9C27B0',
  },
  {
    title: 'Neo4j Developer Certification',
    subtitle: 'Ekspertiza graph baza podataka',
    icon: '/neo4j.png',
    color: '#3FB1CE',
  },
];

// Technology Stack
export const TECH_STACK = [
  { name: '.NET & C#', icon: 'FaCog', color: '#512BD4' },
  { name: 'Azure Cloud', icon: 'FaCloud', color: '#0066CC' },
  { name: 'React & Web', icon: 'FaReact', color: '#61DAFB' },
  { name: 'IoT & Edge', icon: 'FaMicrochip', color: '#39FF14' },
  { name: 'AI & ML', icon: 'FaRobot', color: '#9C27B0' },
  { name: 'Databases', icon: 'FaDatabase', color: '#00D9FF' },
];
