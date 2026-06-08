// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "../components/Navbar/Navbar"; 
import { AuthProvider } from "../context/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlacementHub - Your All-in-One Placement Companion",
  description: "Centralized off-campus drive listings, curated study materials, and trackers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* 💰 Live Google AdSense Auto-Ads Script (Moved to Body for Next.js Compliance) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8205637704400457"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}