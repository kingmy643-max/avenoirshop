"use client";
import DitheredLogo from "@/components/ui/dithered-logo";
// gridSize = detail (higher = finer dots, sharper text). scale = size. blur kept low so thin letters survive.
export default function HeroLogo() {
  return (
    <div className="mx-auto w-full max-w-[920px]" style={{ aspectRatio: "2.2 / 1" }}>
      <DitheredLogo imageSrc="/logo-dark.svg" particleColor="#C9A24B" scale={2} gridSize={340} blur={1} className="h-full w-full" />
    </div>
  );
}
