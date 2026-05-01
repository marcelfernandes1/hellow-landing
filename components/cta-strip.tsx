"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE } from "@/lib/contact";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    headlineA: "See it for yourself.",
    headlineB: "Call Hellow.",
    body: "Pick up your phone, dial, and have a real conversation. 60 seconds — and you'll know.",
    cta: "Call to test it live",
  },
  pt: {
    headlineA: "Veja com seus próprios ouvidos.",
    headlineB: "Ligue para a Hellow.",
    body: "Pegue o telefone, disque e tenha uma conversa de verdade. Em 60 segundos você vai entender.",
    cta: "Ligue e teste ao vivo",
  },
} as const satisfies Record<Locale, unknown>;

export function CTAStrip() {
  const locale = useLocale();
  const t = COPY[locale];

  return (
    <section className="relative overflow-hidden bg-coral-500 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent_70%)] blur-3xl" />

      <div className="container relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-display-lg font-medium text-balance">
            {t.headlineA}{" "}
            <span className="font-display-italic">{t.headlineB}</span>
          </h2>
          <p className="max-w-xl text-base text-white/85 sm:text-lg text-pretty">
            {t.body}
          </p>
          <Button
            asChild
            size="xl"
            variant="secondary"
            className="bg-ink text-bg hover:bg-ink-soft"
          >
            <a href={PHONE.tel}>
              <Phone className="h-5 w-5" />
              {t.cta}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
