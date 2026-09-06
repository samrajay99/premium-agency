import type { BreadcrumbList, WithContext } from "@/lib/jsonld-types";
import { siteConfig } from "@/config/site";

export type Crumb = { name: string; href: string };

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/favicon.svg`,
    email: siteConfig.email,
    telephone: `+91${siteConfig.phone}`,
    sameAs: [
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.x,
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.telegram,
      siteConfig.socialLinks.reddit,
      siteConfig.socialLinks.pinterest,
      siteConfig.socialLinks.youtube,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Road No. 36, Jubilee Hills / Banjara Hills",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      postalCode: "500034",
      addressCountry: "IN",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.siteUrl}/profiles?query={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessJsonLd(options?: string | { customArea?: string; latitude?: number; longitude?: number; postalCode?: string }) {
  const customArea = typeof options === "string" ? options : options?.customArea;
  const latitude = typeof options === "object" && options?.latitude ? options.latitude : 17.385;
  const longitude = typeof options === "object" && options?.longitude ? options.longitude : 78.4867;
  const postalCode = typeof options === "object" && options?.postalCode ? options.postalCode : "500034";

  return {
    "@context": "https://schema.org",
    "@type": "AdultEntertainment",
    name: customArea ? `${siteConfig.siteName} - ${customArea}` : siteConfig.siteName,
    alternateName: "Best Escorts Service in Hyderabad",
    image: `${siteConfig.siteUrl}/images/og/default.svg`,
    url: siteConfig.siteUrl,
    telephone: `+91${siteConfig.phone}`,
    priceRange: "₹10,000 - ₹60,000",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Google Pay, PhonePe, Net Banking",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: customArea ? `${customArea}, Hyderabad` : "Banjara Hills & Jubilee Hills Hub",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    },
    areaServed: [
      "Banjara Hills",
      "Jubilee Hills",
      "HITEC City",
      "Gachibowli",
      "Madhapur",
      "Kukatpally",
      "Begumpet",
      "Somajiguda",
      "Kondapur",
      "Manikonda",
      "Secunderabad",
      "Hyderabad",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "184",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceJsonLd(name: string, description: string, area = "Hyderabad") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: area,
    },
    description: description,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "15000",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
  };
}

export function profilePersonJsonLd(profile: {
  name: string;
  category: string;
  area: string;
  shortDescription?: string;
  image: string;
  rating: number;
  reviewCount: number;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: `${profile.category} Model`,
    description: profile.shortDescription || `${profile.name} is a verified ${profile.category} companion in ${profile.area}, Hyderabad.`,
    image: `${siteConfig.siteUrl}${profile.image}`,
    url: `${siteConfig.siteUrl}/profiles/${profile.slug}`,
    workLocation: {
      "@type": "Place",
      name: `${profile.area}, Hyderabad`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(profile.rating),
      reviewCount: String(profile.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function breadcrumbJsonLd(items: Crumb[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.href}`,
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    image: input.image,
    author: { "@type": "Organization", name: siteConfig.siteName },
    publisher: { "@type": "Organization", name: siteConfig.siteName },
    mainEntityOfPage: input.url,
  };
}
