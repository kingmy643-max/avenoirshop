import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import SocialButtons from "@/components/SocialButtons";
import { SOCIAL, FOLDERS } from "@/data/site";
import photos from "@/data/photos.json";

export const metadata: Metadata = { title: "Reviews & Delivered", description: "Customer reviews and FedEx delivery proofs from Avenoir customers." };

export default function Reviews() {
  const blocks = [["Customer reviews", photos.reviews], ["Delivered with FedEx", photos.delivered]] as const;
  const any = photos.reviews.length + photos.delivered.length > 0;
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
      <header className="reveal text-center"><h1 className="text-5xl sm:text-6xl">Reviews &amp; delivered</h1><p className="mx-auto mt-3 max-w-xl text-muted-foreground">Real customer feedback and FedEx delivery proofs. More are saved in our Instagram highlights.</p></header>
      {blocks.map(([t, imgs]) => imgs.length > 0 && <section key={t} className="mt-12"><h2 className="reveal mb-4 text-3xl sm:text-4xl">{t}</h2><Gallery images={imgs as string[]} /></section>)}
      {!any && <p className="reveal mx-auto mt-12 max-w-md rounded-2xl border border-border bg-card p-6 text-center text-muted-foreground">Our review and delivery highlights are on Instagram — <a className="text-gold underline" href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">see them here</a>.</p>}
      <div className="reveal mt-12 flex flex-wrap justify-center gap-2">{[["All customer reviews", FOLDERS.reviews], ["Delivered orders", FOLDERS.delivered], ["Product videos", FOLDERS.productVideos]].map(([n, h]) => <a key={n} href={h} target="_blank" rel="noopener noreferrer" className="btn cursor-target">{n} ↗</a>)}</div>
      <div className="reveal mt-14 text-center"><p className="mb-4 font-display text-2xl">Ready to order?</p><SocialButtons solid className="justify-center" /></div>
    </div>
  );
}
