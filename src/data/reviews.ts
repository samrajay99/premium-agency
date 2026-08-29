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
    location: "Banjara Hills",
    rating: 5,
    date: "2026-04-12",
    text: "Booked Mahak for an evening dinner date in Banjara Hills. She was punctual, absolutely gorgeous, and very warm. Highly recommend her service.",
    verifiedDemo: true,
    profileSlug: "mahak",
  },
  {
    id: "r02",
    name: "Dev M.",
    location: "Jubilee Hills",
    rating: 5,
    date: "2026-03-02",
    text: "Sana is a genuine celebrity quality model. Her photos are 100% real and she made my stay in Jubilee Hills truly memorable. Very discreet.",
    verifiedDemo: true,
    profileSlug: "sana",
  },
  {
    id: "r03",
    name: "Nikhil S.",
    location: "HITEC City",
    rating: 5,
    date: "2026-05-18",
    text: "Elif is a stunning Russian model. Unmatched elegance and perfect English communication. The agency booked her within 45 minutes to my hotel in Hitech City.",
    verifiedDemo: true,
    profileSlug: "elif",
  },
  {
    id: "r04",
    name: "Rahul P.",
    location: "Gachibowli",
    rating: 5,
    date: "2026-02-20",
    text: "Teju is energetic, stylish, and full of positive vibes. Her incall apartment in Gachibowli was clean, safe, and totally private.",
    verifiedDemo: true,
    profileSlug: "teju",
  },
  {
    id: "r05",
    name: "Vikram T.",
    location: "Kukatpally",
    rating: 5,
    date: "2026-06-01",
    text: "Anna has such a sweet, infectious smile. Her gentle nature made the entire experience super relaxing. 100% verified genuine profile.",
    verifiedDemo: true,
    profileSlug: "anna",
  },
  {
    id: "r06",
    name: "Sameer L.",
    location: "Miyapur",
    rating: 5,
    date: "2026-03-22",
    text: "Riya was very friendly and accommodating. Great rates for such a premium experience in Miyapur. Clean and pleasant.",
    verifiedDemo: true,
    profileSlug: "riya",
  },
  {
    id: "r07",
    name: "Aditya R.",
    location: "Kondapur",
    rating: 5,
    date: "2026-04-11",
    text: "Aarti is highly sophisticated and elegant. Perfect companion for corporate visitors staying at 5-star hotels in Kondapur.",
    verifiedDemo: true,
    profileSlug: "aarti",
  },
  {
    id: "r08",
    name: "Karan B.",
    location: "Madhapur",
    rating: 5,
    date: "2026-05-08",
    text: "Pooja provides top-notch independent service. No rushing, respectful, and very clean. Will definitely book again through this agency.",
    verifiedDemo: true,
    profileSlug: "pooja",
  },
];
