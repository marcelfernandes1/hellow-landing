import Link from "next/link";
import {
  Eye,
  KeyRound,
  Lock,
  Network,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CTAStrip } from "@/components/cta-strip";
import { localePath } from "@/lib/i18n/utils";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "Security",
    titleA: "Trust, built into",
    titleEm: "every layer",
    titleSuffix: ".",
    sub: "Hellow handles real customer conversations. We treat that responsibility with the same rigor enterprise teams expect — and explain it in language a small business owner can verify.",
    practicesEyebrow: "Operations",
    practicesHeadline: "The practices behind the program.",
    trustTitle: "Need our trust pack?",
    trustBody:
      "We provide a current SOC 2 Type II report, security questionnaire (CAIQ), data-processing agreement, and architecture overview under NDA.",
    trustCta: "Request trust pack",
    dpaCta: "Read DPA",
    commitments: [
      { title: "SOC 2 Type II", body: "Independently audited every year against the AICPA Trust Services Criteria for Security, Availability, and Confidentiality." },
      { title: "Encryption everywhere", body: "TLS 1.2+ in transit. AES-256 at rest. Per-tenant key isolation for sensitive customer data." },
      { title: "HIPAA-eligible", body: "Available on Omnichannel plans with a signed Business Associate Agreement. Designed for medical and dental practices." },
      { title: "Role-based access", body: "Least-privilege access controls, hardware-backed MFA, and audit logging for every administrative action." },
      { title: "US data residency", body: "Customer conversation data stored and processed exclusively in US-based regions of our cloud provider." },
      { title: "Privacy by default", body: "We don't train our underlying models on your customers' conversations. We don't sell personal information. Ever." },
    ],
    practices: [
      { title: "Vendor & subprocessor management", body: "All subprocessors are contractually bound to security and privacy obligations no less protective than our own. A current list is available upon request." },
      { title: "Vulnerability management", body: "Continuous dependency scanning, quarterly third-party penetration tests, and a public coordinated-disclosure policy for security researchers." },
      { title: "Incident response", body: "Documented incident-response runbook with on-call rotations 24/7. Material incidents are communicated within the timelines required by applicable law." },
      { title: "Business continuity", body: "Multi-region failover for critical services. Database point-in-time recovery. Tested annually." },
    ],
  },
  pt: {
    eyebrow: "Segurança",
    titleA: "Confiança, em",
    titleEm: "cada camada",
    titleSuffix: ".",
    sub: "A Hellow lida com conversas reais dos seus clientes. A gente trata essa responsabilidade com o mesmo rigor que times enterprise esperam — e explica em uma linguagem que dono de pequeno negócio consegue verificar.",
    practicesEyebrow: "Operações",
    practicesHeadline: "As práticas por trás do programa.",
    trustTitle: "Precisa do nosso trust pack?",
    trustBody:
      "Fornecemos relatório SOC 2 Tipo II atual, questionário de segurança (CAIQ), acordo de processamento de dados e visão geral de arquitetura sob NDA.",
    trustCta: "Solicitar trust pack",
    dpaCta: "Ler DPA",
    commitments: [
      { title: "SOC 2 Tipo II", body: "Auditado anualmente, de forma independente, contra os critérios AICPA Trust Services para Segurança, Disponibilidade e Confidencialidade." },
      { title: "Criptografia em todo lugar", body: "TLS 1.2+ em trânsito. AES-256 em repouso. Isolamento de chave por tenant para dados sensíveis." },
      { title: "Elegível a HIPAA", body: "Disponível nos planos Omnichannel com Business Associate Agreement assinado. Pensado para clínicas médicas e odontológicas." },
      { title: "Acesso por papel (RBAC)", body: "Controles de acesso de menor privilégio, MFA com hardware key e log de auditoria em cada ação administrativa." },
      { title: "Residência de dados nos EUA", body: "Dados de conversa do cliente armazenados e processados exclusivamente em regiões dos EUA do nosso provedor de nuvem." },
      { title: "Privacidade por padrão", body: "Não treinamos nossos modelos com as conversas dos seus clientes. Não vendemos informação pessoal. Nunca." },
    ],
    practices: [
      { title: "Gestão de fornecedores e subprocessadores", body: "Todos os subprocessadores são contratualmente obrigados a obrigações de segurança e privacidade não menos protetivas que as nossas. Lista atual disponível mediante solicitação." },
      { title: "Gestão de vulnerabilidades", body: "Scan contínuo de dependências, pentests trimestrais por terceiros e política pública de divulgação coordenada para pesquisadores de segurança." },
      { title: "Resposta a incidentes", body: "Runbook de resposta documentado, com plantão 24/7. Incidentes materiais são comunicados dentro dos prazos exigidos por lei aplicável." },
      { title: "Continuidade de negócios", body: "Failover multi-região para serviços críticos. Recuperação point-in-time do banco. Testado anualmente." },
    ],
  },
} as const satisfies Record<Locale, unknown>;

const COMMITMENT_ICONS = [ShieldCheck, Lock, KeyRound, UserCog, Network, Eye];

export function SecurityBody({ locale }: { locale: Locale }) {
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
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
            {t.commitments.map((c, i) => {
              const Icon = COMMITMENT_ICONS[i]!;
              return (
                <li key={c.title} className="bg-bg p-7 sm:p-8">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-coral-50 text-coral-600 ring-1 ring-coral-100">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                    {c.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-bg-soft py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-eyebrow font-semibold uppercase text-coral-600">
                {t.practicesEyebrow}
              </p>
              <h2 className="mt-3 font-display text-display-md font-medium text-balance text-ink">
                {t.practicesHeadline}
              </h2>
            </div>
            <ul className="space-y-4 lg:col-span-8">
              {t.practices.map((p) => (
                <li
                  key={p.title}
                  className="rounded-3xl border border-line bg-bg p-7"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-bg py-20">
        <div className="container">
          <div className="rounded-3xl border border-line bg-bg-soft p-8 sm:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-display-md font-medium tracking-tight text-ink">
                  {t.trustTitle}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-muted text-pretty">
                  {t.trustBody}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href="mailto:security@hellow.ai"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-bg shadow-soft transition-colors hover:bg-ink-soft"
                >
                  {t.trustCta}
                </a>
                <Link
                  href={localePath(locale, "/dpa")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-bg px-6 py-3.5 font-medium text-ink transition-colors hover:border-ink"
                >
                  {t.dpaCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
