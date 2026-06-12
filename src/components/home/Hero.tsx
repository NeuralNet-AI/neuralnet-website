"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-black overflow-hidden" style={{ minHeight: "calc(100vh - 0px)" }}>

      {/* Full-width background: video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-homepage-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Content: centred */}
      <div className="relative z-10 flex items-center min-h-[92vh] pt-16 md:pt-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 w-full">
          <div className="text-center mx-auto max-w-[700px]">

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
              className="text-[38px] md:text-[50px] lg:text-[60px] font-bold leading-[1.07] text-white mb-7"
            >
              Maximise your current IT value. Modernise with purpose.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
              className="text-white/70 text-[18px] leading-[1.75] mb-10"
            >
              We optimise what you already have, surface the data your business
              isn&apos;t using, and deploy intelligent automation precisely where
              it drives results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.44 }}
              className="flex justify-center"
            >
              <Link
                href="/solutions/software"
                className="inline-flex items-center gap-2.5 bg-[#0A1628] text-white px-7 py-4 rounded-[6px] text-[18px] font-semibold tracking-[0.03em] hover:bg-[#0d1f3c] transition-all duration-200 group"
              >
                See what we build
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
