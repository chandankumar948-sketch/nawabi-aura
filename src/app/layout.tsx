import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PWARegister from "@/components/PWARegister";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nawabiaura.com"),
  title: "Nawabi Aura | Elegant Chikankari Kurtis for Daily & Office Wear",
  description:
    "Shop elegant chikankari kurtis from Nawabi Aura. Discover short kurtis, long kurtis, daily wear, office wear, and premium ethnic styles at affordable prices.",
  keywords:
    "chikankari kurtis, short kurtis, long kurtis, office wear kurti, daily wear kurti, ethnic wear, Lucknow chikankari",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Nawabi Aura",
  },
  openGraph: {
    title: "Nawabi Aura | Elegant Chikankari Kurtis",
    description:
      "Dress Like Royalty. Feel the Aura. Shop elegant chikankari kurtis handcrafted in Lucknow — daily wear, office wear, and festive styles.",
    url: "https://nawabiaura.com",
    siteName: "Nawabi Aura",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Nawabi Aura - Royalty the Lucknowi Way",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nawabi Aura | Elegant Chikankari Kurtis",
    description: "Dress Like Royalty. Feel the Aura.",
    images: ["/logo.jpg"],
  },
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#1E1508",
    "msapplication-TileImage": "/icons/icon-192.png",
    "msapplication-tap-highlight": "no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body
        style={{ backgroundColor: "var(--color-brand-black)", color: "#ffffff", fontFamily: "var(--font-sans)" }}
        className="antialiased"
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <PWARegister />
      </body>
    </html>
  );
}
