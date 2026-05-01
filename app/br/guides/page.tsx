import type { Metadata } from "next";
import { GuidesBody } from "@/components/pages/guides-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Guias por setor",
  description:
    "Playbooks pensados para o seu setor — odontologia, HVAC, advocacia, telhados, salões e mais.",
  alternates: { canonical: "/br/guides", languages: alternateLanguages("/guides") },
};

export default function GuidesPageBR() {
  return <GuidesBody locale="pt" />;
}
