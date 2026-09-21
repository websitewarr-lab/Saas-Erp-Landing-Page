"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function SiteFooter() {
  const modulesLinks = [
    { label: "All Modules Directory", href: "/modules" },
    { label: "CRM Module", href: "/modules/crm" },
    { label: "Sales & Orders", href: "/modules/sales" },
    { label: "Purchase & Vendor", href: "/modules/purchase" },
    { label: "Inventory Control", href: "/modules/inventory" },
    { label: "Production & Manufacturing", href: "/modules/production" },
    { label: "Accounting & Finance", href: "/modules/accounting" },
    { label: "HRMS & Payroll", href: "/modules/hrms" },
    { label: "Project Management", href: "/modules/project" },
  ];

  const companyLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Cancellation Policy", href: "/cancellation-policy" },
    { label: "Documentation", href: "/#faq" },
    { label: "Customer Stories", href: "/#solutions" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#006fc9] text-white selection:bg-white selection:text-[#006fc9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block py-1" aria-label="MossiERP home">
              <img
                src="/images/logo/WARR LOGO.webp"
                alt="MossiERP"
                className="h-10 w-auto object-contain brightness-0 invert max-w-[240px]"
              />
            </Link>
            <p className="text-sm sm:text-base leading-relaxed text-white/95 max-w-sm">
              Welcome to MossiERP, your number one source for all your enterprise ERP and automation needs. We&apos;re dedicated to providing you the very best of calm, connected operational software with an emphasis on meeting deadlines, satisfactory service, and 24x7 support.
            </p>
            <div className="flex items-center gap-4 text-white pt-2">
              {/* LinkedIn */}
              <Link href="/#contact" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                </svg>
              </Link>
              {/* Facebook */}
              <Link href="/#contact" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.62.76-1.62 1.54V12h2.73l-.44 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8Z" />
                </svg>
              </Link>
              {/* Instagram */}
              <Link href="/#contact" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </Link>
              {/* WhatsApp */}
              <Link href="/#contact" className="hover:opacity-80 transition-opacity" aria-label="WhatsApp">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2Zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.45 0-2.87-.38-4.12-1.12l-.3-.18-3.07.81.82-2.99-.19-.31a8.17 8.17 0 0 1-1.25-4.39c0-4.54 3.7-8.24 8.24-8.24Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Modules Hub Column (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">Modules Hub</h3>
              <div className="flex items-center gap-1.5 mt-2 mb-4">
                <span className="w-12 h-[2.5px] bg-white rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </div>
            </div>
            <ul className="space-y-2.5 text-sm sm:text-base font-normal">
              {modulesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline underline-offset-4 decoration-white/60 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="text-white/90 font-bold">&raquo;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">Short Links</h3>
              <div className="flex items-center gap-1.5 mt-2 mb-4">
                <span className="w-12 h-[2.5px] bg-white rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </div>
            </div>
            <ul className="space-y-2.5 text-sm sm:text-base font-normal">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline underline-offset-4 decoration-white/60 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="text-white/90 font-bold">&raquo;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Column (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">Get in touch!</h3>
              <div className="flex items-center gap-1.5 mt-2 mb-4">
                <span className="w-12 h-[2.5px] bg-white rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </div>
            </div>

            <div className="space-y-5 text-sm">
              {/* Address */}
              <div className="space-y-1">
                <p className="text-xs text-white/80 font-medium">Office Location</p>
                <div className="flex items-start gap-3 pt-1">
                  <div className="w-9 h-9 rounded-lg bg-white text-[#006fc9] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <MapPin className="w-5 h-5 fill-[#006fc9] text-white" />
                  </div>
                  <p className="text-sm font-semibold text-white leading-snug">
                    312, Pentax House, South Hill Avenue, South Harrow, Middlesex, HA2 0DU, United Kingdom
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <p className="text-xs text-white/80 font-medium">Phone Number</p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-9 h-9 rounded-lg bg-white text-[#006fc9] flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 fill-[#006fc9] text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white leading-tight">
                    <p>+91 9257874994</p>
                    <p>+44 7789161193</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <p className="text-xs text-white/80 font-medium">Email address</p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-9 h-9 rounded-lg bg-white text-[#006fc9] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-[#006fc9]" />
                  </div>
                  <p className="text-sm font-semibold text-white">
                    info@mossierp.com
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/95 font-medium">
          <p>Copyright &copy; 2026 MossiERP. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
            <Link href="/cancellation-policy" className="hover:underline">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
