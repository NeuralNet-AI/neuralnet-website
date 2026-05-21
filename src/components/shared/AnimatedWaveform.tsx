"use client";

interface Props {
  bars?: number;
  color?: string;
  className?: string;
  height?: number;
}

export function AnimatedWaveform({
  bars = 8,
  color = "#2563EB",
  className = "",
  height = 32,
}: Props) {
  return (
    <div
      className={`flex items-center gap-[3px] ${className}`}
      style={{ height }}
    >
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="w-1 rounded-full"
          style={{
            backgroundColor: color,
            height: "100%",
            animation: `waveform 1.2s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
}
