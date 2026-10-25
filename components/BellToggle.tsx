"use client";
import { useState } from "react";
import { SOCIAL } from "@/data/site";
export default function BellToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => { const n = !on; setOn(n); if (n) window.open(SOCIAL.whatsapp.split("?")[0] + "?text=" + encodeURIComponent("Hi Avenoir, please notify me about new arrivals"), "_blank"); }}
      aria-pressed={on}
      className={`cursor-target flex min-h-[44px] items-center gap-3 rounded-full border px-4 text-sm uppercase tracking-widest transition ${on ? "bell-on border-gold bg-gold text-black" : "border-gold/50 text-gold"}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6"><path d="M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8M13.7 20a2 2 0 01-3.4 0" /></svg>
      {on ? "You’ll hear first" : "New arrival alerts"}
    </button>
  );
}
