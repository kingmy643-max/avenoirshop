"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import GooeyNav from "@/components/bits/GooeyNav";
import TargetCursor from "@/components/bits/TargetCursor";
import { NAV } from "@/data/site";
import OrderBox from "./OrderBox";
import FloatingBar from "./FloatingBar";
import Footer from "./Footer";

export default function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname() || "/";
  const [fine, setFine] = useState(false);
  useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    let id = requestAnimationFrame(function raf(t) { lenis.raf(t); id = requestAnimationFrame(raf); });
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  const idx = Math.max(0, NAV.findIndex((n) => (n.href === "/" ? path === "/" : path.startsWith(n.href))));
  return (
    <>
      {fine && <TargetCursor cursorColor="#C9A24B" />}
      <header className="sticky top-0 z-30 border-b border-border bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-3 sm:flex-row sm:justify-between sm:px-6">
          <a href="/" aria-label="Avenoir home" className="cursor-target"><img src="/logo-gold.svg" alt="Avenoir" className="h-9 w-auto sm:h-10" /></a>
          <GooeyNav items={NAV} activeIndex={idx} theme="dark" size="sm" particleCount={8} color="#C9A24B" />
        </div>
      </header>
      <OrderBox />
      <main>{children}</main>
      <Footer />
      <FloatingBar />
    </>
  );
}
