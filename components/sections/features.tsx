"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
  Clock,
  FileText,
  Languages,
  MessageSquareText,
  UserPlus,
} from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "24/7 call answering",
    body: "Never miss a ring — mornings, evenings, weekends, holidays. Hellow is awake when you can't be.",
  },
  {
    icon: CalendarClock,
    title: "Smart appointment booking",
    body: "Two-way sync with Google Calendar and Outlook. Hellow checks availability and books in real time.",
  },
  {
    icon: UserPlus,
    title: "Lead capture & CRM sync",
    body: "Every caller saved with name, number, intent, and full transcript. Pushes to your CRM automatically.",
  },
  {
    icon: MessageSquareText,
    title: "SMS follow-up",
    body: "Confirmations, reminders, and reschedule links — sent automatically the moment a call ends.",
  },
  {
    icon: Languages,
    title: "Multi-language",
    body: "Answers in English, Spanish, and Portuguese. Switches seamlessly mid-call when the caller does.",
  },
  {
    icon: FileText,
    title: "Real-time transcripts",
    body: "Every conversation transcribed and searchable. Quality assurance, training, and proof — built in.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-bg-soft py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-eyebrow font-semibold uppercase text-coral-600">Capabilities</p>
            <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
              Everything a great receptionist does.{" "}
              <span className="font-display-italic text-coral-600">Without the payroll.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink-muted lg:col-span-5 text-pretty">
            Built for the realities of running a local business — every feature designed to
            replace a missed call with a booked customer.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
              className="group relative flex flex-col gap-4 bg-bg p-8 transition-colors duration-300 hover:bg-coral-50/50 sm:p-9"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-bg-soft text-ink ring-1 ring-line transition-all duration-300 group-hover:bg-coral-500 group-hover:text-white group-hover:ring-coral-500">
                <f.icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                  {f.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
