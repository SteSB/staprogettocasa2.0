import type { Metadata } from "next";
import Image from 'next/image'
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Topnav from "@/components/Topnav";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "STA Progetto Casa",
  description: "Sito web di STA Progetto Casa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[white]`}
      >
        <Topnav />
        <div className="mt-28 mb-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
