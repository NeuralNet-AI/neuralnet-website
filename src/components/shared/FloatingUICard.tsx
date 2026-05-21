"use client";

import { AnimatedWaveform } from "./AnimatedWaveform";

interface ChatMessage {
  role: "agent" | "customer";
  text: string;
  time: string;
}

interface Metric {
  label: string;
  value: string;
  positive?: boolean;
}

interface Props {
  title?: string;
  messages?: ChatMessage[];
  metrics?: Metric[];
  showWaveform?: boolean;
  waveformFull?: boolean;
}

export function FloatingUICard({
  title = "AI Voice Agent",
  messages,
  metrics,
  showWaveform = true,
  waveformFull = false,
}: Props) {
  return (
    <div className="bg-[#0D1F3C] rounded-2xl p-6 shadow-2xl border border-white/10 w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white text-base font-medium">{title}</span>
        </div>
        {showWaveform && !waveformFull && (
          <AnimatedWaveform bars={6} color="#2563EB" height={20} />
        )}
      </div>

      {/* Full-width waveform */}
      {waveformFull && showWaveform && (
        <div className="mb-4">
          <AnimatedWaveform bars={20} color="#3B82F6" height={40} className="w-full justify-between" />
        </div>
      )}

      {/* Messages */}
      {messages && (
        <div className="space-y-3 mb-4">
          {messages.map((msg, i) => (
            <div key={i} className="flex items-start gap-2">
              <div
                className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[16px] font-bold ${
                  msg.role === "agent"
                    ? "bg-[#2563EB] text-white"
                    : "bg-gray-600 text-white"
                }`}
              >
                {msg.role === "agent" ? "A" : "C"}
              </div>
              <div className="flex-1">
                <p className="text-white/80 text-[16px] leading-relaxed">{msg.text}</p>
              </div>
              <span className="text-white/30 text-[16px] flex-shrink-0">{msg.time}</span>
            </div>
          ))}
        </div>
      )}

      {/* Metrics */}
      {metrics && (
        <div className="border-t border-white/10 pt-3 mt-3">
          <div className="flex gap-4 flex-wrap">
            {metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="text-white/40 text-[16px] uppercase tracking-wider">{m.label}:</span>
                <span className={`text-[16px] font-semibold ${m.positive ? "text-green-400" : "text-white"}`}>
                  {m.value}
                </span>
                {m.positive !== undefined && (
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
