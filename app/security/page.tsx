import type { Metadata } from "next";
import {
  Eye,
  KeyRound,
  Lock,
  Network,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Hellow keeps customer data safe — SOC 2 Type II, HIPAA-eligible, end-to-end encryption.",
};

const COMMITMENTS = [
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II",
    body: "Independently audited every year against the AICPA Trust Services Criteria for Security, Availability, and Confidentiality.",
  },
  {
    icon: Lock,
    title: "Encryption everywhere",
    body: "TLS 1.2+ in transit. AES-256 at rest. Per-tenant key isolation for sensitive customer data.",
  },
  {
    icon: KeyRound,
    title: "HIPAA-eligible",
    body: "Available on Omnichannel plans with a signed Business Associate Agreement. Designed for medical and dental practices.",
  },
  {
    icon: UserCog,
    title: "Role-based access",
    body: "Least-privilege access controls, hardware-backed MFA, and audit logging for every administrative action.",
  },
  {
    icon: Network,
    title: "US data residency",
    body: "Customer conversation data stored and processed exclusively in US-based regions of our cloud provider.",
  },
  {
    icon: Eye,
    title: "Privacy by default",
    body: "We don't train our underlying models on your customers' conversations. We don't sell personal information. Ever.",
  },
];

const PRACTICES = [
  {
    title: "Vendor & subprocessor management",
    body: "All subprocessors are contractually bound to security and privacy obligations no less protective than our own. A current list is available upon request.",
  },
  {
    title: "Vulnerability management",
    body: "Continuous dependency scanning, quarterly third-party penetration tests, and a public coordinated-disclosure policy for security researchers.",
  },
  {
    title: "Incident response",
    body: "Documented incident-response runbook with on-call rotations 24/7. Material incidents are communicated within the timelines required by applicable law.",
  },
  {
    title: "Business continuity",
    body: "Multi-region failover for critical services. Database point-in-time recovery. Tested annually.",
  },
];

export default function SecurityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Security"
        title={
          <>
            Trust, built into{" "}
            <span className="font-display-italic text-coral-600">every layer</span>.
          </>
        }
        subtitle="Hellow handles real customer conversations. We treat that responsibility with the same rigor enterprise teams expect — and explain it in language a small business owner can verify."
      />

      {/* Commitments */}
      <section className="bg-bg py-20 lg:py-24">
        <div className="container">
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
            {COMMITMENTS.map((c) => (
              <li
                key={c.title}
                className="bg-bg p-7 sm:p-8"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-coral-50 text-coral-600 ring-1 ring-coral-100">
                  <c.icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Practices */}
      <section className="bg-bg-soft py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-eyebrow font-semibold uppercase text-coral-600">
                Operations
              </p>
              <h2 className="mt-3 font-display text-display-md font-medium text-balance text-ink">
                The practices behind the program.
              </h2>
            </div>
            <ul className="space-y-4 lg:col-span-8">
              {PRACTICES.map((p) => (
                <li
                  key={p.title}
                  className="rounded-3xl border border-line bg-bg p-7"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust pack */}
      <section className="bg-bg py-20">
        <div className="container">
          <div className="rounded-3xl border border-line bg-bg-soft p-8 sm:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-display-md font-medium tracking-tight text-ink">
                  Need our trust pack?
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-muted text-pretty">
                  We provide a current SOC 2 Type II report, security questionnaire (CAIQ),
                  data-processing agreement, and architecture overview under NDA.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href="mailto:security@hellow.ai"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-bg shadow-soft transition-colors hover:bg-ink-soft"
                >
                  Request trust pack
                </a>
                <a
                  href="/dpa"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-bg px-6 py-3.5 font-medium text-ink transition-colors hover:border-ink"
                >
                  Read DPA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
