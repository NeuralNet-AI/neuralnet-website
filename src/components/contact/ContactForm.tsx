"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

/* â"€â"€â"€ Country data â"€â"€â"€ */
interface Country {
  flag: string;
  name: string;
  dial: string;
}

const COUNTRIES: Country[] = [
  // UK first (default)
  { flag: "🇬🇧", name: "United Kingdom", dial: "+44" },
  // Americas
  { flag: "🇦🇷", name: "Argentina", dial: "+54" },
  { flag: "🇧🇴", name: "Bolivia", dial: "+591" },
  { flag: "🇧🇷", name: "Brazil", dial: "+55" },
  { flag: "🇨🇦", name: "Canada", dial: "+1" },
  { flag: "🇨🇱", name: "Chile", dial: "+56" },
  { flag: "🇨🇴", name: "Colombia", dial: "+57" },
  { flag: "🇨🇷", name: "Costa Rica", dial: "+506" },
  { flag: "🇩🇴", name: "Dominican Republic", dial: "+1" },
  { flag: "🇪🇨", name: "Ecuador", dial: "+593" },
  { flag: "🇸🇻", name: "El Salvador", dial: "+503" },
  { flag: "🇬🇹", name: "Guatemala", dial: "+502" },
  { flag: "🇭🇳", name: "Honduras", dial: "+504" },
  { flag: "🇯🇲", name: "Jamaica", dial: "+1" },
  { flag: "🇲🇽", name: "Mexico", dial: "+52" },
  { flag: "🇳🇮", name: "Nicaragua", dial: "+505" },
  { flag: "🇵🇦", name: "Panama", dial: "+507" },
  { flag: "🇵🇾", name: "Paraguay", dial: "+595" },
  { flag: "🇵🇪", name: "Peru", dial: "+51" },
  { flag: "🇺🇸", name: "United States", dial: "+1" },
  { flag: "🇺🇾", name: "Uruguay", dial: "+598" },
  { flag: "🇻🇪", name: "Venezuela", dial: "+58" },
  // Europe
  { flag: "🇦🇱", name: "Albania", dial: "+355" },
  { flag: "🇦🇩", name: "Andorra", dial: "+376" },
  { flag: "🇦🇹", name: "Austria", dial: "+43" },
  { flag: "🇧🇾", name: "Belarus", dial: "+375" },
  { flag: "🇧🇪", name: "Belgium", dial: "+32" },
  { flag: "🇧🇦", name: "Bosnia and Herzegovina", dial: "+387" },
  { flag: "🇧🇬", name: "Bulgaria", dial: "+359" },
  { flag: "🇭🇷", name: "Croatia", dial: "+385" },
  { flag: "🇨🇾", name: "Cyprus", dial: "+357" },
  { flag: "🇨🇿", name: "Czech Republic", dial: "+420" },
  { flag: "🇩🇰", name: "Denmark", dial: "+45" },
  { flag: "🇪🇪", name: "Estonia", dial: "+372" },
  { flag: "🇫🇮", name: "Finland", dial: "+358" },
  { flag: "🇫🇷", name: "France", dial: "+33" },
  { flag: "🇩🇪", name: "Germany", dial: "+49" },
  { flag: "🇬🇷", name: "Greece", dial: "+30" },
  { flag: "🇭🇺", name: "Hungary", dial: "+36" },
  { flag: "🇮🇸", name: "Iceland", dial: "+354" },
  { flag: "🇮🇪", name: "Ireland", dial: "+353" },
  { flag: "🇮🇹", name: "Italy", dial: "+39" },
  { flag: "🇽🇰", name: "Kosovo", dial: "+383" },
  { flag: "🇱🇻", name: "Latvia", dial: "+371" },
  { flag: "🇱🇮", name: "Liechtenstein", dial: "+423" },
  { flag: "🇱🇹", name: "Lithuania", dial: "+370" },
  { flag: "🇱🇺", name: "Luxembourg", dial: "+352" },
  { flag: "🇲🇹", name: "Malta", dial: "+356" },
  { flag: "🇲🇩", name: "Moldova", dial: "+373" },
  { flag: "🇲🇨", name: "Monaco", dial: "+377" },
  { flag: "🇲🇪", name: "Montenegro", dial: "+382" },
  { flag: "🇳🇱", name: "Netherlands", dial: "+31" },
  { flag: "🇲🇰", name: "North Macedonia", dial: "+389" },
  { flag: "🇳🇴", name: "Norway", dial: "+47" },
  { flag: "🇵🇱", name: "Poland", dial: "+48" },
  { flag: "🇵🇹", name: "Portugal", dial: "+351" },
  { flag: "🇷🇴", name: "Romania", dial: "+40" },
  { flag: "🇷🇺", name: "Russia", dial: "+7" },
  { flag: "🇸🇲", name: "San Marino", dial: "+378" },
  { flag: "🇷🇸", name: "Serbia", dial: "+381" },
  { flag: "🇸🇰", name: "Slovakia", dial: "+421" },
  { flag: "🇸🇮", name: "Slovenia", dial: "+386" },
  { flag: "🇪🇸", name: "Spain", dial: "+34" },
  { flag: "🇸🇪", name: "Sweden", dial: "+46" },
  { flag: "🇨🇭", name: "Switzerland", dial: "+41" },
  { flag: "🇹🇷", name: "Turkey", dial: "+90" },
  { flag: "🇺🇦", name: "Ukraine", dial: "+380" },
  // Asia
  { flag: "🇦🇫", name: "Afghanistan", dial: "+93" },
  { flag: "🇦🇲", name: "Armenia", dial: "+374" },
  { flag: "🇦🇿", name: "Azerbaijan", dial: "+994" },
  { flag: "🇧🇭", name: "Bahrain", dial: "+973" },
  { flag: "🇧🇩", name: "Bangladesh", dial: "+880" },
  { flag: "🇧🇹", name: "Bhutan", dial: "+975" },
  { flag: "🇧🇳", name: "Brunei", dial: "+673" },
  { flag: "🇰🇭", name: "Cambodia", dial: "+855" },
  { flag: "🇨🇳", name: "China", dial: "+86" },
  { flag: "🇬🇪", name: "Georgia", dial: "+995" },
  { flag: "🇭🇰", name: "Hong Kong", dial: "+852" },
  { flag: "🇮🇳", name: "India", dial: "+91" },
  { flag: "🇮🇩", name: "Indonesia", dial: "+62" },
  { flag: "🇮🇷", name: "Iran", dial: "+98" },
  { flag: "🇮🇶", name: "Iraq", dial: "+964" },
  { flag: "🇮🇱", name: "Israel", dial: "+972" },
  { flag: "🇯🇵", name: "Japan", dial: "+81" },
  { flag: "🇯🇴", name: "Jordan", dial: "+962" },
  { flag: "🇰🇿", name: "Kazakhstan", dial: "+7" },
  { flag: "🇰🇷", name: "South Korea", dial: "+82" },
  { flag: "🇰🇼", name: "Kuwait", dial: "+965" },
  { flag: "🇰🇬", name: "Kyrgyzstan", dial: "+996" },
  { flag: "🇱🇦", name: "Laos", dial: "+856" },
  { flag: "🇱🇧", name: "Lebanon", dial: "+961" },
  { flag: "🇲🇴", name: "Macao", dial: "+853" },
  { flag: "🇲🇾", name: "Malaysia", dial: "+60" },
  { flag: "🇲🇻", name: "Maldives", dial: "+960" },
  { flag: "🇲🇳", name: "Mongolia", dial: "+976" },
  { flag: "🇲🇲", name: "Myanmar", dial: "+95" },
  { flag: "🇳🇵", name: "Nepal", dial: "+977" },
  { flag: "🇰🇵", name: "North Korea", dial: "+850" },
  { flag: "🇴🇲", name: "Oman", dial: "+968" },
  { flag: "🇵🇰", name: "Pakistan", dial: "+92" },
  { flag: "🇵🇸", name: "Palestine", dial: "+970" },
  { flag: "🇵🇭", name: "Philippines", dial: "+63" },
  { flag: "🇶🇦", name: "Qatar", dial: "+974" },
  { flag: "🇸🇦", name: "Saudi Arabia", dial: "+966" },
  { flag: "🇸🇬", name: "Singapore", dial: "+65" },
  { flag: "🇱🇰", name: "Sri Lanka", dial: "+94" },
  { flag: "🇸🇾", name: "Syria", dial: "+963" },
  { flag: "🇹🇼", name: "Taiwan", dial: "+886" },
  { flag: "🇹🇯", name: "Tajikistan", dial: "+992" },
  { flag: "🇹🇭", name: "Thailand", dial: "+66" },
  { flag: "🇹🇲", name: "Turkmenistan", dial: "+993" },
  { flag: "🇦🇪", name: "UAE", dial: "+971" },
  { flag: "🇺🇿", name: "Uzbekistan", dial: "+998" },
  { flag: "🇻🇳", name: "Vietnam", dial: "+84" },
  { flag: "🇾🇪", name: "Yemen", dial: "+967" },
  // Africa
  { flag: "🇩🇿", name: "Algeria", dial: "+213" },
  { flag: "🇦🇴", name: "Angola", dial: "+244" },
  { flag: "🇧🇯", name: "Benin", dial: "+229" },
  { flag: "🇧🇼", name: "Botswana", dial: "+267" },
  { flag: "🇧🇫", name: "Burkina Faso", dial: "+226" },
  { flag: "🇧🇮", name: "Burundi", dial: "+257" },
  { flag: "🇨🇲", name: "Cameroon", dial: "+237" },
  { flag: "🇨🇻", name: "Cape Verde", dial: "+238" },
  { flag: "🇨🇫", name: "Central African Republic", dial: "+236" },
  { flag: "🇹🇩", name: "Chad", dial: "+235" },
  { flag: "🇰🇲", name: "Comoros", dial: "+269" },
  { flag: "🇨🇩", name: "DR Congo", dial: "+243" },
  { flag: "🇨🇬", name: "Republic of Congo", dial: "+242" },
  { flag: "🇩🇯", name: "Djibouti", dial: "+253" },
  { flag: "🇪🇬", name: "Egypt", dial: "+20" },
  { flag: "🇬🇶", name: "Equatorial Guinea", dial: "+240" },
  { flag: "🇪🇷", name: "Eritrea", dial: "+291" },
  { flag: "🇸🇿", name: "Eswatini", dial: "+268" },
  { flag: "🇪🇹", name: "Ethiopia", dial: "+251" },
  { flag: "🇬🇦", name: "Gabon", dial: "+241" },
  { flag: "🇬🇲", name: "Gambia", dial: "+220" },
  { flag: "🇬🇭", name: "Ghana", dial: "+233" },
  { flag: "🇬🇳", name: "Guinea", dial: "+224" },
  { flag: "🇬🇼", name: "Guinea-Bissau", dial: "+245" },
  { flag: "🇨🇮", name: "Ivory Coast", dial: "+225" },
  { flag: "🇰🇪", name: "Kenya", dial: "+254" },
  { flag: "🇱🇸", name: "Lesotho", dial: "+266" },
  { flag: "🇱🇷", name: "Liberia", dial: "+231" },
  { flag: "🇱🇾", name: "Libya", dial: "+218" },
  { flag: "🇲🇬", name: "Madagascar", dial: "+261" },
  { flag: "🇲🇼", name: "Malawi", dial: "+265" },
  { flag: "🇲🇱", name: "Mali", dial: "+223" },
  { flag: "🇲🇷", name: "Mauritania", dial: "+222" },
  { flag: "🇲🇺", name: "Mauritius", dial: "+230" },
  { flag: "🇲🇦", name: "Morocco", dial: "+212" },
  { flag: "🇲🇿", name: "Mozambique", dial: "+258" },
  { flag: "🇳🇦", name: "Namibia", dial: "+264" },
  { flag: "🇳🇪", name: "Niger", dial: "+227" },
  { flag: "🇳🇬", name: "Nigeria", dial: "+234" },
  { flag: "🇷🇼", name: "Rwanda", dial: "+250" },
  { flag: "🇸🇳", name: "Senegal", dial: "+221" },
  { flag: "🇸🇱", name: "Sierra Leone", dial: "+232" },
  { flag: "🇸🇴", name: "Somalia", dial: "+252" },
  { flag: "🇿🇦", name: "South Africa", dial: "+27" },
  { flag: "🇸🇸", name: "South Sudan", dial: "+211" },
  { flag: "🇸🇩", name: "Sudan", dial: "+249" },
  { flag: "🇹🇿", name: "Tanzania", dial: "+255" },
  { flag: "🇹🇬", name: "Togo", dial: "+228" },
  { flag: "🇹🇳", name: "Tunisia", dial: "+216" },
  { flag: "🇺🇬", name: "Uganda", dial: "+256" },
  { flag: "🇿🇲", name: "Zambia", dial: "+260" },
  { flag: "🇿🇼", name: "Zimbabwe", dial: "+263" },
  // Oceania
  { flag: "🇦🇺", name: "Australia", dial: "+61" },
  { flag: "🇫🇯", name: "Fiji", dial: "+679" },
  { flag: "🇰🇮", name: "Kiribati", dial: "+686" },
  { flag: "🇲🇭", name: "Marshall Islands", dial: "+692" },
  { flag: "🇫🇲", name: "Micronesia", dial: "+691" },
  { flag: "🇳🇷", name: "Nauru", dial: "+674" },
  { flag: "🇳🇿", name: "New Zealand", dial: "+64" },
  { flag: "🇵🇼", name: "Palau", dial: "+680" },
  { flag: "🇵🇬", name: "Papua New Guinea", dial: "+675" },
  { flag: "🇼🇸", name: "Samoa", dial: "+685" },
  { flag: "🇸🇧", name: "Solomon Islands", dial: "+677" },
  { flag: "🇹🇴", name: "Tonga", dial: "+676" },
  { flag: "🇹🇻", name: "Tuvalu", dial: "+688" },
  { flag: "🇻🇺", name: "Vanuatu", dial: "+678" },
];

/* â"€â"€â"€ Form types â"€â"€â"€ */
const interests = [
  "How could I use AI to benefit my business",
  "I have a specific project or use case I would like to discuss",
  "How would an AI solution integrate and coexist within my existing environment safely",
  "I would like to understand how to build or enhance my AI Strategy",
  "Manage & Ensure ROI from AI Project Lifecycles — Should AI models be managed as an Asset?",
  "Data Management Solutions — Ensuring your Data is ready for AI",
  "AI Model Hosting Solutions",
  "AI Agents",
  "Full-Stack Cybersecurity Solutions (End-to-End Protection)",
  "Specific cybersecurity layer solution",
  "AI-Powered Digital Avatars",
  "AI Voice Agents",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  challenge: string;
  interests: string[];
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  challenge?: string;
  interests?: string;
  recaptcha?: string;
}

/* â"€â"€â"€ Main component â"€â"€â"€ */
export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    challenge: "",
    interests: [],
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  // reCAPTCHA
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // Phone field state
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [localPhone, setLocalPhone] = useState("");
  const [dialOpen, setDialOpen] = useState(false);
  const [dialSearch, setDialSearch] = useState("");
  const dialRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dialRef.current && !dialRef.current.contains(e.target as Node)) {
        setDialOpen(false);
        setDialSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(dialSearch.toLowerCase()) ||
      c.dial.includes(dialSearch)
  );

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setDialOpen(false);
    setDialSearch("");
    setForm((p) => ({
      ...p,
      phone: localPhone ? `${country.dial} ${localPhone}` : "",
    }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email";
    }
    if (!localPhone.trim()) e.phone = "Phone number is required";
    if (!form.challenge.trim()) e.challenge = "Please describe your challenge";
    if (form.interests.length === 0)
      e.interests = "Please select at least one area";
    if (!recaptchaToken)
      e.recaptcha = "Please complete the reCAPTCHA";
    return e;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstErrorKey = Object.keys(errs)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitted(true);
  };

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
    if (errors.interests)
      setErrors((prev) => ({ ...prev, interests: undefined }));
  };

  const inputBase =
    "w-full px-4 py-3 text-[18px] text-[#1A1A2E] bg-white border rounded-lg outline-none transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 placeholder:text-[#9CA3AF]";
  const errorInput =
    "border-red-400 focus:border-red-500 focus:ring-red-200";
  const normalInput = "border-[#E5E7EB]";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-20 text-center">
        <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3">
          Request Submitted
        </h3>
        <p className="text-[#6B7280] text-[18px] max-w-xs">
          Thank you for reaching out. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Row 1: First + Last name */}
      <div className="grid grid-cols-2 gap-4">
        <div id="field-firstName">
          <label className="block text-[18px] font-semibold tracking-wider text-[#6B7280] uppercase mb-2">
            01. First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="John"
            value={form.firstName}
            onChange={(e) => {
              setForm((p) => ({ ...p, firstName: e.target.value }));
              if (errors.firstName)
                setErrors((p) => ({ ...p, firstName: undefined }));
            }}
            className={`${inputBase} ${errors.firstName ? errorInput : normalInput}`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-[18px] mt-1">{errors.firstName}</p>
          )}
        </div>
        <div id="field-lastName">
          <label className="block text-[18px] font-semibold tracking-wider text-[#6B7280] uppercase mb-2">
            02. Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Doe"
            value={form.lastName}
            onChange={(e) => {
              setForm((p) => ({ ...p, lastName: e.target.value }));
              if (errors.lastName)
                setErrors((p) => ({ ...p, lastName: undefined }));
            }}
            className={`${inputBase} ${errors.lastName ? errorInput : normalInput}`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-[18px] mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid grid-cols-2 gap-4">
        <div id="field-email">
          <label className="block text-[18px] font-semibold tracking-wider text-[#6B7280] uppercase mb-2">
            03. Business E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            value={form.email}
            onChange={(e) => {
              setForm((p) => ({ ...p, email: e.target.value }));
              if (errors.email)
                setErrors((p) => ({ ...p, email: undefined }));
            }}
            className={`${inputBase} ${errors.email ? errorInput : normalInput}`}
          />
          {errors.email && (
            <p className="text-red-500 text-[18px] mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone with international dial selector */}
        <div id="field-phone">
          <label className="block text-[18px] font-semibold tracking-wider text-[#6B7280] uppercase mb-2">
            04. Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative flex" ref={dialRef}>
            {/* Country selector button */}
            <button
              type="button"
              onClick={() => {
                setDialOpen((o) => !o);
                setDialSearch("");
              }}
              className={`flex items-center gap-1.5 px-3 bg-[#F4F4F2] border rounded-l-lg border-r-0 flex-shrink-0 hover:bg-[#EAEAE8] transition-colors duration-150 ${
                errors.phone ? "border-red-400" : "border-[#E5E7EB]"
              }`}
            >
              <span className="text-[18px] leading-none">
                {selectedCountry.flag}
              </span>
              <span className="text-[13px] text-[#6B7280] font-medium whitespace-nowrap">
                {selectedCountry.dial}
              </span>
              <ChevronDown
                className={`w-3 h-3 text-[#9CA3AF] transition-transform duration-150 ${
                  dialOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Number input */}
            <input
              type="tel"
              placeholder="7123 456 789"
              value={localPhone}
              onChange={(e) => {
                const val = e.target.value;
                setLocalPhone(val);
                setForm((p) => ({
                  ...p,
                  phone: val ? `${selectedCountry.dial} ${val}` : "",
                }));
                if (errors.phone)
                  setErrors((p) => ({ ...p, phone: undefined }));
              }}
              className={`${inputBase} rounded-l-none ${
                errors.phone ? errorInput : normalInput
              }`}
            />

            {/* Dropdown */}
            {dialOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 w-72 bg-white border border-[#E5E7EB] rounded-xl shadow-xl overflow-hidden">
                {/* Search */}
                <div className="p-2.5 border-b border-[#F3F4F6]">
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg">
                    <Search className="w-3.5 h-3.5 text-[#9CA3AF] flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Search country or code…"
                      value={dialSearch}
                      onChange={(e) => setDialSearch(e.target.value)}
                      className="flex-1 bg-transparent text-[14px] text-[#1A1A2E] outline-none placeholder:text-[#9CA3AF]"
                      autoFocus
                    />
                  </div>
                </div>

                {/* Country list */}
                <div className="max-h-52 overflow-y-auto">
                  {filteredCountries.length === 0 ? (
                    <p className="px-4 py-3 text-[14px] text-[#9CA3AF]">
                      No countries found
                    </p>
                  ) : (
                    filteredCountries.map((c) => (
                      <button
                        key={`${c.dial}-${c.name}`}
                        type="button"
                        onClick={() => handleCountrySelect(c)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[#F4F4F2] transition-colors duration-100 ${
                          c.name === selectedCountry.name
                            ? "bg-[#EFF6FF]"
                            : ""
                        }`}
                      >
                        <span className="text-[18px] leading-none flex-shrink-0">
                          {c.flag}
                        </span>
                        <span className="flex-1 text-[14px] text-[#1A1A2E] truncate">
                          {c.name}
                        </span>
                        <span className="text-[13px] text-[#9CA3AF] flex-shrink-0">
                          {c.dial}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
          {errors.phone && (
            <p className="text-red-500 text-[18px] mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="block text-[18px] font-semibold tracking-wider text-[#6B7280] uppercase mb-2">
          05. Company Name
        </label>
        <input
          type="text"
          placeholder="Acme Corp"
          value={form.company}
          onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
          className={`${inputBase} ${normalInput}`}
        />
      </div>

      {/* Challenge */}
      <div id="field-challenge">
        <label className="block text-[18px] font-semibold tracking-wider text-[#6B7280] uppercase mb-2">
          06. What are you trying to solve?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          placeholder="Describe your challenge or objectives..."
          value={form.challenge}
          onChange={(e) => {
            setForm((p) => ({ ...p, challenge: e.target.value }));
            if (errors.challenge)
              setErrors((p) => ({ ...p, challenge: undefined }));
          }}
          rows={4}
          className={`${inputBase} resize-none ${
            errors.challenge ? errorInput : normalInput
          }`}
        />
        {errors.challenge && (
          <p className="text-red-500 text-[18px] mt-1">{errors.challenge}</p>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-[#E5E7EB]" />

      {/* Interests */}
      <div id="field-interests">
        <label className="block text-[18px] font-semibold text-[#1A1A2E] mb-4">
          What are your main areas of interest?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2.5">
          {interests.map((interest) => {
            const checked = form.interests.includes(interest);
            return (
              <label
                key={interest}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 mt-0.5 flex-shrink-0 rounded border-2 transition-all duration-150 flex items-center justify-center ${
                    checked
                      ? "bg-[#2563EB] border-[#2563EB]"
                      : "border-[#D1D5DB] group-hover:border-[#2563EB]"
                  }`}
                  onClick={() => toggleInterest(interest)}
                >
                  {checked && (
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-[18px] leading-relaxed transition-colors ${
                    checked ? "text-[#1A1A2E]" : "text-[#6B7280]"
                  }`}
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </span>
              </label>
            );
          })}
        </div>
        {errors.interests && (
          <p className="text-red-500 text-[18px] mt-2">{errors.interests}</p>
        )}
      </div>

      {/* reCAPTCHA */}
      <div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token) => {
            setRecaptchaToken(token);
            if (token)
              setErrors((p) => ({ ...p, recaptcha: undefined }));
          }}
          onExpired={() => setRecaptchaToken(null)}
        />
        {errors.recaptcha && (
          <p className="text-red-500 text-[18px] mt-1">{errors.recaptcha}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#0A1628] text-white py-5 rounded-lg text-[18px] font-semibold tracking-[0.08em] uppercase flex items-center justify-center gap-2 hover:bg-[#0d1f3c] transition-colors duration-200 group"
      >
        Submit Request
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
