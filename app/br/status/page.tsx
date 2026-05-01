import type { Metadata } from "next";
import { StatusBody } from "@/components/pages/status-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Status do sistema",
  description:
    "Status em tempo real dos serviços da Hellow. Todos os sistemas operacionais.",
  alternates: { canonical: "/br/status", languages: alternateLanguages("/status") },
};

export default function StatusPageBR() {
  return <StatusBody locale="pt" />;
}
