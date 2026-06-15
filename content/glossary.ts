/**
 * Federal EEO glossary — 36 plain-English term definitions.
 *
 * Every definition is *drafted* — Ericka must legally review before launch.
 * Replace draftPending: true with false once approved. See CONTENT.md.
 *
 * relatedSlugs reference articles under /resources/<slug> so the glossary
 * cross-links to flagship content.
 */

export interface GlossaryTerm {
  term: string;
  /** URL slug derived from the term, used for in-page anchors. */
  anchor: string;
  /** One-paragraph plain-English definition. */
  definition: string;
  /** Optional article slugs this term cross-references. */
  relatedSlugs?: string[];
  draftPending: boolean;
}

const draftPending = true;

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: "Adverse Action",
    anchor: "adverse-action",
    definition:
      "A workplace action that produces a meaningful negative change in the terms or conditions of federal employment — a demotion, a non-selection, a removal, a denial of training, a suspension, or a reassignment that strips responsibility. The action must be more than a trivial inconvenience to support a discrimination or retaliation claim.",
    draftPending,
    relatedSlugs: ["the-45-day-clock"],
  },
  {
    term: "Aggrieved Person",
    anchor: "aggrieved-person",
    definition:
      "A federal employee, former employee, or applicant who believes they were harmed by a discriminatory employment practice on the basis of race, color, religion, sex (including pregnancy, sexual orientation, and gender identity), national origin, age, disability, or genetic information. Standing as an aggrieved person is the gateway to filing an EEO complaint.",
    draftPending,
  },
  {
    term: "Alternative Dispute Resolution (ADR)",
    anchor: "alternative-dispute-resolution",
    definition:
      "A voluntary, confidential process — most commonly mediation — that runs in parallel to traditional EEO counseling. ADR is offered at multiple stages of the federal EEO process and is often the fastest path to a resolution that includes meaningful relief without exhausting the formal complaint timeline.",
    draftPending,
    relatedSlugs: ["the-45-day-clock"],
  },
  {
    term: "Bona Fide Occupational Qualification (BFOQ)",
    anchor: "bona-fide-occupational-qualification",
    definition:
      "A narrowly defined exception that permits an employer to consider sex, religion, or national origin in hiring when the characteristic is reasonably necessary to the normal operation of the business. BFOQ defenses are construed strictly and are rarely successful in federal employment.",
    draftPending,
  },
  {
    term: "Burden of Proof",
    anchor: "burden-of-proof",
    definition:
      "The obligation to produce evidence sufficient to support each element of a claim. In federal EEO matters, the complainant carries an initial burden to establish a prima facie case; the agency then articulates a legitimate non-discriminatory reason; and the complainant ultimately bears the burden of persuading the fact-finder that the agency's stated reason is pretext for discrimination.",
    draftPending,
  },
  {
    term: "Compensatory Damages",
    anchor: "compensatory-damages",
    definition:
      "Monetary relief for emotional harm, pain and suffering, and other non-economic losses caused by unlawful discrimination. Compensatory damages are capped by statute and are available for intentional discrimination under Title VII, the ADA, and the Rehabilitation Act — but not for age discrimination claims, which provide different remedies.",
    draftPending,
  },
  {
    term: "Constructive Discharge",
    anchor: "constructive-discharge",
    definition:
      "A resignation that the law treats as a termination because the working conditions had become so intolerable that a reasonable person would have felt compelled to resign. Constructive discharge is a high bar and typically requires both a hostile work environment and a deliberate or knowing failure by management to correct it.",
    draftPending,
    relatedSlugs: ["the-45-day-clock"],
  },
  {
    term: "Direct Evidence",
    anchor: "direct-evidence",
    definition:
      "Evidence — usually a statement or document — that, if believed, proves discriminatory motive without inference. A supervisor's written remark connecting a protected characteristic to an adverse action is the textbook example. Direct evidence is rare; most cases rely on circumstantial evidence under the McDonnell Douglas framework.",
    draftPending,
  },
  {
    term: "Disparate Impact",
    anchor: "disparate-impact",
    definition:
      "A facially neutral policy or practice that, in operation, falls more harshly on a protected group and is not justified by business necessity. Disparate impact theory requires statistical evidence and usually involves selection devices, testing instruments, or qualification standards.",
    draftPending,
  },
  {
    term: "Disparate Treatment",
    anchor: "disparate-treatment",
    definition:
      "Intentional discrimination — treating a federal employee less favorably because of a protected characteristic. The vast majority of federal EEO complaints proceed under a disparate treatment theory, often using comparator evidence and the McDonnell Douglas burden-shifting framework.",
    draftPending,
  },
  {
    term: "EEOC Office of Federal Operations (OFO)",
    anchor: "eeoc-office-of-federal-operations",
    definition:
      "The component of the EEOC that hears appeals from final agency decisions and from administrative judge decisions in federal-sector cases. OFO appeals are written and document-driven, with no live hearing. Decisions are issued as Equal Employment Opportunity Commission Decisions and form the body of federal-sector precedent.",
    draftPending,
    relatedSlugs: ["reading-your-roi"],
  },
  {
    term: "Essential Functions",
    anchor: "essential-functions",
    definition:
      "The fundamental job duties that a position exists to perform — as distinct from marginal tasks. In a reasonable accommodation analysis, an employee with a disability must be able to perform the essential functions of the job, with or without accommodation, to be a qualified individual under the Rehabilitation Act.",
    draftPending,
    relatedSlugs: ["reasonable-accommodation"],
  },
  {
    term: "Final Agency Decision (FAD)",
    anchor: "final-agency-decision",
    definition:
      "The decision an agency issues at the close of its investigation when the complainant has not requested an EEOC hearing. The FAD addresses each accepted claim on the merits. A complainant who disagrees with a FAD may appeal to the EEOC's Office of Federal Operations within 30 days of receipt.",
    draftPending,
    relatedSlugs: ["reading-your-roi"],
  },
  {
    term: "Hostile Work Environment",
    anchor: "hostile-work-environment",
    definition:
      "A workplace permeated with discriminatory intimidation, ridicule, or insult that is sufficiently severe or pervasive to alter the conditions of employment. A single severe incident can support a claim, but most hostile work environment claims rely on a pattern of conduct documented over time.",
    draftPending,
  },
  {
    term: "Informal Counseling",
    anchor: "informal-counseling",
    definition:
      "The first stage of the federal EEO process. An EEO counselor meets with the aggrieved employee, attempts to resolve the matter informally, and — if it is not resolved — issues a Notice of Right to File a formal complaint. Informal counseling is mandatory unless the complainant elects ADR.",
    draftPending,
    relatedSlugs: ["the-45-day-clock"],
  },
  {
    term: "Interactive Process",
    anchor: "interactive-process",
    definition:
      "The collaborative, good-faith dialogue between an employee with a disability and the agency about a request for reasonable accommodation. The interactive process is itself a legal obligation — an agency that refuses to engage can be liable even if accommodation would not have been required on the merits.",
    draftPending,
    relatedSlugs: ["reasonable-accommodation"],
  },
  {
    term: "Mixed Case",
    anchor: "mixed-case",
    definition:
      "A federal-sector complaint that alleges both discrimination and an adverse action appealable to the Merit Systems Protection Board (MSPB) — for example, a removal allegedly based on race. Mixed cases follow a special procedural path: the employee must choose between EEO and MSPB at the formal complaint stage, but cannot pursue both simultaneously.",
    draftPending,
  },
  {
    term: "Pretext",
    anchor: "pretext",
    definition:
      "The legal theory that the agency's stated non-discriminatory reason for an action is not the real reason — that it is a cover for discriminatory motive. Pretext can be shown by inconsistencies in the explanation, evidence that the stated reason has no factual basis, or comparator evidence showing similarly situated employees outside the protected class were treated more favorably.",
    draftPending,
    relatedSlugs: ["reading-your-roi"],
  },
  {
    term: "Prima Facie Case",
    anchor: "prima-facie-case",
    definition:
      "The minimum set of facts a complainant must establish to shift the burden to the agency to articulate a legitimate non-discriminatory reason. The elements vary by claim type, but typically require membership in a protected class, qualification for the position or benefit, an adverse action, and circumstances giving rise to an inference of discrimination.",
    draftPending,
  },
  {
    term: "Protected Activity",
    anchor: "protected-activity",
    definition:
      "Conduct that the anti-retaliation provisions of federal EEO law shield — most commonly, filing an EEO complaint, participating in an EEO investigation, or opposing a practice the employee reasonably believes is unlawful. Retaliation for protected activity is itself a violation, independent of whether the underlying discrimination claim succeeds.",
    draftPending,
  },
  {
    term: "Protected Class",
    anchor: "protected-class",
    definition:
      "A group defined by a characteristic that federal EEO statutes protect from employment discrimination — including race, color, religion, sex (including pregnancy, sexual orientation, and gender identity), national origin, age, disability, and genetic information. Federal employees enjoy these protections under a combination of Title VII, the ADEA, the Rehabilitation Act, and GINA.",
    draftPending,
  },
  {
    term: "Reasonable Accommodation",
    anchor: "reasonable-accommodation",
    definition:
      "A modification to a job, work environment, or the way work is performed that allows a qualified employee with a disability to perform essential functions or enjoy equal benefits and privileges of employment. Reasonable accommodation is required under the Rehabilitation Act unless it imposes an undue hardship on the agency.",
    draftPending,
    relatedSlugs: ["reasonable-accommodation"],
  },
  {
    term: "Rehabilitation Act",
    anchor: "rehabilitation-act",
    definition:
      "The federal civil rights statute that prohibits disability discrimination in federal employment. Sections 501 and 505 supply the substantive standards and remedies — incorporating, by reference, much of the Americans with Disabilities Act framework. Federal employees seeking disability accommodations proceed under the Rehabilitation Act, not the ADA.",
    draftPending,
    relatedSlugs: ["reasonable-accommodation"],
  },
  {
    term: "Report of Investigation (ROI)",
    anchor: "report-of-investigation",
    definition:
      "The agency's investigative file produced after the formal complaint stage, typically containing the complaint, the agency's answer, witness affidavits, exhibits, and the investigator's narrative summary. The ROI is the single most strategically important document in a federal EEO case — every downstream election turns on what is in it.",
    draftPending,
    relatedSlugs: ["reading-your-roi"],
  },
  {
    term: "Retaliation",
    anchor: "retaliation",
    definition:
      "An adverse action taken because an employee engaged in protected EEO activity. Retaliation is one of the most commonly proven federal-sector claims because the protected activity is usually documented in the agency's own records, making the causal link easier to establish than in the underlying discrimination claim.",
    draftPending,
  },
  {
    term: "Standing",
    anchor: "standing",
    definition:
      "The legal capacity to bring a federal EEO complaint — generally established by showing that the complainant is an aggrieved person, that the claim falls within a protected category, and that the complaint is timely filed under 29 CFR Part 1614.",
    draftPending,
  },
  {
    term: "Title VII",
    anchor: "title-vii",
    definition:
      "Title VII of the Civil Rights Act of 1964 — the core federal statute prohibiting employment discrimination on the basis of race, color, religion, sex (including pregnancy, sexual orientation, and gender identity), and national origin. Federal employees pursue Title VII claims through the procedure set out at 29 CFR Part 1614.",
    draftPending,
  },
  {
    term: "Undue Hardship",
    anchor: "undue-hardship",
    definition:
      "The agency's affirmative defense to a request for reasonable accommodation — a showing that providing the accommodation would cause significant difficulty or expense given the agency's overall resources. Undue hardship is fact-specific and rarely successful in federal employment because federal agencies have substantial resources to draw on.",
    draftPending,
    relatedSlugs: ["reasonable-accommodation"],
  },
  {
    term: "Witness Statement",
    anchor: "witness-statement",
    definition:
      "A sworn affidavit, declaration, or transcribed interview taken during the agency's investigation. Witness statements form the evidentiary backbone of the ROI and frequently surface admissions, inconsistencies, or gaps that shape the strategic decision at the hearing election stage.",
    draftPending,
    relatedSlugs: ["reading-your-roi"],
  },
  {
    term: "29 CFR Part 1614",
    anchor: "29-cfr-part-1614",
    definition:
      "The federal regulation that governs the EEO complaint process for federal-sector employees. Part 1614 sets the timelines (including the 45-day pre-complaint window), the procedural requirements, and the remedies framework that every federal EEO matter must follow.",
    draftPending,
    relatedSlugs: ["the-45-day-clock"],
  },
  {
    term: "Class Complaint",
    anchor: "class-complaint",
    definition:
      "A federal EEO complaint brought by a named complainant on behalf of a defined class of similarly situated employees who share a common claim. Class complaints are heard by an EEOC administrative judge and require certification of the class before proceeding to the merits.",
    draftPending,
  },
  {
    term: "Comparator",
    anchor: "comparator",
    definition:
      "A similarly situated employee outside the complainant's protected class whose treatment is used as a benchmark to demonstrate disparate treatment. The closer the comparator is to the complainant in job, supervisor, and conduct at issue, the more probative the comparison.",
    draftPending,
  },
  {
    term: "Equitable Relief",
    anchor: "equitable-relief",
    definition:
      "Non-monetary remedies a federal EEO complainant may recover — reinstatement, promotion, training, posting of a notice, removal of negative documents from the personnel file, or an order directing the agency to provide a reasonable accommodation. Equitable relief is often more valuable in the long run than damages.",
    draftPending,
  },
  {
    term: "Make-Whole Relief",
    anchor: "make-whole-relief",
    definition:
      "The principle that a successful complainant should be restored, as closely as possible, to the position they would have occupied absent the discrimination. Make-whole relief typically includes back pay, retroactive promotion, restored seniority, and any related benefits the discriminatory action denied.",
    draftPending,
  },
  {
    term: "Notice of Right to File (NRF)",
    anchor: "notice-of-right-to-file",
    definition:
      "The document the EEO counselor issues at the close of informal counseling when the matter is not resolved. The NRF starts a 15-day window in which the aggrieved employee must file a formal complaint, or lose the right to proceed.",
    draftPending,
    relatedSlugs: ["the-45-day-clock"],
  },
  {
    term: "Subject Matter Jurisdiction",
    anchor: "subject-matter-jurisdiction",
    definition:
      "Whether the EEOC has authority to hear a particular claim. The EEOC may dismiss complaints for lack of subject matter jurisdiction when, for example, the matter is properly before MSPB, the complaint duplicates one already filed, or the complainant is not a federal employee, former employee, or applicant.",
    draftPending,
  },
  {
    term: "Collateral Attack",
    anchor: "collateral-attack",
    definition:
      "An EEO challenge to the result of another adjudicatory process — for example, an MSPB decision or a negotiated grievance ruling. Collateral attacks are generally prohibited; a complainant cannot relitigate a question already decided in another forum.",
    draftPending,
  },
];
