import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "./providers";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Barsa Priyadarshini Jena — Portfolio",
    template: "%s — Barsa Priyadarshini Jena",
  },
  description: "Portfolio, services, and case studies.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"
  ),
  openGraph: {
    title: "Barsa Priyadarshini Jena — Portfolio",
    description: "Portfolio, services, and case studies.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barsa Priyadarshini Jena",
    description: "Portfolio, services, and case studies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProviders>
          <Header />
          <main className="min-h-[calc(100vh-7rem)]">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
