import Link from "next/link";
import { Logo } from "@/components/shared/Logo";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo variant="dark" />
            </Link>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions/software" },
                { label: "About us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-base hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/40 text-[18px] uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@neuralnet.uk"
                  className="text-white/80 text-base hover:text-white transition-colors duration-200"
                >
                  info@neuralnet.uk
                </a>
              </div>
              <div>
                <p className="text-white/40 text-[18px] uppercase tracking-wider mb-1">
                  Address
                </p>
                <p className="text-white/80 text-base leading-relaxed">
                  101 New Cavendish St,
                  <br />
                  London W1W 6XH
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Social */}
          <div>
            <h4 className="text-[18px] font-semibold tracking-[0.15em] uppercase text-[#2563EB] mb-5">
              Social
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 bg-white/10 rounded-md hover:bg-[#2563EB] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 bg-white/10 rounded-md hover:bg-[#2563EB] transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-base">
            &copy; NeuralNet Ltd. All rights reserved. 2026
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/40 text-base hover:text-white/70 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/quality-assurance"
              className="text-white/40 text-base hover:text-white/70 transition-colors duration-200"
            >
              Quality Assurance Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
