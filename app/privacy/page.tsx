import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hellow collects, uses, and protects information from customers and their callers.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <>
        <p>
          Hellow, Inc. ("Hellow", "we", "us") provides AI-powered receptionist
          services for local businesses. This Privacy Policy explains what
          information we collect, how we use it, and the choices available to you.
        </p>
        <p>
          This policy covers our website, marketing tools, customer dashboard, and
          the AI services that answer calls, chats, and DMs on behalf of our
          customers.
        </p>
      </>
    ),
  },
  {
    id: "information",
    title: "Information we collect",
    body: (
      <>
        <p>We collect three categories of information:</p>
        <ul>
          <li>
            <strong>Account information.</strong> Name, business name, email,
            billing details, and configuration choices you provide when setting
            up Hellow.
          </li>
          <li>
            <strong>Conversation data.</strong> Audio, transcripts, chat messages,
            phone numbers, and metadata generated when Hellow handles calls,
            chats, or DMs on your behalf.
          </li>
          <li>
            <strong>Usage data.</strong> Logs, device and browser information,
            cookies, and analytics events from our website and dashboard.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use information",
    body: (
      <>
        <p>We use information to:</p>
        <ul>
          <li>Operate, maintain, and improve the Hellow service.</li>
          <li>
            Provide AI receptionist features — answering calls, booking
            appointments, and capturing leads on your behalf.
          </li>
          <li>Send service updates, billing information, and security alerts.</li>
          <li>
            Investigate and prevent fraud, abuse, and security incidents.
          </li>
        </ul>
        <p>
          We do not train our underlying AI models on your customers'
          conversations, and we do not sell personal information.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing & subprocessors",
    body: (
      <>
        <p>
          We share data with vetted subprocessors strictly to operate the service
          (e.g. cloud hosting, telephony, calendar APIs, payment processing). A
          current list of subprocessors is available upon request.
        </p>
        <p>
          We may disclose information when required by law, to enforce our terms,
          or to protect rights, property, and safety.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <>
        <p>
          Conversation data is retained for the duration of your subscription and
          deleted within 30 days of termination, unless you request earlier
          deletion or longer retention is required by law.
        </p>
        <p>
          Account and billing information is retained as required for tax,
          accounting, and contractual obligations.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Depending on your location, you may have the right to access, correct,
          delete, or export your personal information; to object to or restrict
          processing; and to lodge a complaint with a supervisory authority.
        </p>
        <p>
          To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@hellow.ai">privacy@hellow.ai</a>.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We employ industry-standard administrative, technical, and physical
        safeguards — including encryption in transit and at rest, role-based
        access controls, and SOC 2 Type II controls. Read more on our{" "}
        <a href="/security">Security</a> page.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions or requests about this policy can be sent to{" "}
        <a href="mailto:privacy@hellow.ai">privacy@hellow.ai</a> or to the
        mailing address on our <a href="/contact">contact page</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Privacy{" "}
          <span className="font-display-italic text-coral-600">policy</span>.
        </>
      }
      subtitle="What we collect, how we use it, and the choices you have."
      lastUpdated="May 1, 2026"
      sections={SECTIONS}
    />
  );
}
