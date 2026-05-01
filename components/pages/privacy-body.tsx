import { LegalPage, type LegalSection } from "@/components/legal-page";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "Legal",
    titleA: "Privacy",
    titleEm: "policy",
    titleSuffix: ".",
    sub: "What we collect, how we use it, and the choices you have.",
    lastUpdated: "May 1, 2026",
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: (
          <>
            <p>
              Hellow is a service operated by <strong>CEL EDUCATION LLC</strong>,
              a Delaware limited liability company with its registered office at{" "}
              <strong>8 The Green, Suite A, Dover, DE 19901</strong> ("CEL
              Education", "Hellow", "we", "us"). We provide AI-powered receptionist
              services for local businesses. This Privacy Policy explains what
              information we collect, how we use it, and the choices available to you.
            </p>
            <p>
              This policy covers our website, marketing tools, customer dashboard,
              and the AI services that answer calls, chats, and DMs on behalf of
              our customers.
            </p>
          </>
        ),
      },
      {
        id: "information",
        title: "Information we collect",
        body: (
          <>
            <p>We collect three categories of information:</p>
            <ul>
              <li>
                <strong>Account information.</strong> Name, business name, email,
                billing details, and configuration choices you provide when setting
                up Hellow.
              </li>
              <li>
                <strong>Conversation data.</strong> Audio, transcripts, chat
                messages, phone numbers, and metadata generated when Hellow handles
                calls, chats, or DMs on your behalf.
              </li>
              <li>
                <strong>Usage data.</strong> Logs, device and browser information,
                cookies, and analytics events from our website and dashboard.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "use",
        title: "How we use information",
        body: (
          <>
            <p>We use information to:</p>
            <ul>
              <li>Operate, maintain, and improve the Hellow service.</li>
              <li>
                Provide AI receptionist features — answering calls, booking
                appointments, and capturing leads on your behalf.
              </li>
              <li>Send service updates, billing information, and security alerts.</li>
              <li>Investigate and prevent fraud, abuse, and security incidents.</li>
            </ul>
            <p>
              We do not train our underlying AI models on your customers'
              conversations, and we do not sell personal information.
            </p>
          </>
        ),
      },
      {
        id: "sharing",
        title: "Sharing & subprocessors",
        body: (
          <>
            <p>
              We share data with vetted subprocessors strictly to operate the
              service (e.g. cloud hosting, telephony, calendar APIs, payment
              processing). A current list of subprocessors is available upon
              request.
            </p>
            <p>
              We may disclose information when required by law, to enforce our
              terms, or to protect rights, property, and safety.
            </p>
          </>
        ),
      },
      {
        id: "retention",
        title: "Data retention",
        body: (
          <>
            <p>
              Conversation data is retained for the duration of your subscription
              and deleted within 30 days of termination, unless you request earlier
              deletion or longer retention is required by law.
            </p>
            <p>
              Account and billing information is retained as required for tax,
              accounting, and contractual obligations.
            </p>
          </>
        ),
      },
      {
        id: "rights",
        title: "Your rights",
        body: (
          <>
            <p>
              Depending on your location, you may have the right to access,
              correct, delete, or export your personal information; to object to
              or restrict processing; and to lodge a complaint with a supervisory
              authority.
            </p>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@hellow.ai">privacy@hellow.ai</a>.
            </p>
          </>
        ),
      },
      {
        id: "security",
        title: "Security",
        body: (
          <p>
            We employ industry-standard administrative, technical, and physical
            safeguards — including encryption in transit and at rest, role-based
            access controls, and SOC 2 Type II controls. Read more on our{" "}
            <a href="/security">Security</a> page.
          </p>
        ),
      },
      {
        id: "contact",
        title: "Contact",
        body: (
          <p>
            Questions or requests about this policy can be sent to{" "}
            <a href="mailto:privacy@hellow.ai">privacy@hellow.ai</a> or to the
            mailing address on our <a href="/contact">contact page</a>.
          </p>
        ),
      },
    ] satisfies LegalSection[],
  },
  pt: {
    eyebrow: "Legal",
    titleA: "Política de",
    titleEm: "privacidade",
    titleSuffix: ".",
    sub: "O que coletamos, como usamos e quais escolhas você tem.",
    lastUpdated: "1 de maio de 2026",
    sections: [
      {
        id: "overview",
        title: "Visão geral",
        body: (
          <>
            <p>
              A Hellow é um serviço operado pela <strong>CEL EDUCATION LLC</strong>,
              uma sociedade limitada (LLC) de Delaware com sede em{" "}
              <strong>8 The Green, Suite A, Dover, DE 19901</strong> ("CEL
              Education", "Hellow", "nós"). Oferecemos serviços de recepção por
              IA para negócios locais. Esta Política de Privacidade explica que
              informações coletamos, como as usamos e as escolhas disponíveis a
              você.
            </p>
            <p>
              Esta política cobre nosso site, ferramentas de marketing, painel do
              cliente e os serviços de IA que atendem ligações, chats e DMs em
              nome dos nossos clientes.
            </p>
          </>
        ),
      },
      {
        id: "information",
        title: "Informações que coletamos",
        body: (
          <>
            <p>Coletamos três categorias de informação:</p>
            <ul>
              <li>
                <strong>Informações de conta.</strong> Nome, nome do negócio,
                e-mail, dados de cobrança e configurações que você fornece ao
                configurar a Hellow.
              </li>
              <li>
                <strong>Dados de conversa.</strong> Áudio, transcrições, mensagens
                de chat, números de telefone e metadados gerados quando a Hellow
                atende ligações, chats ou DMs em seu nome.
              </li>
              <li>
                <strong>Dados de uso.</strong> Logs, informações de dispositivo
                e navegador, cookies e eventos de analytics do nosso site e
                painel.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "use",
        title: "Como usamos as informações",
        body: (
          <>
            <p>Usamos as informações para:</p>
            <ul>
              <li>Operar, manter e melhorar o serviço Hellow.</li>
              <li>
                Fornecer os recursos de recepcionista de IA — atender ligações,
                agendar e capturar leads em seu nome.
              </li>
              <li>
                Enviar atualizações de serviço, informações de cobrança e alertas
                de segurança.
              </li>
              <li>
                Investigar e prevenir fraude, abuso e incidentes de segurança.
              </li>
            </ul>
            <p>
              Não treinamos nossos modelos de IA com as conversas dos seus
              clientes, e não vendemos informação pessoal.
            </p>
          </>
        ),
      },
      {
        id: "sharing",
        title: "Compartilhamento e subprocessadores",
        body: (
          <>
            <p>
              Compartilhamos dados com subprocessadores avaliados estritamente
              para operar o serviço (por exemplo, hospedagem em nuvem, telefonia,
              APIs de calendário, processamento de pagamento). A lista atual de
              subprocessadores está disponível mediante solicitação.
            </p>
            <p>
              Podemos divulgar informações quando exigido por lei, para aplicar
              nossos termos ou para proteger direitos, propriedade e segurança.
            </p>
          </>
        ),
      },
      {
        id: "retention",
        title: "Retenção de dados",
        body: (
          <>
            <p>
              Dados de conversa são retidos pelo período da sua assinatura e
              excluídos em até 30 dias após o término, a menos que você solicite
              exclusão antecipada ou que retenção mais longa seja exigida por lei.
            </p>
            <p>
              Informações de conta e cobrança são retidas conforme exigido por
              obrigações fiscais, contábeis e contratuais.
            </p>
          </>
        ),
      },
      {
        id: "rights",
        title: "Seus direitos",
        body: (
          <>
            <p>
              Dependendo da sua localização, você pode ter o direito de acessar,
              corrigir, excluir ou exportar suas informações pessoais; de se opor
              ou restringir o tratamento; e de apresentar reclamação a uma
              autoridade supervisora.
            </p>
            <p>
              Para exercer esses direitos, entre em contato em{" "}
              <a href="mailto:privacy@hellow.ai">privacy@hellow.ai</a>.
            </p>
          </>
        ),
      },
      {
        id: "security",
        title: "Segurança",
        body: (
          <p>
            Empregamos salvaguardas administrativas, técnicas e físicas padrão de
            mercado — incluindo criptografia em trânsito e em repouso, controles
            de acesso baseados em papel e controles SOC 2 Tipo II. Leia mais na
            nossa página de <a href="/br/security">Segurança</a>.
          </p>
        ),
      },
      {
        id: "contact",
        title: "Contato",
        body: (
          <p>
            Dúvidas ou solicitações sobre esta política podem ser enviadas para{" "}
            <a href="mailto:privacy@hellow.ai">privacy@hellow.ai</a> ou para o
            endereço da nossa <a href="/br/contact">página de contato</a>.
          </p>
        ),
      },
    ] satisfies LegalSection[],
  },
} as const;

export function PrivacyBody({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <LegalPage
      locale={locale}
      eyebrow={t.eyebrow}
      title={
        <>
          {t.titleA}{" "}
          <span className="font-display-italic text-coral-600">{t.titleEm}</span>
          {t.titleSuffix}
        </>
      }
      subtitle={t.sub}
      lastUpdated={t.lastUpdated}
      sections={t.sections}
    />
  );
}
