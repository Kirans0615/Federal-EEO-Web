/**
 * Article metadata registry.
 *
 * Flagship articles live as TS modules in content/articles/<slug>.ts because
 * the bodies are long-form and benefit from real syntax + IDE help. Each one
 * exports an `article: Article` matching this schema.
 *
 * Status flag controls the "Draft pending review" banner — flip from
 * "draft" to "published" once Ericka approves.
 */

import type { CaseStageValue } from "@/lib/schema";

export type ArticleSection =
  | "process-guides"
  | "rights-explainers"
  | "strategic-frameworks";

export type ArticleStatus = "draft" | "published";

export interface ArticleHeading {
  /** Anchor used by the in-page TOC and intra-article links. */
  id: string;
  text: string;
  /** Heading level — H2 only for the TOC. */
  level: 2 | 3;
}

export type ArticleBlock =
  | { kind: "h2"; id: string; text: string }
  | { kind: "h3"; id: string; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "pullquote"; text: string; attribution?: string }
  | {
      kind: "callout";
      tone: "warning" | "info" | "deadline";
      title: string;
      text: string;
    }
  | { kind: "key-takeaways"; items: string[] };

export interface Article {
  slug: string;
  title: string;
  /** One-line dek under the title. */
  dek: string;
  section: ArticleSection;
  status: ArticleStatus;
  /** ISO 8601 date (date-only OK). */
  published: string;
  lastReviewed: string;
  /** Case stages this article is most relevant to. Cross-referenced from intake. */
  applicableStages: CaseStageValue[];
  /** Computed lazily — see lib/article.ts. */
  body: ArticleBlock[];
}

/** Re-export concrete articles by slug for [slug] page lookup. */
import { article as theFortyFiveDayClock } from "./articles/the-45-day-clock";
import { article as reasonableAccommodation } from "./articles/reasonable-accommodation";
import { article as readingYourRoi } from "./articles/reading-your-roi";

export const ARTICLES: Article[] = [
  theFortyFiveDayClock,
  reasonableAccommodation,
  readingYourRoi,
];

export const getArticleBySlug = (slug: string) =>
  ARTICLES.find((a) => a.slug === slug);

export const articlesBySection = (section: ArticleSection) =>
  ARTICLES.filter((a) => a.section === section);

export const articlesForStage = (stage: CaseStageValue) =>
  ARTICLES.filter((a) => a.applicableStages.includes(stage));

/* Reading-time helper — 225 wpm benchmark. */
export const readingMinutes = (a: Article): number => {
  const words = a.body.reduce((sum, b) => {
    if (b.kind === "p" || b.kind === "h2" || b.kind === "h3")
      return sum + b.text.split(/\s+/).length;
    if (b.kind === "ul" || b.kind === "ol")
      return sum + b.items.join(" ").split(/\s+/).length;
    if (b.kind === "pullquote") return sum + b.text.split(/\s+/).length;
    if (b.kind === "callout")
      return sum + (b.title + " " + b.text).split(/\s+/).length;
    if (b.kind === "key-takeaways")
      return sum + b.items.join(" ").split(/\s+/).length;
    return sum;
  }, 0);
  return Math.max(1, Math.round(words / 225));
};
