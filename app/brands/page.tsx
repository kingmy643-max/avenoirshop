import type { Metadata } from "next";
import FlipCard from "@/components/FlipCard";
import BranchedMenu from "@/components/BranchedMenu";
import Gallery from "@/components/Gallery";
import { BRANDS, ACCESSORIES, driveFor } from "@/data/site";
import photos from "@/data/photos.json";

export const metadata: Metadata = { title: "Brands & Accessories", description: "Browse 20 luxury handbag brands and accessories. Tap a brand to open its full catalog." };

export default function Brands() {
  const tree = [
    { label: "Handbags", children: BRANDS.map((b) => ({ label: `${b.name} · ${b.count}`, href: driveFor(b.slug) })) },
    { label: "Accessories", children: ACCESSORIES.map((a) => ({ label: a.label, href: a.href })) },
  ];
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
      <header className="reveal text-center"><h1 className="text-5xl sm:text-6xl">Brands</h1><p className="mx-auto mt-3 max-w-xl text-muted-foreground">Tap a card to flip it, then open the brand’s full catalog. To buy, message us a screenshot on Instagram, TikTok or WhatsApp.</p></header>
      {photos.showcase.length > 0 && <div className="mt-8"><Gallery images={photos.showcase} /></div>}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {BRANDS.map((b) => {
          const img = (photos.brands as Record<string, string>)[b.slug];
          return (
            <FlipCard
              key={b.slug}
              front={<div className="relative flex h-full flex-col items-center justify-center p-3 text-center">{img && <img src={img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />}<span className="relative font-logo text-5xl text-gold">{b.name[0]}</span><span className="relative mt-3 font-display text-xl leading-tight sm:text-2xl">{b.name}</span><span className="relative mt-1 text-xs uppercase tracking-widest text-muted-foreground">{b.count} styles</span></div>}
              back={<div className="flex h-full flex-col items-center justify-center gap-3 p-3 text-center"><span className="font-display text-xl text-gold">{b.name}</span><span className="text-xs text-foreground/80">{b.types.join(" · ")}</span><a data-cursor-label="Open" href={driveFor(b.slug)} target="_blank" rel="noopener noreferrer" className="btn btn-solid cursor-target !min-h-[40px] !px-4 !text-xs">Open catalog ↗</a></div>}
            />
          );
        })}
      </div>

      <section className="mt-20 grid gap-8 md:grid-cols-2">
        <div className="reveal"><h2 className="text-4xl sm:text-5xl">Accessories &amp; more</h2><p className="mt-3 max-w-md text-muted-foreground">Watches, sunglasses, wallets, heels and shoes — plus any item from an official brand website. Send us the screenshot and we confirm availability.</p></div>
        <div className="reveal rounded-2xl border border-border bg-card p-5"><BranchedMenu tree={tree} /></div>
      </section>
    </div>
  );
}
