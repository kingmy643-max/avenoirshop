# Avenoir — luxury bags catalog website

Static Next.js site (no checkout). Orders happen in DM on Instagram / TikTok / WhatsApp.

## Run locally
    npm install
    npm run dev          # http://localhost:3000

## Deploy: GitHub -> Cloudflare Pages
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard -> Workers & Pages -> Create -> Pages -> Connect to Git -> pick the repo.
3. Build settings: Framework preset **Next.js (Static HTML Export)** · Build command `npm run build` · Output directory `out`.
4. Environment variable: `NODE_VERSION` = `20`. Save and deploy.

## What to edit
- `data/site.ts` — social links, brands, steps, FAQ, and **DRIVE_LINKS** (put each brand's Google Drive folder link; until then every brand opens the Linktree catalog).
- `public/photos/` — drop a FEW photos (see README.txt inside). Run `npm run build` again.
- No prices appear anywhere on the site.
