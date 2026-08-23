import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerGroups } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-bg-elevated">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl">{siteConfig.siteName}</p>
          <p className="mt-3 max-w-sm text-sm text-muted">{siteConfig.description}</p>
          <p className="mt-4 text-sm text-muted">
            {siteConfig.city} - {siteConfig.phone}
          </p>
        </div>
        {Object.entries(footerGroups).map(([title, links]) => (
          <div key={title}>
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-gold">{title}</p>
            <ul className="space-y-2 text-sm text-muted">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line px-4 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.siteName}. Demo content only. All listings are fictional adults.
      </div>
    </footer>
  );
}
