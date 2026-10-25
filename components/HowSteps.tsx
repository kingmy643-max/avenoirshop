"use client";
import { useEffect, useRef, useState } from "react";
import CallChip from "@/components/bits/CallChip";
import SlingButton from "@/components/bits/SlingButton";
import { STEPS, SOCIAL } from "@/data/site";

function Step({ i, s }: { i: number; s: (typeof STEPS)[number] }) {
  const ref = useRef<HTMLLIElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.4 });
    ref.current && io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <li ref={ref} className="reveal rounded-2xl border border-border bg-card p-5 sm:p-6">
      <CallChip icon={s.icon} name={`Step ${i + 1}`} argument={s.title} status={seen ? "done" : "running"} expectedMs={1800} size={36} color="#F5EFE3" surfaceColor="#17140d" progressColor="#C9A24B" doneColor="#C9A24B" showTimer={false} />
      <h3 className="mt-4 text-2xl text-gold">{s.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">{s.text}</p>
    </li>
  );
}
export function StepsList() { return <ol className="grid gap-4 md:grid-cols-2">{STEPS.map((s, i) => <Step key={i} i={i} s={s} />)}</ol>; }
export function SlingSend() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <SlingButton onSend={() => window.open(SOCIAL.instagramDM, "_blank")} padColor="#C9A24B" iconColor="#0a0a0a" accentColor="#C9A24B" wellColor="#17140d" bandColor="#6b5a2e" size={64} />
      <p className="text-sm uppercase tracking-widest text-muted-foreground">Pull back &amp; release to send your screenshot on Instagram</p>
    </div>
  );
}
