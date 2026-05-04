import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Free Digital Marketing Consultation",
  description:
    "Book a free 1-on-1 digital marketing consultation and get a customized marketing plan for your business.",
  openGraph: {
    title: "Free Digital Marketing Consultation",
    description:
      "Book a free 1-on-1 digital marketing consultation and get a customized marketing plan for your business.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Digital Marketing Consultation",
    description:
      "Book a free 1-on-1 digital marketing consultation and get a customized marketing plan for your business."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
