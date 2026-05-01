import type { Metadata } from "next";
import { DPABody } from "@/components/pages/dpa-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Acordo de Processamento de Dados",
  description:
    "Como a Hellow trata dados pessoais em nome dos clientes, em conformidade com as leis de privacidade aplicáveis.",
  alternates: { canonical: "/br/dpa", languages: alternateLanguages("/dpa") },
};

export default function DPAPageBR() {
  return <DPABody locale="pt" />;
}
