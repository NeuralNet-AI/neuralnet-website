"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function BuiltForImpact() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="bg-[#0A1628] overflow-hidden">
        {/* Full-bleed 2-column: left content / right image */}
        <div className="flex flex-col lg:flex-row min-h-[540px]">
          {/* LEFT — text content, centered with responsive left padding */}
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
                <p className="text-white/50 text-[18px] leading-[1.7] mb-10">
                  Watch how we turn complexity into clarity and build AI
                  solutions that perform.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.3}>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex items-center gap-4 text-white group"
                >
                  <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:bg-white/10 flex-shrink-0">
                    <Play className="w-5 h-5 ml-0.5 fill-white stroke-none" />
                  </div>
                  <span className="text-[18px] font-medium">Play video</span>
                </button>
              </AnimateOnScroll>
            </div>
          </div>

          {/* RIGHT — full-bleed image, no padding, bleeds to edge */}
          <div className="lg:w-1/2 relative min-h-64 lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?auto=format&fit=crop&w=2400&q=90"
              alt="Architectural staircase with dramatic overhead lighting"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Left edge blend so image meets dark navy seamlessly */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-transparent to-transparent lg:w-24" />
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A1628] to-transparent" />
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-[#0A1628]/25" />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-3xl aspect-video bg-[#0D1F3C] rounded-2xl flex items-center justify-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="text-white/30 text-base">Video placeholder</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
