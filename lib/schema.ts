import { z } from "zod";

export const CaseStage = z.enum([
  "pre_complaint",
  "formal_filed",
  "roi_received",
  "hearing_requested",
  "fad_received",
  "appeal_ofo",
  "not_sure",
]);

export type CaseStageValue = z.infer<typeof CaseStage>;

export const CASE_STAGE_LABELS: Record<CaseStageValue, string> = {
  pre_complaint:      "Pre-complaint contact (within 45-day window)",
  formal_filed:       "Formal complaint filed",
  roi_received:       "ROI received and under review",
  hearing_requested:  "Hearing requested",
  fad_received:       "Final agency decision received",
  appeal_ofo:         "On appeal to EEOC OFO",
  not_sure:           "Not sure",
};

export const IntakeSchema = z.object({
  name:            z.string().min(2, "Full name is required"),
  agency:          z.string().min(2, "Agency name is required"),
  work_email:      z.string().email("Enter a valid work email"),
  personal_email:  z.string().email("Enter a valid email").optional().or(z.literal("")),
  phone:           z.string().min(10, "Enter a valid phone number"),
  case_stage:      CaseStage,
  case_description:z.string().min(20, "Please provide at least a brief description (20+ characters)"),
  contact_method:  z.enum(["email", "phone", "either"]),
  time_sensitive:  z.boolean(),
});

export type IntakeFormData = z.infer<typeof IntakeSchema>;
