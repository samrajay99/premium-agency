import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SiteShell } from "@/components/layout/SiteShell";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  ShieldCheck,
  Users,
  Clock,
  MapPin,
  CheckCircle2,
  Lock,
  Headphones,
  Sparkles,
  Phone,
  MessageCircle,
  Award,
  UserCheck,
  Target,
  Compass,
  Star,
  Quote,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";

export const metadata = createMetadata({
  title: "About Us | Our Mission, Journey & Trusted Leadership in Hyderabad",
  description:
    "Discover Best Escorts Hyderabad's mission, our 5+ year journey, executive leadership team (Anshu Raj, Rajdeep Singh, Rakesh Singh), and verified client testimonials.",
  pathname: "/about",
});

export default function AboutPage() {
  const stats = [
    { value: "5+ Years", label: "Of Trusted Service", icon: Clock },
    { value: "18,000+", label: "Satisfied Clients", icon: Users },
    { value: "100%", label: "Verified Model Profiles", icon: ShieldCheck },
    { value: "12+", label: "Hyderabad Prime Areas", icon: MapPin },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Inception & Foundation",
      description:
        "Founded by Anshu Raj in Banjara Hills with a mission to eliminate fake agencies and deliver genuine, discreet adult companionship to discerning gentlemen.",
      badge: "The Beginning",
    },
    {
      year: "2022",
      title: "100% Verification Protocol",
      description:
        "Introduced the strict multi-step photo and ID verification system headed by Rakesh Singh, ensuring zero catfish photos and setting Hyderabad's safety benchmark.",
      badge: "Quality Milestone",
    },
    {
      year: "2024",
      title: "City-Wide Luxury Expansion",
      description:
        "Expanded rapid outcall dispatch across all 5-star hotels in HITEC City, Gachibowli, Jubilee Hills, and Begumpet with 24/7 client concierge support.",
      badge: "Rapid Growth",
    },
    {
      year: "2026",
      title: "Hyderabad's #1 Premier Directory",
      description:
        "Surpassed 18,000+ satisfied clients, featuring top VIP Mumbai models, college cuties, and exotic Russian international companions with 100% genuine reviews.",
      badge: "Industry Leader",
    },
  ];

  const clientReviews = [
    {
      name: "Vikramaditya S.",
      role: "Managing Director • Corporate Client",
      location: "Taj Krishna, Banjara Hills",
      rating: 5,
      date: "May 2026",
      review:
        "As a frequent business traveler staying at 5-star hotels in Hyderabad, discretion and punctuality are my top priorities. Best Escorts Hyderabad exceeded all expectations. Mahak was charming, well-spoken, and arrived exactly on time. Truly world-class service.",
      companion: "Mahak",
    },
    {
      name: "Rohit K.",
      role: "Tech Entrepreneur",
      location: "HITEC City & Gachibowli",
      rating: 5,
      date: "June 2026",
      review:
        "What sets this agency apart is their transparency. The photos on the website are 100% real with zero exaggeration. Rajdeep Singh from customer relations arranged everything on WhatsApp within 30 minutes. Extremely discreet and stress-free.",
      companion: "Elif",
    },
    {
      name: "Adarsh M.",
      role: "Private Investor",
      location: "Jubilee Hills",
      rating: 5,
      date: "April 2026",
      review:
        "I was initially hesitant due to common online scams in this industry, but their Cash on Delivery policy and verified profile system gave me total confidence. Sana is gorgeous, polite, and an incredible companion. 10/10 recommendation!",
      companion: "Sana",
    },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% Verified Profiles",
      description:
        "Every companion profile on our platform undergoes a meticulous multi-step verification process to ensure authentic photographs, genuine age, and strict hygiene standards.",
    },
    {
      icon: Lock,
      title: "Absolute Discretion",
      description:
        "Your privacy and identity are held in the strictest confidence. We never store personal logs or sensitive details, guaranteeing an untraceable, seamless experience.",
    },
    {
      icon: Headphones,
      title: "24/7 Concierge Support",
      description:
        "Our dedicated customer relations managers are available round the clock on Call and WhatsApp to assist with model selection, scheduling, and hotel outcalls.",
    },
    {
      icon: Sparkles,
      title: "Diverse Elite Selection",
      description:
        "From Mumbai VIP fashion models and exotic Russian international companions to traditional South Indian beauties and high-profile celebrity companions.",
    },
  ];

  const team = [
    {
      name: "ANSHU RAJ",
      role: "FOUNDER & CEO",
      badge: "Executive Leadership",
      description:
        "With extensive experience in luxury hospitality and client discretion, Anshu Raj leads the agency with an uncompromising vision of authenticity, client safety, and elite service standards.",
      icon: Award,
    },
    {
      name: "RAJDEEP SINGH",
      role: "CUSTOMER RELATIONS MANAGER",
      badge: "Client Support & Operations",
      description:
        "Oversees 24/7 client booking consultations, discreet scheduling, and rapid concierge dispatch across all major 5-star hotels and luxury residences in Hyderabad.",
      icon: Headphones,
    },
    {
      name: "RAKESH SINGH",
      role: "VERIFICATION SPECIALIST",
      badge: "Quality & Security Assurance",
      description:
        "Heads our comprehensive verification desk, ensuring all model photographs, medical hygiene standards, and profile authenticity meet our strict 100% genuine criteria.",
      icon: UserCheck,
    },
  ];

  return (
    <SiteShell>
      <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />

      {/* Hero Header */}
      <section className="relative mt-4 overflow-hidden rounded-3xl border border-[#e11d74]/30 bg-[#120a12] p-8 sm:p-12 lg:p-16 shadow-2xl text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(225,29,116,0.18),transparent_65%)] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl space-y-4">
          <span className="inline-block rounded-full border border-[#f5b324]/50 bg-[#f5b324]/10 px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#f5b324]">
            Your Trusted Escort Guide in Hyderabad
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            About <span className="text-[#e11d74]">Best Escorts</span> Hyderabad
          </h1>

          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-300">
            Established in 2020, Best Escorts Hyderabad is Hyderabad&apos;s foremost curated directory and agency for refined, verified companionship. We bridge discerning gentlemen with verified, high-profile companions within a framework of absolute privacy, mutual respect, and luxury.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#e11d74] px-8 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-[0_8px_25px_rgba(225,29,116,0.4)] transition hover:bg-[#d81657] hover:scale-105"
            >
              <Phone className="size-4.5 fill-current" />
              Call: {siteConfig.phone}
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#22c55e] px-8 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-[0_8px_25px_rgba(34,197,94,0.4)] transition hover:bg-[#16a34a] hover:scale-105"
            >
              <MessageCircle className="size-4.5 fill-current" />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-[#161219] p-6 text-center shadow-lg transition hover:border-[#f5b324]/40"
            >
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#e11d74]/15 text-[#e11d74] border border-[#e11d74]/30">
                <Icon className="size-7" />
              </div>
              <div className="mt-4 text-3xl sm:text-4xl font-black text-[#f5b324] font-serif">
                {item.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-400">
                {item.label}
              </div>
            </div>
          );
        })}
      </section>

      {/* 1. OUR MISSION SECTION */}
      <section className="mt-16 rounded-3xl border border-[#f5b324]/30 bg-gradient-to-br from-[#1b1422] via-[#140e19] to-[#1e1220] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <Target className="size-80 text-[#f5b324]" />
        </div>

        <div className="relative z-10 grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-[#f5b324]/20 text-[#f5b324] border border-[#f5b324]/40">
                <Target className="size-5" />
              </span>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b324]">
                Our Purpose &amp; Vision
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              OUR <span className="text-[#f5b324]">MISSION</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-200 font-medium">
              To establish a new standard of luxury, trust, and discretion in adult companionship across Hyderabad by completely eliminating deceptive practices, false photographs, and unreliable operators.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
              We empower discerning gentlemen—including visiting corporate executives, high-net-worth individuals, and local connoisseurs—to discover genuine, charismatic, and cultured female companions in an environment of total safety, mutual respect, and 100% confidentiality.
            </p>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="size-5 text-[#22c55e] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">100% Genuine Verified Photos</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="size-5 text-[#22c55e] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">Zero Advance Online Scams</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="size-5 text-[#22c55e] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">Strict Client Anonymity</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="size-5 text-[#22c55e] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">Rapid 30-Min Hotel Outcalls</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl border border-white/15 bg-[#120d17] p-6 sm:p-8 shadow-xl space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#e11d74]">
                <HeartHandshake className="size-4" />
                <span>Our Core Values</span>
              </div>
              <h3 className="font-serif text-xl font-bold uppercase text-white">
                Discretion. Authenticity. Luxury.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Every companionship arrangement is curated with an unwavering commitment to client dignity and companion well-being. We strictly service consenting adults aged 18+ and adhere to highest ethical hospitality practices.
              </p>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-zinc-400">
                <span className="text-[#f5b324] font-bold">Executive Oversight</span>
                <span>Anshu Raj, Founder &amp; CEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR JOURNEY SECTION (TIMELINE) */}
      <section className="mt-16 border-t border-white/10 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e11d74]/50 bg-[#e11d74]/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f43f5e]">
            <TrendingUp className="size-3.5" />
            <span>Evolution of Excellence</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white">
            OUR <span className="text-[#e11d74]">JOURNEY</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#e11d74] to-transparent" />
          <p className="mt-3 text-sm text-zinc-400">
            How a boutique VIP agency grew into Hyderabad&apos;s most reputable adult directory over the last 5+ years.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((item, idx) => (
            <div
              key={item.year}
              className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#161219] p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-[#f5b324]/50 hover:scale-[1.02] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black font-serif text-[#f5b324] tracking-tight group-hover:text-[#e11d74] transition-colors">
                    {item.year}
                  </span>
                  <span className="rounded-full border border-[#f5b324]/30 bg-[#f5b324]/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#f5b324]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold uppercase text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-bold text-zinc-500">
                <span className="size-2 rounded-full bg-[#22c55e]" />
                <span>Phase 0{idx + 1} Accomplished</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHAT OUR CLIENTS SAY (TESTIMONIALS) */}
      <section className="mt-16 border-t border-white/10 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b324]/50 bg-[#f5b324]/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f5b324]">
            <Quote className="size-3.5" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white">
            WHAT OUR <span className="text-[#f5b324]">CLIENTS SAY</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
          <p className="mt-3 text-sm text-zinc-400">
            Real testimonials from business leaders, hotel guests, and gentlemen across Hyderabad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {clientReviews.map((rev) => (
            <article
              key={rev.name}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#161219] p-6 sm:p-8 shadow-xl transition hover:border-[#f5b324]/40 hover:scale-[1.01]"
            >
              <div className="space-y-4">
                {/* Header with Star Rating and Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#f5b324]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-current text-[#f5b324]" />
                    ))}
                  </div>
                  <Quote className="size-6 text-white/20" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
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
                  <span className="rounded-md bg-white/5 border border-white/10 px-2 py-1 text-[10px] font-bold text-zinc-300 uppercase">
                    Booked {rev.companion}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXECUTIVE TEAM SECTION */}
      <section className="mt-16 border-t border-white/10 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block rounded-full border border-[#e11d74]/50 bg-[#e11d74]/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f43f5e]">
            Leadership &amp; Management
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-black uppercase tracking-wider text-[#f5b324]">
            MEET OUR TEAM
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
          <p className="mt-3 text-sm text-zinc-400">
            Dedicated professionals committed to discreet hospitality, rapid support, and 100% verified operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.name}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#f5b324]/30 bg-gradient-to-b from-[#1c1421] to-[#120d15] p-7 shadow-[0_12px_35px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#f5b324] hover:shadow-[0_16px_40px_rgba(245,179,36,0.2)]"
              >
                <div className="space-y-4">
                  {/* Top Avatar Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e11d74] to-[#f43f5e] text-white shadow-[0_4px_15px_rgba(225,29,116,0.4)]">
                      <Icon className="size-7" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                      {member.badge}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="font-serif text-2xl font-black uppercase tracking-wide text-white group-hover:text-[#f5b324] transition-colors">
                      {member.name}
                    </h3>
                    <div className="mt-1 text-xs font-black uppercase tracking-widest text-[#f5b324]">
                      {member.role}
                    </div>
                  </div>

                  {/* Bio Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-300 border-t border-white/10 pt-4">
                    {member.description}
                  </p>
                </div>

                {/* Bottom Direct Connect Link */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-zinc-400">
                  <span>Verified Executive</span>
                  <a
                    href={`tel:+91${siteConfig.phone}`}
                    className="text-[#f5b324] hover:underline flex items-center gap-1"
                  >
                    <Phone className="size-3" />
                    <span>Connect Desk</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safety & Compliance Statement */}
      <section className="mt-16 rounded-3xl border border-white/10 bg-[#100d14] p-8 sm:p-10 text-center space-y-4">
        <h3 className="font-serif text-xl font-bold uppercase text-[#f5b324]">
          Our Commitment to Safety, Consent &amp; Legal Compliance
        </h3>
        <p className="mx-auto max-w-3xl text-xs sm:text-sm leading-relaxed text-zinc-400">
          We operate strictly as an adult-oriented informational directory for consenting adults aged 18 and above. We uphold zero tolerance for non-consensual activities, exploitation, or deceptive representations. All companion associations are entered into voluntarily with mutual respect and highest hygienic ethics.
        </p>
      </section>
    </SiteShell>
  );
}