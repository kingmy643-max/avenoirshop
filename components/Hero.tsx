"use client";
import DitheredLogo from "@/components/ui/dithered-logo";
// solid = dots follow the logo exactly (no random holes). gridSize = detail. scale = size.
export default function HeroLogo() {
  return (
    <div className="mx-auto w-full max-w-[920px]" style={{ aspectRatio: "2.2 / 1" }}>
      <DitheredLogo imageSrc="/logo-dark.svg" particleColor="#C9A24B" scale={2} gridSize={360} blur={0} solid dotScale={1.02} className="h-full w-full" />
    </div>
  );
}
