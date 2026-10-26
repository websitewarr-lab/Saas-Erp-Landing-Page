"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PopupCtaButton } from "./popup-cta";
import {
  Target,
  Boxes,
  ShoppingCart,
  ReceiptText,
  Factory,
  BarChart3,
  UsersRound,
  FolderKanban,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Laptop,
  Megaphone,
  Newspaper,
  Truck,
} from "lucide-react";

export const headerModules = [
  { name: "CRM", desc: "Pipeline, leads & accounts", href: "/modules/crm", icon: Target, color: "text-violet-600 bg-violet-50" },
  { name: "Sales & Order Management", desc: "Quotations & order fulfillment", href: "/modules/sales", icon: ShoppingCart, color: "text-emerald-600 bg-emerald-50" },
  { name: "Purchase & Procurement", desc: "RFQs, PO approvals & vendors", href: "/modules/purchase", icon: ReceiptText, color: "text-[#006fc9] bg-[#006fc9]/10" },
  { name: "Inventory Management", desc: "Warehouse & stock control", href: "/modules/inventory", icon: Boxes, color: "text-amber-600 bg-amber-50" },
  { name: "Production Management", desc: "Manufacturing, BOM & MRP", href: "/modules/production", icon: Factory, color: "text-purple-600 bg-purple-50" },
  { name: "Accounting & Finance", desc: "Ledger, GL & financial reports", href: "/modules/accounting", icon: BarChart3, color: "text-teal-600 bg-teal-50" },
  { name: "HRMS & Payroll", desc: "Workforce, attendance & payroll", href: "/modules/hrms", icon: UsersRound, color: "text-rose-600 bg-rose-50" },
  { name: "Project Management", desc: "Projects & billable timesheets", href: "/modules/project", icon: FolderKanban, color: "text-indigo-600 bg-indigo-50" },
];

export const headerIndustries = [
  { name: "Software & Technology", desc: "Cloud SaaS, tech & digital platforms", href: "/#industries", icon: Laptop, color: "text-[#006fc9] bg-[#006fc9]/10" },
  { name: "IT & Professional Services", desc: "Project billing & workforce visibility", href: "/#industries", icon: UsersRound, color: "text-sky-600 bg-sky-50" },
  { name: "Wholesale Distribution", desc: "Warehousing, inventory & supply chain", href: "/#industries", icon: Boxes, color: "text-emerald-600 bg-emerald-50" },
  { name: "Advertising & Marketing", desc: "Agencies, campaign billing & creative", href: "/#industries", icon: Megaphone, color: "text-purple-600 bg-purple-50" },
  { name: "Media & Publishing", desc: "Subscriptions & revenue recognition", href: "/#industries", icon: Newspaper, color: "text-rose-600 bg-rose-50" },
  { name: "Retail & E-Commerce", desc: "Omnichannel inventory & commerce", href: "/#industries", icon: ShoppingCart, color: "text-cyan-600 bg-cyan-50" },
  { name: "Logistics & Supply Chain", desc: "Fleet management & shipment tracking", href: "/#industries", icon: Truck, color: "text-amber-600 bg-amber-50" },
  { name: "Discrete & Process Manufacturing", desc: "Shop floor BOM, MRP & production", href: "/#industries", icon: Factory, color: "text-slate-700 bg-slate-100" },
];

export function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/images/logo/mossierplogo.webp"
        alt="Mossie ERP Logo"
        width={compact ? 42 : 54}
        height={compact ? 28 : 36}
        priority
        className={compact ? "h-7 w-auto object-contain" : "h-9 w-auto object-contain"}
      />
      <span className="font-black tracking-tight text-slate-900 text-xl leading-none">
        Mossie <span className="text-[#006fc9]">ERP</span>
      </span>
    </div>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "site-header site-header-scrolled" : "site-header"}>
      <div className="container nav-inner">
        <Link className="brand flex items-center py-1" href="/" onClick={closeMenu} aria-label="Mossie ERP home">
          <LogoMark />
        </Link>
        <nav className={menuOpen ? "main-nav main-nav-open" : "main-nav"} aria-label="Primary navigation">
          <Link href="/#solutions" onClick={closeMenu}>
            Solutions
          </Link>

          {/* Modules Dropdown Menu */}
          <div className="relative group py-2">
            <Link
              href="/modules"
              onClick={closeMenu}
              aria-haspopup="true"
              className="inline-flex items-center gap-1.5 transition-colors cursor-pointer group-hover:text-[#006fc9]"
            >
              <span>Modules</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-200" />
            </Link>

            {/* Mega Dropdown Panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50 min-w-[340px] sm:min-w-[460px] pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
              <div className="bg-white/98 backdrop-blur-xl rounded-[20px] border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.14)] p-4">
                <div className="px-2.5 py-1.5 mb-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    Enterprise Modules
                  </span>
                  <Link
                    href="/modules"
                    onClick={closeMenu}
                    className="text-[11px] text-[#006fc9] font-bold bg-[#006fc9]/10 hover:bg-[#006fc9]/15 px-3 py-1 rounded-full border border-[#006fc9]/20 transition-colors flex items-center gap-1"
                  >
                    <span>View All 8 Apps</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {headerModules.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-start gap-3 p-2.5 rounded-[12px] hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#006fc9] transition-all duration-150 group/item"
                      >
                        <div
                          className={`p-2 rounded-[10px] ${item.color} transition-transform group-hover/item:scale-105 shrink-0 shadow-2xs`}
                        >
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#006fc9] transition-colors line-clamp-1">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Industries Dropdown Menu */}
          <div className="relative group py-2">
            <Link
              href="/#industries"
              onClick={closeMenu}
              aria-haspopup="true"
              className="inline-flex items-center gap-1.5 transition-colors cursor-pointer group-hover:text-[#006fc9]"
            >
              <span>Industries</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-200" />
            </Link>

            {/* Mega Dropdown Panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50 min-w-[340px] sm:min-w-[460px] pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
              <div className="bg-white/98 backdrop-blur-xl rounded-[20px] border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.14)] p-4">
                <div className="px-2.5 py-1.5 mb-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    Industry we serve
                  </span>
                  <Link
                    href="/#industries"
                    onClick={closeMenu}
                    className="text-[11px] text-[#006fc9] font-bold bg-[#006fc9]/10 hover:bg-[#006fc9]/15 px-3 py-1 rounded-full border border-[#006fc9]/20 transition-colors flex items-center gap-1"
                  >
                    <span>View All Industries</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {headerIndustries.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-start gap-3 p-2.5 rounded-[12px] hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#006fc9] transition-all duration-150 group/item"
                      >
                        <div
                          className={`p-2 rounded-[10px] ${item.color} transition-transform group-hover/item:scale-105 shrink-0 shadow-2xs`}
                        >
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#006fc9] transition-colors line-clamp-1">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* AI Features Button with Hover Gradient Edge Light Animation (No Bottom Line Animation) */}
          <div className="flex items-center">
            <Link
              href="/#features"
              onClick={closeMenu}
              style={{ padding: "2px", background: "transparent", border: "none" }}
              className="group relative inline-flex items-center justify-center rounded-full overflow-hidden shadow-[0_4px_14px_rgba(33,142,242,0.28)] hover:shadow-[0_6px_22px_rgba(56,189,248,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 no-underline after:!hidden before:!hidden after:!content-none before:!content-none after:!w-0 after:!h-0"
            >
              {/* Animated Gradient Edge Light (runs on hover) */}
              <span
                aria-hidden="true"
                style={{ animationDuration: "2s" }}
                className="pointer-events-none absolute inset-[-180%] bg-[conic-gradient(from_0deg,transparent_0deg,#38bdf8_45deg,#ffffff_85deg,#60a5fa_120deg,transparent_180deg,#38bdf8_225deg,#ffffff_265deg,#60a5fa_300deg,transparent_360deg)] opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-300"
              />

              {/* Lighter, Brighter Blue Inner Pill */}
              <span className="relative z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-b from-[#52b9ff] via-[#218ef2] to-[#1179d8] group-hover:from-[#62c0ff] group-hover:via-[#2c97f7] group-hover:to-[#1681e2] !text-white font-semibold text-[13.5px] leading-none tracking-tight shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.55)] transition-colors duration-200">
                <svg
                  className="w-4 h-4 shrink-0 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.12)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.5 2.5C7.9 5.3 9.2 6.6 12 7C9.2 7.4 7.9 8.7 7.5 11.5C7.1 8.7 5.8 7.4 3 7C5.8 6.6 7.1 5.3 7.5 2.5Z" />
                  <path d="M15.5 8.5C16.1 12.5 18 14.4 22 15C18 15.6 16.1 17.5 15.5 21.5C14.9 17.5 13 15.6 9 15C13 14.4 14.9 12.5 15.5 8.5Z" />
                </svg>
                <span className="!text-white">AI Features</span>
              </span>
            </Link>
          </div>
        </nav>
        <div className="nav-actions">
          <PopupCtaButton className="button button-primary button-small" onClick={closeMenu}>
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </PopupCtaButton>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}