"use client";
import DitheredLogo from "@/components/ui/dithered-logo";
// Logo width = container height x scale, so a tall-ish container + high scale makes the logo big.
export default function HeroLogo() {
  return (
    <div className="mx-auto w-full max-w-[920px]" style={{ aspectRatio: "2.2 / 1" }}>
      <DitheredLogo imageSrc="/logo-dark.svg" particleColor="#C9A24B" scale={2} className="h-full w-full" />
    </div>
  );
}
