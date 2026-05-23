import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rabindradigital.com"),
  title: "Rabindra Digital | Free Consultation for Business Owners in Nepal",
  description:
    "Get a free PDF guide and a free 1:1 digital marketing consultation designed for Nepal-based business owners who want more leads, customers, and sales.",
  openGraph: {
    title: "Rabindra Digital | Free Consultation for Business Owners in Nepal",
    description:
      "A premium landing page experience for Nepal-based business owners who want clear digital marketing direction and more customers.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabindra Digital | Free Consultation for Business Owners in Nepal",
    description:
      "Get a free PDF guide and a free 1:1 digital marketing consultation designed for Nepal-based business owners."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
