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
  /** Above-the-fold: animate with CSS on first paint instead of waiting for hydration + scroll-in. */
  immediate?: boolean;
}

export default function RevealText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.045,
  once = true,
  viewportAmount = 0.4,
  immediate = false,
}: RevealTextProps) {
  const words = text.split(" ");
  const { ref, inView } = useInView<HTMLElement>({ amount: viewportAmount, once });

  if (immediate) {
    return (
      <Tag ref={ref} className={clsx("flex flex-wrap", className)}>
        {words.map((word, i) => (
          <span key={i} className="me-[0.28em] inline-block overflow-hidden py-[0.22em] last:me-0">
            <span className="anim-word" style={{ animationDelay: `${delay + i * stagger}s` }}>
              {word}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={clsx("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="me-[0.28em] inline-block overflow-hidden py-[0.22em] last:me-0">
          <motion.span
            className="inline-block"
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
