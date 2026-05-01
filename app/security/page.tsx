import type { Metadata } from "next";
import { SecurityBody } from "@/components/pages/security-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Hellow keeps customer data safe — SOC 2 Type II, HIPAA-eligible, end-to-end encryption.",
  alternates: { canonical: "/security", languages: alternateLanguages("/security") },
};

export default function SecurityPage() {
  return <SecurityBody locale="en" />;
}
