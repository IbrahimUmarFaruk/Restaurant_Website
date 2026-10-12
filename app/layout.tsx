import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./cartcontext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'EDC Kitchen | The Best Food in Town',
  description: 'Order delicious meals directly from EDC Kitchen. Fast delivery and fresh ingredients.',
  keywords: ['restaurant', 'food', 'EDC Kitchen', 'order food online'],
  other: {
    "google-site-verification": "<meta name="google-site-verification" content="a5TAVc3ObbJcPVRrDpnh2OmKpjMTfhk7mf4LmElosuw" />",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">  <CartProvider>{children}</CartProvider></body>
    </html>
  );
}
