import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varun Das | Curious Wanderer",
  description: "Building things. Asking questions. Exploring the intersection of e-commerce, vibe coding, astronomy, and photography.",
  keywords: ["Varun Das", "portfolio", "e-commerce", "vibe coding", "photography", "astronomy"],
  authors: [{ name: "Varun Das" }],
  openGraph: {
    title: "Varun Das | Curious Wanderer",
    description: "Building things. Asking questions. Exploring the intersection of e-commerce, vibe coding, astronomy, and photography.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Das | Curious Wanderer",
    description: "Building things. Asking questions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
