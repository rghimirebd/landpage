export default function Urgency() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-7 py-10 text-white sm:px-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Limited slots</p>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              Free 1-on-1 strategy calls stay valuable only when the number of bookings stays limited.
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-300">
              If you want a customized marketing plan for your business, book your consultation before the available
              slots fill up.
            </p>
          </div>
          <a
            href="#cta-form"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-ink transition hover:bg-amber-50"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
