import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AgeGate } from "@/components/layout/AgeGate";
import { VisitorTracker } from "@/components/layout/VisitorTracker";
import { LiveViewerCounter } from "@/components/layout/LiveViewerCounter";
import { BottomStickyBar } from "@/components/layout/BottomStickyBar";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-grid min-h-screen">
      <VisitorTracker />
      <AgeGate />
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 py-10 pb-32">{children}</main>
      <Footer />
      
      {/* Floating Live Viewers Indicator */}
      <LiveViewerCounter variant="floating" />

      {/* Floating Scroll to Top Arrow Button */}
      <ScrollToTop />

      {/* Modern Floating Bottom Action Dock */}
      <BottomStickyBar />
    </div>
  );
}
