"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Shield,
  BarChart2,
  TrendingUp,
  Search,
  Pencil,
  Layers,
  User,
  Mic,
  ArrowRight,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

const processSteps = [
  { icon: Code2, label: "BUILD" },
  { icon: Rocket, label: "DEPLOY" },
  { icon: Shield, label: "SECURE" },
  { icon: BarChart2, label: "EVALUATE" },
  { icon: TrendingUp, label: "SCALE" },
];

const methodology = [
  {
    num: "01",
    icon: Search,
    title: "Start with the problem",
    desc: "Every engagement begins with a scoping process. We want to understand the actual business context before recommending anything.",
  },
  {
    num: "02",
    icon: Pencil,
    title: "Design the right system",
    desc: "Not every problem needs an AI solution. When it does, we design for the specific constraints and data what's available off the shelf.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Build to production standards",
    desc: "Everything we deliver is built to be deployed, maintained, and measured. We don't hand over prototypes.",
  },
  {
    num: "04",
    icon: BarChart2,
    title: "Measure what matters",
    desc: "Performance is quantified from day one. We define success criteria before builds and we track against them.",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Refine and scale",
    desc: "We continuously learn from real usage and improve the system over time—expanding impact with confidence.",
  },
];

const capabilities = [
  {
    icon: Layers,
    title: "Software Development",
    desc: "Bespoke systems built for high-scale enterprise operations and seamless integration.",
    href: "/solutions/software",
  },
  {
    icon: User,
    title: "AI Avatars",
    desc: "Interactive digital humans for pre-recorded content and real-time engagement.",
    href: "/solutions/ai-avatars",
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    desc: "Intelligent inbound and outbound voice solutions that handle complex customer interactions.",
    href: "/solutions/ai-voice-agents",
  },
];

const team = [
  {
    name: "Sanjay Juneja",
    title: "CRO",
    desc: "Sanjay leads growth and commercial strategy at NeuralNet, working closely with clients and delivery teams to ensure solutions are executed effectively and at scale. With over 25 years in the IT sector, he has worked with some of the UK's largest organisations, delivering Microsoft-based solutions across enterprise and government environments. He is also an experienced investor, having built, scaled, and exited multiple companies across IT and healthcare.",
    img: "/sanjay.jpg",
  },
  {
    name: "Kuljit Moore",
    title: "CEO",
    desc: "Kuljit leads commercial strategy at NeuralNet, driving growth through strong client relationships and high-performing teams. She brings over 20 years of experience across private equity and the NHS, including the successful scaling and exit of a UK-based healthcare business. She also advises and serves on the boards of growing organisations, supporting their strategic direction and expansion.",
    img: "/kuljit.png",
  },
  {
    name: "Manav Yesudas",
    title: "CFO",
    desc: "Manav is responsible for financial strategy, operations, and governance at NeuralNet. A Chartered Accountant with over two decades of experience, he has led finance functions across IT and healthcare organisations, with a focus on scaling businesses and executing M&A initiatives. He has also played a key role in the scaling and exit of a healthcare business, bringing strong financial discipline and strategic rigour to every stage of growth.",
    img: "/Manav.png",
  },
  {
    name: "Devashish Mahurkar",
    title: "Commercial Tech Lead, Founder's Office",
    desc: "Devashish brings a rare combination of technical depth and commercial instinct to his role, bridging the worlds of AI and business strategy. With advanced studies in Artificial Intelligence, he works closely with clients and partners to identify where AI can create real, measurable impact. Leading the company's India presence, he works at the intersection of commercial strategy and AI delivery — playing a key role in expanding the firm's reach across one of the world's fastest-growing technology markets.",
    img: "/devashish.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#F4F4F2] pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateOnScroll>
                <SectionLabel text="About NeuralNet" className="mb-5" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-[#1A1A2E] leading-[1.1] mb-6">
                  We build systems designed for real{" "}
                  <span className="text-[#2563EB]">
                    operational environments.
                  </span>
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <p className="text-[#6B7280] text-[18px] leading-relaxed mb-8">
                  NeuralNet is a UK-based AI company. We design, build, deploy,
                  and evaluate AI solutions that solve real business problems and
                  scale with confidence.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.3} className="flex flex-wrap gap-4">
                <Link
                  href="/solutions/software"
                  className="inline-flex items-center gap-2 border-2 border-[#1A1A2E] text-[#1A1A2E] px-7 py-3.5 rounded-[6px] text-[18px] font-semibold tracking-[0.05em] hover:bg-[#1A1A2E] hover:text-white transition-all duration-200 group"
                >
                  View capabilities
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={0.2} className="relative">
              <div className="relative h-72 lg:h-[420px] rounded-xl overflow-hidden">
                <Image
                  src="/about-hero.png"
                  alt="NeuralNet HQ"
                  fill
                  className="object-cover"
                />
              </div>
              {/* HQ badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <p className="text-[18px] text-[#6B7280] uppercase tracking-wider mb-0.5">
                  HQ Location
                </p>
                <p className="text-[#1A1A2E] text-[18px] font-semibold">
                  United Kingdom
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="bg-[#0A1628]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-12">
          <div className="flex items-center justify-center gap-0">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex items-center">
                  <AnimateOnScroll delay={i * 0.1}>
                    <div className="flex flex-col items-center gap-3 px-4 md:px-8">
                      <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white/70" />
                      </div>
                      <p className="text-white/50 text-[18px] font-semibold tracking-widest">
                        {step.label}
                      </p>
                    </div>
                  </AnimateOnScroll>
                  {i < processSteps.length - 1 && (
                    <div className="flex-1 h-px bg-white/10 min-w-[20px] relative overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                        className="h-px bg-[#2563EB]/60 absolute left-0 top-0"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
            <div>
              <AnimateOnScroll>
                <SectionLabel text="Our Methodology" className="mb-4" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#1A1A2E] leading-[1.15]">
                  The methodology of{" "}
                  <span className="text-[#2563EB]">high performance.</span>
                </h2>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={0.2} className="max-w-xs md:text-right">
              <p className="text-[#6B7280] text-[18px] leading-relaxed">
                Defining success criteria from day one and tracking against them
                through custom AI systems.
              </p>
            </AnimateOnScroll>
          </div>

          {/* 5-step timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {methodology.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.num} delay={i * 0.1}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#2563EB] text-[18px] font-bold">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 bg-[#F4F4F2] rounded-full flex items-center justify-center border-2 border-white shadow-md">
                        <Icon className="w-4 h-4 text-[#2563EB]" />
                      </div>
                    </div>
                    <h3 className="text-[#1A1A2E] font-semibold text-[18px] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#6B7280] text-[18px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPERATIONAL CAPABILITIES */}
      <section className="bg-[#F4F4F2]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <AnimateOnScroll>
                <SectionLabel text="Operational Capabilities" className="mb-5" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] leading-[1.15]">
                  Enterprise systems{" "}
                  <em className="font-normal text-[#6B7280] not-italic">
                    built for scale.
                  </em>
                </h2>
              </AnimateOnScroll>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <AnimateOnScroll key={cap.title} delay={i * 0.1}>
                  <div className="bg-white rounded-xl p-7 border border-[#E5E7EB] flex gap-5 h-full">
                    <div className="w-10 h-10 bg-[#F4F4F2] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#1A1A2E]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#1A1A2E] font-semibold text-[18px] mb-1">
                        {cap.title}
                      </h3>
                      <p className="text-[#6B7280] text-[18px] leading-relaxed mb-3">
                        {cap.desc}
                      </p>
                      <Link
                        href={cap.href}
                        className="inline-flex items-center gap-1.5 text-[#2563EB] text-[18px] font-medium hover:gap-2.5 transition-all duration-200"
                      >
                        Learn more <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <AnimateOnScroll>
                <SectionLabel text="Executive Leadership" className="mb-5" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] leading-[1.15]">
                  The minds behind{" "}
                  <em className="font-normal text-[#6B7280]">NeuralNet.</em>
                </h2>
              </AnimateOnScroll>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimateOnScroll delay={0.1}>
                <p className="text-[#6B7280] text-[18px] leading-relaxed">
                  NeuralNet&apos;s leadership combines deep enterprise IT
                  expertise, financial rigour, and AI delivery — spanning over
                  25 years of experience across UK enterprise, government, and
                  healthcare sectors.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <p className="text-[#6B7280] text-[18px] leading-relaxed">
                  We operate as a close team with direct client engagement at
                  every stage. From idea to execution, you work with one unified
                  team.
                </p>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Team grid — 2 cols mobile, 4 cols desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden relative group cursor-default">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Base gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Hover overlay — covers full card, bio reads from top */}
                    <div className="absolute inset-0 bg-[#0A1628]/88 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-start p-4 pt-4 overflow-hidden">
                      <p className="text-white/80 text-[13px] leading-relaxed">
                        {member.desc}
                      </p>
                    </div>
                    {/* Name / title — hidden when bio overlay is active */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20 transition-opacity duration-300 group-hover:opacity-0">
                      <p className="text-white font-bold text-[15px] leading-tight">
                        {member.name}
                      </p>
                      <p className="text-white/60 text-[13px] mt-1">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#0A1628]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-white leading-[1.1] mb-4">
              The right system starts with the{" "}
              <span className="text-[#2563EB]">right conversation.</span>
            </h2>
            <p className="text-white/50 text-[18px] mb-10">
              Tell us what your business challenges are. We&apos;ll tell you
              what we&apos;d build.
            </p>
            <PrimaryButton
              href="/contact"
              label="Let's talk"
              variant="dark"
            />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
