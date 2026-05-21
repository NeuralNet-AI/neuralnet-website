"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden" style={{ minHeight: "calc(100vh - 0px)" }}>

      {/* ── Full-width background: video ── */}
      <div className="absolute inset-0">
        <div className="w-full h-full relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-homepage-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Seamless white→transparent gradient overlay — left 65% fades to the image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, #ffffff 30%, rgba(255,255,255,0.90) 40%, rgba(255,255,255,0.55) 52%, rgba(255,255,255,0.10) 65%, rgba(255,255,255,0) 72%)",
          }}
        />
        {/* Very subtle top/bottom vignette to ground the section */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/20 pointer-events-none" />
      </div>

      {/* ── Content: left-aligned, over the white fade zone ── */}
      <div className="relative z-10 flex items-center min-h-[92vh] pt-16 md:pt-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 w-full">
          <div className="max-w-[540px]">

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
              className="text-[38px] md:text-[50px] lg:text-[60px] font-bold leading-[1.07] text-[#0A1628]"
            >
              Most organisations don&apos;t have an AI problem.
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
              className="text-[38px] md:text-[50px] lg:text-[60px] font-extrabold leading-[1.07] text-[#2563EB] mt-1 mb-7"
            >
              They have a business problem.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
              className="text-[#6B7280] text-[16px] leading-[1.75] mb-10 max-w-[390px]"
            >
              We build AI solutions that integrate, automate and scale
              operations—delivering measurable outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.44 }}
            >
              <Link
                href="/solutions/software"
                className="inline-flex items-center gap-2.5 bg-[#0A1628] text-white px-7 py-4 rounded-[6px] text-[16px] font-semibold tracking-[0.03em] hover:bg-[#0d1f3c] transition-all duration-200 group"
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
