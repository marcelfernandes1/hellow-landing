"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n/context";
import { LOCALES, LOCALE_SHORT } from "@/lib/i18n/types";
import { switchLocaleHref } from "@/lib/i18n/utils";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const current = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-line bg-bg/80 p-0.5 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={switchLocaleHref(pathname, l)}
          aria-current={current === l ? "page" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            current === l
              ? "bg-ink text-bg"
              : "text-ink-muted hover:text-ink",
          )}
        >
          {LOCALE_SHORT[l]}
        </Link>
      ))}
    </div>
  );
}
