import Link from "next/link";
import {
  Calendar,
  CalendarRange,
  Cog,
  HardHat,
  Headphones,
  Instagram,
  Mail,
  MessageSquare,
  Phone,
  ShoppingBag,
  UserSquare2,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";
import { Button } from "@/components/ui/button";
import { localePath } from "@/lib/i18n/utils";
import type { Locale } from "@/lib/i18n/types";

type Integration = {
  name: string;
  category: string;
  blurb: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleSuffix: string;
    sub: string;
    helperEyebrow: string;
    helperHeadline: string;
    helperBody: string;
    helperCta: string;
    integrations: Integration[];
  }
> = {
  en: {
    eyebrow: "Integrations",
    titleA: "Hellow plugs into",
    titleEm: "your stack",
    titleSuffix: ".",
    sub: "Calendars, CRMs, scheduling, telephony, automation. Two-way sync, real-time, signed webhooks. Nothing to babysit.",
    helperEyebrow: "Custom",
    helperHeadline: "Don't see yours?",
    helperBody:
      "Custom integrations are part of the Omnichannel onboarding. Tell us your stack and we'll wire it up.",
    helperCta: "Talk to integrations",
    integrations: [
      { name: "Google Calendar", category: "Calendar", blurb: "Two-way sync. Hellow checks availability and books in real time.", icon: Calendar },
      { name: "Outlook & Microsoft 365", category: "Calendar", blurb: "Same intelligence, on the Microsoft side. Includes Teams meeting links.", icon: CalendarRange },
      { name: "HubSpot", category: "CRM", blurb: "Every caller becomes a contact, with full transcript and intent tagged.", icon: UserSquare2 },
      { name: "Salesforce", category: "CRM", blurb: "Push leads, log call activity, and trigger workflows on conversation outcomes.", icon: Workflow },
      { name: "Pipedrive", category: "CRM", blurb: "Auto-create deals from calls and DMs. Stage advances on confirmed bookings.", icon: ShoppingBag },
      { name: "Jobber", category: "Field service", blurb: "Bookings flow into your job schedule with customer details pre-filled.", icon: HardHat },
      { name: "Housecall Pro", category: "Field service", blurb: "Hellow books, you dispatch. No double-entry, no missed jobs.", icon: Wrench },
      { name: "Acuity Scheduling", category: "Booking", blurb: "Hand-off to your existing booking flow when callers prefer self-serve.", icon: Calendar },
      { name: "Calendly", category: "Booking", blurb: "Send a Calendly link by SMS for callers who'd rather choose their own time.", icon: Calendar },
      { name: "Twilio", category: "Telephony", blurb: "Bring your own number. Or port for free. Or get a fresh local one.", icon: Phone },
      { name: "Instagram & Messenger", category: "Channel", blurb: "Reply to every DM the moment it arrives. Same brain as the phone.", icon: Instagram },
      { name: "Slack", category: "Notifications", blurb: "Real-time alerts for VIP callers, missed handoffs, and daily summaries.", icon: MessageSquare },
      { name: "Email (SMTP / Postmark / SendGrid)", category: "Notifications", blurb: "Branded confirmation and follow-up emails — all sent from your domain.", icon: Mail },
      { name: "Zapier", category: "Automation", blurb: "6,000+ apps, one webhook. Build any workflow in minutes.", icon: Zap },
      { name: "Custom webhooks", category: "Automation", blurb: "Real-time POSTs on every conversation, booking, or transcript. JSON, signed.", icon: Cog },
      { name: "Helpdesk handoff", category: "Support", blurb: "Escalate to Zendesk, Intercom, or Freshdesk when a human is needed.", icon: Headphones },
    ],
  },
  pt: {
    eyebrow: "Integrações",
    titleA: "A Hellow conecta com",
    titleEm: "o seu stack",
    titleSuffix: ".",
    sub: "Calendários, CRMs, agendamento, telefonia, automação. Sync de mão dupla, em tempo real, webhooks assinados. Nada para ficar babysittando.",
    helperEyebrow: "Personalizado",
    helperHeadline: "Não está aqui?",
    helperBody:
      "Integrações personalizadas fazem parte do onboarding Omnichannel. Conte qual é o seu stack e a gente conecta.",
    helperCta: "Falar com integrações",
    integrations: [
      { name: "Google Agenda", category: "Calendário", blurb: "Sync de mão dupla. A Hellow checa disponibilidade e agenda em tempo real.", icon: Calendar },
      { name: "Outlook & Microsoft 365", category: "Calendário", blurb: "Mesma inteligência, do lado Microsoft. Inclui links de reunião do Teams.", icon: CalendarRange },
      { name: "HubSpot", category: "CRM", blurb: "Toda ligação vira contato, com transcrição completa e intenção tagueada.", icon: UserSquare2 },
      { name: "Salesforce", category: "CRM", blurb: "Envia leads, registra atividade e dispara workflows com base no resultado da conversa.", icon: Workflow },
      { name: "Pipedrive", category: "CRM", blurb: "Cria deals automaticamente a partir de ligações e DMs. Avança o stage com agendamento confirmado.", icon: ShoppingBag },
      { name: "Jobber", category: "Field service", blurb: "Agendamentos caem direto na sua agenda de jobs com dados do cliente pré-preenchidos.", icon: HardHat },
      { name: "Housecall Pro", category: "Field service", blurb: "A Hellow agenda, você despacha. Sem duplicar dado, sem perder serviço.", icon: Wrench },
      { name: "Acuity Scheduling", category: "Agendamento", blurb: "Passa a bola pro seu fluxo de agendamento atual quando o cliente quiser auto-atendimento.", icon: Calendar },
      { name: "Calendly", category: "Agendamento", blurb: "Manda um link do Calendly por SMS para quem prefere escolher o horário sozinho.", icon: Calendar },
      { name: "Twilio", category: "Telefonia", blurb: "Use seu número. Faça portabilidade grátis. Ou ganhe um número local novo.", icon: Phone },
      { name: "Instagram & Messenger", category: "Canal", blurb: "Responde toda DM no instante em que chega. Mesmo cérebro do telefone.", icon: Instagram },
      { name: "Slack", category: "Notificações", blurb: "Alertas em tempo real para clientes VIP, transferências perdidas e resumos diários.", icon: MessageSquare },
      { name: "E-mail (SMTP / Postmark / SendGrid)", category: "Notificações", blurb: "Confirmação e follow-up com sua marca — tudo enviado pelo seu domínio.", icon: Mail },
      { name: "Zapier", category: "Automação", blurb: "Mais de 6.000 apps, um webhook. Monte qualquer workflow em minutos.", icon: Zap },
      { name: "Webhooks personalizados", category: "Automação", blurb: "POSTs em tempo real em cada conversa, agendamento ou transcrição. JSON, assinado.", icon: Cog },
      { name: "Handoff de helpdesk", category: "Suporte", blurb: "Escala para Zendesk, Intercom ou Freshdesk quando precisar de humano.", icon: Headphones },
    ],
  },
};

export function IntegrationsBody({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const categories = Array.from(new Set(t.integrations.map((i) => i.category)));

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

      <section className="bg-bg py-20">
        <div className="container">
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full border border-line bg-bg-soft px-4 py-1.5 text-sm font-medium text-ink-soft"
              >
                {c}
              </span>
            ))}
          </div>

          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
            {t.integrations.map((it) => (
              <li
                key={it.name}
                className="group flex flex-col gap-4 bg-bg p-7 transition-colors duration-300 hover:bg-coral-50/50"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-bg-soft text-ink ring-1 ring-line transition-all group-hover:bg-coral-500 group-hover:text-white group-hover:ring-coral-500">
                    <it.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
                    {it.category}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {it.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted text-pretty">
                    {it.blurb}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start gap-3 rounded-3xl border border-line bg-bg-soft p-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-10">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {t.helperHeadline}
              </h3>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-muted">
                {t.helperBody}
              </p>
            </div>
            <Button asChild size="lg" variant="outline">
              <Link href={localePath(locale, "/contact")}>{t.helperCta}</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
