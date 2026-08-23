import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SiteShell } from "@/components/layout/SiteShell";
import { blogArticles } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Journal", description: "Useful Hyderabad area guides, privacy notes, and practical directory reading from the editorial desk.", pathname: "/blog" });
export default function BlogPage() { return <SiteShell><Breadcrumbs items={[{ name: "Journal", href: "/blog" }]} /><p className="eyebrow">The journal</p><h1 className="display-title">Useful context for the city</h1><p className="lede max-w-2xl">Short guides about neighbourhoods, privacy, and how to read a directory with a clear eye.</p><div className="mt-12 grid gap-5 md:grid-cols-2">{blogArticles.map((article) => <article className="surface p-6" key={article.slug}><p className="eyebrow">{article.category} - {article.publishedAt}</p><h2 className="mt-4 font-serif text-3xl"><Link href={`/blog/${article.slug}`} className="hover:text-gold">{article.title}</Link></h2><p className="mt-3 text-muted">{article.excerpt}</p><Link href={`/blog/${article.slug}`} className="mt-6 inline-block text-sm text-gold">Read article -&gt;</Link></article>)}</div></SiteShell>; }