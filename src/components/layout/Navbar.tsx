"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/shared/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const solutionsLinks = [
  { label: "Software Development", href: "/solutions/software" },
  { label: "AI Avatars", href: "/solutions/ai-avatars" },
  { label: "AI Voice Agents", href: "/solutions/ai-voice-agents" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "#", dropdown: true },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActiveSolutions = pathname.startsWith("/solutions");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link href="/" className="flex-shrink-0">
            <Logo variant="dark" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-[18px] font-medium transition-colors duration-200 py-2 relative group ${
                        isActiveSolutions
                          ? "text-white"
                          : "text-white/75 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#2563EB] transition-all duration-300 ${
                          isActiveSolutions ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-100/80 py-2 z-50"
                        >
                          {solutionsLinks.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className={`block px-5 py-2.5 text-[18px] font-medium transition-colors hover:bg-[#F4F4F2] hover:text-[#2563EB] ${
                                pathname === s.href
                                  ? "text-[#2563EB] bg-blue-50/60"
                                  : "text-[#1A1A2E]"
                              }`}
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[18px] font-medium transition-colors duration-200 py-2 group ${
                    isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#2563EB] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-transparent backdrop-blur-sm border-t border-white/10 overflow-hidden"
          >
            <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-1">
              {[
                { label: "Home", href: "/" },
                { label: "Software Development", href: "/solutions/software" },
                { label: "AI Avatars", href: "/solutions/ai-avatars" },
                { label: "AI Voice Agents", href: "/solutions/ai-voice-agents" },
                { label: "About us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-[18px] font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#2563EB] bg-blue-50"
                      : "text-[#1A1A2E] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
