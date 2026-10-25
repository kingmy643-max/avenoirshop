"use client";
import FuzzyText from "@/components/bits/FuzzyText";
export default function NotFoundView() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <FuzzyText color="#C9A24B" fontFamily="Gloock, Georgia, serif" fontWeight={400} baseIntensity={0.12} hoverIntensity={0.45}>404</FuzzyText>
      <p className="text-lg text-muted-foreground">This page has slipped away.</p>
      <a href="/" className="btn btn-solid cursor-target">Back to Avenoir</a>
    </section>
  );
}
