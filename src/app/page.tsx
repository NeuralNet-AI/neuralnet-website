import { Hero } from "@/components/home/Hero";
import { ApproachStrip } from "@/components/home/ApproachStrip";
import { SolutionsOverview } from "@/components/home/SolutionsOverview";
import { BuiltForImpact } from "@/components/home/BuiltForImpact";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ApproachStrip />
      <SolutionsOverview />
      <BuiltForImpact />
      <CTABanner />
    </>
  );
}
