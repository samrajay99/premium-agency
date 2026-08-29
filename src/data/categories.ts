export interface CategoryFaq {
  question: string;
  answer: string;
}

export interface DirectoryCategory {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  relatedCategorySlugs: string[];
  relatedLocationSlugs: string[];
  faqs: CategoryFaq[];
}

export const categories: DirectoryCategory[] = [
  {
    slug: "vip-profile",
    name: "VIP Profile",
    title: "VIP Escorts & High-Profile Companions in Hyderabad",
    description:
      "Exclusive high-profile VIP model escorts in Hyderabad offering luxury outcall service for private dates and elite gatherings.",
    intro:
      "Our VIP Profile category represents top-tier models, high-fashion companions, and elite beauties available for discerning gentlemen.",
    relatedCategorySlugs: ["celebrity-companion", "russian-escorts", "elite-vip"],
    relatedLocationSlugs: ["banjara-hills", "jubilee-hills", "hitech-city"],
    faqs: [
      { question: "How to book a VIP companion?", answer: "Call or WhatsApp our concierge manager for rapid booking confirmation." },
    ],
  },
  {
    slug: "celebrity-companion",
    name: "Celebrity Companion",
    title: "Celebrity & Glamour Companions in Hyderabad",
    description:
      "Glamorous celebrity companions and fashion models in Hyderabad for dinner dates, 5-star hotel visits, and parties.",
    intro:
      "Celebrity companions bring unmatched aura, grace, and modern glamour for social and private engagements.",
    relatedCategorySlugs: ["vip-profile", "elite-vip"],
    relatedLocationSlugs: ["jubilee-hills", "banjara-hills", "gachibowli"],
    faqs: [
      { question: "Can celebrity companions attend dinner dates?", answer: "Yes, our celebrity companions are poised and elegant for high-end dining." },
    ],
  },
  {
    slug: "russian-escorts",
    name: "Russian Escorts",
    title: "Russian & International Escorts in Hyderabad",
    description:
      "Exquisite Russian and international model escorts in Hyderabad offering world-class luxury companionship.",
    intro:
      "Explore verified Russian and European companions in Hyderabad with breathtaking looks and charming hospitality.",
    relatedCategorySlugs: ["vip-profile", "celebrity-companion"],
    relatedLocationSlugs: ["hitech-city", "gachibowli", "madhapur"],
    faqs: [
      { question: "Are Russian escorts available for outcalls?", answer: "Yes, available for 5-star hotels and luxury suites across Hyderabad." },
    ],
  },
  {
    slug: "elite-vip",
    name: "Elite VIP",
    title: "Elite VIP Escort Service in Hyderabad",
    description:
      "Top-rated elite VIP companions and modern models in Gachibowli, Hitech City, and financial district.",
    intro:
      "Curated for executives and luxury connoisseurs who value sophisticated conversation and passionate connection.",
    relatedCategorySlugs: ["vip-profile", "premium-companionship"],
    relatedLocationSlugs: ["gachibowli", "hitech-city", "madhapur"],
    faqs: [
      { question: "Is advance booking required?", answer: "1-2 hours advance notice is recommended for VIP profiles." },
    ],
  },
  {
    slug: "south-indian",
    name: "South Indian",
    title: "South Indian Escorts & Models in Hyderabad",
    description:
      "Authentic, gorgeous South Indian beauties and college models offering warm, affectionate companionship in Hyderabad.",
    intro:
      "South Indian models combine traditional charm with friendly, cheerful energy for unforgettable intimate experiences.",
    relatedCategorySlugs: ["budget-friendly", "premium-companionship"],
    relatedLocationSlugs: ["kukatpally", "madhapur", "miyapur"],
    faqs: [
      { question: "Which languages do South Indian models speak?", answer: "Telugu, Hindi, and English." },
    ],
  },
  {
    slug: "budget-friendly",
    name: "Budget Friendly",
    title: "Budget Friendly Escorts in Hyderabad",
    description:
      "Affordable, hygienic, and genuine incall and outcall companion services in Hyderabad starting from ₹8,000.",
    intro:
      "Top quality companionship tailored for clients seeking exceptional value without compromising hygiene or discretion.",
    relatedCategorySlugs: ["south-indian", "independent-escorts"],
    relatedLocationSlugs: ["miyapur", "kukatpally", "secunderabad"],
    faqs: [
      { question: "Are incall apartments private?", answer: "Yes, all incall apartments are 100% private, sanitized, and safe." },
    ],
  },
  {
    slug: "premium-companionship",
    name: "Premium Companionship",
    title: "Premium Companionship in Hyderabad",
    description:
      "Sophisticated, high-class companions in Kondapur, Gachibowli, and Jubilee Hills for discerning gentlemen.",
    intro:
      "Refined companions with polite etiquette and warm charm for romantic evenings and private hotel sessions.",
    relatedCategorySlugs: ["vip-profile", "elite-vip"],
    relatedLocationSlugs: ["kondapur", "gachibowli", "jubilee-hills"],
    faqs: [
      { question: "Are photos genuine?", answer: "All photos are 100% verified and genuine." },
    ],
  },
  {
    slug: "independent-escorts",
    name: "Independent Escorts",
    title: "Independent Escorts in Hyderabad",
    description:
      "Direct, self-managed independent escorts in Hyderabad offering unhurried, discreet companionship.",
    intro:
      "Connect with confident independent escorts across Madhapur, Secunderabad, and Begumpet.",
    relatedCategorySlugs: ["budget-friendly", "premium-companionship"],
    relatedLocationSlugs: ["madhapur", "secunderabad", "kukatpally"],
    faqs: [
      { question: "How to book an independent escort?", answer: "Call or WhatsApp the direct contact number displayed on the profile." },
    ],
  },
];
