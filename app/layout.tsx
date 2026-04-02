import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book the Move — Exclusive Home Seller Leads for Moving Companies",
  description:
    "We email home sellers in your territory. They reply, you book the job. Exclusive leads, one mover per county. No contracts.",
  metadataBase: new URL("https://bookthemove.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Book the Move — Exclusive Home Seller Leads for Moving Companies",
    description:
      "We email home sellers in your territory. They reply, you book the job. One mover per county.",
    type: "website",
    url: "https://bookthemove.com",
    siteName: "Book the Move",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Book the Move — We Email Home Sellers. You Book The Move.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book the Move — Exclusive Home Seller Leads for Moving Companies",
    description:
      "We email home sellers in your territory. They reply, you book the job. One mover per county.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
