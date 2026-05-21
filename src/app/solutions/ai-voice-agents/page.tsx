import Image from "next/image";
import {
  Phone,
  GitBranch,
  Database,
  Brain,
  Globe,
  BarChart2,
  Headphones,
  Calendar,
  Mail,
  TrendingUp,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { AnimatedWaveform } from "@/components/shared/AnimatedWaveform";

const capabilities = [
  {
    num: "01",
    icon: Phone,
    title: "INBOUND & OUTBOUND CALL MANAGEMENT",
    desc: "Handle high volumes with natural, real-time conversations.",
  },
  {
    num: "02",
    icon: GitBranch,
    title: "INTELLIGENT ROUTING & APPOINTMENT BOOKING",
    desc: "Route, qualify, and book appointments automatically.",
  },
  {
    num: "03",
    icon: Database,
    title: "CRM INTEGRATION & REAL-TIME DATA SYNCHRONISATION",
    desc: "Sync conversations and outcomes across your stack.",
  },
  {
    num: "04",
    icon: Brain,
    title: "NATURAL LANGUAGE UNDERSTANDING & CONTEXT AWARENESS",
    desc: "Understand intent and context across every interaction.",
  },
  {
    num: "05",
    icon: Globe,
    title: "MULTI-LANGUAGE SUPPORT & LOCAL TONE",
    desc: "Speak your customers' language, naturally.",
  },
  {
    num: "06",
    icon: BarChart2,
    title: "ANALYTICS, INSIGHTS & CONTINUOUS PERFORMANCE IMPROVEMENT",
    desc: "Monitor, learn, and optimise every conversation.",
  },
];

const useCases = [
  {
    icon: Headphones,
    title: "CUSTOMER SUPPORT & ISSUE RESOLUTION",
    desc: "Resolve common queries, provide updates, and escalate when needed.",
  },
  {
    icon: Calendar,
    title: "APPOINTMENT SCHEDULING & REMINDERS",
    desc: "Schedule, confirm and remind — reducing no-shows.",
  },
  {
    icon: Mail,
    title: "RETAINING & WIN-BACK CAMPAIGNS",
    desc: "Re-engage inactive customers with personalised conversations.",
  },
  {
    icon: TrendingUp,
    title: "SALES QUALIFICATION & PIPELINE ACCELERATION",
    desc: "Qualify leads, answer objections, and book meetings for your team.",
  },
  {
    icon: ShoppingCart,
    title: "ORDER PROCESSING & TRANSACTIONAL CALLS",
    desc: "Capture orders, verify details and update systems in real time.",
  },
  {
    icon: MessageSquare,
    title: "SURVEYS, FEEDBACK & VOICE OF CUSTOMER",
    desc: "Collect customer feedback and measure satisfaction at scale.",
  },
];

const chatMessages = [
  { role: "agent" as const, text: "How can I assist you today?", time: "00:02" },
  {
    role: "customer" as const,
    text: "I'd like to check the status of my order.",
    time: "00:04",
  },
  {
    role: "agent" as const,
    text: "Sure, may I have your order number please?",
    time: "00:06",
  },
];

export default function AiVoiceAgentsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#F4F4F2] pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateOnScroll>
                <SectionLabel text="AI Voice Agents" dot className="mb-6" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-[58px] font-black leading-[1.05] mb-6">
                  <span className="text-[#1A1A2E] block">
                    EVERY CALL HANDLED.
                  </span>
                  <span className="text-[#2563EB] block">
                    EVERY SINGLE TIME.
                  </span>
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <p className="text-[#6B7280] text-[16px] leading-relaxed mb-8">
                  Conversational AI systems that manage inbound and outbound
                  call experiences across support, sales, and operations — with
                  the reliability and consistency your team needs to scale.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.3}>
                <PrimaryButton
                  href="/contact"
                  label="Request a voice agent demo"
                  variant="light"
                />
              </AnimateOnScroll>
            </div>

            {/* Right: hero image + floating card */}
            <AnimateOnScroll delay={0.2} className="relative">
              <div className="relative h-72 lg:h-[420px] rounded-xl overflow-hidden">
                <Image
                  src="/voice-hero.png"
                  alt="AI Voice Agents"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 w-56">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[#1A1A2E] text-[16px] font-semibold">
                    AI Voice Agent
                  </span>
                </div>
                <AnimatedWaveform bars={10} color="#2563EB" height={24} className="mb-3" />
                <div className="grid grid-cols-3 gap-1 text-center">
                  {[
                    { label: "Duration", value: "12:46" },
                    { label: "Status", value: "In Call" },
                    { label: "Sentiment", value: "Positive" },
                  ].map((m) => (
                    <div key={m.label}>
                      <p className="text-[#6B7280] text-[9px] uppercase tracking-wide leading-tight">
                        {m.label}
                      </p>
                      <p className="text-[#1A1A2E] text-[11px] font-semibold">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SOLUTION CAPABILITIES */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-14">
            <AnimateOnScroll>
              <SectionLabel text="Solution Capabilities" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1} className="max-w-xs md:text-right">
              <p className="text-[#6B7280] text-[16px] leading-relaxed">
                An end-to-end voice AI platform purpose-built for conversational
                excellence and operational performance at scale.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E7EB] rounded-xl overflow-hidden border border-[#E5E7EB]">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <AnimateOnScroll key={cap.num} delay={i * 0.08}>
                  <div className="bg-white p-8 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-[#F4F4F2] rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <span className="text-[#E5E7EB] text-3xl font-black">
                        {cap.num}
                      </span>
                    </div>
                    <h3 className="text-[#1A1A2E] text-[16px] font-bold tracking-wider mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-[#6B7280] text-[16px] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPERATIONAL USE CASES */}
      <section className="bg-[#0A1628]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <AnimateOnScroll>
                <SectionLabel text="Operational Use Cases" className="mb-5" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                  Built for how your business actually runs.
                </h2>
              </AnimateOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {useCases.map((uc, i) => {
                  const Icon = uc.icon;
                  return (
                    <AnimateOnScroll key={i} delay={i * 0.07}>
                      <div className="flex gap-3 p-4 border border-white/10 rounded-lg">
                        <div className="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white/70" />
                        </div>
                        <div>
                          <p className="text-white/70 text-[16px] font-semibold tracking-wider leading-tight mb-1">
                            {uc.title}
                          </p>
                          <p className="text-white/40 text-[16px] leading-relaxed">
                            {uc.desc}
                          </p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>

            {/* Right: Live conversation card */}
            <AnimateOnScroll delay={0.3}>
              <div className="bg-[#0D1F3C] rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-base font-medium">
                    Live Conversation
                  </span>
                </div>

                {/* Waveform */}
                <div className="mb-5">
                  <AnimatedWaveform
                    bars={24}
                    color="#3B82F6"
                    height={40}
                    className="w-full justify-between"
                  />
                </div>

                {/* Chat transcript */}
                <div className="space-y-3 mb-5">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[16px] font-bold ${
                          msg.role === "agent"
                            ? "bg-[#2563EB] text-white"
                            : "bg-gray-600 text-white"
                        }`}
                      >
                        {msg.role === "agent" ? "A" : "C"}
                      </div>
                      <div className="flex-1">
                        <p className="text-[#6B7280] text-[16px] font-medium mb-0.5">
                          {msg.role === "agent" ? "AI Agent" : "Customer"}
                        </p>
                        <p className="text-white/80 text-[16px] leading-relaxed">
                          {msg.text}
                        </p>
                      </div>
                      <span className="text-white/30 text-[16px] flex-shrink-0">
                        {msg.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="border-t border-white/10 pt-4 grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-1.5">
                    <div>
                      <p className="text-white/30 text-[16px] uppercase tracking-wider">
                        Sentiment
                      </p>
                      <p className="text-green-400 text-[16px] font-semibold">
                        Positive
                      </p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div>
                      <p className="text-white/30 text-[16px] uppercase tracking-wider">
                        Confidence
                      </p>
                      <p className="text-green-400 text-[16px] font-semibold">
                        98%
                      </p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div>
                    <p className="text-white/30 text-[16px] uppercase tracking-wider">
                      Resolution
                    </p>
                    <p className="text-white/70 text-[16px] font-semibold">
                      In Progress
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
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
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24 text-center">
          <AnimateOnScroll>
            <p className="text-white/40 text-base tracking-widest uppercase mb-6">
              — START A PROJECT —
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-10">
              The right solution starts with the right conversation.
            </h2>
            <p className="text-white/50 text-base mb-8">
              Tell us what your business challenges are. We&apos;ll tell you
              what we&apos;d build.
            </p>
            <PrimaryButton href="/contact" label="Let's talk" variant="dark" />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
