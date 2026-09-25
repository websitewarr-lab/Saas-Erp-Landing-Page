"use client";

import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
} from "lucide-react";

interface PartnerApp {
  name: string;
  category: "payments" | "banking" | "ecommerce" | "shipping" | "collab" | "messaging";
  tag: string;
  latency: string;
  badgeBg?: string;
  renderLogo: () => React.ReactNode;
}

// Crisp inline SVGs for top ecosystem partners (zero external image dependencies)
const PARTNERS: Record<string, PartnerApp> = {
  // Left Wing: Payments & Banking & Messaging
  stripe: {
    name: "Stripe",
    category: "payments",
    tag: "Global Gateway",
    latency: "120ms sync",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#635BFF" />
        <path
          d="M14.8 12.8c0-.7.6-1 1.6-1 1.4 0 3.2.5 4.6 1.3V8.8C19.5 8.3 17.8 8 16.1 8c-4.2 0-7 2.2-7 6 0 5.8 8 4.9 8 7.4 0 .9-.8 1.2-1.9 1.2-1.7 0-3.8-.7-5.5-1.7v4.4c1.8.8 3.7 1.1 5.5 1.1 4.3 0 7.3-2.1 7.3-6.1 0-6.3-7.7-5.2-7.7-7.5z"
          fill="#FFF"
        />
      </svg>
    ),
  },
  paypal: {
    name: "PayPal",
    category: "payments",
    tag: "Checkout & Wallet",
    latency: "180ms sync",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#F4F8FC" />
        <path
          d="M12.4 23.2l1.6-10.4h4.1c2.8 0 4.6 1.4 4.2 4.1-.4 2.8-2.3 4.4-4.8 4.4h-2.1l-.8 4.9h-2.2z"
          fill="#003087"
        />
        <path
          d="M14.6 20.4l1.2-7.6h4.1c2.8 0 4.6 1.4 4.2 4.1-.4 2.8-2.3 4.4-4.8 4.4h-2.1l-.8 4.9h-1.8z"
          fill="#0079C1"
          opacity="0.85"
        />
      </svg>
    ),
  },
  razorpay: {
    name: "Razorpay",
    category: "payments",
    tag: "Automated Reconcile",
    latency: "95ms sync",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0C2340" />
        <path
          d="M18.8 8L11 17.5h5.8L13.2 24l9.8-10.5h-6.2L18.8 8z"
          fill="#3395FF"
        />
      </svg>
    ),
  },
  phonepe: {
    name: "PhonePe",
    category: "payments",
    tag: "UPI & QR Collect",
    latency: "90ms sync",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#5F259F" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fill="#FFF"
          fontSize="17"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          पे
        </text>
      </svg>
    ),
  },
  hdfc: {
    name: "HDFC Bank",
    category: "banking",
    tag: "Corporate NetBanking",
    latency: "Direct API",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#004C8F" />
        <rect x="7" y="7" width="18" height="18" fill="#ED232A" rx="2" />
        <rect x="11" y="11" width="10" height="10" fill="#004C8F" />
        <rect x="13" y="13" width="6" height="6" fill="#FFF" />
      </svg>
    ),
  },
  icici: {
    name: "ICICI Bank",
    category: "banking",
    tag: "Smart E-Collections",
    latency: "Real-time feed",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#B02A30" />
        <circle cx="16" cy="16" r="8.5" stroke="#F58220" strokeWidth="2.5" fill="none" />
        <circle cx="16" cy="16" r="3.5" fill="#FFF" />
      </svg>
    ),
  },
  hsbc: {
    name: "HSBC Corporate",
    category: "banking",
    tag: "Treasury & FX",
    latency: "Global SWIFT",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#FFF" stroke="#E2E8F0" />
        <path d="M16 16l-6-6v12l6-6z" fill="#DB0011" />
        <path d="M16 16l6-6v12l-6-6z" fill="#DB0011" />
        <path d="M16 16l6-6H10l6 6z" fill="#DB0011" />
        <path d="M16 16l6 6H10l6-6z" fill="#DB0011" />
      </svg>
    ),
  },
  whatsapp: {
    name: "WhatsApp Business",
    category: "messaging",
    tag: "Invoices & OTPs",
    latency: "< 2s dispatch",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#25D366" />
        <path
          d="M23 15.8c0 4-3.3 7.2-7.3 7.2-1.3 0-2.5-.3-3.6-.9l-4.1 1.1 1.1-3.9c-.8-1.2-1.2-2.5-1.2-3.8 0-4 3.3-7.2 7.3-7.2s7.8 3.5 7.8 7.5zm-4-1.2c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.5.1c-.2.2-.6.7-.8.9-.1.1-.3.2-.5.1s-.9-.3-1.8-1.1c-.7-.6-1.1-1.3-1.3-1.5s0-.4.1-.5.2-.3.3-.4c.1-.1.2-.3.2-.4s0-.3-.1-.4c0-.1-.5-1.2-.7-1.6s-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3s-.9.9-.9 2.2 1 2.5 1.1 2.7 1.9 2.9 4.6 4.1c.6.3 1.2.4 1.6.5.7.1 1.4.1 1.9 0 .6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4s-.2-.2-.5-.3z"
          fill="#FFF"
        />
      </svg>
    ),
  },
  twilio: {
    name: "Twilio",
    category: "messaging",
    tag: "Cloud Telephony",
    latency: "Global routing",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#F22F46" />
        <circle cx="12" cy="12" r="3" fill="#FFF" />
        <circle cx="20" cy="12" r="3" fill="#FFF" />
        <circle cx="12" cy="20" r="3" fill="#FFF" />
        <circle cx="20" cy="20" r="3" fill="#FFF" />
      </svg>
    ),
  },

  // Right Wing: E-Commerce, Logistics & Productivity
  shopify: {
    name: "Shopify",
    category: "ecommerce",
    tag: "Orders & Stock Sync",
    latency: "Real-time Webhook",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#95BF47" />
        <path
          d="M20.5 9.5l-2.8 1.2s-.7-1.7-1.7-1.7c-.2 0-.3 0-.5.1l-.8-2.6c-.1-.2-.3-.3-.5-.3-.1 0-1.9.1-3 1.2-1.1 1.1-1.2 2.8-1.2 2.9l-2.4 1-1.1 12.2 12.5 2.5 5.5-1.5L20.5 9.5zm-5.4.3c.7 0 1.2 1.1 1.4 1.7l-3.3 1.4c.1-.8.9-3.1 1.9-3.1z"
          fill="#FFF"
        />
        <path
          d="M17.5 15.5c-.3-.2-.8-.4-1.4-.4-.8 0-1.3.4-1.3.9 0 1.2 2.7 1.3 2.7 3.3 0 1.5-1.1 2.3-2.5 2.3-.9 0-1.6-.3-2.1-.6l.4-1.4c.4.3.9.5 1.6.5.7 0 1.1-.3 1.1-.8 0-1.2-2.7-1.3-2.7-3.2 0-1.4 1.1-2.4 2.6-2.4.8 0 1.4.2 1.8.5l-.2 1.3z"
          fill="#2C3E1B"
        />
      </svg>
    ),
  },
  amazon: {
    name: "Amazon Seller",
    category: "ecommerce",
    tag: "FBA & Multi-channel",
    latency: "Hourly batch",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#131921" />
        <path
          d="M13.2 18.5c-1.8 0-3.2-.8-3.2-2.3 0-2 1.8-2.5 3.7-2.5.8 0 1.6.1 2.2.3v.6c0 2.4-1 3.9-2.7 3.9zm2.7-7.7h-1.6v1.2c-.7-.9-1.8-1.4-3-1.4-2.5 0-4.4 1.8-4.4 4.3 0 2.7 1.8 4.4 4.3 4.4 1.3 0 2.4-.6 3.1-1.6v1.4h1.6V10.8z"
          fill="#FFF"
        />
        <path
          d="M9 22.8c3.2 1.8 7.3 1.8 11.2-.2.2-.1.4.1.3.3-1.8 1.9-5.4 2.8-8.6 1.7-.5-.2-.9-.4-1.3-.7-.2-.2-.1-.5.2-.5z"
          fill="#FF9900"
        />
      </svg>
    ),
  },
  woocommerce: {
    name: "WooCommerce",
    category: "ecommerce",
    tag: "WordPress Store",
    latency: "Instant sync",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#7F54B3" />
        <path
          d="M8 12c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v7c0 1.7-1.3 3-3 3h-2l-3 3-3-3h-2c-1.7 0-3-1.3-3-3v-7z"
          fill="#FFF"
        />
        <path
          d="M11 14.5c.3 1.2 1.1 2 2.2 2 1.2 0 1.9-.8 2.2-2M16.5 14.5c.3 1.2 1.1 2 2.2 2 1.2 0 1.9-.8 2.2-2"
          stroke="#7F54B3"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  shiprocket: {
    name: "Shiprocket",
    category: "shipping",
    tag: "Automated Dispatch",
    latency: "AWB Generated",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#662D91" />
        <path
          d="M16 8l4.5 9-4.5 7-4.5-7L16 8z"
          fill="#FFF"
        />
        <circle cx="16" cy="17" r="2.2" fill="#00C49F" />
      </svg>
    ),
  },
  delhivery: {
    name: "Delhivery",
    category: "shipping",
    tag: "B2B & Express Cargo",
    latency: "Live manifests",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <text
          x="16"
          y="18"
          textAnchor="middle"
          fill="#E53935"
          fontSize="11"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          DLV
        </text>
        <rect x="8" y="21" width="16" height="2.5" rx="1" fill="#FFF" />
      </svg>
    ),
  },
  fedex: {
    name: "FedEx Express",
    category: "shipping",
    tag: "Global Freight",
    latency: "Commercial API",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#FFF" stroke="#E2E8F0" />
        <text
          x="9"
          y="20"
          fill="#4D148C"
          fontSize="10"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          Fed
        </text>
        <text
          x="18.5"
          y="20"
          fill="#FF6600"
          fontSize="10"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          Ex
        </text>
      </svg>
    ),
  },
  slack: {
    name: "Slack",
    category: "collab",
    tag: "Alerts & Approvals",
    latency: "Real-time",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#4A154B" />
        <circle cx="12" cy="12" r="2" fill="#E01E5A" />
        <circle cx="20" cy="12" r="2" fill="#2EB67D" />
        <circle cx="12" cy="20" r="2" fill="#ECB22E" />
        <circle cx="20" cy="20" r="2" fill="#36C5F0" />
      </svg>
    ),
  },
  zapier: {
    name: "Zapier",
    category: "collab",
    tag: "6,000+ App Bridges",
    latency: "Instant",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#FF4A00" />
        <path
          d="M16 9v14M9 16h14M11 11l10 10M11 21l10-10"
          stroke="#FFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  google: {
    name: "Google Workspace",
    category: "collab",
    tag: "Drive, Sheets, Auth",
    latency: "Live sync",
    renderLogo: () => (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#FFF" stroke="#E2E8F0" />
        <path
          d="M23.5 16.3c0-.6 0-1.1-.1-1.6H16v3h4.2c-.2 1-.8 1.9-1.7 2.5v2h2.7c1.6-1.5 2.5-3.6 2.5-5.9z"
          fill="#4285F4"
        />
        <path
          d="M16 24c2.2 0 4.1-.7 5.5-2l-2.7-2c-.8.5-1.7.8-2.8.8-2.2 0-4-1.5-4.6-3.4H8.7v2.1C10.1 22.3 12.8 24 16 24z"
          fill="#34A853"
        />
        <path
          d="M11.4 17.4c-.1-.5-.2-1-.2-1.4s.1-.9.2-1.4V12.5H8.7C8.1 13.6 7.8 14.8 7.8 16s.3 2.4.9 3.5l2.7-2.1z"
          fill="#FBBC05"
        />
        <path
          d="M16 10.6c1.2 0 2.3.4 3.2 1.2l2.4-2.4C20.1 8 18.2 7.3 16 7.3c-3.2 0-5.9 1.7-7.3 4.5l2.7 2.1c.6-1.9 2.4-3.3 4.6-3.3z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
};

export default function IntegrationsEcosystem() {
  const circuitRef = useRef<HTMLDivElement | null>(null);
  const hubRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [connectionPaths, setConnectionPaths] = useState<string[]>([]);
  const [circuitSize, setCircuitSize] = useState({ width: 1000, height: 460 });

  const calculateConnectionPaths = useCallback(() => {
    const circuit = circuitRef.current;
    const hub = hubRef.current;

    if (!circuit || !hub || sectionRefs.current.length < 6) return;

    const circuitRect = circuit.getBoundingClientRect();
    const hubRect = hub.getBoundingClientRect();

    setCircuitSize({
      width: Math.max(1, Math.round(circuitRect.width)),
      height: Math.max(1, Math.round(circuitRect.height)),
    });

    const hubCenterY = hubRect.top - circuitRect.top + hubRect.height / 2;
    const hubLeft = hubRect.left - circuitRect.left;
    const hubRight = hubRect.right - circuitRect.left;

    const nextPaths = sectionRefs.current.slice(0, 6).map((section, index) => {
      if (!section) return "";

      const rect = section.getBoundingClientRect();
      const isLeft = index < 3;

      const targetX = isLeft
        ? rect.right - circuitRect.left + 2
        : rect.left - circuitRect.left - 2;

      const targetY = rect.top - circuitRect.top + rect.height / 2;

      const startX = isLeft ? hubLeft + 4 : hubRight - 4;
      const startY = hubCenterY;

      const horizontalDistance = Math.max(70, Math.abs(targetX - startX) * 0.55);
      const control1X = isLeft
        ? startX - horizontalDistance
        : startX + horizontalDistance;
      const control2X = isLeft
        ? targetX + horizontalDistance * 0.55
        : targetX - horizontalDistance * 0.55;

      return `M ${startX} ${startY} C ${control1X} ${startY}, ${control2X} ${targetY}, ${targetX} ${targetY}`;
    });

    setConnectionPaths(nextPaths);
  }, []);

  useLayoutEffect(() => {
    calculateConnectionPaths();

    const frame = requestAnimationFrame(calculateConnectionPaths);
    const timeout = window.setTimeout(calculateConnectionPaths, 180);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [calculateConnectionPaths]);

  useEffect(() => {
    const circuit = circuitRef.current;
    if (!circuit) return;

    const observer = new ResizeObserver(calculateConnectionPaths);
    observer.observe(circuit);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    if (hubRef.current) observer.observe(hubRef.current);

    window.addEventListener("resize", calculateConnectionPaths);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculateConnectionPaths);
    };
  }, [calculateConnectionPaths]);

  const isHighlighted = (_cat?: string) => true;

  return (
    <section className="py-[15px] bg-white relative overflow-hidden" id="integrations">
      {/* CSS Keyframes for a stable hub aura, thin dashed-line pulse & synchronized section glow */}
      <style>{`
        @keyframes circuitPulseHalo {
          0%, 100% { opacity: 0.18; transform: scale(0.92); }
          50% { opacity: 0.42; transform: scale(1.08); }
        }

        .circuit-pulse-halo {
          animation: circuitPulseHalo 3s ease-in-out infinite;
        }

        /* All six section groups use the same 3s clock as the line pulse. */
        @keyframes circuitSectionPulseLeft {
          0%, 71.9% {
            background-color: transparent;
            box-shadow: none;
          }
          72%, 90% {
            background-color: rgba(239, 246, 255, 0.72);
            box-shadow: 0 0 28px rgba(37, 99, 235, 0.16);
          }
          94%, 100% {
            background-color: transparent;
            box-shadow: none;
          }
        }

        @keyframes circuitSectionPulseRight {
          0%, 71.9% {
            background-color: transparent;
            box-shadow: none;
          }
          72%, 90% {
            background-color: rgba(236, 253, 245, 0.72);
            box-shadow: 0 0 28px rgba(5, 150, 105, 0.16);
          }
          94%, 100% {
            background-color: transparent;
            box-shadow: none;
          }
        }

        .circuit-section-pulse {
          position: relative;
        }

        /*
         * The glow belongs to the existing integration cards themselves.
         * Nothing is added to the layout and no extra pulse element is drawn.
         * Every card in a section starts glowing only when the matching
         * dashed line has completed its center -> section travel.
         */
        .circuit-section-pulse-left .group {
          animation: circuitSectionCardPulseLeft 3s linear infinite;
        }

        .circuit-section-pulse-right .group {
          animation: circuitSectionCardPulseRight 3s linear infinite;
        }

        @keyframes circuitSectionCardPulseLeft {
          0%, 71.9% {
            background-color: #ffffff;
            border-color: rgba(226, 232, 240, 0.9);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
          }
          72%, 90% {
            background-color: #eff6ff;
            border-color: #93c5fd;
            box-shadow:
              0 0 18px rgba(37, 99, 235, 0.22),
              0 4px 12px rgba(37, 99, 235, 0.10);
          }
          94%, 100% {
            background-color: #ffffff;
            border-color: rgba(226, 232, 240, 0.9);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
          }
        }

        @keyframes circuitSectionCardPulseRight {
          0%, 71.9% {
            background-color: #ffffff;
            border-color: rgba(226, 232, 240, 0.9);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
          }
          72%, 90% {
            background-color: #ecfdf5;
            border-color: #6ee7b7;
            box-shadow:
              0 0 18px rgba(5, 150, 105, 0.22),
              0 4px 12px rgba(5, 150, 105, 0.10);
          }
          94%, 100% {
            background-color: #ffffff;
            border-color: rgba(226, 232, 240, 0.9);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
          }
        }
      `}</style>

      {/* Background Matrix & Subtle Gradient Floor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[500px] bg-gradient-to-tr from-blue-100/35 via-sky-50/25 to-indigo-100/30 blur-[130px]" />
        {/* Modular circuit grid pattern matching media_1789202919929.png */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0F172A 1px, transparent 1px), linear-gradient(to bottom, #0F172A 1px, transparent 1px)",
            backgroundSize: "68px 68px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-[1180px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-3">
              Built-in ecosystem on which <br className="hidden sm:inline" />
              your business is <span className="text-blue-600">built-on</span>.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Native, bidirectional API connectors connect your banks, payment gateways, online storefronts, couriers, and chat apps directly to your central MossiERP ledger.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* THE ECOSYSTEM CONNECTION CIRCUIT MATRIX (Matching media_1789202919929.png) */}
        {/* ========================================================================= */}
        <div className="relative bg-white/90 backdrop-blur-md rounded-[24px] border border-slate-200/90 shadow-[0_12px_40px_rgba(15,23,42,0.04)] p-4 sm:p-5 lg:p-6 select-none overflow-hidden">

          {/* MAIN DESKTOP / TABLET CIRCUIT GRID */}
          <div ref={circuitRef} className="relative min-h-[460px] flex items-center justify-between">
            
            {/* 1. LEFT WING (Payments, Banks, Messaging) */}
            <div className="flex flex-col gap-6 z-10 w-full sm:w-[310px] lg:w-[350px]">
              
              {/* Category 1: PAYMENTS */}
              <div
                ref={(element) => { sectionRefs.current[0] = element; }}
                className={`circuit-section-pulse circuit-section-pulse-left transition-all duration-300 ${
                  isHighlighted("payments") ? "opacity-100 scale-[1.01]" : "opacity-40"
                }`}
              >
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-blue-600 uppercase">
                    Payments
                  </span>
                    <span className="text-[10px] text-slate-400 font-medium">Auto-Reconcile</span>
                </div>
                <div className="grid grid-cols-4 gap-2.5">
                  {[PARTNERS.stripe, PARTNERS.paypal, PARTNERS.razorpay, PARTNERS.phonepe].map((app) => (
                    <div
                      key={app.name}
                      className={`group bg-white p-2.5 rounded-[16px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer text-center relative`}
                    >
                      {app.renderLogo()}
                      <span className="text-[10.5px] font-bold text-slate-800 mt-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2: BANKING */}
              <div
                ref={(element) => { sectionRefs.current[1] = element; }}
                className={`circuit-section-pulse circuit-section-pulse-left transition-all duration-300 ${
                  isHighlighted("banking") ? "opacity-100 scale-[1.01]" : "opacity-40"
                }`}
              >
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-slate-700 uppercase">
                    Bank Direct
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Automated Feeds</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {[PARTNERS.hdfc, PARTNERS.icici, PARTNERS.hsbc].map((app) => (
                    <div
                      key={app.name}
                      className={`group bg-white p-2.5 rounded-[16px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer text-center`}
                    >
                      {app.renderLogo()}
                      <span className="text-[10.5px] font-bold text-slate-800 mt-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 3: MESSAGING */}
              <div
                ref={(element) => { sectionRefs.current[2] = element; }}
                className={`circuit-section-pulse circuit-section-pulse-left transition-all duration-300 ${
                  isHighlighted("collab") ? "opacity-100 scale-[1.01]" : "opacity-40"
                }`}
              >
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-600 uppercase">
                    Messaging & SMS
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Instant Dispatch</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[PARTNERS.whatsapp, PARTNERS.twilio].map((app) => (
                    <div
                      key={app.name}
                      className={`group bg-white p-2.5 rounded-[16px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5 cursor-pointer px-3`}
                    >
                      {app.renderLogo()}
                      <div className="text-left min-w-0">
                        <span className="text-[11px] font-bold text-slate-900 block truncate group-hover:text-emerald-600 transition-colors">
                          {app.name}
                        </span>
                        <span className="text-[9px] text-slate-400 block truncate">{app.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* 2. CENTER PLATFORM LOGO (ORIGINAL HEADER LOGO ONLY - NO COMPANY NAME) */}
            <div className="hidden md:flex flex-col items-center justify-center relative z-20 px-4">
              
              {/* Pulsing Concentric Aura Halo */}
              <div className="relative flex items-center justify-center">
                <div className="circuit-pulse-halo absolute w-36 h-36 rounded-full bg-blue-500/10 pointer-events-none" />
                <div className="circuit-pulse-halo absolute w-28 h-28 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/20 to-indigo-500/20 blur-md pointer-events-none" />
                
                {/* Clean Elevated White Tile with ONLY the Original Header Logo */}
                <div
                  ref={hubRef}
                  className="w-20 h-20 rounded-[22px] bg-white border-2 border-blue-200/90 shadow-[0_12px_36px_rgba(37,99,235,0.18)] flex items-center justify-center relative z-30 group cursor-pointer hover:scale-105 transition-all duration-300 p-2"
                  title="MossiERP Platform"
                >
                  <img
                    src="/images/logo/mossierplogo"
                    alt="MossiERP Platform"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* 3. RIGHT WING (E-Commerce, Shipping, Collaboration) */}
            <div className="flex flex-col gap-6 z-10 w-full sm:w-[310px] lg:w-[350px]">
              
              {/* Category 4: E-COMMERCE */}
              <div
                ref={(element) => { sectionRefs.current[3] = element; }}
                className={`circuit-section-pulse circuit-section-pulse-right transition-all duration-300 ${
                  isHighlighted("ecommerce") ? "opacity-100 scale-[1.01]" : "opacity-40"
                }`}
              >
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-600 uppercase">
                    E-Commerce
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Inventory & Orders</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {[PARTNERS.shopify, PARTNERS.amazon, PARTNERS.woocommerce].map((app) => (
                    <div
                      key={app.name}
                      className={`group bg-white p-2.5 rounded-[16px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer text-center`}
                    >
                      {app.renderLogo()}
                      <span className="text-[10.5px] font-bold text-slate-800 mt-1.5 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 5: SHIPPING & LOGISTICS */}
              <div
                ref={(element) => { sectionRefs.current[4] = element; }}
                className={`circuit-section-pulse circuit-section-pulse-right transition-all duration-300 ${
                  isHighlighted("shipping") ? "opacity-100 scale-[1.01]" : "opacity-40"
                }`}
              >
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-indigo-600 uppercase">
                    Shipping & Couriers
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Live Tracking & Slips</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {[PARTNERS.shiprocket, PARTNERS.delhivery, PARTNERS.fedex].map((app) => (
                    <div
                      key={app.name}
                      className={`group bg-white p-2.5 rounded-[16px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer text-center`}
                    >
                      {app.renderLogo()}
                      <span className="text-[10.5px] font-bold text-slate-800 mt-1.5 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 6: WORKSPACE & COLLAB */}
              <div
                ref={(element) => { sectionRefs.current[5] = element; }}
                className={`circuit-section-pulse circuit-section-pulse-right transition-all duration-300 ${
                  isHighlighted("collab") ? "opacity-100 scale-[1.01]" : "opacity-40"
                }`}
              >
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-purple-600 uppercase">
                    Workspace & Automation
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Live Triggers</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {[PARTNERS.slack, PARTNERS.zapier, PARTNERS.google].map((app) => (
                    <div
                      key={app.name}
                      className={`group bg-white p-2.5 rounded-[16px] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-purple-400 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer text-center`}
                    >
                      {app.renderLogo()}
                      <span className="text-[10.5px] font-bold text-slate-800 mt-1.5 line-clamp-1 group-hover:text-purple-600 transition-colors">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* LIVE SVG CONNECTION TRACES — one thin dashed line per connection, progressively colored from hub to all 6 sections */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block overflow-visible z-0"
              viewBox={`0 0 ${circuitSize.width} ${circuitSize.height}`}
              preserveAspectRatio="none"
            >
              <defs>
                {/*
                  The reveal path is used only as a mask. The visible pulse is the
                  exact same dashed line geometry and thickness as the resting line.
                  This keeps the connection elegant instead of adding a fat second line.
                */}
                <filter id="circuitPulseGlow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="1.8" result="softGlow" />
                  <feMerge>
                    <feMergeNode in="softGlow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {connectionPaths.map((path, index) => {
                if (!path) return null;

                const accent = index < 3 ? "#2563EB" : "#059669";
                const muted = index < 3 ? "#CBD5E1" : "#CBD5E1";
                const maskId = `connection-pulse-mask-${index}`;

                return (
                  <g key={`connection-${index}`}>
                    {/* Resting connection: one thin grayscale dashed line */}
                    <path
                      d={path}
                      fill="none"
                      stroke={muted}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeDasharray="3 7"
                      opacity="0.95"
                    />

                    {/* The animated reveal path is used only as a mask for the glowing accent */}
                    <mask id={maskId} maskUnits="userSpaceOnUse" x="-100%" y="-100%" width="200%" height="200%">
                      <motion.path
                        d={path}
                        fill="none"
                        stroke="white"
                        strokeWidth="10"
                        strokeLinecap="round"
                        pathLength={1}
                        strokeDasharray="1 1"
                        initial={{ strokeDashoffset: 1 }}
                        animate={{ strokeDashoffset: [1, 1, 0, 0] }}
                        transition={{
                          duration: 3,
                          times: [0, 0.08, 0.72, 1],
                          ease: "linear",
                          repeat: Infinity,
                        }}
                      />
                    </mask>

                    {/* Exact same dashed geometry, only the revealed part glows */}
                    <path
                      d={path}
                      fill="none"
                      stroke={accent}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="3 7"
                      mask={`url(#${maskId})`}
                      filter="url(#circuitPulseGlow)"
                    >
                      <animate
                        attributeName="opacity"
                        values="0;0.95;1;0.75;0"
                        keyTimes="0;0.08;0.72;0.90;1"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                );
              })}
            </svg>

          </div>

          {/* Subterranean Platform Capabilities Footer */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            

            <div className="flex items-center gap-4">
            
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
