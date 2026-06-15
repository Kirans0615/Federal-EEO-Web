import type { Article } from "../articles";

export const article: Article = {
  slug: "reasonable-accommodation",
  title: "Reasonable Accommodation: What Federal Agencies Actually Owe You",
  dek: "The Rehabilitation Act framework, the interactive process, and what to do when the agency stalls — written for the federal employee who is about to request, has just been denied, or is trying to figure out what comes next.",
  section: "rights-explainers",
  status: "draft",
  published: "2026-06-15",
  lastReviewed: "2026-06-15",
  applicableStages: ["pre_complaint", "formal_filed", "not_sure"],
  body: [
    {
      kind: "p",
      text: "Reasonable accommodation is the area of federal employment law where the gap between what the statute says and what federal employees experience is widest. The Rehabilitation Act requires federal agencies to provide qualified employees with disabilities the accommodations they need to perform the essential functions of their jobs — or to enjoy the same benefits and privileges of employment as employees without disabilities. In practice, federal employees who request accommodations often find themselves negotiating across months, producing rounds of medical documentation, and watching the interactive process slow into something that resembles refusal without ever quite getting there.",
    },
    {
      kind: "p",
      text: "This article walks through the substantive framework, the procedural mechanism, and the strategic reality. It is written for federal employees who are about to make a request, who have just been denied, or who are trying to understand whether what is happening to them is unlawful.",
    },

    {
      kind: "h2",
      id: "the-statute",
      text: "The statutory framework",
    },
    {
      kind: "p",
      text: "Federal employees who experience disability discrimination proceed under the Rehabilitation Act of 1973, not under the Americans with Disabilities Act. Section 501 covers federal-sector employment; Section 505 supplies the remedies framework. The substantive standards under Section 501 are drawn from the ADA — the analysis of disability, of qualified individual status, of essential functions, of reasonable accommodation, and of undue hardship is the same. The procedural path is different, and it runs through 29 CFR Part 1614.",
    },
    {
      kind: "p",
      text: "A federal employee is a qualified individual with a disability when they have a physical or mental impairment that substantially limits one or more major life activities, when they have a record of such an impairment, or when they are regarded as having such an impairment — and when, with or without reasonable accommodation, they can perform the essential functions of the job.",
    },
    {
      kind: "p",
      text: "The agency's obligation is to provide reasonable accommodation absent undue hardship. Reasonable accommodation is any modification to the job, the work environment, or the manner in which the work is performed that allows the federal employee to perform the essential functions or to enjoy equal benefits and privileges. Undue hardship is the agency's affirmative defense — and in federal employment it is rarely successful, because federal agencies have substantial resources to draw on.",
    },

    {
      kind: "callout",
      tone: "info",
      title: "Essential functions, not all duties",
      text: "Reasonable accommodation is owed for essential functions — the fundamental duties a position exists to perform — not for every task on the position description. A federal employee with a disability does not have to be able to do everything; they have to be able to do the essential things, with accommodation if necessary.",
    },

    {
      kind: "h2",
      id: "the-interactive-process",
      text: "The interactive process",
    },
    {
      kind: "p",
      text: "The interactive process is the collaborative, good-faith dialogue between the federal employee and the agency about what accommodation is available. It is itself a legal obligation. An agency that refuses to engage — that treats the request as a referendum on whether the employee is disabled enough, that demands documentation beyond what the limitation reasonably requires, that fails to respond at all — can be liable even if a reasonable accommodation analysis on the merits would not have required the requested change.",
    },
    {
      kind: "p",
      text: "The federal employee's part of the process is to make the request clear, identify the workplace barrier, propose accommodations, and provide medical documentation that reasonably ties the limitation to the requested change. The agency's part is to engage in dialogue, request only what is reasonably necessary, propose alternatives where the requested accommodation is not available, and decide within a reasonable time.",
    },
    {
      kind: "p",
      text: "There is no magic form of words a federal employee must use to start the process. The EEOC's guidance is explicit: a request for reasonable accommodation is any communication from an employee, a family member, or a representative that conveys that the employee needs a workplace change because of a medical condition. The federal employee does not have to use the words 'reasonable accommodation' or 'Rehabilitation Act' — they have to make the substance of the request clear.",
    },

    {
      kind: "pullquote",
      text: "An agency that refuses to engage can be liable even if accommodation would not have been required on the merits.",
    },

    {
      kind: "h2",
      id: "how-to-request",
      text: "How to request an accommodation",
    },
    {
      kind: "p",
      text: "The strongest accommodation requests are written. They go to both the supervisor and the disability program manager — most agencies have both, and the parallel routing prevents the request from disappearing in one inbox. They identify the federal employee as an employee with a disability. They describe the limitation. They describe the workplace barrier. And they propose the specific accommodation the employee believes will resolve the barrier.",
    },
    {
      kind: "ol",
      items: [
        "Identify yourself as an employee with a disability requesting reasonable accommodation under the Rehabilitation Act.",
        "Describe the limitation — what the medical condition prevents you from doing in the way you currently do it.",
        "Describe the workplace barrier — what part of the job or environment is creating the difficulty.",
        "Propose a specific accommodation — schedule modification, telework, reassignment of marginal tasks, modified equipment, leave, a reassignment to a vacant position the federal employee is qualified for.",
        "Offer to supply medical documentation supporting the limitation, and ask for the agency's documentation procedures.",
        "Request a written response within a reasonable time, and propose a follow-up meeting.",
      ],
    },
    {
      kind: "p",
      text: "Keep a copy. Save the date the request was made and the date of every agency response. The interactive process should generate a paper trail — and if it does not, the federal employee should be generating one unilaterally.",
    },

    {
      kind: "h2",
      id: "documentation",
      text: "Medical documentation",
    },
    {
      kind: "p",
      text: "Agencies may request medical documentation reasonably tied to the limitation and the accommodation requested. They may not require the federal employee's entire medical history. They may not require a diagnosis the agency does not need to evaluate the request. They may not require a treating provider to attest to specific accommodations the agency has unilaterally decided on.",
    },
    {
      kind: "p",
      text: "Federal employees frequently encounter overbroad documentation requests. The standard the EEOC applies is whether the documentation is reasonably necessary to determine that the employee has a disability and to evaluate the requested accommodation. A treating provider's statement that describes the impairment, the major life activities affected, and the workplace limitation is usually sufficient. The agency does not need the medical record.",
    },

    {
      kind: "h2",
      id: "denial-or-stall",
      text: "When the agency denies the request — or stalls",
    },
    {
      kind: "p",
      text: "Federal agencies often do not say no in a single document. They produce a series of partial responses, requests for additional documentation, conversations that promise alternatives that do not materialize, and meetings whose conclusions are never reduced to writing. The federal employee experiences a slow attrition that ends with the original accommodation effectively denied.",
    },
    {
      kind: "p",
      text: "A formal denial — written, identifying the agency's position, citing the basis — starts the 45-day clock for the federal employee to initiate EEO counseling on a denial-of-accommodation claim. A failure to engage in the interactive process is itself actionable, and the clock can be set running by sending the agency a written confirmation that the federal employee considers the request denied as of a specified date.",
    },
    {
      kind: "p",
      text: "The strategic move when the agency stalls is to convert the ambiguity into a written denial. The federal employee writes to the disability program manager confirming the date of the original request, describing the agency's responses to date, identifying the absence of an accommodation, and stating that the federal employee will treat the request as denied unless a written response is received by a specified date. That letter starts the EEO clock at a date the federal employee controls.",
    },

    {
      kind: "callout",
      tone: "deadline",
      title: "The 45-day clock on denial",
      text: "A federal employee who has been denied a reasonable accommodation has 45 calendar days from the denial to initiate contact with the EEO counselor — the same 45-day window that applies to every other federal EEO claim. The clock can also be set by the federal employee's own written notice converting an indefinite stall into a denial as of a date certain.",
    },

    {
      kind: "h2",
      id: "what-counts-as-accommodation",
      text: "What counts as an accommodation",
    },
    {
      kind: "p",
      text: "Reasonable accommodation is not a fixed list. The EEOC has explicitly resisted any attempt to limit accommodations to a defined set, because the workplaces, the jobs, and the conditions are too varied. The framework is functional: what change in the workplace would allow this federal employee to perform the essential functions of this job?",
    },
    {
      kind: "p",
      text: "Common accommodations in federal employment include modified schedules, telework, modified equipment, the reassignment of marginal tasks, a transfer to a vacant position the employee is qualified for, the use of leave as an accommodation, accessibility modifications, and modifications to performance standards related to non-essential functions. The agency's obligation is to provide an effective accommodation — not necessarily the accommodation the federal employee asked for, but an accommodation that effectively removes the barrier.",
    },

    {
      kind: "key-takeaways",
      items: [
        "Federal employees with disabilities proceed under the Rehabilitation Act, with substantive standards drawn from the ADA.",
        "The interactive process is itself a legal obligation; refusing to engage is independently actionable.",
        "Requests should be written, routed to both the supervisor and the disability program manager, and follow the five-element format above.",
        "Agencies may request medical documentation reasonably tied to the limitation — not the federal employee's entire medical history.",
        "When the agency stalls, the federal employee can convert the ambiguity into a written denial that starts the 45-day clock.",
        "Reasonable accommodation is functional and case-specific — there is no fixed list.",
      ],
    },
  ],
};
