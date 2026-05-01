import { LegalPage, type LegalSection } from "@/components/legal-page";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "Legal",
    titleA: "Data Processing",
    titleEm: "Agreement",
    titleSuffix: ".",
    sub: "How Hellow processes personal data on behalf of our customers.",
    lastUpdated: "May 1, 2026",
    sections: [
      {
        id: "scope",
        title: "Scope & roles",
        body: (
          <>
            <p>
              This Data Processing Agreement ("DPA") is entered into between
              the Customer and <strong>CEL EDUCATION LLC</strong>, a Delaware
              limited liability company with its registered office at{" "}
              <strong>8 The Green, Suite A, Dover, DE 19901</strong>, which
              operates the Hellow service ("CEL Education", "Hellow", "we",
              "us"). It governs our processing of Personal Data on behalf of
              the Customer in connection with the services described in the
              underlying Subscription Agreement ("Order").
            </p>
            <p>
              For the purposes of applicable data-protection laws (including
              the GDPR and the CCPA), Customer is the "Controller" and CEL
              Education is the "Processor".
            </p>
          </>
        ),
      },
      {
        id: "subject",
        title: "Subject matter & duration",
        body: (
          <p>
            Hellow processes Personal Data only for the duration of the Order
            and only to deliver the services. Categories of data subjects
            include the Customer's end-customers and authorized users of the
            Customer's account; categories of Personal Data include contact
            details, voice recordings, transcripts, conversation metadata, and
            scheduling information.
          </p>
        ),
      },
      {
        id: "instructions",
        title: "Customer instructions",
        body: (
          <p>
            Hellow processes Personal Data only on documented instructions from
            Customer, as set out in the Order, this DPA, and any subsequent
            instructions Customer provides through the dashboard or in writing.
            Hellow will inform Customer if it believes an instruction conflicts
            with applicable law.
          </p>
        ),
      },
      {
        id: "subprocessors",
        title: "Subprocessors",
        body: (
          <>
            <p>
              Hellow may engage subprocessors to deliver the services. A
              current list is available at{" "}
              <a href="mailto:privacy@hellow.ai">privacy@hellow.ai</a>. Hellow
              imposes data-protection obligations on subprocessors that are no
              less protective than those in this DPA and remains liable for
              their performance.
            </p>
            <p>
              Hellow will provide reasonable advance notice of new
              subprocessors; Customer may object on reasonable grounds within
              14 days of notice.
            </p>
          </>
        ),
      },
      {
        id: "security",
        title: "Security measures",
        body: (
          <p>
            Hellow implements and maintains appropriate technical and
            organizational measures to protect Personal Data against
            unauthorized or unlawful processing and against accidental loss,
            destruction, or damage. A description of these measures is
            available on our <a href="/security">Security page</a> and in our
            SOC 2 report.
          </p>
        ),
      },
      {
        id: "transfers",
        title: "International transfers",
        body: (
          <p>
            Where Personal Data is transferred from the EEA, UK, or Switzerland
            to a country not deemed adequate by the European Commission, Hellow
            relies on the Standard Contractual Clauses (SCCs) and/or the UK
            International Data Transfer Addendum, which are incorporated into
            this DPA by reference and take precedence in the event of conflict.
          </p>
        ),
      },
      {
        id: "rights",
        title: "Data subject requests",
        body: (
          <p>
            Hellow will provide commercially reasonable assistance to enable
            Customer to fulfil requests from data subjects exercising their
            rights under applicable law (access, correction, deletion,
            portability, objection).
          </p>
        ),
      },
      {
        id: "breach",
        title: "Breach notification",
        body: (
          <p>
            Hellow will notify Customer without undue delay after becoming
            aware of a Personal Data Breach, and provide information reasonably
            required for Customer to comply with its own breach-notification
            obligations.
          </p>
        ),
      },
      {
        id: "audits",
        title: "Audits",
        body: (
          <p>
            Hellow will make available to Customer its current SOC 2 Type II
            report and Trust Pack on request and under NDA. Additional audits
            may be conducted under the conditions described in the Order.
          </p>
        ),
      },
      {
        id: "deletion",
        title: "Return & deletion",
        body: (
          <p>
            Upon termination of the Order, Hellow will delete or return all
            Personal Data within 30 days, except where retention is required
            by applicable law.
          </p>
        ),
      },
    ] satisfies LegalSection[],
  },
  pt: {
    eyebrow: "Legal",
    titleA: "Acordo de Processamento de",
    titleEm: "Dados",
    titleSuffix: ".",
    sub: "Como a Hellow processa dados pessoais em nome dos nossos clientes.",
    lastUpdated: "1 de maio de 2026",
    sections: [
      {
        id: "scope",
        title: "Escopo e papéis",
        body: (
          <>
            <p>
              Este Acordo de Processamento de Dados ("DPA") é firmado entre o
              Cliente e a <strong>CEL EDUCATION LLC</strong>, uma sociedade
              limitada (LLC) de Delaware com sede em{" "}
              <strong>8 The Green, Suite A, Dover, DE 19901</strong>, que opera
              o serviço Hellow ("CEL Education", "Hellow", "nós"). Ele rege o
              tratamento de Dados Pessoais em nome do Cliente em conexão com
              os serviços descritos no Acordo de Assinatura subjacente
              ("Pedido").
            </p>
            <p>
              Para fins das leis de proteção de dados aplicáveis (incluindo o
              GDPR e a CCPA), o Cliente é o "Controlador" e a CEL Education é
              o "Operador".
            </p>
          </>
        ),
      },
      {
        id: "subject",
        title: "Objeto e duração",
        body: (
          <p>
            A Hellow trata Dados Pessoais apenas durante a vigência do Pedido
            e apenas para prestar os serviços. Categorias de titulares incluem
            os clientes finais do Cliente e usuários autorizados da conta;
            categorias de Dados Pessoais incluem dados de contato, gravações
            de voz, transcrições, metadados de conversa e informações de
            agendamento.
          </p>
        ),
      },
      {
        id: "instructions",
        title: "Instruções do Cliente",
        body: (
          <p>
            A Hellow trata Dados Pessoais apenas com base em instruções
            documentadas do Cliente, conforme estabelecidas no Pedido, neste
            DPA e em quaisquer instruções subsequentes fornecidas pelo Cliente
            via painel ou por escrito. Informaremos o Cliente se entendermos
            que uma instrução conflita com a lei aplicável.
          </p>
        ),
      },
      {
        id: "subprocessors",
        title: "Subprocessadores",
        body: (
          <>
            <p>
              A Hellow pode contratar subprocessadores para prestar os
              serviços. Uma lista atual está disponível em{" "}
              <a href="mailto:privacy@hellow.ai">privacy@hellow.ai</a>. A
              Hellow impõe aos subprocessadores obrigações de proteção de
              dados não menos protetivas do que as previstas neste DPA e
              permanece responsável por seu desempenho.
            </p>
            <p>
              A Hellow fornecerá aviso prévio razoável sobre novos
              subprocessadores; o Cliente pode se opor por motivos razoáveis em
              até 14 dias após o aviso.
            </p>
          </>
        ),
      },
      {
        id: "security",
        title: "Medidas de segurança",
        body: (
          <p>
            A Hellow implementa e mantém medidas técnicas e organizacionais
            apropriadas para proteger os Dados Pessoais contra tratamento não
            autorizado ou ilícito e contra perda, destruição ou dano
            acidentais. Uma descrição dessas medidas está disponível na nossa{" "}
            <a href="/br/security">página de Segurança</a> e no nosso
            relatório SOC 2.
          </p>
        ),
      },
      {
        id: "transfers",
        title: "Transferências internacionais",
        body: (
          <p>
            Quando Dados Pessoais forem transferidos do EEE, Reino Unido ou
            Suíça para um país não considerado adequado pela Comissão
            Europeia, a Hellow se baseia nas Cláusulas Contratuais Padrão
            (SCCs) e/ou no Adendo de Transferência de Dados Internacional do
            Reino Unido, que ficam incorporados a este DPA por referência e
            prevalecem em caso de conflito.
          </p>
        ),
      },
      {
        id: "rights",
        title: "Pedidos de titulares",
        body: (
          <p>
            A Hellow fornecerá assistência comercialmente razoável para
            permitir que o Cliente atenda a pedidos de titulares de dados que
            exerçam seus direitos sob a lei aplicável (acesso, correção,
            exclusão, portabilidade, oposição).
          </p>
        ),
      },
      {
        id: "breach",
        title: "Notificação de incidentes",
        body: (
          <p>
            A Hellow notificará o Cliente sem atraso indevido após tomar
            conhecimento de uma Violação de Dados Pessoais e fornecerá as
            informações razoavelmente necessárias para que o Cliente cumpra
            suas próprias obrigações de notificação.
          </p>
        ),
      },
      {
        id: "audits",
        title: "Auditorias",
        body: (
          <p>
            A Hellow disponibilizará ao Cliente seu relatório SOC 2 Tipo II
            atual e o Trust Pack mediante solicitação e sob NDA. Auditorias
            adicionais podem ser realizadas nas condições descritas no Pedido.
          </p>
        ),
      },
      {
        id: "deletion",
        title: "Devolução e exclusão",
        body: (
          <p>
            Após o término do Pedido, a Hellow excluirá ou devolverá todos os
            Dados Pessoais em até 30 dias, exceto quando a retenção for
            exigida pela lei aplicável.
          </p>
        ),
      },
    ] satisfies LegalSection[],
  },
} as const;

export function DPABody({ locale }: { locale: Locale }) {
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
