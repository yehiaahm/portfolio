"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "@/lib/hooks/useInView";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
  duration?: number;
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  y = 32,
  once = true,
  amount = 0.25,
  duration = 0.9,
}: FadeInProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ amount, once });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
