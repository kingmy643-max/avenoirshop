import { SOCIAL } from "@/data/site";
const items = [["Instagram", SOCIAL.instagram], ["TikTok", SOCIAL.tiktok], ["WhatsApp", SOCIAL.whatsapp]] as const;
export default function SocialButtons({ solid = false, className = "" }: { solid?: boolean; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map(([n, h], i) => (
        <a key={n} href={h} target="_blank" rel="noopener noreferrer" className={`btn cursor-target ${solid && i === 0 ? "btn-solid" : ""}`}>{n}</a>
      ))}
    </div>
  );
}
