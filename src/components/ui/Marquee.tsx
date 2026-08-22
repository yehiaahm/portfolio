import { ReactNode } from "react";
import clsx from "clsx";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({ children, reverse, className }: MarqueeProps) {
  return (
    <div className={clsx("mask-fade-x flex overflow-hidden", className)}>
      <div
        className={clsx(
          "flex shrink-0 items-center gap-12 pr-12",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {children}
      </div>
      <div
        className={clsx(
          "flex shrink-0 items-center gap-12 pr-12",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
