"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden bg-coral-500 py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(26,26,26,0.25),transparent_70%)] blur-3xl" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-eyebrow font-semibold uppercase text-white/70">
            Test it for yourself
          </p>
          <h2 className="mt-4 font-display text-display-2xl font-medium text-balance">
            Don't take our word for it.{" "}
            <span className="font-display-italic">Call Hellow.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85 text-pretty sm:text-xl">
            Pick up your phone right now and dial the number. Hellow will answer. Try to
            book an appointment, ask anything. This is the real product, live.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="xl"
              variant="secondary"
              className="bg-ink text-bg hover:bg-ink-soft"
            >
              <a href={PHONE.tel}>
                <Phone className="h-5 w-5" />
                Call {PHONE.display}
              </a>
            </Button>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/85">
            <ShieldCheck className="h-4 w-4" />
            Live, unscripted, no signup. Hang up anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
