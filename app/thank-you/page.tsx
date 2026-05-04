import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Free Consultation",
  description: "Your consultation request has been received."
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-stone-200 bg-white/90 p-8 text-center shadow-soft sm:p-12">
        <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-2xl font-semibold text-clay">
          Thank you
        </span>
        <h1 className="mt-6 font-display text-5xl leading-tight text-ink sm:text-6xl">
          Your consultation request has been received.
        </h1>
        <p className="mt-5 text-lg leading-8 text-stone-700">
          Thank you for booking your free 1:1 consultation. The next step is simple: check your email and WhatsApp
          for the follow-up details.
        </p>
        <div className="mx-auto mt-8 max-w-xl rounded-[1.5rem] bg-sand p-6 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">What happens next</p>
          <div className="mt-4 space-y-3 text-base leading-7 text-stone-700">
            <p>1. Your details are reviewed.</p>
            <p>2. You'll be contacted with the next step for your consultation.</p>
            <p>3. We'll use your information to prepare a customized strategy for your business.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 py-3 text-base font-semibold text-white transition hover:bg-stone-800"
          >
            Back to Landing Page
          </Link>
          <a
            href="mailto:hello@example.com"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 px-7 py-3 text-base font-semibold text-stone-700 transition hover:bg-stone-50"
          >
            Check Email for Updates
          </a>
        </div>
      </section>
    </main>
  );
}
