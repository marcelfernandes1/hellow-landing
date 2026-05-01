import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CreditCard,
  HelpCircle,
  PhoneCall,
  Plug,
  Rocket,
  Search,
  Shield,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Setup guides, billing FAQs, integrations, and troubleshooting — everything you need to get the most out of Hellow.",
};

const CATEGORIES = [
  {
    icon: Rocket,
    title: "Getting started",
    body: "Forward your number, train Hellow on your business, go live in under 10 minutes.",
    count: 8,
  },
  {
    icon: PhoneCall,
    title: "Phone setup",
    body: "Porting, call forwarding, voice settings, after-hours routing, and emergency escalation.",
    count: 14,
  },
  {
    icon: CalendarClock,
    title: "Booking & scheduling",
    body: "Calendar sync, availability rules, buffer times, no-show handling, reminders.",
    count: 11,
  },
  {
    icon: Plug,
    title: "Integrations",
    body: "Google Calendar, Outlook, HubSpot, Salesforce, Zapier, and custom webhooks.",
    count: 17,
  },
  {
    icon: CreditCard,
    title: "Billing",
    body: "Plans, invoicing, taxes, annual vs monthly, upgrading, and pausing.",
    count: 9,
  },
  {
    icon: Shield,
    title: "Security & compliance",
    body: "SOC 2, HIPAA, data residency, encryption, and customer-data controls.",
    count: 7,
  },
];

const TOP = [
  {
    q: "Will my customers know they're talking to AI?",
    a: "Most won't — a 2025 University of Michigan study found 71% of callers can't tell modern voice AI from a human. If a caller asks directly, Hellow tells them.",
  },
  {
    q: "How long does setup take?",
    a: "Most businesses are live in under 10 minutes once we have your hours, services, and FAQs.",
  },
  {
    q: "What happens when Hellow can't answer something?",
    a: "Hellow handles 90–95% of calls end-to-end. For anything outside its scope, it routes the call to you instantly with a transcript and full context.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No annual lock-in, no cancellation fees, no penalty.",
  },
];

export default function HelpPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Help center"
        title={
          <>
            Find an answer.{" "}
            <span className="font-display-italic text-coral-600">Or call one.</span>
          </>
        }
        subtitle="Everything you need to set up, run, and scale Hellow. Can't find it? Hellow itself can answer most questions about Hellow — give it a ring."
      >
        {/* Decorative search */}
        <form
          action="/help"
          method="get"
          className="mt-2 flex max-w-xl items-center gap-2 rounded-full border border-line bg-bg p-1.5 shadow-soft"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full text-ink-muted">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="search"
            name="q"
            placeholder="Search articles, integrations, voice settings…"
            className="flex-1 bg-transparent px-1 py-2 text-[0.95rem] placeholder:text-ink-subtle focus:outline-none"
            aria-label="Search help articles"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-full bg-coral-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-coral-600"
          >
            Search
          </button>
        </form>
      </PageHero>

      {/* Categories */}
      <section className="bg-bg py-20">
        <div className="container">
          <h2 className="font-display text-display-md font-medium tracking-tight text-ink">
            Browse by topic
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <li key={c.title}>
                <Link
                  href="#"
                  className="group block h-full rounded-3xl border border-line bg-bg-soft p-7 transition-all hover:-translate-y-0.5 hover:border-coral-200 hover:bg-coral-50/40 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-bg text-ink ring-1 ring-line transition-all group-hover:bg-coral-500 group-hover:text-white group-hover:ring-coral-500">
                      <c.icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-subtle">
                      {c.count} articles
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                    {c.body}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-coral-600">
                    Browse <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Top questions */}
      <section className="bg-bg-soft py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-6 w-6 text-coral-600" />
              <h2 className="font-display text-display-md font-medium tracking-tight text-ink">
                Top questions
              </h2>
            </div>
            <ul className="mt-8 space-y-4">
              {TOP.map((t) => (
                <li
                  key={t.q}
                  className="rounded-3xl border border-line bg-bg p-7 shadow-soft"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {t.q}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                    {t.a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
