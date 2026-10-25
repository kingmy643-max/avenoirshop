import Link from "next/link";
import { NAV } from "@/data/site";
import SocialButtons from "./SocialButtons";
import BellToggle from "./BellToggle";
export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border pb-28 pt-12 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <img src="/logo-gold.svg" alt="Avenoir — Luxury Bags" className="h-12 w-auto" />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">Luxury handbags & accessories, shipped worldwide with FedEx tracking. Orders are placed by direct message only.</p>
        </div>
        <nav className="flex flex-col gap-2 text-sm uppercase tracking-widest">
          {NAV.map((n) => <Link key={n.href} href={n.href} className="cursor-target w-fit text-foreground/80 hover:text-gold">{n.label}</Link>)}
        </nav>
        <div className="flex flex-col items-start gap-4"><SocialButtons /><BellToggle /></div>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Avenoir. Brand names belong to their respective owners and are used only to describe the items we source.</p>
    </footer>
  );
}
