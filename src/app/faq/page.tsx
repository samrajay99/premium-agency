import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SiteShell } from "@/components/layout/SiteShell";
import { faqs } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";
import { JsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Frequently Asked Questions | Hyderabad Escorts Guide & Booking Terms",
  description:
    "Get clear answers about our 100% verified escort service in Hyderabad, 30-min 5-star hotel outcalls, rates, COD payment, and complete client privacy.",
  pathname: "/faq",
  keywords: [
    "hyderabad escorts faq",
    "how to book escort in hyderabad",
    "hyderabad call girls rates",
    "hotel outcall guide hyderabad",
    "safe escort service hyderabad",
  ],
});

export default function FaqPage() {
  const groups = Array.from(new Set(faqs.map((faq) => faq.group)));
  const crumbs = [{ name: "FAQ", href: "/faq" }];

  return (
    <SiteShell>
      <Breadcrumbs items={crumbs} />

      <p className="eyebrow">Clear &amp; Transparent Information</p>
      <h1 className="display-title">Frequently Asked Questions</h1>
      <p className="lede max-w-3xl">
        Everything you need to know about our verified companion directory, 5-star hotel outcalls across Banjara Hills, Jubilee Hills, and HITEC City, and strict confidentiality guidelines.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {groups.map((group) => (
          <section key={group} className="rounded-3xl border border-white/10 bg-[#120b13] p-6 sm:p-8 shadow-xl">
            <h2 className="mb-4 font-serif text-2xl sm:text-3xl font-black uppercase text-[#f5b324] border-b border-white/10 pb-3">
              {group}
            </h2>
            <Accordion items={faqs.filter((faq) => faq.group === group)} />
          </section>
        ))}
      </div>

      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd(crumbs),
        ]}
      />
    </SiteShell>
  );
}