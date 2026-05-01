import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { LocaleProvider } from "@/lib/i18n/context";
import { LangSync } from "@/components/lang-sync";
import type { Locale } from "@/lib/i18n/types";

export function PageShell({
  locale = "en",
  children,
  showExitIntent = false,
}: {
  locale?: Locale;
  children: React.ReactNode;
  showExitIntent?: boolean;
}) {
  return (
    <LocaleProvider locale={locale}>
      <LangSync locale={locale} />
      <main className="relative bg-bg text-ink">
        <Nav />
        {children}
        <Footer />
        <MobileStickyCTA />
        {showExitIntent && <ExitIntentPopup />}
      </main>
    </LocaleProvider>
  );
}
