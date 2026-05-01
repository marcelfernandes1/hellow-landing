import type { Metadata } from "next";
import { HomeBody } from "@/components/home-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Hellow — A recepcionista de IA para negócios locais",
  description:
    "A Hellow é a recepcionista de IA que atende todas as ligações, agenda compromissos e captura leads 24/7 — para negócios locais nunca mais perderem um cliente.",
  alternates: {
    canonical: "/br",
    languages: alternateLanguages("/"),
  },
  openGraph: {
    title: "Hellow — Nunca mais perca uma ligação. Nunca.",
    description:
      "A recepcionista de IA que atende toda ligação, agenda compromissos e captura leads 24/7.",
    locale: "pt_BR",
    url: "https://hellow.ai/br",
  },
};

export default function HomePageBR() {
  return <HomeBody locale="pt" />;
}
