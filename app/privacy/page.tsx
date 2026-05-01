import type { Metadata } from "next";
import { PrivacyBody } from "@/components/pages/privacy-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hellow collects, uses, and protects information from customers and their callers.",
  alternates: { canonical: "/privacy", languages: alternateLanguages("/privacy") },
};

export default function PrivacyPage() {
  return <PrivacyBody locale="en" />;
}
