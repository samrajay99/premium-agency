import { ProfileExplorer } from "@/components/profiles/ProfileExplorer";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getProfiles } from "@/lib/data/profiles";
import { createMetadata } from "@/lib/seo";
import { ShieldCheck, Star, Banknote, Clock } from "lucide-react";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Explore VIP Escort Profiles | Verified Companions in Hyderabad",
  description:
    "Browse 100% verified VIP escorts, Russian models, celebrity companions, and independent call girls in Hyderabad. Rapid 30-min 5-star hotel outcalls with COD payment.",
  pathname: "/profiles",
  keywords: [
    "hyderabad escorts profiles",
    "verified call girls hyderabad",
    "vip escort directory hyderabad",
    "russian models hyderabad",
    "banjara hills escorts profiles",
  ],
});

export default function ProfilesPage() {
  const profiles = getProfiles();
  const crumbs = [{ name: "Profiles", href: "/profiles" }];

  return (
    <SiteShell>
      <Breadcrumbs items={crumbs} />

      {/* Luxury Hero Banner for Desktop & Mobile */}
      <section className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#e11d74]/40 bg-[#e11d74]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#f43f5e] shadow-md">
          <ShieldCheck className="size-4 text-[#22c55e]" />
          <span>100% Verified Companion Directory</span>
        </div>

        <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-[#f5b324] drop-shadow-[0_2px_15px_rgba(245,179,36,0.3)]">
          VERIFIED VIP ESCORTS IN HYDERABAD
        </h1>
        
        <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />

        <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed font-medium">
          Browse our curated selection of verified VIP models, Russian international companions, celebrity escorts, and sophisticated college beauties available for private 30-minute 5-star hotel outcalls across Hyderabad.
        </p>

        {/* 4 Trust Guarantee Highlight Badges in Desktop */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-zinc-200">
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#151119] px-4 py-1.5 shadow-sm">
            <Star className="size-3.5 text-[#f5b324] fill-[#f5b324]" />
            <span>4.9/5 Rating (180+ Reviews)</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#151119] px-4 py-1.5 shadow-sm">
            <ShieldCheck className="size-3.5 text-[#22c55e]" />
            <span>100% Real Photos Promised</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#151119] px-4 py-1.5 shadow-sm">
            <Banknote className="size-3.5 text-[#22c55e]" />
            <span>Cash On Delivery (COD)</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#151119] px-4 py-1.5 shadow-sm">
            <Clock className="size-3.5 text-[#e11d74]" />
            <span>30–45 Min Rapid Outcalls</span>
          </div>
        </div>
      </section>

      {/* Interactive Filter & Profile Grid */}
      <ProfileExplorer profiles={profiles} />

      <JsonLd
        data={[
          serviceJsonLd(
            "VIP Escorts Directory Hyderabad",
            "Browse 100% verified VIP escort models and companion profiles in Hyderabad."
          ),
          breadcrumbJsonLd(crumbs),
        ]}
      />
    </SiteShell>
  );
}