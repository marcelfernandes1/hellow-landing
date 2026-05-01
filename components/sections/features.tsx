"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarClock,
  Facebook,
  FileText,
  Inbox,
  Instagram,
  Languages,
  MessageCircle,
  MessageSquareText,
  Phone,
  UserPlus,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { localePath } from "@/lib/i18n/utils";
import type { Locale } from "@/lib/i18n/types";

const COPY = {
  en: {
    eyebrow: "Capabilities",
    headlineA: "Everywhere customers reach you.",
    headlineEm: "Every conversation, captured.",
    sub: "Phone, website, Instagram, Facebook — one AI brain, one unified inbox, every booking landed. Built for the way local businesses actually win customers.",
    channelTag: "Channel",
    pillBefore: "All four channels included on the",
    pillLink: "Omnichannel plan",
    pillAfter: ".",
    features: [
      { title: "24/7 phone answering", body: "Mornings, evenings, weekends, holidays. Hellow picks up when you can't.", channel: true },
      { title: "Website chat widget", body: "Drop one snippet on your site. Hellow answers questions and books visitors instantly.", channel: true },
      { title: "Instagram + Facebook DMs", body: "Reply to every DM the moment it arrives — no more buried inboxes or lost leads.", channel: true },
      { title: "Smart appointment booking", body: "Two-way Google Calendar and Outlook sync. Hellow checks availability and books in real time." },
      { title: "Lead capture & CRM sync", body: "Every contact saved with name, number, intent, and full transcript. Pushes to your CRM automatically." },
      { title: "Real-time transcripts", body: "Every conversation transcribed and searchable. Quality assurance, training, and proof — built in." },
      { title: "Unified omnichannel inbox", body: "Phone, web, IG, and FB conversations land in one place — no app-hopping, no missed threads." },
      { title: "SMS follow-up", body: "Confirmations, reminders, reschedule links — sent automatically the moment a conversation ends." },
      { title: "Multi-language", body: "Answers in English, Spanish, and Portuguese. Switches seamlessly mid-conversation when the customer does." },
    ],
  },
  pt: {
    eyebrow: "Recursos",
    headlineA: "Em todo lugar onde o cliente procura você.",
    headlineEm: "Cada conversa, capturada.",
    sub: "Telefone, site, Instagram, Facebook — um único cérebro de IA, uma caixa de entrada unificada, todo agendamento concluído. Feito para o jeito como negócios locais conquistam clientes de verdade.",
    channelTag: "Canal",
    pillBefore: "Todos os quatro canais inclusos no",
    pillLink: "plano Omnichannel",
    pillAfter: ".",
    features: [
      { title: "Atendimento telefônico 24/7", body: "De manhã, à noite, fim de semana, feriado. A Hellow atende quando você não pode.", channel: true },
      { title: "Chat no site", body: "Cole um trecho no seu site. A Hellow responde dúvidas e agenda visitantes na hora.", channel: true },
      { title: "DMs do Instagram e Facebook", body: "Responda toda mensagem no instante em que chegar — sem caixa de entrada esquecida nem lead perdido.", channel: true },
      { title: "Agendamento inteligente", body: "Sincronização de mão dupla com Google Agenda e Outlook. A Hellow checa disponibilidade e agenda em tempo real." },
      { title: "Captura de leads + CRM", body: "Todo contato salvo com nome, telefone, intenção e transcrição completa. Vai pro seu CRM automaticamente." },
      { title: "Transcrições em tempo real", body: "Toda conversa transcrita e pesquisável. QA, treinamento e prova — embutidos no produto." },
      { title: "Caixa de entrada unificada", body: "Conversas de telefone, web, IG e FB em um só lugar — sem ficar pulando de app, sem mensagem perdida." },
      { title: "Follow-up por SMS", body: "Confirmações, lembretes, links para remarcação — enviados automaticamente assim que a conversa termina." },
      { title: "Multi-idioma", body: "Atende em inglês, espanhol e português. Troca de idioma no meio da conversa, junto com o cliente." },
    ],
  },
} as const satisfies Record<Locale, unknown>;

const ICONS = [
  Phone,
  MessageCircle,
  Instagram,
  CalendarClock,
  UserPlus,
  FileText,
  Inbox,
  MessageSquareText,
  Languages,
];

export function Features() {
  const locale = useLocale();
  const t = COPY[locale];

  return (
    <section id="features" className="relative bg-bg-soft py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-eyebrow font-semibold uppercase text-coral-600">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-display-lg font-medium text-balance text-ink">
              {t.headlineA}{" "}
              <span className="font-display-italic text-coral-600">
                {t.headlineEm}
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink-muted lg:col-span-5 text-pretty">
            {t.sub}
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((f, i) => {
            const Icon = ICONS[i]!;
            return (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
                className="group relative flex flex-col gap-4 bg-bg p-8 transition-colors duration-300 hover:bg-coral-50/50 sm:p-9"
              >
                {"channel" in f && f.channel && (
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-coral-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-coral-700 ring-1 ring-coral-200">
                    {t.channelTag}
                  </span>
                )}
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-bg-soft text-ink ring-1 ring-line transition-all duration-300 group-hover:bg-coral-500 group-hover:text-white group-hover:ring-coral-500">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted text-pretty">
                    {f.body}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2 text-sm text-ink-muted">
          <Facebook className="h-4 w-4 text-coral-600" />
          <Instagram className="h-4 w-4 text-coral-600" />
          <MessageCircle className="h-4 w-4 text-coral-600" />
          <Phone className="h-4 w-4 text-coral-600" />
          <span className="ml-1">
            {t.pillBefore}{" "}
            <Link
              href={localePath(locale, "#pricing")}
              className="font-medium text-ink underline-offset-4 hover:underline"
            >
              {t.pillLink}
            </Link>
            {t.pillAfter}
          </span>
        </p>
      </div>
    </section>
  );
}
