"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const RESULTS = [
  { value: "90–95%", label: "of calls resolved without human help" },
  { value: "< 5 sec", label: "response time, down from hours" },
  { value: "Up to 50%", label: "reduction in no-shows (dental practices)" },
  { value: "< 30 days", label: "to positive ROI for most businesses" },
];

export function Results() {
  return (
    <section className="relative bg-bg py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow font-semibold uppercase text-coral-600">Real outcomes</p>
          <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
            What businesses see after switching.
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((r, i) => (
            <motion.li
              key={r.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="rounded-3xl border border-line bg-bg-soft p-7"
            >
              <CheckCircle2 className="h-6 w-6 text-coral-500" />
              <div className="mt-5 font-display text-3xl font-semibold leading-none tracking-tight text-ink sm:text-4xl">
                {r.value}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted text-pretty">{r.label}</p>
            </motion.li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-ink-subtle">
          Aggregated industry data from 2025–2026 voice AI deployments.
        </p>
      </div>
    </section>
  );
}
