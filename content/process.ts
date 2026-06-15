/**
 * Process map content for /resources/process — scrollytelling stages.
 * Drafts pending Ericka's review.
 */

export interface ProcessStage {
  /** Anchor + sidebar nav key. */
  id: string;
  /** Roman-numeral label like "I", "II". */
  numeral: string;
  title: string;
  /** Headline sentence under the title. */
  summary: string;
  whatHappens: string[];
  whatYouShouldDo: string[];
  typicalTimeline: string;
  commonMistakes: string[];
  /** "How Federal EEO helps at this stage" — drafted copy. */
  howWeHelp: string;
  draftPending: boolean;
}

const draftPending = true;

export const PROCESS_STAGES: ProcessStage[] = [
  {
    id: "discriminatory-event",
    numeral: "I",
    title: "Discriminatory Event",
    summary:
      "The action or pattern of actions that becomes the basis of the complaint.",
    whatHappens: [
      "A federal employee experiences an action believed to be motivated by a protected characteristic — a non-selection, a removal, a denial of accommodation, harassment from a supervisor, retaliation for a prior complaint.",
      "The event may be isolated, or it may be the latest entry in a pattern that has been building over months.",
    ],
    whatYouShouldDo: [
      "Write down what happened, with the date, the witnesses, and the documents that reflect the decision.",
      "Save the relevant emails, texts, and notes from meetings.",
      "Do not confront the agency until you have written it down.",
    ],
    typicalTimeline:
      "The 45-day clock begins at this stage — even though the federal employee may not yet know it.",
    commonMistakes: [
      "Waiting until you have a finished theory of the case before documenting.",
      "Discussing the situation with coworkers in writing on agency systems.",
      "Assuming the agency will keep its own copy of the relevant documents.",
    ],
    howWeHelp:
      "A strategic consultation at this stage gets the documentation file organized before the 45-day clock runs, and frames the legal categories so you know what to capture going forward.",
    draftPending,
  },
  {
    id: "45-day-window",
    numeral: "II",
    title: "45-Day Window",
    summary:
      "The strict regulatory deadline to initiate informal EEO counseling.",
    whatHappens: [
      "Under 29 CFR § 1614.105(a)(1), federal employees have 45 calendar days from the date of the alleged discriminatory action to contact the EEO counselor.",
      "The deadline is enforced rigidly. Missing it is the most common reason federal EEO complaints are dismissed.",
    ],
    whatYouShouldDo: [
      "Call your agency's EEO office and request informal counseling within the 45-day window.",
      "Do not wait for the perfect theory of the case.",
      "If close to the line, consult an attorney immediately.",
    ],
    typicalTimeline: "45 calendar days from the discriminatory event.",
    commonMistakes: [
      "Waiting until you decide whether you want to file formally before calling the counselor.",
      "Calling HR or your supervisor's supervisor instead of the EEO office.",
      "Assuming that filing a grievance preserves the EEO window — it does not.",
    ],
    howWeHelp:
      "We help federal employees move quickly inside the 45-day window — confirming the trigger date, identifying the right contact at the agency, and shaping the initial complaint statement before the counseling session begins.",
    draftPending,
  },
  {
    id: "informal-counseling",
    numeral: "III",
    title: "Informal Counseling",
    summary:
      "The agency's first formal opportunity to resolve the matter without litigation.",
    whatHappens: [
      "The EEO counselor meets with the federal employee, frames the basis and issue, and attempts to resolve the matter informally.",
      "Counseling is supposed to complete within 30 days, extendable to 90.",
    ],
    whatYouShouldDo: [
      "Provide a clear written statement of the discriminatory action, the protected basis, and the relief sought.",
      "Be candid with the counselor — they are not adverse, but they are not your counsel either.",
      "Consider ADR mediation if the agency offers it.",
    ],
    typicalTimeline: "30 days, with possible extension to 90.",
    commonMistakes: [
      "Treating informal counseling as the merits stage and overcommitting on theory.",
      "Declining ADR without thinking about it.",
      "Failing to confirm in writing what was — and was not — discussed.",
    ],
    howWeHelp:
      "We prepare federal employees for the counseling session, advise on the ADR decision, and ensure the counselor's report accurately reflects the claims so nothing is lost at the formal stage.",
    draftPending,
  },
  {
    id: "adr-decision",
    numeral: "IV",
    title: "ADR Decision Point",
    summary:
      "Whether to take the agency's offer of mediation, or proceed straight to formal filing.",
    whatHappens: [
      "Many agencies offer ADR — most commonly mediation — at the close of informal counseling.",
      "ADR is voluntary, confidential, and runs in parallel to the EEO timeline.",
    ],
    whatYouShouldDo: [
      "Decide based on whether the agency has authority to deliver the relief you actually need.",
      "Consider mediation when the case is fact-specific and the relief is administratively reachable.",
      "Skip mediation when the agency cannot or will not deliver the substantive remedy.",
    ],
    typicalTimeline: "ADR sessions typically schedule within 30 days.",
    commonMistakes: [
      "Treating mediation as a free shot — it is not; you are signaling a number.",
      "Going into mediation without a written settlement framework.",
      "Accepting a settlement that does not address future treatment.",
    ],
    howWeHelp:
      "We prepare a written settlement framework before the session, attend as needed, and ensure any settlement language is drafted to actually deliver the relief — not just promise it.",
    draftPending,
  },
  {
    id: "formal-complaint",
    numeral: "V",
    title: "Formal Complaint Filing",
    summary:
      "The 15-day window after the Notice of Right to File to formally commence the case.",
    whatHappens: [
      "If informal counseling does not resolve the matter, the counselor issues a Notice of Right to File (NRF).",
      "The federal employee has 15 calendar days from receipt of the NRF to file a formal complaint.",
    ],
    whatYouShouldDo: [
      "File within the 15-day window — this deadline is also strictly enforced.",
      "State the basis (race, sex, etc.) and the issue (the action complained of) clearly.",
      "Preserve every claim raised in counseling; do not narrow.",
    ],
    typicalTimeline: "15 calendar days from receipt of the NRF.",
    commonMistakes: [
      "Filing late because of mail delays.",
      "Dropping claims that seemed weak in counseling — the ROI may strengthen them.",
      "Filing on the wrong form or with the wrong office.",
    ],
    howWeHelp:
      "We draft and file the formal complaint to capture every preserved claim, frame the basis and issue with precision, and set the agency up to deliver a usable ROI.",
    draftPending,
  },
  {
    id: "investigation-roi",
    numeral: "VI",
    title: "Investigation and ROI",
    summary:
      "The agency's investigative phase, ending with the Report of Investigation.",
    whatHappens: [
      "After acceptance of the formal complaint, the agency has 180 days to investigate.",
      "The investigation typically includes affidavits from the complainant and management, document production, and an investigator's narrative.",
      "The agency issues the Report of Investigation (ROI) at the close of the investigation.",
    ],
    whatYouShouldDo: [
      "Prepare carefully for your sworn affidavit — it is the foundation of the rest of the case.",
      "Identify all relevant witnesses and ensure the investigator interviews them.",
      "Request copies of all documents the investigator collects.",
    ],
    typicalTimeline:
      "180 days from acceptance, often extended by mutual agreement.",
    commonMistakes: [
      "Giving the affidavit without preparation.",
      "Failing to identify comparator witnesses.",
      "Assuming the investigator will gather all the evidence on their own.",
    ],
    howWeHelp:
      "We prepare federal employees for the sworn affidavit, identify the witnesses and documents the investigator must collect, and audit the ROI when it is delivered.",
    draftPending,
  },
  {
    id: "hearing-election",
    numeral: "VII",
    title: "Hearing Election",
    summary:
      "The 30-day window after the ROI to request an EEOC hearing or accept a final agency decision.",
    whatHappens: [
      "After the ROI is delivered, the federal employee has 30 days to either request a hearing before an EEOC administrative judge or accept a final agency decision (FAD) from the agency.",
      "The choice is binding and shapes the rest of the case.",
    ],
    whatYouShouldDo: [
      "Read the ROI carefully, with a structured framework — see our Reading Your ROI article.",
      "Decide based on the strength of the file, the willingness to litigate, and the realistic remedy.",
      "Request the hearing if the ROI supports the claim; accept the FAD only as a deliberate strategic choice.",
    ],
    typicalTimeline: "30 days from receipt of the ROI.",
    commonMistakes: [
      "Defaulting to a hearing without reading the ROI first.",
      "Accepting a FAD because the hearing seems intimidating.",
      "Missing the 30-day window because the ROI was mailed.",
    ],
    howWeHelp:
      "We provide a structured ROI review and frame the election as the strategic decision it is — not the procedural reflex it often becomes.",
    draftPending,
  },
  {
    id: "final-decision-hearing",
    numeral: "VIII",
    title: "Final Agency Decision or Hearing",
    summary:
      "The merits stage: either the agency decides on the ROI alone, or an EEOC administrative judge holds a hearing.",
    whatHappens: [
      "If the federal employee accepts a FAD, the agency issues a written decision on the merits based on the ROI.",
      "If the federal employee requests a hearing, an EEOC administrative judge conducts discovery, may hold a hearing, and issues a decision.",
    ],
    whatYouShouldDo: [
      "Prepare for hearing or supplement the record as the procedure allows.",
      "Pursue discovery aggressively where the ROI is incomplete.",
      "Consider settlement at any pre-hearing conference.",
    ],
    typicalTimeline:
      "FAD: 60 days from election. Hearing: typically 9–18 months to decision.",
    commonMistakes: [
      "Treating the hearing as a trial — it is closer to an administrative adjudication.",
      "Underestimating the value of pre-hearing settlement leverage.",
      "Failing to develop the record on remedy alongside liability.",
    ],
    howWeHelp:
      "We represent federal employees through hearing preparation, discovery, and the hearing itself — and we routinely negotiate pre-hearing settlements that deliver value the hearing decision could not.",
    draftPending,
  },
  {
    id: "appeal-ofo",
    numeral: "IX",
    title: "Appeal to EEOC OFO",
    summary:
      "Appellate review of the FAD or the administrative judge decision by the EEOC's Office of Federal Operations.",
    whatHappens: [
      "Either party may appeal an adverse decision to the EEOC's Office of Federal Operations within 30 days.",
      "OFO appeals are paper-based: a brief and the existing record, no hearing.",
    ],
    whatYouShouldDo: [
      "File the notice of appeal within 30 days.",
      "File the supporting brief within 30 days of the appeal notice.",
      "Identify the specific errors — credibility findings, application of law, denial of evidence.",
    ],
    typicalTimeline:
      "12–18 months from filing to decision, frequently longer.",
    commonMistakes: [
      "Treating the appeal brief as a chance to re-argue the merits rather than identify legal error.",
      "Failing to preserve issues in the underlying proceeding.",
      "Missing the 30-day appeal window.",
    ],
    howWeHelp:
      "We brief OFO appeals to identify reviewable error and ensure every preserved issue is presented in the form OFO actually decides on.",
    draftPending,
  },
];
