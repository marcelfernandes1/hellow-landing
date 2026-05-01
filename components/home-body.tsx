import { PageShell } from "@/components/page-shell";
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
import type { Locale } from "@/lib/i18n/types";

export function HomeBody({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} showExitIntent>
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
    </PageShell>
  );
}
