import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { ProblemStats } from "@/components/sections/problem-stats";
import { IndustryValidation } from "@/components/sections/industry-validation";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { Results } from "@/components/sections/results";
import { ROICalculator } from "@/components/sections/roi-calculator";
import { Pricing } from "@/components/sections/pricing";
import { Founder } from "@/components/sections/founder";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { ExitIntentPopup } from "@/components/exit-intent-popup";

export default function HomePage() {
  return (
    <main className="relative bg-bg text-ink">
      <Nav />
      <Hero />
      <ProblemStats />
      <IndustryValidation />
      <HowItWorks />
      <Features />
      <Results />
      <ROICalculator />
      <Pricing />
      <Founder />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
      <ExitIntentPopup />
    </main>
  );
}
