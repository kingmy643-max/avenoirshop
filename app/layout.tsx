import type { Metadata, Viewport } from "next";
import "./globals.css";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  title: { default: "Avenoir — Luxury Bags & Accessories", template: "%s | Avenoir" },
  description: "Avenoir: luxury handbags and accessories from 20 designer brands, delivered worldwide with FedEx tracking. Order by DM on Instagram, TikTok or WhatsApp.",
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a0a0a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Gloock&family=Jost:wght@300;400;500&display=swap" />
      </head>
      <body><Shell>{children}</Shell></body>
    </html>
  );
}
