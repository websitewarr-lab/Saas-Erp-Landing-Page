"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

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
    { label: "Documentation & FAQ", href: "/#faq" },
    { label: "Industry Solutions", href: "/#industries" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#006fc9] text-white selection:bg-white selection:text-[#006fc9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 py-1" aria-label="Mossie ERP home">
              <Image
                src="/images/logo/mossierplogo.webp"
                alt="Mossie ERP Logo"
                width={54}
                height={36}
                loading="lazy"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
              <span className="font-black tracking-tight text-white text-xl leading-none">
                Mossie <span className="text-white/80">ERP</span>
              </span>
            </Link>
            <p className="text-sm sm:text-base leading-relaxed text-white/95 max-w-sm">
              Welcome to Mossie ERP, your number one source for all your enterprise ERP and automation needs. We&apos;re dedicated to providing you the very best of calm, connected operational software with an emphasis on meeting deadlines, satisfactory service, and 24x7 support.
            </p>
            <div className="flex items-center gap-5 text-white pt-2">
              {/* LinkedIn */}
              {/* <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a> */}
              {/* Facebook */}
              {/* <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.704 0-1.233.125-1.57.373-.34.249-.51.696-.51 1.341v2.266h4.295l-.657 3.667h-3.638v7.98H9.101Z" />
                </svg>
              </a> */}
              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919257874994"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Two-Column Links Grid on Mobile/Tablet; Unwraps with lg:contents on Desktop */}
          <div className="grid grid-cols-[1.12fr_0.88fr] sm:grid-cols-2 gap-5 sm:gap-8 md:col-span-1 lg:contents">
            {/* Modules Hub Column (Span 3 on Desktop) */}
            <div className="lg:col-span-3 space-y-3.5 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">Modules Hub</h3>
                <div className="flex items-center gap-1.5 mt-2 mb-3 sm:mb-4">
                  <span className="w-10 sm:w-12 h-[2.5px] bg-white rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-sm font-normal">
                {modulesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:underline underline-offset-4 decoration-white/60 transition-all inline-flex items-center gap-1.5 group leading-snug"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:text-white shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links Column (Span 2 on Desktop) */}
            <div className="lg:col-span-2 space-y-3.5 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">Short Links</h3>
                <div className="flex items-center gap-1.5 mt-2 mb-3 sm:mb-4">
                  <span className="w-10 sm:w-12 h-[2.5px] bg-white rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-sm font-normal">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:underline underline-offset-4 decoration-white/60 transition-all inline-flex items-center gap-1.5 group leading-snug"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:text-white shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Get In Touch Column (Span 3 on Desktop) */}
          <div className="md:col-span-2 lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">Get in touch!</h3>
              <div className="flex items-center gap-1.5 mt-2 mb-3 sm:mb-4">
                <span className="w-10 sm:w-12 h-[2.5px] bg-white rounded-full"></span>
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
                    <p><a href="tel:+919257874994" className="hover:underline underline-offset-2">+91 9257874994</a></p>
                    <p><a href="tel:+447789161193" className="hover:underline underline-offset-2">+44 7789161193</a></p>
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
                    <a href="mailto:info@mossierp.com" className="hover:underline underline-offset-2">info@mossierp.com</a>
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
          <p>Copyright &copy; 2026 Mossie ERP. All Rights Reserved.</p>
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
