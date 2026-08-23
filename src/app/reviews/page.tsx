import { ReviewExplorer } from "@/components/reviews/ReviewExplorer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SiteShell } from "@/components/layout/SiteShell";
import { reviews } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Sample Reviews", description: "Read fictional sample testimonials used to demonstrate the Hyderabad directory review experience.", pathname: "/reviews" });
export default function ReviewsPage() { return <SiteShell><Breadcrumbs items={[{ name: "Reviews", href: "/reviews" }]} /><p className="eyebrow">Development content</p><h1 className="display-title">Sample directory reviews</h1><p className="lede max-w-2xl">Every review below is fictional interface content. It is not a customer endorsement or a real-world verification claim.</p><div className="mt-12"><ReviewExplorer reviews={reviews} /></div></SiteShell>; }