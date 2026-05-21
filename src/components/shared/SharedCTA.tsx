import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { PrimaryButton } from "./PrimaryButton";

interface Props {
  variant?: "talk" | "contact";
  showImage?: boolean;
}

export function SharedCTA({ variant = "talk", showImage = false }: Props) {
  return (
    <section className="relative bg-[#0A1628] overflow-hidden">
      {showImage && (
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80"
            alt="Architectural staircase"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#0A1628]/80" />
        </div>
      )}

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24 text-center">
        <AnimateOnScroll>
          <p className="text-white/50 text-base tracking-widest uppercase mb-6">
            — START A PROJECT —
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-8 max-w-2xl mx-auto">
            The right system starts with the{" "}
            <span className="relative inline-block">
              <span className="bg-[#2563EB] px-2 text-white">
                right conversation.
              </span>
            </span>
          </h2>
          <p className="text-white/60 text-base mb-10">
            Tell us what your business challenges are.
            <br />
            We&apos;ll tell you what we&apos;d build.
          </p>
          <PrimaryButton
            href="/contact"
            label={variant === "talk" ? "Let's talk" : "Contact us"}
            variant="dark"
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
