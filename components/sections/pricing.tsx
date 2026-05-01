"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  monthly: number;
  blurb: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Starter",
    monthly: 197,
    blurb: "For solo operators and brand-new shops.",
    features: [
      "Up to 200 answered calls / mo",
      "AI booking + lead capture",
      "Google Calendar sync",
      "SMS confirmations",
      "Email & chat support",
    ],
    cta: "Start free trial",
  },
  {
    name: "Growth",
    monthly: 397,
    blurb: "For local businesses ready to scale.",
    features: [
      "Up to 1,000 answered calls / mo",
      "Everything in Starter, plus:",
      "Outlook + CRM integrations",
      "Multi-language (EN / ES / PT)",
      "Custom voice + persona",
      "Priority onboarding",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Scale",
    monthly: 797,
    blurb: "For multi-location and high-volume teams.",
    features: [
      "Unlimited answered calls",
      "Everything in Growth, plus:",
      "Multi-location routing",
      "Custom integrations & webhooks",
      "Dedicated success manager",
      "99.95% uptime SLA",
    ],
    cta: "Talk to sales",
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  const factor = annual ? 0.8 : 1;

  return (
    <section id="pricing" className="relative bg-bg py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow font-semibold uppercase text-coral-600">Pricing</p>
          <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
            Pricing that{" "}
            <span className="font-display-italic text-coral-600">pays for itself</span> in week one.
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            Every plan includes a 14-day free trial. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-line bg-bg-soft p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                !annual ? "bg-ink text-bg shadow-sm" : "text-ink-muted hover:text-ink",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                annual ? "bg-ink text-bg shadow-sm" : "text-ink-muted hover:text-ink",
              )}
            >
              Annual
              <span
                className={cn(
                  "ml-2 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide",
                  annual ? "bg-coral-500 text-white" : "bg-coral-100 text-coral-700",
                )}
              >
                –20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {TIERS.map((t, i) => {
            const price = Math.round(t.monthly * factor);
            const isHighlight = t.highlighted;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className={cn(
                  "relative flex flex-col rounded-3xl p-8 shadow-soft sm:p-10",
                  isHighlight
                    ? "bg-ink text-bg shadow-lift ring-1 ring-ink lg:-my-3 lg:scale-[1.03]"
                    : "border border-line bg-bg",
                )}
              >
                {isHighlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral-500 px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-coral">
                    Most popular
                  </span>
                )}

                <h3
                  className={cn(
                    "font-display text-2xl font-semibold tracking-tight",
                    isHighlight ? "text-bg" : "text-ink",
                  )}
                >
                  {t.name}
                </h3>
                <p className={cn("mt-2 text-sm", isHighlight ? "text-white/65" : "text-ink-muted")}>
                  {t.blurb}
                </p>

                <div className="mt-7 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "font-display text-5xl font-semibold tracking-tight tabular-nums sm:text-6xl",
                      isHighlight ? "text-bg" : "text-ink",
                    )}
                  >
                    ${price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      isHighlight ? "text-white/60" : "text-ink-muted",
                    )}
                  >
                    /mo
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-1 text-xs",
                    isHighlight ? "text-white/55" : "text-ink-subtle",
                  )}
                >
                  {annual ? "Billed annually" : "Billed monthly"} · 14-day free trial
                </p>

                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "flex items-start gap-3 text-[0.95rem]",
                        isHighlight ? "text-white/85" : "text-ink-soft",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          isHighlight
                            ? "bg-coral-500 text-white"
                            : "bg-coral-100 text-coral-600",
                        )}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={isHighlight ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  <Link href="#demo">{t.cta}</Link>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
