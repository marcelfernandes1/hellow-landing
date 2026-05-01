"use client";

import { useState } from "react";
import { ArrowRight, BarChart3, Download, FileText } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";

const HIGHLIGHTS = [
  {
    stat: "97%",
    label: "of enterprises have adopted voice AI",
    source: "Mordor Intelligence",
  },
  {
    stat: "71%",
    label: "of callers can't tell modern AI from a human",
    source: "University of Michigan, 2025",
  },
  {
    stat: "60%",
    label: "reduction in missed calls (up to)",
    source: "Nextiva",
  },
  {
    stat: "50%",
    label: "of business calls handled by AI by 2027 (projected)",
    source: "Gartner",
  },
];

const CONTENTS = [
  "The state of voice AI in 2026",
  "Why local businesses lose 62% of calls",
  "Caller perception: 71% can't tell AI from human",
  "ROI math: payback windows by industry",
  "The omnichannel shift — phone, web, IG, FB",
  "What 'good' looks like: latency, language, escalation",
  "Buyer's checklist for evaluating voice AI",
  "Looking ahead — what changes in 2027",
];

export default function ReportPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Free report"
        title={
          <>
            The 2026 Voice AI{" "}
            <span className="font-display-italic text-coral-600">Report</span>.
          </>
        }
        subtitle="38 pages. Hard data on adoption, perception, and ROI from 2025-2026 voice AI deployments — written for owners and operators who want signal, not hype."
      />

      <section className="bg-bg py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Cover + form */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Cover */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-coral-500 to-coral-700 p-8 text-white shadow-lift">
                  <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.18] mix-blend-overlay" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <p className="text-eyebrow font-semibold uppercase text-white/75">
                        Hellow Industry Report
                      </p>
                      <p className="mt-3 text-sm text-white/70">2026 Edition · 38 pages</p>
                    </div>
                    <div>
                      <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-tight">
                        The Voice AI Report
                      </h2>
                      <p className="mt-3 max-w-[18ch] font-display-italic text-lg text-white/85">
                        For owners who want signal, not hype.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Floating tag */}
                <div className="absolute -right-4 -top-4 rotate-3 rounded-2xl bg-bg p-4 shadow-lift ring-1 ring-line">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-coral-600" />
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-ink">
                      PDF · 4.2MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="mt-8 rounded-3xl border border-line bg-bg-soft p-7">
                {submitted ? (
                  <div>
                    <p className="text-eyebrow font-semibold uppercase text-coral-600">
                      Sent
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
                      Check your inbox.
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-muted">
                      The PDF is on its way. While you wait, give Hellow a call to see what
                      the report describes — live.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      // TODO: wire to report-delivery handler (e.g. /api/report).
                      setSubmitted(true);
                    }}
                    className="space-y-3"
                  >
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                      Send me the report
                    </h3>
                    <p className="text-sm text-ink-muted">
                      Free. No drip campaign. Unsubscribe in one click.
                    </p>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-line bg-bg px-4 py-3 text-[0.95rem] placeholder:text-ink-subtle focus:border-coral-400 focus:outline-none focus:ring-2 focus:ring-coral-400/30"
                      aria-label="Your name"
                    />
                    <input
                      type="email"
                      required
                      placeholder="you@business.com"
                      className="w-full rounded-2xl border border-line bg-bg px-4 py-3 text-[0.95rem] placeholder:text-ink-subtle focus:border-coral-400 focus:outline-none focus:ring-2 focus:ring-coral-400/30"
                      aria-label="Email"
                    />
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-5 py-3 font-medium text-white shadow-coral transition-colors hover:bg-coral-600"
                    >
                      <Download className="h-4 w-4" />
                      Get the report
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Highlights + ToC */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-coral-600" />
                <h2 className="font-display text-display-md font-medium tracking-tight text-ink">
                  Inside the report
                </h2>
              </div>

              <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line">
                {HIGHLIGHTS.map((h) => (
                  <li key={h.label} className="bg-bg p-6 sm:p-7">
                    <div className="font-display text-4xl font-semibold leading-none tracking-tight text-ink">
                      {h.stat}
                    </div>
                    <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-ink-soft">
                      {h.label}
                    </p>
                    <p className="mt-3 text-[11px] uppercase tracking-wider text-ink-subtle">
                      {h.source}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  Table of contents
                </h3>
                <ol className="mt-4 space-y-2">
                  {CONTENTS.map((c, i) => (
                    <li
                      key={c}
                      className="flex items-center gap-4 rounded-2xl border border-line bg-bg-soft px-5 py-3 text-[0.95rem] text-ink-soft"
                    >
                      <span className="font-display text-sm font-semibold tabular-nums text-coral-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {c}
                      <ArrowRight className="ml-auto h-3.5 w-3.5 text-ink-subtle" />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
