import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  CalendarRange,
  Cog,
  HardHat,
  Headphones,
  Instagram,
  Mail,
  MessageSquare,
  Phone,
  ShoppingBag,
  UserSquare2,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Hellow connects to your calendar, CRM, and tools — bidirectional, real-time, no plumbing required.",
};

type Integration = {
  name: string;
  category: string;
  blurb: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const INTEGRATIONS: Integration[] = [
  {
    name: "Google Calendar",
    category: "Calendar",
    blurb: "Two-way sync. Hellow checks availability and books in real time.",
    icon: Calendar,
  },
  {
    name: "Outlook & Microsoft 365",
    category: "Calendar",
    blurb: "Same intelligence, on the Microsoft side. Includes Teams meeting links.",
    icon: CalendarRange,
  },
  {
    name: "HubSpot",
    category: "CRM",
    blurb: "Every caller becomes a contact, with full transcript and intent tagged.",
    icon: UserSquare2,
  },
  {
    name: "Salesforce",
    category: "CRM",
    blurb: "Push leads, log call activity, and trigger workflows on conversation outcomes.",
    icon: Workflow,
  },
  {
    name: "Pipedrive",
    category: "CRM",
    blurb: "Auto-create deals from calls and DMs. Stage advances on confirmed bookings.",
    icon: ShoppingBag,
  },
  {
    name: "Jobber",
    category: "Field service",
    blurb: "Bookings flow into your job schedule with customer details pre-filled.",
    icon: HardHat,
  },
  {
    name: "Housecall Pro",
    category: "Field service",
    blurb: "Hellow books, you dispatch. No double-entry, no missed jobs.",
    icon: Wrench,
  },
  {
    name: "Acuity Scheduling",
    category: "Booking",
    blurb: "Hand-off to your existing booking flow when callers prefer self-serve.",
    icon: Calendar,
  },
  {
    name: "Calendly",
    category: "Booking",
    blurb: "Send a Calendly link by SMS for callers who'd rather choose their own time.",
    icon: Calendar,
  },
  {
    name: "Twilio",
    category: "Telephony",
    blurb: "Bring your own number. Or port for free. Or get a fresh local one.",
    icon: Phone,
  },
  {
    name: "Instagram & Messenger",
    category: "Channel",
    blurb: "Reply to every DM the moment it arrives. Same brain as the phone.",
    icon: Instagram,
  },
  {
    name: "Slack",
    category: "Notifications",
    blurb: "Real-time alerts for VIP callers, missed handoffs, and daily summaries.",
    icon: MessageSquare,
  },
  {
    name: "Email (SMTP / Postmark / SendGrid)",
    category: "Notifications",
    blurb: "Branded confirmation and follow-up emails — all sent from your domain.",
    icon: Mail,
  },
  {
    name: "Zapier",
    category: "Automation",
    blurb: "6,000+ apps, one webhook. Build any workflow in minutes.",
    icon: Zap,
  },
  {
    name: "Custom webhooks",
    category: "Automation",
    blurb: "Real-time POSTs on every conversation, booking, or transcript. JSON, signed.",
    icon: Cog,
  },
  {
    name: "Helpdesk handoff",
    category: "Support",
    blurb: "Escalate to Zendesk, Intercom, or Freshdesk when a human is needed.",
    icon: Headphones,
  },
];

const CATEGORIES = Array.from(new Set(INTEGRATIONS.map((i) => i.category)));

export default function IntegrationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Integrations"
        title={
          <>
            Hellow plugs into{" "}
            <span className="font-display-italic text-coral-600">your stack</span>.
          </>
        }
        subtitle="Calendars, CRMs, scheduling, telephony, automation. Two-way sync, real-time, signed webhooks. Nothing to babysit."
      />

      <section className="bg-bg py-20">
        <div className="container">
          <div className="mb-10 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full border border-line bg-bg-soft px-4 py-1.5 text-sm font-medium text-ink-soft"
              >
                {c}
              </span>
            ))}
          </div>

          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
            {INTEGRATIONS.map((it) => (
              <li
                key={it.name}
                className="group flex flex-col gap-4 bg-bg p-7 transition-colors duration-300 hover:bg-coral-50/50"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-bg-soft text-ink ring-1 ring-line transition-all group-hover:bg-coral-500 group-hover:text-white group-hover:ring-coral-500">
                    <it.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
                    {it.category}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {it.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted text-pretty">
                    {it.blurb}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start gap-3 rounded-3xl border border-line bg-bg-soft p-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-10">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Don't see yours?
              </h3>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-muted">
                Custom integrations are part of the Omnichannel onboarding. Tell us your
                stack and we'll wire it up.
              </p>
            </div>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to integrations</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
