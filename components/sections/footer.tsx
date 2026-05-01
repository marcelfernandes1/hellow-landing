"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "ROI calculator", href: "/#roi" },
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
];

const SOCIALS = [
  { icon: Instagram, href: "#instagram", label: "Instagram" },
  { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: Youtube, href: "#youtube", label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-ink pt-24 text-bg">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />

      <div className="container relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/65 text-pretty">
              The AI receptionist that answers every call, books appointments, and captures
              leads — so you never miss another customer.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: wire up newsletter submission to mailing provider
                if (email) setSubmitted(true);
              }}
              className="mt-7 max-w-md"
            >
              <p className="text-eyebrow font-semibold uppercase text-coral-300">
                The Front Door
              </p>
              <p className="mt-2 text-sm text-white/65">
                One short email a month with playbooks for local businesses.
              </p>
              <div className="mt-4 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-bg placeholder:text-white/40 focus:outline-none"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-full bg-coral-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-coral-600"
                >
                  Subscribe
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
              {submitted && (
                <p className="mt-2 text-xs text-coral-300">
                  Thanks — you're on the list.
                </p>
              )}
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-eyebrow font-semibold uppercase text-white/50">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
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
            © {new Date().getFullYear()} CEL EDUCATION LLC. Hellow is a service of CEL
            EDUCATION LLC. Made with care for local businesses.
          </p>
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

      {/* Massive wordmark */}
      <div
        aria-hidden
        className="pointer-events-none mt-4 select-none overflow-hidden text-center font-display text-[24vw] font-semibold leading-none tracking-[-0.04em] text-white/[0.04]"
      >
        hellow
      </div>
    </footer>
  );
}
