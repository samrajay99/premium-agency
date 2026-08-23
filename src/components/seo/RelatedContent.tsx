import Link from "next/link";

export type RelatedLink = { href: string; label: string; note?: string };

export function RelatedContent({
  title = "Related",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (!links.length) return null;

  return (
    <aside className="rounded-3xl border border-line bg-bg-elevated p-6">
      <h2 className="font-serif text-2xl text-foreground">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-2xl border border-transparent px-3 py-3 transition hover:border-line hover:bg-bg-muted"
            >
              <span className="text-gold">{link.label}</span>
              {link.note ? <p className="mt-1 text-sm text-muted">{link.note}</p> : null}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
