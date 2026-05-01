"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { PHONE } from "@/lib/contact";

const STORAGE_KEY = "hellow_exit_intent_seen_v1";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
        document.removeEventListener("mouseleave", onMouseLeave);
      }
    };
    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Test Hellow live"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative mx-4 w-full max-w-md overflow-hidden rounded-3xl bg-bg-soft p-8 shadow-lift ring-1 ring-line"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink-muted hover:bg-bg-warm hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-coral-500 text-white shadow-coral">
              <Phone className="h-5 w-5" />
            </div>

            <h3 className="mt-5 font-display text-3xl font-medium leading-tight text-balance text-ink">
              Before you go —{" "}
              <span className="font-display-italic text-coral-600">try it.</span>
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-muted text-pretty">
              The fastest way to understand Hellow is to call it. Pick up your phone, dial the
              number, and have a real conversation. 60 seconds — and you'll know.
            </p>

            <a
              href={PHONE.tel}
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-5 py-3.5 font-medium text-white shadow-coral transition-colors hover:bg-coral-600"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE.display}
            </a>

            <p className="mt-4 text-xs text-ink-subtle">
              Live, unscripted, no signup. Hang up anytime.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
