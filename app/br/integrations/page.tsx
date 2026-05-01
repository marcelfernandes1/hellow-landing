import type { Metadata } from "next";
import { IntegrationsBody } from "@/components/pages/integrations-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Integrações",
  description:
    "A Hellow conecta com seu calendário, CRM e ferramentas — mão dupla, em tempo real, sem encanamento.",
  alternates: {
    canonical: "/br/integrations",
    languages: alternateLanguages("/integrations"),
  },
};

export default function IntegrationsPageBR() {
  return <IntegrationsBody locale="pt" />;
}
