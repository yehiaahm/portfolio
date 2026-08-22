"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ElementType } from "react";
import { useInView } from "@/lib/hooks/useInView";

interface RevealTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  viewportAmount?: number;
}

export default function RevealText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.045,
  once = true,
  viewportAmount = 0.4,
}: RevealTextProps) {
  const words = text.split(" ");
  const { ref, inView } = useInView<HTMLElement>({ amount: viewportAmount, once });

  return (
    <Tag ref={ref} className={clsx("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="me-[0.28em] inline-block overflow-hidden py-[0.22em] last:me-0">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "110%", rotate: 3 }}
            animate={inView ? { y: "0%", rotate: 0 } : { y: "110%", rotate: 3 }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
