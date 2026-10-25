"use client";
import GlassFolder from "@/components/ui/glass-folder-cards";
import { BRANDS, driveFor } from "@/data/site";
import photos from "@/data/photos.json";

const FEATURED = ["bottega-veneta", "chanel", "balenciaga", "celine", "burberry", "louis-vuitton"];
const ART = ["ember", "dusk", "aurora", "glacier", "verdant", "ember"] as const;

export default function BrandFolders() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {FEATURED.map((slug, i) => {
        const b = BRANDS.find((x) => x.slug === slug)!;
        const img = (photos.brands as Record<string, string>)[slug];
        return (
          <GlassFolder
            key={slug}
            label={b.name}
            meta={`${b.count} styles`}
            tone="dark"
            art={img ? "none" : ART[i]}
            image={img}
            seed={i + 3}
            action="none"
            appear
            appearDelay={i * 90}
            width={250}
            files={[...b.types.map((t) => ({ name: `${b.name} — ${t}`, meta: "Open catalog ↗", href: driveFor(slug) }))]}
          />
        );
      })}
    </div>
  );
}
