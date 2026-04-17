const steps = [
  {
    n: "01",
    title: "Create a request",
    body: "Tell Attest who your client is and what outcome you helped them achieve. Pick a prompt template that fits the moment.",
  },
  {
    n: "02",
    title: "They answer 4\u20135 AI-guided questions",
    body: "Questions tuned to surface specific, outcome-focused responses \u2014 not another round of \u201Cit was great.\u201D",
  },
  {
    n: "03",
    title: "You approve; embed anywhere",
    body: "Claude polishes the response into a publish-ready quote. You review, approve, and ship it via embed or social card.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="w-full border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-accent">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Three steps, start to published.
          </h2>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-brand-accent">
                {step.n}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.65] text-fg-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
