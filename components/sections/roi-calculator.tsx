"use client";

import { useEffect, useMemo, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Phone, Sparkles, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PHONE } from "@/lib/contact";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";
import { formatNumber } from "@/lib/utils";

const CLOSE_RATE = 0.3;
const RECOVERY_RATE = 0.75;
const HELLOW_MONTHLY = 397;

const COPY = {
  en: {
    eyebrow: "ROI calculator",
    headlineA: "How much are missed calls",
    headlineEm: "costing you",
    headlineSuffix: "?",
    sub: "Two sliders. One eye-opening number.",
    s1: {
      label: "What's your average customer worth?",
      help: "Lifetime value or average job/transaction",
      aria: "Average customer value",
    },
    s2: {
      label: "How many calls go unanswered each week?",
      help: "Most local businesses miss 10–20 per week",
      aria: "Missed calls per week",
    },
    losingLabel: "You're losing approximately",
    perMonth: "per month",
    perYear: "per year",
    callsMissed: "Calls missed/yr",
    lostPerCall: "Lost / missed call",
    recoverLabel: "With Hellow, you could recover",
    roiLineA: "Roughly",
    roiLineB: "return on your subscription.",
    cta: "Call to test it live",
    fine: "Estimates based on industry benchmarks: 30% caller-to-customer conversion, ~75% AI recovery rate. Actual results vary.",
    currencyPrefix: "$",
  },
  pt: {
    eyebrow: "Calculadora de ROI",
    headlineA: "Quanto suas ligações perdidas",
    headlineEm: "estão custando",
    headlineSuffix: "?",
    sub: "Dois sliders. Um número que abre os olhos.",
    s1: {
      label: "Quanto vale, em média, um cliente seu?",
      help: "Valor vitalício ou ticket médio por trabalho/venda",
      aria: "Valor médio do cliente",
    },
    s2: {
      label: "Quantas ligações ficam sem resposta por semana?",
      help: "A maioria dos negócios locais perde de 10 a 20 por semana",
      aria: "Ligações perdidas por semana",
    },
    losingLabel: "Você está perdendo, em média",
    perMonth: "por mês",
    perYear: "por ano",
    callsMissed: "Ligações perdidas/ano",
    lostPerCall: "Perda por ligação",
    recoverLabel: "Com a Hellow, você pode recuperar",
    roiLineA: "Cerca de",
    roiLineB: "de retorno sobre a assinatura.",
    cta: "Ligue e teste ao vivo",
    fine: "Estimativas com base em benchmarks do setor: 30% de conversão de chamadas em clientes, ~75% de taxa de recuperação por IA. Resultados reais variam.",
    currencyPrefix: "US$ ",
  },
} as const satisfies Record<Locale, unknown>;

function useSpringNumber(target: number, duration = 0.9) {
  const mv = useMotionValue(0);
  useEffect(() => {
    const controls = animate(mv, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [target, duration, mv]);
  return mv;
}

function fmtMoney(value: number, prefix: string) {
  return `${prefix}${formatNumber(value)}`;
}

export function ROICalculator() {
  const locale = useLocale();
  const t = COPY[locale];

  const [avgValue, setAvgValue] = useState(500);
  const [missedPerWeek, setMissedPerWeek] = useState(10);

  const calc = useMemo(() => {
    const missedPerMonth = missedPerWeek * 4.33;
    const missedPerYear = missedPerWeek * 52;
    const lostPerCall = avgValue * CLOSE_RATE;
    const monthlyLoss = missedPerMonth * lostPerCall;
    const annualLoss = monthlyLoss * 12;
    const recovered = monthlyLoss * RECOVERY_RATE;
    const roi = Math.min(Math.round(recovered / HELLOW_MONTHLY), 100);
    return { missedPerYear, lostPerCall, monthlyLoss, annualLoss, recovered, roi };
  }, [avgValue, missedPerWeek]);

  const monthlyLossMV = useSpringNumber(calc.monthlyLoss);
  const annualLossMV = useSpringNumber(calc.annualLoss);
  const recoveredMV = useSpringNumber(calc.recovered);
  const roiMV = useSpringNumber(calc.roi);

  const monthlyLossDisplay = useTransform(monthlyLossMV, (v) =>
    fmtMoney(v, t.currencyPrefix),
  );
  const annualLossDisplay = useTransform(annualLossMV, (v) =>
    fmtMoney(v, t.currencyPrefix),
  );
  const recoveredDisplay = useTransform(recoveredMV, (v) =>
    fmtMoney(v, t.currencyPrefix),
  );
  const roiDisplay = useTransform(roiMV, (v) =>
    v >= 100 ? "100+×" : `${Math.round(v)}×`,
  );

  return (
    <section
      id="roi"
      className="relative overflow-hidden bg-bg-soft py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(255,107,91,0.18),transparent_70%)] blur-3xl" />

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow font-semibold uppercase text-coral-600">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
            {t.headlineA}{" "}
            <span className="font-display-italic text-coral-600">
              {t.headlineEm}
            </span>
            {t.headlineSuffix}
          </h2>
          <p className="mt-5 text-lg text-ink-muted">{t.sub}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-bg p-7 shadow-soft sm:p-9">
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label
                    htmlFor="avg-value"
                    className="font-display text-lg font-semibold text-ink"
                  >
                    {t.s1.label}
                  </label>
                  <motion.span
                    key={avgValue}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="font-display text-3xl font-semibold tabular-nums text-coral-600"
                  >
                    {fmtMoney(avgValue, t.currencyPrefix)}
                  </motion.span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">{t.s1.help}</p>
                <Slider
                  id="avg-value"
                  min={100}
                  max={3000}
                  step={50}
                  value={[avgValue]}
                  onValueChange={(v) => setAvgValue(v[0]!)}
                  className="mt-6"
                  aria-label={t.s1.aria}
                />
                <div className="mt-2 flex justify-between text-xs text-ink-subtle">
                  <span>{t.currencyPrefix}100</span>
                  <span>{t.currencyPrefix}3,000</span>
                </div>
              </div>

              <div className="my-9 h-px bg-line" />

              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label
                    htmlFor="missed"
                    className="font-display text-lg font-semibold text-ink"
                  >
                    {t.s2.label}
                  </label>
                  <motion.span
                    key={missedPerWeek}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="font-display text-3xl font-semibold tabular-nums text-coral-600"
                  >
                    {missedPerWeek}
                  </motion.span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">{t.s2.help}</p>
                <Slider
                  id="missed"
                  min={1}
                  max={50}
                  step={1}
                  value={[missedPerWeek]}
                  onValueChange={(v) => setMissedPerWeek(v[0]!)}
                  className="mt-6"
                  aria-label={t.s2.aria}
                />
                <div className="mt-2 flex justify-between text-xs text-ink-subtle">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>
            </div>

            <p className="mt-5 px-1 text-xs leading-relaxed text-ink-subtle">
              {t.fine}
            </p>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7 }}
              className="relative h-full overflow-hidden rounded-3xl bg-ink p-8 text-bg shadow-lift sm:p-9"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(255,107,91,0.4),transparent_70%)] blur-2xl" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-coral-300">
                {t.losingLabel}
              </p>
              <motion.div className="mt-3 font-display text-[3rem] font-semibold leading-none tracking-tight tabular-nums text-bg sm:text-[4rem]">
                {monthlyLossDisplay}
              </motion.div>
              <p className="mt-1 text-sm text-white/60">{t.perMonth}</p>

              <p className="mt-3 text-base font-medium text-white/85 tabular-nums">
                <motion.span>{annualLossDisplay}</motion.span>{" "}
                <span className="text-white/50">{t.perYear}</span>
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    {t.callsMissed}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-bg">
                    {formatNumber(calc.missedPerYear)}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    {t.lostPerCall}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-bg">
                    {fmtMoney(calc.lostPerCall, t.currencyPrefix)}
                  </p>
                </div>
              </div>

              <div className="my-7 h-px bg-white/10" />

              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-coral-300">
                <Sparkles className="h-3 w-3" /> {t.recoverLabel}
              </p>
              <motion.div className="mt-3 font-display text-[2.5rem] font-semibold leading-none tracking-tight tabular-nums text-coral-300 sm:text-[3.25rem]">
                {recoveredDisplay}
              </motion.div>
              <p className="mt-1 text-sm text-white/60">{t.perMonth}</p>

              <p className="mt-4 flex items-center gap-2 text-sm text-white/85">
                <TrendingUp className="h-4 w-4 text-coral-300" />
                {t.roiLineA}{" "}
                <motion.span className="font-display text-base font-semibold tabular-nums text-bg">
                  {roiDisplay}
                </motion.span>{" "}
                {t.roiLineB}
              </p>

              <Button asChild size="lg" className="mt-7 w-full">
                <a href={PHONE.tel}>
                  <Phone className="h-4 w-4" />
                  {t.cta}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
