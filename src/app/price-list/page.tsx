import { SiteShell } from "@/components/layout/SiteShell";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Banknote,
  Clock,
  Lock,
  Award,
  Zap,
  HeartHandshake,
  Star,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Price List & Rates | Distinguishing Features of Our Service in Hyderabad",
  description:
    "Transparent pricing rates for verified companions in Hyderabad. Discover our distinguishing features: COD payment, 100% photo matching, 30-min outcalls, and zero hidden charges.",
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

  const distinguishingFeatures = [
    {
      icon: Banknote,
      title: "100% Transparent Rates & No Hidden Charges",
      description:
        "The rates published on our website are all-inclusive. You will never face unexpected commission markups, room surcharges, or hidden travel taxes.",
      badge: "Financial Transparency",
      accent: "from-[#f5b324] to-[#eab308]",
    },
    {
      icon: ShieldCheck,
      title: "Cash on Delivery (COD) Payment Option",
      description:
        "Protect yourself from advance scams. We offer direct Cash on Delivery when the companion arrives at your 5-star hotel room or private venue.",
      badge: "Zero Advance Trap",
      accent: "from-[#22c55e] to-[#16a34a]",
    },
    {
      icon: Award,
      title: "100% Genuine Photo Matching Guarantee",
      description:
        "We enforce a strict zero-catfish policy. The model you select on our gallery is the exact companion who arrives at your doorstep, guaranteed.",
      badge: "Authenticity Promised",
      accent: "from-[#e11d74] to-[#f43f5e]",
    },
    {
      icon: Clock,
      title: "Punctual 30–45 Min Rapid Hotel Outcalls",
      description:
        "Our strategically located companions across Banjara Hills, Jubilee Hills, HITEC City, and Gachibowli ensure prompt dispatch without frustrating delays.",
      badge: "Express Dispatch",
      accent: "from-blue-500 to-indigo-600",
    },
    {
      icon: Lock,
      title: "Absolute Discretion & Untraceable Privacy",
      description:
        "Zero personal chat logs, phone records, or client history are preserved. Your corporate status, marital discretion, and identity remain 100% confidential.",
      badge: "VIP Privacy",
      accent: "from-purple-500 to-pink-600",
    },
    {
      icon: HeartHandshake,
      title: "Strict Medical Hygiene & Safety Protocols",
      description:
        "Every companion adheres to top cleanliness standards, regular health evaluations, and respectful adult companionship etiquette.",
      badge: "Hygiene Standard",
      accent: "from-teal-500 to-emerald-600",
    },
  ];

  return (
    <SiteShell>
      <div className="py-8 sm:py-12">
        {/* Header Banner */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#e11d74]">
            Transparent Pricing &amp; Value
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-black uppercase tracking-wider text-[#f5b324]">
            SERVICE PRICE LIST
          </h1>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Honest, straightforward pricing across all companion categories in Hyderabad. No hidden charges or unexpected surprises.
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
                  href={`https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(`Hello, I would like to book a ${tier.title} package in Hyderabad.`)}`}
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

        {/* DISTINGUISHING FEATURES OF OUR SERVICE SECTION */}
        <section className="mt-20 rounded-3xl border border-[#f5b324]/30 bg-gradient-to-b from-[#191220] via-[#120d18] to-[#16101c] p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b324]/50 bg-[#f5b324]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#f5b324]">
              <Sparkles className="size-3.5 text-[#e11d74]" />
              <span>Why We Are Different</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white">
              DISTINGUISHING FEATURES <span className="text-[#f5b324]">OF OUR SERVICE</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
            <p className="mt-3 text-sm sm:text-base text-zinc-300">
              We provide unmatched luxury, absolute honesty, and verified companion security that sets us apart from ordinary escort agencies in Hyderabad.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {distinguishingFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#16111e] p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-[#f5b324]/50 hover:scale-[1.02]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`flex size-13 items-center justify-center rounded-2xl bg-gradient-to-br ${feat.accent} text-white shadow-lg`}>
                        <Icon className="size-6 text-white" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-zinc-300">
                        {feat.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold uppercase text-white group-hover:text-[#f5b324] transition-colors leading-snug">
                      {feat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-bold text-zinc-400">
                    <span className="flex items-center gap-1.5 text-[#22c55e]">
                      <CheckCircle2 className="size-3.5" />
                      Standard Guarantee
                    </span>
                    <span className="text-zinc-500">100% Verified</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct CTA inside distinguishing features */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-[#100b14] p-6 flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <h4 className="font-serif text-lg font-black uppercase text-white">
                Experience True VIP Discretion in Hyderabad
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Book a verified companion in Banjara Hills, Jubilee Hills, HITEC City, or Gachibowli now.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e11d74] px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow-md hover:bg-[#d81657] transition"
              >
                <Phone className="size-4 fill-current" />
                Call {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#22c55e] px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow-md hover:bg-[#16a34a] transition"
              >
                <MessageCircle className="size-4 fill-current" />
                WhatsApp Direct
              </a>
            </div>
          </div>
        </section>

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
