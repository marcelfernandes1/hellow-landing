import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CreditCard,
  HelpCircle,
  PhoneCall,
  Plug,
  Rocket,
  Search,
  Shield,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";
import { localePath } from "@/lib/i18n/utils";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "Help center",
    titleA: "Find an answer.",
    titleEm: "Or call one.",
    sub: "Everything you need to set up, run, and scale Hellow. Can't find it? Hellow itself can answer most questions about Hellow — give it a ring.",
    placeholder: "Search articles, integrations, voice settings…",
    searchAria: "Search help articles",
    searchSubmit: "Search",
    browseTitle: "Browse by topic",
    articles: "articles",
    browseLabel: "Browse",
    topTitle: "Top questions",
    categories: [
      { title: "Getting started", body: "Forward your number, train Hellow on your business, go live in under 10 minutes.", count: 8 },
      { title: "Phone setup", body: "Porting, call forwarding, voice settings, after-hours routing, and emergency escalation.", count: 14 },
      { title: "Booking & scheduling", body: "Calendar sync, availability rules, buffer times, no-show handling, reminders.", count: 11 },
      { title: "Integrations", body: "Google Calendar, Outlook, HubSpot, Salesforce, Zapier, and custom webhooks.", count: 17 },
      { title: "Billing", body: "Plans, invoicing, taxes, annual vs monthly, upgrading, and pausing.", count: 9 },
      { title: "Security & compliance", body: "SOC 2, HIPAA, data residency, encryption, and customer-data controls.", count: 7 },
    ],
    top: [
      {
        q: "Will my customers know they're talking to AI?",
        a: "Most won't — a 2025 University of Michigan study found 71% of callers can't tell modern voice AI from a human. If a caller asks directly, Hellow tells them.",
      },
      {
        q: "How long does setup take?",
        a: "Most businesses are live in under 10 minutes once we have your hours, services, and FAQs.",
      },
      {
        q: "What happens when Hellow can't answer something?",
        a: "Hellow handles 90–95% of calls end-to-end. For anything outside its scope, it routes the call to you instantly with a transcript and full context.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. No annual lock-in, no cancellation fees, no penalty.",
      },
    ],
  },
  pt: {
    eyebrow: "Central de ajuda",
    titleA: "Encontre uma resposta.",
    titleEm: "Ou ligue para uma.",
    sub: "Tudo que você precisa para configurar, operar e escalar a Hellow. Não achou? A própria Hellow responde a maior parte das perguntas sobre ela — é só ligar.",
    placeholder: "Buscar artigos, integrações, configurações de voz…",
    searchAria: "Buscar artigos de ajuda",
    searchSubmit: "Buscar",
    browseTitle: "Navegar por tópico",
    articles: "artigos",
    browseLabel: "Explorar",
    topTitle: "Perguntas mais comuns",
    categories: [
      { title: "Começando", body: "Encaminhe seu número, treine a Hellow no seu negócio, fique ao vivo em menos de 10 minutos.", count: 8 },
      { title: "Configuração de telefone", body: "Portabilidade, encaminhamento, configurações de voz, fora de expediente e escalonamento de emergência.", count: 14 },
      { title: "Agendamentos", body: "Sync de calendário, regras de disponibilidade, intervalos, lidar com faltas e lembretes.", count: 11 },
      { title: "Integrações", body: "Google Agenda, Outlook, HubSpot, Salesforce, Zapier e webhooks personalizados.", count: 17 },
      { title: "Faturamento", body: "Planos, notas, impostos, anual vs mensal, upgrades e pausa.", count: 9 },
      { title: "Segurança e compliance", body: "SOC 2, HIPAA, residência de dados, criptografia e controles de dados do cliente.", count: 7 },
    ],
    top: [
      {
        q: "Os meus clientes vão perceber que é IA?",
        a: "A maioria não percebe — um estudo da University of Michigan, de 2025, mostrou que 71% das pessoas não conseguem distinguir IA de voz moderna de um humano. Se a pessoa perguntar diretamente, a Hellow conta.",
      },
      {
        q: "Quanto tempo leva para colocar no ar?",
        a: "A maioria dos negócios fica ao vivo em menos de 10 minutos, assim que recebemos seus horários, serviços e perguntas frequentes.",
      },
      {
        q: "E quando a Hellow não souber responder algo?",
        a: "A Hellow resolve 90–95% das ligações do começo ao fim. Para o que está fora do escopo, ela transfere a ligação para você na hora, com transcrição e contexto completo.",
      },
      {
        q: "Posso cancelar quando quiser?",
        a: "Sim. Sem fidelidade, sem multa de cancelamento, sem penalidade.",
      },
    ],
  },
} as const satisfies Record<Locale, unknown>;

const ICONS = [Rocket, PhoneCall, CalendarClock, Plug, CreditCard, Shield];

export function HelpBody({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titleA}{" "}
            <span className="font-display-italic text-coral-600">{t.titleEm}</span>
          </>
        }
        subtitle={t.sub}
      >
        <form
          action={localePath(locale, "/help")}
          method="get"
          className="mt-2 flex max-w-xl items-center gap-2 rounded-full border border-line bg-bg p-1.5 shadow-soft"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full text-ink-muted">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="search"
            name="q"
            placeholder={t.placeholder}
            className="flex-1 bg-transparent px-1 py-2 text-[0.95rem] placeholder:text-ink-subtle focus:outline-none"
            aria-label={t.searchAria}
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-full bg-coral-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-coral-600"
          >
            {t.searchSubmit}
          </button>
        </form>
      </PageHero>

      <section className="bg-bg py-20">
        <div className="container">
          <h2 className="font-display text-display-md font-medium tracking-tight text-ink">
            {t.browseTitle}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.categories.map((c, i) => {
              const Icon = ICONS[i]!;
              return (
                <li key={c.title}>
                  <Link
                    href="#"
                    className="group block h-full rounded-3xl border border-line bg-bg-soft p-7 transition-all hover:-translate-y-0.5 hover:border-coral-200 hover:bg-coral-50/40 hover:shadow-lift"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-bg text-ink ring-1 ring-line transition-all group-hover:bg-coral-500 group-hover:text-white group-hover:ring-coral-500">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-subtle">
                        {c.count} {t.articles}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                      {c.body}
                    </p>
                    <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-coral-600">
                      {t.browseLabel}{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-bg-soft py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-6 w-6 text-coral-600" />
              <h2 className="font-display text-display-md font-medium tracking-tight text-ink">
                {t.topTitle}
              </h2>
            </div>
            <ul className="mt-8 space-y-4">
              {t.top.map((q) => (
                <li
                  key={q.q}
                  className="rounded-3xl border border-line bg-bg p-7 shadow-soft"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {q.q}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                    {q.a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
