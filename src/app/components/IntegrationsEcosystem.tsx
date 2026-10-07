"use client";

import React, { useEffect, useRef } from "react";
import { BRAND_ICONS } from "./integrations-icons";

interface GroupConfig {
  id: string;
  label: string;
  side: "left" | "right";
  apps: [string, string, string?][];
}

const GROUPS: GroupConfig[] = [
  {
    id: "payments",
    label: "Payments",
    side: "left",
    apps: [
      ["Stripe", "stripe"],
      ["Razorpay", "razorpay"],
      ["PayPal", "paypal"],
      ["PhonePe", "phonepe"],
    ],
  },
  {
    id: "banking",
    label: "Banking",
    side: "left",
    apps: [
      ["HDFC Bank", "hdfc"],
      ["ICICI Bank", "icici"],
      ["Axis Bank", "axis"],
      ["HSBC", "hsbc", "wide"],
    ],
  },
  {
    id: "crm",
    label: "CRM & Sales",
    side: "left",
    apps: [
      ["Zoho CRM", "zoho", "wide"],
      ["HubSpot", "hubspot"],
      ["Salesforce", "salesforce", "wide"],
      ["Pipedrive", "pipedrive"],
    ],
  },
  {
    id: "communication",
    label: "Communication",
    side: "left",
    apps: [
      ["WhatsApp", "whatsapp"],
      ["Slack", "slack"],
      ["Twilio", "twilio"],
      ["Microsoft Teams", "teams"],
    ],
  },
  {
    id: "accounting",
    label: "Accounting",
    side: "left",
    apps: [
      ["Tally", "tally", "wide"],
      ["QuickBooks", "quickbooks"],
      ["Xero", "xero"],
      ["Zoho Books", "books"],
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    side: "right",
    apps: [
      ["Shopify", "shopify"],
      ["Amazon", "amazon"],
      ["WooCommerce", "woocommerce"],
      ["Magento", "magento"],
    ],
  },
  {
    id: "shipping",
    label: "Shipping & Logistics",
    side: "right",
    apps: [
      ["Shiprocket", "shiprocket"],
      ["Delhivery", "delhivery"],
      ["FedEx", "fedex", "wide"],
      ["Blue Dart", "bluedart"],
    ],
  },
  {
    id: "marketplace",
    label: "Marketplace",
    side: "right",
    apps: [
      ["Myntra", "myntra"],
      ["Flipkart", "flipkart"],
      ["Amazon Seller", "amazon"],
      ["Meesho", "meesho"],
    ],
  },
  {
    id: "productivity",
    label: "Productivity",
    side: "right",
    apps: [
      ["Google Workspace", "google"],
      ["Notion", "notion"],
      ["Zapier", "zapier"],
      ["Airtable", "airtable"],
    ],
  },
  {
    id: "other",
    label: "Other Apps",
    side: "right",
    apps: [
      ["Google Maps", "maps", "small"],
      ["Calendly", "calendly"],
      ["DocuSign", "docusign"],
      ["Slack", "slack"],
    ],
  },
];

const ROWS = [94, 218, 345, 475, 605];

const LEFT_PATHS = [
  "M 659 94 H 788 C 861 94 918 145 918 202 V 245 Q 918 280 953 280",
  "M 647 218 H 799 C 862 218 825 303 898 303 H 942",
  "M 689 345 H 934",
  "M 718 475 H 798 C 870 475 816 389 901 389 H 942",
  "M 689 605 H 788 C 860 605 916 552 916 502 V 450 Q 916 412 953 412",
];

const RIGHT_PATHS = [
  "M 1377 94 H 1260 C 1187 94 1130 145 1130 202 V 245 Q 1130 280 1095 280",
  "M 1377 218 H 1249 C 1186 218 1223 303 1150 303 H 1106",
  "M 1377 345 H 1114",
  "M 1377 475 H 1250 C 1178 475 1232 389 1147 389 H 1106",
  "M 1377 605 H 1260 C 1188 605 1132 552 1132 502 V 450 Q 1132 412 1095 412",
];

const CSS_STYLES = `
    .integration-map {
      --background: oklch(0.989 0.008 245);
      --surface: oklch(0.995 0.003 225);
      --card: oklch(1 0 0);
      --foreground: oklch(0.25 0.047 258);
      --primary: #006fc9;
      --electric-blue: #006fc9;
      --border: oklch(0.91 0.038 255 / 65%);
      --muted: oklch(0.95 0.014 225);
      --grid: oklch(0.8 0.07 245 / 9%);
      --shadow: oklch(0.53 0.14 258 / 12%);
    }

    
    
    
    
    
    
    .integration-map {
      position: relative;
      isolation: isolate;
      container-type: inline-size;
      width: 100%;
      max-width: 2048px;
      aspect-ratio: 2048 / 735;
      margin-inline: auto;
      overflow: clip;
      border: 1px solid #E2E8F0;
      border-radius: clamp(7px, 1.17vw, 19px);
      box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.04);
      background-color: var(--background);
      background-image:
        linear-gradient(var(--grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid) 1px, transparent 1px);
      background-size: 2.5cqw 2.5cqw;
      background-position: 0.65cqw 1.85cqw;
    }
    .integration-map::before {
      content: "";
      pointer-events: none;
      position: absolute;
      inset: 0;
      z-index: -1;
      background: radial-gradient(ellipse at 50% 46.4%, transparent 12%, oklch(1 0 0 / 15%) 70%);
    }
    .connections {
      position: absolute; inset: 0; width: 100%; height: 100%;
      overflow: visible; pointer-events: none; z-index: 1;
    }
    .connection-track, .connection-light, .connection-dashes {
      fill: none; stroke-width: 1.65; stroke-linecap: round; stroke-linejoin: round;
    }
    .connection-track { stroke: url(#line-blue); }
    .right-path .connection-track { stroke: url(#line-blue-right); }
    .connection-dashes { stroke: oklch(0.68 0.15 258 / 35%); stroke-dasharray: 6 7; }
    .connection-light {
      stroke: var(--electric-blue); opacity: 0; stroke-width: 1.8;
      transition: opacity 450ms ease;
    }
    .connection.is-active .connection-light { opacity: 0.56; }
    .port { fill: oklch(0.65 0.19 250); stroke: oklch(0.77 0.13 248 / 35%); stroke-width: 3; }
    .route-node { fill: oklch(0.65 0.2 252); opacity: 0.65; }
    .data-pulse { opacity: 0; }
    .integration-group {
      position: absolute; top: var(--row-y); height: 4.59cqw;
      transform: translateY(-50%); z-index: 3;
    }
    .side-left { left: 4.3945%; width: 30.6641%; }
    .side-right { left: 68.2129%; width: 27.5879%; }
    .category {
      position: absolute; top: 50%; transform: translateY(-50%);
      margin: 0; color: var(--primary);
      font-size: clamp(10px, 0.6836cqw, 14px);
      font-weight: 650; line-height: 1.45; letter-spacing: 0.17em;
      text-transform: uppercase;
    }
    .side-left .category { left: 73.57%; white-space: nowrap; }
    .side-right .category { left: 0; width: 27%; }
    .category-dot {
      position: absolute; left: -1.03cqw; top: 50%;
      width: 0.39cqw; height: 0.39cqw; min-width: 5px; min-height: 5px;
      border-radius: 50%; transform: translate(-50%, -50%);
      background: var(--primary);
      box-shadow: 0 0 0 2px oklch(0.8 0.12 258 / 5%);
    }
    .apps {
      position: absolute; top: 0; margin: 0; padding: 0;
      display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.78125cqw; height: 100%; list-style: none;
    }
    .side-left .apps { left: 0; width: 64.65%; }
    .side-right .apps { right: 0; width: 71.86%; }
    .app-card {
      min-width: 0; height: 100%;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 0.43cqw;
      padding: 0.55cqw 0.12cqw 0.38cqw;
      border: 1px solid var(--border);
      border-top-color: oklch(0.91 0.039 258 / 45%);
      border-left-color: oklch(0.83 0.086 258 / 58%);
      border-radius: 0.7cqw;
      background: linear-gradient(145deg, var(--card), oklch(0.994 0.004 242));
      box-shadow: 0 4px 9px var(--shadow), 0 1px 2px oklch(0.57 0.14 258 / 4%);
      transition: transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease;
    }
    .app-icon { display: grid; place-items: center; width: 2.1cqw; height: 2.1cqw; flex: 0 0 auto; }
    .app-icon svg, .app-icon img { display: block; width: 100%; height: 100%; object-fit: contain; }
    .app-icon.wide { width: 2.8cqw; }
    .app-icon.small { width: 1.85cqw; height: 1.85cqw; }
    .app-name {
      display: grid; place-items: center; width: 100%; min-height: 1.24cqw;
      font-size: clamp(9px, 0.555cqw, 11.4px); font-weight: 650;
      line-height: 1.24; letter-spacing: -0.035em; text-align: center;
    }
    @media (hover: hover) {
      .app-card:hover {
        transform: translateY(-3px);
        border-color: oklch(0.77 0.12 257 / 65%);
        box-shadow: 0 8px 18px oklch(0.55 0.17 255 / 17%);
      }
    }
    .integration-group.is-active .app-card { animation: card-signal 1350ms ease both; animation-delay: calc(var(--card-index) * 85ms); }
    .integration-group.is-active .app-icon { animation: icon-signal 1350ms ease both; animation-delay: calc(var(--card-index) * 85ms); }
    @keyframes card-signal {
      0%, 100% { transform: translateY(0); }
      35%, 60% {
        transform: translateY(-2px);
        border-color: oklch(0.76 0.125 258 / 75%);
        box-shadow: 0 7px 15px oklch(0.55 0.16 257 / 16%);
      }
    }
    @keyframes icon-signal { 45% { filter: drop-shadow(0 0 4px oklch(0.65 0.18 254 / 22%)); } }

    .hub {
      position: absolute; left: 50%; top: 46.3946%;
      width: 6.25cqw; height: 6.25cqw;
      transform: translate(-50%, -50%); z-index: 2;
    }
    .hub-halo, .hub-ring, .hub-wave {
      position: absolute; left: 50%; top: 50%; border-radius: 50%;
      pointer-events: none; transform: translate(-50%, -50%);
    }
    .hub-halo {
      width: 380%; height: 380%;
      background: radial-gradient(circle, oklch(0.73 0.14 255 / 28%) 0%, oklch(0.79 0.12 252 / 20%) 22%, oklch(0.85 0.08 250 / 12%) 33%, oklch(0.89 0.05 248 / 5%) 46%, transparent 67%);
    }
    .hub-ring { border: 1px solid oklch(0.79 0.095 250 / 10%); }
    .ring-outer { width: 313%; height: 313%; }
    .ring-middle { width: 253%; height: 253%; }
    .ring-inner {
      width: 173%; height: 173%;
      border: 1px dashed oklch(0.73 0.13 250 / 42%);
      background: radial-gradient(circle, oklch(0.74 0.12 252 / 14%), oklch(0.88 0.07 247 / 4%) 72%);
    }
    .ring-close { width: 142%; height: 142%; border: 0; background: oklch(0.72 0.14 255 / 8%); }
    .hub-card {
      position: relative; display: grid; place-items: center; width: 100%; height: 100%;
      border-radius: 24%; border: 1px solid oklch(0.87 0.06 251 / 65%);
      background: linear-gradient(145deg, var(--card), oklch(0.994 0.004 240));
      box-shadow: 0 10px 27px oklch(0.57 0.17 258 / 19%), 0 1px 5px oklch(0.55 0.19 258 / 8%), inset 0 2px 3px white;
    }
    .hub-logo { display: block; width: 74%; height: auto; }
    .hub-wave {
      width: 142%; height: 142%; opacity: 0;
      border: 1px solid oklch(0.65 0.19 252 / 50%);
    }
    .hub.is-receiving .hub-wave { animation: receive-wave 1050ms ease-out; }
    .hub.is-receiving .hub-halo { animation: receive-halo 1050ms ease-out; }
    .hub.is-receiving .hub-card { animation: receive-card 1050ms ease-out; }
    .hub.is-receiving .hub-logo { animation: receive-logo 1050ms ease-out; }
    @keyframes receive-wave {
      0% { transform: translate(-50%, -50%) scale(0.95); opacity: 0; }
      15% { opacity: 0.58; }
      100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
    }
    @keyframes receive-halo { 22% { opacity: 0.85; transform: translate(-50%, -50%) scale(1.12); } }
    @keyframes receive-card { 20% { box-shadow: 0 8px 30px oklch(0.58 0.19 258 / 25%), 0 0 13px oklch(0.74 0.14 251 / 21%), inset 0 0 14px oklch(0.85 0.08 250 / 12%); } }
    @keyframes receive-logo { 20% { filter: drop-shadow(0 0 5px oklch(0.6 0.18 254 / 28%)); } }
    .hub-caption { display: none; }
    .motion-toggle {
      position: absolute; bottom: 18px; right: 20px; z-index: 5;
      display: grid; place-items: center; width: 32px; height: 32px;
      padding: 0; border: 1px solid oklch(0.85 0.06 252 / 45%); border-radius: 50%;
      background: oklch(1 0 0 / 65%); color: oklch(0.58 0.1 258);
      cursor: pointer; transition: background 200ms ease;
    }
    .motion-toggle svg { width: 12px; height: 12px; }
    .motion-toggle:hover { background: var(--card); }
    .motion-toggle:focus-visible { outline: 2px solid var(--primary); outline-offset: 4px; }
    .motion-toggle .play-icon { display: none; }
    .motion-toggle[aria-pressed="true"] .play-icon { display: block; }
    .motion-toggle[aria-pressed="true"] .pause-icon { display: none; }
    .motion-toggle[hidden] { display: none; }

    /* Tablet: full-size logos in two-column card groups; hub and SVG routes remain central. */
    @media (min-width: 768px) and (max-width: 1179px) {
      .integration-map { aspect-ratio: auto; height: 1200px; background-size: 36px 36px; }
      .integration-group { width: 25%; height: 166px; transform: translateY(-12px); }
      .side-left { left: 4.5%; }
      .side-right { left: auto; right: 4.5%; }
      .category, .side-left .category, .side-right .category {
        top: 0; left: 0; width: 100%; transform: none;
        font-size: 11px; letter-spacing: 0.12em; white-space: nowrap;
      }
      .side-left .category-dot { left: calc(100% + 16px); }
      .side-right .category-dot { left: -16px; }
      .category-dot { width: 6px; height: 6px; }
      .apps, .side-left .apps, .side-right .apps {
        top: 32px; width: 100%; height: auto; gap: 12px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .app-card { height: 74px; padding: 10px 4px; gap: 7px; border-radius: 12px; }
      .app-icon, .app-icon.small { width: 30px; height: 30px; }
      .app-icon.wide { width: 44px; }
      .app-name { min-height: 15px; font-size: 11px; }
      .hub { width: 102px; height: 102px; }
    }

    /* Mobile: a single connected bus leads upward into the prominent Mossie hub. */
    @media (max-width: 767px) {
      
      .integration-map {
        display: flex; flex-direction: column; gap: 30px;
        aspect-ratio: auto; padding: 36px 22px 48px 48px;
        border-radius: 20px; background-size: 32px 32px;
      }
      .hub {
        position: relative; left: auto; top: auto; transform: none;
        width: 112px; height: 112px; margin: 20px auto 78px;
        align-self: center;
      }
      .hub-caption { display: block; position: absolute; top: calc(100% + 20px); left: 50%; transform: translateX(-50%); width: 220px; text-align: center; }
      .hub-caption strong { display: block; font-size: 16px; font-weight: 650; letter-spacing: -0.03em; }
      .hub-caption span { display: block; margin-top: 5px; color: oklch(0.56 0.06 251); font-size: 11px; }
      .integration-group, .side-left, .side-right {
        position: relative; top: auto; left: auto; right: auto;
        width: 100%; height: auto; transform: none;
      }
      .category, .side-left .category, .side-right .category {
        position: relative; top: auto; left: auto; transform: none;
        width: 100%; margin-bottom: 16px; font-size: 12px; letter-spacing: 0.13em;
        line-height: 20px; white-space: normal;
      }
      .category-dot { left: -16px; width: 6px; height: 6px; }
      .apps, .side-left .apps, .side-right .apps {
        position: relative; top: auto; right: auto; left: auto;
        width: 100%; height: auto; gap: 12px;
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .app-card { height: 100px; border-radius: 13px; padding: 13px 5px 10px; gap: 10px; }
      .app-icon, .app-icon.small { width: 34px; height: 34px; }
      .app-icon.wide { width: 48px; }
      .app-name { min-height: 27px; font-size: 12px; letter-spacing: -0.035em; }
      .connection-track { stroke: oklch(0.72 0.13 253 / 13%); stroke-width: 1.25; }
      .right-path .connection-track { stroke: oklch(0.72 0.13 253 / 13%); }
      .connection.is-active .connection-light { opacity: 0.45; }
      .connection-light { stroke-width: 1.4; }
      .route-node, .connection-dashes { display: none; }
      .port { stroke-width: 2; }
      .motion-toggle { bottom: auto; right: 17px; top: 17px; width: 36px; height: 36px; }
    }
    @media (max-width: 479px) {
      .apps, .side-left .apps, .side-right .apps { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .app-card { height: 94px; gap: 8px; }
      .app-name { min-height: 18px; font-size: 13px; }
    }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation: none !important; transition: none !important; }
      .data-pulse, .hub-wave { display: none; }
      .app-card:hover { transform: none; }
    }
  `;

export default function IntegrationsEcosystem() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const hubRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const connectionRefs = useRef<(SVGGElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const dashesRefs = useRef<(SVGPathElement | null)[]>([]);
  const lightRefs = useRef<(SVGPathElement | null)[]>([]);
  const nodeRefs = useRef<(SVGCircleElement | null)[]>([]);
  const portRefs = useRef<(SVGCircleElement | null)[]>([]);
  const motionRefs = useRef<(SVGAnimateMotionElement | null)[]>([]);
  const fadeRefs = useRef<(SVGAnimateElement | null)[]>([]);
  const durations = useRef<number[]>([]);

  const isHoveredRef = useRef(false);
  const runningRef = useRef(false);

  useEffect(() => {
    const map = mapRef.current;
    const svg = svgRef.current;
    const hub = hubRef.current;
    if (!map || !svg || !hub) return;

    let inView = true;
    let cursor = 0;
    const timers = new Set<NodeJS.Timeout>();

    const later = (callback: () => void, delay: number) => {
      const timer = setTimeout(() => {
        timers.delete(timer);
        callback();
      }, delay);
      timers.add(timer);
      return timer;
    };

    const stop = () => {
      runningRef.current = false;
      timers.forEach(clearTimeout);
      timers.clear();
      GROUPS.forEach((_, i) => {
        sectionRefs.current[i]?.classList.remove("is-active");
        connectionRefs.current[i]?.classList.remove("is-active");
        try {
          motionRefs.current[i]?.endElement();
          fadeRefs.current[i]?.endElement();
        } catch {
          // ignore
        }
      });
      hub.classList.remove("is-receiving");
      try {
        svg.pauseAnimations();
      } catch {
        // ignore
      }
    };

    const runCategory = () => {
      if (!runningRef.current) return;
      const idx = cursor;
      cursor = (cursor + 1) % GROUPS.length;

      const section = sectionRefs.current[idx];
      const connection = connectionRefs.current[idx];
      const motion = motionRefs.current[idx];
      const fade = fadeRefs.current[idx];
      const dur = durations.current[idx] || 1950;

      if (section) section.classList.add("is-active");
      if (connection) connection.classList.add("is-active");

      later(() => {
        try {
          motion?.beginElement();
          fade?.beginElement();
        } catch {
          // ignore
        }
      }, 600);

      later(() => {
        if (section) section.classList.remove("is-active");
        if (connection) connection.classList.remove("is-active");
      }, dur + 950);

      later(runCategory, dur + 1300);
    };

    const syncPlayback = () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isHoveredRef.current || reducedMotion || document.hidden || !inView) {
        stop();
        return;
      }
      if (runningRef.current) return;
      runningRef.current = true;
      try {
        svg.unpauseAnimations();
      } catch {
        // ignore
      }
      later(runCategory, 650);
    };

    // Attach endEvent listeners to motion elements
    GROUPS.forEach((_, i) => {
      const motion = motionRefs.current[i];
      if (motion) {
        motion.addEventListener("endEvent", () => {
          if (!runningRef.current) return;
          hub.classList.remove("is-receiving");
          void hub.offsetWidth;
          hub.classList.add("is-receiving");
          later(() => hub.classList.remove("is-receiving"), 1080);
        });
      }
    });

    const centerOf = (element: Element, bounds: DOMRect) => {
      const box = element.getBoundingClientRect();
      return { x: box.left + box.width / 2 - bounds.left, y: box.top + box.height / 2 - bounds.top };
    };

    const layoutConnections = () => {
      const resume = runningRef.current;
      stop();
      const width = map.clientWidth;
      const height = map.clientHeight;
      const desktop = window.innerWidth >= 1180;
      const mobile = window.innerWidth < 768;
      svg.setAttribute("viewBox", desktop ? "0 0 2048 735" : `0 0 ${width} ${height}`);
      const bounds = svg.getBoundingClientRect();
      const core = centerOf(hub, bounds);
      const hubBox = hub.getBoundingClientRect();

      GROUPS.forEach((group, index) => {
        const row = index % 5;
        const left = group.side === "left";
        let d = "";
        let dashesD = "";

        if (desktop) {
          d = left ? LEFT_PATHS[row] : RIGHT_PATHS[row];
          const start = left ? [659, 647, 689, 718, 689][row] : 1377;
          const end = left ? Math.min(start + 95, 785) : 1270;
          dashesD = `M ${start} ${ROWS[row]} H ${end}`;
        } else {
          const dot = dotRefs.current[index];
          if (dot) {
            const start = centerOf(dot, bounds);
            dashesD = "";
            if (mobile) {
              const rail = 16;
              const entryY = core.y + hubBox.height / 2 + 15;
              d = `M ${start.x} ${start.y} H ${rail + 10} Q ${rail} ${start.y} ${rail} ${start.y - 10} V ${entryY + 32} Q ${rail} ${entryY + 12} ${rail + 20} ${entryY + 12} H ${core.x - 20} Q ${core.x} ${entryY + 12} ${core.x} ${entryY - 8} V ${entryY - 15}`;
            } else {
              const direction = left ? 1 : -1;
              const entryOffset = [-52, -30, 0, 30, 52][row];
              const entryX = core.x - direction * (row === 2 ? 82 : Math.abs(row - 2) === 1 ? 76 : 64);
              const entryY = core.y + entryOffset;
              const shoulder = start.x + direction * Math.min(36, Math.abs(entryX - start.x) * 0.25);
              const elbow = entryX - direction * 27;
              d = `M ${start.x} ${start.y} H ${shoulder} C ${elbow} ${start.y} ${shoulder} ${entryY} ${entryX} ${entryY}`;
            }
          }
        }

        const path = pathRefs.current[index];
        const light = lightRefs.current[index];
        const dashes = dashesRefs.current[index];
        const port = portRefs.current[index];
        const node = nodeRefs.current[index];
        const motion = motionRefs.current[index];
        const fade = fadeRefs.current[index];

        if (path && light && dashes && port && node && motion && fade) {
          path.setAttribute("d", d);
          light.setAttribute("d", d);
          dashes.setAttribute("d", dashesD);

          const length = path.getTotalLength();
          const endpoint = path.getPointAtLength(length);
          const nodepoint = path.getPointAtLength(length * (row === 2 ? 0.52 : 0.66));

          port.setAttribute("cx", String(endpoint.x));
          port.setAttribute("cy", String(endpoint.y));
          node.setAttribute("cx", String(nodepoint.x));
          node.setAttribute("cy", String(nodepoint.y));
          node.setAttribute("r", desktop ? (row === 2 ? "2.6" : "3.5") : "2.5");

          const duration = mobile
            ? Math.max(1500, Math.min(3300, length * 1.25))
            : [1950, 1750, 1500, 1850, 2050][row];
          durations.current[index] = duration;
          motion.setAttribute("dur", `${duration}ms`);
          fade.setAttribute("dur", `${duration}ms`);
        }
      });

      if (resume || !isHoveredRef.current) syncPlayback();
    };

    const io = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      syncPlayback();
    });
    io.observe(map);

    const ro = new ResizeObserver(() => {
      layoutConnections();
    });
    ro.observe(map);

    const onVisibilityChange = () => syncPlayback();
    document.addEventListener("visibilitychange", onVisibilityChange);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => syncPlayback();
    mediaQuery.addEventListener("change", onMotionChange);

    // Hover handler: pause on hover, resume on leave (matching ConnectedWorkflow above)
    const onMouseEnter = () => {
      isHoveredRef.current = true;
      stop();
    };
    const onMouseLeave = () => {
      isHoveredRef.current = false;
      syncPlayback();
    };
    map.addEventListener("mouseenter", onMouseEnter);
    map.addEventListener("mouseleave", onMouseLeave);

    document.fonts.ready.then(layoutConnections);
    layoutConnections();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      mediaQuery.removeEventListener("change", onMotionChange);
      map.removeEventListener("mouseenter", onMouseEnter);
      map.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <section className="relative py-[20px] bg-white overflow-hidden flex flex-col items-center" id="integrations">
      <style>{CSS_STYLES}</style>

      {/* Main Section Container matching ConnectedWorkflow */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-3">
            Built-in ecosystem on which <br className="hidden sm:inline" />
            your business is <span className="text-[#006fc9]">built-on</span>.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Native, bidirectional API connectors connect your banks, payment gateways, online storefronts, couriers, and chat apps directly to your central Mossie ERP ledger.
          </p>
        </div>

        {/* Flexible container matching flow-viewport */}
        <div className="flow-viewport w-full" tabIndex={0} aria-label="Mossie ERP integration ecosystem">
          <div ref={mapRef} className="integration-map" aria-label="Mossie ERP integration ecosystem">
            <svg ref={svgRef} className="connections" viewBox="0 0 2048 735" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="line-blue" gradientUnits="userSpaceOnUse" x1="650" y1="0" x2="960" y2="0">
                  <stop stopColor="#8eb9ff" stopOpacity=".32" />
                  <stop offset=".48" stopColor="#006fc9" stopOpacity=".57" />
                  <stop offset="1" stopColor="#006fc9" stopOpacity=".66" />
                </linearGradient>
                <linearGradient id="line-blue-right" gradientUnits="userSpaceOnUse" x1="1398" y1="0" x2="1088" y2="0">
                  <stop stopColor="#8eb9ff" stopOpacity=".32" />
                  <stop offset=".48" stopColor="#006fc9" stopOpacity=".57" />
                  <stop offset="1" stopColor="#006fc9" stopOpacity=".66" />
                </linearGradient>
                <linearGradient id="particle-trail">
                  <stop stopColor="#49a6ff" stopOpacity="0" />
                  <stop offset="1" stopColor="#006fc9" stopOpacity=".65" />
                </linearGradient>
                <filter id="particle-glow" x="-150%" y="-150%" width="400%" height="400%">
                  <feGaussianBlur stdDeviation="2.7" />
                </filter>
              </defs>
              <g id="connection-paths">
                {GROUPS.map((group, index) => {
                  const row = index % 5;
                  const left = group.side === "left";
                  const initialD = left ? LEFT_PATHS[row] : RIGHT_PATHS[row];
                  const start = left ? [659, 647, 689, 718, 689][row] : 1377;
                  const end = left ? Math.min(start + 95, 785) : 1270;
                  const initialDashesD = `M ${start} ${ROWS[row]} H ${end}`;

                  return (
                    <g
                      key={group.id}
                      ref={(el) => { connectionRefs.current[index] = el; }}
                      className={`connection ${group.side}-path`}
                      data-category={group.id}
                    >
                      <path
                        ref={(el) => { pathRefs.current[index] = el; }}
                        id={`route-${group.id}`}
                        className="connection-track"
                        d={initialD}
                      />
                      <path
                        ref={(el) => { dashesRefs.current[index] = el; }}
                        className="connection-dashes"
                        d={initialDashesD}
                      />
                      <path
                        ref={(el) => { lightRefs.current[index] = el; }}
                        className="connection-light"
                        d={initialD}
                      />
                      <circle
                        ref={(el) => { nodeRefs.current[index] = el; }}
                        className="route-node"
                        r={3.5}
                      />
                      <circle
                        ref={(el) => { portRefs.current[index] = el; }}
                        className="port"
                        r={3.3}
                      />
                      <g className="data-pulse">
                        <circle r="7" fill="#006fc9" opacity=".32" filter="url(#particle-glow)" />
                        <rect x="-20" y="-1.5" width="20" height="3" rx="1.5" fill="url(#particle-trail)" />
                        <circle r="3.1" fill="#006fc9" />
                        <circle r="1.15" fill="#c9f2ff" />
                        <animateMotion
                          ref={(el) => { motionRefs.current[index] = el as unknown as SVGAnimateMotionElement | null; }}
                          begin="indefinite"
                          dur="1.9s"
                          fill="remove"
                          rotate="auto"
                          calcMode="paced"
                        >
                          <mpath href={`#route-${group.id}`} />
                        </animateMotion>
                        <animate
                          ref={(el) => { fadeRefs.current[index] = el as unknown as SVGAnimateElement | null; }}
                          attributeName="opacity"
                          begin="indefinite"
                          dur="1.9s"
                          values="0;1;1;0"
                          keyTimes="0;0.025;0.96;1"
                          fill="remove"
                        />
                      </g>
                    </g>
                  );
                })}
              </g>
            </svg>

            <div
              ref={hubRef}
              className="hub"
              role="img"
              aria-label="Mossie ERP central hub, receiving data from all ten integration categories"
            >
              <div className="hub-halo" />
              <div className="hub-ring ring-outer" />
              <div className="hub-ring ring-middle" />
              <div className="hub-ring ring-inner" />
              <div className="hub-ring ring-close" />
              <div className="hub-wave" />
              <div className="hub-card">
                <img
                  className="hub-logo"
                  src="/images/logo/mossierplogo"
                  alt="Mossie ERP"
                />
              </div>
              <div className="hub-caption" aria-hidden="true">
                <strong>Mossie ERP</strong>
                <span>Every system. One connection.</span>
              </div>
            </div>

            <div id="integration-groups" style={{ display: "contents" }}>
              {GROUPS.map((group, index) => (
                <section
                  key={group.id}
                  ref={(el) => { sectionRefs.current[index] = el; }}
                  className={`integration-group side-${group.side}`}
                  id={`group-${group.id}`}
                  style={{ "--row-y": `${(ROWS[index % 5] / 735) * 100}%` } as React.CSSProperties}
                  aria-labelledby={`label-${group.id}`}
                >
                  <h2 className="category" id={`label-${group.id}`}>
                    <span
                      ref={(el) => { dotRefs.current[index] = el; }}
                      className="category-dot"
                      aria-hidden="true"
                    />
                    {group.label}
                  </h2>
                  <ul className="apps">
                    {group.apps.map(([name, icon, size = ""], cardIndex) => (
                      <li
                        key={name}
                        className="app-card"
                        style={{ "--card-index": cardIndex } as React.CSSProperties}
                      >
                        <span
                          className={`app-icon ${size}`}
                          aria-hidden="true"
                          dangerouslySetInnerHTML={{ __html: BRAND_ICONS[icon] || "" }}
                        />
                        <span className="app-name">{name}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
