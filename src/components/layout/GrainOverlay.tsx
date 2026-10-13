export default function GrainOverlay() {
  // No mix-blend-mode: at 3.5% opacity it is imperceptible, but a blended
  // full-viewport fixed layer forced the whole page to re-composite on scroll.
  return <div aria-hidden className="noise-bg pointer-events-none fixed inset-0 z-[90] opacity-[0.035]" />;
}
