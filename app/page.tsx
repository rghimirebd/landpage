import Image from "next/image";
import type { Metadata } from "next";
import FaqAccordion from "./components/FaqAccordion";
import FlodeskConsultationForm from "./components/FlodeskConsultationForm";
import {
  consultationSteps,
  faqs,
  painPoints,
  siteContent,
  solutionPoints
} from "./lib/site-content";

export const metadata: Metadata = {
  title: "Free 1:1 Digital Marketing Consultation | Rabindra Digital",
  description:
    "A clean, conversion-focused landing page offering a free PDF guide and a free 1:1 consultation for Nepal-based business owners."
};

export default function HomePage() {
  return (
    <main className="overflow-hidden pb-16 text-brand-charcoal">
      <section className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-[24rem] bg-[radial-gradient(circle_at_top,rgba(224,177,76,0.22),transparent_32%)]" />
        <div className="mx-auto flex max-w-3xl justify-center px-2 py-1 sm:px-3">
          <div className="flex justify-center">
            <Image
              src="/rabindra-digital-logo.png"
              alt="Rabindra Digital logo"
              width={640}
              height={160}
              priority
              className="h-auto w-[210px] mix-blend-multiply sm:w-[280px] lg:w-[340px]"
            />
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-8 pt-5 sm:px-6 sm:pt-7 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#8b651b] sm:text-sm">
            {siteContent.consultationLabel}
          </p>
          <h1 className="mx-auto mt-7 max-w-4xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {siteContent.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-8 text-brand-charcoal/85 sm:text-xl">
            {siteContent.subheadline}
          </p>
          <div className="mx-auto mt-5 max-w-3xl space-y-3 text-base leading-8 text-brand-charcoal/80 sm:text-lg">
            <p>
              The PDF Guide will right away show you 5 marketing mistakes that are quietly killing your sales.
            </p>
            <p>
              And, in the 45-minute call, I&apos;ll understand your business and give you a simple digital marketing
              plan to help you get more leads, customers, and sales.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#consultation-form"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-base font-semibold text-brand-charcoal shadow-[0_18px_40px_rgba(224,177,76,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-gold-soft"
            >
              {siteContent.ctaText}
            </a>
          </div>

        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-white/82 p-7 shadow-soft backdrop-blur sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b651b]">The Problem</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
              If digital marketing feels confusing, expensive, or inconsistent, you are not alone.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-brand-muted sm:text-lg">
              Many business owners in Nepal are working hard online, but the effort still does not turn into steady
              customers. This page is built for that exact situation.
            </p>

            <div className="mt-8 space-y-4">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-[1.4rem] border border-brand-charcoal/8 bg-brand-cream/70 p-4"
                >
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-brand-gold" />
                  <p className="text-sm leading-7 text-brand-charcoal/82 sm:text-base">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-brand-charcoal p-7 text-white shadow-[0_30px_100px_rgba(18,18,18,0.22)] sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">The Solution</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight sm:text-4xl">
              In one focused consultation, you get clarity on what to fix and what to do next.
            </h2>
            <div className="mt-8 space-y-4">
              {solutionPoints.map((point) => (
                <div key={point} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-sm leading-7 text-white/78 sm:text-base">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[1.6rem] border border-brand-gold/25 bg-brand-gold/10 p-5">
              <p className="text-sm leading-7 text-white/78 sm:text-base">
                This is not generic advice. The goal is to help you, as a business owner, understand your next best
                move with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2.2rem] border border-white/60 bg-white/78 p-7 shadow-soft backdrop-blur sm:p-9 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b651b]">Consultation Process</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">How The Free Consultation Works</h2>
            <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
              The steps are simple, clear, and designed to help serious business owners move forward fast.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {consultationSteps.map((step, index) => (
              <div
                key={step}
                className="group rounded-[1.6rem] border border-brand-charcoal/8 bg-gradient-to-b from-white to-brand-cream/70 p-5 shadow-[0_15px_45px_rgba(18,18,18,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-charcoal text-lg font-semibold text-brand-gold transition group-hover:scale-105">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-base font-medium leading-7 text-brand-charcoal/86">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-2 pt-2 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl justify-center">
          <a
            href="#consultation-form"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-base font-semibold text-brand-charcoal shadow-[0_18px_40px_rgba(224,177,76,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-gold-soft"
          >
            Download Free PDF Guide
          </a>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2.2rem] bg-brand-charcoal p-7 shadow-[0_32px_120px_rgba(18,18,18,0.24)] sm:p-9 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">FAQ</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
              Questions business owners usually ask before booking
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              Everything here is designed to make the next step feel simple and clear.
            </p>
          </div>

          <div className="mt-8">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section id="consultation-form" className="px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] bg-brand-charcoal p-7 text-white shadow-[0_30px_100px_rgba(18,18,18,0.22)] sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">Book Your Call</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">{siteContent.formHeading}</h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:text-lg">{siteContent.formDescription}</p>

            <div className="mt-8 space-y-4">
              {[
                "Get the FREE PDF guide in your inbox after submitting.",
                "Schedule your appointment from the next-step link you receive."
              ].map((item) => (
                <div key={item} className="flex gap-4 rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-brand-gold" />
                  <p className="text-sm leading-7 text-white/78 sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/88 p-3 shadow-soft backdrop-blur sm:p-4">
            <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,238,226,0.9))] p-2 sm:p-3">
              <FlodeskConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
