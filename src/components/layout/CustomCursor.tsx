"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [canHover, setCanHover] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 28, stiffness: 320, mass: 0.5 });
  const ringY = useSpring(dotY, { damping: 28, stiffness: 320, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
    if (!mq.matches) return;

    let frame = 0;
    let px = 0;
    let py = 0;

    const hitTest = () => {
      frame = 0;
      const el = document.elementFromPoint(px, py) as HTMLElement | null;
      const target = el?.closest<HTMLElement>("[data-cursor], a, button, [role='button']");
      if (target) {
        setIsPointer(true);
        setLabel(target.getAttribute("data-cursor"));
      } else {
        setIsPointer(false);
        setLabel(null);
      }
    };

    const handleMove = (e: MouseEvent) => {
      px = e.clientX;
      py = e.clientY;
      dotX.set(px);
      dotY.set(py);
      if (!isVisible) setIsVisible(true);
      if (!frame) frame = requestAnimationFrame(hitTest);
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [dotX, dotY, isVisible]);

  if (!canHover) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] rounded-full bg-cream-100 mix-blend-difference"
        style={{
          left: dotX,
          top: dotY,
          width: 6,
          height: 6,
          x: "-50%",
          y: "-50%",
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[100] flex items-center justify-center rounded-full border border-cream-100 mix-blend-difference"
        style={{
          left: ringX,
          top: ringY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isPointer ? (label ? 88 : 56) : 32,
          height: isPointer ? (label ? 88 : 56) : 32,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 260 }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[10px] uppercase tracking-widest2 text-cream-100"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
