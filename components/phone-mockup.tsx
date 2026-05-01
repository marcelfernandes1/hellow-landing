"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Calendar, Mic, Phone, PhoneOff, Sparkles } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";

type Line = { who: "caller" | "ai"; text: string };

const SCRIPTS: Record<Locale, Line[]> = {
  en: [
    { who: "caller", text: "Hi, I'm trying to book a cleaning for next week." },
    { who: "ai", text: "Hi! I can help with that. Tuesday 2pm works — should I lock it in?" },
    { who: "caller", text: "That works. My name is Sarah." },
    { who: "ai", text: "All set, Sarah. You'll get a confirmation text in a minute." },
  ],
  pt: [
    { who: "caller", text: "Oi, queria marcar uma limpeza para a semana que vem." },
    { who: "ai", text: "Oi! Posso ajudar. Terça às 14h dá certo — quer que eu confirme?" },
    { who: "caller", text: "Pode confirmar. Meu nome é Sarah." },
    { who: "ai", text: "Tudo pronto, Sarah. Em instantes você recebe a confirmação por SMS." },
  ],
};

const LABELS: Record<
  Locale,
  {
    live: string;
    duration: string;
    callerNote: string;
    booked: string;
    floatBookedTitle: string;
    floatBookedSub: string;
    floatCalls: string;
    floatCallsLabel: string;
  }
> = {
  en: {
    live: "Live Call",
    duration: "00:42",
    callerNote: "+1 (415) 555 · New caller",
    booked: "Appointment booked",
    floatBookedTitle: "Tue · 2:00 PM",
    floatBookedSub: "Cleaning · Sarah M.",
    floatCalls: "847",
    floatCallsLabel: "calls answered this week",
  },
  pt: {
    live: "Ligação ao vivo",
    duration: "00:42",
    callerNote: "+55 (11) 9 9555 · Novo contato",
    booked: "Agendamento confirmado",
    floatBookedTitle: "Ter · 14:00",
    floatBookedSub: "Limpeza · Sarah M.",
    floatCalls: "847",
    floatCallsLabel: "ligações atendidas esta semana",
  },
};

export function PhoneMockup() {
  const locale = useLocale();
  const SCRIPT = SCRIPTS[locale];
  const L = LABELS[locale];

  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-15% 0px" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= SCRIPT.length) clearInterval(interval);
    }, 1100);
    return () => clearInterval(interval);
  }, [inView, SCRIPT.length]);

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-[360px]">
      <div className="pointer-events-none absolute -inset-16 -z-10 rounded-[60px] bg-[radial-gradient(closest-side,rgba(255,107,91,0.18),transparent_70%)] blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={inView ? { opacity: 1, y: 0, rotate: -2 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[9/19] w-full rounded-[44px] bg-gradient-to-b from-[#2a2522] to-[#0e0c0b] p-[10px] shadow-[0_50px_100px_-30px_rgba(26,26,26,0.5),0_30px_60px_-30px_rgba(255,107,91,0.4)]"
        style={{ transformOrigin: "center center" }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-bg-soft">
          <div className="absolute left-1/2 top-2 z-20 h-[26px] w-[110px] -translate-x-1/2 rounded-full bg-[#0e0c0b]" />

          <div className="flex items-center justify-between px-7 pt-3 text-[10px] font-medium text-ink-soft">
            <span>9:41</span>
            <span className="ml-[80px] flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-soft" />
              <span className="h-1.5 w-1.5 rounded-full bg-ink-soft" />
              <span className="h-1.5 w-1.5 rounded-full bg-ink-soft" />
              <span className="h-1.5 w-1.5 rounded-full bg-ink-soft/30" />
            </span>
          </div>

          <div className="px-5 pt-8">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-coral-700 ring-1 ring-coral-200">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral-500" />
                </span>
                {L.live}
              </span>
              <span className="text-[11px] font-medium text-ink-muted">{L.duration}</span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-coral-400 to-coral-600 text-sm font-semibold text-white">
                S
              </div>
              <div>
                <div className="font-display text-[15px] font-semibold leading-tight text-ink">
                  Sarah Mitchell
                </div>
                <div className="text-[11px] text-ink-muted">{L.callerNote}</div>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 px-5 pt-5">
            {SCRIPT.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={visibleLines > i ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={
                  line.who === "ai"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-coral-500 px-3.5 py-2 text-[12px] leading-snug text-white shadow-sm"
                    : "max-w-[85%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2 text-[12px] leading-snug text-ink-soft ring-1 ring-line"
                }
              >
                {line.text}
              </motion.div>
            ))}
            {visibleLines >= SCRIPT.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-200"
              >
                <Sparkles className="h-3 w-3" /> {L.booked}
              </motion.div>
            )}
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4 px-5">
            <button
              type="button"
              aria-label="Mute"
              className="grid h-12 w-12 place-items-center rounded-full bg-white/80 text-ink shadow ring-1 ring-line backdrop-blur"
            >
              <Mic className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="End call"
              className="grid h-14 w-14 place-items-center rounded-full bg-coral-500 text-white shadow-coral animate-pulse-coral"
            >
              <PhoneOff className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Calendar"
              className="grid h-12 w-12 place-items-center rounded-full bg-white/80 text-ink shadow ring-1 ring-line backdrop-blur"
            >
              <Calendar className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30, y: -10 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-6 top-16 hidden w-[200px] rotate-3 rounded-2xl bg-white p-4 shadow-lift ring-1 ring-line sm:block"
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600">
          <Calendar className="h-3.5 w-3.5" /> {L.booked}
        </div>
        <div className="mt-2 font-display text-base font-semibold text-ink">
          {L.floatBookedTitle}
        </div>
        <div className="text-xs text-ink-muted">{L.floatBookedSub}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-8 bottom-24 hidden w-[180px] -rotate-3 rounded-2xl bg-ink p-4 text-white shadow-lift sm:block"
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-coral-300">
          <Phone className="h-3.5 w-3.5" /> 24/7
        </div>
        <div className="mt-2 font-display text-2xl font-semibold leading-none">
          {L.floatCalls}
        </div>
        <div className="text-[11px] text-white/60">{L.floatCallsLabel}</div>
      </motion.div>
    </div>
  );
}
