import { Star, CheckCircle, MapPin, User } from "lucide-react";
import type { DirectoryReview } from "@/data/reviews";
import Link from "next/link";

export function ReviewCard({ review }: { review: DirectoryReview }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-[#141418] p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-[#f5b324]/40 hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)] space-y-4">
      {/* Header with Client Info & Rating */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#e11d74] to-[#f5b324] font-serif text-lg font-black uppercase text-black shadow-md">
            {review.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg font-bold text-white">{review.name}</h3>
              <span className="flex items-center gap-1 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 px-2 py-0.5 text-[10px] font-bold text-[#22c55e]">
                <CheckCircle className="size-3" />
                Verified Client
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-zinc-400 mt-0.5">
              <MapPin className="size-3.5 text-[#e11d74]" />
              <span>{review.location}</span>
            </div>
          </div>
        </div>

        {/* Gold Star Rating */}
        <div className="flex items-center gap-1 bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`size-4 ${
                star <= review.rating ? "text-[#f5b324] fill-[#f5b324]" : "text-zinc-600"
              }`}
            />
          ))}
          <span className="ml-1 text-xs font-bold text-white">{review.rating}.0</span>
        </div>
      </div>

      {/* Review Body */}
      <p className="text-sm sm:text-base leading-relaxed text-zinc-200 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Footer Info & Model Link */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-zinc-400 border-t border-white/5">
        <span>Verified Date: {review.date}</span>
        {review.profileSlug && (
          <Link
            href={`/profiles/${review.profileSlug}`}
            className="flex items-center gap-1 font-bold text-[#f5b324] hover:underline"
          >
            <User className="size-3.5 text-[#e11d74]" />
            <span>View Companion Profile →</span>
          </Link>
        )}
      </div>
    </article>
  );
}
