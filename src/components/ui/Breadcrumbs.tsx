import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-xs text-zinc-400 overflow-x-auto py-2 ${className}`}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1 hover:text-[#f5b324] transition-colors shrink-0"
        title="Home"
      >
        <Home className="size-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={item.label + index} className="inline-flex items-center gap-1.5 shrink-0">
            <ChevronRight className="size-3 text-zinc-600" />
            {isLast || !item.href ? (
              <span className="font-semibold text-[#f5b324] truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-white transition-colors truncate max-w-[150px] sm:max-w-xs"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
