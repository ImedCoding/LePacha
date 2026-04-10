import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Great_Vibes
} from "next/font/google";
import "./globals.css";
import { restaurant } from "@/data/restaurant";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700"]
});

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Restaurant Le Pacha | Grillades, pizzas et kebabs a Draveil",
  description:
    "Restaurant Le Pacha sert grillades, kebabs, sandwichs, burgers, pizzas et specialites turques a Draveil. Commandez sur Uber Eats ou appelez.",
  keywords: [
    "kebab Draveil",
    "halal restaurant Draveil",
    "Turkish restaurant Draveil",
    "pizza Draveil",
    "tacos Draveil",
    "fast food Draveil",
    "Le Pacha"
  ],
  openGraph: {
    title: "Restaurant Le Pacha | Draveil",
    description:
      "Grillades, pizzas, kebabs, sandwichs et specialites turques a Draveil.",
    images: [
      {
        url: restaurant.images.hero,
        width: 1600,
        height: 1067,
        alt: "Grilled meat with warm flame light"
      }
    ]
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${scriptFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
