import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AgeGate } from "@/components/layout/AgeGate";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-grid min-h-screen">
      <AgeGate />
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 py-10 pb-28">{children}</main>
      <Footer />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-sm sm:px-0 sm:pb-0">
        <div className="pointer-events-auto grid grid-cols-2 gap-3">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-medium text-[#161410] shadow-[var(--shadow)]"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call now
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-line bg-bg-elevated px-4 py-3 text-sm font-medium text-foreground shadow-[var(--shadow)]"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
