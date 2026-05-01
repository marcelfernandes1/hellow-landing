"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { PHONE } from "@/lib/contact";
import { useLocale } from "@/lib/i18n/context";
import { localePath } from "@/lib/i18n/utils";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

const COPY = {
  en: {
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Call to test it",
    open: "Open menu",
    close: "Close menu",
    home: "Hellow home",
  },
  pt: {
    features: "Recursos",
    pricing: "Preços",
    faq: "Perguntas",
    cta: "Ligue para testar",
    open: "Abrir menu",
    close: "Fechar menu",
    home: "Hellow — início",
  },
} as const satisfies Record<Locale, unknown>;

export function Nav() {
  const locale = useLocale();
  const t = COPY[locale];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: localePath(locale, "#features"), label: t.features },
    { href: localePath(locale, "#pricing"), label: t.pricing },
    { href: localePath(locale, "#faq"), label: t.faq },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2 transition-all duration-300 sm:px-5",
            scrolled
              ? "border-line bg-bg/85 shadow-soft backdrop-blur-md"
              : "border-transparent bg-transparent",
          )}
        >
          <Link
            href={localePath(locale, "/")}
            aria-label={t.home}
            className="flex items-center"
          >
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.9375rem] font-medium text-ink-soft transition-colors hover:text-coral-600"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LocaleSwitcher className="hidden md:inline-flex" />
            <Button asChild size="sm" className="hidden md:inline-flex">
              <a href={PHONE.tel}>
                <Phone className="h-4 w-4" />
                {t.cta}
              </a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-bg-warm md:hidden"
              aria-label={open ? t.close : t.open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-3xl border border-line bg-bg p-5 shadow-lift md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-3 text-base font-medium text-ink-soft hover:bg-bg-soft"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center justify-between rounded-2xl bg-bg-soft px-3 py-3">
                <span className="text-sm font-medium text-ink-muted">Language</span>
                <LocaleSwitcher />
              </div>
              <Button asChild className="mt-2 w-full">
                <a href={PHONE.tel} onClick={() => setOpen(false)}>
                  <Phone className="h-4 w-4" />
                  {t.cta}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
