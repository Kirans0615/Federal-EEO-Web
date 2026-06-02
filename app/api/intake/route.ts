import { NextRequest, NextResponse } from "next/server";
import { IntakeSchema, CASE_STAGE_LABELS } from "@/lib/schema";

// GET handler allows Next.js static export to include this route
// (static export only supports GET; POST is excluded from the ./out artifact)
export async function GET() {
  return NextResponse.json(
    {
      message: "POST to this endpoint to submit the intake form. Only available on the live site.",
      liveUrl: "https://kirans0615.github.io/Federal-EEO-Web/contact/",
    },
    { status: 200 }
  );
}

// Lazy-import heavy deps to keep cold start fast
async function getDb() {
  const { sql } = await import("@vercel/postgres");
  return sql;
}

async function getResend() {
  const { Resend } = await import("resend");
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = IntakeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // 1. Write lead to Postgres
    const sql = await getDb();
    let leadId: number | undefined;
    try {
      const { rows } = await sql`
        INSERT INTO leads (
          name, agency, work_email, personal_email, phone,
          case_stage, case_description, contact_method, time_sensitive, status, created_at
        ) VALUES (
          ${data.name}, ${data.agency}, ${data.work_email},
          ${data.personal_email ?? null}, ${data.phone},
          ${data.case_stage}, ${data.case_description},
          ${data.contact_method}, ${data.time_sensitive}, 'new', NOW()
        )
        RETURNING id
      `;
      leadId = rows[0]?.id;
    } catch (dbErr) {
      console.error("DB write failed:", dbErr);
      // Non-fatal: still send emails
    }

    const resend = await getResend();
    const CAL_LINK = process.env.CAL_SCHEDULING_LINK ?? "https://cal.com/federal-eeo";
    const FIRM_EMAIL = "edorsey@federal-eeo.com";
    const FROM = "Federal EEO, LLC <noreply@federal-eeo.com>";
    const stageLabel = CASE_STAGE_LABELS[data.case_stage];

    // 2. Confirmation email to lead
    const confirmTo = [data.work_email];
    if (data.personal_email) confirmTo.push(data.personal_email);

    const confirmPlain = `
Federal EEO, LLC — Consultation Request Received

Dear ${data.name},

Thank you for contacting Federal EEO, LLC. We have received your intake information and will follow up within one business day.

To complete your booking, please select a time that works for you:
${CAL_LINK}

Current Stage: ${stageLabel}
${data.time_sensitive ? "\n⚠️ YOUR MATTER HAS BEEN FLAGGED AS TIME-SENSITIVE. We will prioritize your inquiry.\n" : ""}

IMPORTANT REMINDER: If you are within the 45-day window for EEO counselor contact, do not wait. Contact your agency's EEO office immediately if you have not already done so.

—
Ericka Guthrie Dorsey, Esq.
Federal EEO, LLC | Consultants & Advocates
Washington, DC | edorsey@federal-eeo.com
federal-eeo.com

DISCLAIMER: This email is for strategic guidance purposes only. It does not create an attorney-client relationship or guarantee representation.

To unsubscribe from transactional messages, reply with "unsubscribe" in the subject line.
Federal EEO, LLC | Washington, DC
    `.trim();

    const confirmHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Consultation Request Received</title></head>
<body style="margin:0;padding:0;background:#F4EFE6;font-family:Georgia,serif;">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 16px;">
<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #D4C9B8;border-radius:4px;overflow:hidden;">
  <tr><td style="background:#1B2A4A;padding:32px 40px;text-align:center;">
    <p style="color:#C4922A;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px;">Federal EEO, LLC</p>
    <p style="color:#fff;font-size:22px;margin:0;font-weight:600;">Consultation Request Received</p>
  </td></tr>
  <tr><td style="padding:40px;">
    <p style="color:#1C1C2E;font-size:16px;line-height:1.6;margin:0 0 20px;">Dear ${data.name},</p>
    <p style="color:#1C1C2E;font-size:15px;line-height:1.7;margin:0 0 20px;">Thank you for contacting <strong>Federal EEO, LLC</strong>. We have received your intake information and will follow up within one business day.</p>
    ${data.time_sensitive ? `<table width="100%" style="background:#FFF7ED;border:1px solid #FED7AA;border-radius:4px;margin:0 0 20px;"><tr><td style="padding:16px;"><p style="color:#92400E;font-size:14px;margin:0;"><strong>⚠️ TIME-SENSITIVE FLAG RECEIVED.</strong> Your matter has been flagged as urgent. We will prioritize your inquiry. If you are within days of the 45-day deadline, please also contact your agency's EEO office directly.</p></td></tr></table>` : ""}
    <p style="color:#1C1C2E;font-size:15px;margin:0 0 16px;">To complete your booking, select a time that works for you:</p>
    <table><tr><td style="background:#C4922A;border-radius:4px;"><a href="${CAL_LINK}" style="display:inline-block;padding:14px 28px;color:#fff;font-size:14px;text-decoration:none;font-weight:600;">Schedule Your Consultation →</a></td></tr></table>
    <hr style="border:none;border-top:1px solid #D4C9B8;margin:32px 0;">
    <p style="color:#6B7280;font-size:11px;line-height:1.6;margin:0 0 8px;"><strong>DISCLAIMER:</strong> Consultations are for strategic guidance and case assessment based on the information available at the time of the meeting. Booking a consultation with Federal EEO, LLC does not create an attorney-client relationship or guarantee representation.</p>
    <p style="color:#6B7280;font-size:11px;margin:0;">Federal EEO, LLC | Washington, DC | edorsey@federal-eeo.com | <a href="https://federal-eeo.com/privacy" style="color:#6B7280;">Unsubscribe</a></p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;

    // 3. Notification to Ericka
    const notifyPlain = `
NEW INTAKE — Federal EEO, LLC
${data.time_sensitive ? "⚠️⚠️⚠️ TIME-SENSITIVE — PRIORITIZE ⚠️⚠️⚠️" : ""}

Name:             ${data.name}
Agency:           ${data.agency}
Work Email:       ${data.work_email}
Personal Email:   ${data.personal_email || "Not provided"}
Phone:            ${data.phone}
Contact Method:   ${data.contact_method}
Case Stage:       ${stageLabel}
Time-Sensitive:   ${data.time_sensitive ? "YES — URGENT" : "No"}
Lead ID:          ${leadId ?? "DB write pending"}
Submitted:        ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET

CASE DESCRIPTION:
${data.case_description}
    `.trim();

    const notifyHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Intake</title></head>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:20px;">
<table width="600" style="background:#fff;border:1px solid #ddd;border-radius:4px;overflow:hidden;margin:0 auto;">
  <tr><td style="background:${data.time_sensitive ? "#DC2626" : "#1B2A4A"};padding:20px 28px;">
    <p style="color:#fff;font-size:18px;font-weight:700;margin:0;">
      ${data.time_sensitive ? "⚠️ TIME-SENSITIVE — " : ""}New Intake: ${data.name}
    </p>
    <p style="color:rgba(255,255,255,0.8);font-size:12px;margin:6px 0 0;">${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET</p>
  </td></tr>
  <tr><td style="padding:28px;">
    <table width="100%" cellspacing="0">
      ${[
        ["Agency", data.agency],
        ["Work Email", data.work_email],
        ["Personal Email", data.personal_email || "—"],
        ["Phone", data.phone],
        ["Contact Method", data.contact_method],
        ["Case Stage", stageLabel],
        ["Lead ID", String(leadId ?? "pending")],
      ].map(([k, v]) => `<tr><td style="padding:6px 0;color:#6B7280;font-size:13px;width:140px;vertical-align:top;">${k}</td><td style="padding:6px 0;color:#1C1C2E;font-size:13px;">${v}</td></tr>`).join("")}
    </table>
    <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
    <p style="color:#1C1C2E;font-size:13px;font-weight:700;margin:0 0 8px;">Case Description</p>
    <p style="color:#374151;font-size:14px;line-height:1.7;white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:4px;">${data.case_description}</p>
  </td></tr>
</table>
</body></html>`;

    // Send both emails (fire-and-forget errors are logged, not surfaced to user)
    const [confirmResult, notifyResult] = await Promise.allSettled([
      resend.emails.send({
        from:       FROM,
        to:         confirmTo,
        replyTo:    FIRM_EMAIL,
        subject:    `Your Federal EEO Consultation Request — Next Steps`,
        html:       confirmHtml,
        text:       confirmPlain,
        headers: {
          "List-Unsubscribe": `<mailto:noreply@federal-eeo.com?subject=unsubscribe>`,
        },
      }),
      resend.emails.send({
        from:    FROM,
        to:      [FIRM_EMAIL],
        replyTo: data.work_email,
        subject: `${data.time_sensitive ? "[TIME-SENSITIVE] " : ""}New Intake: ${data.name} — ${data.agency}`,
        html:    notifyHtml,
        text:    notifyPlain,
      }),
    ]);

    if (confirmResult.status === "rejected") {
      console.error("Confirmation email failed:", confirmResult.reason);
    }
    if (notifyResult.status === "rejected") {
      console.error("Notification email failed:", notifyResult.reason);
    }

    return NextResponse.json({ success: true, leadId });
  } catch (err) {
    console.error("Intake API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
