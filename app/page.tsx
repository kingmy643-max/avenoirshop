import Link from "next/link";
import HeroLogo from "@/components/Hero";
import BrandFolders from "@/components/BrandFolders";
import WhyStack from "@/components/WhyStack";
import AskOrb from "@/components/AskOrb";
import Gallery from "@/components/Gallery";
import SocialButtons from "@/components/SocialButtons";
import photos from "@/data/photos.json";

export default function Home() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 text-center sm:px-6 sm:pt-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        {photos.hero && <img src={photos.hero} alt="" className="mx-auto mb-8 max-h-[420px] w-full rounded-3xl border border-border object-cover" />}
        <HeroLogo />
        <h1 className="mx-auto mt-6 max-w-2xl text-4xl leading-tight sm:text-6xl">Luxury bags, delivered to your door.</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">Explore 20 designer brands here, then order directly on Instagram, TikTok or WhatsApp. Worldwide delivery with FedEx tracking.</p>
        <SocialButtons solid className="mt-7 justify-center" />
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="reveal mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl">Shop by brand</h2>
          <p className="mt-2 text-muted-foreground">Tap a folder to open it, then choose a collection to view the full catalog.</p>
        </div>
        <BrandFolders />
        <div className="mt-10 text-center"><Link href="/brands/" className="btn cursor-target">All 20 brands →</Link></div>
      </section>

      {photos.showcase.length > 0 && (
        <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
          <h2 className="reveal mb-5 text-3xl sm:text-4xl">A few favourites</h2>
          <Gallery images={photos.showcase} />
        </section>
      )}

      <section className="mx-auto mt-20 max-w-6xl overflow-hidden px-4 sm:px-6">
        <div className="reveal mb-6 text-center"><h2 className="text-4xl sm:text-5xl">Why Avenoir</h2><p className="mt-2 text-muted-foreground">Tap the cards to fan them out.</p></div>
        <WhyStack />
      </section>

      <section className="mx-auto mt-20 max-w-3xl px-4 text-center sm:px-6">
        <h2 className="reveal text-4xl sm:text-5xl">Ask Avenoir</h2>
        <p className="mt-2 text-muted-foreground">Looking for a brand, delivery or payment info? Ask here — or message us directly.</p>
        <div className="mt-6"><AskOrb /></div>
      </section>
    </>
  );
}
