"use client";
import { useState } from "react";
import Link from "next/link";
import { QUICK_STEPS } from "@/data/site";
import SocialButtons from "./SocialButtons";
export default function OrderBox() {
  const [open, setOpen] = useState(false);
  return (
    <section aria-label="How to order" className="mx-auto mt-3 w-full max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl border border-gold/40 bg-card/80 p-4 sm:p-5">
        <button data-cursor-label="Steps" onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left md:pointer-events-none" aria-expanded={open}>
          <span className="font-display text-xl text-gold sm:text-2xl">How to order</span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground md:hidden">{open ? "Hide −" : "5 easy steps +"}</span>
        </button>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <p className="mt-1 text-sm text-muted-foreground">Orders are placed only by direct message — tap a button below to message us.</p>
          <ol className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-5">
            {QUICK_STEPS.map((s, i) => (
              <li key={i} className="flex gap-2"><span className="font-display text-lg leading-5 text-gold">{i + 1}</span><span className="text-foreground/90">{s}</span></li>
            ))}
          </ol>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <SocialButtons solid />
            <Link href="/how-to-order/" data-cursor-label="Guide" className="cursor-target text-sm uppercase tracking-widest text-gold underline-offset-4 hover:underline">Full guide →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
