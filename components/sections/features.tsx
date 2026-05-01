"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
  Facebook,
  FileText,
  Inbox,
  Instagram,
  Languages,
  MessageCircle,
  MessageSquareText,
  Phone,
  UserPlus,
} from "lucide-react";

type Feature = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
  channel?: boolean;
};

const FEATURES: Feature[] = [
  // Row 1 — channels
  {
    icon: Phone,
    title: "24/7 phone answering",
    body: "Mornings, evenings, weekends, holidays. Hellow picks up when you can't.",
    channel: true,
  },
  {
    icon: MessageCircle,
    title: "Website chat widget",
    body: "Drop one snippet on your site. Hellow answers questions and books visitors instantly.",
    channel: true,
  },
  {
    icon: Instagram,
    title: "Instagram + Facebook DMs",
    body: "Reply to every DM the moment it arrives — no more buried inboxes or lost leads.",
    channel: true,
  },
  // Row 2 — automation
  {
    icon: CalendarClock,
    title: "Smart appointment booking",
    body: "Two-way Google Calendar and Outlook sync. Hellow checks availability and books in real time.",
  },
  {
    icon: UserPlus,
    title: "Lead capture & CRM sync",
    body: "Every contact saved with name, number, intent, and full transcript. Pushes to your CRM automatically.",
  },
  {
    icon: FileText,
    title: "Real-time transcripts",
    body: "Every conversation transcribed and searchable. Quality assurance, training, and proof — built in.",
  },
  // Row 3 — reach & polish
  {
    icon: Inbox,
    title: "Unified omnichannel inbox",
    body: "Phone, web, IG, and FB conversations land in one place — no app-hopping, no missed threads.",
  },
  {
    icon: MessageSquareText,
    title: "SMS follow-up",
    body: "Confirmations, reminders, reschedule links — sent automatically the moment a conversation ends.",
  },
  {
    icon: Languages,
    title: "Multi-language",
    body: "Answers in English, Spanish, and Portuguese. Switches seamlessly mid-conversation when the customer does.",
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
              Everywhere customers reach you.{" "}
              <span className="font-display-italic text-coral-600">
                Every conversation, captured.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink-muted lg:col-span-5 text-pretty">
            Phone, website, Instagram, Facebook — one AI brain, one unified inbox, every
            booking landed. Built for the way local businesses actually win customers.
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
              {f.channel && (
                <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-coral-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-coral-700 ring-1 ring-coral-200">
                  Channel
                </span>
              )}
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

        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2 text-sm text-ink-muted">
          <Facebook className="h-4 w-4 text-coral-600" />
          <Instagram className="h-4 w-4 text-coral-600" />
          <MessageCircle className="h-4 w-4 text-coral-600" />
          <Phone className="h-4 w-4 text-coral-600" />
          <span className="ml-1">
            All four channels included on the{" "}
            <a href="#pricing" className="font-medium text-ink underline-offset-4 hover:underline">
              Omnichannel plan
            </a>
            .
          </span>
        </p>
      </div>
    </section>
  );
}
