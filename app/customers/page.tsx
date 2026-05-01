import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "From dental clinics to HVAC dispatch, see how local businesses use Hellow to never miss a customer.",
};

type Story = {
  industry: string;
  company: string;
  location: string;
  metric: { value: string; label: string };
  quote: string;
  who: string;
};

// TODO: replace placeholder stories with real customer testimonials before launch.
const STORIES: Story[] = [
  {
    industry: "Dental",
    company: "Bright Mile Dental",
    location: "Austin, TX · 2 locations",
    metric: { value: "47%", label: "fewer no-shows in 90 days" },
    quote:
      "Our front-desk team got hours of their day back. Patients are reminded, rebooked, and rescheduled without anyone touching the phone.",
    who: "Dr. Lena Park, Owner",
  },
  {
    industry: "HVAC",
    company: "Northgate Heating & Cooling",
    location: "Cleveland, OH",
    metric: { value: "$118K", label: "recovered in the first year" },
    quote:
      "We were losing 20+ calls a week to voicemail. Hellow caught all of them — including a $9,000 commercial install that came in on a Sunday.",
    who: "Marcus Reilly, GM",
  },
  {
    industry: "Law",
    company: "Aceves & Reyes, PLLC",
    location: "San Antonio, TX",
    metric: { value: "3.4×", label: "consultation conversion" },
    quote:
      "Hellow handles intake on the first call — case type, urgency, jurisdiction — so by the time it reaches an attorney, it's already qualified.",
    who: "Daniela Aceves, Partner",
  },
  {
    industry: "Roofing",
    company: "Skyline Roofing Co.",
    location: "Tampa, FL",
    metric: { value: "92%", label: "of after-hours leads captured" },
    quote:
      "Storm damage doesn't wait for business hours. Hellow scopes the job, takes photos by SMS, and books the inspection — usually before we wake up.",
    who: "Tony Voss, Founder",
  },
  {
    industry: "Salons",
    company: "Maple & Stone Studio",
    location: "Brooklyn, NY",
    metric: { value: "+34%", label: "new clients month-over-month" },
    quote:
      "Instagram DMs were a black hole. Hellow replies in seconds, books straight into our calendar, and tells me when the day is full.",
    who: "Imani Brooks, Owner",
  },
  {
    industry: "Veterinary",
    company: "Riverbend Animal Hospital",
    location: "Boise, ID",
    metric: { value: "< 4 sec", label: "average pickup time" },
    quote:
      "Anxious pet parents don't want voicemail. They want a calm voice that knows the difference between an appointment and an emergency. Hellow does.",
    who: "Dr. Sam Whitmore, DVM",
  },
];

const LOGO_BAR = [
  "Bright Mile Dental",
  "Northgate HVAC",
  "Aceves & Reyes",
  "Skyline Roofing",
  "Maple & Stone",
  "Riverbend Animal",
  "Atlas Plumbing",
  "Cedar Realty",
];

export default function CustomersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Customers"
        title={
          <>
            Run by real owners.{" "}
            <span className="font-display-italic text-coral-600">Answered</span> by
            Hellow.
          </>
        }
        subtitle="Across dental, HVAC, legal, roofing, salons, and more — local businesses use Hellow to turn every ring (and every DM) into booked revenue."
      />

      {/* Logo bar */}
      <section className="bg-bg py-12">
        <div className="container">
          <p className="text-center text-eyebrow font-semibold uppercase text-ink-muted">
            Trusted by local teams across North America
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {LOGO_BAR.map((name) => (
              <li
                key={name}
                className="text-center font-display text-base font-semibold tracking-tight text-ink-muted/70"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-bg-soft py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow font-semibold uppercase text-coral-600">Stories</p>
            <h2 className="mt-3 font-display text-display-lg font-medium text-balance text-ink">
              Real businesses.{" "}
              <span className="font-display-italic text-coral-600">Real numbers.</span>
            </h2>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {STORIES.map((s) => (
              <li
                key={s.company}
                className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-bg p-8 shadow-soft ring-1 ring-line sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-coral-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-coral-700 ring-1 ring-coral-200">
                      {s.industry}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                      {s.company}
                    </h3>
                    <p className="text-sm text-ink-muted">{s.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-4xl font-semibold leading-none tracking-tight text-coral-600">
                      {s.metric.value}
                    </div>
                    <p className="mt-1 max-w-[140px] text-[11px] uppercase tracking-wider text-ink-muted">
                      {s.metric.label}
                    </p>
                  </div>
                </div>

                <blockquote className="relative flex-1 rounded-2xl bg-bg-soft p-6 ring-1 ring-line">
                  <Quote className="absolute -top-3 left-5 h-6 w-6 fill-coral-500 text-coral-500" />
                  <p className="text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
                    &ldquo;{s.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm font-medium text-ink-muted">
                    — {s.who}
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
