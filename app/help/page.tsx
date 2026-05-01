import type { Metadata } from "next";
import { HelpBody } from "@/components/pages/help-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Setup guides, billing FAQs, integrations, and troubleshooting — everything you need to get the most out of Hellow.",
  alternates: { canonical: "/help", languages: alternateLanguages("/help") },
};

export default function HelpPage() {
  return <HelpBody locale="en" />;
}
