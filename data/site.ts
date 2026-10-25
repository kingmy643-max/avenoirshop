// ───────── EDIT HERE: links, brands, steps ─────────
export const SITE = { name: "Avenoir", tagline: "Luxury Bags & Accessories", url: "https://avenoir.pages.dev" };

export const SOCIAL = {
  instagram: "https://www.instagram.com/avenoir_luxury_brands",
  instagramDM: "https://ig.me/m/avenoir_luxury_brands",
  tiktok: "https://www.tiktok.com/@trrendy_brand_collection",
  whatsapp: "https://wa.me/923236430588?text=Hi%20Avenoir%2C%20I%20would%20like%20to%20order%20a%20bag",
};

// Default Google Drive / catalog link. Replace per brand in DRIVE_LINKS below.
export const CATALOG = "https://linktr.ee/Dubai_Warehouse_Stock";
export const FOLDERS = {
  bags: "https://drive.google.com/drive/folders/1-qXln3QDlV1drpk0CfaX0HDING2rRMxY",
  bestMatching: "https://drive.google.com/drive/folders/1eNd9Q8Q56zDwbqrKq6_W4YzNdJRVi-Oe",
  shoes: "https://drive.google.com/drive/folders/100JdBMGOVpI5D8tBtDuipffOTGELZmbm",
  jewellery: "https://drive.google.com/drive/folders/10IjbCpd-772qRrpetcK1xWGDLTj1IX8a",
  watches: "https://drive.google.com/drive/folders/107sMTZvSWhsyQIlTYJtcjZ1zSyA2CB_C",
  sunglasses: "https://drive.google.com/drive/folders/10Li2o0NQu6UHrBhPHZdA5rlGuvhY9NN4",
  wallets: "https://drive.google.com/drive/folders/109bvrVlzFNDlR_JvJd_hJaR7hH7cpM1T",
  clothing: "https://drive.google.com/drive/folders/10DfLzPnzvdAPXPwkYLYyzP0EAFi0Dbv0",
  mobileCovers: "https://drive.google.com/drive/folders/10J3hSFy0fUvJjUd03jleIeWSG7zy1gsQ",
  belts: "https://drive.google.com/drive/folders/10PRfg5MJVWpLAoH1xgdRt6tJwCgKSah-",
  reviews: "https://drive.google.com/drive/folders/1RE6-8QD4VtJ2AiywxpUXRJGUjoycDZGL",
  productVideos: "https://drive.google.com/drive/folders/1ONcrTfdVkgS6O5TQOTN4GpCbQyvwZupx",
  delivered: "https://drive.google.com/drive/folders/1-U-wICcJbo-w0oUceqoMYASKx_2_h04O",
};
export const DRIVE_LINKS: Record<string, string> = {
  // "chanel": "https://drive.google.com/drive/folders/XXXXXXXX",
  // "bottega-veneta": "https://drive.google.com/drive/folders/XXXXXXXX",
};

export type Brand = { name: string; slug: string; count: number; types: string[] };
const B = (name: string, count: number, types: string[] = ["All handbags"], slug?: string): Brand => ({
  name, count, types, slug: slug ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
});
export const BRANDS: Brand[] = [
  B("Bottega Veneta", 355, ["Bags", "Belt Bags", "Totes", "Others"]),
  B("Balenciaga", 182), B("Chanel", 174, ["Handbags", "Chanel 19 Flap Bags"]), B("Celine", 146),
  B("Burberry", 110, ["Bags", "Duffle Bags"]), B("Louis Vuitton", 93), B("Hermes", 30), B("Dior", 25),
  B("Gucci", 25), B("Goyard", 16), B("Bvlgari", 15), B("Fendi", 11), B("Miu Miu", 11), B("Loewe", 10),
  B("Chloé", 8, undefined, "chloe"), B("Prada", 7), B("Valentino", 4), B("Dolce & Gabbana", 3, undefined, "dolce-gabbana"),
  B("Loro Piana", 2), B("Saint Laurent", 2, undefined, "saint-laurent"),
];
// Until a brand has its own folder link in DRIVE_LINKS, it opens the Bags folder.
export const driveFor = (slug: string) => DRIVE_LINKS[slug] ?? FOLDERS.bags;
export const TOTAL_BAGS = BRANDS.reduce((a, b) => a + b.count, 0);

export const ACCESSORIES = [
  { label: "Watches", href: FOLDERS.watches }, { label: "Sunglasses & Glasses", href: FOLDERS.sunglasses },
  { label: "Wallets", href: FOLDERS.wallets }, { label: "Heels & Shoes", href: FOLDERS.shoes },
  { label: "Jewellery", href: FOLDERS.jewellery }, { label: "Belts", href: FOLDERS.belts },
  { label: "Best matching sets", href: FOLDERS.bestMatching },
  { label: "Any item from an official brand website", href: CATALOG },
];

export const NAV = [
  { label: "Home", href: "/" }, { label: "Brands", href: "/brands/" },
  { label: "How to Order", href: "/how-to-order/" }, { label: "Reviews", href: "/reviews/" },
];

export const QUICK_STEPS = [
  "Pick a bag from our posts or any brand’s official website",
  "Send us the screenshot on Instagram, TikTok or WhatsApp",
  "We confirm availability and the final price in DM",
  "Pay by PayPal, Zelle, Venmo or Apple Pay",
  "Get your approval video, then FedEx delivery with tracking",
];

export const STEPS = [
  { icon: "search", title: "Browse the catalog", text: "Look through our Instagram posts, the brand folders on this website, or our Linktree catalog. You can also choose any item from a brand’s official website." },
  { icon: "file", title: "Send a screenshot", text: "Send the screenshot of the item you like by direct message on Instagram, TikTok or WhatsApp. Orders are placed only in DM — this website is a catalog and guide." },
  { icon: "edit", title: "Availability & price confirmed", text: "We check that the exact item is available and confirm the final price with you in the same chat. Shipping is included. Nothing is charged until you agree." },
  { icon: "terminal", title: "Pay securely", text: "Pay by PayPal invoice, Zelle, Venmo or Apple Pay, then share the payment screenshot so we can confirm your order immediately." },
  { icon: "file", title: "Approval video (1–5 days)", text: "You receive a video of your exact product. We ship only after you approve it." },
  { icon: "terminal", title: "FedEx delivery", text: "We dispatch the next day after your approval with a FedEx tracking number. Delivery is worldwide — USA, UK, Australia, Europe and beyond." },
];

export const PAYMENTS = ["PayPal invoice", "Zelle", "Venmo", "Apple Pay"];
export const POLICIES = ["Payment", "Secure Shopping", "Quality Assurance", "Delivery", "Packing", "Refund", "Customer Service", "Product Range"];

export const FAQ = [
  ["Can I order on this website?", "No. Avenoir is a catalog and guide. To order, message us on Instagram, TikTok or WhatsApp and send a screenshot of the item."],
  ["Can I order something that is not in your catalog?", "Yes. Send a screenshot of any product from a brand’s official website. We confirm availability and the final price before you pay."],
  ["How much will it cost?", "The final price is always confirmed in DM before payment, and it already includes worldwide shipping."],
  ["How do I know I will get the exact bag?", "Before anything ships, you receive a confirmation video of your exact product within 1–5 days. We dispatch only after you approve it."],
  ["Which courier do you use?", "FedEx, with a tracking number shared with you. We ship worldwide and mainly serve the USA, UK, Australia and Europe."],
  ["Which payment methods do you accept?", "PayPal invoice, Zelle, Venmo and Apple Pay. After paying, share the payment screenshot."],
  ["Do you sell accessories too?", "Yes — watches, sunglasses, wallets, heels and shoes, plus a luxury accessories catalog."],
];
