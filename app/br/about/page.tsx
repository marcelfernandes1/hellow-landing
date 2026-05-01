import type { Metadata } from "next";
import { AboutBody } from "@/components/pages/about-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A Hellow existe para que negócios locais nunca mais percam um cliente. A história, o time, a missão.",
  alternates: { canonical: "/br/about", languages: alternateLanguages("/about") },
};

export default function AboutPageBR() {
  return <AboutBody locale="pt" />;
}
