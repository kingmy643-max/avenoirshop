import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import Shell from "@/components/Shell";
import SplashControl from "@/components/SplashControl";

export const metadata: Metadata = {
  metadataBase: new URL("https://avenoir.pages.dev"),
  title: { default: "Avenoir — Luxury Bags & Accessories", template: "%s | Avenoir" },
  description: "Avenoir: luxury handbags and accessories from 20 designer brands, delivered worldwide with FedEx tracking. Order by DM on Instagram, TikTok or WhatsApp.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Avenoir — Luxury Bags & Accessories",
    description: "20 designer brands, delivered worldwide with FedEx tracking. Order by DM on Instagram, TikTok or WhatsApp.",
    siteName: "Avenoir",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a0a0a" };

// Splash logo = four ribbon loops (they tie one after another) + the centre star.
const LOOPS = [1, 2, 3, 4];
const SPLASH_IMAGES = [...LOOPS.map((n) => `/splash/loop-${n}.webp`), "/splash/star.webp"];

// Skip the splash before first paint if it was already shown in this browser session.
const SPLASH_GUARD = "try{if(sessionStorage.getItem('avn_splash'))document.documentElement.classList.add('splash-seen')}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SPLASH_GUARD }} />
        {SPLASH_IMAGES.map((href) => <link key={href} rel="preload" as="image" href={href} type="image/webp" />)}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Gloock&family=Jost:wght@300;400;500&display=swap" />
      </head>
      <body>
        <div id="splash" aria-hidden="true">
          <div className="splash-glow" />
          <div className="splash-mark">
            {LOOPS.map((n, i) => (
              <img key={n} className="splash-layer splash-loop" style={{ "--i": i } as CSSProperties} src={`/splash/loop-${n}.webp`} width={577} height={561} alt="" decoding="async" draggable={false} />
            ))}
            <img className="splash-layer splash-star" src="/splash/star.webp" width={577} height={561} alt="" decoding="async" draggable={false} />
            <span className="splash-shine" />
          </div>
        </div>
        <SplashControl />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
