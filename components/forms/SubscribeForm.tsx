"use client";

import { useState } from "react";
import { CheckCircle, Mail, Loader2 } from "lucide-react";
import { submitNetlifyForm } from "@/lib/netlify";
import { NETLIFY_FORM_NAMES } from "@/lib/constants";

interface SubscribeFormProps {
  /** Where the subscription is being captured from — e.g. "footer", "resources-page". */
  source: string;
  /** Optional override label for the button. */
  buttonLabel?: string;
  className?: string;
}

export function SubscribeForm({
  source,
  buttonLabel = "Subscribe",
  className,
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(null);
    try {
      const res = await submitNetlifyForm(
        NETLIFY_FORM_NAMES.resourceSubscription,
        { email, source }
      );
      if (!res.ok && res.status !== 405) {
        throw new Error("Could not subscribe just now. Please try again.");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div
        role="status"
        className={`flex items-start gap-2 text-sm text-brand-ink ${className ?? ""}`}
      >
        <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
        <p className="font-sans">
          Thank you. We&apos;ll send the next resource your way.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      name={NETLIFY_FORM_NAMES.resourceSubscription}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={`flex flex-col sm:flex-row gap-2 ${className ?? ""}`}
    >
      <input type="hidden" name="form-name" value={NETLIFY_FORM_NAMES.resourceSubscription} />
      <input type="hidden" name="source" value={source} />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>
      <label htmlFor={`subscribe-email-${source}`} className="sr-only">
        Email address
      </label>
      <div className="relative flex-1">
        <Mail
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none"
          aria-hidden="true"
        />
        <input
          id={`subscribe-email-${source}`}
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          autoComplete="email"
          inputMode="email"
          className="w-full pl-9 pr-3 py-2.5 bg-white border border-brand-border rounded-sm font-sans text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-navy text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-navy/90 transition-colors disabled:opacity-60"
      >
        {loading ? <Loader2 size={14} className="animate-spin" /> : null}
        {loading ? "Sending…" : buttonLabel}
      </button>
      {error && (
        <p role="alert" className="font-sans text-xs text-red-600 sm:basis-full">
          {error}
        </p>
      )}
    </form>
  );
}
