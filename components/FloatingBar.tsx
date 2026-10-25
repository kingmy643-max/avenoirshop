import { SOCIAL } from "@/data/site";
export default function FloatingBar() {
  const L = [["Instagram", SOCIAL.instagram], ["TikTok", SOCIAL.tiktok], ["WhatsApp", SOCIAL.whatsapp]];
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-black/90 px-3 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <span className="shrink-0 pr-1 font-display text-lg text-gold">Order</span>
        {L.map(([n, h]) => (
          <a key={n} href={h} target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-gold/60 text-[13px] uppercase tracking-wider text-gold active:bg-gold active:text-black">{n}</a>
        ))}
      </div>
    </div>
  );
}
