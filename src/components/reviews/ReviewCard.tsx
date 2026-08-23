import { Rating } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/Badge";
import type { DirectoryReview } from "@/data/reviews";

export function ReviewCard({ review }: { review: DirectoryReview }) {
  return (
    <article className="rounded-3xl border border-line bg-bg-elevated p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-medium">{review.name}</h3>
          <p className="text-sm text-muted">{review.location}</p>
        </div>
        {review.verifiedDemo ? <Badge>Sample / demo</Badge> : <Badge tone="muted">Unmarked sample</Badge>}
      </div>
      <div className="mt-3">
        <Rating value={review.rating} />
      </div>
      <p className="mt-4 text-sm text-muted">{review.text}</p>
      <p className="mt-4 text-xs text-muted">{review.date} · Fictional testimonial for development</p>
    </article>
  );
}
