import type { Metadata } from "next";
import { HelpBody } from "@/components/pages/help-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Central de ajuda",
  description:
    "Guias de configuração, dúvidas de cobrança, integrações e troubleshooting — tudo que você precisa para tirar o máximo da Hellow.",
  alternates: { canonical: "/br/help", languages: alternateLanguages("/help") },
};

export default function HelpPageBR() {
  return <HelpBody locale="pt" />;
}
