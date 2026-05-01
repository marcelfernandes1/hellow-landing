"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2, LineChart, Trophy } from "lucide-react";

const BADGES = [
  { icon: Trophy, label: "2× Guinness World Record Holder" },
  { icon: Globe2, label: "70,000+ students in 193 countries" },
  { icon: LineChart, label: "Built and scaled multiple 8-figure businesses" },
];

export function Founder() {
  return (
    <section className="relative overflow-hidden bg-bg-warm py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grain bg-[size:6px_6px] opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,107,91,0.18),transparent_70%)] blur-3xl" />

      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Headshot */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[420px]"
            >
              {/* Coral frame */}
              <div className="absolute -inset-3 -z-10 rounded-[36px] bg-coral-200/40" />
              <div className="absolute inset-0 overflow-hidden rounded-[32px] bg-coral-100 shadow-lift ring-1 ring-coral-200">
                <Image
                  src="/ceo-headshot.png"
                  alt="Marcel Fernandes, founder of Hellow"
                  fill
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover"
                  priority={false}
                />
              </div>
              {/* Floating quote tag */}
              <div className="absolute -bottom-5 -right-3 max-w-[220px] rotate-2 rounded-2xl bg-bg p-4 shadow-lift ring-1 ring-line">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-coral-600">
                  Founder
                </p>
                <p className="mt-1 font-display text-base font-semibold text-ink">
                  Marcel Fernandes
                </p>
                <p className="text-[11px] text-ink-muted">CEO, Hellow</p>
              </div>
            </motion.div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7">
            <p className="text-eyebrow font-semibold uppercase text-coral-600">From the founder</p>
            <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
              Why I built Hellow.
            </h2>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {BADGES.map((b) => (
                <li
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border border-coral-200 bg-bg/80 px-4 py-2 text-sm font-medium text-ink-soft backdrop-blur-sm"
                >
                  <b.icon className="h-4 w-4 text-coral-600" strokeWidth={1.8} />
                  {b.label}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft text-pretty">
              <p>
                Hi, I'm <span className="text-ink">Marcel Fernandes</span>. Over the last decade I've
                built businesses that earned two Guinness World Records and trained over{" "}
                <span className="text-ink">70,000 entrepreneurs</span> across 193 countries.
                Through that journey, one pattern broke my heart: incredible local business owners
                losing thousands every month to a problem so simple it sounds ridiculous —{" "}
                <span className="font-display-italic text-coral-700">
                  they couldn't answer the phone fast enough.
                </span>
              </p>
              <p>
                Hellow is my answer. Every call answered. Every lead captured. Every appointment
                booked. That's the promise.
              </p>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7 }}
              className="mt-10 border-l-2 border-coral-500 pl-6"
            >
              <p className="font-display text-2xl font-medium leading-snug text-ink text-balance sm:text-3xl">
                "The phone is the front door of every local business. We make sure it's never
                locked."
              </p>
              <footer className="mt-3 text-sm font-medium uppercase tracking-wider text-ink-muted">
                — Marcel Fernandes
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
