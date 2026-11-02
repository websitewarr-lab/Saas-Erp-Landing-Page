"use client";

import { useState, useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import {
  Search,
  Bell,
  Calendar,
  ChevronDown,
} from "lucide-react";

interface KeySpec {
  w: number;
}

const SLEEK_KEY_ROWS: { y: number; h: number; keys: KeySpec[] }[] = [
  // Row 1: Function keys (14 keys)
  { y: 3.5, h: 2.2, keys: [{ w: 1.25 }, ...Array(12).fill({ w: 1 }), { w: 1.25 }] },
  // Row 2: Numbers (14 keys)
  { y: 6.5, h: 2.6, keys: [{ w: 1 }, ...Array(12).fill({ w: 1 }), { w: 1.55 }] },
  // Row 3: QWERTY (14 keys)
  { y: 9.9, h: 2.7, keys: [{ w: 1.45 }, ...Array(12).fill({ w: 1 }), { w: 1.15 }] },
  // Row 4: Home (13 keys)
  { y: 13.4, h: 2.8, keys: [{ w: 1.75 }, ...Array(11).fill({ w: 1 }), { w: 1.85 }] },
  // Row 5: Shift (12 keys)
  { y: 17.0, h: 3.1, keys: [{ w: 2.25 }, ...Array(10).fill({ w: 1 }), { w: 2.35 }] },
  // Row 6: Space & Modifiers (8 keys)
  { y: 20.8, h: 3.3, keys: [{ w: 1.15 }, { w: 1.15 }, { w: 1.25 }, { w: 1.45 }, { w: 6.8 }, { w: 1.45 }, { w: 1.25 }, { w: 2.0 }] },
];

export const HERO_CARDS_DATA = {
  leadPipeline: {
    title: "Lead Pipeline",
    stages: [
      { label: "New Leads", value: "1,540", count: 1540, gradient: ["#005ce6", "#1479ff"], dotColor: "#0d6efd" },
      { label: "Qualified", value: "892", count: 892, gradient: ["#0b84f3", "#229dff"], dotColor: "#0d74e7" },
      { label: "Proposal", value: "420", count: 420, gradient: ["#29b0fc", "#4bc3ff"], dotColor: "#2aa8f5" },
      { label: "Negotiation", value: "210", count: 210, gradient: ["#42d4ee", "#60e3f7"], dotColor: "#3fd0eb" },
      { label: "Won", value: "145", count: 145, gradient: ["#45e3bd", "#5ef2cd"], dotColor: "#20c997" }
    ]
  },
  salesConversion: {
    title: "Sales Conversion",
    totalValue: "1,248",
    unit: "Leads",
    badge: { change: "12.4% ↑", label: "Year on year" },
    yAxisTicks: [1250, 1000, 750, 500, 250, 0],
    series: [
      { month: "Jan", value: 250 },
      { month: "Feb", value: 460 },
      { month: "Mar", value: 660 },
      { month: "Apr", value: 575 },
      { month: "May", value: 920 },
      { month: "Jun", value: 1230 }
    ]
  },
  inventoryAdjustments: {
    title: "Inventory Adjustment Reasons",
    reasons: [
      { label: "Expired Goods", percentage: "25.5%", barWidth: "31%", color: "#0070f3" },
      { label: "Stock Variance", percentage: "19.4%", barWidth: "26%", color: "#00b4f5" },
      { label: "Internal Usage", percentage: "15.2%", barWidth: "19.5%", color: "#6c47ff" },
      { label: "Revaluation", percentage: "14.5%", barWidth: "18.5%", color: "#00a878" }
    ],
    footer: { label: "Overall Stock Health", status: "98.2% Optimal" }
  },
  inventoryOverview: {
    title: "Inventory Overview",
    totalValue: "2,854",
    unit: "Items",
    badge: "↑ +6.3%",
    segments: [
      { label: "In Stock", percentage: "62.4%", value: 62.4, color: "#0074f8", position: "right" },
      { label: "Low Stock", percentage: "18.6%", value: 18.6, color: "#2b99ff", position: "bottom-left" },
      { label: "Reorder Soon", percentage: "11.2%", value: 11.2, color: "#67dcff", position: "mid-left" },
      { label: "Out of Stock", percentage: "7.8%", value: 7.8, color: "#004494", position: "top-left" }
    ],
    footer: { label: "Stock Health", status: "98.2% Optimal" }
  }
};

function MacbookBaseDeck() {
  return (
    <div className="w-full relative select-none">
      <svg
        className="w-full h-auto overflow-visible"
        viewBox="0 0 540 44"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sleekDeckGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9499A3" />
            <stop offset="30%" stopColor="#AEB3BE" />
            <stop offset="70%" stopColor="#8E939E" />
            <stop offset="100%" stopColor="#767B86" />
          </linearGradient>

          <linearGradient id="sleekFrontLipGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C4C9D3" />
            <stop offset="45%" stopColor="#9FA5B2" />
            <stop offset="80%" stopColor="#6E7380" />
            <stop offset="100%" stopColor="#2B2E36" />
          </linearGradient>

          <linearGradient id="sleekKeyCapGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2B2D35" />
            <stop offset="40%" stopColor="#1E2026" />
            <stop offset="100%" stopColor="#121317" />
          </linearGradient>

          <radialGradient id="sleekBaseShadowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Ground Contact Shadow */}
        <ellipse cx="270" cy="42.2" rx="280" ry="3.2" fill="url(#sleekBaseShadowGrad)" />

        {/* 2. Open Keyboard Deck Interior (Hidden while laptop is closed, revealed as lid lifts) */}
        <g className="hero-open-deck-interior">
          {/* Base Deck Metallic Surface (Flawless Edge Match with Lid at Hinge, flaring outward in 3D perspective) */}
          <path
            d="M 0 0 L 540 0 L 547 34.5 Q 547 35.5 545 35.5 L -5 35.5 Q -7 35.5 -7 34.5 L 0 0 Z"
            fill="url(#sleekDeckGrad)"
            stroke="#686C77"
            strokeWidth="0.6"
          />

          {/* Hinge Clutch Barrel */}
          <rect x="170" y="0" width="200" height="1.8" rx="0.9" fill="#121316" />

          {/* Speaker Grilles (Angled with 3D perspective flare) */}
          <g opacity="0.35">
            <pattern id="sleekSpk" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.35" fill="#14161A" />
            </pattern>
            <polygon points="5,3 14.5,3 8.5,25 -1,25" fill="url(#sleekSpk)" />
            <polygon points="525.5,3 535,3 541,25 531.5,25" fill="url(#sleekSpk)" />
          </g>

          {/* Recessed Keyboard Basin (Flares outward in natural 3D perspective) */}
          <path
            d="M 18 2.5 L 522 2.5 L 528.5 24.5 Q 528.5 25.5 527 25.5 L 13 25.5 Q 11.5 25.5 11.5 24.5 Z"
            fill="#0D0E12"
            stroke="#22242B"
            strokeWidth="0.6"
          />

          {/* Foreshortened Chiclet Keys (6 Full Rows with perspective flare) */}
          {SLEEK_KEY_ROWS.map((row, rIdx) => {
            const y = row.y;
            const h = row.h;
            const t = rIdx / 5;
            const rowLeft = 20 - t * 6.5;
            const rowRight = 520 + t * 6.5;
            const rowW = rowRight - rowLeft;
            const totalUnits = row.keys.reduce((acc, k) => acc + k.w, 0);
            const gap = 1.3;
            const availW = rowW - (row.keys.length - 1) * gap;
            const unitW = availW / totalUnits;

            let curX = rowLeft;
            return (
              <g key={`sleek-row-${rIdx}`}>
                {row.keys.map((k, kIdx) => {
                  const kw = Number((k.w * unitW).toFixed(2));
                  const x = Number(curX.toFixed(2));
                  curX += kw + gap;

                  return (
                    <g key={`sleek-key-${rIdx}-${kIdx}`}>
                      <rect x={x} y={y} width={kw} height={h} rx="0.6" fill="url(#sleekKeyCapGrad)" stroke="#111215" strokeWidth="0.35" />
                      <line x1={x + 0.5} y1={y + 0.4} x2={x + kw - 0.5} y2={y + 0.4} stroke="rgba(255,255,255,0.18)" strokeWidth="0.3" />
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* Slim Trackpad */}
          <rect x="195" y="27" width="150" height="6.5" rx="1.5" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          <rect x="196" y="27.5" width="148" height="5.5" rx="1" fill="rgba(0,0,0,0.06)" />
        </g>

        {/* 3. Front Lip Vertical Face Thickness (Always visible in both closed & open states) */}
        <path
          d="M -7 35 L 547 35 Q 548 35 548 37 L 547 39.2 Q 545 41.5 541 41.5 L -1 41.5 Q -5 41.5 -7 39.2 L -8 37 Q -8 35 -7 35 Z"
          fill="url(#sleekFrontLipGrad)"
        />

        {/* Front Lip Top Highlight Line */}
        <line x1="-7" y1="35" x2="547" y2="35" stroke="rgba(255,255,255,0.75)" strokeWidth="0.7" />

        {/* Centered Thumb Scoop Notch (Exact match to closed laptop reference) */}
        <path
          d="M 236 35 Q 239 38.4 246 38.4 L 294 38.4 Q 301 38.4 304 35 Z"
          fill="#262932"
          stroke="#484D5A"
          strokeWidth="0.45"
        />
        <path
          d="M 238 35 Q 241 36.8 247 36.8 L 293 36.8 Q 299 36.8 302 35 Z"
          fill="#15171C"
        />
      </svg>

      {/* CLOSED LAPTOP 3D PERSPECTIVE ALUMINUM TOP COVER (Matches reference image when closed, lifts up to hinge on open) */}
      <svg
        className="hero-closed-lid-cover absolute left-0 right-0 bottom-0 w-full h-[250%] overflow-visible z-10 pointer-events-none"
        viewBox="0 -66 540 110"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="closedLidSurfaceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D6DAE2" />
            <stop offset="38%" stopColor="#C5CAD4" />
            <stop offset="78%" stopColor="#CFD4DE" />
            <stop offset="95%" stopColor="#E4E8F0" />
            <stop offset="100%" stopColor="#F5F7FA" />
          </linearGradient>
          <linearGradient id="closedLidFrontRimGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0F3F8" />
            <stop offset="45%" stopColor="#B8BECB" />
            <stop offset="100%" stopColor="#585D68" />
          </linearGradient>
        </defs>

        {/* Realistic 3D Foreshortened Aluminum Top Lid (Tapers from rounded rear edge y=-62 down to front lip y=34.8) */}
        <path
          d="M 64 -62 L 476 -62 Q 488 -62 491 -53 L 547.2 31.5 Q 548.2 33.4 545 33.6 L -5 33.6 Q -8.2 33.4 -7.2 31.5 L 49 -53 Q 52 -62 64 -62 Z"
          fill="url(#closedLidSurfaceGrad)"
          stroke="#B4BAC6"
          strokeWidth="0.6"
        />

        {/* Subtle Center Specular Sheen on Brushed Aluminum Top Cover */}
        <path
          d="M 140 -61.5 L 400 -61.5 L 435 33 L 105 33 Z"
          fill="rgba(255, 255, 255, 0.16)"
        />

        {/* Closed Lid Front Edge Bevel & Clamshell Parting Seam right above the Thumb Scoop Notch */}
        <path
          d="M -7.4 31.5 L 547.4 31.5 Q 548.2 33.2 547 34.8 L -7 34.8 Q -8.2 33.2 -7.4 31.5 Z"
          fill="url(#closedLidFrontRimGrad)"
        />
        <line x1="-7" y1="34.8" x2="547" y2="34.8" stroke="#1B1D24" strokeWidth="1.15" />
      </svg>
    </div>
  );
}

export default function HeroLaptopShowcase() {
  const [activeRange, setActiveRange] = useState("This Year");
  const [scale, setScale] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      if (width < 768) {
        // Smartphone: do not apply panoramic scale, let laptop handle its own scale
        setScale(null);
        return;
      }
      if (width >= 1440) {
        // PC: full unscaled size
        setScale(1);
        return;
      }
      // Tablet and Laptop screens (768px to 1439px):
      // Measure actual available container width
      const containerWidth = containerRef.current?.clientWidth ?? width;
      const availableWidth = containerWidth - 12;
      const BASE_WIDTH = 1460;
      const calculatedScale = Math.min(1, Math.max(0.46, availableWidth / BASE_WIDTH));
      setScale(calculatedScale);
    };

    updateScale();

    // Use ResizeObserver for real-time accurate container monitoring
    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      observer = new ResizeObserver(() => {
        updateScale();
      });
      observer.observe(containerRef.current);
    }

    window.addEventListener("resize", updateScale, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  const isScaled = scale !== null && scale < 1;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[1440px] mx-auto pt-2 pb-6 sm:pb-8 select-none overflow-hidden md:overflow-visible"
    >
      {/* Scaler wrapper: on screen >= 768px (tablets & laptops), scales the entire 5-element panoramic horizon to fit within the viewport without cutting off edges */}
      <div
        className="hero-panoramic-scaler"
        style={
          isScaled
            ? {
                height: `${Math.round(365 * (scale as number))}px`,
              }
            : undefined
        }
      >
        {/* 5-Element Panoramic Horizon: [Card 1] [Card 2] [CENTER LAPTOP] [Card 3] [Card 4] */}
        <div
          data-scaled={isScaled ? "true" : undefined}
          className="hero-panoramic-inner flex items-center justify-center w-full md:w-[1460px] shrink-0 gap-3 xl:gap-4 px-2"
          style={
            isScaled
              ? {
                  transform: `scale(${scale})`,
                  transformOrigin: "top center",
                }
              : undefined
          }
        >
        
        {/* ========================================================================= */}
        {/* LEFT SIDE: 2 Squarish Glassmorphic Cards (Hidden on Mobile)               */}
        {/* ========================================================================= */}
        <div
          className="hidden md:flex items-center gap-3 shrink-0 relative z-10"
          style={{
            transform: "perspective(1200px) rotateY(15deg) rotateX(2deg)",
            transformOrigin: "right center",
          }}
        >
          {/* Card 1: Lead Pipeline (SET 1 — Left Card) */}
          <div
            className="hero-card-emerge w-[215px] xl:w-[235px] h-[285px] xl:h-[295px] rounded-[22px] p-4.5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            style={
              {
                "--card-start-x": "465px",
                "--card-delay": "760ms",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.74) 55%, rgba(255, 255, 255, 0.84) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1.5px solid rgba(255, 255, 255, 0.95)",
                boxShadow:
                  "0 20px 45px -15px rgba(15, 23, 42, 0.12), 0 0 20px rgba(255, 255, 255, 0.8) inset",
              } as CSSProperties
            }
          >
            {/* Card Header */}
            <div>
              <span className="text-[13.5px] font-bold text-[#08142C] tracking-tight block">
                {HERO_CARDS_DATA.leadPipeline.title}
              </span>
            </div>

            {/* 5-Tier Vertically Stacked Funnel with Horizontal Connector Lines */}
            <div className="relative flex items-center justify-between gap-1.5 my-auto py-1">
              {/* Funnel SVG on Left */}
              <svg className="w-[52px] xl:w-[58px] h-[190px] xl:h-[200px] shrink-0 overflow-visible" viewBox="0 0 58 190">
                <defs>
                  <linearGradient id="funnelTier0" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#005CE6" />
                    <stop offset="100%" stopColor="#1479FF" />
                  </linearGradient>
                  <linearGradient id="funnelTier1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0B84F3" />
                    <stop offset="100%" stopColor="#229DFF" />
                  </linearGradient>
                  <linearGradient id="funnelTier2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#29B0FC" />
                    <stop offset="100%" stopColor="#4BC3FF" />
                  </linearGradient>
                  <linearGradient id="funnelTier3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#42D4EE" />
                    <stop offset="100%" stopColor="#60E3F7" />
                  </linearGradient>
                  <linearGradient id="funnelTier4" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#45E3BD" />
                    <stop offset="100%" stopColor="#5EF2CD" />
                  </linearGradient>
                </defs>

                {/* Tier 1 (Royal Blue #005CE6 → #1479FF) */}
                <polygon
                  points="2,4 56,4 50,34 8,34"
                  fill="url(#funnelTier0)"
                  stroke="url(#funnelTier0)"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />

                {/* Tier 2 (Bright Blue #0B84F3 → #229DFF) */}
                <polygon
                  points="7,42 51,42 46,72 12,72"
                  fill="url(#funnelTier1)"
                  stroke="url(#funnelTier1)"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />

                {/* Tier 3 (Sky Cyan #29B0FC → #4BC3FF) */}
                <polygon
                  points="12,80 46,80 41,110 17,110"
                  fill="url(#funnelTier2)"
                  stroke="url(#funnelTier2)"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />

                {/* Tier 4 (Aqua #42D4EE → #60E3F7) */}
                <polygon
                  points="17,118 41,118 37,148 21,148"
                  fill="url(#funnelTier3)"
                  stroke="url(#funnelTier3)"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />

                {/* Tier 5 (Mint #45E3BD → #5EF2CD) */}
                <polygon
                  points="21,156 37,156 33,186 25,186"
                  fill="url(#funnelTier4)"
                  stroke="url(#funnelTier4)"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Stage labels & counts with connector lines */}
              <div className="flex-1 flex flex-col justify-between h-[190px] xl:h-[200px] py-1">
                {HERO_CARDS_DATA.leadPipeline.stages.map((stage, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-1.5 w-full">
                    {/* Horizontal Connector Line */}
                    <div className="w-2.5 xl:w-3 border-t border-dashed border-slate-300 shrink-0" />
                    <div className="flex-1 flex items-center justify-between min-w-0">
                      <span className="text-[10px] xl:text-[10.5px] font-bold text-slate-700 truncate">
                        {stage.label}
                      </span>
                      <span className="text-[10.5px] xl:text-[11.5px] font-extrabold text-[#08142C] ml-1 shrink-0">
                        {stage.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Sales Conversion (SET 1 — Right Card) */}
          <div
            className="hero-card-emerge w-[215px] xl:w-[235px] h-[285px] xl:h-[295px] rounded-[22px] p-4.5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            style={
              {
                "--card-start-x": "240px",
                "--card-delay": "680ms",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.74) 55%, rgba(255, 255, 255, 0.84) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1.5px solid rgba(255, 255, 255, 0.95)",
                boxShadow:
                  "0 20px 45px -15px rgba(15, 23, 42, 0.12), 0 0 20px rgba(255, 255, 255, 0.8) inset",
              } as CSSProperties
            }
          >
            {/* Card Header & Primary Metric */}
            <div className="relative z-10">
              <span className="text-[13.5px] font-bold text-[#08142C] tracking-tight block">
                {HERO_CARDS_DATA.salesConversion.title}
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-[25px] xl:text-[27px] font-extrabold text-[#08142C] tracking-tight leading-none">
                  {HERO_CARDS_DATA.salesConversion.totalValue}
                </span>
                <span className="text-[14px] xl:text-[15px] font-bold text-[#08142C]">
                  {HERO_CARDS_DATA.salesConversion.unit}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#8CE0B9] text-[#0E9F6E] text-[10.5px] font-bold mt-1.5 bg-[#EBFAF4] shadow-2xs">
                <span>{HERO_CARDS_DATA.salesConversion.badge.change}</span>
                <span className="text-slate-600 font-semibold text-[10px]">
                  {HERO_CARDS_DATA.salesConversion.badge.label}
                </span>
              </div>
            </div>

            {/* Smooth Spline Line + Area Chart with Dashed Grid Lines & Circular Nodes */}
            <div className="w-full h-[155px] xl:h-[165px] relative mt-1">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 205 135" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="salesSplineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0A75F8" stopOpacity="0.28" />
                    <stop offset="70%" stopColor="#0A75F8" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#0A75F8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Dashed Grid Lines & Y-Axis Ticks (1250, 1000, 750, 500, 250, 0) */}
                <g opacity="0.65">
                  <line x1="26" y1="10" x2="200" y2="10" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="26" y1="28" x2="200" y2="28" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="26" y1="46" x2="200" y2="46" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="26" y1="64" x2="200" y2="64" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="26" y1="82" x2="200" y2="82" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="26" y1="100" x2="200" y2="100" stroke="#CBD5E1" strokeWidth="1" />
                </g>

                {/* Y-Axis Tick Text */}
                <g fill="#94A3B8" fontSize="7.5" fontWeight="600" textAnchor="end">
                  <text x="21" y="12.5">1,250</text>
                  <text x="21" y="30.5">1,000</text>
                  <text x="21" y="48.5">750</text>
                  <text x="21" y="66.5">500</text>
                  <text x="21" y="84.5">250</text>
                  <text x="21" y="102.5">0</text>
                </g>

                {/* Smooth Area Gradient Fill */}
                <path
                  d="M 36 82 C 50 78, 56 69, 68 66.9 C 80 63, 86 55, 100 52.5 C 114 50, 120 60, 132 58.6 C 146 57, 152 38, 164 33.8 C 176 27, 184 16, 194 11.4 L 194 100 L 36 100 Z"
                  fill="url(#salesSplineGrad)"
                />

                {/* Smooth Spline Stroke Line */}
                <path
                  d="M 36 82 C 50 78, 56 69, 68 66.9 C 80 63, 86 55, 100 52.5 C 114 50, 120 60, 132 58.6 C 146 57, 152 38, 164 33.8 C 176 27, 184 16, 194 11.4"
                  fill="none"
                  stroke="#0A75F8"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Circular Nodes with White Centers (Jan: 250, Feb: 460, Mar: 660, Apr: 575, May: 920, Jun: 1230) */}
                <circle cx="36" cy="82" r="3" fill="#FFFFFF" stroke="#0A75F8" strokeWidth="2" />
                <circle cx="68" cy="66.9" r="3" fill="#FFFFFF" stroke="#0A75F8" strokeWidth="2" />
                <circle cx="100" cy="52.5" r="3" fill="#FFFFFF" stroke="#0A75F8" strokeWidth="2" />
                <circle cx="132" cy="58.6" r="3" fill="#FFFFFF" stroke="#0A75F8" strokeWidth="2" />
                <circle cx="164" cy="33.8" r="3" fill="#FFFFFF" stroke="#0A75F8" strokeWidth="2" />
                <circle cx="194" cy="11.4" r="3" fill="#FFFFFF" stroke="#0A75F8" strokeWidth="2" />

                {/* X-Axis Month Labels */}
                <g fill="#64748B" fontSize="8.5" fontWeight="600" textAnchor="middle">
                  <text x="36" y="117">Jan</text>
                  <text x="68" y="117">Feb</text>
                  <text x="100" y="117">Mar</text>
                  <text x="132" y="117">Apr</text>
                  <text x="164" y="117">May</text>
                  <text x="194" y="117">Jun</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTER: REALISTIC MACBOOK PRO SPACE BLACK (Front View from Reference)     */}
        {/* ========================================================================= */}
        <div className="w-[510px] xl:w-[540px] shrink-0 flex flex-col items-center relative z-20 select-none scale-[0.58] xs:scale-[0.7] sm:scale-[0.85] md:scale-100 origin-center -my-20 xs:-my-14 sm:-my-6 md:my-0">
          
          {/* LAPTOP SCREEN LID (Swings open smoothly on GPU compositor thread) */}
          <div className="hero-laptop-lid-open w-full bg-[#18191E] rounded-t-[14px] sm:rounded-t-[16px] p-[4px] sm:p-[5px] pb-0 shadow-[0_22px_45px_-12px_rgba(0,0,0,0.55)] border-t border-x border-[#383B44]/80 relative">
            
            {/* Top Chamfered Metallic Edge Light */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#555964]/80 to-transparent rounded-t-[14px]" />

            {/* SCREEN DISPLAY - Height ~295px matching flanking squarish side cards */}
            <div className="w-full h-[295px] bg-[#0A0C10] rounded-t-[7px] overflow-hidden relative flex flex-col shadow-inner select-none">
              
              {/* Screen Wake-Up Brightness Overlay as Lid Opens */}
              <div className="hero-screen-wake-overlay absolute inset-0 bg-[#05070B] z-30 pointer-events-none" />

              {/* REAL APPLE MACBOOK PRO CAMERA NOTCH */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[52px] h-[10px] bg-[#0A0C10] rounded-b-[5px] z-40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#050608] border border-slate-700/60 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-blue-500/80" />
                </div>
              </div>

              {/* Screen Top Bar - Generic Enterprise ERP style with NO landing page brand */}
              <div className="bg-[#0C1E38] text-white px-3 py-1.5 flex items-center justify-between border-b border-slate-800 text-[11px] relative z-20">
                {/* Left: Brand & Search */}
                <div className="flex items-center gap-2.5 flex-1 pr-12">
                  <div className="flex items-center gap-1.5 font-bold tracking-tight text-white">
                    <Image
                      src="/images/logo/mossierplogo.webp"
                      alt="Mossie ERP Logo"
                      width={28}
                      height={18}
                      priority
                      className="h-4.5 w-auto object-contain"
                    />
                    <span className="text-[12px] font-extrabold tracking-wider text-slate-100">ERP</span>
                  </div>

                  {/* Search Input Box */}
                  <div className="relative max-w-[170px] w-full hidden sm:block">
                    <Search className="w-3 h-3 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      readOnly
                      placeholder="Search in Modules... (⌘K)"
                      className="w-full bg-slate-900/80 border border-slate-700/70 rounded pl-6 pr-2 py-0.5 text-[9.5px] text-slate-300 placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Right: Status & Profile (Zylker Tech) */}
                <div className="flex items-center gap-2 pl-12">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[9.5px] font-semibold border border-emerald-500/30">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Live
                  </span>
                  <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 relative">
                    <Bell className="w-2.5 h-2.5" />
                    <span className="w-1 h-1 rounded-full bg-rose-500 absolute top-0.5 right-0.5" />
                  </div>
                  <div className="flex items-center gap-1 pl-1">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#006fc9] to-[#005fae] flex items-center justify-center text-white font-bold text-[9px]">
                      ZT
                    </div>
                    <span className="text-[10px] font-medium text-slate-300">Zee Tech</span>
                  </div>
                </div>
              </div>

              {/* Subheader: Business Overview & Date Filter */}
              <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200/80 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                  <span>Business Overview</span>
                  <span className="text-slate-300">/</span>
                  <span className="text-[#006fc9] font-medium">Dashboard</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveRange((prev) => (prev === "This Year" ? "This Quarter" : "This Year"))}
                    className="inline-flex items-center gap-1 bg-white hover:bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5 text-slate-600 text-[9.5px] font-medium cursor-pointer transition-colors"
                  >
                    <Calendar className="w-2.5 h-2.5 text-slate-400" />
                    <span>{activeRange}</span>
                    <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-2.5 bg-[#FAFBFD] flex-1 flex flex-col justify-between overflow-hidden">
                
                {/* Top Section: Net Profit/Loss (with Screenshot 2 Chart) + Performance Indicators */}
                <div className="grid grid-cols-5 gap-2 flex-1 min-h-0 mb-1.5">
                  
                  {/* Left (col-span-3): Net Profit/Loss Card with Authentic Zoho Graph (media_1789035844010.png) */}
                  <div className="col-span-3 bg-white p-2 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between overflow-hidden">
                    
                    {/* Header: Net Profit/Loss + Amount + Badge + Range */}
                    <div className="flex justify-between items-start mb-0.5">
                      <div>
                        <span className="text-[8.5px] text-slate-500 font-medium block">Net Profit/Loss</span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[12.5px] font-bold text-slate-900 tracking-tight">₹ 60,12,147.75</span>
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-slate-100 text-[8px] text-slate-600 font-semibold">
                            <span className="text-[7px] text-sky-500 font-bold">▲</span> 15%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5 text-[8px] text-slate-400 font-medium bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
                        <span>This Year</span>
                        <ChevronDown className="w-2 h-2 text-slate-400" />
                      </div>
                    </div>

                    {/* Accurate Business Line Graph (Exact Replica of media_1789035844010.png) */}
                    <div className="w-full flex-1 relative flex items-center justify-center overflow-hidden min-h-[95px]">
                      <svg className="w-full h-full" viewBox="0 0 350 102" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="zohoChartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.22" />
                            <stop offset="65%" stopColor="#38BDF8" stopOpacity="0.06" />
                            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Y-Axis Grid Lines */}
                        <line x1="24" y1="11" x2="340" y2="11" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="2 2" />
                        <line x1="24" y1="29" x2="340" y2="29" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="2 2" />
                        <line x1="24" y1="47" x2="340" y2="47" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="2 2" />
                        <line x1="24" y1="65" x2="340" y2="65" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="2 2" />
                        <line x1="24" y1="83" x2="340" y2="83" stroke="#E2E8F0" strokeWidth="0.75" />

                        {/* Y-Axis Labels */}
                        <text x="20" y="14" textAnchor="end" fill="#94A3B8" fontSize="7.5" fontWeight="500">80L</text>
                        <text x="20" y="32" textAnchor="end" fill="#94A3B8" fontSize="7.5" fontWeight="500">60L</text>
                        <text x="20" y="50" textAnchor="end" fill="#94A3B8" fontSize="7.5" fontWeight="500">40L</text>
                        <text x="20" y="68" textAnchor="end" fill="#94A3B8" fontSize="7.5" fontWeight="500">20L</text>
                        <text x="20" y="86" textAnchor="end" fill="#94A3B8" fontSize="7.5" fontWeight="500">0</text>

                        {/* Area Fill Under Curve */}
                        <path
                          d="M 28 38 L 50 42 Q 55.8 43.4 61 38 L 80 18 Q 83.6 16.4 88 22 L 107 52 Q 111.5 56.9 116 52 L 135 34 Q 139.3 32.6 144 35 L 163 46 Q 167.1 48.8 171 44 L 191 19 Q 194.9 17.3 199 21 L 218 34 Q 222.7 36.2 227 39 L 246 53 Q 250.5 56.0 255 52 L 274 40 Q 278.4 38.0 283 35 L 302 21 Q 306.2 19.1 311 21 L 334 29 L 334 83 L 28 83 Z"
                          fill="url(#zohoChartGradient)"
                        />

                        {/* The Stroke Line */}
                        <path
                          d="M 28 38 L 50 42 Q 55.8 43.4 61 38 L 80 18 Q 83.6 16.4 88 22 L 107 52 Q 111.5 56.9 116 52 L 135 34 Q 139.3 32.6 144 35 L 163 46 Q 167.1 48.8 171 44 L 191 19 Q 194.9 17.3 199 21 L 218 34 Q 222.7 36.2 227 39 L 246 53 Q 250.5 56.0 255 52 L 274 40 Q 278.4 38.0 283 35 L 302 21 Q 306.2 19.1 311 21 L 334 29"
                          fill="none"
                          stroke="#38BDF8"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* X-Axis Month Labels */}
                        <text x="28" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">Jan</text>
                        <text x="55.8" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">Feb</text>
                        <text x="83.6" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">Mar</text>
                        <text x="111.5" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">Apr</text>
                        <text x="139.3" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">May</text>
                        <text x="167.1" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">Jun</text>
                        <text x="194.9" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">Jul</text>
                        <text x="222.7" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">Aug</text>
                        <text x="250.5" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">Sep</text>
                        <text x="278.4" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">Oct</text>
                        <text x="306.2" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">Nov</text>
                        <text x="334" y="97" textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontWeight="500">Dec</text>
                      </svg>
                    </div>

                  </div>

                  {/* Right (col-span-2): Performance Indicators Card */}
                  <div className="col-span-2 bg-white p-2 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between overflow-hidden">
                    <div className="text-[9px] font-bold text-slate-700 mb-1">Performance Indicators</div>
                    <div className="space-y-1 text-[8px] sm:text-[8.5px]">
                      <div className="flex justify-between text-slate-500 pb-0.5 border-b border-slate-100/70">
                        <span>Monthly Recurring:</span>
                        <strong className="text-slate-800 font-semibold">₹ 74K</strong>
                      </div>
                      <div className="flex justify-between text-slate-500 pb-0.5 border-b border-slate-100/70">
                        <span>Avg. Rev / Employee:</span>
                        <strong className="text-slate-800 font-semibold">₹ 25K</strong>
                      </div>
                      <div className="flex justify-between text-slate-500 pb-0.5 border-b border-slate-100/70">
                        <span>Low Stock Items:</span>
                        <strong className="text-slate-800 font-semibold">47</strong>
                      </div>
                      <div className="flex justify-between text-slate-500 pb-0.5 border-b border-slate-100/70">
                        <span>Day Payable Out (DPO):</span>
                        <strong className="text-slate-800 font-semibold">9 Days</strong>
                      </div>
                      <div className="flex justify-between text-slate-500 pb-0.5 border-b border-slate-100/70">
                        <span>Day Sales Outstanding:</span>
                        <strong className="text-slate-800 font-semibold">12 Days</strong>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Inventory Turn Over:</span>
                        <strong className="text-slate-800 font-semibold">6</strong>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom: Receivable & Payable Summary Bars */}
                <div className="grid grid-cols-2 gap-2 relative">
                  <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs">
                    <div className="flex justify-between text-[8.5px] mb-0.5">
                      <span className="font-bold text-slate-700">Receivable Summary</span>
                      <span className="text-slate-500">₹ 2,50,000.00</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-100 flex overflow-hidden">
                      <div className="w-[70%] bg-[#006fc9]" />
                      <div className="w-[30%] bg-amber-500" />
                    </div>
                    <div className="flex justify-between text-[7.5px] text-slate-500 mt-0.5">
                      <span>Current: ₹1.57L</span>
                      <span>Overdue: ₹92.5K</span>
                    </div>
                  </div>

                  <div className="bg-white p-1.5 rounded-lg border border-slate-200/90 shadow-2xs pr-8">
                    <div className="flex justify-between text-[8.5px] mb-0.5">
                      <span className="font-bold text-slate-700">Payable Summary</span>
                      <span className="text-slate-500">₹ 18,80,000.00</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-100 flex overflow-hidden">
                      <div className="w-[50%] bg-[#006fc9]" />
                      <div className="w-[20%] bg-sky-400" />
                      <div className="w-[30%] bg-purple-500" />
                    </div>
                    <div className="flex justify-between text-[7.5px] text-slate-500 mt-0.5">
                      <span>Bills: ₹8.5L</span>
                      <span>Payroll: ₹10.0L</span>
                    </div>
                  </div>

                 
                </div>

              </div>

            </div>

            {/* Black Bottom Chin with subtle MacBook Pro lettering */}
            <div className="w-full h-[14px] bg-[#0A0C10] flex items-center justify-center border-t border-slate-800/80">
              <span className="text-[7.5px] tracking-[0.22em] font-medium text-slate-400/80 font-sans uppercase">
               
              </span>
            </div>
          </div>

          {/* REALISTIC 3D PERSPECTIVE BASE DECK WITH FULL KEYBOARD & TRACKPAD (media_1789036508230.png) */}
          <div className="w-full relative z-20 -mt-0.5">
            <MacbookBaseDeck />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT SIDE: 2 Squarish Glassmorphic Cards (Hidden on Mobile)              */}
        {/* ========================================================================= */}
        <div
          className="hidden md:flex items-center gap-3 shrink-0 relative z-10"
          style={{
            transform: "perspective(1200px) rotateY(-15deg) rotateX(2deg)",
            transformOrigin: "left center",
          }}
        >
          {/* Card 3: Inventory Adjustment Reasons (SET 2 — Left Card) */}
          <div
            className="hero-card-emerge w-[215px] xl:w-[235px] h-[285px] xl:h-[295px] rounded-[22px] p-4.5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            style={
              {
                "--card-start-x": "-240px",
                "--card-delay": "680ms",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.74) 55%, rgba(255, 255, 255, 0.84) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1.5px solid rgba(255, 255, 255, 0.95)",
                boxShadow:
                  "0 20px 45px -15px rgba(15, 23, 42, 0.12), 0 0 20px rgba(255, 255, 255, 0.8) inset",
              } as CSSProperties
            }
          >
            <div>
              <span className="text-[13.5px] font-bold text-[#08142C] tracking-tight block mb-4">
                {HERO_CARDS_DATA.inventoryAdjustments.title}
              </span>

              {/* 4 Horizontal Progress Bar Rows */}
              <div className="space-y-3.5">
                {HERO_CARDS_DATA.inventoryAdjustments.reasons.map((item, rIdx) => (
                  <div key={rIdx}>
                    <div className="flex justify-between text-[11px] xl:text-[11.5px] font-bold text-slate-700 mb-1">
                      <span className="flex items-center gap-1.5 truncate">
                        <i className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                        <span className="truncate">{item.label}</span>
                      </span>
                      <strong className="text-[#08142C] font-extrabold ml-1 shrink-0">{item.percentage}</strong>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#E3EAF3] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: item.barWidth, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-2.5 border-t border-slate-200/80 text-[10.5px] flex items-center justify-between">
              <span className="text-slate-700 font-semibold">{HERO_CARDS_DATA.inventoryAdjustments.footer.label}</span>
              <span className="text-[#0D8A5E] font-extrabold">{HERO_CARDS_DATA.inventoryAdjustments.footer.status}</span>
            </div>
          </div>

          {/* Card 4: Inventory Overview (SET 2 — Right Card) */}
          <div
            className="hero-card-emerge w-[215px] xl:w-[235px] h-[285px] xl:h-[295px] rounded-[22px] p-4.5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            style={
              {
                "--card-start-x": "-465px",
                "--card-delay": "760ms",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.74) 55%, rgba(255, 255, 255, 0.84) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1.5px solid rgba(255, 255, 255, 0.95)",
                boxShadow:
                  "0 20px 45px -15px rgba(15, 23, 42, 0.12), 0 0 20px rgba(255, 255, 255, 0.8) inset",
              } as CSSProperties
            }
          >
            <div>
              <span className="text-[13.5px] font-bold text-[#08142C] tracking-tight block">
                {HERO_CARDS_DATA.inventoryOverview.title}
              </span>
              {/* Header Row: Left metric + Right mint pill badge */}
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-[22px] xl:text-[24px] font-extrabold text-[#08142C] tracking-tight leading-none">
                    {HERO_CARDS_DATA.inventoryOverview.totalValue}
                  </span>
                  <span className="text-[13px] font-bold text-slate-600">
                    {HERO_CARDS_DATA.inventoryOverview.unit}
                  </span>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-[#6FD8A8] bg-[#EEFCF6] text-[#0D9F6E] text-[10.5px] font-bold">
                  {HERO_CARDS_DATA.inventoryOverview.badge}
                </span>
              </div>
            </div>

            {/* 4-Segment Donut Chart with Elbow Callout Leader Lines */}
            <div className="relative w-full h-[145px] xl:h-[155px] mx-auto flex items-center justify-center my-auto">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 205 130">
                {/* Background Ring Track */}
                <circle cx="102" cy="65" r="32" stroke="#E2E8F0" strokeWidth="10" fill="none" opacity="0.6" />

                {/* Segment 1: In Stock (62.4%, #0074F8) */}
                <circle
                  cx="102"
                  cy="65"
                  r="32"
                  stroke="#0074F8"
                  strokeWidth="11"
                  fill="none"
                  strokeDasharray="125.46 201.06"
                  strokeDashoffset="0"
                  className="-rotate-90 origin-[102px_65px]"
                />

                {/* Segment 2: Low Stock (18.6%, #2B99FF) */}
                <circle
                  cx="102"
                  cy="65"
                  r="32"
                  stroke="#2B99FF"
                  strokeWidth="11"
                  fill="none"
                  strokeDasharray="37.4 201.06"
                  strokeDashoffset="-125.46"
                  className="-rotate-90 origin-[102px_65px]"
                />

                {/* Segment 3: Reorder Soon (11.2%, #67DCFF) */}
                <circle
                  cx="102"
                  cy="65"
                  r="32"
                  stroke="#67DCFF"
                  strokeWidth="11"
                  fill="none"
                  strokeDasharray="22.52 201.06"
                  strokeDashoffset="-162.86"
                  className="-rotate-90 origin-[102px_65px]"
                />

                {/* Segment 4: Out of Stock (7.8%, #004494) */}
                <circle
                  cx="102"
                  cy="65"
                  r="32"
                  stroke="#004494"
                  strokeWidth="11"
                  fill="none"
                  strokeDasharray="15.68 201.06"
                  strokeDashoffset="-185.38"
                  className="-rotate-90 origin-[102px_65px]"
                />

                {/* Callout 1: In Stock (Right callout) */}
                <circle cx="134" cy="65" r="2" fill="#FFFFFF" stroke="#0074F8" strokeWidth="1.5" />
                <polyline points="134,65 146,65 154,65" fill="none" stroke="#64748B" strokeWidth="1" />
                <text x="157" y="62" fill="#334155" fontSize="8" fontWeight="700">In Stock</text>
                <text x="157" y="72" fill="#0074F8" fontSize="8.5" fontWeight="800">62.4%</text>

                {/* Callout 2: Low Stock (Bottom-left callout) */}
                <circle cx="78" cy="88" r="2" fill="#FFFFFF" stroke="#2B99FF" strokeWidth="1.5" />
                <polyline points="78,88 64,104 46,104" fill="none" stroke="#64748B" strokeWidth="1" />
                <text x="43" y="101" fill="#334155" fontSize="8" fontWeight="700" textAnchor="end">Low Stock</text>
                <text x="43" y="111" fill="#2B99FF" fontSize="8.5" fontWeight="800" textAnchor="end">18.6%</text>

                {/* Callout 3: Reorder Soon (Mid-left callout) */}
                <circle cx="70" cy="62" r="2" fill="#FFFFFF" stroke="#67DCFF" strokeWidth="1.5" />
                <polyline points="70,62 58,62 42,62" fill="none" stroke="#64748B" strokeWidth="1" />
                <text x="39" y="59" fill="#334155" fontSize="8" fontWeight="700" textAnchor="end">Reorder</text>
                <text x="39" y="69" fill="#0284C7" fontSize="8.5" fontWeight="800" textAnchor="end">11.2%</text>

                {/* Callout 4: Out of Stock (Top-left callout) */}
                <circle cx="88" cy="36" r="2" fill="#FFFFFF" stroke="#004494" strokeWidth="1.5" />
                <polyline points="88,36 78,22 52,22" fill="none" stroke="#64748B" strokeWidth="1" />
                <text x="49" y="19" fill="#334155" fontSize="8" fontWeight="700" textAnchor="end">Out of Stock</text>
                <text x="49" y="29" fill="#004494" fontSize="8.5" fontWeight="800" textAnchor="end">7.8%</text>
              </svg>
            </div>

            {/* Bottom Footer */}
            <div className="pt-2.5 border-t border-slate-200/80 text-[10.5px] flex items-center justify-between">
              <span className="text-slate-700 font-semibold">{HERO_CARDS_DATA.inventoryOverview.footer.label}</span>
              <span className="text-[#0D8A5E] font-extrabold">{HERO_CARDS_DATA.inventoryOverview.footer.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}