import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getCategories } from "@/lib/data/categories";
import { createMetadata } from "@/lib/seo";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata = createMetadata({
  title: "Directory Categories | VIP, Russian, Celebrity & College Escorts",
  description:
    "Browse specialized escort categories in Hyderabad: VIP fashion models, Russian escorts, celebrity companions, South Indian call girls, and college models.",
  pathname: "/categories",
});

export default function CategoriesPage() {
  const categoriesList = getCategories();

  return (
    <SiteShell>
      <Breadcrumbs items={[{ name: "Categories", href: "/categories" }]} />

      <section className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b324]/40 bg-[#f5b324]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#f5b324] shadow-md">
          <Sparkles className="size-4 text-[#e11d74]" />
          <span>Browse By Preference</span>
        </div>

        <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-[#f5b324]">
          EXPLORE COMPANION CATEGORIES
        </h1>

        <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />

        <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed font-medium">
          Choose from our specialized categories to find the perfect verified companion for corporate dinner dates, luxury hotel outcalls, weekend getaways, or relaxing private evenings in Hyderabad.
        </p>
      </section>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoriesList.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#1c1421] to-[#120d15] p-7 shadow-xl transition-all duration-300 hover:border-[#f5b324] hover:shadow-[0_16px_40px_rgba(245,179,36,0.2)] hover:scale-[1.02]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-[#e11d74]">
                  Verified Category
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-bold text-zinc-300 group-hover:text-[#f5b324] transition-colors">
                  View Models
                </span>
              </div>

              <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-black uppercase text-white group-hover:text-[#f5b324] transition-colors">
                {category.name}
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#f5b324]">
              <span>Explore Verified Profiles</span>
              <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </SiteShell>
  );
}