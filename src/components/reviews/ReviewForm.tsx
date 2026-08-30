"use client";

import { useState } from "react";
import { Star, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";
import { profiles } from "@/data/profiles";

export function ReviewForm({ onReviewSubmitted }: { onReviewSubmitted?: (newReview: {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  verifiedDemo: boolean;
  profileSlug?: string;
}) => void }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [companion, setCompanion] = useState("MAHAK (Banjara Hills)");
  const [location, setLocation] = useState("Banjara Hills");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const ratingLabels = [
    "",
    "1 Star - Poor",
    "2 Stars - Fair",
    "3 Stars - Good & Satisfactory",
    "4 Stars - Very Good Experience",
    "5 Stars - Truly Exceptional & Unmatched",
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Verified Client",
          rating,
          companion,
          location,
          title: title || "Client Service Feedback",
          review,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSent(true);

        // Find slug if matching
        const foundProfile = profiles.find((p) => companion.includes(p.name));

        if (onReviewSubmitted) {
          onReviewSubmitted({
            id: `user-rev-${Date.now()}`,
            name: name || "Verified Client",
            location: `${location}, Hyderabad`,
            rating,
            date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
            text: review,
            verifiedDemo: true,
            profileSlug: foundProfile?.slug || "mahak",
          });
        }
      } else {
        setError(data.error || "Failed to submit review. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error while submitting your review.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-[#22c55e]/50 bg-[#0f1f14] p-8 text-center shadow-2xl space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e]/20 text-[#22c55e]">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="font-serif text-2xl font-black uppercase text-white">
          Review Submitted Successfully!
        </h3>
        <p className="text-sm text-zinc-300 max-w-md mx-auto">
          Thank you, <strong className="text-[#f5b324]">{name || "Valued Client"}</strong>. Your valuable review for <strong className="text-white">{companion}</strong> has been received and submitted directly to private management.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setReview("");
            setTitle("");
          }}
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition"
        >
          Submit Another Review
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#f5b324]/30 bg-[#141418] p-6 sm:p-8 shadow-2xl space-y-5"
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#f5b324]">
          <Sparkles className="size-3.5" />
          <span>Client Feedback Channel</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-black uppercase text-white">
          Share Your Service Experience
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400">
          Your feedback is sent directly to management to maintain exceptional service standards.
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-950/40 p-3.5 text-xs font-semibold text-red-300">
          <AlertCircle className="size-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Interactive Star Rating Selector */}
      <div className="rounded-2xl border border-white/10 bg-black/50 p-4 space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
          Your Overall Rating <span className="text-[#e11d74]">*</span>
        </label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => {
            const active = (hoverRating || rating) >= star;
            return (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform hover:scale-125 focus:outline-none"
                aria-label={`${star} Stars`}
              >
                <Star
                  className={`size-7 sm:size-8 transition-colors ${
                    active ? "text-[#f5b324] fill-[#f5b324] drop-shadow-[0_0_10px_rgba(245,179,36,0.6)]" : "text-zinc-600"
                  }`}
                />
              </button>
            );
          })}
          <span className="ml-3 text-xs sm:text-sm font-black uppercase tracking-wide text-[#f5b324]">
            {ratingLabels[hoverRating || rating]}
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Client Name / Alias */}
        <div>
          <label htmlFor="client-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
            Your Name / Alias (Optional)
          </label>
          <input
            id="client-name"
            placeholder="e.g. Vikram K. / Rahul"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324]"
          />
        </div>

        {/* Companion Availed */}
        <div>
          <label htmlFor="client-companion" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
            Companion Availed <span className="text-[#e11d74]">*</span>
          </label>
          <select
            id="client-companion"
            value={companion}
            onChange={(e) => setCompanion(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324]"
          >
            {profiles.map((p) => (
              <option key={p.slug} value={`${p.name} (${p.area})`} className="bg-[#141418] text-white">
                {p.name} — {p.category} ({p.area})
              </option>
            ))}
            <option value="General Agency Service" className="bg-[#141418] text-white">
              General Agency Service
            </option>
          </select>
        </div>

        {/* Location / Area */}
        <div>
          <label htmlFor="client-loc" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
            Service Location
          </label>
          <select
            id="client-loc"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324]"
          >
            <option value="Banjara Hills" className="bg-[#141418]">Banjara Hills</option>
            <option value="Jubilee Hills" className="bg-[#141418]">Jubilee Hills</option>
            <option value="Gachibowli" className="bg-[#141418]">Gachibowli</option>
            <option value="Hitech City" className="bg-[#141418]">Hitech City</option>
            <option value="Madhapur" className="bg-[#141418]">Madhapur</option>
            <option value="Kondapur" className="bg-[#141418]">Kondapur</option>
            <option value="Kukatpally" className="bg-[#141418]">Kukatpally</option>
            <option value="Miyapur" className="bg-[#141418]">Miyapur</option>
            <option value="Secunderabad" className="bg-[#141418]">Secunderabad</option>
          </select>
        </div>

        {/* Review Title */}
        <div>
          <label htmlFor="review-title" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
            Review Headline
          </label>
          <input
            id="review-title"
            placeholder="e.g. Unmatched beauty & punctuality"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324]"
          />
        </div>
      </div>

      {/* Review Body */}
      <div>
        <label htmlFor="review-text" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
          Your Detailed Review <span className="text-[#e11d74]">*</span>
        </label>
        <textarea
          id="review-text"
          required
          rows={4}
          placeholder="Share your experience regarding communication, hygiene, punctuality, and satisfaction..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#f5b324] focus:outline-none focus:ring-1 focus:ring-[#f5b324] resize-y"
        />
      </div>

      {/* Submit CTA */}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#f5b324] to-[#e11d74] py-4 text-sm sm:text-base font-black uppercase tracking-wider text-black shadow-[0_10px_30px_rgba(245,179,36,0.3)] transition hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="size-5 animate-spin text-black" />
            <span>Sending Review to Management...</span>
          </>
        ) : (
          <>
            <Send className="size-5 text-black" />
            <span>Submit Review to Management</span>
          </>
        )}
      </button>
    </form>
  );
}
