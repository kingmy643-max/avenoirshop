"use client";
import DitheredLogo from "@/components/ui/dithered-logo";
export default function HeroLogo() {
  return (
    <div className="mx-auto w-full max-w-[560px] text-gold" style={{ aspectRatio: "660 / 200" }}>
      <DitheredLogo imageSrc="/logo-dark.svg" particleColor="#C9A24B" className="h-full w-full" />
    </div>
  );
}
