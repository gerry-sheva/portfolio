import type { Metadata } from "next";
import {Cormorant_SC, Commissioner} from "next/font/google"
import "./globals.css";

const cormorantSC = Cormorant_SC({
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-cormorant-sc",
  subsets: ["latin"],
})

const commissioner = Commissioner({
  weight: ["400", "500"],
  style: "normal",
  variable: "--font-commissioner",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Sheva's Portfolio",
  description: "Portfolio of Gerry Sheva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
    <body
        className={`${cormorantSC.variable} ${commissioner.variable} antialiased px-12 lg:px-52 py-8`}
    >
    {children}
    </body>
    </html>
  );
}
