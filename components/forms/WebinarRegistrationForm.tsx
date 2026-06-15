"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, ExternalLink } from "lucide-react";
import { submitNetlifyForm } from "@/lib/netlify";
import { NETLIFY_FORM_NAMES } from "@/lib/constants";
import { EASE } from "@/lib/motion";

interface WebinarRegistrationFormProps {
  slug: string;
  title: string;
  zoomRegistrationUrl: string;
  startISO: string;
}

const isZoomConfigured = (url: string) => !url.includes("REPLACE-WITH");

export function WebinarRegistrationForm({
  slug,
  title,
  zoomRegistrationUrl,
  startISO,
}: WebinarRegistrationFormProps) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      webinar_slug: slug,
      webinar_title: title,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      agency: String(data.get("agency") ?? ""),
      role: String(data.get("role") ?? ""),
      learning_goals: String(data.get("learning_goals") ?? ""),
    };
    try {
      // 1) Capture attendee in Netlify Forms dashboard so Ericka has a list
      //    independent of Zoom's reporting.
      const netlifyRes = await submitNetlifyForm(
        NETLIFY_FORM_NAMES.webinarRegistration,
        payload
      );
      if (!netlifyRes.ok && netlifyRes.status !== 405) {
        throw new Error("Could not save your registration. Try again.");
      }
      setDone(true);
      // 2) Hand the user off to Zoom's hosted registration form so Zoom
      //    issues the unique join link and reminder emails. Open in a new
      //    tab to preserve the confirmation we just showed.
      if (isZoomConfigured(zoomRegistrationUrl)) {
        window.open(zoomRegistrationUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="border border-brand-gold/40 bg-brand-gold/5 rounded-sm p-6"
      >
        <div className="flex items-start gap-3">
          <CheckCircle
            size={20}
            className="text-brand-gold shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div>
            <h3 className="font-serif text-lg text-brand-ink mb-2">
              You&apos;re on the list.
            </h3>
            {isZoomConfigured(zoomRegistrationUrl) ? (
              <p className="font-sans text-sm text-brand-muted leading-relaxed mb-4">
                A new tab is opening with Zoom&apos;s registration form. Complete
                it to receive your unique join link. If the tab did not open,{" "}
                <a
                  href={zoomRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold underline font-medium inline-flex items-center gap-1"
                >
                  click here <ExternalLink size={12} />
                </a>
                .
              </p>
            ) : (
              <p className="font-sans text-sm text-brand-muted leading-relaxed mb-4">
                We&apos;ve recorded your interest. Once the Zoom link is live,
                you&apos;ll receive a confirmation and join link by email.
              </p>
            )}
            <p className="font-sans text-xs text-brand-muted">
              Saved on{" "}
              {new Date().toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}{" "}
              · {new Date(startISO).toLocaleString()}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      name={NETLIFY_FORM_NAMES.webinarRegistration}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="bg-white border border-brand-border rounded-sm p-6 md:p-8 shadow-sm space-y-5"
    >
      <input type="hidden" name="form-name" value={NETLIFY_FORM_NAMES.webinarRegistration} />
      <input type="hidden" name="webinar_slug" value={slug} />
      <input type="hidden" name="webinar_title" value={title} />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="wr-name" className="label-editorial">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="wr-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input-editorial w-full"
          />
        </div>
        <div>
          <label htmlFor="wr-email" className="label-editorial">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="wr-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            className="input-editorial w-full"
          />
        </div>
        <div>
          <label htmlFor="wr-agency" className="label-editorial">
            Federal Agency
          </label>
          <input
            id="wr-agency"
            name="agency"
            type="text"
            placeholder="Department of Veterans Affairs"
            className="input-editorial w-full"
          />
        </div>
        <div>
          <label htmlFor="wr-role" className="label-editorial">
            Your Role
          </label>
          <input
            id="wr-role"
            name="role"
            type="text"
            placeholder="GS-13 program analyst"
            className="input-editorial w-full"
          />
        </div>
      </div>

      <div>
        <label htmlFor="wr-goals" className="label-editorial">
          What do you hope to learn?
        </label>
        <textarea
          id="wr-goals"
          name="learning_goals"
          rows={3}
          placeholder="Optional — one or two lines. Helps shape the Q&A portion."
          className="input-editorial w-full"
        />
      </div>

      {error && (
        <div role="alert" className="p-3 bg-red-50 border border-red-200 rounded-sm">
          <p className="font-sans text-sm text-red-700">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-gold/90 transition-colors disabled:opacity-60"
      >
        {loading ? <Loader2 size={15} className="animate-spin" /> : null}
        {loading ? "Registering…" : "Register Free"}
      </button>

      <p className="font-sans text-xs text-brand-muted leading-relaxed text-center">
        We&apos;ll send the join link by email. Cannot attend live? Register
        anyway — we&apos;ll send you the recording afterward.
      </p>
    </form>
  );
}
