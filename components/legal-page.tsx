import { AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";
import { Prose } from "@/components/prose";

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  subtitle,
  lastUpdated,
  sections,
  showLegalReviewNotice = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  lastUpdated: string;
  sections: LegalSection[];
  showLegalReviewNotice?: boolean;
}) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle}>
        <p className="text-sm text-ink-muted">
          Last updated:{" "}
          <span className="font-medium text-ink-soft">{lastUpdated}</span>
        </p>
      </PageHero>

      <section className="bg-bg py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
            {/* TOC */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-3xl border border-line bg-bg-soft p-6">
                <p className="text-eyebrow font-semibold uppercase text-coral-600">
                  On this page
                </p>
                <ol className="mt-4 space-y-1.5">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex items-baseline gap-3 rounded-lg py-1.5 text-sm text-ink-soft transition-colors hover:text-coral-600"
                      >
                        <span className="font-display text-xs font-semibold tabular-nums text-ink-subtle group-hover:text-coral-600">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Body */}
            <div className="lg:col-span-8">
              {showLegalReviewNotice && (
                <div className="mb-10 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-sm leading-relaxed">
                    <strong>Draft for review.</strong> This document is a working
                    template provided for transparency. It must be reviewed and
                    finalized by qualified legal counsel before relying on it.
                  </p>
                </div>
              )}

              <Prose>
                {sections.map((s) => (
                  <section key={s.id} id={s.id}>
                    <h2>{s.title}</h2>
                    {s.body}
                  </section>
                ))}
              </Prose>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
