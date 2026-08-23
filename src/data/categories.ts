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
    slug: "premium-companionship",
    name: "Premium Companionship",
    title: "Premium Companionship Directory in Hyderabad",
    description:
      "Browse fictional premium companionship listings in Hyderabad, written for dinners, hotels, and discreet meetings.",
    intro:
      "This category groups demo listings that emphasise presentation, punctuality, and hotel or dining settings. It is a navigation label, not a regulated service class.",
    relatedCategorySlugs: ["lifestyle-companionship", "independent-professionals"],
    relatedLocationSlugs: ["gachibowli", "jubilee-hills", "madhapur"],
    faqs: [
      { question: "Does premium mean verified?", answer: "No. Verification is a separate demo badge and is not a quality guarantee." },
    ],
  },
  {
    slug: "independent-professionals",
    name: "Independent Professionals",
    title: "Independent Professionals Directory in Hyderabad",
    description:
      "Independent professional listings in this Hyderabad demo directory, with a focus on low-key meetings.",
    intro:
      "Independent, in this dataset, simply means the listing is tagged that way. It does not describe employment, taxation, or agency relationships.",
    relatedCategorySlugs: ["premium-companionship", "lifestyle-companionship"],
    relatedLocationSlugs: ["banjara-hills", "secunderabad"],
    faqs: [
      { question: "Are these self-employed people?", answer: "The profiles are fictional. Do not infer real employment status." },
    ],
  },
  {
    slug: "models",
    name: "Models",
    title: "Models Directory in Hyderabad",
    description:
      "Editorial and campaign-oriented model listings in this Hyderabad directory demo.",
    intro:
      "The models category is for daytime brand work and studio-oriented copy. It is not a casting network and does not accept applications in this demo.",
    relatedCategorySlugs: ["event-companionship", "premium-companionship"],
    relatedLocationSlugs: ["madhapur", "hitech-city"],
    faqs: [
      { question: "Can I submit a portfolio?", answer: "Not on this demo site. There is no application backend." },
    ],
  },
  {
    slug: "event-companionship",
    name: "Event Companionship",
    title: "Event Companionship Directory in Hyderabad",
    description:
      "Event companionship listings for launches, mixers, and hotel functions in Hyderabad.",
    intro:
      "Event listings are written for product launches, hospitality suites, and functions. They are not staffing contracts.",
    relatedCategorySlugs: ["models", "travel-companionship"],
    relatedLocationSlugs: ["hitech-city", "miyapur", "banjara-hills"],
    faqs: [
      { question: "Do you supply event staff?", answer: "No. This is a static directory demo." },
    ],
  },
  {
    slug: "travel-companionship",
    name: "Travel Companionship",
    title: "Travel Companionship Directory in Hyderabad",
    description:
      "Travel companionship listings covering airport meets and city itineraries in Hyderabad.",
    intro:
      "Travel listings describe itineraries and airport-hotel days. The site does not sell tickets or guided tours.",
    relatedCategorySlugs: ["event-companionship", "lifestyle-companionship"],
    relatedLocationSlugs: ["gachibowli", "kukatpally", "miyapur"],
    faqs: [
      { question: "Is this a tour company?", answer: "No. Treat travel copy as sample directory content." },
    ],
  },
  {
    slug: "lifestyle-companionship",
    name: "Lifestyle Companionship",
    title: "Lifestyle Companionship Directory in Hyderabad",
    description:
      "Lifestyle companionship listings for dining, galleries, and culture-forward evenings in Hyderabad.",
    intro:
      "Lifestyle listings lean toward food, art, and conversation. They are a content grouping, not a membership club.",
    relatedCategorySlugs: ["premium-companionship", "independent-professionals"],
    relatedLocationSlugs: ["jubilee-hills", "banjara-hills", "ameerpet"],
    faqs: [
      { question: "Are these paid memberships?", answer: "There is no membership product in this demo." },
    ],
  },
];
