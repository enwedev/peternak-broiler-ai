import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Peternak Broiler AI",
  description: "AI-powered management for broiler chicken farming",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Broiler AI",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#000000",
};

import PWARegistration from "@/components/PWARegistration";
import BottomNav from "@/components/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-200">
        <main className="flex-1 pb-20 overflow-auto">
          {children}
        </main>
        <BottomNav />
        <PWARegistration />
      </body>
    </html>
  );
}
