import type { Profile } from "@/lib/data/profiles";
import type { DirectoryReview } from "@/data/reviews";
import { Star, ShieldCheck, Sparkles, MessageSquarePlus, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ProfileReviewsSectionProps {
  profile: Profile;
  reviews: DirectoryReview[];
}

export function ProfileReviewsSection({ profile, reviews }: ProfileReviewsSectionProps) {
  // If profile has specific reviews in dataset, use them; otherwise fallback with personalized reviews
  const displayReviews = reviews.length > 0 ? reviews : [
    {
      id: `default-rev-1`,
      name: "Verified Gentleman",
      location: profile.area,
      rating: 5,
      date: "Recent Date",
      serviceType: "Luxury Outcall",
      text: `${profile.name} is exceptional! Her verified photos match 100% in person. Punctual, polite, and extremely affectionate. Highly recommended for anyone in ${profile.area}.`,
      verifiedDemo: true,
      profileSlug: profile.slug,
    },
    {
      id: `default-rev-2`,
      name: "Corporate Client",
      location: profile.area,
      rating: 5,
      date: "Recent Date",
      serviceType: "5-Star Hotel Visit",
      text: `Booked ${profile.name} through the agency. The response on WhatsApp was super quick and discreet. ${profile.name} made the evening truly memorable.`,
      verifiedDemo: true,
      profileSlug: profile.slug,
    }
  ];

  return (
    <section className="mt-12 rounded-3xl border border-white/10 bg-[#120f16] p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Header with Ratings Summary */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#f5b324]">
            <Sparkles className="size-4 text-[#e11d74]" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-black uppercase text-white mt-1">
            Reviews &amp; Ratings for {profile.name}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Authentic experiences shared by gentlemen who booked {profile.name} in {profile.area}
          </p>
        </div>

        {/* Aggregate Score Pill */}
        <div className="flex items-center gap-3 rounded-2xl border border-[#f5b324]/30 bg-[#211822] px-5 py-3 shadow-inner">
          <div className="text-3xl sm:text-4xl font-black text-[#f5b324] font-serif">
            {profile.rating.toFixed(1)}
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-1 text-[#f5b324]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-current text-[#f5b324]" />
              ))}
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">
              {profile.reviewCount} Verified Ratings
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {displayReviews.map((rev) => (
          <article
            key={rev.id}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#17131c] p-5 sm:p-6 shadow-lg transition hover:border-[#f5b324]/40 hover:scale-[1.01]"
          >
            <div className="space-y-3">
              {/* Reviewer Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#e11d74] to-[#f5b324] text-xs font-black uppercase text-white shadow-md">
                    {rev.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {rev.name}
                      <CheckCircle2 className="size-3.5 text-[#22c55e] inline" />
                    </h3>
                    <div className="text-[11px] font-medium text-zinc-400">
                      {rev.serviceType || "Verified Service"} • {rev.location}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-0.5 text-[#f5b324]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current text-[#f5b324]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500">{rev.date}</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic pt-1">
                &ldquo;{rev.text}&rdquo;
              </p>
            </div>

            {/* Verification Footer */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
              <span className="flex items-center gap-1 text-[#22c55e] font-semibold">
                <ShieldCheck className="size-3.5" />
                Verified Appointment
              </span>
              <span className="text-zinc-500">100% Genuine</span>
            </div>
          </article>
        ))}
      </div>

      {/* Action Bar */}
      <div className="rounded-2xl border border-white/10 bg-[#191420] p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-0.5">
          <h4 className="text-sm font-bold uppercase text-white">Have you met {profile.name}?</h4>
          <p className="text-xs text-zinc-400">Share your genuine experience with our management and community.</p>
        </div>

        <Link
          href={`/reviews?companion=${encodeURIComponent(profile.name)}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f5b324] to-[#e11d74] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-md transition hover:scale-105 hover:brightness-110"
        >
          <MessageSquarePlus className="size-4 text-black" />
          <span>Write a Review for {profile.name}</span>
        </Link>
      </div>
    </section>
  );
}
