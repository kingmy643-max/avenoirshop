"use client";
import { useState } from "react";
export type Node = { label: string; href?: string; children?: Node[] };
function Item({ n, depth }: { n: Node; depth: number }) {
  const [open, setOpen] = useState(depth === 0);
  const has = !!n.children?.length;
  return (
    <li className="relative">
      {has ? (
        <button onClick={() => setOpen(!open)} aria-expanded={open} className="cursor-target flex min-h-[44px] w-full items-center gap-2 text-left font-display text-xl text-gold">
          <span className={`inline-block text-sm transition-transform ${open ? "rotate-90" : ""}`}>▸</span>{n.label}
        </button>
      ) : (
        <a href={n.href} target="_blank" rel="noopener noreferrer" className="cursor-target relative flex min-h-[40px] items-center text-foreground/90 before:absolute before:-left-5 before:top-1/2 before:h-px before:w-4 before:bg-gold/50 hover:text-gold">{n.label} <span className="ml-2 text-gold">↗</span></a>
      )}
      {has && open && <ul className="ml-3 border-l border-gold/40 pl-5">{n.children!.map((c) => <Item key={c.label} n={c} depth={depth + 1} />)}</ul>}
    </li>
  );
}
export default function BranchedMenu({ tree }: { tree: Node[] }) {
  return <ul className="space-y-1">{tree.map((n) => <Item key={n.label} n={n} depth={0} />)}</ul>;
}
