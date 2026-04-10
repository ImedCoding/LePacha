import type { Metadata } from "next";
import "./globals.css";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Le Pacha 2 | Kebab, tacos et halal a Draveil",
  description:
    "Le Pacha 2 sert kebabs, sandwichs, tacos, burgers et grillades halal a Draveil. Commandez sur Uber Eats ou appelez pour un repas rapide et genereux.",
  keywords: [
    "kebab Draveil",
    "halal restaurant Draveil",
    "Turkish restaurant Draveil",
    "tacos Draveil",
    "fast food Draveil",
    "Le Pacha 2"
  ],
  openGraph: {
    title: "Le Pacha 2 | Kebab halal a Draveil",
    description:
      "Kebabs, assiettes, tacos, burgers et grillades halal a Draveil.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
