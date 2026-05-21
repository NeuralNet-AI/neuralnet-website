import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function CTABanner() {
  return (
    <section className="bg-[#0A1628] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <AnimateOnScroll>
              <p className="text-[16px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-3">
                Ready to transform your operations?
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Let&apos;s build what&apos;s next.
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll delay={0.2} className="flex-shrink-0">
            <PrimaryButton href="/contact" label="Contact us" variant="dark" />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
