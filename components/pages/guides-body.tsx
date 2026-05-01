import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Car,
  Hammer,
  Home,
  Scissors,
  Stethoscope,
  Wrench,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";
import { localePath } from "@/lib/i18n/utils";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "Industry guides",
    titleA: "Playbooks tuned for",
    titleEm: "your trade",
    titleSuffix: ".",
    sub: "Hellow learns the language and rhythm of your industry. Pick yours below to see exactly how it works for businesses like you.",
    readPlaybook: "Read playbook",
    notListedA: "Don't see your industry?",
    notListedLinked: "Tell us about it",
    notListedB: "— we'll build you a custom setup.",
    guides: [
      { title: "Dental practices", body: "Cut no-shows, fill last-minute gaps, and let your front desk focus on patients in the chair.", stat: "Up to 50% fewer no-shows" },
      { title: "HVAC & plumbing", body: "Capture every emergency call. Triage urgency. Dispatch with full context.", stat: "$118K average revenue recovered" },
      { title: "Law firms", body: "Qualify intake on the first call — case type, urgency, jurisdiction — before a partner picks up.", stat: "3.4× consultation conversion" },
      { title: "Roofing & exteriors", body: "Storm leads don't wait. Hellow scopes the job, takes photos, and books inspection.", stat: "92% after-hours capture" },
      { title: "Salons & spas", body: "Reply to every Instagram DM in seconds. Book directly into your calendar.", stat: "+34% new clients month-over-month" },
      { title: "Real estate", body: "Qualify buyers and sellers around the clock. Schedule showings without lifting a finger.", stat: "5× faster lead response" },
      { title: "Medical clinics", body: "HIPAA-eligible call answering, intake, and reminders — across multiple locations.", stat: "< 4 sec average pickup" },
      { title: "Auto repair", body: "Estimate questions, drop-off scheduling, parts callbacks — all handled before you open.", stat: "+22% bay utilization" },
    ],
  },
  pt: {
    eyebrow: "Guias por setor",
    titleA: "Playbooks pensados para",
    titleEm: "o seu setor",
    titleSuffix: ".",
    sub: "A Hellow aprende a linguagem e o ritmo do seu setor. Escolha o seu abaixo para ver como funciona para negócios como o seu.",
    readPlaybook: "Ler o guia",
    notListedA: "Não vê seu setor aqui?",
    notListedLinked: "Conte para a gente",
    notListedB: "— a gente monta um setup personalizado.",
    guides: [
      { title: "Clínicas odontológicas", body: "Reduza faltas, preencha buracos de última hora e deixe a recepção focar no paciente que está na cadeira.", stat: "Até 50% menos faltas" },
      { title: "HVAC e encanador", body: "Capture toda ligação de emergência. Triage da urgência. Despacho com contexto completo.", stat: "Em média US$ 118K de receita recuperada" },
      { title: "Escritórios de advocacia", body: "Qualifique a entrada na primeira ligação — tipo de caso, urgência, jurisdição — antes de chegar ao sócio.", stat: "3,4× mais conversão em consultas" },
      { title: "Telhados e fachadas", body: "Lead de tempestade não espera. A Hellow escopa o serviço, tira foto e agenda a inspeção.", stat: "92% de captura fora de expediente" },
      { title: "Salões e spas", body: "Responda toda DM do Instagram em segundos. Agende direto no seu calendário.", stat: "+34% de novos clientes mês a mês" },
      { title: "Imobiliária", body: "Qualifique compradores e vendedores 24/7. Agende visitas sem mexer um dedo.", stat: "5× mais rápido para responder lead" },
      { title: "Clínicas médicas", body: "Atendimento, triagem e lembretes elegíveis a HIPAA — em múltiplas unidades.", stat: "Atende em menos de 4 seg" },
      { title: "Mecânica de automóveis", body: "Pedidos de orçamento, agendamento de entrega, retorno de peças — tudo resolvido antes de abrir.", stat: "+22% de uso da oficina" },
    ],
  },
} as const satisfies Record<Locale, unknown>;

const ICONS = [
  Stethoscope,
  Wrench,
  Briefcase,
  Hammer,
  Scissors,
  Home,
  Building2,
  Car,
];

export function GuidesBody({ locale }: { locale: Locale }) {
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

      <section className="bg-bg py-20 lg:py-24">
        <div className="container">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {t.guides.map((g, i) => {
              const Icon = ICONS[i]!;
              return (
                <li key={g.title}>
                  <Link
                    href="#"
                    className="group flex h-full flex-col gap-4 rounded-3xl border border-line bg-bg-soft p-7 transition-all hover:-translate-y-0.5 hover:border-coral-200 hover:bg-coral-50/40 hover:shadow-lift"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-bg text-ink ring-1 ring-line transition-all group-hover:bg-coral-500 group-hover:text-white group-hover:ring-coral-500">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                        {g.title}
                      </h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                        {g.body}
                      </p>
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-coral-600">
                      {g.stat}
                    </p>
                    <p className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                      {t.readPlaybook}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mt-12 text-center text-sm text-ink-muted">
            {t.notListedA}{" "}
            <Link
              href={localePath(locale, "/contact")}
              className="font-medium text-coral-600 hover:underline"
            >
              {t.notListedLinked}
            </Link>{" "}
            {t.notListedB}
          </p>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
