export type IconName =
  | "award"
  | "briefcase"
  | "cake"
  | "chef"
  | "clock"
  | "gem"
  | "hotel"
  | "map"
  | "party"
  | "shield"
  | "sparkles"
  | "utensils"
  | "users";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Menus", href: "#menus" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export const images = {
  hero: {
    src: "/images/hero.png",
    alt: "Luxury restaurant dining room prepared for an elegant catered evening",
  },
  plated: {
    src: "/images/plated.png",
    alt: "Chef plating premium food for a catered event",
  },
  wedding: {
    src: "/images/wedding.png",
    alt: "Luxury wedding dining table with floral arrangements",
  },
  corporate: {
    src: "/images/corporate.png",
    alt: "Corporate catering buffet with refined service presentation",
  },
  birthday: {
    src: "/images/birthday.png",
    alt: "Celebration cake and dessert table for a private event",
  },
  festive: {
    src: "/images/festive.png",
    alt: "Festive multi-course food spread for a special event",
  },
  dining: {
    src: "/images/dining.png",
    alt: "Premium hotel restaurant interior with warm lighting",
  },
  quality: {
    src: "/images/quality.png",
    alt: "Professional chef preparing food in a hotel kitchen",
  },
  menus: {
    src: "/images/menus.png",
    alt: "Curated catering menu spread with fresh dishes",
  },
};

export const cateringBullets = [
  "Luxury outdoor catering for weddings and large-scale events",
  "Corporate catering for meetings, conferences, and office functions",
  "Banquet dining and event support at Kans One Hotel",
  "Custom menus for birthdays, private parties, and festive celebrations",
];

export const trustCards = [
  {
    title: "Consistent Taste",
    description: "Reliable flavour across large guest counts and high-volume service.",
    icon: "utensils" as IconName,
  },
  {
    title: "Kitchen Discipline",
    description: "Clean, structured systems that support calm event execution.",
    icon: "shield" as IconName,
  },
  {
    title: "Premium Presentation",
    description: "Professional buffet styling, plated service, and refined details.",
    icon: "sparkles" as IconName,
  },
  {
    title: "Time-Sensitive Service",
    description: "Reliable planning for weddings, corporate events, and private gatherings.",
    icon: "clock" as IconName,
  },
  {
    title: "Event Experience",
    description: "Hands-on hospitality experience across social and business occasions.",
    icon: "users" as IconName,
  },
];

export const serviceCards = [
  {
    title: "Luxury Wedding Catering",
    description: "Elegant menus, polished service, and memorable dining for wedding celebrations.",
    image: images.wedding,
    icon: "gem" as IconName,
  },
  {
    title: "Corporate Catering Services",
    description: "Structured food service for meetings, conferences, launches, and office events.",
    image: images.corporate,
    icon: "briefcase" as IconName,
  },
  {
    title: "Birthday & Private Party Catering",
    description: "Custom food experiences for intimate gatherings, birthdays, and family events.",
    image: images.birthday,
    icon: "cake" as IconName,
  },
  {
    title: "Festive & Special Event Catering",
    description: "Seasonal menus and generous spreads for festive, cultural, and milestone events.",
    image: images.festive,
    icon: "party" as IconName,
  },
];

export const featureSections = [
  {
    id: "dining",
    eyebrow: "Hotel Dining",
    title: "All-Day Dining at\nKans One Hotel, Pallavaram",
    body: "Lerk Foods operates the dining experience at Kans One Hotel, serving guests and visitors throughout the day.",
    bullets: [
      "Breakfast, lunch, and dinner menus",
      "Clean, consistent, and well-prepared food",
      "Suitable for hotel guests, business travellers, and walk-in diners",
    ],
    cta: "Explore Dining",
    image: images.dining,
    icon: "hotel" as IconName,
    bg: "midnight",
  },
  {
    id: "quality",
    eyebrow: "Kitchen Standards",
    title: "Our Approach to\nFood Quality",
    body: "Lerk Foods combines culinary precision with hotel-level kitchen systems to deliver consistent, high-quality catering and dining experiences in Chennai.",
    bullets: [
      "Ingredient selection focused on freshness and reliability",
      "Standardised recipes to maintain taste consistency",
      "Controlled batch cooking for large events",
      "Professional plating and buffet styling",
      "Calm execution under pressure",
    ],
    badge: "QUALITY YOU CAN TRUST",
    image: images.quality,
    icon: "chef" as IconName,
    bg: "graphite",
  },
  {
    id: "menus",
    eyebrow: "Menu Curation",
    title: "Curated Menus\nfor Every Event",
    body: "Our menus are designed to balance flavour, variety, and service practicality.",
    bullets: [
      "South Indian and North Indian options",
      "Multi-cuisine selections",
      "Customisable catering menus",
      "Event-specific menu planning",
    ],
    cta: "View Full Menu",
    image: images.menus,
    icon: "utensils" as IconName,
    bg: "ruby",
  },
];

export const locationAreas = [
  "Pallavaram",
  "Chromepet",
  "Airport zone",
  "South Chennai",
  "Corporate hubs and residential areas",
];

export const stats = [
  { value: 10, suffix: "+", label: "Years of Catering Excellence" },
  { value: 500, suffix: "+", label: "Events Completed" },
  { value: 50, suffix: "K+", label: "Guests Served" },
  { value: 100, suffix: "%", label: "Commitment to Quality" },
];

export const testimonials = [
  {
    quote:
      "The food, service, and overall experience were exceptional. Our guests are still talking about it.",
    name: "Priya & Arjun",
    role: "Wedding Celebration",
  },
  {
    quote:
      "Lerk Foods handled our corporate event seamlessly. Punctual, professional, and the food was excellent.",
    name: "Ravi Menon",
    role: "Operations Manager",
  },
  {
    quote:
      "From planning to execution, everything was perfect. Highly recommended for any special occasion.",
    name: "Sneha Reddy",
    role: "Private Event",
  },
];

export const faqs = [
  {
    question: "Do you provide outdoor catering?",
    answer:
      "Yes. Lerk Foods provides outdoor catering for weddings, corporate events, birthdays, private parties, festive celebrations, and large-scale gatherings.",
  },
  {
    question: "What catering services does Lerk Foods provide in Chennai?",
    answer:
      "Lerk Foods provides luxury outdoor catering, wedding catering, corporate catering, banquet dining support, birthday catering, festive menus, and private event catering in Chennai.",
  },
  {
    question: "Can I customise the catering menu?",
    answer:
      "Yes. Menus can be customised by cuisine preference, event type, guest count, service style, and practical requirements for the venue.",
  },
  {
    question: "Do you provide catering for corporate events in Chennai?",
    answer:
      "Yes. Lerk Foods handles corporate catering for meetings, conferences, office functions, product launches, and formal business events in Chennai.",
  },
  {
    question: "Can Lerk Foods handle large-scale banquet and event catering?",
    answer:
      "Yes. Lerk Foods supports large-scale banquet and event catering with standardised recipes, controlled batch cooking, and structured service coordination.",
  },
];

export const footerDetails = {
  name: "Lerk Foods",
  address: "Kans One Hotel, 12 GST Road, Pallavaram, Chennai - 600043",
  email: "hello@lerkfoods.com",
  website: "www.lerkfoods.com",
};
