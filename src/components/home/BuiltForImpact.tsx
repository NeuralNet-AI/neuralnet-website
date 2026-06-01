import Image from "next/image";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function BuiltForImpact() {
  return (
    <section className="bg-[#0A1628] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[540px]">
        {/* LEFT — text content */}
        <div className="lg:w-1/2 flex items-center py-20 px-6 md:px-8 lg:py-24">
          <div className="max-w-[520px] lg:ml-auto lg:mr-0 lg:pr-16">
            <AnimateOnScroll>
              <SectionLabel text="Built for Impact" className="mb-5" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.12] mb-5">
                We engineer systems that drive real outcomes.
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-white/50 text-[18px] leading-[1.7]">
                From intelligent automation to human-centric interfaces, we
                build AI solutions that integrate seamlessly and perform at scale.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* RIGHT — full-bleed image */}
        <div className="lg:w-1/2 relative min-h-64 lg:min-h-0">
          <Image
            src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?auto=format&fit=crop&w=2400&q=90"
            alt="Architectural staircase with dramatic overhead lighting"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A1628] to-transparent" />
          <div className="absolute inset-0 bg-[#0A1628]/25" />
        </div>
      </div>
    </section>
  );
}
