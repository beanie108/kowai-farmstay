import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── Font loading ─────────────────────────────────────
   CSS variables are injected into <html> so globals.css
   can reference them via var(--font-dm-serif) etc.
   ───────────────────────────────────────────────────── */
const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ── Site-wide metadata ───────────────────────────────
   Page-level metadata can override these via generateMetadata
   or a static metadata export in each route file.
   ───────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Kowai Farmstay & Boarding",
    template: "%s | Kowai Farmstay & Boarding",
  },
  description:
    "Escape to Kowai — a lifestyle block offering unique farmstay accommodation and premium dog boarding in New Zealand. Book your stay or your dog's home away from home.",
  metadataBase: new URL("https://kowaifarmstay.co.nz"),
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://kowaifarmstay.co.nz",
    siteName: "Kowai Farmstay & Boarding",
    title: "Kowai Farmstay & Boarding",
    description:
      "Farmstay accommodation and dog boarding on a working New Zealand farm.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kowai Farmstay & Boarding",
    description:
      "Farmstay accommodation and dog boarding on a working New Zealand farm.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NZ"
      className={`${dmSerifDisplay.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-cream text-charcoal antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
