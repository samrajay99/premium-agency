import { ReviewExplorer } from "@/components/reviews/ReviewExplorer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SiteShell } from "@/components/layout/SiteShell";
import { reviews } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Client Reviews & Testimonials | Best Escorts in Hyderabad",
  description:
    "Read genuine verified reviews and testimonials from gentlemen who experienced our VIP escort service across Hyderabad.",
  pathname: "/reviews",
});

export default function ReviewsPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ name: "Client Reviews", href: "/reviews" }]} />

      <div className="py-8">
        <div className="text-center mb-10 max-w-3xl mx-auto space-y-2">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#e11d74]">
            100% Verified Client Feedback
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#f5b324]">
            CLIENT EXPERIENCES &amp; REVIEWS
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#f5b324] to-transparent" />
          <p className="text-sm sm:text-base text-zinc-300">
            Read honest feedback from clients across Banjara Hills, Jubilee Hills, Gachibowli, and Hitech City, or submit your own review following your companion booking.
          </p>
        </div>

        <ReviewExplorer reviews={reviews} />
      </div>
    </SiteShell>
  );
}