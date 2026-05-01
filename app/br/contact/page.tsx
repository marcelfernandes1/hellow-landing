import type { Metadata } from "next";
import { ContactBody } from "@/components/pages/contact-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Hellow ao vivo, ou com alguém do nosso time.",
  alternates: {
    canonical: "/br/contact",
    languages: alternateLanguages("/contact"),
  },
};

export default function ContactPageBR() {
  return <ContactBody locale="pt" />;
}
