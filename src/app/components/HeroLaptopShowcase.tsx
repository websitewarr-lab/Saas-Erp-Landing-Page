"use client";

import React, { useState } from "react";
import {
  Search,
  Bell,
  Play,
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
            <stop offset="0%" stopColor="#8A8E98" />
            <stop offset="30%" stopColor="#A2A6B2" />
            <stop offset="70%" stopColor="#828690" />
            <stop offset="100%" stopColor="#6E717B" />
          </linearGradient>

          <linearGradient id="sleekFrontLipGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#42454E" />
            <stop offset="50%" stopColor="#282A31" />
            <stop offset="100%" stopColor="#141519" />
          </linearGradient>

          <linearGradient id="sleekKeyCapGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2B2D35" />
            <stop offset="40%" stopColor="#1E2026" />
            <stop offset="100%" stopColor="#121317" />
          </linearGradient>

          <radialGradient id="sleekBaseShadowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.55" />
            <stop offset="65%" stopColor="#000000" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Ground Contact Shadow */}
        <ellipse cx="270" cy="42" rx="278" ry="3" fill="url(#sleekBaseShadowGrad)" />

        {/* 2. Front Lip Vertical Face Thickness */}
        <path
          d="M -7 35 L 547 35 Q 548 35 548 37 L 547 39 Q 545 41.5 542 41.5 L -2 41.5 Q -5 41.5 -7 39 L -8 37 Q -8 35 -7 35 Z"
          fill="url(#sleekFrontLipGrad)"
        />

        {/* 3. Base Deck Metallic Surface (Flawless Edge Match with Lid at Hinge, flaring outward in 3D perspective) */}
        <path
          d="M 0 0 L 540 0 L 547 34.5 Q 547 35.5 545 35.5 L -5 35.5 Q -7 35.5 -7 34.5 L 0 0 Z"
          fill="url(#sleekDeckGrad)"
          stroke="#52555E"
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
        <rect x="195" y="27" width="150" height="6.5" rx="1.5" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />
        <rect x="196" y="27.5" width="148" height="5.5" rx="1" fill="rgba(0,0,0,0.06)" />

        {/* Front Lip Highlight Line */}
        <line x1="-7" y1="35" x2="547" y2="35" stroke="rgba(255,255,255,0.7)" strokeWidth="0.7" />

        {/* Centered Thumb Scoop Notch */}
        <path d="M 245 35 Q 248 37.5 254 37.5 L 286 37.5 Q 292 37.5 295 35 Z" fill="#141519" stroke="#2A2C34" strokeWidth="0.4" />
      </svg>
    </div>
  );
}

export default function HeroLaptopShowcase() {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [activeRange, setActiveRange] = useState("This Year");

  return (
    <div className="relative w-full max-w-[1440px] mx-auto pt-2 pb-6 sm:pb-8 select-none overflow-hidden md:overflow-visible">
      {/* 5-Element Panoramic Horizon: [Card 1] [Card 2] [CENTER LAPTOP] [Card 3] [Card 4] */}
      <div className="flex items-center justify-center w-full gap-3 xl:gap-4 px-2">
        
        {/* ========================================================================= */}
        {/* LEFT SIDE: 2 Squarish Glassmorphic Cards (Hidden on Mobile)               */}
        {/* ========================================================================= */}
        <div
          className="hidden md:flex items-center gap-3 shrink-0"
          style={{
            transform: "perspective(1200px) rotateY(15deg) rotateX(2deg)",
            transformOrigin: "right center",
          }}
        >
          {/* Card 1: Spend by travel mode (Exact squarish glassmorphism from media_1789034196698.png) */}
          <div 
            className="w-[215px] xl:w-[235px] h-[285px] xl:h-[295px] rounded-[22px] p-4.5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.38) 55%, rgba(255, 255, 255, 0.48) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1.5px solid rgba(255, 255, 255, 0.85)",
              boxShadow: "0 20px 45px -15px rgba(2, 132, 199, 0.16), 0 0 18px rgba(255, 255, 255, 0.5) inset",
            }}
          >
            {/* Card Header */}
            <div>
              <span className="text-[13.5px] font-medium italic text-slate-500 tracking-wide block">
                Spend by travel mode
              </span>
            </div>

            {/* Donut Chart with precise pointer lines from media_1789034196698.png */}
            <div className="relative w-[180px] h-[175px] mx-auto flex items-center justify-center my-auto">
              
              {/* Floating Labels with pointer pins */}
              <span className="absolute top-1 left-2 text-[11px] font-medium italic text-slate-500">Flight</span>
              <span className="absolute top-5 right-2 text-[11px] font-medium italic text-slate-500">Hotel</span>
              <span className="absolute bottom-5 right-2 text-[11px] font-medium italic text-slate-500">Train</span>
              <span className="absolute -bottom-1 left-[38%] text-[11px] font-medium italic text-slate-500">Bus</span>
              <span className="absolute top-[44%] left-0 text-[11px] font-medium italic text-slate-500">Car</span>

              <svg className="w-full h-full overflow-visible" viewBox="0 0 160 160">
                {/* Background Ring Track */}
                <circle cx="80" cy="80" r="42" stroke="#E2E8F0" strokeWidth="9" fill="none" opacity="0.4" />
                
                {/* Segment 1: Flight (Dark Navy Blue - top left) */}
                <circle
                  cx="80"
                  cy="80"
                  r="42"
                  stroke="#1D4ED8"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="263.89"
                  strokeDashoffset="185"
                  strokeLinecap="round"
                  className="-rotate-90 origin-center"
                />

                {/* Segment 2: Hotel (Royal Blue - top right) */}
                <circle
                  cx="80"
                  cy="80"
                  r="42"
                  stroke="#2563EB"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="263.89"
                  strokeDashoffset="205"
                  strokeLinecap="round"
                  className="rotate-0 origin-center"
                />

                {/* Segment 3: Train (Sky Blue - bottom right) */}
                <circle
                  cx="80"
                  cy="80"
                  r="42"
                  stroke="#38BDF8"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="263.89"
                  strokeDashoffset="218"
                  strokeLinecap="round"
                  className="rotate-90 origin-center"
                />

                {/* Segment 4: Bus (Cyan - bottom) */}
                <circle
                  cx="80"
                  cy="80"
                  r="42"
                  stroke="#7DD3FC"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="263.89"
                  strokeDashoffset="238"
                  strokeLinecap="round"
                  className="rotate-[145deg] origin-center"
                />

                {/* Hairline Pointer Lines & Circular Nodes (exact Zoho detail) */}
                {/* Flight pin */}
                <circle cx="68" cy="40" r="2" fill="#FFFFFF" stroke="#1D4ED8" strokeWidth="1.5" />
                <line x1="68" y1="40" x2="48" y2="24" stroke="#94A3B8" strokeWidth="0.85" />

                {/* Hotel pin */}
                <circle cx="110" cy="50" r="2" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
                <line x1="110" y1="50" x2="128" y2="40" stroke="#94A3B8" strokeWidth="0.85" />

                {/* Train pin */}
                <circle cx="106" cy="116" r="2" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.5" />
                <line x1="106" y1="116" x2="126" y2="126" stroke="#94A3B8" strokeWidth="0.85" />

                {/* Bus pin */}
                <circle cx="70" cy="122" r="2" fill="#FFFFFF" stroke="#7DD3FC" strokeWidth="1.5" />
                <line x1="70" y1="122" x2="68" y2="140" stroke="#94A3B8" strokeWidth="0.85" />

                {/* Car pin */}
                <circle cx="38" cy="78" r="2" fill="#FFFFFF" stroke="#1D4ED8" strokeWidth="1.5" />
                <line x1="38" y1="78" x2="22" y2="82" stroke="#94A3B8" strokeWidth="0.85" />
              </svg>
            </div>
          </div>

          {/* Card 2: Net Revenue (Exact squarish glassmorphism & wave from media_1789034196698.png) */}
          <div 
            className="w-[215px] xl:w-[235px] h-[285px] xl:h-[295px] rounded-[22px] p-4.5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.38) 55%, rgba(255, 255, 255, 0.48) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1.5px solid rgba(255, 255, 255, 0.85)",
              boxShadow: "0 20px 45px -15px rgba(2, 132, 199, 0.16), 0 0 18px rgba(255, 255, 255, 0.5) inset",
            }}
          >
            {/* Card Header & Numbers */}
            <div className="relative z-10">
              <span className="text-[13.5px] font-medium italic text-slate-500 tracking-wide block">
                Net Revenue
              </span>
              <div className="text-[25px] font-bold text-slate-800 tracking-tight mt-1">
                ₹39,00,000
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-emerald-500/80 text-emerald-600 text-[11px] font-semibold mt-1.5 bg-emerald-50/20">
                <span>6.23 ↑</span>
                <span className="text-slate-500 font-normal text-[10px]">Year on year</span>
              </div>
            </div>

            {/* Frosted Wave Hill from media_1789034196698.png */}
            <div className="absolute inset-x-0 bottom-0 h-44 overflow-hidden pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 240 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="zohoFrostedHill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.82" />
                    <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 150 L 0 120 Q 35 110 65 92 T 120 78 T 175 42 T 240 32 L 240 150 Z"
                  fill="url(#zohoFrostedHill)"
                />
                <path
                  d="M 0 120 Q 35 110 65 92 T 120 78 T 175 42 T 240 32"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.95)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTER: REALISTIC MACBOOK PRO SPACE BLACK (Front View from Reference)     */}
        {/* ========================================================================= */}
        <div className="w-[510px] xl:w-[540px] shrink-0 flex flex-col items-center z-10 select-none scale-[0.58] xs:scale-[0.7] sm:scale-[0.85] md:scale-100 origin-center -my-20 xs:-my-14 sm:-my-6 md:my-0">
          
          {/* LAPTOP SCREEN LID (Precision Apple Pro Display enclosure) */}
          <div className="w-full bg-[#18191E] rounded-t-[14px] sm:rounded-t-[16px] p-[4px] sm:p-[5px] pb-0 shadow-[0_22px_45px_-12px_rgba(0,0,0,0.55)] border-t border-x border-[#383B44]/80 relative">
            
            {/* Top Chamfered Metallic Edge Light */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#555964]/80 to-transparent rounded-t-[14px]" />

            {/* SCREEN DISPLAY - Height ~295px matching flanking squarish side cards */}
            <div className="w-full h-[295px] bg-[#0A0C10] rounded-t-[7px] overflow-hidden relative flex flex-col shadow-inner select-none">
              
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
                    <img
                      src="/images/logo/Wlogo.webp"
                      alt="MossiERP Logo"
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
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-[9px]">
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
                  <span className="text-blue-600 font-medium">Dashboard</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveRange((prev) => (prev === "This Year" ? "This Quarter" : "This Year"))}
                    className="inline-flex items-center gap-1 bg-white hover:bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-slate-600 text-[9.5px] font-medium cursor-pointer transition-colors"
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
                      <div className="w-[70%] bg-blue-600" />
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
                      <div className="w-[50%] bg-blue-600" />
                      <div className="w-[20%] bg-sky-400" />
                      <div className="w-[30%] bg-purple-500" />
                    </div>
                    <div className="flex justify-between text-[7.5px] text-slate-500 mt-0.5">
                      <span>Bills: ₹8.5L</span>
                      <span>Payroll: ₹10.0L</span>
                    </div>
                  </div>

                  {/* Round Black Play Demo Button */}
                  <button
                    type="button"
                    onClick={() => setIsPlayingDemo(!isPlayingDemo)}
                    className="absolute right-1 -bottom-1 w-6.5 h-6.5 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-md hover:scale-105 hover:bg-blue-600 transition-all cursor-pointer z-20 group"
                    aria-label="Play interactive tour"
                  >
                    <Play className="w-2.5 h-2.5 ml-0.5 fill-current text-white" />
                  </button>
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
          className="hidden md:flex items-center gap-3 shrink-0"
          style={{
            transform: "perspective(1200px) rotateY(-15deg) rotateX(2deg)",
            transformOrigin: "left center",
          }}
        >
          {/* Card 3: Inventory Adjustment Reasons (Squarish glassmorphism) */}
          <div 
            className="w-[215px] xl:w-[235px] h-[285px] xl:h-[295px] rounded-[22px] p-4.5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.38) 55%, rgba(255, 255, 255, 0.48) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1.5px solid rgba(255, 255, 255, 0.85)",
              boxShadow: "0 20px 45px -15px rgba(2, 132, 199, 0.16), 0 0 18px rgba(255, 255, 255, 0.5) inset",
            }}
          >
            <div>
              <span className="text-[13.5px] font-medium italic text-slate-500 tracking-wide block mb-3">
                Inventory Adjustment Reasons
              </span>

              {/* Progress overview bar from Screenshot */}
              <div className="w-full h-2 rounded-full bg-slate-100 flex overflow-hidden mb-4 border border-white/60">
                <div className="w-[25.5%] bg-blue-600 rounded-l-full" />
                <div className="w-[74.5%] bg-sky-200/80 rounded-r-full" />
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-1">
                    <span className="flex items-center gap-1.5"><i className="w-2 h-2 rounded-full bg-blue-600" /> Expired Goods</span>
                    <strong className="text-slate-800 font-bold">25.5%</strong>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full w-[25.5%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-1">
                    <span className="flex items-center gap-1.5"><i className="w-2 h-2 rounded-full bg-sky-400" /> Stock Variance</span>
                    <strong className="text-slate-800 font-bold">19.4%</strong>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-sky-400 rounded-full w-[19.4%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-1">
                    <span className="flex items-center gap-1.5"><i className="w-2 h-2 rounded-full bg-indigo-500" /> Internal Usage</span>
                    <strong className="text-slate-800 font-bold">15.2%</strong>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full w-[15.2%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-1">
                    <span className="flex items-center gap-1.5"><i className="w-2 h-2 rounded-full bg-teal-400" /> Revaluation</span>
                    <strong className="text-slate-800 font-bold">14.5%</strong>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-teal-400 rounded-full w-[14.5%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/60 text-[10px] text-slate-400 flex items-center justify-between">
              <span>Overall Stock Health</span>
              <span className="text-emerald-600 font-bold">98.2% Optimal</span>
            </div>
          </div>

          {/* Card 4: AR Aging Summary (Squarish glassmorphism & 4 pillars) */}
          <div 
            className="w-[215px] xl:w-[235px] h-[285px] xl:h-[295px] rounded-[22px] p-4.5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.38) 55%, rgba(255, 255, 255, 0.48) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1.5px solid rgba(255, 255, 255, 0.85)",
              boxShadow: "0 20px 45px -15px rgba(2, 132, 199, 0.16), 0 0 18px rgba(255, 255, 255, 0.5) inset",
            }}
          >
            <div>
              <span className="text-[13.5px] font-medium italic text-slate-500 tracking-wide block">
                AR Aging Summary
              </span>
              <span className="text-[10.5px] text-slate-400 font-normal block mt-0.5">Total Receivables</span>
              <div className="text-[24px] font-bold text-slate-800 tracking-tight mt-0.5">
                ₹45,000.00
              </div>
            </div>

            {/* Vertical Frosted Pillars from Reference Image */}
            <div className="h-32 flex items-end justify-between gap-3 pt-3 px-1.5 pb-1">
              <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div 
                  className="w-full rounded-t-sm h-[75%] border-t border-x border-white/80"
                  style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(56, 189, 248, 0.45) 100%)",
                  }}
                />
                <span className="text-[9.5px] text-slate-400 font-medium italic">Current</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div 
                  className="w-full rounded-t-sm h-[50%] border-t border-x border-white/80"
                  style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(56, 189, 248, 0.35) 100%)",
                  }}
                />
                <span className="text-[9.5px] text-slate-400 font-medium italic">1-15d</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div 
                  className="w-full rounded-t-sm h-[32%] border-t border-x border-white/80"
                  style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(56, 189, 248, 0.25) 100%)",
                  }}
                />
                <span className="text-[9.5px] text-slate-400 font-medium italic">16-30d</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div 
                  className="w-full rounded-t-sm h-[18%] border-t border-x border-white/80"
                  style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(56, 189, 248, 0.2) 100%)",
                  }}
                />
                <span className="text-[9.5px] text-slate-400 font-medium italic">30+d</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/60 text-[10px] text-slate-400 flex items-center justify-between">
              <span>Collection Interval</span>
              <span className="text-blue-600 font-bold">12 Days</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}