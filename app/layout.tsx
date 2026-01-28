import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { client } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await client.fetch(SITE_SETTINGS_QUERY);

  return {
    title: siteSettings?.title || "Nedelea David",
    description: siteSettings?.description || "editor freelancer",
    icons: siteSettings?.favicon
      ? {
          icon: urlFor(siteSettings.favicon).width(32).height(32).url(),
          shortcut: urlFor(siteSettings.favicon).width(16).height(16).url(),
          apple: urlFor(siteSettings.favicon).width(180).height(180).url(),
        }
      : undefined,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
