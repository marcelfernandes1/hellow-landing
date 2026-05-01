import type { Metadata } from "next";
import { AboutBody } from "@/components/pages/about-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hellow exists so local businesses never miss another customer. The story, the team, the mission.",
  alternates: { canonical: "/about", languages: alternateLanguages("/about") },
};

export default function AboutPage() {
  return <AboutBody locale="en" />;
}
