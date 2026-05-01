import type { Metadata } from "next";
import { TermsBody } from "@/components/pages/terms-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "O acordo entre você e a Hellow ao usar nossos serviços de recepcionista de IA.",
  alternates: { canonical: "/br/terms", languages: alternateLanguages("/terms") },
};

export default function TermsPageBR() {
  return <TermsBody locale="pt" />;
}
