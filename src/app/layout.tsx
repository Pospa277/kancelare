import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "FREEWORK | Luxusní kanceláře v centru Olomouce",
    template: "%s | FREEWORK Olomouce",
  },
  description:
    "Pronájem luxusních kanceláří, coworkingových prostor a zasedacích místností v srdci Olomouce. Soukromé kanceláře, sdílené prostory, školení a workshopy.",
  keywords: [
    "kanceláře Olomouc",
    "coworking Olomouc",
    "pronájem kanceláří",
    "zasedací místnosti",
    "sdílené kanceláře",
    "FREEWORK",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
