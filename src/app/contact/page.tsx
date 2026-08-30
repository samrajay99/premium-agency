import { ContactForm } from "@/components/sections/ContactForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact & VIP Booking | Best Escorts in Hyderabad",
  description:
    "Book verified VIP escorts and independent companions in Hyderabad. 24/7 fast response on Call, WhatsApp, and Online Enquiry.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ name: "Contact & Booking", href: "/contact" }]} />

      <div className="py-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start">
          {/* Left Column: Contact Information & Guarantees */}
          <div className="space-y-8">
            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#e11d74]">
                24/7 VIP Concierge
              </span>
              <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#f5b324]">
                Contact &amp; Book Now
              </h1>
              <p className="mt-3 text-base text-zinc-300 leading-relaxed">
                Connect directly with our senior booking managers for instantaneous confirmation, outcall arrangements, and bespoke companion requests across Hyderabad.
              </p>
            </div>

            {/* Quick Contact Action Boxes */}
            <div className="space-y-4">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#16161c] p-4 transition-all hover:border-[#e11d74] hover:scale-[1.02]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e11d74]/15 text-[#e11d74]">
                  <Phone className="size-6 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Direct Phone Line</span>
                  <p className="text-lg font-black text-white">{siteConfig.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#16161c] p-4 transition-all hover:border-[#22c55e] hover:scale-[1.02]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#22c55e]/15 text-[#22c55e]">
                  <MessageCircle className="size-6 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">WhatsApp Instant Chat</span>
                  <p className="text-lg font-black text-[#22c55e]">Chat on WhatsApp</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#16161c] p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Service Coverage</span>
                  <p className="text-sm font-semibold text-white">All 5-Star Hotels &amp; Prime Areas in Hyderabad</p>
                </div>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="rounded-2xl border border-white/10 bg-[#121216] p-5 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#f5b324]">Our Commitment to You:</h3>
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#22c55e] shrink-0" />
                  <span>100% Genuine photos verified by agency management</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#22c55e] shrink-0" />
                  <span>Complete discretion, strict client confidentiality</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-[#22c55e] shrink-0" />
                  <span>30-45 Minute rapid outcall dispatch to your hotel/residence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking & Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}