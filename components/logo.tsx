import Image from "next/image";
import { cn } from "@/lib/utils";

const VARIANTS = {
  light: { src: "/logo.png", w: 779, h: 236 },
  dark: { src: "/logo-dark.png", w: 732, h: 231 },
} as const;

export function Logo({
  variant = "light",
  className,
  height = 36,
}: {
  variant?: "light" | "dark";
  className?: string;
  height?: number;
}) {
  const { src, w, h } = VARIANTS[variant];
  const width = Math.round((height * w) / h);

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src={src}
        alt="Hellow"
        width={width}
        height={height}
        priority
        className="h-9 w-auto"
      />
    </div>
  );
}
