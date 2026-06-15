import type { Article } from "../articles";

export const article: Article = {
  slug: "the-45-day-clock",
  title: "The 45-Day Clock: A Federal Employee's First Move",
  dek: "Every federal EEO case starts with a deadline most employees do not know exists. Here is how it works, what it actually covers, and what to do before you call the EEO office.",
  section: "process-guides",
  status: "draft",
  published: "2026-06-15",
  lastReviewed: "2026-06-15",
  applicableStages: ["pre_complaint", "not_sure"],
  body: [
    {
      kind: "p",
      text: "There is a deadline at the start of every federal EEO case that most federal employees do not know exists. It is short — forty-five calendar days — and the consequences of missing it are unforgiving. It is also where the work of building a case actually begins, before any complaint is filed and often before the federal employee has decided whether to file anything at all.",
    },
    {
      kind: "p",
      text: "This article walks through the 45-day window from a practitioner's perspective. We cover what triggers the clock, what does not, what a federal employee should be doing during the window, how informal counseling works, and where the choice between traditional counseling and ADR mediation actually matters.",
    },
    {
      kind: "callout",
      tone: "deadline",
      title: "The deadline",
      text: "Under 29 CFR § 1614.105(a)(1), a federal employee who believes they have been subjected to discrimination must initiate contact with the agency's EEO counselor within 45 calendar days of the discriminatory event — or within 45 calendar days of the effective date of an alleged discriminatory personnel action.",
    },

    { kind: "h2", id: "what-triggers", text: "What triggers the 45-day clock" },
    {
      kind: "p",
      text: "The clock starts on the date of the discriminatory action — not the date the federal employee realizes the action was discriminatory, and not the date a finished theory of the case is in hand. The regulation imposes a reasonable-person standard: the clock runs from when the employee knew, or reasonably should have known, of the action.",
    },
    {
      kind: "p",
      text: "For discrete events — a non-selection, a removal, a denial of a within-grade increase, a denial of a request for reasonable accommodation — the trigger date is usually the date of the formal notification. The agency tells the employee the result, and the clock starts the next day.",
    },
    {
      kind: "p",
      text: "For ongoing patterns — a hostile work environment, a course of retaliation, a sustained denial of training opportunities — the analysis is different. A hostile work environment claim is timely if at least one act contributing to the environment occurred within the 45-day window. That single timely act allows the entire pattern to be considered, even though earlier conduct standing alone would be untimely.",
    },
    {
      kind: "p",
      text: "Several common workplace events do not, on their own, start the clock: a verbal warning that is not followed by formal action, a difficult meeting with a supervisor, an unwelcome comment in a one-on-one, a poor draft performance evaluation that is not yet finalized. These may be evidence in the eventual claim — they are usually not, by themselves, the triggering event.",
    },

    {
      kind: "pullquote",
      text: "The clock starts on the date of the action — not the date you realize the action was discriminatory.",
    },

    {
      kind: "h2",
      id: "before-you-call",
      text: "What to do before you call the EEO office",
    },
    {
      kind: "p",
      text: "The work of building a federal EEO case begins before the first call to the EEO office. The federal employees who are easiest to represent — and who recover the most — are the ones whose documentation file is already organized when they make that call. The federal employees who are hardest to help are the ones who arrive with the deadline already running and nothing in writing.",
    },
    {
      kind: "p",
      text: "The first task is to write down what happened. Open a private document on a personal device, not on agency systems. For each event you believe is relevant, capture five things: the date, the people present, what was said or done, the document that reflects the action (a memorandum, an SF-50, an email), and any witnesses. Write in plain language. Do not characterize the events as discriminatory in this document — describe them.",
    },
    {
      kind: "p",
      text: "The second task is to gather the documents. Pull copies of relevant emails to your personal email if your agency's policies allow. Save the SF-50s, the performance evaluations, the position description, the relevant emails between you and your supervisor, the relevant union correspondence, and any documents that show how similarly situated employees were treated.",
    },
    {
      kind: "p",
      text: "The third task is to identify witnesses. Make a short list of coworkers who observed the events at issue, with their job titles and locations. Do not interview them yet. The EEO counselor will take statements; the investigator at the formal stage will take more. The federal employee's job at this stage is to know who saw what — not to develop the witnesses.",
    },

    {
      kind: "callout",
      tone: "warning",
      title: "Do not discuss the case on agency systems",
      text: "Email, chat, and document drafts on agency systems can be discoverable in the EEO process — and can also alert the agency to a brewing complaint in ways that make the formal stage harder. Keep notes, drafts, and witness lists on a personal device until you are represented or formally engaged.",
    },

    {
      kind: "h2",
      id: "informal-counseling",
      text: "What informal counseling actually looks like",
    },
    {
      kind: "p",
      text: "Informal counseling is the first formal stage of the federal EEO process and a stage many federal employees do not understand correctly. The EEO counselor is not adversarial — but the counselor is not the federal employee's advocate, and is not the federal employee's lawyer. The counselor is a neutral agency employee whose statutory role is to attempt resolution and to issue a Notice of Right to File if resolution does not occur.",
    },
    {
      kind: "p",
      text: "Counseling is supposed to be completed within 30 calendar days, extendable to a total of 90 with the parties' consent. During the counseling period, the counselor frames the basis (the protected ground — race, sex, disability, retaliation, and so on) and the issue (the action complained of), and explores whether the agency is willing to resolve the matter without proceeding to a formal complaint.",
    },
    {
      kind: "p",
      text: "Federal employees frequently make two mistakes at this stage. The first is over-committing to a theory of the case before the basis and issue are framed in writing. Statements made to the counselor will, in some agencies, be summarized in the counselor's report and follow the case forward. The second is treating counseling as if it were the merits stage — investing energy in evidence development when the counselor's job is procedural, not adjudicative.",
    },
    {
      kind: "p",
      text: "The federal employee should prepare a one-page written statement before the counseling session. The statement should set out the date of the action, the basis claimed, the action complained of, and the relief sought. It should be specific enough that the counselor can frame the case correctly, and conservative enough that nothing is promised in writing the federal employee cannot deliver later.",
    },

    {
      kind: "h2",
      id: "adr-decision",
      text: "Traditional counseling versus ADR mediation",
    },
    {
      kind: "p",
      text: "At the close of informal counseling — and sometimes earlier — the agency may offer Alternative Dispute Resolution. The most common ADR mechanism is mediation, usually conducted by a mediator from a different agency or from a roster of contract mediators. ADR is voluntary, confidential, and runs in parallel to the EEO timeline. The federal employee may accept or decline.",
    },
    {
      kind: "p",
      text: "The decision turns on what the federal employee actually wants the case to deliver. ADR is most useful where the case is fact-specific, the relief is administratively reachable (a transfer, a clean separation, the removal of negative documents, a structured return to work), and both sides have an interest in resolving without a year of process. ADR is less useful where the agency does not have the administrative authority to deliver the substantive remedy, where the federal employee needs a finding on the merits, or where the case is part of a larger pattern that demands public adjudication.",
    },
    {
      kind: "p",
      text: "Federal employees often treat ADR as a free shot — as if it costs nothing to try mediation and see what happens. It is not free. Going into mediation without a written settlement framework signals lack of preparation and depresses the value of any offer the agency might otherwise make. Going into mediation with a framework — a written set of terms the federal employee will accept, in priority order — produces the strongest outcomes.",
    },

    {
      kind: "h2",
      id: "if-no-resolution",
      text: "If informal counseling does not resolve the matter",
    },
    {
      kind: "p",
      text: "If counseling closes without resolution, the EEO counselor issues a Notice of Right to File (NRF). The NRF starts a separate 15-day window in which the federal employee must file a formal complaint or lose the right to proceed. The 15-day window is also enforced rigidly.",
    },
    {
      kind: "p",
      text: "The formal complaint is filed with the agency's EEO office. It states the basis and the issue. It preserves every claim that was raised in counseling. It does not narrow — claims that seemed weak at counseling may strengthen at the ROI stage, and dropping a claim now forecloses it later.",
    },
    {
      kind: "p",
      text: "Once the formal complaint is filed, the case moves into the investigation stage and the agency has 180 days to produce the Report of Investigation. That is a separate article — and a separate strategic stage. For now, the work of the 45-day window is to preserve the case, file timely, and capture every claim the federal employee believes they have.",
    },

    {
      kind: "h2",
      id: "when-to-call-counsel",
      text: "When to involve counsel",
    },
    {
      kind: "p",
      text: "Federal employees can pursue EEO complaints without an attorney — the regulations are designed to function pro se. But the cases that finish well most often involve at least a strategic consultation in the first 45 days. The cases that finish badly most often involve a federal employee who proceeded alone through counseling, made statements in writing that constrained the formal complaint, and called for help only at the ROI stage when the file was already shaped.",
    },
    {
      kind: "p",
      text: "A consultation at the 45-day stage costs less than the consultation at the ROI stage, because the strategic questions are narrower. A few hours of guidance on framing the basis and issue, structuring the counselor's session, and preparing for the ADR decision can preserve a year of leverage downstream.",
    },

    {
      kind: "key-takeaways",
      items: [
        "Federal employees have 45 calendar days from the discriminatory event to initiate contact with the EEO counselor.",
        "The clock runs from when the employee knew or reasonably should have known of the action — not from when discrimination is understood.",
        "Document everything in a private file before the first counselor call. Do not draft on agency systems.",
        "Informal counseling is procedural, not adjudicative — frame the basis and issue conservatively.",
        "ADR mediation can deliver value when the agency has authority to give the relief you actually need.",
        "If counseling closes without resolution, you have 15 days from the Notice of Right to File to file your formal complaint.",
        "A strategic consultation at the 45-day stage is the highest-leverage hour in a federal EEO case.",
      ],
    },
  ],
};
