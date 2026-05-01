import type { Metadata } from "next";
import { StatusBody } from "@/components/pages/status-body";
import { alternateLanguages } from "@/lib/i18n/utils";

export const metadata: Metadata = {
  title: "System Status",
  description: "Real-time status of Hellow's services. All systems operational.",
  alternates: { canonical: "/status", languages: alternateLanguages("/status") },
};

export default function StatusPage() {
  return <StatusBody locale="en" />;
}
