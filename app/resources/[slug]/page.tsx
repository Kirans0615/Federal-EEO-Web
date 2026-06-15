import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ARTICLES,
  getArticleBySlug,
  readingMinutes,
  type Article,
  type ArticleBlock,
} from "@/content/articles";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, FIRM } from "@/lib/constants";
import { ArticleSidebar } from "./ArticleSidebar";
import {
  Clock,
  Calendar,
  RefreshCw,
  AlertTriangle,
  Info,
  CalendarClock,
  ArrowRight,
} from "lucide-react";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const a = getArticleBySlug(params.slug);
  if (!a) return {};
  const url = `${SITE_URL}/resources/${a.slug}/`;
  return {
    title: a.title,
    description: a.dek,
    openGraph: {
      title: a.title,
      description: a.dek,
      type: "article",
      url,
      publishedTime: a.published,
      modifiedTime: a.lastReviewed,
      authors: [FIRM.attorney],
      section: a.section.replace(/-/g, " "),
    },
    twitter: { card: "summary_large_image", title: a.title, description: a.dek },
  };
}

const toc = (a: Article) =>
  a.body.filter((b): b is Extract<ArticleBlock, { kind: "h2" }> => b.kind === "h2");

function CalloutIcon({ tone }: { tone: "warning" | "info" | "deadline" }) {
  if (tone === "warning")
    return <AlertTriangle size={18} className="text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />;
  if (tone === "deadline")
    return <CalendarClock size={18} className="text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />;
  return <Info size={18} className="text-brand-navy shrink-0 mt-0.5" aria-hidden="true" />;
}

function calloutClasses(tone: "warning" | "info" | "deadline") {
  if (tone === "warning")
    return "border-amber-200 bg-amber-50 text-amber-900";
  if (tone === "deadline")
    return "border-brand-gold/30 bg-brand-gold/5 text-brand-ink";
  return "border-brand-navy/15 bg-brand-navy/5 text-brand-ink";
}

function renderBlock(block: ArticleBlock, i: number) {
  if (block.kind === "h2") {
    return (
      <h2
        key={i}
        id={block.id}
        className="font-serif text-3xl md:text-4xl text-brand-navy mt-16 mb-5 scroll-mt-24 text-balance"
      >
        {block.text}
      </h2>
    );
  }
  if (block.kind === "h3") {
    return (
      <h3
        key={i}
        id={block.id}
        className="font-serif text-xl md:text-2xl text-brand-navy mt-10 mb-3 scroll-mt-24"
      >
        {block.text}
      </h3>
    );
  }
  if (block.kind === "p") {
    return (
      <p
        key={i}
        className="font-serif text-brand-ink text-lg leading-[1.75] mb-6 max-w-prose"
      >
        {block.text}
      </p>
    );
  }
  if (block.kind === "ul") {
    return (
      <ul
        key={i}
        className="list-disc pl-6 my-6 space-y-3 max-w-prose marker:text-brand-gold"
      >
        {block.items.map((it, idx) => (
          <li
            key={idx}
            className="font-serif text-brand-ink text-lg leading-relaxed"
          >
            {it}
          </li>
        ))}
      </ul>
    );
  }
  if (block.kind === "ol") {
    return (
      <ol
        key={i}
        className="list-decimal pl-6 my-6 space-y-3 max-w-prose marker:text-brand-gold marker:font-sans marker:font-semibold"
      >
        {block.items.map((it, idx) => (
          <li
            key={idx}
            className="font-serif text-brand-ink text-lg leading-relaxed pl-2"
          >
            {it}
          </li>
        ))}
      </ol>
    );
  }
  if (block.kind === "pullquote") {
    return (
      <blockquote
        key={i}
        className="border-l-2 border-brand-gold pl-7 my-10 max-w-3xl"
      >
        <p className="font-serif italic text-2xl md:text-3xl text-brand-navy leading-snug text-balance">
          &ldquo;{block.text}&rdquo;
        </p>
        {block.attribution && (
          <footer className="font-sans text-sm text-brand-muted mt-3">
            — {block.attribution}
          </footer>
        )}
      </blockquote>
    );
  }
  if (block.kind === "callout") {
    return (
      <aside
        key={i}
        className={`my-10 max-w-prose border rounded-sm p-5 flex gap-4 ${calloutClasses(block.tone)}`}
      >
        <CalloutIcon tone={block.tone} />
        <div>
          <p className="font-sans text-xs tracking-[0.18em] uppercase font-semibold mb-2">
            {block.title}
          </p>
          <p className="font-serif text-base leading-relaxed">{block.text}</p>
        </div>
      </aside>
    );
  }
  if (block.kind === "key-takeaways") {
    return (
      <section
        key={i}
        className="my-14 max-w-prose bg-white border border-brand-border rounded-sm p-7 md:p-9"
        aria-label="Key takeaways"
      >
        <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
          Key takeaways
        </p>
        <ul className="space-y-3">
          {block.items.map((it, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0"
                aria-hidden="true"
              />
              <span className="font-serif text-brand-ink text-base leading-relaxed">
                {it}
              </span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  return null;
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();
  const headings = toc(article);
  const reading = readingMinutes(article);
  const url = `${SITE_URL}/resources/${article.slug}/`;
  const isDraft = article.status === "draft";

  return (
    <>
      <ArticleJsonLd
        headline={article.title}
        description={article.dek}
        published={article.published}
        lastReviewed={article.lastReviewed}
        url={url}
        section={article.section.replace(/-/g, " ")}
      />

      {isDraft && (
        <div
          role="note"
          className="bg-amber-50 border-b border-amber-200 text-amber-900 text-sm font-sans py-2.5 px-6 text-center sticky top-16 z-30 lg:top-20"
        >
          <strong className="font-semibold">Draft pending review by Ericka G. Dorsey, Esq.</strong>{" "}
          Substantive content based on EEOC guidance and 29 CFR Part 1614.
        </div>
      )}

      <section className="bg-brand-navy pt-28 pb-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/resources/"
            className="inline-flex items-center gap-2 font-sans text-sm text-brand-gold hover:text-white transition-colors mb-7"
          >
            ← All resources
          </Link>
          <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
            {article.section.replace(/-/g, " ")}
          </p>
          <h1 className="font-serif text-white text-display-lg leading-[1.05] text-balance mb-5">
            {article.title}
          </h1>
          <p className="font-serif text-white/85 text-lg leading-relaxed max-w-3xl">
            {article.dek}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-xs text-white/75 font-sans">
            <span className="inline-flex items-center gap-2">
              <Clock size={12} aria-hidden="true" />
              {reading} min read
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar size={12} aria-hidden="true" />
              Published {new Date(article.published).toLocaleDateString()}
            </span>
            <span className="inline-flex items-center gap-2">
              <RefreshCw size={12} aria-hidden="true" />
              Reviewed {new Date(article.lastReviewed).toLocaleDateString()}
            </span>
            <span>{FIRM.attorney}</span>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1fr_3fr] gap-10 lg:gap-16">
          <ArticleSidebar headings={headings} />
          <article className="min-w-0">
            {article.body.map((b, i) => renderBlock(b, i))}

            {/* Consultation CTA */}
            <aside className="mt-16 bg-brand-navy text-white rounded-sm p-8 md:p-10 max-w-prose">
              <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
                Next step
              </p>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-3 text-balance">
                Have a question about your situation? Book a strategic
                consultation with Ericka G. Dorsey.
              </h3>
              <p className="font-sans text-sm text-white/75 leading-relaxed mb-6 max-w-lg">
                A focused 30-minute session is the most efficient way to know
                what your case looks like — and what to do next.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-gold/90 transition-colors"
              >
                Book a consultation
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </aside>
          </article>
        </div>
      </section>
    </>
  );
}
