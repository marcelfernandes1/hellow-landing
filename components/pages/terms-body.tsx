import { LegalPage, type LegalSection } from "@/components/legal-page";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "Legal",
    titleA: "Terms of",
    titleEm: "service",
    titleSuffix: ".",
    sub: "The agreement between you and Hellow.",
    lastUpdated: "May 1, 2026",
    sections: [
      {
        id: "agreement",
        title: "Agreement",
        body: (
          <>
            <p>
              These Terms of Service form an agreement between you and{" "}
              <strong>CEL EDUCATION LLC</strong>, a Delaware limited liability
              company with its registered office at{" "}
              <strong>8 The Green, Suite A, Dover, DE 19901</strong> ("CEL
              Education", "Hellow", "we", "us"), governing your access to and
              use of the Hellow service.
            </p>
            <p>
              By accessing or using Hellow, you agree to these Terms. If you're
              entering into this agreement on behalf of a company, you represent
              that you have the authority to bind that company.
            </p>
          </>
        ),
      },
      {
        id: "service",
        title: "The service",
        body: (
          <>
            <p>
              Hellow provides AI-powered receptionist services that answer
              calls, chats, and DMs on behalf of customers. The exact features
              available to you depend on your plan.
            </p>
            <p>
              We may modify, suspend, or discontinue features at any time. We'll
              give reasonable advance notice of material changes that affect
              paid plans.
            </p>
          </>
        ),
      },
      {
        id: "accounts",
        title: "Accounts & access",
        body: (
          <p>
            You are responsible for safeguarding your account credentials and
            for any activity that occurs under your account. Notify us
            immediately at{" "}
            <a href="mailto:security@hellow.ai">security@hellow.ai</a> if you
            suspect unauthorized access.
          </p>
        ),
      },
      {
        id: "fees",
        title: "Fees & payment",
        body: (
          <>
            <p>
              Fees are set out in your subscription plan and are billed in
              advance, either monthly or annually. Setup fees are charged once
              at the start of your engagement.
            </p>
            <p>
              Late payments may result in suspension. Fees are non-refundable
              except as required by law or as expressly stated in your order.
            </p>
          </>
        ),
      },
      {
        id: "acceptable-use",
        title: "Acceptable use",
        body: (
          <>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use Hellow for unlawful purposes or in violation of
                telemarketing, consumer-protection, or telecommunications
                regulations.
              </li>
              <li>
                Reverse-engineer, scrape, or attempt to bypass technical
                limitations of the service.
              </li>
              <li>
                Upload or transmit content that is unlawful, infringing,
                harmful, or abusive.
              </li>
              <li>
                Resell or sublicense the service without our prior written
                consent.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "data",
        title: "Customer data",
        body: (
          <p>
            You retain ownership of all data you and your customers provide
            through the service. Our use of that data is governed by our{" "}
            <a href="/privacy">Privacy Policy</a> and (where applicable) our{" "}
            <a href="/dpa">Data Processing Agreement</a>.
          </p>
        ),
      },
      {
        id: "termination",
        title: "Termination",
        body: (
          <p>
            Either party may terminate the agreement at any time. Upon
            termination, we'll deactivate your account and delete conversation
            data within 30 days, unless you've requested earlier deletion or
            longer retention is required by law.
          </p>
        ),
      },
      {
        id: "warranties",
        title: "Disclaimers & limitation of liability",
        body: (
          <>
            <p>
              Hellow is provided "as is" without warranties of any kind, except
              as expressly stated in this agreement. We don't warrant that the
              service will be uninterrupted, error-free, or perfectly accurate
              in every conversation.
            </p>
            <p>
              To the maximum extent permitted by law, our aggregate liability
              under this agreement will not exceed the fees paid by you in the
              twelve months preceding the claim.
            </p>
          </>
        ),
      },
      {
        id: "general",
        title: "General",
        body: (
          <p>
            These Terms are governed by the laws of the State of Delaware, USA,
            without regard to its conflict-of-laws principles. Disputes will be
            resolved exclusively in the state and federal courts located in the
            State of Delaware, and the parties consent to personal jurisdiction
            and venue therein. If any provision is held unenforceable, the rest
            will remain in effect.
          </p>
        ),
      },
    ] satisfies LegalSection[],
  },
  pt: {
    eyebrow: "Legal",
    titleA: "Termos de",
    titleEm: "serviço",
    titleSuffix: ".",
    sub: "O acordo entre você e a Hellow.",
    lastUpdated: "1 de maio de 2026",
    sections: [
      {
        id: "agreement",
        title: "Acordo",
        body: (
          <>
            <p>
              Estes Termos de Serviço formam um acordo entre você e a{" "}
              <strong>CEL EDUCATION LLC</strong>, uma sociedade limitada (LLC)
              de Delaware com sede em{" "}
              <strong>8 The Green, Suite A, Dover, DE 19901</strong> ("CEL
              Education", "Hellow", "nós"), regendo seu acesso e uso do serviço
              Hellow.
            </p>
            <p>
              Ao acessar ou usar a Hellow, você concorda com estes Termos. Se
              estiver firmando este acordo em nome de uma empresa, você declara
              ter autoridade para vincular essa empresa.
            </p>
          </>
        ),
      },
      {
        id: "service",
        title: "O serviço",
        body: (
          <>
            <p>
              A Hellow oferece serviços de recepcionista por IA que atendem
              ligações, chats e DMs em nome dos clientes. Os recursos
              disponíveis dependem do seu plano.
            </p>
            <p>
              Podemos modificar, suspender ou descontinuar recursos a qualquer
              momento. Avisaremos com antecedência razoável sobre mudanças
              materiais que afetem planos pagos.
            </p>
          </>
        ),
      },
      {
        id: "accounts",
        title: "Conta e acesso",
        body: (
          <p>
            Você é responsável por proteger suas credenciais de conta e por
            qualquer atividade que ocorra na sua conta. Avise-nos imediatamente
            em <a href="mailto:security@hellow.ai">security@hellow.ai</a> se
            suspeitar de acesso não autorizado.
          </p>
        ),
      },
      {
        id: "fees",
        title: "Valores e pagamento",
        body: (
          <>
            <p>
              Os valores estão definidos no seu plano de assinatura e são
              cobrados antecipadamente, mensal ou anualmente. As taxas de setup
              são cobradas uma única vez, no início do engajamento.
            </p>
            <p>
              Pagamentos em atraso podem resultar em suspensão. Os valores não
              são reembolsáveis, exceto quando exigido por lei ou expressamente
              indicado no seu pedido.
            </p>
          </>
        ),
      },
      {
        id: "acceptable-use",
        title: "Uso aceitável",
        body: (
          <>
            <p>Você concorda em não:</p>
            <ul>
              <li>
                Usar a Hellow para fins ilegais ou em violação de regulamentos
                de telemarketing, defesa do consumidor ou telecomunicações.
              </li>
              <li>
                Fazer engenharia reversa, raspagem ou tentar burlar limitações
                técnicas do serviço.
              </li>
              <li>
                Enviar ou transmitir conteúdo ilegal, que viole direitos,
                prejudicial ou abusivo.
              </li>
              <li>
                Revender ou sublicenciar o serviço sem nosso consentimento
                prévio por escrito.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "data",
        title: "Dados do cliente",
        body: (
          <p>
            Você mantém a propriedade de todos os dados que você e seus
            clientes fornecem pelo serviço. Nosso uso desses dados é regido
            pela nossa{" "}
            <a href="/br/privacy">Política de Privacidade</a> e (quando
            aplicável) pelo nosso{" "}
            <a href="/br/dpa">Acordo de Processamento de Dados</a>.
          </p>
        ),
      },
      {
        id: "termination",
        title: "Rescisão",
        body: (
          <p>
            Qualquer das partes pode rescindir o acordo a qualquer momento. Após
            a rescisão, desativaremos sua conta e excluiremos os dados de
            conversa em até 30 dias, a menos que você tenha solicitado exclusão
            antecipada ou retenção mais longa seja exigida por lei.
          </p>
        ),
      },
      {
        id: "warranties",
        title: "Isenções e limitação de responsabilidade",
        body: (
          <>
            <p>
              A Hellow é fornecida "como está", sem garantias de qualquer tipo,
              exceto conforme expressamente estabelecido neste acordo. Não
              garantimos que o serviço será ininterrupto, livre de erros ou
              perfeitamente preciso em todas as conversas.
            </p>
            <p>
              Na máxima extensão permitida por lei, nossa responsabilidade
              agregada sob este acordo não excederá os valores pagos por você
              nos doze meses anteriores à reclamação.
            </p>
          </>
        ),
      },
      {
        id: "general",
        title: "Geral",
        body: (
          <p>
            Estes Termos são regidos pelas leis do Estado de Delaware, EUA, sem
            considerar seus princípios de conflito de leis. Disputas serão
            resolvidas exclusivamente nos tribunais estaduais e federais
            localizados no Estado de Delaware, e as partes consentem com a
            jurisdição pessoal e foro lá. Se alguma disposição for considerada
            inexequível, as demais permanecerão em vigor.
          </p>
        ),
      },
    ] satisfies LegalSection[],
  },
} as const;

export function TermsBody({ locale }: { locale: Locale }) {
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
