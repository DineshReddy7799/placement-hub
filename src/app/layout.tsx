import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Import your custom Navbar component
import Navbar from "@/components/Navbar/Navbar";
// 2. Import the Auth Provider to wrap the app
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 3. Updated SEO metadata for your platform
export const metadata: Metadata = {
  title: "PlacementHub | Campus Jobs & Study Materials",
  description: "Latest job openings, internships, and premium study resources for engineering graduates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* 4. Wrap the Navbar and Children inside the AuthProvider */}
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}