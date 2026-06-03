import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Script from "next/script";
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1701287960881404');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1701287960881404&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
