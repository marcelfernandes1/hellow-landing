"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "Real outcomes",
    headline: "What businesses see after switching.",
    footnote: "Aggregated industry data from 2025–2026 voice AI deployments.",
    items: [
      { value: "90–95%", label: "of calls resolved without human help" },
      { value: "< 5 sec", label: "response time, down from hours" },
      { value: "Up to 50%", label: "reduction in no-shows (dental practices)" },
      { value: "< 30 days", label: "to positive ROI for most businesses" },
    ],
  },
  pt: {
    eyebrow: "Resultados reais",
    headline: "O que as empresas veem depois de migrar.",
    footnote: "Dados agregados do setor, implantações de IA de voz 2025–2026.",
    items: [
      { value: "90–95%", label: "das ligações resolvidas sem ajuda humana" },
      { value: "< 5 seg", label: "de tempo de resposta — antes era em horas" },
      { value: "Até 50%", label: "de redução em faltas (clínicas odontológicas)" },
      { value: "< 30 dias", label: "para ROI positivo na maioria dos negócios" },
    ],
  },
} as const satisfies Record<Locale, unknown>;

export function Results() {
  const locale = useLocale();
  const t = COPY[locale];

  return (
    <section className="relative bg-bg py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow font-semibold uppercase text-coral-600">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
            {t.headline}
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((r, i) => (
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
              <p className="mt-3 text-sm leading-relaxed text-ink-muted text-pretty">
                {r.label}
              </p>
            </motion.li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-ink-subtle">{t.footnote}</p>
      </div>
    </section>
  );
}
