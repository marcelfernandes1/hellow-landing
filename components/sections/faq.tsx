"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";

type Item = {
  q: string;
  a: React.ReactNode;
  featured?: boolean;
};

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    headline: string;
    sub: string;
    mostAsked: string;
    items: Item[];
  }
> = {
  en: {
    eyebrow: "Frequently asked",
    headline: "Answers, before you ask.",
    sub: "Still have questions? The fastest answer is to call Hellow directly — it can tell you about itself, and our team is on the line if you need them.",
    mostAsked: "Most asked",
    items: [
      {
        q: "Will my customers know they're talking to AI?",
        featured: true,
        a: (
          <>
            Most won't. A 2025 University of Michigan study found that{" "}
            <strong>71% of callers can't tell modern voice AI from a human</strong>.
            Hellow uses natural-sounding voices, contextual responses, and your
            business's own personality — and we're transparent: if a caller asks
            directly, Hellow will tell them.
          </>
        ),
      },
      {
        q: "How long does setup take?",
        a: "Most businesses are live in under 10 minutes. You forward your existing number (or port it for free), share your hours, services, and FAQs, and Hellow is answering by lunch.",
      },
      {
        q: "What happens if Hellow can't answer something?",
        a: "Hellow handles ~90–95% of calls end-to-end. For anything outside its scope — emergencies, complex disputes, VIP clients — it routes the call to you instantly with a transcript and full context, so you pick up already knowing the situation.",
      },
      {
        q: "How good is the call quality?",
        a: "Studio-grade. Hellow runs on the same low-latency telephony infrastructure used by Fortune 500 contact centers, with sub-300ms response times. Callers don't experience that 'robot' lag.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. No annual lock-in, no cancellation fees, no penalty.",
      },
      {
        q: "What integrations do you support?",
        a: "Google Calendar, Outlook, HubSpot, Salesforce, Pipedrive, Jobber, Housecall Pro, Acuity, Calendly, and Zapier (which connects to 6,000+ more). Custom webhooks available on Scale plans.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. SOC 2 Type II, HIPAA-eligible (Omnichannel plan), end-to-end encryption, and US-based data residency. We don't train models on your call data.",
      },
    ],
  },
  pt: {
    eyebrow: "Perguntas frequentes",
    headline: "Respostas, antes de você perguntar.",
    sub: "Ainda tem dúvida? O caminho mais rápido é ligar direto para a Hellow — ela mesma fala sobre si, e nosso time está na linha se precisar.",
    mostAsked: "Mais perguntada",
    items: [
      {
        q: "Os meus clientes vão perceber que estão falando com IA?",
        featured: true,
        a: (
          <>
            A maioria não percebe. Um estudo da University of Michigan, de 2025,
            mostrou que{" "}
            <strong>
              71% das pessoas não conseguem distinguir IA de voz moderna de um
              humano
            </strong>
            . A Hellow usa vozes naturais, respostas contextuais e a personalidade
            do seu negócio — e somos transparentes: se a pessoa perguntar
            diretamente, a Hellow conta.
          </>
        ),
      },
      {
        q: "Quanto tempo leva para colocar no ar?",
        a: "A maioria dos negócios fica ao vivo em menos de 10 minutos. Você redireciona o número (ou faz portabilidade gratuita), compartilha horários, serviços e perguntas frequentes — e na hora do almoço a Hellow já está atendendo.",
      },
      {
        q: "E se a Hellow não souber responder alguma coisa?",
        a: "A Hellow resolve cerca de 90–95% das ligações do começo ao fim. Para o que está fora do escopo — emergências, disputas complexas, clientes VIP — ela transfere a ligação para você na hora, com transcrição e contexto completo, para você atender já sabendo o que está rolando.",
      },
      {
        q: "Como é a qualidade da ligação?",
        a: "Qualidade de estúdio. A Hellow roda na mesma infraestrutura de telefonia de baixa latência usada pelos contact centers das Fortune 500, com tempo de resposta abaixo de 300ms. Sem aquele atraso de robô.",
      },
      {
        q: "Posso cancelar quando quiser?",
        a: "Sim. Sem fidelidade anual, sem multa de cancelamento, sem penalidade.",
      },
      {
        q: "Quais integrações vocês têm?",
        a: "Google Agenda, Outlook, HubSpot, Salesforce, Pipedrive, Jobber, Housecall Pro, Acuity, Calendly e Zapier (que conecta a mais de 6.000 apps). Webhooks personalizados disponíveis em planos avançados.",
      },
      {
        q: "Meus dados estão seguros?",
        a: "Sim. SOC 2 Tipo II, elegível para HIPAA (no plano Omnichannel), criptografia ponta a ponta e residência de dados nos EUA. Não treinamos modelos com os dados das suas ligações.",
      },
    ],
  },
};

export function FAQ() {
  const locale = useLocale();
  const t = COPY[locale];

  return (
    <section id="faq" className="relative bg-bg py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-eyebrow font-semibold uppercase text-coral-600">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
              {t.headline}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted text-pretty">
              {t.sub}
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="border-t border-line"
            >
              {t.items.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>
                    {item.featured ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="rounded-full bg-coral-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-coral-700">
                          {t.mostAsked}
                        </span>
                        <span>{item.q}</span>
                      </span>
                    ) : (
                      item.q
                    )}
                  </AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
