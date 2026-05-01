import type { Metadata } from "next";
import { IntegrationsBody } from "@/components/pages/integrations-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Hellow connects to your calendar, CRM, and tools — bidirectional, real-time, no plumbing required.",
  alternates: {
    canonical: "/integrations",
    languages: alternateLanguages("/integrations"),
  },
};

export default function IntegrationsPage() {
  return <IntegrationsBody locale="en" />;
}
