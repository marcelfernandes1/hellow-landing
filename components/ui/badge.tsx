import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "coral" | "ink" | "neutral";
}

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  const tones = {
    coral: "bg-coral-50 text-coral-700 ring-coral-200",
    ink: "bg-ink text-bg ring-ink",
    neutral: "bg-bg-soft text-ink-soft ring-line",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
