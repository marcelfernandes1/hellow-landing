export const LOCALES = ["en", "pt"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
};
