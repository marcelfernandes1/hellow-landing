"use client";

import { useEffect } from "react";
import { HTML_LANG, type Locale } from "@/lib/i18n/types";

/**
 * Updates <html lang="..."> to match the page's locale, since the root layout
 * is shared between locales. Renders nothing.
 */
export function LangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = HTML_LANG[locale];
    }
  }, [locale]);
  return null;
}
