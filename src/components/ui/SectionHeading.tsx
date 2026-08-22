import RevealText from "./RevealText";
import FadeIn from "./FadeIn";
import clsx from "clsx";

interface SectionHeadingProps {
  index: string;
  label: string;
  heading: string;
  headingClassName?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  index,
  label,
  heading,
  headingClassName,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={clsx("flex flex-col gap-6", align === "center" && "items-center text-center")}>
      <FadeIn amount={0.8}>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-clay-400">
          <span className="text-clay-300">{index}</span>
          <span className="h-px w-8 bg-clay-300/60" />
          <span>{label}</span>
        </div>
      </FadeIn>
      <RevealText
        text={heading}
        as="h2"
        className={clsx(
          "font-display text-display-md font-medium text-ink",
          align === "center" && "justify-center",
          headingClassName
        )}
      />
      {description && (
        <FadeIn delay={0.15} amount={0.8}>
          <p className={clsx("max-w-xl text-lg leading-relaxed text-ink-50", align === "center" && "mx-auto")}>
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
