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
    "We email home sellers in your territory. They reply, you book the job. One mover per county.",
  openGraph: {
    title: "Book the Move — Exclusive Home Seller Leads for Moving Companies",
    description:
      "We email home sellers in your territory. They reply, you book the job. One mover per county.",
    type: "website",
    url: "https://bookthemove.com",
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
