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
  { label: "Contact Us", href: "/contact" },
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
  kansOne: {
    src: "/images/kans-one.png",
    alt: "Kans One Hotel dining space in Pallavaram",
  },
  quality: {
    src: "/images/quality.png",
    alt: "Professional chef preparing food in a hotel kitchen",
  },
  menus: {
    src: "/images/menus.png",
    alt: "Curated catering menu spread with fresh dishes",
  },
  betrothal: {
    src: "/images/betrothal.png",
    alt: "Luxury Indian engagement ceremony dining setting",
  },
  conference: {
    src: "/images/conference.png",
    alt: "Corporate conference dining room and banquet layout",
  },
  outdoor: {
    src: "/images/outdoor.png",
    alt: "Luxurious outdoor buffet catering in garden setting at dusk",
  },
  meeting: {
    src: "/images/meeting.png",
    alt: "Gourmet coffee break setup in corporate boardroom",
  },
  inroom: {
    src: "/images/inroom.png",
    alt: "Elegant in-room dining trolley with gourmet food service",
  },
  consistent_taste: {
    src: "/images/consistent_taste.png",
    alt: "Freshly prepared gourmet dishes showcasing consistent taste",
  },
  kitchen_discipline: {
    src: "/images/kitchen_discipline.jpg",
    alt: "Structured and clean luxury catering kitchen staff",
  },
  premium_presentation: {
    src: "/images/premium_presentation.png",
    alt: "Beautiful high-end buffet table setup",
  },
  timely_sensitive: {
    src: "/images/timely_sensitive.png",
    alt: "Punctual food delivery and elegant table service setup",
  },
  event_experience: {
    src: "/images/event_experience.png",
    alt: "Hospitality staff serving guests at a premium social event",
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
    image: images.consistent_taste,
  },
  {
    title: "Kitchen Discipline",
    description: "Clean, structured systems that support calm event execution.",
    icon: "shield" as IconName,
    image: images.kitchen_discipline,
  },
  {
    title: "Premium Presentation",
    description: "Professional buffet styling, plated service, and refined details.",
    icon: "sparkles" as IconName,
    image: images.premium_presentation,
  },
  {
    title: "Time-Sensitive Service",
    description: "Reliable planning for weddings, corporate events, and private gatherings.",
    icon: "clock" as IconName,
    image: images.timely_sensitive,
  },
  {
    title: "Event Experience",
    description: "Hands-on hospitality experience across social and business occasions.",
    icon: "users" as IconName,
    image: images.event_experience,
  },
];

export const serviceCards = [
  {
    title: "Weddings",
    description: "Elegant menus, custom styling, and seamless banquet service for your special day.",
    image: images.wedding,
    icon: "gem" as IconName,
  },
  {
    title: "Birthdays",
    description: "Vibrant menus, themed food stalls, and creative dessert setups for memorable celebrations.",
    image: images.birthday,
    icon: "cake" as IconName,
  },
  {
    title: "Bethrotals",
    description: "Refined traditional and contemporary dining experiences tailored for engagement ceremonies.",
    image: images.betrothal,
    icon: "party" as IconName,
  },
  {
    title: "Conferences",
    description: "Large-scale catering with structured timing, break-out snacks, and flawless executive service.",
    image: images.conference,
    icon: "briefcase" as IconName,
  },
  {
    title: "Outdoor Catering",
    description: "Full-service mobile kitchens delivering hot, fresh, and exceptionally styled spreads anywhere.",
    image: images.outdoor,
    icon: "utensils" as IconName,
  },
  {
    title: "Corporate Meetings",
    description: "Gourmet coffee breaks, plated lunches, and premium platters designed to fit business flows.",
    image: images.meeting,
    icon: "users" as IconName,
  },
  {
    title: "In room dinings",
    description: "Upscale in-room menu options and prompt, hotel-standard room service at Kans One.",
    image: images.inroom,
    icon: "hotel" as IconName,
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
    image: images.kansOne,
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
    question: "What catering services does Lerk Foods provide in Chennai?",
    answer:
      "Lerk Foods provides wedding catering, corporate catering, birthday and private event catering, and festive event catering from Kans One Hotel in Pallavaram.",
  },
  {
    question: "Where is Lerk Foods located?",
    answer: "Lerk Foods operates from Kans One Hotel in Pallavaram, Chennai.",
  },
  {
    question: "Do you provide outdoor catering?",
    answer:
      "Yes, Lerk Foods specialises in luxury outdoor catering for weddings, corporate events, and private functions.",
  },
  {
    question: "Can I customise the catering menu?",
    answer:
      "Yes, menus can be customised based on event type, guest count, and preferences.",
  },
  {
    question: "Do you provide catering for corporate events in Chennai?",
    answer:
      "Yes, Lerk Foods offers structured corporate catering with reliable service and consistent food quality.",
  },
  {
    question: "What are the best luxury outdoor catering services in Chennai?",
    answer:
      "Lerk Foods offers luxury outdoor catering services in Chennai for weddings, corporate gatherings, private celebrations, and festive events. Operating from Kans One Hotel, Lerk Foods focuses on refined food quality, elegant presentation, professional buffet setups, and structured event execution designed to create a premium guest experience.",
  },
  {
    question: "Does Lerk Foods provide wedding catering in Chennai?",
    answer:
      "Yes. Lerk Foods provides wedding catering services in Chennai with customised menus, outdoor buffet setups, banquet dining support, and large-scale event execution. The catering experience is designed around flavour consistency, hospitality, presentation quality, and smooth service flow for both intimate weddings and grand celebrations.",
  },
  {
    question: "Do you offer corporate catering services near Chennai Airport and Pallavaram?",
    answer:
      "Yes. Lerk Foods provides corporate catering services near Chennai Airport, Pallavaram, and surrounding business zones. Services include buffet catering, meeting refreshments, conference dining, team lunches, and corporate event catering with timely service, structured kitchen operations, and professionally curated menus.",
  },
  {
    question: "Can Lerk Foods handle large-scale banquet and event catering?",
    answer:
      "Yes. Lerk Foods is equipped to handle large-scale banquet and outdoor catering events with organised kitchen systems, batch-controlled cooking, and coordinated service execution. The team is experienced in managing weddings, corporate functions, festive events, and private gatherings while maintaining food consistency and presentation quality.",
  },
  {
    question: "What types of events does Lerk Foods cater for?",
    answer:
      "Lerk Foods provides catering services for weddings, corporate events, birthdays, engagement ceremonies, family gatherings, festive celebrations, banquet events, and private parties in Chennai. Menus and service styles can be customised based on the event type, guest count, and dining preferences.",
  },
  {
    question: "What makes Lerk Foods different from other catering services in Chennai?",
    answer:
      "Lerk Foods combines culinary quality with hotel-level operational discipline. Operating from Kans One Hotel, the brand focuses on ingredient quality, flavour consistency, presentation standards, hygiene, and structured service execution. This balance allows Lerk Foods to deliver a refined catering experience across different event formats.",
  },
  {
    question: "Does Lerk Foods prepare food from a professional hotel kitchen?",
    answer:
      "Yes. Lerk Foods operates from the kitchen facilities at Kans One Hotel. This enables the team to maintain controlled preparation processes, food hygiene standards, consistent cooking methods, and efficient catering execution for both hotel dining and outdoor events.",
  },
  {
    question: "How does Lerk Foods maintain food quality for large events?",
    answer:
      "Lerk Foods maintains food quality through structured kitchen workflows, standardised recipes, controlled batch cooking, ingredient selection, and coordinated service management. These systems help maintain consistency in taste, freshness, temperature, and presentation even during large-scale catering events and banquet services.",
  },
  {
    question: "Can catering menus be customised for weddings, birthdays, and corporate events?",
    answer:
      "Yes. Lerk Foods offers customised catering menus for weddings, birthdays, corporate functions, festive events, and private gatherings. Clients can choose from multiple cuisine styles, buffet formats, and menu combinations based on the scale and tone of the event.",
  },
  {
    question: "Does Kans One Hotel have all-day dining operated by Lerk Foods?",
    answer:
      "Yes. The all-day dining experience at Kans One Hotel is operated by Lerk Foods. Guests can enjoy breakfast, lunch, dinner, and curated dining options prepared with a focus on consistency, quality, and hospitality.",
  },
  {
    question: "Which catering service in Chennai offers both banquet dining and outdoor catering?",
    answer:
      "Lerk Foods provides both banquet dining and luxury outdoor catering services in Chennai. The brand caters to weddings, business events, birthdays, festive gatherings, and private celebrations with professionally managed food service and event dining solutions.",
  },
  {
    question: "Where can I find premium catering services in Pallavaram, Chennai?",
    answer:
      "Lerk Foods, located at Kans One Hotel, offers premium catering services in Pallavaram for weddings, corporate events, banquet functions, birthdays, and outdoor celebrations. The focus is on refined menus, reliable execution, and elevated presentation.",
  },
  {
    question: "Who provides corporate buffet catering in Chennai?",
    answer:
      "Lerk Foods provides corporate buffet catering services in Chennai for meetings, conferences, office events, and professional gatherings. The catering service is designed for timely execution, organised setup, balanced menus, and consistent food quality suitable for corporate environments.",
  },
  {
    question: "Does Lerk Foods provide catering for birthdays and private parties?",
    answer:
      "Yes. Lerk Foods provides catering services for birthdays, anniversary celebrations, house parties, and private gatherings in Chennai. Menus can be tailored based on the guest profile, cuisine preference, and style of event, with options for buffet dining and curated food presentation.",
  },
  {
    question: "What food options are available at Kans One Hotel in Pallavaram?",
    answer:
      "The dining experience at Kans One Hotel, operated by Lerk Foods, includes breakfast, lunch, dinner, buffet options, and curated multi-cuisine dishes. Guests and visitors can enjoy consistent, well-prepared meals throughout the day in a comfortable dining environment.",
  },
];

export const footerDetails = {
  name: "Lerk Foods",
  address: "Kans One Hotel, 12 GST Road, Pallavaram, Chennai - 600043",
  email: "hello@lerkfoods.com",
  website: "www.lerkfoods.com",
};
