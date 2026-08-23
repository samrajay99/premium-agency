export type FaqGroup =
  | "General"
  | "Profiles"
  | "Privacy"
  | "Safety"
  | "Booking/Contact"
  | "Website Usage";

export interface FaqItem {
  id: string;
  group: FaqGroup;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "g1",
    group: "General",
    question: "What is Hyderabad Elite Directory?",
    answer:
      "It is a fictional, frontend-only directory built to demonstrate a premium local listing website for Hyderabad. Profiles, reviews, and verification badges are sample content.",
  },
  {
    id: "g2",
    group: "General",
    question: "Is this affiliated with a real agency?",
    answer:
      "No. The brand name is a placeholder in a single configuration file so it can be replaced later.",
  },
  {
    id: "p1",
    group: "Profiles",
    question: "Are the people on this site real?",
    answer:
      "No. Every profile is a fictional adult created for layout, SEO architecture, and interaction testing.",
  },
  {
    id: "p2",
    group: "Profiles",
    question: "What does the verified badge mean?",
    answer:
      "In this demo it is a visual flag only. It does not mean identity documents were checked.",
  },
  {
    id: "pr1",
    group: "Privacy",
    question: "Do you store my messages?",
    answer:
      "The contact form never leaves your browser. There is no backend and no message store.",
  },
  {
    id: "pr2",
    group: "Privacy",
    question: "Do you use tracking accounts?",
    answer:
      "This project does not include analytics SDKs. Theme preference and the age notice use local browser storage only when you interact with those controls.",
  },
  {
    id: "s1",
    group: "Safety",
    question: "How should meetings be planned?",
    answer:
      "Prefer public hospitality venues. Do not share government IDs in forms. This site does not arrange meetings.",
  },
  {
    id: "s2",
    group: "Safety",
    question: "Is the age notice legally sufficient?",
    answer:
      "It is a tasteful 18+ acknowledgement for a demo. It is not legal advice and does not replace local regulations.",
  },
  {
    id: "b1",
    group: "Booking/Contact",
    question: "Can I book from a profile page?",
    answer:
      "No. Profile pages link to a frontend contact form that shows a local success state only.",
  },
  {
    id: "b2",
    group: "Booking/Contact",
    question: "Are phone and email real?",
    answer:
      "They are placeholders from site configuration. Replace them before any public launch.",
  },
  {
    id: "w1",
    group: "Website Usage",
    question: "Why do filters not change the URL?",
    answer:
      "Listing filters run in the browser so search engines keep a single canonical /profiles page instead of many near-duplicate URLs.",
  },
  {
    id: "w2",
    group: "Website Usage",
    question: "Will this connect to a CMS later?",
    answer:
      "Data is loaded through getProfiles() and similar helpers. Those functions can later call an API without rewriting the UI.",
  },
];
