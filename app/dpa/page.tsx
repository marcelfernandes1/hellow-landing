import type { Metadata } from "next";
import { DPABody } from "@/components/pages/dpa-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description:
    "How Hellow processes personal data on behalf of customers, in accordance with applicable privacy laws.",
  alternates: { canonical: "/dpa", languages: alternateLanguages("/dpa") },
};

export default function DPAPage() {
  return <DPABody locale="en" />;
}
