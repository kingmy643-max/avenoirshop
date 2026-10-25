"use client";
import MorphOrb from "@/components/ui/ai-orb";
import { BRANDS } from "@/data/site";

// Simple on-site helper (no prices, no server needed). Edit the answers freely.
function answer(q: string): string {
  const t = q.toLowerCase();
  const brand = BRANDS.find((b) => t.includes(b.name.toLowerCase()) || t.includes(b.slug.replace(/-/g, " ")) || (b.slug === "saint-laurent" && t.includes("ysl")) || (b.slug === "louis-vuitton" && /\blv\b/.test(t)));
  if (/price|cost|how much|rate/.test(t)) return "The final price is confirmed in DM after you send a screenshot. Shipping is included.";
  if (/ship|deliver|fedex|track|how long/.test(t)) return "FedEx with tracking, worldwide. We dispatch the day after you approve your video.";
  if (/pay|paypal|zelle|venmo|apple/.test(t)) return "PayPal invoice, Zelle, Venmo or Apple Pay. Send the payment screenshot after paying.";
  if (/refund|return|policy/.test(t)) return "Ask us in DM — our policy highlights are on Instagram.";
  if (/watch|sunglass|glass|wallet|heel|shoe/.test(t)) return "Yes! Send a screenshot of the item and we’ll confirm availability in DM.";
  if (brand) return `Yes — ${brand.name}: ${brand.count} styles in our catalog. Open its folder, then DM a screenshot.`;
  return "Send us a screenshot on Instagram, TikTok or WhatsApp and we’ll confirm availability.";
}
export default function AskOrb() {
  return <MorphOrb onSubmit={async (q) => answer(q)} />;
}
