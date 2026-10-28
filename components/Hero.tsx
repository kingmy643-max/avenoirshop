"use client";
import { useEffect, useState } from "react";
import DitheredLogo from "@/components/ui/dithered-logo";

const MAX_WIDTH = 920;            // px — keep in sync with max-w-[920px] below
const LOGO_FILL = 0.909;          // logo width / box width (scale 2 inside a 2.2 : 1 box)
const DEVICE_PX_PER_DOT = 1.4;    // smaller = finer, sharper dots (and more of them)

/**
 * Hero logo made of dots that scatter around your cursor.
 * - Dot size follows the screen: about 1.4 device pixels per dot, so edges stay sharp on phones and laptops.
 * - Edge dots are semi-transparent (anti-aliased), so curves look smooth instead of stair-stepped.
 * - Starts when the first-visit splash begins to fade (or immediately on later visits).
 * - Visitors who prefer reduced motion get the plain, still logo.
 */
export default function HeroLogo() {
  const [ready, setReady] = useState(false);
  const [grid, setGrid] = useState<number | null>(null);
  const [still, setStill] = useState(false);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const boxW = Math.min(MAX_WIDTH, window.innerWidth - 32);
    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    setGrid(Math.round(Math.min(680, Math.max(420, (boxW * LOGO_FILL * dpr) / DEVICE_PX_PER_DOT))));
  }, []);

  useEffect(() => {
    const go = () => setReady(true);
    if (document.documentElement.classList.contains("splash-seen") || !document.getElementById("splash")) { go(); return; }
    window.addEventListener("avn:splash-done", go);
    const t = window.setTimeout(go, 7000);
    return () => { window.removeEventListener("avn:splash-done", go); window.clearTimeout(t); };
  }, []);

  return (
    <div className="mx-auto w-full max-w-[920px]" style={{ aspectRatio: "2.2 / 1" }}>
      {still ? (
        <img src="/logo-gold.svg" alt="Avenoir — Luxury Bags" className="h-full w-full object-contain" />
      ) : (
        ready && grid && (
          <DitheredLogo imageSrc="/logo-dark.svg" particleColor="#C9A24B" scale={2} gridSize={grid} blur={0} solid dotScale={1} className="h-full w-full" />
        )
      )}
    </div>
  );
}
