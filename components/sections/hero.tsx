"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/phone-mockup";
import { PHONE } from "@/lib/contact";
import { useLocale } from "@/lib/i18n/context";
import { localePath } from "@/lib/i18n/utils";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    badge: "Now answering for 1,200+ local businesses",
    headlineA: "Never miss another customer call.",
    headlineB: "Ever.",
    sub: (
      <>
        Hellow is the AI receptionist that answers every call, books appointments,
        and captures leads <span className="text-ink">24/7</span> — so you can
        focus on running your business.
      </>
    ),
    primary: "Call to hear it live",
    secondary: "See how it works",
    primaryAria: "Call Hellow to hear it live",
    line: "Hellow will pick up. Try anything — book an appointment, ask a question. It's a real demo.",
    rating: "4.9/5",
    trust: "Join thousands of local businesses using AI to answer every call",
  },
  pt: {
    badge: "Atendendo mais de 1.200 negócios locais",
    headlineA: "Nunca mais perca uma ligação de cliente.",
    headlineB: "Nunca.",
    sub: (
      <>
        A Hellow é a recepcionista de IA que atende todas as ligações, agenda
        compromissos e captura leads <span className="text-ink">24/7</span> —
        para você focar no que importa: tocar o seu negócio.
      </>
    ),
    primary: "Ligue e ouça ao vivo",
    secondary: "Veja como funciona",
    primaryAria: "Ligue para a Hellow e ouça ao vivo",
    line: "A Hellow vai atender. Teste o que quiser — marque um horário, faça uma pergunta. É uma demo real.",
    rating: "4,9/5",
    trust: "Junte-se a milhares de negócios locais que usam IA para atender todas as ligações",
  },
} as const satisfies Record<Locale, unknown>;

export function Hero() {
  const locale = useLocale();
  const t = COPY[locale];

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-bg-soft pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-peachShine" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,107,91,0.25),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-[0.07]" />

      <div className="container">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/80 px-3 py-1.5 text-xs font-medium tracking-wide text-ink-soft backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral-500" />
              </span>
              {t.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-display-2xl font-medium text-balance text-ink"
            >
              {t.headlineA}{" "}
              <span className="font-display-italic text-coral-600">{t.headlineB}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty"
            >
              {t.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="xl">
                <a href={PHONE.tel} aria-label={t.primaryAria}>
                  <Phone className="h-5 w-5" />
                  {t.primary}
                </a>
              </Button>
              <Button asChild variant="ghost" size="xl">
                <Link href={localePath(locale, "#how-it-works")}>
                  {t.secondary} <ArrowDown className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-3 text-sm text-ink-muted"
            >
              {t.line}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex items-center gap-4 text-sm text-ink-muted"
            >
              <div className="flex -space-x-2">
                {[
                  "from-amber-300 to-amber-500",
                  "from-rose-300 to-rose-500",
                  "from-emerald-300 to-emerald-500",
                  "from-sky-300 to-sky-500",
                ].map((g, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full bg-gradient-to-br ${g} ring-2 ring-bg-soft`}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="flex items-center gap-1 text-ink">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-coral-500 text-coral-500" />
                  ))}
                  <span className="ml-1 font-semibold">{t.rating}</span>
                </span>
                <span className="text-xs">{t.trust}</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
