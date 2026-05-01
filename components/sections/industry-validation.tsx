"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";

const STATS = [
  { value: 97, suffix: "%", label: "of enterprises have adopted voice AI", source: "Mordor Intelligence" },
  { value: 60, suffix: "%", label: "reduction in missed calls (up to)", source: "Nextiva" },
  { value: 5, suffix: "x", label: "higher conversion vs. web forms (3–5×)", source: "Industry research" },
  { value: 71, suffix: "%", label: "of callers can't tell AI from a human", source: "University of Michigan, 2025" },
];

const INDUSTRIES = [
  "Dental",
  "HVAC",
  "Legal",
  "Roofing",
  "Salons",
  "Real Estate",
  "Medical",
  "Auto Repair",
  "Plumbing",
  "Veterinary",
  "Insurance",
  "Cleaning",
];

export function IndustryValidation() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-bg lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,107,91,0.25),transparent_70%)] blur-3xl" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-eyebrow font-semibold uppercase text-coral-300">Industry validation</p>
          <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-bg">
            AI receptionists are the{" "}
            <span className="font-display-italic text-coral-400">new standard</span>.
          </h2>
          <p className="mt-5 text-lg text-white/70 text-pretty">
            The world's fastest-growing businesses already let AI answer the phone.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="bg-ink p-7 sm:p-9"
            >
              <div className="font-display text-display-md font-semibold leading-none text-bg">
                <AnimatedCounter to={s.value} suffix={s.suffix} duration={2.2} />
              </div>
              <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-white/75">{s.label}</p>
              <p className="mt-4 text-[11px] uppercase tracking-wider text-white/40">
                {s.source}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-3xl text-center text-base text-white/70 sm:text-lg text-pretty"
        >
          By 2027, <span className="text-bg">Gartner</span> projects 50% of business phone calls
          will be handled by AI. The early adopters are already winning.
        </motion.p>

        {/* Industry marquee */}
        <div className="relative mt-16 mask-fade-x">
          <div className="flex w-max animate-marquee gap-3">
            {[...INDUSTRIES, ...INDUSTRIES].map((label, i) => (
              <span
                key={`${label}-${i}`}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium tracking-wide text-white/80"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
