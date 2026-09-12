import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service | Booking Guidelines & Client Policies",
  description:
    "Review our terms of service, age consent requirements (18+), booking etiquette, and cancellation policies for Hyderabad escort services.",
  pathname: "/terms",
});

export default function TermsPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ name: "Terms", href: "/terms" }]} />
      <p className="eyebrow">Legal &amp; Booking Guidelines</p>
      <h1 className="display-title">Terms of Service</h1>

      <div className="prose-copy mt-10 max-w-4xl space-y-8 text-zinc-300">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#f5b324]">
            1. Age &amp; Mutual Consent Requirements
          </h2>
          <p className="leading-relaxed">
            All services listed on this website are intended exclusively for consenting adults who are 18 years of age or older (or the legal age of majority in your jurisdiction). By accessing this website and utilizing our concierge services, you explicitly affirm that you are of legal adult age.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#f5b324]">
            2. Code of Conduct &amp; Respect
          </h2>
          <p className="leading-relaxed">
            Mutual respect, politeness, and personal hygiene are mandatory standards. Any disrespectful, coercive, abusive, or inappropriate behavior toward companions or concierge staff will result in immediate termination of the session without recourse.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#f5b324]">
            3. Cash On Delivery (COD) &amp; Transparent Rates
          </h2>
          <p className="leading-relaxed">
            All rates agreed upon with our senior concierge desk are final and transparent. Payment is strictly settled via Cash On Delivery upon the companion&apos;s arrival at your hotel or private venue. We do not solicit unauthorized upfront card charges for standard outcalls.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold uppercase text-[#f5b324]">
            4. Cancellations &amp; Rescheduling
          </h2>
          <p className="leading-relaxed">
            If you need to reschedule or cancel an appointment, please notify our concierge desk at least 45 minutes before the scheduled meeting time so our logistics team can adjust model itineraries accordingly.
          </p>
        </section>
      </div>
    </SiteShell>
  );
}