import type { Metadata } from "next";
import { TermsBody } from "@/components/pages/terms-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The agreement between you and Hellow when you use our AI receptionist services.",
  alternates: { canonical: "/terms", languages: alternateLanguages("/terms") },
};

export default function TermsPage() {
  return <TermsBody locale="en" />;
}
