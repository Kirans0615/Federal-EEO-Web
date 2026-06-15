/**
 * FAQ content for /resources/faq.
 * Every answer is *drafted* — Ericka must legally review before launch.
 */

export interface FaqEntry {
  id: string;
  question: string;
  /** Paragraphs rendered with whitespace between. */
  answer: string[];
  /** For search-bar filtering. */
  keywords: string[];
  draftPending: boolean;
}

const draftPending = true;

export const FAQ: FaqEntry[] = [
  {
    id: "filing-deadline",
    question: "How long do I have to file an EEO complaint?",
    keywords: ["deadline", "45 day", "timeline", "file"],
    draftPending,
    answer: [
      "Federal employees have 45 calendar days from the date of the discriminatory event — or from the date you reasonably should have known about it — to initiate contact with your agency's EEO counselor. This 45-day window is a strict regulatory deadline set by 29 CFR § 1614.105(a)(1), and missing it is by far the most common reason federal EEO complaints are dismissed.",
      "The clock starts on the date of the action itself, not the date you learn it might be discriminatory. For an isolated event — a non-selection, a removal, a denial of training — the start date is usually clear. For a hostile work environment claim, the timely-filing analysis looks to whether at least one act contributing to the hostile environment falls within the 45-day window.",
      "If you are within the window, your first move is to call the EEO office and request informal counseling. You do not need to have a finished case, and you do not need to be sure you want to file formally. You only need to start the clock.",
      "Every situation has its own facts. If you are close to the 45-day line or unsure when it started, consult an attorney immediately — a few hours of guidance now can preserve a year of relief later.",
    ],
  },
  {
    id: "need-lawyer",
    question: "Do I need a lawyer to file an EEO complaint?",
    keywords: ["lawyer", "attorney", "represent"],
    draftPending,
    answer: [
      "No. Federal employees may file and pursue EEO complaints without an attorney. The regulations at 29 CFR Part 1614 are written for use by federal employees themselves, and the EEO counselor process is designed to function without legal representation.",
      "That said, the law is dense, the regulations have hidden traps, and agency representatives at every stage are trained employment lawyers. Federal employees who proceed pro se in fact-heavy cases — particularly at the ROI stage and the hearing stage — frequently lose claims that counsel would have preserved.",
      "A common middle path is to handle the early stages on your own with periodic consultations from an attorney for strategic guidance, then bring counsel in formally at the formal complaint or ROI stage when the stakes and the procedural complexity rise. A strategic consultation often pays for itself in the issues it prevents.",
    ],
  },
  {
    id: "eeo-vs-mspb",
    question: "What is the difference between an EEO complaint and an MSPB appeal?",
    keywords: ["mspb", "appeal", "difference"],
    draftPending,
    answer: [
      "An EEO complaint challenges discriminatory employment practices on protected grounds — race, sex, age, disability, retaliation, and so on — and is pursued through the EEO process at your agency, then on appeal to the EEOC's Office of Federal Operations.",
      "An MSPB appeal challenges certain serious adverse actions taken by the agency — removals, suspensions of more than 14 days, reductions in grade or pay, and a few other specifically defined actions — regardless of whether discrimination is alleged.",
      "Some matters involve both. A removal allegedly motivated by race discrimination is a so-called mixed case. In a mixed case, the federal employee must choose between EEO and MSPB at the formal complaint stage and cannot pursue both simultaneously. The choice has significant downstream consequences, and is one of the most fact-sensitive decisions in federal employment law.",
    ],
  },
  {
    id: "retaliation-protected",
    question: "Can I be retaliated against for filing a complaint?",
    keywords: ["retaliation", "protected"],
    draftPending,
    answer: [
      "Retaliation against a federal employee for filing an EEO complaint, participating in an EEO investigation, or opposing what the employee reasonably believes is unlawful discrimination is itself a violation of federal EEO law. The anti-retaliation provisions are independent of the underlying discrimination claim — meaning that even if the original complaint loses on the merits, a retaliation claim can succeed.",
      "Retaliation claims are often the strongest claims in a federal EEO file because the protected activity (the complaint) and the agency's awareness of it are usually documented in the agency's own records. The evidence of causation that is hardest to establish in a discrimination case is often the easiest to establish in a retaliation case.",
      "Document everything. If a supervisor's tone, your assignments, your evaluations, or your access to information changes after you file, write it down with dates. This documentation is the foundation of any retaliation claim.",
    ],
  },
  {
    id: "what-is-roi",
    question: "What is the Report of Investigation?",
    keywords: ["roi", "report", "investigation"],
    draftPending,
    answer: [
      "The Report of Investigation, or ROI, is the agency's official investigative file produced after the formal complaint stage. It typically contains the complaint, the agency's answer, sworn affidavits from the complainant and management witnesses, documentary exhibits, and a narrative summary by the investigator.",
      "The ROI is the single most strategically important document in a federal EEO case. Every downstream decision — whether to request a hearing, accept a final agency decision, settle, or proceed to appeal — turns on what the ROI does and does not contain.",
      "Federal employees often underestimate the ROI. They read it once, see that the witnesses said what they expected the witnesses to say, and proceed to the next stage. But the value in the ROI is in the inconsistencies, the gaps, the documents that were not produced, and the questions the investigator did not ask. Reading the ROI with a strategic eye is a skill, and we cover the framework for it in our Reading Your ROI article and webinar.",
    ],
  },
  {
    id: "process-timeline",
    question: "How long does the federal EEO process take?",
    keywords: ["timeline", "long", "duration"],
    draftPending,
    answer: [
      "From the moment a federal employee initiates contact with the EEO counselor to a final administrative decision, the federal EEO process typically takes 12 to 24 months — and sometimes considerably longer.",
      "Informal counseling has a 30-day window, with a possible extension to 90 days. Formal investigation is supposed to complete within 180 days but routinely takes longer. If the complainant requests a hearing, the EEOC administrative judge stage can add another 9 to 18 months. An appeal to the Office of Federal Operations typically adds another 12 to 18 months on top of that.",
      "Within these timelines, there are several windows where the case can resolve more quickly — at ADR mediation, at a pre-hearing settlement conference, or at any point where the parties negotiate. We routinely tell clients that the federal EEO process favors patient strategy, and that the choice points along the way often matter more than the calendar.",
    ],
  },
  {
    id: "what-can-i-recover",
    question: "What can I recover if I win?",
    keywords: ["recover", "damages", "remedy"],
    draftPending,
    answer: [
      "Federal EEO remedies are designed to make the complainant whole — to put you, as closely as possible, in the position you would have occupied if the discrimination had not happened.",
      "Equitable remedies include reinstatement, promotion, back pay, restored seniority, the removal of negative documents from your personnel file, training, the posting of a notice of the violation, and (in disability cases) a court order directing the agency to provide a reasonable accommodation.",
      "Monetary remedies include back pay with interest, front pay where reinstatement is impracticable, compensatory damages for emotional harm (capped by statute), and reasonable attorney's fees and costs. Age discrimination claims are an exception — they provide liquidated damages instead of compensatory damages, with their own framework.",
    ],
  },
  {
    id: "settle-or-hearing",
    question: "Should I take a settlement or go to a hearing?",
    keywords: ["settle", "settlement", "hearing"],
    draftPending,
    answer: [
      "The settle-or-hearing decision is the most fact-specific decision in a federal EEO case, and the right answer is rarely obvious from the outside. The strength of the ROI, the credibility of the witnesses, the federal employee's long-term career goals, the agency's willingness to negotiate non-monetary terms, and the appetite for an additional year of litigation all weigh into it.",
      "Settlements often deliver value that a hearing cannot: a clean separation, an agreed reference, the removal of negative documents, a structured return to work, a transfer, or non-disclosure terms that allow both sides to move on. A win at hearing, by contrast, may deliver more on paper but require another full year to enforce.",
      "This is the decision we are most often asked to help frame. It usually starts with a structured reading of the ROI, a candid assessment of the agency's exposure, and a conversation about what the federal employee actually needs the case to deliver — not just what the law allows.",
    ],
  },
  {
    id: "rude-supervisor",
    question: "Do I have a case if my supervisor is just rude or unfair?",
    keywords: ["rude", "unfair", "hostile"],
    draftPending,
    answer: [
      "Federal EEO law does not police general workplace incivility. A supervisor who is rude, who plays favorites, who is unprofessional, or who manages badly is doing something the agency may want to address, but those behaviors are not themselves discriminatory unless they are tied to a protected characteristic — race, sex, age, disability, religion, national origin, or to retaliation for protected activity.",
      "The legal question is not whether the conduct is unfair. It is whether the conduct treats you differently because of a protected characteristic. Comparator evidence — how the same supervisor treats employees outside the protected class — is often the most powerful evidence on this question.",
      "If you are unsure whether what is happening rises to a legal claim, that is a useful question to bring to a strategic consultation. A short conversation can sort the categories before you commit to a year of process.",
    ],
  },
  {
    id: "request-accommodation",
    question: "What is reasonable accommodation, and how do I request one?",
    keywords: ["accommodation", "disability", "request"],
    draftPending,
    answer: [
      "Reasonable accommodation is a modification to a job, work environment, or the way work is performed that allows a qualified employee with a disability to perform the essential functions of their job, or to enjoy equal benefits and privileges of employment. The Rehabilitation Act requires federal agencies to provide reasonable accommodation unless doing so would impose an undue hardship.",
      "To request an accommodation, write to your supervisor and to the agency's disability program manager. Identify yourself as an employee with a disability who is requesting reasonable accommodation. Describe the limitation, describe the workplace barrier, and propose the accommodation. You do not need to use any particular form of words — what matters is that the request is clear enough to trigger the interactive process.",
      "Once the request is made, the agency has an obligation to engage in the interactive process — a good-faith dialogue about what accommodations are available. The agency may ask for medical documentation reasonably tied to the limitation. The agency may propose alternatives. The agency may not stall, refuse to engage, or treat the request as a referendum on whether you are disabled enough.",
      "If you are denied — or if the interactive process breaks down — you have 45 days from the denial to initiate contact with the EEO counselor and start an accommodation-denial complaint.",
    ],
  },
  {
    id: "mixed-case",
    question: "What is a mixed case?",
    keywords: ["mixed", "case"],
    draftPending,
    answer: [
      "A mixed case is a federal-sector complaint that alleges both discrimination — on a protected ground reachable under EEO law — and an adverse action that is independently appealable to the Merit Systems Protection Board (MSPB). The classic example is a removal allegedly motivated by race or disability.",
      "Mixed cases follow a special procedural path. At the formal complaint stage, the federal employee must choose between the EEO process and the MSPB process. The first to be filed becomes the controlling forum, and the case proceeds there.",
      "The choice between EEO and MSPB has real strategic consequences — different discovery, different timelines, different judges, different remedy frameworks. If your situation might be a mixed case, that decision should be made with counsel.",
    ],
  },
  {
    id: "federal-contractor",
    question: "Can a federal contractor file an EEO complaint?",
    keywords: ["contractor", "federal"],
    draftPending,
    answer: [
      "Federal contractor employees are not covered by the federal-sector EEO process at 29 CFR Part 1614. They are typically covered by the private-sector Title VII process administered by the EEOC, with different timelines (300 days in most jurisdictions) and different procedures.",
      "Contractor employees may also have remedies under the Office of Federal Contract Compliance Programs (OFCCP), which enforces affirmative action obligations on federal contractors. The OFCCP route is distinct from the EEOC route and has its own complaint process.",
      "If you are uncertain whether you are a federal employee or a contractor employee — or if your employment changed status during the events at issue — that threshold question is worth a strategic consultation before any deadline runs.",
    ],
  },
  {
    id: "missed-45-day",
    question: "What happens if I miss the 45-day deadline?",
    keywords: ["missed", "deadline", "late"],
    draftPending,
    answer: [
      "Missing the 45-day window is the most common reason federal EEO complaints are dismissed. But the door is not always closed.",
      "29 CFR § 1614.105(a)(2) provides for extension of the 45-day period in narrow circumstances — most notably where the complainant did not know and reasonably should not have known about the discriminatory action; where, despite due diligence, they were prevented from contacting a counselor; or for other reasons considered sufficient. The standard is strict, and the burden is on the complainant.",
      "If you are outside the 45-day window, do not assume the matter is over. Document what you knew, when, and what prevented timely contact, and consult an attorney as soon as possible. Some cases that look untimely on first glance are preserved by facts the complainant did not initially consider relevant.",
    ],
  },
  {
    id: "info-protection",
    question: "How is my information protected during the EEO process?",
    keywords: ["confidential", "protection", "privacy"],
    draftPending,
    answer: [
      "Federal EEO complaints are confidential within the meaning of the Privacy Act. Materials in the complaint file — affidavits, the ROI, settlement communications — are not publicly accessible and are shared on a need-to-know basis within the agency.",
      "That said, complainants should understand that EEO complaints are not anonymous. The agency is told who filed, and the complainant's identity is necessarily disclosed to the respondents and to witnesses whose statements are taken.",
      "ADR mediation sessions are also confidential as a matter of regulation. Statements made in mediation generally cannot be used in any subsequent proceeding without consent.",
    ],
  },
  {
    id: "cost-to-hire",
    question: "What does it cost to hire Federal EEO, LLC?",
    keywords: ["cost", "fee", "price"],
    draftPending,
    answer: [
      "Federal EEO matters are handled under one of three fee structures, depending on the stage of the matter and the nature of the representation: a flat-fee strategic consultation for case assessment and guidance, a flat-fee engagement for discrete work product (an ROI review, a settlement negotiation, a hearing preparation memorandum), or a traditional hourly engagement for full representation through hearing and appeal.",
      "We are direct about this: a strategic consultation is the right starting point for most federal employees. It is the lowest-cost way to know whether you have a case, whether the timeline allows for it, and what the next move is. We never push a fuller engagement than the case actually requires.",
      "Specific pricing is set during the consultation and is a function of the case stage, the agency, and the work product needed. Federal EEO complainants who prevail are also entitled to recover reasonable attorney's fees from the agency, which can offset the cost of representation in successful cases.",
    ],
  },
];
