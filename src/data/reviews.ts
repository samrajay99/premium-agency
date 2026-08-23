export interface DirectoryReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  verifiedDemo: boolean;
  profileSlug?: string;
}

export const reviews: DirectoryReview[] = [
  {
    id: "r01",
    name: "Arjun K.",
    location: "Gachibowli",
    rating: 5,
    date: "2026-04-12",
    text: "Sample testimonial for development: the listing pages were easy to scan and the neighbourhood pages explained the area without shouting.",
    verifiedDemo: true,
    profileSlug: "aanya-mehra",
  },
  {
    id: "r02",
    name: "Dev M.",
    location: "Jubilee Hills",
    rating: 5,
    date: "2026-03-02",
    text: "Demo review only. I used this text to judge how a five-star card would read next to the disclaimer that none of these quotes are real customer reports.",
    verifiedDemo: true,
    profileSlug: "priya-menon",
  },
  {
    id: "r03",
    name: "Nikhil S.",
    location: "HITEC City",
    rating: 4,
    date: "2026-05-18",
    text: "Fictional feedback describing a product-launch evening. Useful as UI copy; not an endorsement of a real person.",
    verifiedDemo: false,
    profileSlug: "kiara-nair",
  },
  {
    id: "r04",
    name: "Rahul P.",
    location: "Banjara Hills",
    rating: 5,
    date: "2026-02-20",
    text: "Sample note about discreet café meetings. This paragraph exists so the reviews page is not empty during development.",
    verifiedDemo: true,
    profileSlug: "sana-qureshi",
  },
  {
    id: "r05",
    name: "Vikram T.",
    location: "Madhapur",
    rating: 4,
    date: "2026-06-01",
    text: "Demo copy mentioning hotel lobbies and offsites. Ratings here are placeholders for layout testing.",
    verifiedDemo: false,
    profileSlug: "riya-das",
  },
  {
    id: "r06",
    name: "Sameer L.",
    location: "Kukatpally",
    rating: 5,
    date: "2026-03-22",
    text: "Fictional airport-day itinerary comment. Do not treat this as a verified travel review.",
    verifiedDemo: true,
    profileSlug: "naina-shah",
  },
  {
    id: "r07",
    name: "Aditya R.",
    location: "Secunderabad",
    rating: 3,
    date: "2026-01-11",
    text: "A three-star sample so filters can show mixed ratings. The voice is polite and non-explicit on purpose.",
    verifiedDemo: false,
    profileSlug: "isha-varma",
  },
  {
    id: "r08",
    name: "Karan B.",
    location: "Miyapur",
    rating: 4,
    date: "2026-04-08",
    text: "Development testimonial about a hotel function listing. Not associated with a real event.",
    verifiedDemo: true,
    profileSlug: "lara-fernandes",
  },
];
