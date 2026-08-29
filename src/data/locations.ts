export interface LocationFaq {
  question: string;
  answer: string;
}

export interface DirectoryLocation {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  areas: string[];
  featuredProfileSlugs: string[];
  relatedLocationSlugs: string[];
  relatedCategorySlugs: string[];
  faqs: LocationFaq[];
}

export const locations: DirectoryLocation[] = [
  {
    slug: "gachibowli",
    name: "Gachibowli",
    title: "Premium Directory in Gachibowli, Hyderabad",
    description:
      "Explore a curated Hyderabad directory focused on Gachibowli: hotels, business districts, and nearby residential corridors.",
    intro:
      "Gachibowli sits at the western edge of Hyderabad’s IT corridor. This page groups fictional directory listings that mention Gachibowli hotels, conference venues, and evening dining. Use it as a local index, not as a claim that any real agency operates here.",
    areas: ["Financial District", "Nanakramguda", "ORR exit 1", "Gachibowli stadium precinct"],
    featuredProfileSlugs: ["aanya-mehra"],
    relatedLocationSlugs: ["hitech-city", "madhapur", "miyapur"],
    relatedCategorySlugs: ["premium-companionship", "travel-companionship"],
    faqs: [
      { question: "Is this a Gachibowli business listing?", answer: "It is a demo location page for local SEO structure, not a registered office." },
      { question: "Which nearby pages should I read?", answer: "HITEC City and Madhapur share the same western corridor and are linked below." },
    ],
  },
  {
    slug: "madhapur",
    name: "Madhapur",
    title: "Premium Directory in Madhapur, Hyderabad",
    description:
      "Madhapur directory page covering hotel strips, coworking clusters, and evening venues in west Hyderabad.",
    intro:
      "Madhapur is denser than Gachibowli, with a mix of hotels, retail, and offices. This page explains how demo profiles tagged to Madhapur might be discovered, and it links onward to neighbouring areas rather than repeating the same paragraph everywhere.",
    areas: ["Ayyappa Society", "Image Gardens Road", "Madhapur Main Road"],
    featuredProfileSlugs: ["diya-kapoor"],
    relatedLocationSlugs: ["hitech-city", "gachibowli", "kukatpally"],
    relatedCategorySlugs: ["premium-companionship", "models"],
    faqs: [
      { question: "Why is Madhapur separate from HITEC City?", answer: "They overlap in daily life, but distinct URLs help visitors who search by neighbourhood name." },
    ],
  },
  {
    slug: "hitech-city",
    name: "HITEC City",
    title: "Premium Directory in HITEC City, Hyderabad",
    description:
      "HITEC City page for corporate hospitality, product events, and hotel suites in Hyderabad’s technology district.",
    intro:
      "HITEC City is the brand name visitors use for a cluster of offices and hotels. The listings here are written for launches and corporate evenings. Content is unique to this page: it focuses on venue types rather than repeating Gachibowli’s stadium-and-ORR framing.",
    areas: ["Cyber Towers", "Mindspace", "Hitec City Road"],
    featuredProfileSlugs: ["kiara-nair"],
    relatedLocationSlugs: ["madhapur", "gachibowli", "jubilee-hills"],
    relatedCategorySlugs: ["event-companionship", "models"],
    faqs: [
      { question: "Do you have an office in HITEC City?", answer: "This demo has no physical office. Contact details are placeholders." },
    ],
  },
  {
    slug: "jubilee-hills",
    name: "Jubilee Hills",
    title: "Premium Directory in Jubilee Hills, Hyderabad",
    description:
      "Jubilee Hills directory covering dining, galleries, and quieter residential streets in central-west Hyderabad.",
    intro:
      "Jubilee Hills is often associated with restaurants and residential lanes rather than office parks. This page’s listings lean toward lifestyle and conversation-led evenings, which is a different mix from the HITEC City event pages.",
    areas: ["Road No. 36", "Kavuri Hills", "Check Post"],
    featuredProfileSlugs: ["meera-reddy"],
    relatedLocationSlugs: ["banjara-hills", "hitech-city", "ameerpet"],
    relatedCategorySlugs: ["lifestyle-companionship", "premium-companionship"],
    faqs: [
      { question: "Is this a nightlife guide?", answer: "No. It is a directory index with neighbourhood context, not a club guide." },
    ],
  },
  {
    slug: "banjara-hills",
    name: "Banjara Hills",
    title: "Premium Directory in Banjara Hills, Hyderabad",
    description:
      "Banjara Hills page for independent listings, hotel lobbies, and low-key meetings in central Hyderabad.",
    intro:
      "Banjara Hills sits between the older city and the western IT belt. Demo copy here emphasises independent professionals and discreet daytime meetings, which differs from Jubilee Hills’ dining-forward tone.",
    areas: ["Road No. 1", "Road No. 12", "Lake View"],
    featuredProfileSlugs: ["sana-qureshi", "tara-singh"],
    relatedLocationSlugs: ["jubilee-hills", "ameerpet", "secunderabad"],
    relatedCategorySlugs: ["independent-professionals", "event-companionship"],
    faqs: [
      { question: "Are independent listings employees?", answer: "In this demo, independent is only a category name." },
    ],
  },
  {
    slug: "kukatpally",
    name: "Kukatpally",
    title: "Premium Directory in Kukatpally, Hyderabad",
    description:
      "Kukatpally directory page for northwest Hyderabad, including travel-oriented listings and residential catchments.",
    intro:
      "Kukatpally is a large residential and retail zone. This page highlights travel-oriented demo listings and everyday meeting points, rather than the hotel-heavy language used on HITEC City pages.",
    areas: ["KPHB", "JNTU", "Kukatpally Housing Board"],
    featuredProfileSlugs: ["naina-shah"],
    relatedLocationSlugs: ["miyapur", "madhapur", "gachibowli"],
    relatedCategorySlugs: ["travel-companionship", "premium-companionship"],
    faqs: [
      { question: "Is Kukatpally only residential?", answer: "It is mixed. The page mentions housing board areas and travel corridors because that is how visitors describe it." },
    ],
  },
  {
    slug: "kondapur",
    name: "Kondapur",
    title: "Premium Directory in Kondapur, Hyderabad",
    description:
      "Kondapur directory page for residential-tech corridor meetups, quiet hotel lounges, and discreet evenings.",
    intro:
      "Kondapur blends residential life with office campuses and corporate hospitality. The directory treats it as a distinct Hyderabad zone so visitors searching by the local name can find relevant listings without mixing in the bigger western IT corridor.",
    areas: ["Kondapur X Roads", "Serilingampally", "Gandipet approach"],
    featuredProfileSlugs: ["tanvi-iyer"],
    relatedLocationSlugs: ["gachibowli", "madhapur", "miyapur"],
    relatedCategorySlugs: ["premium-companionship", "travel-companionship"],
    faqs: [
      { question: "Why is Kondapur separate?", answer: "It is a well-known local search term that often gets grouped with nearby IT zones. A specific page keeps those searches useful." },
    ],
  },
  {
    slug: "ameerpet",
    name: "Ameerpet",
    title: "Premium Directory in Ameerpet, Hyderabad",
    description:
      "Ameerpet page covering central Hyderabad training districts, theatres, and café meetings.",
    intro:
      "Ameerpet is known for coaching centres and transit. Directory copy here stays modest: coffee, theatre, and central connectivity, which is a different visitor intent from Jubilee Hills dining pages.",
    areas: ["Ameerpet Metro", "SR Nagar", "Punjagutta approach"],
    featuredProfileSlugs: ["zara-hussein"],
    relatedLocationSlugs: ["banjara-hills", "jubilee-hills", "secunderabad"],
    relatedCategorySlugs: ["premium-companionship", "lifestyle-companionship"],
    faqs: [
      { question: "Why include Ameerpet?", answer: "Many visitors name metro hubs when they search. A dedicated page keeps that query useful without cloning another neighbourhood." },
    ],
  },
  {
    slug: "miyapur",
    name: "Miyapur",
    title: "Premium Directory in Miyapur, Hyderabad",
    description:
      "Miyapur directory for northwest Hyderabad events, metro-end hotels, and residential functions.",
    intro:
      "Miyapur is the western metro terminus for many commuters. This page focuses on hotel ballrooms and family-function hospitality, which is not the same story as Gachibowli’s conference circuit.",
    areas: ["Miyapur Metro", "Hafeezpet", "Bachupally approach"],
    featuredProfileSlugs: ["lara-fernandes"],
    relatedLocationSlugs: ["kukatpally", "gachibowli", "madhapur"],
    relatedCategorySlugs: ["event-companionship", "travel-companionship"],
    faqs: [
      { question: "Is Miyapur part of the IT corridor?", answer: "It is adjacent. The page treats it as a northwest residential and hospitality node." },
    ],
  },
  {
    slug: "secunderabad",
    name: "Secunderabad",
    title: "Premium Directory in Secunderabad, Hyderabad",
    description:
      "Secunderabad directory covering the twin city: clubs, cantonment-adjacent hotels, and rail-side meetings.",
    intro:
      "Secunderabad is a twin city with its own hotel and club culture. Keeping it on a separate URL avoids treating all of Hyderabad as one neighbourhood. Listings here mention cantonment-adjacent hospitality rather than western IT parks.",
    areas: ["SP Road", "Paradise", "Trimulgherry", "Railway station precinct"],
    featuredProfileSlugs: ["isha-varma"],
    relatedLocationSlugs: ["banjara-hills", "ameerpet", "jubilee-hills"],
    relatedCategorySlugs: ["independent-professionals", "premium-companionship"],
    faqs: [
      { question: "Is Secunderabad the same as Hyderabad?", answer: "They form a metropolitan area, but visitors often search them separately. This page respects that." },
    ],
  },
];
