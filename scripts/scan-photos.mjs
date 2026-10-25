// Scans public/photos and writes data/photos.json. Runs automatically before dev/build.
import fs from "node:fs"; import path from "node:path";
const root = path.resolve("public/photos"); const ok = /\.(jpe?g|png|webp|avif)$/i;
const list = (d) => { const p = path.join(root, d); return fs.existsSync(p) ? fs.readdirSync(p).filter((f) => ok.test(f)).sort().map((f) => `/photos/${d}/${f}`) : []; };
const out = { hero: null, showcase: list("showcase").slice(0, 12), reviews: list("reviews").slice(0, 12), delivered: list("delivered").slice(0, 12), brands: {} };
if (fs.existsSync(root)) {
  const h = fs.readdirSync(root).find((f) => /^hero\.(jpe?g|png|webp|avif)$/i.test(f)); if (h) out.hero = `/photos/${h}`;
  for (const f of list("brands")) out.brands[path.basename(f).replace(/\.[^.]+$/, "")] = f;
}
fs.mkdirSync("data", { recursive: true }); fs.writeFileSync("data/photos.json", JSON.stringify(out, null, 2));
console.log("photos:", out.showcase.length, "showcase,", out.reviews.length, "reviews,", out.delivered.length, "delivered,", Object.keys(out.brands).length, "brand covers");
