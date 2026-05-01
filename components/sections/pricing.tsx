"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  monthly: number;
  setup: number;
  tagline: string;
  blurb: string;
  features: string[];
  highlighted?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Phone",
    monthly: 497,
    setup: 1000,
    tagline: "Just the phone — done right.",
    blurb: "Hellow answers every call, books appointments, and captures leads 24/7.",
    features: [
      "AI receptionist on your business line",
      "Unlimited answered calls",
      "Smart appointment booking",
      "Lead capture with full transcripts",
      "Calendar sync (Google + Outlook)",
      "SMS follow-ups and reminders",
      "Multi-language (EN / ES / PT)",
      "Custom voice + persona",
      "Onboarding & ongoing support",
    ],
  },
  {
    name: "Omnichannel",
    monthly: 997,
    setup: 1000,
    tagline: "Everywhere your customers reach you.",
    blurb:
      "Hellow on phone, your website, Instagram, and Facebook — one brain, every channel.",
    features: [
      "Everything in Phone, plus:",
      "Website chat widget",
      "Instagram DMs",
      "Facebook Messenger",
      "Unified inbox across channels",
      "Conversation handoff to your team",
      "CRM + Zapier integrations",
      "Priority onboarding",
    ],
    highlighted: true,
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
            One-time setup. Flat monthly. No per-call fees, no surprises.
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

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {TIERS.map((t, i) => {
            const price = Math.round(t.monthly * factor);
            const isHighlight = t.highlighted;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={cn(
                  "relative flex flex-col rounded-3xl p-8 shadow-soft sm:p-10",
                  isHighlight
                    ? "bg-ink text-bg shadow-lift ring-1 ring-ink lg:-my-3 lg:scale-[1.02]"
                    : "border border-line bg-bg",
                )}
              >
                {isHighlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral-500 px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-coral">
                    Most popular
                  </span>
                )}

                <div>
                  <h3
                    className={cn(
                      "font-display text-3xl font-semibold tracking-tight",
                      isHighlight ? "text-bg" : "text-ink",
                    )}
                  >
                    {t.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 text-sm font-medium",
                      isHighlight ? "text-coral-300" : "text-coral-600",
                    )}
                  >
                    {t.tagline}
                  </p>
                  <p
                    className={cn(
                      "mt-3 text-[0.95rem] leading-relaxed",
                      isHighlight ? "text-white/70" : "text-ink-muted",
                    )}
                  >
                    {t.blurb}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={cn(
                        "font-display text-6xl font-semibold tracking-tight tabular-nums sm:text-7xl",
                        isHighlight ? "text-bg" : "text-ink",
                      )}
                    >
                      ${price}
                    </span>
                    <span
                      className={cn(
                        "text-base",
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
                    {annual ? "Billed annually · 20% off the monthly rate" : "Billed monthly"}
                  </p>

                  <div
                    className={cn(
                      "mt-5 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm",
                      isHighlight
                        ? "bg-white/[0.07] text-white/85 ring-1 ring-white/10"
                        : "bg-bg-soft text-ink-soft ring-1 ring-line",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold",
                        isHighlight ? "bg-coral-500 text-white" : "bg-coral-100 text-coral-700",
                      )}
                    >
                      +
                    </span>
                    <span>
                      <span className="font-display text-base font-semibold tabular-nums">
                        ${t.setup.toLocaleString()}
                      </span>{" "}
                      one-time setup
                      <span
                        className={cn(
                          "ml-1.5 text-[11px]",
                          isHighlight ? "text-white/55" : "text-ink-subtle",
                        )}
                      >
                        (training, voice, integrations)
                      </span>
                    </span>
                  </div>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
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
                  <a href={PHONE.tel}>
                    <Phone className="h-4 w-4" />
                    Call to test it
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-ink-muted">
          Setup is a one-time fee — we train Hellow on your business, configure your voice and
          integrations, and have you live in days. The monthly is flat, with unlimited calls.
        </p>
      </div>
    </section>
  );
}
