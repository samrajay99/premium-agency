import { blogArticles, type BlogArticle } from "@/data/blog";
import { faqs, type FaqItem } from "@/data/faqs";
import { reviews, type DirectoryReview } from "@/data/reviews";

export function getArticles(): BlogArticle[] {
  return blogArticles;
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

export function getReviews(): DirectoryReview[] {
  return reviews;
}

export function getReviewsForProfile(slug: string): DirectoryReview[] {
  return reviews.filter((review) => review.profileSlug === slug);
}

export function getFaqs(): FaqItem[] {
  return faqs;
}

export function getFaqsByGroup() {
  const groups = Array.from(new Set(faqs.map((item) => item.group)));
  return groups.map((group) => ({
    group,
    items: faqs.filter((item) => item.group === group),
  }));
}
