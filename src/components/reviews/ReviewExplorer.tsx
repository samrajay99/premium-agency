"use client";

import { ReviewCard } from "@/components/reviews/ReviewCard";
import { ReviewSummary } from "@/components/reviews/ReviewSummary";
import { ReviewForm } from "@/components/reviews/ReviewForm";
import type { DirectoryReview } from "@/data/reviews";
import { useMemo, useState } from "react";
import { Star, MessageSquarePlus } from "lucide-react";

export function ReviewExplorer({ reviews: initialReviews }: { reviews: DirectoryReview[] }) {
  const [reviewsList, setReviewsList] = useState<DirectoryReview[]>(initialReviews);
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(true);
  const pageSize = 5;

  const handleNewReview = (newRev: DirectoryReview) => {
    setReviewsList((prev) => [newRev, ...prev]);
  };

  const filtered = useMemo(
    () => reviewsList.filter((review) => (rating === 0 ? true : review.rating === rating)),
    [rating, reviewsList],
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const shown = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-12">
      {/* Review Submission Form Section */}
      <div className="rounded-3xl border border-[#f5b324]/20 bg-gradient-to-b from-[#18151c] to-[#0f0e13] p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#f5b324]/15 text-[#f5b324]">
              <MessageSquarePlus className="size-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-black uppercase text-[#f5b324]">
                Leave Your Service Review
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Share your feedback after your service. All reviews are sent directly to management.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition"
          >
            {showForm ? "Hide Form" : "Write a Review"}
          </button>
        </div>

        {showForm && <ReviewForm onReviewSubmitted={handleNewReview} />}
      </div>

      {/* Reviews Explorer Grid */}
      <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
        {/* Left Column: Summary & Filters */}
        <div className="space-y-6">
          <ReviewSummary reviews={reviewsList} />

          <div className="rounded-2xl border border-white/10 bg-[#141418] p-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">Filter by Stars:</span>
            <div className="flex flex-wrap gap-2">
              {[0, 5, 4, 3].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setRating(value);
                    setPage(1);
                  }}
                  className={`flex items-center gap-1 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                    rating === value
                      ? "bg-[#f5b324] text-black shadow-[0_0_15px_rgba(245,179,36,0.4)]"
                      : "border border-white/10 bg-black/40 text-zinc-300 hover:border-white/30"
                  }`}
                >
                  {value === 0 ? (
                    "All Reviews"
                  ) : (
                    <>
                      <Star className="size-3.5 fill-current" />
                      <span>{value} Stars</span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Reviews List */}
        <div className="space-y-5">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-400">
            <span>Showing {filtered.length} Reviews</span>
            {rating > 0 && <span className="text-[#f5b324]">Filtered by {rating} Stars</span>}
          </div>

          {shown.length ? (
            shown.map((review) => <ReviewCard key={review.id} review={review} />)
          ) : (
            <div className="rounded-3xl border border-white/10 bg-[#141418] p-10 text-center text-zinc-400">
              No matching reviews found for this rating.
            </div>
          )}

          {/* Pagination */}
          {pageCount > 1 && (
            <div className="flex items-center justify-center gap-3 pt-6">
              <button
                type="button"
                className="rounded-xl border border-white/15 bg-[#141418] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white disabled:opacity-30 transition hover:border-[#f5b324]"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="text-xs font-bold text-zinc-400">
                Page {page} of {pageCount}
              </span>
              <button
                type="button"
                className="rounded-xl border border-white/15 bg-[#141418] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white disabled:opacity-30 transition hover:border-[#f5b324]"
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                disabled={page === pageCount}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
