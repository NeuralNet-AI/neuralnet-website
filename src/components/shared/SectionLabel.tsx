interface Props {
  text: string;
  dot?: boolean;
  className?: string;
}

export function SectionLabel({ text, dot = false, className = "" }: Props) {
  return (
    <div
      className={`flex items-center gap-2 text-[16px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] ${className}`}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
      )}
      {text}
    </div>
  );
}
