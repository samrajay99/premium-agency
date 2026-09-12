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
  latitude: number;
  longitude: number;
  postalCode: string;
}

export const locations: DirectoryLocation[] = [
  {
    slug: "banjara-hills",
    name: "Banjara Hills",
    title: "VIP Escorts in Banjara Hills, Hyderabad",
    description:
      "Hire verified VIP escorts and luxury high-profile companions in Banjara Hills. 5-star hotel outcalls to Taj Krishna, Park Hyatt, and Taj Deccan within 30 minutes.",
    intro:
      "Banjara Hills is Hyderabad's premier luxury enclave, home to legendary five-star hotels, fine dining, and elite residences. Our verified VIP models and fashion companions provide discreet, world-class outcall and incall companionship across Road No. 1, Road No. 12, and nearby luxury suites.",
    areas: ["Road No. 1", "Road No. 12", "Road No. 10", "Taj Krishna Precinct", "Banjara Lake View"],
    featuredProfileSlugs: ["mahak", "renuka"],
    relatedLocationSlugs: ["jubilee-hills", "somajiguda", "begumpet"],
    relatedCategorySlugs: ["vip-profile", "celebrity-companion", "elite-vip"],
    latitude: 17.4156,
    longitude: 78.435,
    postalCode: "500034",
    faqs: [
      { question: "How fast can an escort reach Banjara Hills hotels?", answer: "Our companions arrive within 30 to 40 minutes at all luxury hotels in Banjara Hills including Taj Krishna and Park Hyatt." },
      { question: "Is cash on delivery accepted in Banjara Hills?", answer: "Yes, 100% Cash on Delivery (COD) is accepted upon model arrival." },
    ],
  },
  {
    slug: "jubilee-hills",
    name: "Jubilee Hills",
    title: "Luxury Escorts in Jubilee Hills, Hyderabad",
    description:
      "Top-rated luxury celebrity companions and fashion models in Jubilee Hills. Discreet 5-star hotel visits and private dinner companionship.",
    intro:
      "Jubilee Hills represents the peak of upscale nightlife, gourmet dining, and glamorous lifestyle in Hyderabad. Our celebrity companions and high-class South Indian models are available for private dinners, lounge dates on Road No. 36, and luxury hotel outcalls.",
    areas: ["Road No. 36", "Road No. 45", "Check Post", "Film Nagar", "Kavuri Hills"],
    featuredProfileSlugs: ["sana", "sunita"],
    relatedLocationSlugs: ["banjara-hills", "madhapur", "hitech-city"],
    relatedCategorySlugs: ["celebrity-companion", "south-indian", "vip-profile"],
    latitude: 17.4319,
    longitude: 78.4073,
    postalCode: "500033",
    faqs: [
      { question: "Can companions attend dinner dates on Road No. 36?", answer: "Yes, our celebrity companions are articulate, elegant, and perfect for upscale dining and cocktail evenings." },
    ],
  },
  {
    slug: "hitech-city",
    name: "HITEC City",
    title: "Elite VIP Escorts in HITEC City, Hyderabad",
    description:
      "High-class corporate companions, Russian models, and VIP escorts in HITEC City. Prompt 30-min outcalls to Novotel, Westin, Trident, and corporate suites.",
    intro:
      "HITEC City is the vibrant heartbeat of Hyderabad's global technology and financial sector. We cater extensively to visiting executives, business travelers, and hotel guests staying at Novotel, Westin Mindspace, Trident, and Cyber Towers with 100% verified, multilingual companions.",
    areas: ["Mindspace IT Park", "Cyber Towers", "Hitech City Main Road", "Inorbit Mall Corridor", "Knowledge City"],
    featuredProfileSlugs: ["elif", "tanya"],
    relatedLocationSlugs: ["madhapur", "gachibowli", "kondapur"],
    relatedCategorySlugs: ["russian-escorts", "elite-vip", "vip-profile"],
    latitude: 17.4435,
    longitude: 78.3772,
    postalCode: "500081",
    faqs: [
      { question: "Do you offer outcall services to Novotel & Westin HITEC City?", answer: "Yes, our models have regular discreet access to all major 5-star and 4-star hotels in HITEC City." },
      { question: "Are Russian models available in HITEC City?", answer: "Yes, we feature verified international Russian escorts with prompt 30-minute outcall service." },
    ],
  },
  {
    slug: "gachibowli",
    name: "Gachibowli",
    title: "5-Star Escorts in Gachibowli, Hyderabad",
    description:
      "Verified VIP escorts and modern models in Gachibowli Financial District. Fast hotel visits to Sheraton, Hyatt, and Radisson.",
    intro:
      "Gachibowli and the Financial District house international corporate headquarters, luxury hotel towers, and executive residences. Our modern VIP companions and tattoo models provide rapid 30-minute hotel outcalls to Sheraton, Hyatt Hyderabad, and Radisson.",
    areas: ["Financial District", "Nanakramguda", "ORR Exit 1", "Gachibowli Stadium Precinct", "ISB Road"],
    featuredProfileSlugs: ["teju", "umi"],
    relatedLocationSlugs: ["hitech-city", "kondapur", "madhapur"],
    relatedCategorySlugs: ["elite-vip", "vip-profile", "premium-companionship"],
    latitude: 17.4401,
    longitude: 78.3489,
    postalCode: "500032",
    faqs: [
      { question: "How to book an escort in Gachibowli Financial District?", answer: "Simply WhatsApp our concierge with your hotel name or room details, and your selected model will arrive within 35 minutes." },
    ],
  },
  {
    slug: "madhapur",
    name: "Madhapur",
    title: "Verified Escorts & Call Girls in Madhapur, Hyderabad",
    description:
      "Glamorous fashion models, independent escorts, and budget-friendly companions in Madhapur. Fast incall and hotel outcall services.",
    intro:
      "Madhapur is a bustling central hub bridging HITEC City and Jubilee Hills, filled with boutique hotels, cafes, and luxury apartments. We offer a vibrant selection of verified fashion models, independent call girls, and budget-friendly companions in Madhapur.",
    areas: ["Ayyappa Society", "Image Gardens Road", "Madhapur Main Road", "Durgam Cheruvu precinct"],
    featuredProfileSlugs: ["milli", "riya"],
    relatedLocationSlugs: ["hitech-city", "jubilee-hills", "gachibowli"],
    relatedCategorySlugs: ["celebrity-companion", "budget-friendly", "independent-escorts"],
    latitude: 17.4483,
    longitude: 78.3915,
    postalCode: "500081",
    faqs: [
      { question: "Are incall services available in Madhapur?", answer: "Yes, private and fully sanitized incall apartments are available in Madhapur." },
    ],
  },
  {
    slug: "kukatpally",
    name: "Kukatpally",
    title: "South Indian Escorts in Kukatpally, Hyderabad",
    description:
      "Charming South Indian beauties, college models, and affordable companions in Kukatpally (KPHB & JNTU). Complete privacy guaranteed.",
    intro:
      "Kukatpally is a major residential and commercial zone in northwest Hyderabad. Our South Indian models and college escorts in Kukatpally offer warm, affectionate hospitality and comfortable private companionship.",
    areas: ["KPHB Colony", "JNTU Road", "Kukatpally Housing Board", "Forum Mall Corridor"],
    featuredProfileSlugs: ["anna"],
    relatedLocationSlugs: ["miyapur", "madhapur", "kondapur"],
    relatedCategorySlugs: ["south-indian", "budget-friendly", "college-escorts"],
    latitude: 17.4849,
    longitude: 78.4138,
    postalCode: "500072",
    faqs: [
      { question: "Are South Indian models in Kukatpally verified?", answer: "Yes, all photos and profiles in Kukatpally are 100% verified." },
    ],
  },
  {
    slug: "kondapur",
    name: "Kondapur",
    title: "College Escorts & VIP Models in Kondapur, Hyderabad",
    description:
      "Youthful college companions and high-class escorts in Kondapur. Rapid outcalls to Botanical Garden Road and luxury residences.",
    intro:
      "Kondapur connects HITEC City with Gachibowli and Miyapur, offering quiet luxury hotels and peaceful apartments. Our bubbly college escorts and VIP models in Kondapur are ideal for relaxing evenings after long corporate hours.",
    areas: ["Botanical Garden Road", "Kondapur X Roads", "RTO Office Area", "Hafeezpet Border"],
    featuredProfileSlugs: ["twinkle"],
    relatedLocationSlugs: ["gachibowli", "hitech-city", "madhapur"],
    relatedCategorySlugs: ["college-escorts", "vip-profile", "premium-companionship"],
    latitude: 17.4699,
    longitude: 78.3578,
    postalCode: "500084",
    faqs: [
      { question: "Is overnight booking available in Kondapur?", answer: "Yes, full overnight packages can be confirmed 1-2 hours in advance." },
    ],
  },
  {
    slug: "begumpet",
    name: "Begumpet",
    title: "Premium Escorts in Begumpet, Hyderabad",
    description:
      "Verified college models and luxury companions in Begumpet. 5-star hotel visits to ITC Kakatiya, Vivanta, and Marredpally.",
    intro:
      "Begumpet is a prestigious central Hyderabad district known for heritage bungalows, luxury hotels like ITC Kakatiya, and proximity to the airport corridor. Our cute college companions and VIP escorts provide refined private companionship.",
    areas: ["Prakash Nagar", "Rasoolpura", "ITC Kakatiya precinct", "Mayur Marg"],
    featuredProfileSlugs: ["ishika"],
    relatedLocationSlugs: ["somajiguda", "banjara-hills", "secunderabad"],
    relatedCategorySlugs: ["college-escorts", "vip-profile", "premium-companionship"],
    latitude: 17.4447,
    longitude: 78.4664,
    postalCode: "500016",
    faqs: [
      { question: "How fast is outcall to ITC Kakatiya Begumpet?", answer: "Our companion will arrive at ITC Kakatiya within 25 to 35 minutes." },
    ],
  },
  {
    slug: "somajiguda",
    name: "Somajiguda",
    title: "VIP Model Escorts in Somajiguda, Hyderabad",
    description:
      "Top-tier Indian fashion models and VIP companions in Somajiguda. Fast hotel outcalls to The Park, Katriya, and Raj Bhavan Road.",
    intro:
      "Somajiguda is a prime central commercial and luxury hospitality corridor adjacent to Raj Bhavan and Banjara Hills. Our VIP models in Somajiguda offer breathtaking charm, poise, and five-star companion etiquette.",
    areas: ["Raj Bhavan Road", "The Park precinct", "Nagarjuna Circle", "Punjagutta Border"],
    featuredProfileSlugs: ["simran"],
    relatedLocationSlugs: ["banjara-hills", "begumpet", "ameerpet"],
    relatedCategorySlugs: ["vip-profile", "celebrity-companion", "elite-vip"],
    latitude: 17.4265,
    longitude: 78.4552,
    postalCode: "500082",
    faqs: [
      { question: "Are hotel visits to The Park Somajiguda supported?", answer: "Yes, rapid discreet hotel outcalls are available 24/7." },
    ],
  },
  {
    slug: "ameerpet",
    name: "Ameerpet",
    title: "Premium Escorts & Models in Ameerpet, Hyderabad",
    description:
      "Pretty model escorts and discreet companionship in Ameerpet and SR Nagar. Luxury incall and hotel outcall services.",
    intro:
      "Ameerpet is a major transit and commercial hub connecting central Hyderabad. Our pretty, polite models in Ameerpet offer relaxing companionship, private incall apartments, and quick hotel outcalls.",
    areas: ["Ameerpet Metro", "SR Nagar", "Punjagutta approach", "Dharam Karan Road"],
    featuredProfileSlugs: ["preety"],
    relatedLocationSlugs: ["somajiguda", "begumpet", "banjara-hills"],
    relatedCategorySlugs: ["premium-companionship", "budget-friendly", "independent-escorts"],
    latitude: 17.4375,
    longitude: 78.4482,
    postalCode: "500016",
    faqs: [
      { question: "Are incall apartments sanitized in Ameerpet?", answer: "Yes, our incall apartments are 100% hygienic, private, and air-conditioned." },
    ],
  },
  {
    slug: "miyapur",
    name: "Miyapur",
    title: "College Escorts & Call Girls in Miyapur, Hyderabad",
    description:
      "Affordable college girls and friendly companions in Miyapur. Prompt outcalls to metro stations, hotels, and apartments.",
    intro:
      "Miyapur is the northwest terminus and residential growth corridor of Hyderabad. Our sweet college girls and budget-friendly companions in Miyapur provide friendly, genuine, and joyful companionship.",
    areas: ["Miyapur Metro Station", "Allwyn X Roads", "Hafeezpet Road", "Bachupally approach"],
    featuredProfileSlugs: ["priya"],
    relatedLocationSlugs: ["kukatpally", "kondapur", "gachibowli"],
    relatedCategorySlugs: ["college-escorts", "budget-friendly", "south-indian"],
    latitude: 17.4968,
    longitude: 78.3614,
    postalCode: "500049",
    faqs: [
      { question: "Is outcall available near Miyapur Metro?", answer: "Yes, 30-minute outcall to all nearby hotels and residences." },
    ],
  },
  {
    slug: "secunderabad",
    name: "Secunderabad",
    title: "Elite Escorts in Secunderabad, Twin City",
    description:
      "Hot VIP companions and independent escorts in Secunderabad. Hotel visits to Paradise, Club precincts, and SP Road.",
    intro:
      "Secunderabad is Hyderabad's historic twin city, known for premier clubs, cantonment hospitality, and luxury hotels. Our elite companions and independent escorts in Secunderabad ensure passionate, unhurried companionship.",
    areas: ["SP Road", "Paradise Circle", "Trimulgherry", "Clock Tower", "Cantonment precinct"],
    featuredProfileSlugs: ["mahi"],
    relatedLocationSlugs: ["begumpet", "somajiguda", "banjara-hills"],
    relatedCategorySlugs: ["elite-vip", "independent-escorts", "vip-profile"],
    latitude: 17.4399,
    longitude: 78.4983,
    postalCode: "500003",
    faqs: [
      { question: "Can companions visit hotels near Secunderabad Station & Paradise?", answer: "Yes, rapid outcall service is available across all parts of Secunderabad." },
    ],
  },
];
