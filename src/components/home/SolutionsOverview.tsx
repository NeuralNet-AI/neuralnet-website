"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Sparkles, CirclePlus, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { SectionLabel } from "@/components/shared/SectionLabel";

const cards = [
  {
    icon: Code2,
    title: "Software\nDevelopment",
    description:
      "Custom software engineered for performance, scalability and long-term value.",
    href: "/solutions/software",
    imageSrc: "/solutions-software.png",
    imageAlt: "Software Development",
  },
  {
    icon: Sparkles,
    title: "AI Avatar\nSolutions",
    description:
      "Realistic AI avatars for brand presence, training, customer experience and more.",
    href: "/solutions/ai-avatars",
    imageSrc: "/solutions-ai-avatars.png",
    imageAlt: "AI Avatar Solutions",
  },
  {
    icon: CirclePlus,
    title: "AI Voice\nAgents",
    description:
      "Intelligent voice agents that engage, assist and resolve — 24/7, at scale.",
    href: "/solutions/ai-voice-agents",
    imageSrc: "/solutions-ai-voice-agents.png",
    imageAlt: "AI Voice Agents",
  },
];

export function SolutionsOverview() {
  return (
    <section className="bg-[#F4F4F2]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
        {/* Header */}
        <AnimateOnScroll className="mb-3">
          <SectionLabel text="Solutions Overview" />
        </AnimateOnScroll>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <AnimateOnScroll delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1A1A2E] leading-[1.15] max-w-sm">
              AI systems designed around your operations.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-[#6B7280] text-[18px] leading-relaxed max-w-[260px] md:text-right">
              From intelligent automation to human-centric interfaces, we build
              solutions that solve real business problems.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Cards grid — equal height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimateOnScroll key={card.href} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative bg-[#0D1F3C] rounded-2xl overflow-hidden flex flex-col h-full group hover:shadow-2xl hover:shadow-blue-900/20 hover:border-[#2563EB]/30 border border-transparent transition-all duration-300"
                  style={{ minHeight: 420 }}
                >
                  {/* Image area — top 45% */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Dark overlay — heavier at bottom to blend with card */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F3C]/20 via-transparent to-[#0D1F3C]" />
                    {/* Icon box — top left, over the image */}
                    <div className="absolute top-4 left-4 w-9 h-9 bg-[#1E3A5F]/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-col flex-1 p-7 pt-5">
                    <h3 className="text-white font-bold text-[20px] leading-[1.2] mb-3 whitespace-pre-line">
                      {card.title}
                    </h3>
                    <p className="text-white/45 text-[18px] leading-[1.65] flex-1 mb-6">
                      {card.description}
                    </p>
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-white/60 text-[18px] font-medium hover:text-white transition-colors duration-200 group/link"
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
