"use client";
import { useEffect, useState } from "react";
import DitheredLogo from "@/components/ui/dithered-logo";

// The dotted hero logo starts animating when the first-visit splash fades out.
export default function HeroLogo() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const go = () => setReady(true);
    if (document.documentElement.classList.contains("splash-seen") || !document.getElementById("splash")) { go(); return; }
    window.addEventListener("avn:splash-done", go);
    const t = window.setTimeout(go, 4000);
    return () => { window.removeEventListener("avn:splash-done", go); window.clearTimeout(t); };
  }, []);
  return (
    <div className="mx-auto w-full max-w-[920px]" style={{ aspectRatio: "2.2 / 1" }}>
      {ready && <DitheredLogo imageSrc="/logo-dark.svg" particleColor="#C9A24B" scale={2} gridSize={360} blur={0} solid dotScale={1.02} className="h-full w-full" />}
    </div>
  );
}
