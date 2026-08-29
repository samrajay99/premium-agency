import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AgeGate } from "@/components/layout/AgeGate";
import { VisitorTracker } from "@/components/layout/VisitorTracker";
import { LiveViewerCounter } from "@/components/layout/LiveViewerCounter";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-grid min-h-screen">
      <VisitorTracker />
      <AgeGate />
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 py-10 pb-28">{children}</main>
      <Footer />
      
      {/* Floating Live Viewers Indicator */}
      <LiveViewerCounter variant="floating" />

      {/* Bottom Sticky Action Bar for Mobile / Fast Booking */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 pb-[max(0px,env(safe-area-inset-bottom))]">
        <div className="pointer-events-auto grid w-full grid-cols-2 overflow-hidden rounded-t-xl border-t border-white/10 shadow-[0_-10px_28px_rgba(0,0,0,0.2)]">
          <a
            href={siteConfig.phoneHref}
            className="flex h-20 items-center justify-center gap-3 bg-[#ef3d68] text-xl font-black uppercase tracking-wide text-white transition hover:brightness-110"
          >
            <Phone className="size-6" aria-hidden="true" />
            Call Now
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex h-20 items-center justify-center gap-3 bg-[#25D366] text-xl font-black uppercase tracking-wide text-white transition hover:brightness-110"
          >
            <MessageCircle className="size-6" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
