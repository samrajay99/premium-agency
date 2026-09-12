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
      "Exclusive high-profile VIP model escorts in Hyderabad offering royal luxury outcall service for private dates and elite gatherings.",
    intro:
      "Our VIP Profile category represents top-tier Mumbai fashion models, high-fashion companions, and elite beauties available for discerning gentlemen in 5-star hotels and private suites.",
    relatedCategorySlugs: ["celebrity-companion", "russian-escorts", "elite-vip"],
    relatedLocationSlugs: ["banjara-hills", "jubilee-hills", "hitech-city"],
    faqs: [
      { question: "How to book a VIP companion?", answer: "Call or WhatsApp our 24/7 concierge desk for instant profile availability and booking confirmation." },
      { question: "What are the rates for VIP companions?", answer: "VIP profile rates range from ₹18,000 to ₹45,000+ depending on session duration and package type." },
    ],
  },
  {
    slug: "celebrity-companion",
    name: "Celebrity Companion",
    title: "Celebrity & Glamour Companions in Hyderabad",
    description:
      "Glamorous celebrity companions and fashion models in Hyderabad for dinner dates, 5-star hotel visits, and exclusive parties.",
    intro:
      "Celebrity companions bring unmatched aura, grace, and modern glamour for social engagements, executive dinners, and private meetings in Jubilee Hills and Banjara Hills.",
    relatedCategorySlugs: ["vip-profile", "elite-vip"],
    relatedLocationSlugs: ["jubilee-hills", "banjara-hills", "gachibowli"],
    faqs: [
      { question: "Can celebrity companions attend dinner dates?", answer: "Yes, our celebrity companions are poised, well-spoken, and experienced in high-profile social settings." },
    ],
  },
  {
    slug: "russian-escorts",
    name: "Russian Escorts",
    title: "Russian & International Escorts in Hyderabad",
    description:
      "Exquisite Russian and international model escorts in Hyderabad offering world-class luxury companionship.",
    intro:
      "Explore 100% verified Russian and European companions in Hyderabad with breathtaking looks, radiant skin, and unmatched hospitality for corporate travelers and luxury connoisseurs.",
    relatedCategorySlugs: ["vip-profile", "celebrity-companion"],
    relatedLocationSlugs: ["hitech-city", "gachibowli", "madhapur"],
    faqs: [
      { question: "Are Russian escorts available for outcalls?", answer: "Yes, available for prompt 30-45 minute outcalls to all 5-star hotels and luxury suites across Hyderabad." },
      { question: "Do Russian escorts speak English?", answer: "Yes, all our international companions are fluent in English for effortless and delightful conversation." },
    ],
  },
  {
    slug: "elite-vip",
    name: "Elite VIP",
    title: "Elite VIP Escort Service in Hyderabad",
    description:
      "Top-rated elite VIP companions and modern models in Gachibowli, Hitech City, and financial district.",
    intro:
      "Curated for business leaders, entrepreneurs, and luxury enthusiasts who value sophisticated conversation, passionate chemistry, and total privacy.",
    relatedCategorySlugs: ["vip-profile", "premium-companionship"],
    relatedLocationSlugs: ["gachibowli", "hitech-city", "madhapur"],
    faqs: [
      { question: "Is advance booking required for Elite VIP models?", answer: "We recommend 1-2 hours advance notice for seamless scheduling of high-demand VIP companions." },
    ],
  },
  {
    slug: "south-indian",
    name: "South Indian",
    title: "South Indian Escorts & Models in Hyderabad",
    description:
      "Authentic, gorgeous South Indian beauties and college models offering warm, affectionate companionship in Hyderabad.",
    intro:
      "South Indian models combine traditional charm with friendly, cheerful energy and caring hospitality for unforgettable intimate experiences.",
    relatedCategorySlugs: ["college-escorts", "budget-friendly", "premium-companionship"],
    relatedLocationSlugs: ["kukatpally", "madhapur", "miyapur"],
    faqs: [
      { question: "Which languages do South Indian models speak?", answer: "Telugu, Hindi, and English fluently." },
    ],
  },
  {
    slug: "college-escorts",
    name: "College Escorts",
    title: "College Escorts & Young Companions in Hyderabad",
    description:
      "Sweet, youthful, and lively college companions in Kondapur, Begumpet, and Miyapur offering bubbly and stress-free company.",
    intro:
      "Discover charming college-age companions in Hyderabad known for their youthful enthusiasm, natural beauty, and warm friendly nature.",
    relatedCategorySlugs: ["south-indian", "budget-friendly", "independent-escorts"],
    relatedLocationSlugs: ["kondapur", "begumpet", "miyapur"],
    faqs: [
      { question: "Are college companions 18+ and verified?", answer: "Yes, all companions on our platform are verified adults aged 18 and above with verified legal documentation." },
    ],
  },
  {
    slug: "budget-friendly",
    name: "Budget Friendly",
    title: "Budget Friendly Escorts in Hyderabad",
    description:
      "Affordable, hygienic, and genuine incall and outcall companion services in Hyderabad starting from ₹10,000.",
    intro:
      "Top quality companionship tailored for clients seeking exceptional value without compromising hygiene, beauty, or discretion.",
    relatedCategorySlugs: ["south-indian", "independent-escorts"],
    relatedLocationSlugs: ["miyapur", "kukatpally", "secunderabad"],
    faqs: [
      { question: "Are incall apartments private and hygienic?", answer: "Yes, all private incall spaces are fully sanitized, secure, and discreet." },
    ],
  },
  {
    slug: "premium-companionship",
    name: "Premium Companionship",
    title: "Premium Companionship in Hyderabad",
    description:
      "Sophisticated, high-class companions in Ameerpet, Gachibowli, and Jubilee Hills for discerning gentlemen.",
    intro:
      "Refined companions with polite etiquette and magnetic charm for romantic dinner evenings, weekend escapes, and luxury hotel dates.",
    relatedCategorySlugs: ["vip-profile", "elite-vip"],
    relatedLocationSlugs: ["ameerpet", "gachibowli", "jubilee-hills"],
    faqs: [
      { question: "Are all photographs genuine?", answer: "Yes, all photos are 100% genuine and verified by our agency audit team." },
    ],
  },
  {
    slug: "independent-escorts",
    name: "Independent Escorts",
    title: "Independent Escorts in Hyderabad",
    description:
      "Direct, self-managed independent escorts in Hyderabad offering unhurried, discreet companionship and personalized service.",
    intro:
      "Connect with confident, self-managed independent companions across Madhapur, Secunderabad, and Begumpet for private incall and outcall meetings.",
    relatedCategorySlugs: ["budget-friendly", "premium-companionship", "college-escorts"],
    relatedLocationSlugs: ["madhapur", "secunderabad", "kukatpally"],
    faqs: [
      { question: "How to book an independent escort?", answer: "Contact our concierge or direct profile number via WhatsApp or call for immediate booking." },
    ],
  },
];
