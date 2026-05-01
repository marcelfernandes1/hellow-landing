"use client";

import { useState } from "react";
import { ArrowRight, BarChart3, Download, FileText } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "Free report",
    titleA: "The 2026 Voice AI",
    titleEm: "Report",
    titleSuffix: ".",
    sub: "38 pages. Hard data on adoption, perception, and ROI from 2025-2026 voice AI deployments — written for owners and operators who want signal, not hype.",
    coverEyebrow: "Hellow Industry Report",
    coverEdition: "2026 Edition · 38 pages",
    coverTitle: "The Voice AI Report",
    coverTagline: "For owners who want signal, not hype.",
    fileTag: "PDF · 4.2MB",
    formTitle: "Send me the report",
    formSub: "Free. No drip campaign. Unsubscribe in one click.",
    name: "Your name",
    email: "you@business.com",
    cta: "Get the report",
    successEyebrow: "Sent",
    successTitle: "Check your inbox.",
    successBody:
      "The PDF is on its way. While you wait, give Hellow a call to see what the report describes — live.",
    insideTitle: "Inside the report",
    tocTitle: "Table of contents",
    highlights: [
      { stat: "97%", label: "of enterprises have adopted voice AI", source: "Mordor Intelligence" },
      { stat: "71%", label: "of callers can't tell modern AI from a human", source: "University of Michigan, 2025" },
      { stat: "60%", label: "reduction in missed calls (up to)", source: "Nextiva" },
      { stat: "50%", label: "of business calls handled by AI by 2027 (projected)", source: "Gartner" },
    ],
    contents: [
      "The state of voice AI in 2026",
      "Why local businesses lose 62% of calls",
      "Caller perception: 71% can't tell AI from human",
      "ROI math: payback windows by industry",
      "The omnichannel shift — phone, web, IG, FB",
      "What 'good' looks like: latency, language, escalation",
      "Buyer's checklist for evaluating voice AI",
      "Looking ahead — what changes in 2027",
    ],
  },
  pt: {
    eyebrow: "Relatório gratuito",
    titleA: "O Relatório 2026 de IA por",
    titleEm: "Voz",
    titleSuffix: ".",
    sub: "38 páginas. Dados duros sobre adoção, percepção e ROI a partir de implantações de IA de voz em 2025-2026 — escrito para donos e operadores que querem sinal, não hype.",
    coverEyebrow: "Relatório Hellow",
    coverEdition: "Edição 2026 · 38 páginas",
    coverTitle: "O Relatório de IA por Voz",
    coverTagline: "Para donos que querem sinal, não hype.",
    fileTag: "PDF · 4.2MB",
    formTitle: "Envie o relatório para mim",
    formSub: "Gratuito. Sem sequência de e-mail. Cancele com um clique.",
    name: "Seu nome",
    email: "voce@empresa.com",
    cta: "Receber o relatório",
    successEyebrow: "Enviado",
    successTitle: "Confira sua caixa de entrada.",
    successBody:
      "O PDF está a caminho. Enquanto espera, ligue para a Hellow e veja, ao vivo, o que o relatório descreve.",
    insideTitle: "Dentro do relatório",
    tocTitle: "Sumário",
    highlights: [
      { stat: "97%", label: "das empresas já adotaram IA de voz", source: "Mordor Intelligence" },
      { stat: "71%", label: "dos clientes não distinguem IA moderna de humano", source: "University of Michigan, 2025" },
      { stat: "60%", label: "de redução em ligações perdidas (até)", source: "Nextiva" },
      { stat: "50%", label: "das ligações empresariais com IA até 2027 (projetado)", source: "Gartner" },
    ],
    contents: [
      "O estado da IA de voz em 2026",
      "Por que negócios locais perdem 62% das ligações",
      "Percepção do cliente: 71% não distinguem IA de humano",
      "Conta de ROI: janelas de payback por setor",
      "A virada omnichannel — telefone, web, IG, FB",
      "O que é 'bom': latência, idioma, escalonamento",
      "Checklist do comprador para avaliar IA de voz",
      "Olhando à frente — o que muda em 2027",
    ],
  },
} as const satisfies Record<Locale, unknown>;

export function ReportBody({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titleA}{" "}
            <span className="font-display-italic text-coral-600">{t.titleEm}</span>
            {t.titleSuffix}
          </>
        }
        subtitle={t.sub}
      />

      <section className="bg-bg py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-coral-500 to-coral-700 p-8 text-white shadow-lift">
                  <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.18] mix-blend-overlay" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <p className="text-eyebrow font-semibold uppercase text-white/75">
                        {t.coverEyebrow}
                      </p>
                      <p className="mt-3 text-sm text-white/70">{t.coverEdition}</p>
                    </div>
                    <div>
                      <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-tight">
                        {t.coverTitle}
                      </h2>
                      <p className="mt-3 max-w-[18ch] font-display-italic text-lg text-white/85">
                        {t.coverTagline}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 -top-4 rotate-3 rounded-2xl bg-bg p-4 shadow-lift ring-1 ring-line">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-coral-600" />
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-ink">
                      {t.fileTag}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-line bg-bg-soft p-7">
                {submitted ? (
                  <div>
                    <p className="text-eyebrow font-semibold uppercase text-coral-600">
                      {t.successEyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
                      {t.successTitle}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-muted">
                      {t.successBody}
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-3"
                  >
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                      {t.formTitle}
                    </h3>
                    <p className="text-sm text-ink-muted">{t.formSub}</p>
                    <input
                      type="text"
                      required
                      placeholder={t.name}
                      className="w-full rounded-2xl border border-line bg-bg px-4 py-3 text-[0.95rem] placeholder:text-ink-subtle focus:border-coral-400 focus:outline-none focus:ring-2 focus:ring-coral-400/30"
                      aria-label={t.name}
                    />
                    <input
                      type="email"
                      required
                      placeholder={t.email}
                      className="w-full rounded-2xl border border-line bg-bg px-4 py-3 text-[0.95rem] placeholder:text-ink-subtle focus:border-coral-400 focus:outline-none focus:ring-2 focus:ring-coral-400/30"
                      aria-label={t.email}
                    />
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-5 py-3 font-medium text-white shadow-coral transition-colors hover:bg-coral-600"
                    >
                      <Download className="h-4 w-4" />
                      {t.cta}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-coral-600" />
                <h2 className="font-display text-display-md font-medium tracking-tight text-ink">
                  {t.insideTitle}
                </h2>
              </div>

              <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line">
                {t.highlights.map((h) => (
                  <li key={h.label} className="bg-bg p-6 sm:p-7">
                    <div className="font-display text-4xl font-semibold leading-none tracking-tight text-ink">
                      {h.stat}
                    </div>
                    <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-ink-soft">
                      {h.label}
                    </p>
                    <p className="mt-3 text-[11px] uppercase tracking-wider text-ink-subtle">
                      {h.source}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {t.tocTitle}
                </h3>
                <ol className="mt-4 space-y-2">
                  {t.contents.map((c, i) => (
                    <li
                      key={c}
                      className="flex items-center gap-4 rounded-2xl border border-line bg-bg-soft px-5 py-3 text-[0.95rem] text-ink-soft"
                    >
                      <span className="font-display text-sm font-semibold tabular-nums text-coral-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {c}
                      <ArrowRight className="ml-auto h-3.5 w-3.5 text-ink-subtle" />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
