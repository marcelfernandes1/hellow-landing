import type { Metadata } from "next";
import { PrivacyBody } from "@/components/pages/privacy-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Hellow coleta, usa e protege as informações dos clientes e dos seus contatos.",
  alternates: { canonical: "/br/privacy", languages: alternateLanguages("/privacy") },
};

export default function PrivacyPageBR() {
  return <PrivacyBody locale="pt" />;
}
