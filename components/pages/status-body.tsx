import {
  CalendarCheck,
  CheckCircle2,
  CircleCheck,
  MessageSquare,
  PhoneCall,
  Server,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "System status",
    titleA: "All systems",
    titleEm: "operational",
    titleSuffix: ".",
    sub: "Live status of Hellow's services. Updated continuously. No active incidents.",
    bannerTitle: "All systems operational",
    bannerSub: "Last checked just now",
    operational: "Operational",
    uptimeLabel: "90-day uptime",
    daysAgo: "90 days ago",
    today: "Today",
    pastTitle: "Past incidents",
    pastEmpty: "No incidents in the past 90 days.",
    pastSub: "We'll post here the moment anything changes.",
    services: [
      { name: "Phone answering" },
      { name: "Web chat & DMs" },
      { name: "Calendar & booking sync" },
      { name: "Dashboard & API" },
    ],
  },
  pt: {
    eyebrow: "Status do sistema",
    titleA: "Todos os sistemas",
    titleEm: "operacionais",
    titleSuffix: ".",
    sub: "Status ao vivo dos serviços da Hellow. Atualizado continuamente. Sem incidentes ativos.",
    bannerTitle: "Todos os sistemas operacionais",
    bannerSub: "Última verificação agora há pouco",
    operational: "Operacional",
    uptimeLabel: "Uptime nos últimos 90 dias",
    daysAgo: "90 dias atrás",
    today: "Hoje",
    pastTitle: "Incidentes anteriores",
    pastEmpty: "Nenhum incidente nos últimos 90 dias.",
    pastSub: "A gente posta aqui no momento em que algo mudar.",
    services: [
      { name: "Atendimento telefônico" },
      { name: "Chat na web e DMs" },
      { name: "Sincronização de agenda" },
      { name: "Dashboard e API" },
    ],
  },
} as const satisfies Record<Locale, unknown>;

const SERVICE_META = [
  { icon: PhoneCall, uptime: 99.997 },
  { icon: MessageSquare, uptime: 99.992 },
  { icon: CalendarCheck, uptime: 99.989 },
  { icon: Server, uptime: 99.998 },
];

const DAYS = 90;

export function StatusBody({ locale }: { locale: Locale }) {
  const t = COPY[locale];

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
          <div className="flex items-center gap-3 rounded-3xl bg-emerald-50 p-5 ring-1 ring-emerald-200">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <p className="font-display text-lg font-semibold text-emerald-900">
              {t.bannerTitle}
            </p>
            <p className="ml-auto text-sm text-emerald-800/75">{t.bannerSub}</p>
          </div>

          <ul className="mt-8 space-y-3">
            {t.services.map((s, i) => {
              const meta = SERVICE_META[i]!;
              return (
                <li
                  key={s.name}
                  className="rounded-3xl border border-line bg-bg-soft p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-bg text-ink ring-1 ring-line">
                        <meta.icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                          {s.name}
                        </h3>
                        <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700">
                          <CheckCircle2 className="h-4 w-4" />
                          {t.operational}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-subtle">
                        {t.uptimeLabel}
                      </p>
                      <p className="font-display text-2xl font-semibold tabular-nums text-ink">
                        {meta.uptime.toFixed(3)}%
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex h-7 items-end gap-[2px]">
                    {Array.from({ length: DAYS }).map((_, j) => (
                      <span
                        key={j}
                        className="block h-full flex-1 rounded-sm bg-emerald-500/85 transition-all hover:bg-emerald-600"
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[11px] text-ink-subtle">
                    <span>{t.daysAgo}</span>
                    <span>{t.today}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-12">
            <h2 className="font-display text-display-md font-medium tracking-tight text-ink">
              {t.pastTitle}
            </h2>
            <div className="mt-5 rounded-3xl border border-dashed border-line-strong bg-bg-soft p-10 text-center">
              <CircleCheck className="mx-auto h-9 w-9 text-emerald-500" />
              <p className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
                {t.pastEmpty}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{t.pastSub}</p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
