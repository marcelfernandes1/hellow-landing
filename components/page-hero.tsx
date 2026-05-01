import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "left",
  children,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-bg-soft pb-16 pt-36 sm:pt-40 lg:pb-20 lg:pt-44",
        className,
      )}
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,107,91,0.20),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-[0.06]" />

      <div className="container">
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow && (
            <p className="text-eyebrow font-semibold uppercase text-coral-600">{eyebrow}</p>
          )}
          <h1 className="mt-4 font-display text-display-xl font-medium text-balance text-ink">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty sm:text-xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
