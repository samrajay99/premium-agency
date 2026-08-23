"use client";

import { ReviewCard } from "@/components/reviews/ReviewCard";
import { ReviewSummary } from "@/components/reviews/ReviewSummary";
import type { DirectoryReview } from "@/data/reviews";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ReviewExplorer({ reviews }: { reviews: DirectoryReview[] }) {
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const filtered = useMemo(
    () => reviews.filter((review) => (rating === 0 ? true : review.rating === rating)),
    [rating, reviews],
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const shown = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div className="space-y-4">
        <ReviewSummary reviews={reviews} />
        <div className="flex flex-wrap gap-2">
          {[0, 5, 4, 3].map((value) => (
            <Button
              key={value}
              type="button"
              variant={rating === value ? "primary" : "secondary"}
              onClick={() => {
                setRating(value);
                setPage(1);
              }}
            >
              {value === 0 ? "All" : `${value} star`}
            </Button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {shown.length ? shown.map((review) => <ReviewCard key={review.id} review={review} />) : (
          <p className="rounded-3xl border border-line p-8 text-muted">No matching sample reviews.</p>
        )}
        <div className="flex items-center justify-center gap-3">
          <Button type="button" variant="secondary" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
            Previous
          </Button>
          <span className="text-sm text-muted">
            {page} / {pageCount}
          </span>
          <Button type="button" variant="secondary" onClick={() => setPage((p) => Math.min(pageCount, p + 1))} disabled={page === pageCount}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
