import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ScrollText,
  Compass,
  ArrowRight,
  Clock,
  ListChecks,
  HelpCircle,
  Map as MapIcon,
  Video,
} from "lucide-react";
import { ARTICLES, readingMinutes } from "@/content/articles";
import { SubscribeForm } from "@/components/forms/SubscribeForm";

export const metadata: Metadata = {
  title: "Resources — A working library for federal employees",
  description:
    "Drafted guides, glossary, FAQ, and process map for the federal EEO complaint process. Free, plain-language, written by Ericka G. Dorsey, Esq.",
};

const CATEGORIES = [
  {
    icon: BookOpen,
    title: "Process Guides",
    body: "The federal EEO complaint process end to end — deadlines, decision points, and the language to use at each stage.",
    href: "#process-guides",
  },
  {
    icon: ScrollText,
    title: "Rights Explainers",
    body: "Title VII, the Rehabilitation Act, and the related statutes — what each one actually requires of your agency.",
    href: "#rights-explainers",
  },
  {
    icon: Compass,
    title: "Strategic Frameworks",
    body: "Reading your ROI, preparing for a hearing, and the moments where the strategic decision matters most.",
    href: "#strategic-frameworks",
  },
];

const TOOLS = [
  {
    icon: ListChecks,
    title: "Glossary",
    body: "36 federal EEO terms, plain-English. Bookmark before you read the ROI.",
    href: "/resources/glossary/",
  },
  {
    icon: HelpCircle,
    title: "Frequently asked",
    body: "The questions federal employees actually search for. Searchable answers.",
    href: "/resources/faq/",
  },
  {
    icon: MapIcon,
    title: "Process Map",
    body: "The entire federal EEO process as a scrollable map — from the 45-day clock to the OFO appeal.",
    href: "/resources/process/",
  },
  {
    icon: Video,
    title: "Webinars",
    body: "Live sessions and recordings. Free for federal employees.",
    href: "/webinars/",
  },
];

function ArticleCard({ slug }: { slug: string }) {
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return null;
  return (
    <Link
      href={`/resources/${article.slug}/`}
      className="group block bg-white border border-brand-border rounded-sm p-7 hover:border-brand-gold/40 hover:shadow-sm transition-all"
    >
      <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
        {article.section.replace(/-/g, " ")}
      </p>
      <h3 className="font-serif text-xl text-brand-navy leading-snug mb-3 group-hover:text-brand-gold transition-colors text-balance">
        {article.title}
      </h3>
      <p className="font-sans text-sm text-brand-muted leading-relaxed mb-5">
        {article.dek}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-brand-border/50">
        <span className="inline-flex items-center gap-1 font-sans text-xs text-brand-muted">
          <Clock size={12} aria-hidden="true" />
          {readingMinutes(article)} min read
        </span>
        <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-brand-gold">
          Read <ArrowRight size={14} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export default function ResourcesIndex() {
  return (
    <div className="bg-brand-cream pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
          Resources
        </p>
        <h1 className="font-serif text-display-lg text-brand-navy text-balance max-w-3xl leading-[1.05]">
          A working library for federal employees.
        </h1>
        <p className="font-sans text-brand-muted mt-5 max-w-2xl text-base md:text-lg leading-relaxed">
          Most federal EEO cases are won or lost before anyone steps into a
          hearing room. The deadlines, the documentation, the strategy — these
          are the things we wish every federal employee knew before they needed
          to. Bookmark this page.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-3 gap-5">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href={c.href}
                className="group block bg-white border border-brand-border rounded-sm p-8 hover:border-brand-gold/40 hover:shadow-sm transition-all"
              >
                <Icon size={22} className="text-brand-gold mb-5" aria-hidden="true" />
                <h2 className="font-serif text-2xl text-brand-navy mb-3">{c.title}</h2>
                <p className="font-sans text-sm text-brand-muted leading-relaxed mb-5">
                  {c.body}
                </p>
                <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-brand-gold">
                  Browse <ArrowRight size={14} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {(["process-guides", "rights-explainers", "strategic-frameworks"] as const).map(
        (section) => {
          const items = ARTICLES.filter((a) => a.section === section);
          if (items.length === 0) return null;
          return (
            <section
              key={section}
              id={section}
              className="max-w-7xl mx-auto px-6 md:px-12 mb-16 scroll-mt-24"
            >
              <h2 className="font-serif text-2xl text-brand-navy mb-7 capitalize">
                {section.replace(/-/g, " ")}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((a) => (
                  <ArticleCard key={a.slug} slug={a.slug} />
                ))}
              </div>
            </section>
          );
        }
      )}

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="font-serif text-2xl text-brand-navy mb-7">Reference and tools</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOOLS.map((t) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.title}
                href={t.href}
                className="group block bg-white border border-brand-border rounded-sm p-6 hover:border-brand-gold/40 hover:shadow-sm transition-all"
              >
                <Icon size={20} className="text-brand-gold mb-4" aria-hidden="true" />
                <h3 className="font-serif text-lg text-brand-navy mb-2">{t.title}</h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed">{t.body}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="bg-white border border-brand-border rounded-sm p-8 md:p-10 text-center">
          <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
            Stay in the loop
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-3 text-balance">
            The next resource, directly to your inbox.
          </h2>
          <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6 max-w-md mx-auto">
            New guides and webinar invitations. No spam, no overload. Unsubscribe any time.
          </p>
          <SubscribeForm source="resources-page" className="max-w-md mx-auto" />
        </div>
      </section>
    </div>
  );
}
