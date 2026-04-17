import { MarketingHeader } from "@/components/landing/marketing-header";
import { MarketingFooter } from "@/components/landing/marketing-footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";

export default function LandingPage() {
  return (
    <>
      <MarketingHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Pricing />
      </main>
      <MarketingFooter />
    </>
  );
}
