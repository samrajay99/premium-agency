import { Rating } from "@/components/ui/Rating";
import type { DirectoryReview } from "@/data/reviews";

export function ReviewSummary({ reviews }: { reviews: DirectoryReview[] }) {
  const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  return (
    <div className="rounded-3xl border border-line bg-bg-elevated p-6">
      <p className="text-sm uppercase tracking-[0.2em] text-gold">Sample ratings</p>
      <p className="mt-3 font-serif text-5xl">{average.toFixed(1)}</p>
      <Rating value={average} count={reviews.length} />
      <p className="mt-3 text-sm text-muted">
        These figures summarise fictional demo testimonials. They are not aggregated real-world reviews.
      </p>
    </div>
  );
}
