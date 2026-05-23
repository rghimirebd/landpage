import type { Metadata } from "next";
import ThankYouContent from "../components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thanks | Rabindra Digital",
  description: "Watch the next-step video before your consultation."
};

export default function ThanksPage() {
  return <ThankYouContent />;
}
