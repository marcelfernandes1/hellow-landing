import type { Metadata } from "next";
import { GuidesBody } from "@/components/pages/guides-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Industry Guides",
  description:
    "Playbooks tuned for your trade — dental, HVAC, legal, roofing, salons, and more.",
  alternates: { canonical: "/guides", languages: alternateLanguages("/guides") },
};

export default function GuidesPage() {
  return <GuidesBody locale="en" />;
}
