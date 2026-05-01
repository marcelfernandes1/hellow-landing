import type { Metadata } from "next";
import { ReportBody } from "@/components/pages/report-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Voice AI Report",
  description:
    "38 pages of hard data on voice AI adoption, perception, and ROI from 2025-2026 deployments.",
  alternates: { canonical: "/report", languages: alternateLanguages("/report") },
};

export default function ReportPage() {
  return <ReportBody locale="en" />;
}
