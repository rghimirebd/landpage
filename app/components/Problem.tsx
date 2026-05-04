const painPoints = [
  "Your ads are spending money but not bringing enough customers.",
  "Sales feel random, so it is hard to know what to fix next.",
  "You may be posting, boosting, or trying different tactics without a clear plan."
];

const processSteps = [
  "Step 1: You share your business and current situation",
  "Step 2: We find what's not working",
  "Step 3: You get a simple, clear action plan"
];

export default function Problem() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-stone-200/80 bg-white/85 p-7 shadow-soft sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">The problem</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink">
            If customers are not coming consistently, the issue is usually not effort. It is strategy.
          </h2>
          <div className="mt-6 space-y-4">
            {painPoints.map((point) => (
              <p key={point} className="border-l-2 border-amber-300 pl-4 text-base leading-7 text-stone-700">
                {point}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-amber-200/80 bg-amber-50/80 p-7 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
            Process of this consultation
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink">
            A focused call designed to give you clarity fast.
          </h2>
          <div className="mt-6 space-y-4">
            {processSteps.map((step) => (
              <div key={step} className="rounded-2xl bg-white/80 p-4">
                <p className="text-base font-medium leading-7 text-stone-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
