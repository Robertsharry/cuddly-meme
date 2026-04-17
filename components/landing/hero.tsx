import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TransformTagline } from "@/components/brand/transform-tagline";

export function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-16 pb-20 md:gap-12 md:px-8 md:pt-24 md:pb-28">
        <TransformTagline size="hero" className="max-w-[960px]" />
        <div className="flex flex-col gap-6 max-w-[640px]">
          <p className="text-base text-fg-muted md:text-lg">
            AI-guided testimonial collection for consultants, coaches,
            and agencies. Turn every client ask into a publish-ready
            quote &mdash; without the awkward follow-ups.
          </p>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 w-full px-6 text-base sm:w-auto"
            >
              <Link href="/login">Start free trial</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-12 w-full px-6 text-base text-fg-muted sm:w-auto"
            >
              <Link href="#how">See how it works</Link>
            </Button>
          </div>
          <p className="text-sm text-fg-subtle">
            7-day trial &middot; no card required &middot; embed anywhere
          </p>
        </div>
      </div>
    </section>
  );
}
