"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  href: string;
  label: string;
  variant?: "dark" | "light" | "outline";
  className?: string;
}

export function PrimaryButton({
  href,
  label,
  variant = "light",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-[6px] px-7 py-3.5 text-[18px] font-semibold tracking-[0.05em] transition-all duration-200 group";

  const variants = {
    dark: "bg-white text-[#0A1628] hover:bg-gray-100",
    light: "bg-[#0A1628] text-white hover:bg-[#0d1f3c]",
    outline:
      "border-2 border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <motion.span
        className="flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {label}
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </motion.span>
    </Link>
  );
}
