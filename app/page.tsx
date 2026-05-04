import type { Metadata } from "next";
import Benefits from "./components/Benefits";
import CTAForm from "./components/CTAForm";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Urgency from "./components/Urgency";

export const metadata: Metadata = {
  title: "Get Consistent Customers for Your Business",
  description:
    "Book a free 1-on-1 consultation for business owners in Nepal and get a clear marketing plan made for your business.",
  openGraph: {
    title: "Get Consistent Customers for Your Business - Not Random Sales",
    description:
      "If your ads aren't working or customers aren't coming, this will show you exactly what to fix.",
    url: "https://example.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Consistent Customers for Your Business - Not Random Sales",
    description:
      "If your ads aren't working or customers aren't coming, this will show you exactly what to fix."
  }
};

const benefits = [
  "Know why your current marketing is not working",
  "Get a clear plan to bring daily customers",
  "Learn what to stop wasting money on",
  "Understand how to get consistent leads"
];

export default function HomePage() {
  return (
    <main className="pb-16">
      <Hero
        headline="Get Consistent Customers for Your Business - Not Random Sales"
        subheadline="If your ads aren't working or customers aren't coming, this will show you exactly what to fix."
        description="This is a free 1-on-1 consultation for business owners in Nepal. You'll get a clear marketing plan made for your business."
        ctaText="Book Free Consultation"
      />
      <Problem />
      <Benefits benefits={benefits} />
      <Urgency />
      <CTAForm />
    </main>
  );
}
