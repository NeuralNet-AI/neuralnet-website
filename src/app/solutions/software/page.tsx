import Image from "next/image";
import {
  Code2,
  Layers,
  RefreshCw,
  Database,
  Zap,
  Brain,
  Sparkles,
  ArrowRight,
  Smartphone,
  Cloud,
  GitMerge,
  CheckCircle2,
  Pen,
  Bot,
  Lightbulb,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SharedCTA } from "@/components/shared/SharedCTA";

const capabilities = [
  {
    num: "01",
    icon: Code2,
    title: "CUSTOM SOFTWARE APPLICATION DEVELOPMENT",
  },
  {
    num: "02",
    icon: Layers,
    title: "PLATFORM ARCHITECTURE AND BUILD",
  },
  {
    num: "03",
    icon: RefreshCw,
    title: "LEGACY SYSTEM INTEGRATION AND MODERNISATION",
  },
  {
    num: "04",
    icon: Database,
    title: "DATABASE ARCHITECTURE AND DATA PIPELINE ENGINEERING",
  },
  {
    num: "05",
    icon: Zap,
    title: "SYSTEMS SCOPING, TECHNICAL SPECIFICATION, AND PROJECT DELIVERY",
  },
  {
    num: "06",
    icon: Smartphone,
    title: "MOBILE APP DEVELOPMENT (iOS & ANDROID)",
  },
  {
    num: "07",
    icon: Cloud,
    title: "CLOUD INFRASTRUCTURE & MIGRATION (AWS / AZURE)",
  },
  {
    num: "08",
    icon: GitMerge,
    title: "DEVOPS & CI/CD PIPELINE ENGINEERING",
  },
  {
    num: "09",
    icon: CheckCircle2,
    title: "QUALITY ASSURANCE & AUTOMATED TESTING",
  },
  {
    num: "10",
    icon: Pen,
    title: "UX & PRODUCT DESIGN",
  },
  {
    num: "11",
    icon: Bot,
    title: "AI-INFUSED PRODUCT DEVELOPMENT",
  },
  {
    num: "12",
    icon: Lightbulb,
    title: "DISCOVERY & INNOVATION SPRINTS",
  },
];

const useCases = [
  {
    num: "01",
    title: "Internal Operations Platform",
    desc: "Replace a stack of disconnected tools with a single, purpose-built system your teams actually use.",
    img: "/software-internal-ops.png",
  },
  {
    num: "02",
    title: "Client-Facing Product",
    desc: "From architecture to first deployment — we build the platform and the infrastructure underneath it.",
    img: "/software-client-product.png",
  },
  {
    num: "03",
    title: "API Layer for AI Integration",
    desc: "Build the connective tissue between your data, application, platform, and the workflows that depend on them.",
    img: "/software-api-layer.png",
  },
  {
    num: "04",
    title: "Modernisation",
    desc: "Structured migration from systems that are slowing you down to infrastructure that won't.",
    img: "/software-modernisation.png",
  },
];

export default function SoftwarePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#F4F4F2] pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateOnScroll>
                <SectionLabel text="Solutions" className="mb-5" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#1A1A2E] leading-[1.1] mb-6">
                  Infrastructure built for the way{" "}
                  <span className="text-[#2563EB]">
                    business actually works.
                  </span>
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <p className="text-[#6B7280] text-[16px] leading-relaxed mb-8">
                  We design and build custom systems, platforms, and AI
                  solutions that integrate seamlessly into your operations and
                  scale with your ambition.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.3}>
                <PrimaryButton
                  href="/contact"
                  label="Let's build your system"
                  variant="light"
                />
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={0.2} className="relative">
              <div className="relative h-72 lg:h-[420px] rounded-xl overflow-hidden">
                <Image
                  src="/software-hero.png"
                  alt="London"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CUSTOM SYSTEMS */}
      <section className="bg-[#0A1628]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-14">
            <div>
              <AnimateOnScroll>
                <SectionLabel text="Custom Systems" className="mb-4" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  BUILT FOR SCALE.
                </h2>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={0.2} className="max-w-xs">
              <p className="text-white/50 text-[16px] leading-relaxed">
                NeuralNet&apos;s software development practice delivers custom
                software, platforms, APIs, and backend infrastructure that power
                complex operations.
              </p>
            </AnimateOnScroll>
          </div>

          {/* 4-column grid — 3 rows of 4 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 rounded-xl overflow-hidden mb-8">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <AnimateOnScroll key={cap.num} delay={i * 0.06}>
                  <div className="p-6 border-r border-b border-white/10 [&:nth-last-child(-n+2)]:border-b-0 [&:nth-last-child(-n+4)]:md:border-b-0 h-full">
                    <p className="text-white/20 text-[16px] font-medium mb-3">
                      {cap.num}
                    </p>
                    <Icon className="w-5 h-5 text-white/60 mb-4" />
                    <p className="text-white/70 text-[16px] font-semibold tracking-wider leading-tight">
                      {cap.title}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Operational philosophy box */}
          <AnimateOnScroll delay={0.2}>
            <div className="border border-white/10 rounded-xl p-8 relative">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="text-[16px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-3">
                    Operational Philosophy
                  </p>
                  <p className="text-white text-[16px] leading-relaxed">
                    <span className="font-semibold">
                      Our collaborative approach
                    </span>{" "}
                    ensures that we understand your unique challenges. We build
                    feature-rich, scalable applications that automate
                    time-intensive tasks and optimise workflows, all while being
                    production-ready and fully integrated.
                  </p>
                </div>
                <div className="w-10 h-10 flex-shrink-0 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SPECIALISATION */}
      <section className="bg-[#F4F4F2]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <AnimateOnScroll className="mb-12">
            <SectionLabel text="Specialisation" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <AnimateOnScroll delay={0.1}>
              <div className="bg-white rounded-xl p-8 border border-[#E5E7EB]">
                <div className="w-10 h-10 bg-[#0A1628] rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <p className="text-[16px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-2">
                  Synthesis
                </p>
                <h3 className="text-[22px] font-bold text-[#1A1A2E] mb-1">
                  Generative AI
                </h3>
                <p className="text-[16px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-4">
                  Intelligence Layer
                </p>
                <p className="text-[#6B7280] text-[16px] leading-relaxed mb-5">
                  Content-generation systems and customer experience enhancers
                  that integrate into existing infrastructure.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["LLM", "FINE-TUNING", "VECTOR DB"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-[#6B7280] text-[16px] font-semibold tracking-wider rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Card 2 */}
            <AnimateOnScroll delay={0.2}>
              <div className="bg-white rounded-xl p-8 border border-[#E5E7EB]">
                <div className="w-10 h-10 bg-[#0A1628] rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <p className="text-[16px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-2">
                  Interface
                </p>
                <h3 className="text-[22px] font-bold text-[#1A1A2E] mb-1">
                  AI-Powered Apps
                </h3>
                <p className="text-[16px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-4">
                  Operational Layer
                </p>
                <p className="text-[#6B7280] text-[16px] leading-relaxed mb-5">
                  Intuitive web and mobile applications that leverage AI to
                  drive engagement and personalised experiences.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["FULL-STACK", "REAL-TIME", "UX/UI"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-[#6B7280] text-[16px] font-semibold tracking-wider rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* OPERATIONAL USE CASES */}
      <section className="bg-[#F4F4F2] border-t border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
            <AnimateOnScroll>
              <SectionLabel text="Operational Use Cases" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1} className="max-w-xs md:text-right">
              <p className="text-[#6B7280] text-[16px] leading-relaxed">
                Specific deployment scenarios where NeuralNet infrastructure
                solves complex organisational challenges.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <AnimateOnScroll key={uc.num} delay={i * 0.1}>
                <div className="flex gap-5 items-start bg-white rounded-xl p-6 border border-[#E5E7EB]">
                  <div className="relative w-28 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={uc.img}
                      alt={uc.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#2563EB] text-[16px] font-bold mb-1">
                      {uc.num}
                    </p>
                    <h3 className="text-[#1A1A2E] font-bold text-[16px] mb-2">
                      {uc.title}
                    </h3>
                    <p className="text-[#6B7280] text-[16px] leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80"
            alt="Architectural staircase"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0A1628]/75" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white leading-[1.15]">
                The right system starts with the{" "}
                <span className="text-[#2563EB]">right conversation.</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <p className="text-white/50 text-[16px] leading-relaxed mb-8">
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
        </div>
      </section>
    </>
  );
}
