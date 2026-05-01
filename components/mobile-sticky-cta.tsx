"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { PHONE } from "@/lib/contact";

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 transition-all duration-300 md:hidden ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!show}
    >
      <a
        href={PHONE.tel}
        className="flex items-center justify-between gap-2 rounded-full bg-ink px-5 py-3.5 shadow-lift ring-1 ring-ink/20"
      >
        <span className="text-sm text-white/70">Try Hellow live</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-500 px-4 py-2 text-sm font-medium text-white">
          <Phone className="h-3.5 w-3.5" />
          Call to test
        </span>
      </a>
    </div>
  );
}
