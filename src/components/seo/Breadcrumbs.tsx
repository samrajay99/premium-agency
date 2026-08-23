import Link from "next/link";
import { JsonLd, breadcrumbJsonLd, type Crumb } from "@/components/seo/JsonLd";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
      <JsonLd data={breadcrumbJsonLd(trail) as unknown as Record<string, unknown>} />
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((item, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={`${item.href}-${item.name}`} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-foreground">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="transition hover:text-gold">
                  {item.name}
                </Link>
              )}
              {!last ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
