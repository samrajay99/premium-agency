import { Rating } from "@/components/ui/Rating";
import type { DirectoryReview } from "@/data/reviews";

export function ReviewSummary({ reviews }: { reviews: DirectoryReview[] }) {
  const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  return (
    <div className="rounded-3xl border border-white/10 bg-[#161219] p-6 shadow-lg">
      <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#f5b324]">Client Satisfaction</p>
      <p className="mt-3 font-serif text-5xl font-black text-white">{average.toFixed(1)}</p>
      <Rating value={average} count={reviews.length} />
      <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
        Based on verified client feedback and authentic ratings across Hyderabad hotel outcalls and incall sessions.
      </p>
    </div>
  );
}
