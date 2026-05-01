"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";

interface Props {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  formatter?: (value: number) => string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2.0,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  formatter,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const value = useMotionValue(from);
  const display = useTransform(value, (v) => {
    if (formatter) return formatter(v);
    return `${prefix}${v.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, to, duration, value]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
