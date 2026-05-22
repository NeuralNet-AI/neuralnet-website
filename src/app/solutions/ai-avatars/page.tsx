import Image from "next/image";
import {
  GraduationCap,
  FileText,
  Globe,
  Tv,
  BookOpen,
  Monitor,
  Headphones,
  Calendar,
  TrendingUp,
  Users,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { AnimatedWaveform } from "@/components/shared/AnimatedWaveform";

const preRecorded = [
  {
    num: "01",
    icon: GraduationCap,
    label: "EMPLOYEE ONBOARDING AND COMPLIANCE TRAINING",
    img: "/avatars-onboarding.png",
  },
  {
    num: "02",
    icon: FileText,
    label: "PRODUCT INFORMATION AND DEMO VIDEOS",
    img: "/avatars-product-demo.png",
  },
  {
    num: "03",
    icon: Globe,
    label: "MARKETING CAMPAIGNS REQUIRING LOCALISATION",
    img: "/avatars-marketing.png",
  },
  {
    num: "04",
    icon: Tv,
    label: "EXECUTIVE COMMUNICATIONS AND INTERNAL BROADCASTS",
    img: "/avatars-executive.png",
  },
  {
    num: "05",
    icon: BookOpen,
    label: "E-LEARNING CONTENT LIBRARIES",
    img: "/avatars-elearning.png",
  },
];

const realtimeUseCases = [
  { icon: Monitor, label: "WEBSITE FRONT DESK AND VISITOR QUALIFICATION" },
  { icon: Headphones, label: "CUSTOMER SUPPORT AND SELF-SERVICE RESOLUTION" },
  { icon: Calendar, label: "EVENT AND CONFERENCE INSTALLATIONS" },
  { icon: TrendingUp, label: "SALES CONVERSATION AND PRODUCT WALKTHROUGH" },
  { icon: Users, label: "HR AND INTERNAL HELP DESK" },
  { icon: BookOpen, label: "INTERACTIVE E-LEARNING" },
];

export default function AiAvatarsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-black overflow-hidden min-h-screen flex items-center">
        {/* Full-width background image */}
        <div className="absolute inset-0">
          <Image
            src="/avatars-hero.png"
            alt="AI Avatar Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-40 text-center">
          <AnimateOnScroll delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-black leading-[1.05] mb-6 text-white">
              YOUR BRAND.<br />A CONSISTENT PRESENCE.<br />DEPLOYED AT SCALE.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.15}>
            <div className="w-10 h-0.5 bg-[#2563EB] mb-6 mx-auto" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-white/70 text-[18px] leading-relaxed mb-8 max-w-[520px] mx-auto">
              Two avatar solutions, built for different jobs. One for content
              that needs to be produced and distributed. One for interactions
              that need to happen in real time.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <PrimaryButton
              href="/contact"
              label="Request an avatar demo"
              variant="dark"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* PRE-RECORDED */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
            <div>
              <AnimateOnScroll>
                <SectionLabel text="Pre-Recorded" className="mb-4" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
                  PRE-RECORDED AVATARS.
                </h2>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={0.2} className="max-w-xs md:text-right">
              <p className="text-[#6B7280] text-[18px] leading-relaxed">
                Photorealistic AI avatars for video content — training
                programmes, marketing materials, and internal communications.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {preRecorded.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={item.num} delay={i * 0.08}>
                  <div className="bg-[#0D1F3C] rounded-xl overflow-hidden">
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.label}
                        fill
                        className="object-cover opacity-70"
                      />
                      <div className="absolute top-3 left-3 text-[#2563EB] text-[18px] font-bold">
                        {item.num}
                      </div>
                      <div className="absolute top-3 right-3 w-7 h-7 bg-[#1E3A5F] rounded-md flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-white/70 text-[18px] font-semibold tracking-wider leading-tight">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* REAL-TIME INTERACTIVE */}
      <section className="bg-[#0A1628]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <AnimateOnScroll>
                <SectionLabel text="Real-Time" className="mb-4" />
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  REAL-TIME INTERACTIVE.
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <p className="text-white/50 text-[18px] leading-relaxed mb-8">
                  Live, conversational AI avatars that interact with users in
                  real time. They hold conversations, answer questions, qualify
                  leads, and handle front-desk interactions.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.25}>
                <p className="text-white/30 text-[18px] font-semibold tracking-widest uppercase mb-4">
                  Use cases — Popular but not limited to —
                </p>
              </AnimateOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {realtimeUseCases.map((uc, i) => {
                  const Icon = uc.icon;
                  return (
                    <AnimateOnScroll key={i} delay={0.1 + i * 0.06}>
                      <div className="flex items-start gap-3 p-3 border border-white/10 rounded-lg">
                        <div className="w-7 h-7 bg-[#1E3A5F] rounded-md flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3.5 h-3.5 text-white/70" />
                        </div>
                        <p className="text-white/60 text-[18px] font-semibold tracking-wider leading-tight">
                          {uc.label}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>

            {/* Right: UI mockup */}
            <AnimateOnScroll delay={0.3}>
              <div className="bg-[#0D1F3C] rounded-2xl p-6 border border-white/10">
                {/* Avatar face placeholder */}
                <div className="flex justify-center mb-5">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#2563EB]/30">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                      alt="AI Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Chat bubble */}
                <div className="bg-[#1E3A5F] rounded-xl p-4 mb-5 text-center">
                  <p className="text-white text-[18px] font-medium">
                    How can I help you today?
                  </p>
                  <div className="flex justify-center mt-3">
                    <AnimatedWaveform bars={8} color="#3B82F6" height={24} />
                  </div>
                </div>

                {/* Infrastructure info */}
                <div>
                  <p className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-2">
                    Infrastructure
                  </p>
                  <p className="text-white/50 text-[18px] leading-relaxed mb-4">
                    Voice synthesis, lip sync, and conversational AI are
                    integrated into a single deployable system. Custom avatar
                    creation uses defined brand personas.
                  </p>
                  <div className="flex gap-6 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-white/30 text-[18px] uppercase tracking-wider mb-1">
                        Deployment Ready
                      </p>
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[18px] uppercase tracking-wider mb-1">
                        Latency
                      </p>
                      <p className="text-white/70 text-[18px] font-semibold">
                        ~200MS
                      </p>
                    </div>
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
