type HeroProps = {
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
};

export default function Hero({
  headline,
  subheadline,
  description,
  ctaText
}: HeroProps) {
  return (
    <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-stone-200/70 bg-white/90 px-6 py-8 shadow-soft backdrop-blur sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm font-semibold text-clay">
              Free 1-on-1 Consultation for Business Owners in Nepal
            </span>
            <h1 className="mt-6 font-display text-5xl leading-tight text-ink sm:text-6xl">
              {headline}
            </h1>
            <p className="mt-5 text-lg leading-8 text-stone-700 sm:text-xl">
              {subheadline}
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#cta-form"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 py-3 text-base font-semibold text-white transition hover:bg-stone-800"
              >
                {ctaText}
              </a>
              <p className="text-sm text-stone-500">Customized strategy. Clear next steps. No spam.</p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-sand p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
              What you will walk away with
            </p>
            <div className="mt-6 space-y-5">
              {[
                "A clear view of why your current marketing is not working",
                "A simple plan to bring daily customers",
                "Practical clarity on where you should stop wasting money"
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-bronze" />
                  <p className="text-base leading-7 text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
