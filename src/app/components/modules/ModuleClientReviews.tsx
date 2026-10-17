"use client";

import { useState, useEffect, useCallback, type KeyboardEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { SwitcherTestimonial } from "./moduleData";

export interface ClientReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  badge?: string;
}

const DEFAULT_REVIEWS: ClientReviewItem[] = [
  {
    id: "nina-perry",
    name: "NINA PERRY",
    role: "Managing Director, Global Media & Brand Operations",
    company: "Litton Industries / Northrop Grumman Corp.",
    quote:
      "I have known and worked closely with Rick and Liza Looser, and the fine folks at The Agency, for almost two decades and feel fully confident in expressing my endorsement. There is not a finer, more dedicated group of people offering marketing communications and public affairs capabilities and services. I first met Rick and Liza when I managed earned and paid media relations for Litton Industries, now Northrop Grumman Corporation.",
    image: "/images/testimonials/nina_perry.webp",
    badge: "✓ VERIFIED STRATEGIC PARTNER",
  },
  {
    id: "vikramaditya-roy",
    name: "VIKRAMADITYA ROY",
    role: "Chief Operating Officer",
    company: "Zenith Industrial Systems (Turnover ₹120 Cr)",
    quote:
      "We spent 9 painful months struggling with our previous enterprise ERP's clunky UI and endless consultant bills. Moving to Mossie ERP took less than 3 weeks. Our sales and operations teams actually log their daily transactions now, and the automated stock check on quotation creation saved us from two major fulfillment disasters last quarter.",
    image: "/images/testimonials/vikramaditya_roy.webp",
    badge: "✓ VERIFIED SWITCHER FROM LEGACY ENTERPRISE ERP",
  },
  {
    id: "radhika-mehra",
    name: "RADHIKA MEHRA",
    role: "Chief Financial Officer",
    company: "Kaveri Precision Components (Turnover ₹140 Cr)",
    quote:
      "Month-end close used to take our finance team 18 sleepless days. With Mossie ERP's auto-posting event bus and live bank reconciliation feeds, our books close on the 2nd of every month. Our statutory auditor praised the clean audit trail and automated tax ledger accuracy.",
    image: "/images/testimonials/radhika_mehra.webp",
    badge: "✓ VERIFIED SWITCHER FROM DESKTOP SPREADSHEETS",
  },
  {
    id: "devendra-patil",
    name: "DEVENDRA PATIL",
    role: "VP of Manufacturing & Operations",
    company: "Orbital Precision Technologies (Turnover ₹145 Cr)",
    quote:
      "Before Mossie ERP, our planners spent all day building disconnected spreadsheets while operators filled out paper job travelers that were entered 2 days late. Mossie ERP's finite-capacity scheduling and tablet MES consoles gave us real-time OEE visibility and eliminated line starvation completely. Our plant throughput jumped 31% in our first quarter.",
    image: "/images/testimonials/devendra_patil.webp",
    badge: "✓ VERIFIED SWITCHER FROM LEGACY MANUFACTURING ERP",
  },
  {
    id: "suresh-kulkarni",
    name: "SURESH KULKARNI",
    role: "VP Commercial & Supply Chain",
    company: "Prism Polymers & Packaging (Turnover ₹85 Cr)",
    quote:
      "Before Mossie ERP, our sales reps had to call the warehouse five times a day to confirm whether stock was actually available. Now the second an order is approved, stock is locked and E-Way bills are ready before the truck arrives.",
    image: "/images/testimonials/suresh_kulkarni.webp",
    badge: "✓ VERIFIED SWITCHER FROM DESKTOP TOOLS & SPREADSHEETS",
  },
  {
    id: "ananya-deshmukh",
    name: "ANANYA DESHMUKH",
    role: "Head of People & Culture",
    company: "Matrix Automotive Components (Turnover ₹72 Cr)",
    quote:
      "Running payroll for 380 factory and sales staff used to take my HR executive 6 full days every month. With Mossie ERP, biometric data syncs automatically, statutory ECRs are ready instantly, and payroll is disbursed in 10 minutes flat.",
    image: "/images/testimonials/ananya_deshmukh.webp",
    badge: "✓ VERIFIED SWITCHER FROM MANUAL PAYROLL",
  },
  {
    id: "venkatesh-raman",
    name: "VENKATESH RAMAN",
    role: "Managing Director",
    company: "Apex Infrastructure Solutions (Turnover ₹115 Cr)",
    quote:
      "With standalone task apps, we knew who was doing what task, but had no idea if our EPC projects were making or losing money until the final audit. Mossie ERP's real-time budget burn and 1-click milestone invoicing improved our cash flow by ₹65L.",
    image: "/images/testimonials/venkatesh_raman.webp",
    badge: "✓ VERIFIED SWITCHER FROM STANDALONE TASK APPS",
  },
];

function getMatchingImage(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes("vikramaditya")) return "/images/testimonials/vikramaditya_roy.webp";
  if (lower.includes("radhika")) return "/images/testimonials/radhika_mehra.webp";
  if (lower.includes("devendra")) return "/images/testimonials/devendra_patil.webp";
  if (lower.includes("suresh")) return "/images/testimonials/suresh_kulkarni.webp";
  if (lower.includes("ananya")) return "/images/testimonials/ananya_deshmukh.webp";
  if (lower.includes("venkatesh")) return "/images/testimonials/venkatesh_raman.webp";
  if (lower.includes("gautam")) return "/images/testimonials/devendra_patil.webp";
  if (lower.includes("manish")) return "/images/testimonials/suresh_kulkarni.webp";
  return "/images/testimonials/nina_perry.webp";
}

interface ModuleClientReviewsProps {
  activeTestimonial?: SwitcherTestimonial;
  moduleName?: string;
}

export default function ModuleClientReviews({
  activeTestimonial,
}: ModuleClientReviewsProps) {
  // Build reviews list prioritizing current module's testimonial
  const reviews: ClientReviewItem[] = (() => {
    if (!activeTestimonial) return DEFAULT_REVIEWS;

    const primaryReview: ClientReviewItem = {
      id: `active-${activeTestimonial.initials.toLowerCase()}`,
      name: activeTestimonial.userName.toUpperCase(),
      role: activeTestimonial.userRole,
      company: activeTestimonial.userCompany,
      quote: activeTestimonial.quote,
      image: getMatchingImage(activeTestimonial.userName),
      badge: activeTestimonial.badge,
    };

    // Filter out duplicate from defaults and put primary first
    const otherReviews = DEFAULT_REVIEWS.filter(
      (r) =>
        r.name.toLowerCase() !== primaryReview.name.toLowerCase() &&
        !primaryReview.name.toLowerCase().includes(r.name.toLowerCase().split(" ")[0])
    );

    return [primaryReview, ...otherReviews];
  })();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  // Auto-advance every 8 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  const currentReview = reviews[currentIndex];

  return (
    <div
      className="relative w-full max-w-5xl mx-auto rounded-xl sm:rounded-2xl bg-[#b9c0cb] text-white shadow-[0_16px_45px_rgba(0,0,0,0.12)] select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Client Reviews Carousel"
    >
      {/* Left Chevron Navigation Button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 text-white hover:text-white/80 active:scale-90 transition-transform cursor-pointer z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
        aria-label="Previous review"
      >
        <ChevronLeft className="w-7 h-7 sm:w-10 sm:h-10 stroke-[2.5]" />
      </button>

      {/* Right Chevron Navigation Button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 text-white hover:text-white/80 active:scale-90 transition-transform cursor-pointer z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
        aria-label="Next review"
      >
        <ChevronRight className="w-7 h-7 sm:w-10 sm:h-10 stroke-[2.5]" />
      </button>

      {/* Content Slide Container */}
      <div className="px-10 sm:px-16 md:px-20 lg:px-24 py-8 sm:py-10 md:py-12">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentReview.id}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 24 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-center"
          >
            {/* Left Column: Client Headshot Photo (Crisp rectangular format) */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start">
              <div className="relative w-48 sm:w-56 md:w-full max-w-[240px] aspect-square overflow-hidden bg-slate-300 shadow-[0_4px_16px_rgba(0,0,0,0.15)] shrink-0">
                <Image
                  src={currentReview.image}
                  alt={currentReview.name}
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 240px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Review Text & Details */}
            <div className="md:col-span-7 lg:col-span-8 text-left space-y-3 sm:space-y-4">
              <h3 className="text-white font-extrabold text-xl sm:text-2xl lg:text-[26px] tracking-wide uppercase leading-tight">
                CLIENT REVIEWS
              </h3>

              <p className="text-white/95 text-[14px] sm:text-[15.5px] lg:text-[16px] leading-relaxed font-normal">
                &ldquo; {currentReview.quote}&rdquo;
              </p>

              <div className="pt-2">
                <div className="text-white font-extrabold text-sm sm:text-base tracking-widest uppercase">
                  {currentReview.name}
                </div>
                {currentReview.role && (
                  <div className="text-white/80 text-xs sm:text-[13px] font-medium tracking-wide uppercase mt-0.5">
                    {currentReview.role}
                    {currentReview.company ? ` • ${currentReview.company}` : ""}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 pb-4 sm:pb-5">
        {reviews.map((rev, idx) => (
          <button
            key={rev.id}
            type="button"
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`transition-all duration-300 h-1 rounded-full cursor-pointer ${
              idx === currentIndex
                ? "w-8 bg-white"
                : "w-3 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to review ${idx + 1}: ${rev.name}`}
            aria-current={idx === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

