import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, Heart, Sparkles } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Help us build the AI receptionist local businesses actually love. We're a small, ambitious team.",
};

const PERKS = [
  {
    icon: Globe2,
    title: "Remote-first, async-first",
    body: "We meet a few times a week. The rest is heads-down work in your timezone of choice.",
  },
  {
    icon: Heart,
    title: "Healthcare + equity",
    body: "Top-tier health, dental, vision. Meaningful equity in a fast-growing company.",
  },
  {
    icon: Sparkles,
    title: "Real ownership",
    body: "Small team, big surface area. Whatever you ship is what customers see.",
  },
];

// TODO: replace with real open roles when posting.
const OPEN_ROLES: Array<{ title: string; team: string; location: string; href: string }> =
  [];

export default function CareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Help us answer{" "}
            <span className="font-display-italic text-coral-600">every call</span>.
          </>
        }
        subtitle="We're a small, fast-moving team building the AI receptionist that local businesses actually want. If that sounds like the kind of problem you'd want to spend years on — read on."
      />

      {/* Perks */}
      <section className="bg-bg py-20 lg:py-24">
        <div className="container">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PERKS.map((p) => (
              <li
                key={p.title}
                className="rounded-3xl border border-line bg-bg-soft p-7"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-coral-50 text-coral-600 ring-1 ring-coral-100">
                  <p.icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-bg-soft py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-eyebrow font-semibold uppercase text-coral-600">
                Open roles
              </p>
              <h2 className="mt-3 font-display text-display-md font-medium text-balance text-ink">
                Find your seat.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted text-pretty">
                We hire slowly and intentionally. If nothing's open today, send us a note
                anyway — we keep great résumés warm.
              </p>
            </div>

            <div className="lg:col-span-8">
              {OPEN_ROLES.length > 0 ? (
                <ul className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-bg">
                  {OPEN_ROLES.map((r) => (
                    <li key={r.title}>
                      <Link
                        href={r.href}
                        className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-coral-50/40 sm:p-7"
                      >
                        <div>
                          <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                            {r.title}
                          </h3>
                          <p className="mt-1 text-sm text-ink-muted">
                            {r.team} · {r.location}
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:text-coral-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-3xl border border-dashed border-line-strong bg-bg p-10 text-center">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                    No open roles right now.
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-muted text-pretty">
                    But we're always interested in hearing from people who could be a fit.
                    Tell us who you are and what you'd want to build.
                  </p>
                  <Button asChild size="lg" className="mt-6">
                    <a href="mailto:careers@hellow.ai">
                      Email careers@hellow.ai
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
