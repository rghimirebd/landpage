type BenefitsProps = {
  benefits: string[];
};

export default function Benefits({ benefits }: BenefitsProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-stone-200/80 bg-white/85 p-7 shadow-soft sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
          How you benefit from this consultation
        </p>
        <div className="mt-4 max-w-2xl">
          <h2 className="font-display text-4xl leading-tight text-ink">
            Everything here is designed to help you make better marketing decisions with confidence.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="rounded-[1.5rem] border border-stone-200 bg-sand p-5 transition hover:-translate-y-0.5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                0{index + 1}
              </p>
              <p className="mt-3 text-lg leading-7 text-stone-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
