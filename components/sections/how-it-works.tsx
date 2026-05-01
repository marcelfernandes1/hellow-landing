"use client";

import { motion } from "framer-motion";
import { Brain, CalendarCheck, PhoneIncoming } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "How it works",
    headlineA: "Three steps to a phone that",
    headlineEm: "never sleeps",
    headlineSuffix: ".",
    steps: [
      {
        title: "Connect your number",
        body: "Port or forward your existing line in 5 minutes. No hardware. No new number.",
        eta: "~5 minutes",
      },
      {
        title: "Train Hellow on your business",
        body: "We learn your hours, services, FAQs, and booking style — so it answers the way you would.",
        eta: "~1 hour",
      },
      {
        title: "Watch your calendar fill",
        body: "Every call answered. Every lead captured. Every appointment booked while you work.",
        eta: "From day one",
      },
    ],
  },
  pt: {
    eyebrow: "Como funciona",
    headlineA: "Três passos para um telefone que",
    headlineEm: "nunca dorme",
    headlineSuffix: ".",
    steps: [
      {
        title: "Conecte seu número",
        body: "Porte ou redirecione sua linha em 5 minutos. Sem hardware. Sem trocar de número.",
        eta: "~5 minutos",
      },
      {
        title: "Treine a Hellow no seu negócio",
        body: "Aprendemos seus horários, serviços, perguntas frequentes e jeito de agendar — para ela atender como você atenderia.",
        eta: "~1 hora",
      },
      {
        title: "Veja sua agenda lotar",
        body: "Toda ligação atendida. Todo lead capturado. Todo agendamento feito enquanto você trabalha.",
        eta: "Desde o primeiro dia",
      },
    ],
  },
} as const satisfies Record<Locale, unknown>;

const ICONS = [PhoneIncoming, Brain, CalendarCheck];

export function HowItWorks() {
  const locale = useLocale();
  const t = COPY[locale];

  return (
    <section id="how-it-works" className="relative bg-bg py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow font-semibold uppercase text-coral-600">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
            {t.headlineA}{" "}
            <span className="font-display-italic text-coral-600">{t.headlineEm}</span>
            {t.headlineSuffix}
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-12 hidden h-[2px] w-[80%] -translate-x-1/2 lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(255,107,91,0.4) 0 6px, transparent 6px 14px)",
            }}
          />

          <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
            {t.steps.map((s, i) => {
              const Icon = ICONS[i]!;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="relative flex flex-col items-start"
                >
                  <div className="relative">
                    <div className="grid h-24 w-24 place-items-center rounded-3xl border border-line bg-bg-soft text-coral-600 shadow-soft">
                      <Icon className="h-9 w-9" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-coral-500 text-xs font-semibold text-white shadow-coral">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-ink-muted text-pretty">
                    {s.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                    <span className="h-1 w-1 rounded-full bg-coral-500" />
                    {s.eta}
                  </span>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
