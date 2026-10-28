"use client";
import { useState } from "react";
export default function FlipCard({ front, back, className = "" }: { front: React.ReactNode; back: React.ReactNode; className?: string }) {
  const [on, setOn] = useState(false);
  return (
    <div data-cursor-label="Flip" className={`flip cursor-target h-56 w-full sm:h-64 ${on ? "on" : ""} ${className}`} onClick={(e) => { if ((e.target as HTMLElement).closest("a")) return; setOn((v) => !v); }}>
      <div className="flip-in">
        <div className="flip-face border border-border bg-card">{front}</div>
        <div className="flip-face flip-back border border-gold/60 bg-[#14110a]">{back}</div>
      </div>
    </div>
  );
}
