/**
 * Netlify Forms — static schema declarations.
 *
 * Netlify's build bot parses the static HTML output looking for plain <form>
 * elements with `name` and `data-netlify="true"` attributes. The bot uses
 * those forms to provision the form endpoints in the Netlify dashboard.
 *
 * Because we ship interactive React forms (multi-step, validated), the
 * interactive forms cannot be the form Netlify sees. Instead, every Netlify
 * form ships in TWO copies:
 *
 *   1. The interactive form (under /components/forms/*) — what users see
 *      and interact with. It submits via fetch to "/" with the appropriate
 *      `form-name` value as URL-encoded body.
 *
 *   2. A hidden static <form> rendered by this component — what Netlify's
 *      build bot reads. It contains every field name the interactive form
 *      will submit, with `hidden` and `display: none` so it never paints.
 *
 * This file is mounted once in app/layout.tsx so the schema lives on every
 * page of the static export. Adding a new Netlify form is a one-step edit:
 * add another <form> here with the field names you intend to submit.
 *
 * Submissions only flow to Netlify's dashboard when the site is hosted on
 * Netlify (or proxied through their submission endpoint). The schema deploys
 * with the static site to GitHub Pages, but submissions there will fail.
 * See SETUP.md → Netlify Forms.
 */

import { NETLIFY_FORM_NAMES } from "@/lib/constants";

export function NetlifyFormSchemas() {
  return (
    <div hidden aria-hidden="true" style={{ display: "none" }}>
      {/* 1. Consultation intake — mirrors components/forms/IntakeForm.tsx */}
      <form name={NETLIFY_FORM_NAMES.intake} data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="bot-field" />
        <input type="text" name="form-name" />
        <input type="text" name="name" />
        <input type="text" name="agency" />
        <input type="email" name="work_email" />
        <input type="email" name="personal_email" />
        <input type="tel" name="phone" />
        <input type="text" name="case_stage" />
        <textarea name="case_description" />
        <input type="text" name="contact_method" />
        <input type="text" name="time_sensitive" />
      </form>

      {/* 2. Resource subscription — single-field email capture */}
      <form name={NETLIFY_FORM_NAMES.resourceSubscription} data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="bot-field" />
        <input type="text" name="form-name" />
        <input type="email" name="email" />
        <input type="text" name="source" />
      </form>

      {/* 3. Webinar registration — duplicated to Netlify alongside Zoom submit */}
      <form name={NETLIFY_FORM_NAMES.webinarRegistration} data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="bot-field" />
        <input type="text" name="form-name" />
        <input type="text" name="webinar_slug" />
        <input type="text" name="webinar_title" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="agency" />
        <input type="text" name="role" />
        <textarea name="learning_goals" />
      </form>
    </div>
  );
}
