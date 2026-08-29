import { SiteShell } from "@/components/layout/SiteShell";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export const metadata = createMetadata({
  title: "Price List & Rates | Best Escorts in Hyderabad",
  description: "Transparent rates for verified escorts, college companions, VIP models, and luxury outcall services in Hyderabad.",
  pathname: "/price-list",
});

export default function PriceListPage() {
  const tiers = [
    {
      title: "BUDGET FRIENDLY",
      tagline: "Quality & Discreet Companionship",
      priceShot: "₹7,000 - ₹9,000",
      price2Hour: "₹10,000 - ₹12,000",
      priceOvernight: "₹15,000 - ₹18,000",
      color: "border-zinc-700",
      accent: "#f5b324",
      features: [
        "Verified Incall Apartments",
        "Polite & Friendly Companions",
        "Discreet & Clean Hygiene",
        "Rapid 30-min Outcall Available",
        "No Hidden Agency Charges",
      ],
    },
    {
      title: "PREMIUM COMPANIONS",
      tagline: "Most Popular for Executives & IT Professionals",
      priceShot: "₹12,000 - ₹15,000",
      price2Hour: "₹18,000 - ₹22,000",
      priceOvernight: "₹25,000 - ₹30,000",
      color: "border-[#e11d74]",
      accent: "#e11d74",
      badge: "MOST POPULAR",
      features: [
        "Educated & Sophisticated Models",
        "Fluent in English, Hindi & Telugu",
        "5-Star Hotel Outcalls Welcome",
        "Dinner & Social Gathering Dating",
        "100% Genuine Profile Matching",
      ],
    },
    {
      title: "VIP & CELEBRITY MODELS",
      tagline: "Ultra-Luxury High Profile Elite Escorts",
      priceShot: "₹20,000 - ₹25,000",
      price2Hour: "₹30,000 - ₹35,000",
      priceOvernight: "₹45,000 - ₹60,000",
      color: "border-[#f5b324]",
      accent: "#f5b324",
      badge: "VIP EXCLUSIVE",
      features: [
        "Ramp Models, Air Hostesses & Actresses",
        "Unrivaled Glamour & Royal Charm",
        "Private Suite & Villa Visits",
        "Outstation & Weekend Tours",
        "Highest Level Confidentiality",
      ],
    },
  ];

  return (
    <SiteShell>
      <div className="py-8 sm:py-12">
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#e11d74]">
            Transparent Pricing
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-black uppercase tracking-wider text-[#f5b324]">
            SERVICE PRICE LIST
          </h1>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Honest and straightforward pricing across all companion categories in Hyderabad. No hidden charges or unexpected surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative rounded-3xl border-2 ${tier.color} bg-[#141418] p-6 sm:p-8 shadow-2xl flex flex-col justify-between transition-all hover:scale-[1.02]`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 right-6 rounded-full bg-[#e11d74] px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <h2 className="font-serif text-2xl font-black uppercase tracking-wide text-[#f5b324]">
                  {tier.title}
                </h2>
                <p className="text-xs font-medium text-zinc-400 mt-1">
                  {tier.tagline}
                </p>

                <div className="mt-6 space-y-3 rounded-2xl bg-[#0e0e12] p-4 border border-white/5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-xs sm:text-sm text-zinc-300">1 Shot (1 Hour)</span>
                    <span className="text-base sm:text-lg font-black text-[#22c55e]">{tier.priceShot}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-xs sm:text-sm text-zinc-300">2 Shots (2 Hours)</span>
                    <span className="text-base sm:text-lg font-black text-[#22c55e]">{tier.price2Hour}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-zinc-300">Full Night (Overnight)</span>
                    <span className="text-base sm:text-lg font-black text-[#22c55e]">{tier.priceOvernight}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2.5">
                  {tier.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="size-4 shrink-0 text-[#22c55e]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#e11d74] py-3 text-xs font-black uppercase tracking-wider text-white shadow-md hover:bg-[#d81657]"
                >
                  <Phone className="size-4 fill-current" />
                  CALL NOW
                </a>
                <a
                  href={`https://wa.me/91${siteConfig.phone}?text=${encodeURIComponent(`Hello, I would like to book a ${tier.title} package in Hyderabad.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#22c55e] py-3 text-xs font-black uppercase tracking-wider text-white shadow-md hover:bg-[#16a34a]"
                >
                  <MessageCircle className="size-4 fill-current" />
                  WHATSAPP
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Process Steps */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#101014] p-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-black uppercase text-[#f5b324]">
            HOW TO BOOK IN 3 SIMPLE STEPS
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e11d74] font-black text-white text-lg">
                1
              </div>
              <h3 className="font-bold text-white text-base">Select Your Profile</h3>
              <p className="text-xs text-zinc-400">Browse photos in our gallery and choose your preferred companion.</p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e11d74] font-black text-white text-lg">
                2
              </div>
              <h3 className="font-bold text-white text-base">Call or WhatsApp</h3>
              <p className="text-xs text-zinc-400">Contact us at {siteConfig.phone} to check instant availability.</p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e11d74] font-black text-white text-lg">
                3
              </div>
              <h3 className="font-bold text-white text-base">Enjoy Discretion</h3>
              <p className="text-xs text-zinc-400">Meet at your hotel room or private apartment with full privacy.</p>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
