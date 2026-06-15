"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { upcomingWebinars } from "@/content/webinars";

const STORAGE_KEY = "ivtsf-pinned-webinar-dismissed";

function formatDateShort(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/**
 * A thin slab above the navbar shown only when the nearest upcoming webinar
 * is within 14 days. Dismissible per webinar via localStorage.
 */
export function PinnedWebinarBanner() {
  const next = upcomingWebinars()[0];
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (!next) return;
    const stored = typeof window === "undefined" ? "" : localStorage.getItem(STORAGE_KEY) ?? "";
    if (stored === next.slug) {
      setDismissed(true);
      return;
    }
    const start = new Date(next.startISO).getTime();
    const fourteenDays = 14 * 24 * 60 * 60 * 1000;
    setDismissed(start - Date.now() > fourteenDays || start < Date.now());
  }, [next]);

  if (!next || dismissed) return null;

  return (
    <div className="bg-brand-navy text-white border-b border-white/10" role="region" aria-label="Upcoming webinar banner">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0 font-sans" style={{ fontSize: "0.78rem", letterSpacing: "0.08em" }}>
          <span
            aria-hidden="true"
            className="inline-block w-2 h-2 rounded-full bg-brand-gold animate-pulse"
          />
          <span className="text-brand-gold uppercase shrink-0" style={{ letterSpacing: "0.18em", fontWeight: 600 }}>
            Upcoming
          </span>
          <Link
            href={`/webinars/${next.slug}/`}
            className="truncate hover:underline"
          >
            {next.title} — {formatDateShort(next.startISO)}
          </Link>
        </div>
        <button
          type="button"
          aria-label="Dismiss banner"
          onClick={() => {
            try {
              localStorage.setItem(STORAGE_KEY, next.slug);
            } catch {}
            setDismissed(true);
          }}
          className="text-white/60 hover:text-white p-1 shrink-0"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
