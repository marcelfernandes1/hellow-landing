import type { Metadata } from "next";
import { ReportBody } from "@/components/pages/report-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Relatório de IA por Voz",
  description:
    "38 páginas de dados duros sobre adoção, percepção e ROI da IA de voz a partir de implantações de 2025-2026.",
  alternates: { canonical: "/br/report", languages: alternateLanguages("/report") },
};

export default function ReportPageBR() {
  return <ReportBody locale="pt" />;
}
