import type { Locale } from "./types";

/**
 * Build a path scoped to the given locale.
 * - en: "/" | "/about" | "/#features"
 * - pt: "/br" | "/br/about" | "/br/#features"
 */
export function localePath(locale: Locale, path: string): string {
  // Allow callers to pass anchor-only paths (e.g. "#features") or full paths.
  if (path.startsWith("#")) {
    return locale === "pt" ? `/br${path}` : `/${path}`;
  }
  // Normalise leading slash.
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  if (locale === "pt") {
    if (trimmed === "/") return "/br";
    return `/br${trimmed}`;
  }
  return trimmed;
}

/**
 * Map a current pathname to the equivalent in the other locale, used by
 * the language switcher.
 */
export function switchLocaleHref(currentPath: string, target: Locale): string {
  const stripped = currentPath.replace(/^\/br(?=\/|$)/, "") || "/";
  if (target === "en") return stripped;
  if (stripped === "/") return "/br";
  return `/br${stripped}`;
}

/**
 * Build the alternates map for a given canonical English path. Returns the
 * shape Next.js metadata expects.
 */
export function alternateLanguages(enPath: string) {
  return {
    en: enPath === "/" ? "/" : enPath,
    "pt-BR": enPath === "/" ? "/br" : `/br${enPath}`,
  };
}
