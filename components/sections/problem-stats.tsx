"use client";

import { motion } from "framer-motion";
import { PhoneOff, RotateCcw, TrendingDown } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

const STATS = [
  {
    icon: PhoneOff,
    value: 62,
    suffix: "%",
    label: "of calls to local businesses go unanswered",
    source: "Industry research, 2025",
  },
  {
    icon: RotateCcw,
    value: 85,
    suffix: "%",
    label: "of callers never try a second time",
    source: "Zendesk Customer Experience Trends",
  },
  {
    icon: TrendingDown,
    prefix: "$",
    value: 126000,
    label: "average annual revenue lost to missed calls",
    source: "Industry data, small business surveys",
  },
];

export function ProblemStats() {
  return (
    <section className="relative bg-bg py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-eyebrow font-semibold uppercase text-coral-600">
            The hidden cost of voicemail
          </p>
          <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
            Every ringing phone is a {" "}
            <span className="font-display-italic text-coral-600">live</span> business decision.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.article
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-line bg-bg-soft p-8 transition-all duration-300 hover:-translate-y-1 hover:border-coral-200 hover:bg-coral-50/40 hover:shadow-lift"
            >
              <div className="pointer-events-none absolute inset-0 bg-grain bg-[size:5px_5px] opacity-40" />
              <div className="relative">
                <div className="mb-6 inline-grid h-11 w-11 place-items-center rounded-2xl bg-coral-100 text-coral-600 ring-1 ring-coral-200">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-[3.75rem] font-medium leading-none tracking-tight text-ink sm:text-[4.5rem]">
                  <AnimatedCounter
                    to={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    duration={2.2}
                  />
                </div>
                <p className="mt-4 max-w-[22ch] text-base leading-relaxed text-ink-soft">
                  {s.label}
                </p>
                <p className="mt-6 text-xs text-ink-subtle">Source: {s.source}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-3xl text-center font-display text-2xl font-medium text-balance text-ink-soft sm:text-3xl"
        >
          Every ring you miss is a customer your{" "}
          <span className="font-display-italic text-coral-600">competitor</span> answers.
        </motion.p>
      </div>
    </section>
  );
}
