"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/logo";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { useLocale } from "@/lib/i18n/context";
import { localePath } from "@/lib/i18n/utils";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    pitch:
      "The AI receptionist that answers every call, books appointments, and captures leads — so you never miss another customer.",
    newsletter: {
      eyebrow: "The Front Door",
      sub: "One short email a month with playbooks for local businesses.",
      placeholder: "you@business.com",
      cta: "Subscribe",
      success: "Thanks — you're on the list.",
      ariaEmail: "Email address",
    },
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "ROI calculator", href: "#roi" },
          { label: "Integrations", href: "/integrations" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Help center", href: "/help" },
          { label: "Industry guides", href: "/guides" },
          { label: "Voice AI report", href: "/report" },
          { label: "Status", href: "/status" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Security", href: "/security" },
          { label: "DPA", href: "/dpa" },
        ],
      },
    ],
    copyright:
      "CEL EDUCATION LLC. Hellow is a service of CEL EDUCATION LLC. Made with care for local businesses.",
    languageLabel: "Language",
  },
  pt: {
    pitch:
      "A recepcionista de IA que atende todas as ligações, agenda compromissos e captura leads — para você nunca mais perder um cliente.",
    newsletter: {
      eyebrow: "A Porta da Frente",
      sub: "Um e-mail curto por mês, com playbooks para negócios locais.",
      placeholder: "voce@empresa.com",
      cta: "Assinar",
      success: "Pronto — você está na lista.",
      ariaEmail: "Endereço de e-mail",
    },
    columns: [
      {
        title: "Produto",
        links: [
          { label: "Recursos", href: "#features" },
          { label: "Preços", href: "#pricing" },
          { label: "Calculadora de ROI", href: "#roi" },
          { label: "Integrações", href: "/integrations" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Sobre", href: "/about" },
          { label: "Contato", href: "/contact" },
        ],
      },
      {
        title: "Recursos",
        links: [
          { label: "Central de ajuda", href: "/help" },
          { label: "Guias por setor", href: "/guides" },
          { label: "Relatório de IA por voz", href: "/report" },
          { label: "Status", href: "/status" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacidade", href: "/privacy" },
          { label: "Termos", href: "/terms" },
          { label: "Segurança", href: "/security" },
          { label: "DPA", href: "/dpa" },
        ],
      },
    ],
    copyright:
      "CEL EDUCATION LLC. Hellow é um serviço da CEL EDUCATION LLC. Feito com carinho para os negócios locais.",
    languageLabel: "Idioma",
  },
} as const satisfies Record<Locale, unknown>;

const SOCIALS = [
  { icon: Instagram, href: "#instagram", label: "Instagram" },
  { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: Youtube, href: "#youtube", label: "YouTube" },
];

export function Footer() {
  const locale = useLocale();
  const t = COPY[locale];
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-ink pt-24 text-bg">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />

      <div className="container relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/65 text-pretty">
              {t.pitch}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="mt-7 max-w-md"
            >
              <p className="text-eyebrow font-semibold uppercase text-coral-300">
                {t.newsletter.eyebrow}
              </p>
              <p className="mt-2 text-sm text-white/65">{t.newsletter.sub}</p>
              <div className="mt-4 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder}
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-bg placeholder:text-white/40 focus:outline-none"
                  aria-label={t.newsletter.ariaEmail}
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-full bg-coral-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-coral-600"
                >
                  {t.newsletter.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
              {submitted && (
                <p className="mt-2 text-xs text-coral-300">{t.newsletter.success}</p>
              )}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {t.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-eyebrow font-semibold uppercase text-white/50">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={localePath(locale, l.href)}
                        className="text-[0.9375rem] text-white/80 transition-colors hover:text-coral-300"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs uppercase tracking-wider text-white/45 sm:block">
              {t.languageLabel}
            </span>
            <LocaleSwitcher />
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-white/75 ring-1 ring-white/10 transition-colors hover:bg-coral-500 hover:text-white hover:ring-coral-500"
                >
                  <s.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none mt-4 select-none overflow-hidden text-center font-display text-[24vw] font-semibold leading-none tracking-[-0.04em] text-white/[0.04]"
      >
        hellow
      </div>
    </footer>
  );
}
