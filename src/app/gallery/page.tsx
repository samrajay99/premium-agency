import { SiteShell } from "@/components/layout/SiteShell";
import { SmartImage } from "@/components/ui/SmartImage";
import { getProfiles } from "@/lib/data/profiles";
import { createMetadata } from "@/lib/seo";
import { Phone, MessageCircle, Star, MapPin, Eye } from "lucide-react";
import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "VIP Photo Gallery | Best Escorts in Hyderabad",
  description: "Browse high resolution verified photo gallery of VIP companions and independent escorts in Hyderabad.",
  pathname: "/gallery",
  keywords: [
    "hyderabad escorts photos",
    "hyderabad call girls photo gallery",
    "verified escorts pics hyderabad",
    "vip escorts gallery hyderabad",
  ],
});

export default function GalleryPage() {
  const profiles = getProfiles();
  const crumbs = [{ name: "Gallery", href: "/gallery" }];

  return (
    <SiteShell>
      <Breadcrumbs items={crumbs} />
      <div className="py-6 sm:py-10">
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#e11d74]">
            100% Genuine Photos
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-black uppercase tracking-wider text-[#f5b324]">
            VIP PHOTO GALLERY
          </h1>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Browse our exclusive collection of verified escort photos in Hyderabad. Every profile is real, recent, and available for 24/7 private booking.
          </p>
        </div>

        {/* Quick Model Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mr-2">Featured Models:</span>
          {profiles.map((p) => (
            <Link
              key={p.slug}
              href={`/profiles/${p.slug}`}
              className="rounded-full border border-white/10 bg-[#17171d] px-4 py-1.5 text-xs font-bold uppercase text-zinc-200 transition hover:border-[#f5b324] hover:text-[#f5b324] hover:scale-105"
            >
              {p.name} ({p.gallery?.length || 1})
            </Link>
          ))}
        </div>

        {/* Gallery Cards Grid - Top aligned portrait aspect ratio */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141418] shadow-xl transition-all duration-300 hover:border-[#e11d74]/50 hover:shadow-[0_16px_45px_rgba(225,29,116,0.2)] flex flex-col"
            >
              {/* Photo Area with Perfect Portrait Ratio & Top Alignment */}
              <Link href={`/profiles/${profile.slug}`} className="relative aspect-[3/4] w-full overflow-hidden bg-black block">
                <SmartImage
                  src={profile.image}
                  alt={`${profile.name} Gallery Photo`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-[center_top] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent opacity-95" />

                {/* Overlaid Badges */}
                <div className="absolute left-3 top-3 flex flex-col gap-1.5 z-10">
                  <span className="rounded-md bg-[#22c55e] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
                    VERIFIED
                  </span>
                  {profile.badges?.includes("vip") && (
                    <span className="rounded-md bg-[#e11d74] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
                      VIP PROFILE
                    </span>
                  )}
                </div>

                {/* Photo Count */}
                <div className="absolute right-3 top-3 rounded-md bg-black/75 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-white border border-white/20">
                  📸 {profile.gallery?.length} Photos
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <h2 className="font-serif text-2xl font-black uppercase text-[#f5b324] group-hover:text-[#ffc94b] transition-colors">
                    {profile.name}
                  </h2>
                  <div className="flex items-center justify-between text-xs text-zinc-300 mt-0.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5 text-[#e11d74]" />
                      {profile.area}
                    </span>
                    <span className="flex items-center gap-1 text-[#f5b324] font-bold">
                      <Star className="size-3.5 fill-current text-[#e11d74]" />
                      {profile.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="text-[#22c55e] font-black text-base mt-1">
                    ₹{profile.priceMin?.toLocaleString("en-IN")} - ₹{profile.priceMax?.toLocaleString("en-IN")}
                  </div>
                </div>
              </Link>

              {/* Action Buttons */}
              <div className="p-3 bg-[#111114] space-y-2">
                <Link
                  href={`/profiles/${profile.slug}`}
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-[#f5b324]/40 bg-[#201507] py-2 text-xs font-black uppercase tracking-wider text-[#f5b324] hover:bg-[#301f09] hover:border-[#f5b324] transition"
                >
                  <Eye className="size-3.5" />
                  <span>View All {profile.gallery?.length} Photos</span>
                </Link>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:+91${profile.phone}`}
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-[#e11d74] py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#d81657]"
                  >
                    <Phone className="size-3.5 fill-current" />
                    CALL
                  </a>
                  <a
                    href={`https://wa.me/91${profile.whatsapp}?text=${encodeURIComponent(`Hello, I would like to book ${profile.name} (${profile.area})`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-[#22c55e] py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#16a34a]"
                  >
                    <MessageCircle className="size-3.5 fill-current" />
                    WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </SiteShell>
  );
}
