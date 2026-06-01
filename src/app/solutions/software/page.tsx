import Image from "next/image";
import {
  Code2,
  Layers,
  RefreshCw,
  Database,
  Zap,
  Brain,
  Sparkles,
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

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software\nApplication Development",
    desc: "Purpose-built applications designed to automate, scale and integrate with your existing stack.",
    img: "/cap-custom-software.png",
  },
  {
    icon: Layers,
    title: "Platform Architecture\nand Build",
    desc: "End-to-end platform design and construction, built for performance from day one.",
    img: "/cap-platform-architecture.png",
  },
  {
    icon: RefreshCw,
    title: "Legacy System Integration\nand Modernisation",
    desc: "Structured migration from systems that slow you down to infrastructure that won't.",
    img: "/cap-legacy-integration.png",
  },
  {
    icon: Database,
    title: "Database Architecture &\nData Pipeline Engineering",
    desc: "Reliable, scalable data infrastructure that powers decisions and keeps operations moving.",
    img: "/cap-database-engineering.png",
  },
  {
    icon: Zap,
    title: "Systems Scoping &\nProject Delivery",
    desc: "Clear technical blueprints and delivery frameworks that turn requirements into working software.",
    img: "/cap-systems-scoping.png",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development\n(iOS & Android)",
    desc: "Native and cross-platform mobile applications built for real-world performance and usability.",
    img: "/cap-mobile-app.png",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure &\nMigration (AWS / Azure)",
    desc: "Cloud architecture, provisioning and migration engineered for resilience and cost efficiency.",
    img: "/cap-cloud-infrastructure.png",
  },
  {
    icon: GitMerge,
    title: "DevOps & CI/CD\nPipeline Engineering",
    desc: "Automated deployment pipelines that accelerate delivery and maintain quality at every release.",
    img: "/cap-devops-cicd.png",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance &\nAutomated Testing",
    desc: "Comprehensive test coverage that catches issues early and keeps production stable.",
    img: "/cap-quality-assurance.png",
  },
  {
    icon: Pen,
    title: "UX &\nProduct Design",
    desc: "User-centred design that simplifies complexity and drives engagement across every touchpoint.",
    img: "/cap-ux-design.png",
  },
  {
    icon: Bot,
    title: "AI-Infused\nProduct Development",
    desc: "AI capabilities embedded directly into your product — not bolted on as an afterthought.",
    img: "/cap-ai-product.png",
  },
  {
    icon: Lightbulb,
    title: "Discovery &\nInnovation Sprints",
    desc: "Structured sprints that move from problem to validated solution in days, not months.",
    img: "/cap-discovery-sprints.png",
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
      <section className="relative bg-black overflow-hidden min-h-screen flex items-center">
        {/* Full-width background video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/software-hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-40 text-center">
          <AnimateOnScroll delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] mb-6 max-w-[800px] mx-auto">
              Infrastructure built for the way business actually works
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-white/70 text-[18px] leading-relaxed mb-8 max-w-[520px] mx-auto">
              We design and build custom systems, platforms, and AI
              solutions that integrate seamlessly into your operations and
              scale with your ambition.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <PrimaryButton
              href="/contact"
              label="Let's build your system"
              variant="dark"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* CUSTOM SYSTEMS */}
      <section className="bg-[#F4F4F2]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-14">
            <div>
              <AnimateOnScroll>
                <SectionLabel text="Custom Systems" className="mb-4" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight">
                  BUILT FOR SCALE.
                </h2>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={0.2} className="max-w-xs">
              <p className="text-[#6B7280] text-[18px] leading-relaxed">
                NeuralNet&apos;s software development practice delivers custom
                software, platforms, APIs, and backend infrastructure that power
                complex operations.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Capabilities card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <AnimateOnScroll key={cap.title} delay={i * 0.06} className="h-full">
                  <div className="relative bg-[#0D1F3C] rounded-2xl overflow-hidden flex flex-col h-full group hover:shadow-2xl hover:shadow-blue-900/20 border border-white/5 hover:border-[#2563EB]/30 transition-all duration-300 hover:-translate-y-1" style={{ minHeight: 340 }}>
                    {/* Image area */}
                    <div className="relative h-44 overflow-hidden flex-shrink-0">
                      <Image
                        src={cap.img}
                        alt={cap.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F3C]/20 via-transparent to-[#0D1F3C]" />
                      <div className="absolute top-4 left-4 w-9 h-9 bg-[#1E3A5F]/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" strokeWidth={1.8} />
                      </div>
                    </div>
                    {/* Card content */}
                    <div className="flex flex-col flex-1 p-6 pt-4">
                      <h3 className="text-white font-bold text-[18px] leading-[1.25] mb-2 whitespace-pre-line">
                        {cap.title}
                      </h3>
                      <p className="text-white/45 text-[16px] leading-[1.65]">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Operational philosophy box */}
          <AnimateOnScroll delay={0.2}>
            <div className="border border-[#E5E7EB] rounded-xl p-8 relative bg-white">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-3">
                    Operational Philosophy
                  </p>
                  <p className="text-[#1A1A2E] text-[18px] leading-relaxed">
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
      <section className="bg-[#0A1628]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <AnimateOnScroll className="mb-12">
            <SectionLabel text="Specialisation" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <AnimateOnScroll delay={0.1}>
              <div className="bg-[#0D1F3C] rounded-xl p-8 border border-white/10">
                <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <p className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-2">
                  Synthesis
                </p>
                <h3 className="text-[22px] font-bold text-white mb-1">
                  Generative AI
                </h3>
                <p className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-4">
                  Intelligence Layer
                </p>
                <p className="text-white/50 text-[18px] leading-relaxed mb-5">
                  Content-generation systems and customer experience enhancers
                  that integrate into existing infrastructure.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["LLM", "FINE-TUNING", "VECTOR DB"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#1E3A5F] text-white/60 text-[18px] font-semibold tracking-wider rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Card 2 */}
            <AnimateOnScroll delay={0.2}>
              <div className="bg-[#0D1F3C] rounded-xl p-8 border border-white/10">
                <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <p className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-2">
                  Interface
                </p>
                <h3 className="text-[22px] font-bold text-white mb-1">
                  AI-Powered Apps
                </h3>
                <p className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-4">
                  Operational Layer
                </p>
                <p className="text-white/50 text-[18px] leading-relaxed mb-5">
                  Intuitive web and mobile applications that leverage AI to
                  drive engagement and personalised experiences.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["FULL-STACK", "REAL-TIME", "UX/UI"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#1E3A5F] text-white/60 text-[18px] font-semibold tracking-wider rounded-full"
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
              <p className="text-[#6B7280] text-[18px] leading-relaxed">
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
                    <p className="text-[#2563EB] text-[18px] font-bold mb-1">
                      {uc.num}
                    </p>
                    <h3 className="text-[#1A1A2E] font-bold text-[18px] mb-2">
                      {uc.title}
                    </h3>
                    <p className="text-[#6B7280] text-[18px] leading-relaxed">
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
              <p className="text-white/50 text-[18px] leading-relaxed mb-8">
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
