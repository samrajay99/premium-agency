import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd, breadcrumbJsonLd, type Crumb } from "@/components/seo/JsonLd";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center overflow-x-auto py-1 text-xs text-zinc-400">
      <JsonLd data={breadcrumbJsonLd(trail) as unknown as Record<string, unknown>} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((item, index) => {
          const last = index === trail.length - 1;
          const isHome = index === 0;

          return (
            <li key={`${item.href}-${item.name}`} className="inline-flex items-center gap-1.5 shrink-0">
              {isHome ? (
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-[#f5b324] transition-colors"
                  title="Home"
                >
                  <Home className="size-3.5" />
                  <span className="sr-only">Home</span>
                </Link>
              ) : last ? (
                <span aria-current="page" className="font-bold text-[#f5b324] truncate max-w-[200px] sm:max-w-xs">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="text-zinc-300 hover:text-white transition-colors truncate max-w-[150px]">
                  {item.name}
                </Link>
              )}
              {!last ? <ChevronRight className="size-3 text-zinc-600 shrink-0" aria-hidden="true" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
