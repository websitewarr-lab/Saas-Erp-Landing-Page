"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  UsersRound,
  Boxes,
  Megaphone,
  Newspaper,
  ShoppingCart,
  Truck,
  Factory,
  ArrowRight,
} from "lucide-react";

interface IndustryItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  bgGradient: string;
  borderHover: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "software-tech",
    title: "Software and Technology",
    description:
      "Accelerate innovation, automate financial operations, and scale globally with AI-powered cloud ERP built for fast-growing software and technology businesses.",
    icon: Laptop,
    bgGradient: "bg-gradient-to-b from-white via-white to-[#EEF5FF]",
    borderHover: "hover:border-blue-300",
  },
  {
    id: "it-services",
    title: "IT and Professional Services",
    description:
      "Streamline project delivery, resource utilization, billing, and profitability with real-time visibility across your entire services operation.",
    icon: UsersRound,
    bgGradient: "bg-gradient-to-b from-white via-white to-[#F0F7FF]",
    borderHover: "hover:border-sky-300",
  },
  {
    id: "wholesale-dist",
    title: "Wholesale Distribution",
    description:
      "Optimize inventory, warehousing, procurement, and supply chain operations with intelligent, real-time distribution management.",
    icon: Boxes,
    bgGradient: "bg-gradient-to-b from-white via-white to-[#F0FDF4]",
    borderHover: "hover:border-emerald-300",
  },
  {
    id: "marketing-agencies",
    title: "Advertising and Digital Marketing Agencies",
    description:
      "Manage campaigns, client billing, project profitability, and creative workflows seamlessly from a single unified platform.",
    icon: Megaphone,
    bgGradient: "bg-gradient-to-b from-white via-white to-[#FAF5FF]",
    borderHover: "hover:border-purple-300",
  },
  {
    id: "media-publishing",
    title: "Media and Publishing",
    description:
      "Drive subscription growth, automate revenue recognition, and manage digital content operations with complete business visibility.",
    icon: Newspaper,
    bgGradient: "bg-gradient-to-b from-white via-white to-[#FFF5F5]",
    borderHover: "hover:border-rose-300",
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce",
    description:
      "Deliver connected omnichannel experiences with real-time inventory, order management, customer insights, and AI-driven commerce operations.",
    icon: ShoppingCart,
    bgGradient: "bg-gradient-to-b from-white via-white to-[#F0F9FF]",
    borderHover: "hover:border-cyan-300",
  },
  {
    id: "logistics",
    title: "Transportation and Logistics",
    description:
      "Gain real-time visibility into fleet operations, logistics planning, shipment tracking, and supply chain performance.",
    icon: Truck,
    bgGradient: "bg-gradient-to-b from-white via-white to-[#FFFBEB]",
    borderHover: "hover:border-amber-300",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Improve production planning, inventory control, procurement, and shop floor efficiency with intelligent manufacturing automation.",
    icon: Factory,
    bgGradient: "bg-gradient-to-b from-white via-white to-[#F8FAFC]",
    borderHover: "hover:border-slate-300",
  },
];

export default function IndustrySolutions() {
  return (
    <section className="py-[15px] bg-[#F8FAFC] relative overflow-hidden" id="industries">
      {/* Ambient background tints */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100/25 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-100/20 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#0F172A 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-[1240px]">
        {/* Section Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mx-auto mb-8 sm:mb-10 max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-3">
            Built for the way{" "}
            <br className="hidden sm:inline" />
            your{" "}
            <span className="text-[#2563EB] relative inline-block">
              industry
              <svg
                className="absolute w-[105%] h-3 -bottom-1 -left-1 text-[#2563EB]/20"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            works.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#64748B] max-w-md mx-auto leading-relaxed">
            Start with a strong foundation, then shape the details around your team and customers.
          </p>
        </motion.div>

        {/* 8-Card Grid matching media_1789198291120.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5 mb-8 sm:mb-10">
          {INDUSTRIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.055,
                  ease: "easeOut",
                }}
                className={`group relative ${item.bgGradient} p-5 sm:p-5.5 rounded-[18px] sm:rounded-[20px] border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] ${item.borderHover} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none`}
              >
                <div>
                  {/* Top-Left Black Rounded Icon Badge (Rotates 360° on Hover/Scroll-Over) */}
                  <div className="w-10 h-10 rounded-[11px] bg-[#0A0D14] text-white flex items-center justify-center mb-4 shadow-2xs transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
                    <Icon className="w-5 h-5 text-white stroke-[1.8]" />
                  </div>

                  {/* Industry Title */}
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-slate-900 tracking-tight leading-snug mb-2.5">
                    {item.title}
                  </h3>

                  {/* Industry Description */}
                  <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-[1.65] font-normal mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Card Divider & Learn More link */}
                <div className="w-full border-t border-slate-200/75 pt-3 mt-auto flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-[12.5px] sm:text-[13px] font-semibold text-slate-900 group-hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    Learn More{" "}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer Pill Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-1.5 py-1.5 pr-5 rounded-full bg-white shadow-xs border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all text-[13px] font-bold text-slate-700 cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-[#2563EB] flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
              </svg>
            </div>
            Solutions tailored for every industry{" "}
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

