export type FaqGroup =
  | "Booking & Process"
  | "Profiles & Verification"
  | "Outcalls & Hotel Visits"
  | "Privacy & Discretion"
  | "Rates & Payment"
  | "Safety & Ethics";

export interface FaqItem {
  id: string;
  group: FaqGroup;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  // Booking & Process
  {
    id: "b1",
    group: "Booking & Process",
    question: "How do I book an escort in Hyderabad?",
    answer:
      "Booking is quick and straightforward. Simply browse our verified companion profiles, note the model's name or ID, and contact our 24/7 concierge directly via WhatsApp or phone call. Share your preferred location (hotel or private residence) and meeting time for immediate confirmation.",
  },
  {
    id: "b2",
    group: "Booking & Process",
    question: "How far in advance should I make a reservation?",
    answer:
      "For standard hotel outcalls, we recommend booking 30 to 45 minutes in advance. For top VIP models, Russian international escorts, or overnight bookings, 1 to 2 hours advance notice is ideal to ensure your preferred companion is readily available.",
  },
  {
    id: "b3",
    group: "Booking & Process",
    question: "Can I request a companion for dinner dates or social events?",
    answer:
      "Yes. Many of our high-profile VIP models and celebrity companions are educated, fluent in multiple languages, and excel as elegant escorts for corporate dinners, parties, and luxury social gatherings.",
  },

  // Profiles & Verification
  {
    id: "p1",
    group: "Profiles & Verification",
    question: "Are all profile photos 100% genuine and verified?",
    answer:
      "Yes, absolutely. We enforce a strict zero-catfish policy. Every photo and gallery picture displayed on our website is 100% genuine, recent, and verified by our senior management team before publishing.",
  },
  {
    id: "p2",
    group: "Profiles & Verification",
    question: "What does the Verified & VIP badge signify?",
    answer:
      "The 'Verified' badge indicates that the model has personally completed our in-person photo audit and age verification (18+). The 'VIP' badge denotes our top-tier luxury models with exceptional client reviews and high demand.",
  },
  {
    id: "p3",
    group: "Profiles & Verification",
    question: "Which categories of companions do you offer?",
    answer:
      "We offer a diverse roster including VIP Mumbai Fashion Models, Exotic Russian & European Escorts, Celebrity Companions, South Indian Beauties, Sophisticated College Girls, and Independent Escorts.",
  },

  // Outcalls & Hotel Visits
  {
    id: "o1",
    group: "Outcalls & Hotel Visits",
    question: "Which areas in Hyderabad do you cover for outcalls?",
    answer:
      "We provide rapid 30-45 minute outcalls to all prime Hyderabad localities including Banjara Hills, Jubilee Hills, HITEC City, Gachibowli, Madhapur, Kondapur, Begumpet, Somajiguda, Kukatpally, Miyapur, and Secunderabad.",
  },
  {
    id: "o2",
    group: "Outcalls & Hotel Visits",
    question: "Do you deliver to 5-star and 4-star hotels?",
    answer:
      "Yes. Our companions regularly visit all major luxury hotels such as Taj Krishna, ITC Kohenur, Novotel HITEC City, Westin Mindspace, Park Hyatt, Trident, and Marriott. Our companions dress elegantly and arrive with utmost discretion.",
  },
  {
    id: "o3",
    group: "Outcalls & Hotel Visits",
    question: "Are private incall apartments available?",
    answer:
      "Yes, for clients preferring incall sessions, sanitized, fully private, and secure luxury incall apartments are available in select central areas like Banjara Hills, Madhapur, and Begumpet.",
  },

  // Privacy & Discretion
  {
    id: "pr1",
    group: "Privacy & Discretion",
    question: "How is my personal privacy protected?",
    answer:
      "Complete client discretion is our top priority. We operate under strict privacy protocols: we never record calls, store personal customer databases, or disclose client identities. Once your session is concluded, all temporary chat logs are erased.",
  },
  {
    id: "pr2",
    group: "Privacy & Discretion",
    question: "Will my booking information be shared with third parties?",
    answer:
      "Never. All interactions remain strictly confidential between you and our senior concierge manager.",
  },

  // Rates & Payment
  {
    id: "r1",
    group: "Rates & Payment",
    question: "What are the rates and how does payment work?",
    answer:
      "Rates start from ₹10,000 for standard companions up to ₹45,000+ for high-profile Russian and VIP fashion models depending on duration. We strictly support Cash On Delivery (COD) upon companion arrival for total peace of mind.",
  },
  {
    id: "r2",
    group: "Rates & Payment",
    question: "Do you require any advance payment or deposit?",
    answer:
      "No. We never ask for online advance payments or booking fees for standard hotel outcalls, protecting our clients from fraudulent online scams.",
  },

  // Safety & Ethics
  {
    id: "s1",
    group: "Safety & Ethics",
    question: "What is your policy on age and consent?",
    answer:
      "We operate strictly for consenting adults aged 18 and above. All companions participate voluntarily and are treated with highest professional respect.",
  },
  {
    id: "s2",
    group: "Safety & Ethics",
    question: "What health and hygiene standards are maintained?",
    answer:
      "All our companions adhere to impeccable personal hygiene and strict health standards to guarantee a clean, comfortable, and satisfying luxury experience.",
  },
];
