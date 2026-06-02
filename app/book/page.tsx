import type { Metadata } from "next";
import { Suspense } from "react";
import { BookContent } from "./BookContent";

export const metadata: Metadata = {
  title: "Schedule Your Consultation",
  description: "Select a time to meet with Ericka Guthrie Dorsey, Esq. for your Federal EEO consultation.",
};

export default function BookPage() {
  return (
    <Suspense>
      <BookContent />
    </Suspense>
  );
}
