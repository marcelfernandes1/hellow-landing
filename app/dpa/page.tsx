import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description:
    "How Hellow processes personal data on behalf of customers, in accordance with applicable privacy laws.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "scope",
    title: "Scope & roles",
    body: (
      <>
        <p>
          This Data Processing Agreement ("DPA") governs Hellow's processing of
          Personal Data on behalf of the Customer in connection with the
          services described in the underlying Subscription Agreement ("Order").
        </p>
        <p>
          For the purposes of applicable data-protection laws (including the
          GDPR and the CCPA), Customer is the "Controller" and Hellow is the
          "Processor".
        </p>
      </>
    ),
  },
  {
    id: "subject",
    title: "Subject matter & duration",
    body: (
      <p>
        Hellow processes Personal Data only for the duration of the Order and
        only to deliver the services. Categories of data subjects include the
        Customer's end-customers and authorized users of the Customer's
        account; categories of Personal Data include contact details, voice
        recordings, transcripts, conversation metadata, and scheduling
        information.
      </p>
    ),
  },
  {
    id: "instructions",
    title: "Customer instructions",
    body: (
      <p>
        Hellow processes Personal Data only on documented instructions from
        Customer, as set out in the Order, this DPA, and any subsequent
        instructions Customer provides through the dashboard or in writing.
        Hellow will inform Customer if it believes an instruction conflicts
        with applicable law.
      </p>
    ),
  },
  {
    id: "subprocessors",
    title: "Subprocessors",
    body: (
      <>
        <p>
          Hellow may engage subprocessors to deliver the services. A current
          list is available at{" "}
          <a href="mailto:privacy@hellow.ai">privacy@hellow.ai</a>. Hellow
          imposes data-protection obligations on subprocessors that are no less
          protective than those in this DPA and remains liable for their
          performance.
        </p>
        <p>
          Hellow will provide reasonable advance notice of new subprocessors;
          Customer may object on reasonable grounds within 14 days of notice.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security measures",
    body: (
      <p>
        Hellow implements and maintains appropriate technical and
        organizational measures to protect Personal Data against unauthorized
        or unlawful processing and against accidental loss, destruction, or
        damage. A description of these measures is available on our{" "}
        <a href="/security">Security page</a> and in our SOC 2 report.
      </p>
    ),
  },
  {
    id: "transfers",
    title: "International transfers",
    body: (
      <p>
        Where Personal Data is transferred from the EEA, UK, or Switzerland to
        a country not deemed adequate by the European Commission, Hellow
        relies on the Standard Contractual Clauses (SCCs) and/or the
        UK International Data Transfer Addendum, which are incorporated into
        this DPA by reference and take precedence in the event of conflict.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Data subject requests",
    body: (
      <p>
        Hellow will provide commercially reasonable assistance to enable
        Customer to fulfil requests from data subjects exercising their
        rights under applicable law (access, correction, deletion,
        portability, objection).
      </p>
    ),
  },
  {
    id: "breach",
    title: "Breach notification",
    body: (
      <p>
        Hellow will notify Customer without undue delay after becoming aware of
        a Personal Data Breach, and provide information reasonably required
        for Customer to comply with its own breach-notification obligations.
      </p>
    ),
  },
  {
    id: "audits",
    title: "Audits",
    body: (
      <p>
        Hellow will make available to Customer its current SOC 2 Type II
        report and Trust Pack on request and under NDA. Additional audits may
        be conducted under the conditions described in the Order.
      </p>
    ),
  },
  {
    id: "deletion",
    title: "Return & deletion",
    body: (
      <p>
        Upon termination of the Order, Hellow will delete or return all
        Personal Data within 30 days, except where retention is required by
        applicable law.
      </p>
    ),
  },
];

export default function DPAPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Data Processing{" "}
          <span className="font-display-italic text-coral-600">Agreement</span>.
        </>
      }
      subtitle="How Hellow processes personal data on behalf of our customers."
      lastUpdated="May 1, 2026"
      sections={SECTIONS}
    />
  );
}
