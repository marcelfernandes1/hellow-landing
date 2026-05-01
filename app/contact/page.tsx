import type { Metadata } from "next";
import { ContactBody } from "@/components/pages/contact-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Hellow live, or reach a person on our team.",
  alternates: {
    canonical: "/contact",
    languages: alternateLanguages("/contact"),
  },
};

export default function ContactPage() {
  return <ContactBody locale="en" />;
}
