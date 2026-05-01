import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Car,
  Hammer,
  Home,
  Scissors,
  Stethoscope,
  Wrench,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";

export const metadata: Metadata = {
  title: "Industry Guides",
  description:
    "Playbooks tuned for your trade — dental, HVAC, legal, roofing, salons, and more.",
};

const GUIDES = [
  {
    icon: Stethoscope,
    title: "Dental practices",
    body: "Cut no-shows, fill last-minute gaps, and let your front desk focus on patients in the chair.",
    stat: "Up to 50% fewer no-shows",
  },
  {
    icon: Wrench,
    title: "HVAC & plumbing",
    body: "Capture every emergency call. Triage urgency. Dispatch with full context.",
    stat: "$118K average revenue recovered",
  },
  {
    icon: Briefcase,
    title: "Law firms",
    body: "Qualify intake on the first call — case type, urgency, jurisdiction — before a partner picks up.",
    stat: "3.4× consultation conversion",
  },
  {
    icon: Hammer,
    title: "Roofing & exteriors",
    body: "Storm leads don't wait. Hellow scopes the job, takes photos, and books inspection.",
    stat: "92% after-hours capture",
  },
  {
    icon: Scissors,
    title: "Salons & spas",
    body: "Reply to every Instagram DM in seconds. Book directly into your calendar.",
    stat: "+34% new clients month-over-month",
  },
  {
    icon: Home,
    title: "Real estate",
    body: "Qualify buyers and sellers around the clock. Schedule showings without lifting a finger.",
    stat: "5× faster lead response",
  },
  {
    icon: Building2,
    title: "Medical clinics",
    body: "HIPAA-eligible call answering, intake, and reminders — across multiple locations.",
    stat: "< 4 sec average pickup",
  },
  {
    icon: Car,
    title: "Auto repair",
    body: "Estimate questions, drop-off scheduling, parts callbacks — all handled before you open.",
    stat: "+22% bay utilization",
  },
];

export default function GuidesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industry guides"
        title={
          <>
            Playbooks tuned for{" "}
            <span className="font-display-italic text-coral-600">your trade</span>.
          </>
        }
        subtitle="Hellow learns the language and rhythm of your industry. Pick yours below to see exactly how it works for businesses like you."
      />

      <section className="bg-bg py-20 lg:py-24">
        <div className="container">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {GUIDES.map((g) => (
              <li key={g.title}>
                <Link
                  href="#"
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-line bg-bg-soft p-7 transition-all hover:-translate-y-0.5 hover:border-coral-200 hover:bg-coral-50/40 hover:shadow-lift"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-bg text-ink ring-1 ring-line transition-all group-hover:bg-coral-500 group-hover:text-white group-hover:ring-coral-500">
                    <g.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                      {g.body}
                    </p>
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-coral-600">
                    {g.stat}
                  </p>
                  <p className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                    Read playbook
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center text-sm text-ink-muted">
            Don't see your industry?{" "}
            <Link href="/contact" className="font-medium text-coral-600 hover:underline">
              Tell us about it
            </Link>{" "}
            — we'll build you a custom setup.
          </p>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
