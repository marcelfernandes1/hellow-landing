import { cn } from "@/lib/utils";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose-hellow max-w-none",
        // headings
        "[&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:scroll-mt-32",
        "[&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-ink [&_h3]:mt-8 [&_h3]:mb-2",
        // body
        "[&_p]:text-[1.0625rem] [&_p]:leading-relaxed [&_p]:text-ink-soft [&_p]:mb-4",
        "[&_a]:text-coral-600 [&_a]:underline-offset-4 hover:[&_a]:underline",
        "[&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6",
        "[&_ol]:my-4 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6",
        "[&_li]:text-[1.0625rem] [&_li]:leading-relaxed [&_li]:text-ink-soft [&_li]:pl-1",
        "[&_strong]:font-semibold [&_strong]:text-ink",
        "[&_blockquote]:border-l-2 [&_blockquote]:border-coral-500 [&_blockquote]:pl-5 [&_blockquote]:py-1 [&_blockquote]:my-6 [&_blockquote]:text-ink-soft",
        "[&_hr]:my-10 [&_hr]:border-line",
        className,
      )}
    >
      {children}
    </div>
  );
}
