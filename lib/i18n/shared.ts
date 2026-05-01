import type { Locale } from "./types";

/**
 * Strings used across multiple sections — call CTAs, common labels.
 * Keep this file tight; section-specific copy lives next to its component.
 */
export const SHARED = {
  en: {
    cta: {
      callToTest: "Call to test it",
      callToTestLive: "Call to test it live",
      callToHearLive: "Call to hear it live",
      callToTry: "Call to try it",
      callShort: "Call to test",
    },
    eyebrow: {
      capabilities: "Capabilities",
      mostPopular: "Most popular",
      mostAsked: "Most asked",
      channel: "Channel",
    },
    common: {
      perMonth: "/mo",
      year: "year",
      month: "month",
      learnMore: "Learn more",
      readPlaybook: "Read playbook",
      browse: "Browse",
      cancelAnytime: "Cancel anytime",
      noCreditCard: "No credit card required",
      onlineNow: "Online now",
      replies: "Replies usually within a few hours",
    },
  },
  pt: {
    cta: {
      callToTest: "Ligue para testar",
      callToTestLive: "Ligue e teste ao vivo",
      callToHearLive: "Ligue e ouça ao vivo",
      callToTry: "Ligue e experimente",
      callShort: "Ligue para testar",
    },
    eyebrow: {
      capabilities: "Recursos",
      mostPopular: "Mais escolhido",
      mostAsked: "Mais perguntado",
      channel: "Canal",
    },
    common: {
      perMonth: "/mês",
      year: "ano",
      month: "mês",
      learnMore: "Saiba mais",
      readPlaybook: "Ler o guia",
      browse: "Explorar",
      cancelAnytime: "Cancele quando quiser",
      noCreditCard: "Sem cartão de crédito",
      onlineNow: "Online agora",
      replies: "Resposta em poucas horas",
    },
  },
} as const satisfies Record<Locale, unknown>;

export type SharedDict = typeof SHARED.en;

export function shared(locale: Locale): SharedDict {
  return SHARED[locale] as SharedDict;
}
