import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fernbottledwater.com"),
  title: "Fern Bottled Water — Pure Nature in Every Drop | Sri Lanka's 230ft Virgin Spring",
  description:
    "Experience pure organic hydration with Fern Natural Mineral Water. Drawn from a pristine 230-foot deep virgin spring in Sri Lanka's Miocene-era rainforests. Untouched purity, natural 7.6 pH, and essential cellular minerals.",
  keywords: [
    "Fern water",
    "Fern bottled water",
    "Sri Lanka mineral water",
    "premium spring water",
    "230ft virgin spring",
    "natural mineral water",
    "luxury bottled water",
    "alkaline water Sri Lanka",
    "Since 1992",
    "Duallink International",
  ],
  authors: [{ name: "Duallink International Pvt Ltd" }],
  openGraph: {
    title: "Fern Bottled Water — Pure Nature in Every Drop",
    description:
      "Drawn from a pristine 230-foot virgin spring in Sri Lanka's ancient rainforests. Experience over 30 years of nature's purity.",
    images: [
      {
        url: "/assets/fern_water_bottle_with-water.png",
        width: 1200,
        height: 900,
        alt: "Fern Bottled Drinking Water",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#050b14] text-[#f1f5f9] antialiased selection:bg-[#00a3e0] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
