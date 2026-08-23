export type BreadcrumbList = {
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
};

export type WithContext<T> = T & { "@context": "https://schema.org" };
