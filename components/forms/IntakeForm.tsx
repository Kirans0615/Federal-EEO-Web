"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowRight, ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import { IntakeSchema, IntakeFormData, CASE_STAGE_LABELS } from "@/lib/schema";
import { EASE } from "@/lib/motion";

type Step = 1 | 2 | 3;

const STEP_LABELS: Record<Step, string> = {
  1: "Your Information",
  2: "Your Situation",
  3: "Preferences",
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="error-editorial flex items-center gap-1">
      <span aria-hidden="true">⚠</span> {message}
    </p>
  );
}

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="label-editorial">
      {children}
      {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
    </label>
  );
}

const inputClass =
  "w-full font-sans text-sm text-brand-ink input-editorial";

// Baked in at build time: true on GitHub Pages static export, false on Vercel
const IS_STATIC = process.env.NEXT_PUBLIC_IS_STATIC_EXPORT === "true";

export function IntakeForm() {
  const router = useRouter();
  const [step, setStep]       = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<IntakeFormData>({
    resolver: zodResolver(IntakeSchema),
    defaultValues: { time_sensitive: false, contact_method: "either" },
  });

  const timeSensitive = watch("time_sensitive");

  const stepFields: Record<Step, (keyof IntakeFormData)[]> = {
    1: ["name", "agency", "work_email", "personal_email", "phone"],
    2: ["case_stage", "case_description"],
    3: ["contact_method", "time_sensitive"],
  };

  async function goNext() {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(s + 1, 3) as Step);
  }

  async function onSubmit(data: IntakeFormData) {
    if (IS_STATIC) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Submission failed. Please try again.");
      }
      router.push("/book?submitted=true");
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border border-brand-border rounded-sm p-8 shadow-sm">

      {/* Static preview notice — only shown on GitHub Pages build */}
      {IS_STATIC && (
        <div className="mb-6 p-5 bg-brand-navy/5 border border-brand-navy/20 rounded-sm flex gap-3" role="note">
          <div className="w-0.5 bg-brand-navy shrink-0 rounded-full" aria-hidden="true" />
          <div>
            <p className="font-sans text-sm font-semibold text-brand-navy mb-1">
              Form submissions are only available on the live site
            </p>
            <p className="font-sans text-xs text-brand-muted mb-3 leading-relaxed">
              This is a static preview of the Federal EEO, LLC website. The intake form is
              for display only here — to submit a real consultation request, please visit
              the production site.
            </p>
            <a
              href="https://kirans0615.github.io/Federal-EEO-Web/contact/"
              className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-brand-gold hover:underline"
            >
              Go to the live site to submit
              <ArrowRight size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}

      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          {([1, 2, 3] as Step[]).map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-sans font-semibold transition-colors duration-300 ${
                  s < step
                    ? "bg-brand-gold text-white"
                    : s === step
                    ? "bg-brand-navy text-white"
                    : "bg-brand-cream text-brand-muted border border-brand-border"
                }`}
                aria-current={s === step ? "step" : undefined}
              >
                {s < step ? <CheckCircle size={14} /> : s}
              </div>
              {s < 3 && (
                <div className={`flex-1 h-0.5 w-12 transition-colors duration-300 ${s < step ? "bg-brand-gold" : "bg-brand-border"}`} />
              )}
            </div>
          ))}
        </div>
        <p className="font-sans text-sm text-brand-muted">
          Step {step} of 3 — <span className="font-medium text-brand-ink">{STEP_LABELS[step]}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <AnimatePresence mode="wait">
          {/* Step 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="space-y-5"
            >
              <div>
                <Label htmlFor="name" required>Full Name</Label>
                <input id="name" type="text" {...register("name")} className={inputClass} placeholder="Your full name" autoComplete="name" />
                <FieldError message={errors.name?.message} />
              </div>
              <div>
                <Label htmlFor="agency" required>Federal Agency</Label>
                <input id="agency" type="text" {...register("agency")} className={inputClass} placeholder="e.g. Department of Veterans Affairs" />
                <FieldError message={errors.agency?.message} />
              </div>
              <div>
                <Label htmlFor="work_email" required>Work Email</Label>
                <input id="work_email" type="email" {...register("work_email")} className={inputClass} placeholder="you@agency.gov" autoComplete="email" inputMode="email" />
                <FieldError message={errors.work_email?.message} />
              </div>
              <div>
                <Label htmlFor="personal_email">Personal Email <span className="text-brand-muted font-normal">(recommended)</span></Label>
                <input id="personal_email" type="email" {...register("personal_email")} className={inputClass} placeholder="you@gmail.com" autoComplete="email" inputMode="email" />
                <p className="helper-editorial">Recommended — government email filters may block confirmation messages.</p>
                <FieldError message={errors.personal_email?.message} />
              </div>
              <div>
                <Label htmlFor="phone" required>Phone Number</Label>
                <input id="phone" type="tel" {...register("phone")} className={inputClass} placeholder="(555) 000-0000" autoComplete="tel" inputMode="tel" />
                <FieldError message={errors.phone?.message} />
              </div>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="space-y-5"
            >
              <div>
                <Label htmlFor="case_stage" required>Current Stage of Your Matter</Label>
                <select id="case_stage" {...register("case_stage")} className={inputClass}>
                  <option value="" disabled>Select current stage</option>
                  {Object.entries(CASE_STAGE_LABELS).map(([val, label]) => (
                    <option key={val} value={val}>{label}</option>
                  ))}
                </select>
                <FieldError message={errors.case_stage?.message} />
              </div>
              <div>
                <Label htmlFor="case_description" required>Brief Description of Your Matter</Label>
                <textarea
                  id="case_description"
                  {...register("case_description")}
                  rows={5}
                  className={inputClass}
                  placeholder="Please briefly describe the situation — what happened, when it happened, and what outcome you are seeking. Do not include highly sensitive information at this stage."
                />
                <p className="helper-editorial">
                  Do not include Social Security numbers, medical diagnoses, or other highly sensitive details here.
                </p>
                <FieldError message={errors.case_description?.message} />
              </div>
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="space-y-6"
            >
              <div>
                <Label htmlFor="contact_method" required>Preferred Contact Method</Label>
                <select id="contact_method" {...register("contact_method")} className={inputClass}>
                  <option value="either">Either phone or email</option>
                  <option value="email">Email only</option>
                  <option value="phone">Phone only</option>
                </select>
                <FieldError message={errors.contact_method?.message} />
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      {...register("time_sensitive")}
                      className="sr-only peer"
                      id="time_sensitive"
                    />
                    <div className="w-5 h-5 border-2 border-brand-border rounded-sm peer-checked:bg-brand-gold peer-checked:border-brand-gold transition-colors duration-200" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 peer-checked:opacity-100">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="font-sans text-sm font-medium text-brand-ink block">
                      This matter may be time-sensitive
                    </span>
                    <span className="font-sans text-xs text-brand-muted">
                      Check this if you are within or near the 45-day window, or have an imminent deadline.
                    </span>
                  </div>
                </label>
              </div>

              {timeSensitive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-sm p-4"
                >
                  <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="font-sans text-sm text-amber-800">
                    <strong>Important:</strong> Your inquiry will be flagged as time-sensitive. We will prioritize
                    your matter. If you are within days of a deadline, please also call us directly.
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error */}
        {error && (
          <div role="alert" className="mt-5 p-4 bg-red-50 border border-red-200 rounded-sm">
            <p className="font-sans text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(s - 1, 1) as Step)}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand-border text-brand-ink text-sm font-sans rounded-sm hover:bg-brand-cream transition-colors duration-200"
            >
              <ArrowLeft size={15} /> Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-navy/90 transition-colors duration-200"
            >
              Continue <ArrowRight size={15} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading || IS_STATIC}
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-gold text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-gold/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <><Loader2 size={15} className="animate-spin" /> Submitting…</>
              ) : (
                <>Submit &amp; Schedule <ArrowRight size={15} /></>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
