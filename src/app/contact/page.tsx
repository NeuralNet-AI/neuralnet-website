import Image from "next/image";
import { Mail, MapPin, Headphones } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[calc(100vh-80px)]">
        {/* LEFT SIDE */}
        <div className="relative bg-[#F4F4F2] flex flex-col justify-between overflow-hidden">
          {/* Background image overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=70"
              alt="Architectural interior"
              fill
              className="object-cover opacity-[0.08]"
            />
          </div>

          {/* Top content */}
          <div className="relative px-8 md:px-14 py-16 flex-1">
            <AnimateOnScroll>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#2563EB]">
                  Get in Touch
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.05] mb-6 text-[#1A1A2E]">
                TELL US WHAT YOU&apos;RE
                <br />
                <span className="text-[#2563EB]">TRYING TO SOLVE.</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="text-[#6B7280] text-[18px] leading-relaxed mb-6 max-w-md">
                Whether you have a clear roadmap or need help defining the
                problem, we&apos;re here to listen and build the right system
                with you.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <div className="w-10 h-0.5 bg-[#2563EB] mb-10" />
            </AnimateOnScroll>

            {/* Contact blocks */}
            <div className="space-y-7">
              <AnimateOnScroll delay={0.3}>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-[#0A1628] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#6B7280] mb-1">
                      Direct Communication
                    </p>
                    <a
                      href="mailto:info@neuralnet.uk"
                      className="text-[#1A1A2E] font-bold text-[18px] hover:text-[#2563EB] transition-colors"
                    >
                      info@neuralnet.uk
                    </a>
                    <p className="text-[#9CA3AF] text-[18px] font-medium tracking-wider uppercase mt-0.5">
                      United Kingdom
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.35}>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-[#0A1628] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#6B7280] mb-1">
                      Contact Address
                    </p>
                    <p className="text-[#1A1A2E] font-bold text-[18px]">
                      101 New Cavendish St,
                      <br />
                      London W1W 6XH
                    </p>
                    <p className="text-[#9CA3AF] text-[18px] font-medium tracking-wider uppercase mt-0.5">
                      United Kingdom
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Bottom dark strip */}
          <div className="relative bg-[#0A1628] px-8 md:px-14 py-10 mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-[18px]">
                Prefer a conversation?
              </p>
              <p className="text-white/50 text-[18px]">
                Let&apos;s talk through your challenges.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Form card */}
        <div className="bg-white lg:bg-[#F4F4F2] flex items-start justify-center py-16 px-6 md:px-10 lg:px-14 overflow-y-auto">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 md:p-10 my-4">
            <AnimateOnScroll>
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
