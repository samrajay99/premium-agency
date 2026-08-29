import { ProfileGrid } from "@/components/profiles/ProfileGrid";
import { SiteShell } from "@/components/layout/SiteShell";
import { getProfiles } from "@/lib/data/profiles";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Users, MapPin, Headphones, Phone, MessageCircle } from "lucide-react";

export const metadata = createMetadata({
  title: "Best Escorts in Hyderabad | Verified VIP & High Profile Profiles",
  description: "Explore verified, premium and VIP companion profiles across Kukatpally, Gachibowli, Madhapur, Jubilee Hills, and Hitech City in Hyderabad.",
  pathname: "/",
});

export default function HomePage() {
  const allProfiles = getProfiles();

  const highlights = [
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Verified Profiles",
      detail: "All our profiles undergo strict verification to ensure 100% genuine photos and high quality escort service in Hyderabad.",
    },
    {
      icon: Users,
      value: "18000+",
      label: "Happy Clients",
      detail: "Thousands of satisfied gentlemen who have experienced our premium companionship service with complete satisfaction.",
    },
    {
      icon: MapPin,
      value: "250+",
      label: "Prime Locations",
      detail: "Providing discreet escort service across all major Hyderabad areas including Gachibowli, Madhapur, Hitech City, and Jubilee Hills.",
    },
    {
      icon: Headphones,
      value: "24/7",
      label: "Available Support",
      detail: "Instant round-the-clock booking assistance on Call and WhatsApp for reliable, discreet escort service anytime.",
    },
  ];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative isolate w-full overflow-hidden rounded-3xl border border-white/10 bg-[#120a10] px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(225,29,116,0.22),transparent_60%),linear-gradient(180deg,rgba(0,0,0,0.8),rgba(15,10,14,0.95))]" />
        
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full border border-[#e11d74]/50 bg-[#e11d74]/15 px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#f43f5e] shadow-[0_0_15px_rgba(225,29,116,0.3)]">
            Hyderabad&apos;s #1 Elite Agency
          </span>

          <h1 className="mt-4 text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.95] tracking-tight text-white font-serif">
            Escorts Service <span className="text-[#f5b324] block mt-1">Available 24/7</span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-lg font-medium text-zinc-300">
            Best and Premium Escort/Call Girls Service in Hyderabad | Find 100% Genuine, High-Profile &amp; VIP Companions with Complete Discretion
          </p>

          {/* Quick CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#e11d74] px-8 py-4 text-base font-black uppercase tracking-wider text-white shadow-[0_10px_30px_rgba(225,29,116,0.4)] transition-all hover:bg-[#d81657] hover:scale-105"
            >
              <Phone className="size-5 fill-current" />
              Call: {siteConfig.phone}
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#22c55e] px-8 py-4 text-base font-black uppercase tracking-wider text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)] transition-all hover:bg-[#16a34a] hover:scale-105"
            >
              <MessageCircle className="size-5 fill-current" />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED PROFILES SECTION - Directly matching screenshot */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-[#f5b324] drop-shadow-[0_2px_10px_rgba(245,179,36,0.25)]">
              FEATURED PROFILES
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              Verified independent escorts, VIP models &amp; celebrity companions in Hyderabad
            </p>
          </div>

          <ProfileGrid profiles={allProfiles} />
        </div>
      </section>

      {/* WHY CHOOSE US / HIGHLIGHTS SECTION */}
      <section className="border-t border-white/10 bg-[#0c0d12] -mx-4 px-4 py-14 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 lg:py-18">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black uppercase leading-[1.05] tracking-tight text-[#f5b324] font-serif">
            WHY CHOOSE BEST ESCORTS HYDERABAD
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-xl text-zinc-300">
            Experience the luxury difference with our trusted Escort Service in Hyderabad. We set the benchmark for confidentiality, elegance, and premium satisfaction.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              "PREMIUM QUALITY",
              "VERIFIED PROFILES",
              "24/7 SUPPORT",
              "100% DISCREET",
            ].map((item) => (
              <div
                key={item}
                className="inline-flex items-center justify-center rounded-full border border-[#e11d74] bg-[#e11d74]/10 px-6 py-2.5 text-sm sm:text-base font-black uppercase tracking-wider text-[#f5b324] shadow-[0_0_15px_rgba(225,29,116,0.2)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.label}
                className="rounded-3xl border border-[#e11d74]/30 bg-[#12141c] p-6 text-center shadow-[0_12px_35px_rgba(0,0,0,0.5)] transition-all hover:border-[#e11d74] hover:scale-[1.02]"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#e11d74] bg-[#e11d74]/10 text-[#e11d74] shadow-[0_0_20px_rgba(225,29,116,0.3)]">
                  <Icon className="size-10" />
                </div>

                <div className="mt-6">
                  <div className="text-4xl sm:text-5xl font-black text-[#e11d74]">
                    {item.value}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-[#f5b324]">
                    {item.label}
                  </h3>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-300">
                  {item.detail}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Locations Fast Directory Section */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-[#f5b324]">
            AVAILABLE ACROSS ALL HYDERABAD AREAS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Rapid 30-45 minute outcall service to 5-star hotels and private residences
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              "Gachibowli",
              "Madhapur",
              "Hitech City",
              "Jubilee Hills",
              "Banjara Hills",
              "Kukatpally",
              "Kondapur",
              "Miyapur",
              "Secunderabad",
              "Begumpet",
              "Ameerpet",
              "Somajiguda",
            ].map((loc) => (
              <span
                key={loc}
                className="rounded-xl border border-white/10 bg-[#16161c] px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-[#f5b324] hover:text-[#f5b324]"
              >
                📍 {loc}
              </span>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}