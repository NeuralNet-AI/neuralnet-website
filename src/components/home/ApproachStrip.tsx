import { Maximize2, Aperture, TrendingUp } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { SectionLabel } from "@/components/shared/SectionLabel";

const items = [
  {
    icon: Maximize2,
    title: "Automate",
    description:
      "Eliminate manual work and operational bottlenecks with intelligent automation.",
  },
  {
    icon: Aperture,
    title: "Refine",
    description:
      "Improve accuracy, efficiency and decision making with continuous optimisation.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description:
      "Build systems that grow with your business and adapt to future demands.",
  },
];

export function ApproachStrip() {
  return (
    <section className="bg-[#0A1628]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-14">
        <AnimateOnScroll className="mb-10">
          <SectionLabel text="Our Approach" />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.09]">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll key={item.title} delay={i * 0.1}>
                <div className="md:px-8 first:pl-0 last:pr-0 py-7 md:py-0">
                  <div className="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-white/70" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-white font-semibold text-[17px] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/42 text-[18px] leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
