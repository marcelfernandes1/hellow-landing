"use client";

import { useEffect, useMemo, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Phone, Sparkles, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PHONE } from "@/lib/contact";
import { formatCurrency, formatNumber } from "@/lib/utils";

const CLOSE_RATE = 0.3;
const RECOVERY_RATE = 0.75;
const HELLOW_MONTHLY = 397;

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

export function ROICalculator() {
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
    return {
      missedPerYear,
      lostPerCall,
      monthlyLoss,
      annualLoss,
      recovered,
      roi,
    };
  }, [avgValue, missedPerWeek]);

  const monthlyLossMV = useSpringNumber(calc.monthlyLoss);
  const annualLossMV = useSpringNumber(calc.annualLoss);
  const recoveredMV = useSpringNumber(calc.recovered);
  const roiMV = useSpringNumber(calc.roi);

  const monthlyLossDisplay = useTransform(monthlyLossMV, (v) => formatCurrency(v));
  const annualLossDisplay = useTransform(annualLossMV, (v) => formatCurrency(v));
  const recoveredDisplay = useTransform(recoveredMV, (v) => formatCurrency(v));
  const roiDisplay = useTransform(roiMV, (v) =>
    v >= 100 ? "100+×" : `${Math.round(v)}×`,
  );

  return (
    <section className="relative overflow-hidden bg-bg-soft py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(255,107,91,0.18),transparent_70%)] blur-3xl" />

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow font-semibold uppercase text-coral-600">ROI calculator</p>
          <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
            How much are missed calls{" "}
            <span className="font-display-italic text-coral-600">costing you</span>?
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            Two sliders. One eye-opening number.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Inputs */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-bg p-7 shadow-soft sm:p-9">
              {/* Slider 1: avg customer value */}
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label
                    htmlFor="avg-value"
                    className="font-display text-lg font-semibold text-ink"
                  >
                    What's your average customer worth?
                  </label>
                  <motion.span
                    key={avgValue}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="font-display text-3xl font-semibold tabular-nums text-coral-600"
                  >
                    {formatCurrency(avgValue)}
                  </motion.span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">
                  Lifetime value or average job/transaction
                </p>
                <Slider
                  id="avg-value"
                  min={100}
                  max={3000}
                  step={50}
                  value={[avgValue]}
                  onValueChange={(v) => setAvgValue(v[0]!)}
                  className="mt-6"
                  aria-label="Average customer value"
                />
                <div className="mt-2 flex justify-between text-xs text-ink-subtle">
                  <span>$100</span>
                  <span>$3,000</span>
                </div>
              </div>

              <div className="my-9 h-px bg-line" />

              {/* Slider 2: missed per week */}
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label
                    htmlFor="missed"
                    className="font-display text-lg font-semibold text-ink"
                  >
                    How many calls go unanswered each week?
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
                <p className="mt-1 text-sm text-ink-muted">
                  Most local businesses miss 10–20 per week
                </p>
                <Slider
                  id="missed"
                  min={1}
                  max={50}
                  step={1}
                  value={[missedPerWeek]}
                  onValueChange={(v) => setMissedPerWeek(v[0]!)}
                  className="mt-6"
                  aria-label="Missed calls per week"
                />
                <div className="mt-2 flex justify-between text-xs text-ink-subtle">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>
            </div>

            <p className="mt-5 px-1 text-xs leading-relaxed text-ink-subtle">
              Estimates based on industry benchmarks: 30% caller-to-customer conversion, ~75%
              AI recovery rate. Actual results vary.
            </p>
          </div>

          {/* Results */}
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
                You're losing approximately
              </p>
              <motion.div className="mt-3 font-display text-[3rem] font-semibold leading-none tracking-tight tabular-nums text-bg sm:text-[4rem]">
                {monthlyLossDisplay}
              </motion.div>
              <p className="mt-1 text-sm text-white/60">per month</p>

              <p className="mt-3 text-base font-medium text-white/85 tabular-nums">
                <motion.span>{annualLossDisplay}</motion.span>{" "}
                <span className="text-white/50">per year</span>
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    Calls missed/yr
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-bg">
                    {formatNumber(calc.missedPerYear)}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    Lost / missed call
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-bg">
                    {formatCurrency(calc.lostPerCall)}
                  </p>
                </div>
              </div>

              <div className="my-7 h-px bg-white/10" />

              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-coral-300">
                <Sparkles className="h-3 w-3" /> With Hellow, you could recover
              </p>
              <motion.div className="mt-3 font-display text-[2.5rem] font-semibold leading-none tracking-tight tabular-nums text-coral-300 sm:text-[3.25rem]">
                {recoveredDisplay}
              </motion.div>
              <p className="mt-1 text-sm text-white/60">per month</p>

              <p className="mt-4 flex items-center gap-2 text-sm text-white/85">
                <TrendingUp className="h-4 w-4 text-coral-300" />
                Roughly{" "}
                <motion.span className="font-display text-base font-semibold tabular-nums text-bg">
                  {roiDisplay}
                </motion.span>{" "}
                return on your subscription.
              </p>

              <Button asChild size="lg" className="mt-7 w-full">
                <a href={PHONE.tel}>
                  <Phone className="h-4 w-4" />
                  Call {PHONE.display} to test it
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
