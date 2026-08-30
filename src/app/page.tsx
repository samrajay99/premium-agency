import { ProfileExplorer } from "@/components/profiles/ProfileExplorer";
import { SiteShell } from "@/components/layout/SiteShell";
import { getProfiles } from "@/lib/data/profiles";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Users,
  MapPin,
  Headphones,
  Phone,
  MessageCircle,
  Star,
  Building2,
  Hotel,
  Banknote,
  CheckCircle2,
  Quote,
  ArrowRight,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Best Escorts in Hyderabad | 100% Verified VIP Escort Service 24/7",
  description:
    "Hyderabad's premier escort service agency. Explore 100% verified model profiles across Banjara Hills, Jubilee Hills, HITEC City, Gachibowli, Madhapur, and Kukatpally with transparent rates & 30-min 5-star hotel outcalls.",
  pathname: "/",
});

export default function HomePage() {
  const allProfiles = getProfiles();

  const neighborhoods = [
    {
      name: "Banjara Hills",
      slug: "banjara-hills",
      tagline: "5-Star Luxury Suites & Elite Mansions",
      transit: "25–35 Min Outcall",
      models: "Mahak, Renuka",
      highlight: "Taj Krishna, Park Hyatt & Luxury Lounges",
    },
    {
      name: "Jubilee Hills",
      slug: "jubilee-hills",
      tagline: "VIP Celebrity Enclaves & Fine Dining",
      transit: "30 Min Outcall",
      models: "Sana, Sunita",
      highlight: "Road No. 36, Private Villas & Cafés",
    },
    {
      name: "HITEC City",
      slug: "hitech-city",
      tagline: "Silicon Valley Tech Hub & Luxury Suites",
      transit: "25–30 Min Outcall",
      models: "Elif, Tanya",
      highlight: "ITC Kohenur, Novotel & Cyber Towers",
    },
    {
      name: "Gachibowli",
      slug: "gachibowli",
      tagline: "Financial District & Corporate Outcalls",
      transit: "30 Min Outcall",
      models: "Teju, Umi",
      highlight: "Sheraton, Oakwood & WaveRock",
    },
    {
      name: "Madhapur",
      slug: "madhapur",
      tagline: "Trendy Fashion Boutiques & Modern Lounges",
      transit: "20–30 Min Outcall",
      models: "Milli, Riya",
      highlight: "Durgam Cheruvu & Luxury Apart-hotels",
    },
    {
      name: "Kukatpally",
      slug: "kukatpally",
      tagline: "Commercial Hub & Private Incall Venues",
      transit: "30–40 Min Outcall",
      models: "Anna",
      highlight: "KPHB Colony & Forum Mall Corridor",
    },
    {
      name: "Begumpet",
      slug: "begumpet",
      tagline: "Central Heritage & VIP Diplomatic Zone",
      transit: "25–35 Min Outcall",
      models: "Ishika",
      highlight: "Airport Road & Luxury Business Stays",
    },
    {
      name: "Somajiguda",
      slug: "somajiguda",
      tagline: "Central Business District & 5-Star Hotels",
      transit: "25–30 Min Outcall",
      models: "Simran",
      highlight: "The Park Hotel & Raj Bhavan Enclave",
    },
    {
      name: "Kondapur",
      slug: "kondapur",
      tagline: "High-End Residential & Tech Residences",
      transit: "25–35 Min Outcall",
      models: "Twinkle",
      highlight: "Botanical Garden Road & Gated Villas",
    },
    {
      name: "Secunderabad",
      slug: "secunderabad",
      tagline: "Twin City Heritage & Luxury Outcalls",
      transit: "35–45 Min Outcall",
      models: "Mahi",
      highlight: "Cantonment & Luxury Heritage Clubs",
    },
    {
      name: "Ameerpet",
      slug: "ameerpet",
      tagline: "Metro Transit Corridor & Private Flats",
      transit: "30 Min Outcall",
      models: "Preety",
      highlight: "Central Metro Junction & Discreet Suites",
    },
    {
      name: "Miyapur",
      slug: "miyapur",
      tagline: "Affordable Quality & Private Incall Stays",
      transit: "35–40 Min Outcall",
      models: "Priya",
      highlight: "Western Metro Terminus & Clean Venues",
    },
  ];

  const pricingTiers = [
    {
      title: "BUDGET FRIENDLY",
      tagline: "Quality & Discreet Companionship",
      priceShot: "₹7,000 - ₹9,000",
      price2Hour: "₹10,000 - ₹12,000",
      priceOvernight: "₹15,000 - ₹18,000",
      color: "border-zinc-700",
      badge: "BEST VALUE",
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
      tagline: "Most Popular for Executives & IT Pros",
      priceShot: "₹12,000 - ₹15,000",
      price2Hour: "₹18,000 - ₹22,000",
      priceOvernight: "₹25,000 - ₹30,000",
      color: "border-[#e11d74]",
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

  const premiumDestinations = [
    {
      hotel: "Taj Krishna",
      location: "Road No. 1, Banjara Hills",
      tag: "5-Star Luxury",
      description: "Direct outcall escort service to presidential suites and executive rooms with zero lobby delay.",
    },
    {
      hotel: "ITC Kohenur",
      location: "HITEC City, Madhapur",
      tag: "Ultra Luxury Hub",
      description: "Fast 25-minute companion dispatch for visiting corporate executives and high-net-worth guests.",
    },
    {
      hotel: "Sheraton Hyderabad",
      location: "Financial District, Gachibowli",
      tag: "Corporate 5-Star",
      description: "Discreet in-room companion appointments for global tech travelers and business delegates.",
    },
    {
      hotel: "Park Hyatt Hyderabad",
      location: "Road No. 2, Banjara Hills",
      tag: "Palatial Luxury",
      description: "Uncompromised confidentiality for private dinner dates and overnight companion stays.",
    },
    {
      hotel: "Novotel Hyderabad",
      location: "HITEC City Convention Center",
      tag: "Convention 5-Star",
      description: "Punctual escort services for summit attendees, exhibition guests, and corporate leaders.",
    },
    {
      hotel: "The Westin Hyderabad",
      location: "Mindspace, HITEC City",
      tag: "Luxury IT Enclave",
      description: "Seamless companion dispatch with 100% verified photo matching and discreet COD payments.",
    },
  ];

  const clientReviews = [
    {
      name: "Vikramaditya S.",
      role: "Managing Director • Corporate Client",
      location: "Taj Krishna, Banjara Hills",
      rating: 5,
      companion: "Mahak",
      text: "As a frequent corporate traveler to Hyderabad, discretion and punctuality are everything. Mahak was breathtaking, polite, and arrived right on time. Truly world-class service.",
    },
    {
      name: "Rohit K.",
      role: "Tech Entrepreneur",
      location: "HITEC City & Gachibowli",
      rating: 5,
      companion: "Elif",
      text: "The photos on the website are 100% genuine! Booked Russian model Elif to Novotel via WhatsApp in 30 minutes. Unmatched elegance and perfect English communication.",
    },
    {
      name: "Adarsh M.",
      role: "Private Investor",
      location: "Jubilee Hills",
      rating: 5,
      companion: "Sana",
      text: "Zero advance scam, Cash on Delivery option, and verified companion. Sana made my stay in Jubilee Hills unforgettable. 10/10 recommendation!",
    },
  ];

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
      {/* 1. HERO SECTION */}
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

      {/* 2. FEATURED PROFILES & INTERACTIVE SEARCH FILTER */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-[#f5b324] drop-shadow-[0_2px_10px_rgba(245,179,36,0.25)]">
              FEATURED PROFILES
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              Select your preferred location and category to find verified companions in Hyderabad
            </p>
          </div>

          <ProfileExplorer profiles={allProfiles} />
        </div>
      </section>

      {/* 3. ALL LOCATION WISE PROFILES AT HOME */}
      <section className="mt-6 rounded-3xl border border-[#f5b324]/30 bg-gradient-to-br from-[#1b1222] via-[#120d18] to-[#17101e] p-6 sm:p-12 shadow-2xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b324]/50 bg-[#f5b324]/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f5b324]">
            <MapPin className="size-3.5 text-[#e11d74]" />
            <span>Complete Hyderabad Coverage</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white">
            LOCATION-WISE <span className="text-[#f5b324]">MODEL PROFILES</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
          <p className="mt-3 text-sm sm:text-base text-zinc-300">
            Browse our all 17 verified companions organized directly by their primary base in Hyderabad with rapid 30-min outcall dispatch.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allProfiles.map((prof) => (
            <article
              key={prof.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#16111d] shadow-lg transition-all duration-300 hover:border-[#f5b324] hover:shadow-[0_12px_35px_rgba(245,179,36,0.2)] hover:scale-[1.02]"
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/40">
                  <Image
                    src={prof.image}
                    alt={`${prof.name} - ${prof.category} in ${prof.area}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="rounded-full bg-[#22c55e] px-2.5 py-0.5 text-[10px] font-black uppercase text-white shadow-md">
                      ✓ VERIFIED
                    </span>
                    <span className="rounded-full bg-black/75 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-[#f5b324] border border-[#f5b324]/40">
                      📸 {prof.gallery.length} Photos
                    </span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-3 inset-x-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl font-black uppercase text-white drop-shadow-md">
                        {prof.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[#f5b324] text-xs font-black">
                        <Star className="size-3.5 fill-current" />
                        <span>{prof.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-zinc-300 mt-0.5">
                      <MapPin className="size-3 text-[#e11d74]" />
                      <span>{prof.area}</span>
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase text-[#e11d74] text-[11px]">{prof.category}</span>
                    <span className="font-black text-[#22c55e] text-xs">₹{prof.priceMin.toLocaleString("en-IN")}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                    {prof.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                <Link
                  href={`/profiles/${prof.slug}`}
                  className="flex items-center justify-center rounded-xl bg-white/10 py-2 text-[11px] font-black uppercase text-white hover:bg-white/20 transition text-center"
                >
                  View Details
                </Link>
                <a
                  href={`https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(`Hello, I want to book ${prof.name} in ${prof.area}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1 rounded-xl bg-[#22c55e] py-2 text-[11px] font-black uppercase text-white hover:bg-[#16a34a] transition text-center"
                >
                  <MessageCircle className="size-3 fill-current" />
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. HYDERABAD'S ELITE NEIGHBORHOODS */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e11d74]/50 bg-[#e11d74]/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f43f5e]">
            <Building2 className="size-3.5" />
            <span>Prime City Locations</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-[#f5b324]">
            HYDERABAD&apos;S ELITE NEIGHBORHOODS
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
          <p className="mt-3 text-sm sm:text-base text-zinc-300">
            Providing 24/7 rapid companion outcalls and luxury incall services across Hyderabad&apos;s most prestigious corridors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {neighborhoods.map((area) => (
            <div
              key={area.name}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#14101a] p-6 shadow-lg transition-all duration-300 hover:border-[#e11d74] hover:shadow-[0_10px_30px_rgba(225,29,116,0.25)] hover:scale-[1.02]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#e11d74]/15 text-[#e11d74] border border-[#e11d74]/30">
                    <MapPin className="size-5" />
                  </div>
                  <span className="rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 px-2.5 py-0.5 text-[10px] font-bold text-[#22c55e]">
                    ⚡ {area.transit}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold uppercase text-white group-hover:text-[#f5b324] transition-colors">
                  {area.name}
                </h3>

                <p className="text-xs font-semibold text-[#f5b324]">
                  {area.tagline}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong>Key Hubs:</strong> {area.highlight}
                </p>

                <div className="pt-2 border-t border-white/5 text-[11px] text-zinc-300">
                  <span className="text-zinc-400">Available Models:</span>{" "}
                  <strong className="text-white">{area.models}</strong>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/locations/${area.slug}`}
                  className="text-xs font-bold text-[#e11d74] hover:underline flex items-center gap-1"
                >
                  <span>Explore {area.name}</span>
                  <ArrowRight className="size-3" />
                </Link>
                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="text-xs font-bold text-[#22c55e] hover:underline"
                >
                  Book Outcall
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EXCLUSIVE COMPANION RATES */}
      <section className="py-16 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b324]/50 bg-[#f5b324]/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f5b324]">
            <Banknote className="size-3.5 text-[#22c55e]" />
            <span>Honest &amp; Clear Pricing</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white">
            EXCLUSIVE <span className="text-[#f5b324]">COMPANION RATES</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
          <p className="mt-3 text-sm sm:text-base text-zinc-300">
            Transparent packages for every preference in Hyderabad. Zero hidden charges and Cash on Delivery available.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
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
                <h3 className="font-serif text-2xl font-black uppercase tracking-wide text-[#f5b324]">
                  {tier.title}
                </h3>
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
      </section>

      {/* 6. PREMIUM DESTINATIONS (5-STAR HOTEL OUTCALLS) */}
      <section className="py-16 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e11d74]/50 bg-[#e11d74]/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f43f5e]">
            <Hotel className="size-3.5" />
            <span>Luxury Hotel Outcall Network</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-[#f5b324]">
            PREMIUM DESTINATIONS
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
          <p className="mt-3 text-sm sm:text-base text-zinc-300">
            We specialize in discreet 5-star hotel room delivery to Hyderabad&apos;s most renowned hospitality landmarks.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {premiumDestinations.map((dest) => (
            <div
              key={dest.hotel}
              className="rounded-3xl border border-white/10 bg-[#16121b] p-6 sm:p-7 shadow-xl space-y-3 transition hover:border-[#f5b324]/50 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5b324] to-[#e11d74] text-black shadow-md">
                  <Hotel className="size-6 text-black" />
                </div>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-bold text-[#f5b324] uppercase">
                  {dest.tag}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold uppercase text-white">
                {dest.hotel}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-[#e11d74] font-semibold">
                <MapPin className="size-3.5" />
                <span>{dest.location}</span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                {dest.description}
              </p>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[#22c55e] font-bold">⚡ 25–30 Min Express Arrival</span>
                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="font-bold text-white hover:text-[#f5b324] underline"
                >
                  Book Hotel
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHAT OUR CLIENTS SAY */}
      <section className="py-16 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b324]/50 bg-[#f5b324]/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f5b324]">
            <Quote className="size-3.5" />
            <span>Real Experiences</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white">
            WHAT OUR <span className="text-[#f5b324]">CLIENTS SAY</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
          <p className="mt-3 text-sm sm:text-base text-zinc-300">
            Read verified feedback from corporate leaders, hotel guests, and gentlemen across Hyderabad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {clientReviews.map((rev) => (
            <article
              key={rev.name}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#161219] p-6 sm:p-8 shadow-xl transition hover:border-[#f5b324]/40 hover:scale-[1.01]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#f5b324]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-current text-[#f5b324]" />
                    ))}
                  </div>
                  <Quote className="size-6 text-white/20" />
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="size-3.5 text-[#22c55e]" />
                  </h4>
                  <div className="text-[11px] text-zinc-400">{rev.role}</div>
                  <div className="text-[10px] text-[#f5b324] font-medium mt-0.5">{rev.location}</div>
                </div>

                <div className="text-right">
                  <span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] font-bold text-zinc-300 uppercase">
                    Booked {rev.companion}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. WHY CHOOSE BEST ESCORTS HYDERABAD (METRICS & HIGHLIGHTS) */}
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
    </SiteShell>
  );
}