"use client";

import Image from "next/image";
import { Compass, Heart, Zap } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";
import { AnimatedCounter } from "@/components/animated-counter";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "About",
    titleA: "Built so local businesses",
    titleEm: "never miss",
    titleB: "a customer.",
    sub: "Hellow is a small team obsessed with one problem: the phone. Most local businesses lose more revenue to missed calls than to any other operational issue. We're here to end that — politely, on every channel.",
    missionEyebrow: "Mission",
    missionHeadline:
      "The phone is the front door of every local business. We make sure it's never locked.",
    missionBody: (
      <>
        <p>
          Local businesses are the backbone of every neighborhood — and most of
          them are quietly losing thousands of dollars a month for a reason that
          sounds ridiculous when you say it out loud:{" "}
          <strong>the phone rings and nobody picks up</strong>.
        </p>
        <p>
          The owner is on a job. The receptionist is at lunch. It's a Saturday.
          It's 7pm. The line is busy. Whatever the reason, the customer hangs up
          — and 85% of them never try a second time.
        </p>
        <p>
          We started Hellow because we believe AI is finally good enough to fix
          this. Not as a robotic answering machine, but as a real receptionist
          that knows the business, sounds like a person, and gets the job done
          — on the phone, on the website, and in every DM.
        </p>
      </>
    ),
    stats: [
      { value: 1200, suffix: "+", label: "Local businesses on Hellow" },
      { value: 4, suffix: "M+", label: "Calls answered this year" },
      { value: 9, suffix: "5%", label: "Resolved without a human" },
      { value: 193, suffix: "", label: "Countries we've shipped to" },
    ],
    valuesEyebrow: "Values",
    valuesHeadline: "How we build.",
    values: [
      {
        title: "Warm by default",
        body: "Local businesses run on relationships. Our AI sounds, listens, and replies like someone you'd actually want to do business with.",
      },
      {
        title: "Fast on the line",
        body: "Sub-300ms response time. Calls feel like a conversation, not a transaction. The robot lag is gone.",
      },
      {
        title: "Fair on price",
        body: "Flat monthly. No per-call fees. No surprise overages. The kind of pricing a small business owner can plan around.",
      },
    ],
    founderEyebrow: "Founder",
    founderRole: "CEO & Founder",
    founderBody: (
      <>
        <p>
          Two-time Guinness World Record holder. Trained 70,000+ entrepreneurs
          across 193 countries. Built and scaled multiple 8-figure businesses
          before Hellow.
        </p>
        <p>
          Across all of that, the same pattern broke his heart: incredible local
          business owners losing thousands every month to a problem so simple it
          sounds ridiculous — they couldn't answer the phone fast enough.
        </p>
        <p>Hellow is his answer.</p>
      </>
    ),
    founderAlt: "Marcel Fernandes, founder of Hellow",
  },
  pt: {
    eyebrow: "Sobre",
    titleA: "Feita para que negócios locais",
    titleEm: "nunca percam",
    titleB: "um cliente.",
    sub: "A Hellow é um time pequeno obcecado por um único problema: o telefone. A maioria dos negócios locais perde mais receita por ligação não atendida do que por qualquer outra falha operacional. A gente está aqui para acabar com isso — com educação, em todos os canais.",
    missionEyebrow: "Missão",
    missionHeadline:
      "O telefone é a porta da frente de todo negócio local. A gente garante que ela nunca fique trancada.",
    missionBody: (
      <>
        <p>
          Negócios locais são a espinha dorsal de cada bairro — e a maior parte
          deles está perdendo, em silêncio, milhares por mês por um motivo que
          soa ridículo quando dito em voz alta:{" "}
          <strong>o telefone toca e ninguém atende</strong>.
        </p>
        <p>
          O dono está em obra. A recepcionista está no almoço. É sábado. São 19h.
          A linha está ocupada. Seja qual for o motivo, o cliente desliga — e
          85% nunca ligam uma segunda vez.
        </p>
        <p>
          Começamos a Hellow porque acreditamos que a IA finalmente ficou boa o
          suficiente para resolver isso. Não como secretária eletrônica robótica,
          mas como uma recepcionista de verdade — que conhece o negócio, fala
          como gente e resolve. No telefone, no site e em toda DM.
        </p>
      </>
    ),
    stats: [
      { value: 1200, suffix: "+", label: "Negócios locais usando a Hellow" },
      { value: 4, suffix: "M+", label: "Ligações atendidas este ano" },
      { value: 9, suffix: "5%", label: "Resolvidas sem humano" },
      { value: 193, suffix: "", label: "Países onde já entregamos" },
    ],
    valuesEyebrow: "Valores",
    valuesHeadline: "Como construímos.",
    values: [
      {
        title: "Calorosos por padrão",
        body: "Negócio local roda em relacionamento. Nossa IA fala, escuta e responde como alguém com quem você realmente quer fazer negócio.",
      },
      {
        title: "Rápidos na linha",
        body: "Tempo de resposta abaixo de 300ms. A ligação parece uma conversa, não uma transação. O lag de robô acabou.",
      },
      {
        title: "Justos no preço",
        body: "Mensalidade fixa. Sem cobrança por ligação. Sem cobrança extra surpresa. Um preço que cabe no planejamento do dono de pequeno negócio.",
      },
    ],
    founderEyebrow: "Fundador",
    founderRole: "CEO e fundador",
    founderBody: (
      <>
        <p>
          Duas vezes recordista mundial pelo Guinness. Treinou mais de 70.000
          empreendedores em 193 países. Construiu e escalou múltiplos negócios de
          8 dígitos antes da Hellow.
        </p>
        <p>
          Em toda essa jornada, o mesmo padrão lhe partia o coração: donos
          incríveis de negócios locais perdendo milhares por mês por um problema
          tão simples que soa ridículo — não conseguiam atender o telefone a
          tempo.
        </p>
        <p>A Hellow é a resposta dele.</p>
      </>
    ),
    founderAlt: "Marcel Fernandes, fundador da Hellow",
  },
} as const satisfies Record<Locale, unknown>;

const VALUE_ICONS = [Heart, Zap, Compass];

export function AboutBody({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titleA}{" "}
            <span className="font-display-italic text-coral-600">{t.titleEm}</span>{" "}
            {t.titleB}
          </>
        }
        subtitle={t.sub}
      />

      <section className="bg-bg py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-eyebrow font-semibold uppercase text-coral-600">
                {t.missionEyebrow}
              </p>
              <h2 className="mt-3 font-display text-display-md font-medium text-balance text-ink">
                {t.missionHeadline}
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft text-pretty lg:col-span-7">
              {t.missionBody}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-bg lg:py-24">
        <div className="container">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 lg:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.label} className="bg-ink p-7 sm:p-9">
                <div className="font-display text-4xl font-semibold leading-none text-bg sm:text-5xl">
                  <AnimatedCounter to={s.value} suffix={s.suffix} duration={2.2} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow font-semibold uppercase text-coral-600">
              {t.valuesEyebrow}
            </p>
            <h2 className="mt-3 font-display text-display-lg font-medium text-balance text-ink">
              {t.valuesHeadline}
            </h2>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {t.values.map((v, i) => {
              const Icon = VALUE_ICONS[i]!;
              return (
                <li
                  key={v.title}
                  className="rounded-3xl border border-line bg-bg p-8 shadow-soft"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-coral-50 text-coral-600 ring-1 ring-coral-100">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted text-pretty">
                    {v.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg-warm py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grain bg-[size:6px_6px] opacity-30" />
        <div className="container relative">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px]">
                <div className="absolute -inset-3 -z-10 rounded-[36px] bg-coral-200/40" />
                <div className="absolute inset-0 overflow-hidden rounded-[32px] bg-coral-100 shadow-lift ring-1 ring-coral-200">
                  <Image
                    src="/ceo-headshot.png"
                    alt={t.founderAlt}
                    fill
                    sizes="(max-width: 1024px) 80vw, 400px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-eyebrow font-semibold uppercase text-coral-600">
                {t.founderEyebrow}
              </p>
              <h2 className="mt-3 font-display text-display-md font-medium text-balance text-ink">
                Marcel Fernandes
              </h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-ink-muted">
                {t.founderRole}
              </p>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft text-pretty">
                {t.founderBody}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
