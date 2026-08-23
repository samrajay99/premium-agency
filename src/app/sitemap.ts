import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogArticles } from "@/data/blog";
import { categories } from "@/data/categories";
import { locations } from "@/data/locations";
import { profiles } from "@/data/profiles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap { const paths = ["/", "/profiles", "/locations", "/categories", "/reviews", "/faq", "/contact", "/about", "/privacy", "/terms", "/disclaimer", "/blog", ...profiles.map((item) => `/profiles/${item.slug}`), ...locations.map((item) => `/locations/${item.slug}`), ...categories.map((item) => `/categories/${item.slug}`), ...blogArticles.map((item) => `/blog/${item.slug}`)]; return paths.map((path) => ({ url: `${siteConfig.siteUrl.replace(/\/$/, "")}${path}`, lastModified: new Date("2026-08-01"), changeFrequency: path.startsWith("/blog") ? "monthly" : "weekly", priority: path === "/" ? 1 : 0.7 })); }