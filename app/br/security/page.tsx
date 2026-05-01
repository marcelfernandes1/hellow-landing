import type { Metadata } from "next";
import { SecurityBody } from "@/components/pages/security-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Segurança",
  description:
    "Como a Hellow mantém os dados dos clientes seguros — SOC 2 Tipo II, elegível a HIPAA, criptografia ponta a ponta.",
  alternates: {
    canonical: "/br/security",
    languages: alternateLanguages("/security"),
  },
};

export default function SecurityPageBR() {
  return <SecurityBody locale="pt" />;
}
