import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy | Client Anonymity & Strict Data Discretion",
  description:
    "Learn about our industry-leading privacy measures, zero client tracking, and strict confidentiality protocols for Hyderabad escort bookings.",
  pathname: "/privacy",
});

export default function PrivacyPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ name: "Privacy", href: "/privacy" }]} />
      <p className="eyebrow">Client Confidentiality</p>
      <h1 className="display-title">Privacy Policy</h1>

      <div className="prose-copy mt-10 max-w-4xl space-y-8 text-zinc-300">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#f5b324]">
            1. Total Client Discretion
          </h2>
          <p className="leading-relaxed">
            We understand that client confidentiality is the single most critical aspect of luxury adult companionship. We never maintain permanent customer databases, sale logs, or marketing tracking lists.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#f5b324]">
            2. Temporary Communication Only
          </h2>
          <p className="leading-relaxed">
            All scheduling interactions conducted through WhatsApp or direct phone calls are temporary and strictly utilized for dispatching the model to your designated meeting venue. Upon completion of the booking, temporary chat histories are promptly cleared.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#f5b324]">
            3. Zero Third-Party Tracking &amp; Cookies
          </h2>
          <p className="leading-relaxed">
            This website does not employ intrusive third-party behavioral trackers or marketing ad pixels. Local browser preferences (such as your 18+ age verification consent) remain strictly stored on your own device and are never transmitted to outside networks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#f5b324]">
            4. Security Protocol
          </h2>
          <p className="leading-relaxed">
            Our web platform is protected by high-grade SSL/TLS encryption. You can safely browse all companion profiles, gallery photographs, and local area indexes with absolute peace of mind.
          </p>
        </section>
      </div>
    </SiteShell>
  );
}