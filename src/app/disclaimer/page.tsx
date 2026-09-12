import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Adult Disclaimer | 18+ Age & Consent Policy",
  description:
    "Official 18+ adult disclaimer, age compliance, and mutual consent statement for Best Escorts Hyderabad.",
  pathname: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ name: "Disclaimer", href: "/disclaimer" }]} />
      <p className="eyebrow">Important Notice</p>
      <h1 className="display-title">Adult 18+ Disclaimer</h1>

      <div className="prose-copy mt-10 max-w-4xl space-y-8 text-zinc-300">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#f5b324]">
            1. Age Restriction Notice (18+)
          </h2>
          <p className="leading-relaxed">
            This website contains adult-oriented content and is intended exclusively for individuals who are at least 18 years of age (or the legal age of majority in your jurisdiction). By entering this website, you confirm that you are of legal age to view adult material and engage voluntary adult companionship services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#f5b324]">
            2. Mutual Voluntary Association
          </h2>
          <p className="leading-relaxed">
            All companions presented on this platform are independent, consenting adults who participate voluntarily. Any arrangements, social companionship, or personal dates entered into are private agreements between consenting adults.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#f5b324]">
            3. Zero Tolerance for Exploitation
          </h2>
          <p className="leading-relaxed">
            We maintain a strict zero-tolerance policy regarding human trafficking, non-consensual exploitation, and underage involvement. We cooperate fully with relevant law enforcement agencies in upholding safety, security, and human dignity.
          </p>
        </section>
      </div>
    </SiteShell>
  );
}