import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AgeGate } from "@/components/layout/AgeGate";
import { VisitorTracker } from "@/components/layout/VisitorTracker";
import { LiveViewerCounter } from "@/components/layout/LiveViewerCounter";
import { BottomStickyBar } from "@/components/layout/BottomStickyBar";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SitePreloader } from "@/components/layout/SitePreloader";
import { siteConfig } from "@/config/site";
import { Sparkles, Phone, MessageCircle } from "lucide-react";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-grid min-h-screen text-[#fdfdfd]">
      {/* 1. Luxury Entry Preloader */}
      <SitePreloader />

      {/* 2. Comprehensive Visitor Analytics Tracker & Age Verification */}
      <VisitorTracker />
      <AgeGate />

      {/* 3. Top VIP Announcement Ticker Ribbon */}
      <div className="relative z-50 border-b border-white/10 bg-gradient-to-r from-[#170a14] via-[#240b1e] to-[#150a12] px-3 py-1.5 text-center text-xs font-bold text-white shadow-inner">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-2 text-[#f5b324]">
            <Sparkles className="size-3.5 animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-black">Hyderabad VIP Outcalls</span>
          </div>

          <div className="flex-1 text-center truncate">
            <span className="text-zinc-300">
              ⚡ Rapid 30-Min 5-Star Hotel Outcalls to Banjara Hills, Jubilee Hills, HITEC City &amp; Gachibowli
            </span>
            <span className="mx-2 text-white/30 hidden sm:inline">|</span>
            <span className="text-[#f5b324] font-black hidden sm:inline">
              100% Verified Companions
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white hover:text-[#e11d74] transition"
            >
              <Phone className="size-3 text-[#e11d74]" />
              <span>+91 {siteConfig.phone}</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#22c55e] hover:underline"
            >
              <MessageCircle className="size-3" />
              <span>WhatsApp 24/7</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4. Global Site Header */}
      <Header />

      {/* 5. Main Content Area */}
      <main className="mx-auto w-full max-w-7xl px-4 py-10 pb-32">{children}</main>

      {/* 6. Revamped World-Class Footer */}
      <Footer />

      {/* 7. Floating Interactive Widgets */}
      <LiveViewerCounter variant="floating" />
      <ScrollToTop />
      <BottomStickyBar />
    </div>
  );
}
