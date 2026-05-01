"use client";

import { useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";
import { Button } from "@/components/ui/button";
import { PHONE } from "@/lib/contact";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "Contact",
    titleA: "Talk to a",
    titleEm: "human",
    titleSuffix: ".",
    sub: "The fastest way to understand Hellow is to call it — but if you'd rather reach a person on our team, every channel below works.",
    talkEyebrow: "Talk to Hellow",
    talkSub: "Available 24/7. The AI you'd be buying answers the line.",
    dial: "Dial now",
    emailEyebrow: "Email",
    emailSub: "Replies within a few hours.",
    hoursEyebrow: "Office hours",
    hoursValue: "Mon – Fri, 9am – 6pm CT",
    hoursSub: "The phone never sleeps — but our humans do.",
    mailEyebrow: "Mailing",
    formTitle: "Send us a note",
    formSub: "We read everything. Most replies land within a few hours.",
    successTitle: "Thanks — we got it.",
    successSub:
      "You'll hear back from a real person within a few hours. In the meantime, you can call Hellow to test the product live.",
    name: "Your name",
    company: "Company",
    email: "Email",
    phone: "Phone (optional)",
    aboutLabel: "What's this about?",
    reasons: ["Sales", "Support", "Integrations", "Press", "Partnerships", "Other"],
    messageLabel: "Message",
    messagePlaceholder: "Tell us what's on your mind…",
    submit: "Send message",
  },
  pt: {
    eyebrow: "Contato",
    titleA: "Fale com uma",
    titleEm: "pessoa",
    titleSuffix: ".",
    sub: "A maneira mais rápida de entender a Hellow é ligar — mas se preferir falar com alguém do nosso time, todos os canais abaixo funcionam.",
    talkEyebrow: "Fale com a Hellow",
    talkSub: "Disponível 24/7. A IA que você estaria contratando atende.",
    dial: "Discar agora",
    emailEyebrow: "E-mail",
    emailSub: "Respondemos em poucas horas.",
    hoursEyebrow: "Horário comercial",
    hoursValue: "Seg – Sex, 9h – 18h (CT)",
    hoursSub: "O telefone nunca dorme — mas nossos humanos sim.",
    mailEyebrow: "Endereço",
    formTitle: "Mande um recado",
    formSub: "A gente lê tudo. A maioria das respostas sai em poucas horas.",
    successTitle: "Recebido — obrigado.",
    successSub:
      "Uma pessoa de verdade vai te responder em poucas horas. Enquanto isso, você pode ligar e testar a Hellow ao vivo.",
    name: "Seu nome",
    company: "Empresa",
    email: "E-mail",
    phone: "Telefone (opcional)",
    aboutLabel: "Sobre o que é?",
    reasons: ["Vendas", "Suporte", "Integrações", "Imprensa", "Parcerias", "Outro"],
    messageLabel: "Mensagem",
    messagePlaceholder: "Conta o que está rolando…",
    submit: "Enviar mensagem",
  },
} as const satisfies Record<Locale, unknown>;

export function ContactBody({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titleA}{" "}
            <span className="font-display-italic text-coral-600">{t.titleEm}</span>
            {t.titleSuffix}
          </>
        }
        subtitle={t.sub}
      />

      <section className="bg-bg py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <aside className="lg:col-span-5">
              <ul className="space-y-4">
                <li className="rounded-3xl border border-line bg-bg-soft p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-coral-500 text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-eyebrow font-semibold uppercase text-coral-600">
                        {t.talkEyebrow}
                      </p>
                      <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
                        {PHONE.display}
                      </p>
                      <p className="mt-1 text-sm text-ink-muted">{t.talkSub}</p>
                      <a
                        href={PHONE.tel}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-coral-600 hover:underline"
                      >
                        {t.dial} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </li>

                <li className="rounded-3xl border border-line bg-bg p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-bg-soft text-ink ring-1 ring-line">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-eyebrow font-semibold uppercase text-ink-muted">
                        {t.emailEyebrow}
                      </p>
                      <a
                        href="mailto:hello@hellow.ai"
                        className="mt-2 block font-display text-xl font-semibold tracking-tight text-ink hover:text-coral-600"
                      >
                        hello@hellow.ai
                      </a>
                      <p className="mt-1 text-sm text-ink-muted">{t.emailSub}</p>
                    </div>
                  </div>
                </li>

                <li className="rounded-3xl border border-line bg-bg p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-bg-soft text-ink ring-1 ring-line">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-eyebrow font-semibold uppercase text-ink-muted">
                        {t.hoursEyebrow}
                      </p>
                      <p className="mt-2 text-base text-ink-soft">{t.hoursValue}</p>
                      <p className="text-sm text-ink-muted">{t.hoursSub}</p>
                    </div>
                  </div>
                </li>

                <li className="rounded-3xl border border-line bg-bg p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-bg-soft text-ink ring-1 ring-line">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-eyebrow font-semibold uppercase text-ink-muted">
                        {t.mailEyebrow}
                      </p>
                      <p className="mt-2 text-base text-ink-soft">
                        CEL EDUCATION LLC <span className="text-ink-muted">(Hellow)</span>
                        <br />
                        8 The Green, Suite A
                        <br />
                        Dover, DE 19901
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </aside>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-line bg-bg-soft p-7 shadow-soft sm:p-10">
                <h2 className="font-display text-display-md font-medium tracking-tight text-ink">
                  {t.formTitle}
                </h2>
                <p className="mt-2 text-base text-ink-muted">{t.formSub}</p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl bg-coral-50 p-6 ring-1 ring-coral-200">
                    <p className="font-display text-xl font-semibold text-coral-700">
                      {t.successTitle}
                    </p>
                    <p className="mt-2 text-sm text-coral-700/85">{t.successSub}</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-8 space-y-4"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label={t.name} name="name" required />
                      <Field label={t.company} name="company" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label={t.email} name="email" type="email" required />
                      <Field label={t.phone} name="phone" type="tel" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-ink-soft">
                        {t.aboutLabel}
                      </label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {t.reasons.map((r) => (
                          <label
                            key={r}
                            className="inline-flex cursor-pointer items-center rounded-full border border-line bg-bg px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-coral-300 has-[:checked]:border-coral-500 has-[:checked]:bg-coral-50 has-[:checked]:text-coral-700"
                          >
                            <input type="radio" name="reason" value={r} className="sr-only" />
                            {r}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-ink-soft">
                        {t.messageLabel}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder={t.messagePlaceholder}
                        className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-[0.95rem] placeholder:text-ink-subtle focus:border-coral-400 focus:outline-none focus:ring-2 focus:ring-coral-400/30"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      {t.submit} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink-soft">
        {label}
        {required && <span className="ml-0.5 text-coral-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-[0.95rem] placeholder:text-ink-subtle focus:border-coral-400 focus:outline-none focus:ring-2 focus:ring-coral-400/30"
      />
    </div>
  );
}
