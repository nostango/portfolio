import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GridBackground } from "@/components/scroll-behavior/grid-background"
import { GridFade } from "@/components/scroll-behavior/grid-fade"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nostango",
  description: "who is nostango?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GridBackground />
        <GridFade />
        {children}
      </body>
    </html>
  );
}
