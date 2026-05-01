import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The agreement between you and Hellow when you use our AI receptionist services.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement",
    body: (
      <p>
        By accessing or using Hellow, you agree to these Terms of Service. If
        you're entering into this agreement on behalf of a company, you
        represent that you have the authority to bind that company.
      </p>
    ),
  },
  {
    id: "service",
    title: "The service",
    body: (
      <>
        <p>
          Hellow provides AI-powered receptionist services that answer calls,
          chats, and DMs on behalf of customers. The exact features available to
          you depend on your plan.
        </p>
        <p>
          We may modify, suspend, or discontinue features at any time. We'll
          give reasonable advance notice of material changes that affect paid
          plans.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "Accounts & access",
    body: (
      <p>
        You are responsible for safeguarding your account credentials and for
        any activity that occurs under your account. Notify us immediately at{" "}
        <a href="mailto:security@hellow.ai">security@hellow.ai</a> if you
        suspect unauthorized access.
      </p>
    ),
  },
  {
    id: "fees",
    title: "Fees & payment",
    body: (
      <>
        <p>
          Fees are set out in your subscription plan and are billed in advance,
          either monthly or annually. Setup fees are charged once at the start
          of your engagement.
        </p>
        <p>
          Late payments may result in suspension. Fees are non-refundable except
          as required by law or as expressly stated in your order.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use Hellow for unlawful purposes or in violation of telemarketing,
            consumer-protection, or telecommunications regulations.
          </li>
          <li>
            Reverse-engineer, scrape, or attempt to bypass technical
            limitations of the service.
          </li>
          <li>
            Upload or transmit content that is unlawful, infringing, harmful,
            or abusive.
          </li>
          <li>
            Resell or sublicense the service without our prior written consent.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data",
    title: "Customer data",
    body: (
      <p>
        You retain ownership of all data you and your customers provide
        through the service. Our use of that data is governed by our{" "}
        <a href="/privacy">Privacy Policy</a> and (where applicable) our{" "}
        <a href="/dpa">Data Processing Agreement</a>.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <p>
        Either party may terminate the agreement at any time. Upon termination,
        we'll deactivate your account and delete conversation data within 30
        days, unless you've requested earlier deletion or longer retention is
        required by law.
      </p>
    ),
  },
  {
    id: "warranties",
    title: "Disclaimers & limitation of liability",
    body: (
      <>
        <p>
          Hellow is provided "as is" without warranties of any kind, except as
          expressly stated in this agreement. We don't warrant that the service
          will be uninterrupted, error-free, or perfectly accurate in every
          conversation.
        </p>
        <p>
          To the maximum extent permitted by law, our aggregate liability under
          this agreement will not exceed the fees paid by you in the twelve
          months preceding the claim.
        </p>
      </>
    ),
  },
  {
    id: "general",
    title: "General",
    body: (
      <p>
        These terms are governed by the laws of the State of Delaware, USA.
        Disputes will be resolved in the state and federal courts located in
        Wilmington, Delaware. If any provision is held unenforceable, the rest
        will remain in effect.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Terms of{" "}
          <span className="font-display-italic text-coral-600">service</span>.
        </>
      }
      subtitle="The agreement between you and Hellow."
      lastUpdated="May 1, 2026"
      sections={SECTIONS}
    />
  );
}
