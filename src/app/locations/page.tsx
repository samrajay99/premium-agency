import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getLocations } from "@/lib/data/locations";
import { createMetadata } from "@/lib/seo";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata = createMetadata({
  title: "Hyderabad Locations | 30-Min Hotel Outcall Escorts in All Areas",
  description:
    "Explore verified escorts across all prime Hyderabad locations: Banjara Hills, Jubilee Hills, HITEC City, Gachibowli, Madhapur, Begumpet, and Secunderabad.",
  pathname: "/locations",
});

export default function LocationsPage() {
  const locationsList = getLocations();

  return (
    <SiteShell>
      <Breadcrumbs items={[{ name: "Locations", href: "/locations" }]} />

      <section className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#e11d74]/40 bg-[#e11d74]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#f43f5e] shadow-md">
          <MapPin className="size-4 text-[#e11d74]" />
          <span>Local Area Coverage</span>
        </div>

        <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-[#f5b324]">
          EXPLORE BY HYDERABAD AREA
        </h1>

        <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />

        <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed font-medium">
          Discover verified escort profiles and 30-minute five-star hotel outcall services available across all prime commercial, financial, and luxury residential districts of Hyderabad.
        </p>
      </section>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {locationsList.map((location) => (
          <Link
            key={location.slug}
            href={`/locations/${location.slug}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#1c1421] to-[#120d15] p-7 shadow-xl transition-all duration-300 hover:border-[#f5b324] hover:shadow-[0_16px_40px_rgba(245,179,36,0.2)] hover:scale-[1.02]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#e11d74]">
                  <MapPin className="size-3.5" />
                  Hyderabad
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-bold text-zinc-300 group-hover:text-[#f5b324] transition-colors">
                  30-Min Outcall
                </span>
              </div>

              <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-black uppercase text-white group-hover:text-[#f5b324] transition-colors">
                {location.name}
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {location.intro}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {location.areas.slice(0, 3).map((area) => (
                  <span
                    key={area}
                    className="rounded-lg bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#f5b324]">
              <span>View Area Profiles</span>
              <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </SiteShell>
  );
}