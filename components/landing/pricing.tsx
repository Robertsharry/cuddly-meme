import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$19",
    cadence: "/month",
    tagline: "Perfect for solo coaches and consultants.",
    features: [
      "Up to 25 testimonials per month",
      "All 5 AI prompt templates",
      "Embed widget for your site",
      "Social share cards",
    ],
    cta: "Start free trial",
  },
  {
    name: "Pro",
    price: "$39",
    cadence: "/month",
    tagline: "For growing agencies and info creators.",
    features: [
      "Unlimited testimonials",
      "Custom domain for request pages",
      "Remove \u201CPowered by Attest\u201D branding",
      "Priority support",
    ],
    cta: "Start free trial",
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-accent">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Simple pricing. Start with a 7-day trial.
          </h2>
          <p className="mx-auto mt-3 text-base text-fg-muted">
            No card required to start. Cancel any time from your dashboard.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col rounded-2xl border bg-card p-8 shadow-soft",
                tier.featured
                  ? "border-primary/40 ring-1 ring-primary/20"
                  : "border-border",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">
                  {tier.name}
                </h3>
                {tier.featured && (
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-fg-muted">{tier.tagline}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground">
                  {tier.price}
                </span>
                <span className="text-sm text-fg-subtle">{tier.cadence}</span>
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-brand-accent"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                variant={tier.featured ? "default" : "outline"}
                className="mt-8 h-11 text-base"
              >
                <Link href="/login">{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
