import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const craze = localFont({
  src: "../assets/fonts/craze/Craze.ttf",
  variable: "--font-craze"
});

const thezore = localFont({
  src: "../assets/fonts/thezore/Thezore.ttf",
  variable: "--font-thezore"
})

// TODO: Add description
export const metadata: Metadata = {
  title: "ECHOHACK 2027",
  description: "PLACEHOLDER!!!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${craze.variable} ${thezore.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
