import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { ARTICLES } from "@/content/articles";
import { WEBINARS } from "@/content/webinars";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/about/press",
  "/services",
  "/resources",
  "/resources/glossary",
  "/resources/faq",
  "/resources/process",
  "/webinars",
  "/contact",
  "/book",
  "/brand",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1.0 : path.startsWith("/resources") ? 0.9 : 0.7,
  }));
  const articles = ARTICLES.map((a) => ({
    url: `${SITE_URL}/resources/${a.slug}`,
    lastModified: new Date(a.lastReviewed),
    changeFrequency: "yearly" as const,
    priority: 0.85,
  }));
  const webinars = WEBINARS.map((w) => ({
    url: `${SITE_URL}/webinars/${w.slug}`,
    lastModified: new Date(w.startISO),
    changeFrequency: "weekly" as const,
    priority: w.status === "upcoming" ? 0.95 : 0.6,
  }));
  return [...base, ...articles, ...webinars];
}
