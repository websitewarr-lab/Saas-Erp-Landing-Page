"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCheck,
  ChevronDown,
  Clock,
  Layers3,
  Loader2,
  Lock,
  Mail,
  Phone,
  User,
  Users,
  X,
} from "lucide-react";
import { POPUP_CTA_MODULES, POPUP_CTA_COPY, type PopupCtaModule, type PopupCtaRequest } from "./popupCtaConfig";
import styles from "./PopupCtaModal.module.css";

const TABLET_MODULE_METRICS: Record<
  string,
  { title: string; rev: string; revUp: string; ord: string; ordUp: string }
> = {
  Dashboard: { title: "Overview", rev: "₹ 39,00,000", revUp: "↑ 6.2%", ord: "420", ordUp: "↑ 12%" },
  Sales: { title: "Sales Pipeline", rev: "₹ 44,50,000", revUp: "↑ 9.4%", ord: "518", ordUp: "↑ 15%" },
  Purchase: { title: "Procurement", rev: "₹ 18,20,000", revUp: "↓ 3.1%", ord: "164", ordUp: "↑ 8%" },
  Inventory: { title: "Stock Status", rev: "₹ 62,10,000", revUp: "↑ 4.8%", ord: "2,854", ordUp: "↑ 6.3%" },
  Production: { title: "Shop Floor", rev: "96.4% Yield", revUp: "↑ 2.1%", ord: "84 Jobs", ordUp: "↑ 11%" },
  Accounting: { title: "Cash & GST", rev: "₹ 42,80,000", revUp: "↑ 7.5%", ord: "100% Filed", ordUp: "On Time" },
};

const TABLET_PERIODS = ["This Month", "Last Quarter", "This Year"];
type TabletModuleKey = "Dashboard" | "Sales" | "Purchase" | "Inventory" | "Production" | "Accounting";

interface ContactFields {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  company: string;
  teamSize: string;
  preferredDate: string;
  preferredTime: string;
}

function formatTime12h(timeStr: string): string {
  if (!timeStr) return "";
  const [hoursStr, minutesStr] = timeStr.split(":");
  const hours = parseInt(hoursStr, 10);
  if (isNaN(hours)) return timeStr;
  const ampm = hours >= 12 ? "PM" : "AM";
  const h12 = hours % 12 || 12;
  return `${h12}:${minutesStr || "00"} ${ampm}`;
}

type FieldErrors = Partial<Record<"firstName" | "lastName" | "mobile" | "email" | "modules", string>>;

export default function PopupCtaModal({
  request,
  onClose,
}: {
  request: PopupCtaRequest;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const successTitleRef = useRef<HTMLHeadingElement>(null);
  const pointerOutside = useRef(false);

  const [fields, setFields] = useState<ContactFields>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    company: "",
    teamSize: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [minDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [modules, setModules] = useState<PopupCtaModule[]>(
    request.module ? [request.module] : []
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeTabletModule, setActiveTabletModule] =
    useState<TabletModuleKey>("Dashboard");
  const [tabletPeriodIndex, setTabletPeriodIndex] = useState(0);

  const currentMetrics =
    TABLET_MODULE_METRICS[activeTabletModule] || TABLET_MODULE_METRICS.Dashboard;

  const copy = POPUP_CTA_COPY[request.intent];
  const selectedNames = POPUP_CTA_MODULES.filter((module) =>
    modules.includes(module.id)
  ).map((module) => module.name);

  const selection =
    modules.length === 8
      ? "Entire platform · All 8 modules"
      : modules.length > 1
      ? `${modules.length} modules selected`
      : selectedNames[0] || "Select your modules";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.classList.add("modal-locked");
    document.body.classList.add("modal-locked");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) {
      document.body.style.paddingRight = `${
        (parseFloat(getComputedStyle(document.body).paddingRight) || 0) + scrollbar
      }px`;
    }
    dialog.showModal();
    firstNameRef.current?.focus({ preventScroll: true });

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as Node | null;
      if (!target || (!dialog.contains(target) && target !== dialog)) {
        e.preventDefault();
        return;
      }
      const canScroll = dialog.scrollHeight > dialog.clientHeight;
      if (!canScroll) {
        e.preventDefault();
        return;
      }
      const isScrollingUp = e.deltaY < 0;
      const isScrollingDown = e.deltaY > 0;
      const isAtTop = dialog.scrollTop <= 0;
      const isAtBottom = dialog.scrollTop + dialog.clientHeight >= dialog.scrollHeight - 1;
      if ((isScrollingUp && isAtTop) || (isScrollingDown && isAtBottom)) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const target = e.target as Node | null;
      if (!target || (!dialog.contains(target) && target !== dialog)) {
        e.preventDefault();
        return;
      }
      const canScroll = dialog.scrollHeight > dialog.clientHeight;
      if (!canScroll) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false, capture: true });

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true });
      window.removeEventListener("touchmove", handleTouchMove, { capture: true });
      dialog.close();
      document.documentElement.classList.remove("modal-locked");
      document.body.classList.remove("modal-locked");
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
    };
  }, []);

  useEffect(() => {
    if (submitted) successTitleRef.current?.focus();
  }, [submitted]);

  function updateField(field: keyof ContactFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    if (field === "firstName" || field === "lastName" || field === "email" || field === "mobile") {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function updateModules(next: PopupCtaModule[]) {
    setModules(next);
    if (next.length) {
      setErrors((current) => ({ ...current, modules: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setApiError(null);

    const nextErrors: FieldErrors = {};
    if (!fields.firstName.trim()) nextErrors.firstName = "Please enter your first name.";
    if (!fields.lastName.trim()) nextErrors.lastName = "Please enter your last name.";

    const mobile = fields.mobile.trim();
    const digits = mobile.replace(/\D/g, "");
    if (!/^\+?[\d\s().-]+$/.test(mobile) || digits.length < 7 || digits.length > 15) {
      nextErrors.mobile = "Enter a valid phone number with country code.";
    }
    const emailInput = event.currentTarget.elements.namedItem("email") as HTMLInputElement;
    if (!fields.email.trim() || !emailInput.validity.valid) {
      nextErrors.email = "Please enter a valid work email address.";
    }
    if (!modules.length) {
      nextErrors.modules = "Choose at least one module to continue.";
    }

    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      if (firstError === "modules" && detailsRef.current) detailsRef.current.open = true;
      document.getElementById(`enquiry-${firstError}`)?.focus();
      return;
    }

    const fullName = `${fields.firstName.trim()} ${fields.lastName.trim()}`.trim();

    const defaultNotes =
      request.intent === "quote"
        ? "Interested in enterprise pricing and custom quote."
        : request.intent === "trial"
        ? "Interested in 14-day sandbox trial setup."
        : "Interested in complete ERP demo and enterprise pricing.";

    const payload: Record<string, unknown> = {
      full_name: fullName,
      phone: fields.mobile.trim(),
      email: fields.email.trim(),
    };

    if (fields.company.trim()) {
      payload.company_name = fields.company.trim();
    }
    if (fields.teamSize) {
      payload.team_size = fields.teamSize;
    }
    if (selectedNames.length > 0) {
      payload.modules = selectedNames;
    }
    if (fields.preferredDate) {
      payload.preferred_date = fields.preferredDate;
    }
    if (fields.preferredTime) {
      payload.preferred_time = fields.preferredTime;
    }
    payload.notes = defaultNotes;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/v1/public/demo-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && (!data || data.success !== false)) {
        setSubmitted(true);
      } else {
        setApiError(
          data?.message ||
            "Unable to submit demo request right now. Please check your connection or contact support@mossierp.com."
        );
      }
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setApiError("Network connection error. Please try again or reach out to support@mossierp.com.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function isOutside(event: PointerEvent<HTMLDialogElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    return (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    );
  }

  function handleDialogKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), summary, [tabindex="0"]'
      )
    ).filter(
      (element) =>
        element.getClientRects().length > 0 &&
        (!element.closest("details:not([open])") || element.tagName === "SUMMARY")
    );
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  const fullNameDisplay = `${fields.firstName.trim()} ${fields.lastName.trim()}`.trim();

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={submitted ? "enquiry-ready-title" : "enquiry-title"}
      aria-describedby={submitted ? "enquiry-ready-description" : "enquiry-description"}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={handleDialogKeyDown}
      onPointerDown={(event) => {
        pointerOutside.current = isOutside(event);
      }}
      onPointerUp={(event) => {
        if (pointerOutside.current && isOutside(event)) onClose();
        pointerOutside.current = false;
      }}
    >
      <div className={styles.layout}>
        {/* Left Tech Story Sidebar with Light Surface & 3D Interactive Tablet */}
        <aside className={styles.story} aria-label="Your Mossie ERP walkthrough">
          {/* Background Soft Layered Wave Shapes */}
          <svg className="pointer-events-none absolute top-0 right-0 w-[290px] h-[380px] z-0" viewBox="0 0 290 380" fill="none">
            <path d="M150 -20 C210 50, 280 120, 290 240 L290 -20 Z" fill="#dbeafe" fillOpacity="0.55" />
            <path d="M290 20 C190 85, 160 200, 230 350 L290 350 L290 20 Z" fill="#e0f2fe" fillOpacity="0.65" />
            <path d="M290 90 C215 135, 200 220, 255 340 L290 340 Z" fill="#bae6fd" fillOpacity="0.35" />
          </svg>

          {/* Right Plus-Grid Matrix Behind Tablet */}
          <svg className="pointer-events-none absolute bottom-16 right-3 w-32 h-44 z-0 opacity-80" viewBox="0 0 128 176" fill="none">
            <defs>
              <pattern id="popupPlusGridPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M8 5v6M5 8h6" stroke="#93c5fd" strokeWidth="1.2" strokeLinecap="round" />
              </pattern>
            </defs>
            <rect width="128" height="176" fill="url(#popupPlusGridPattern)" />
          </svg>

          {/* Bottom-Left Orbit Ring & Soft Blue Wave Hills Pedestal */}
          <svg className="pointer-events-none absolute bottom-0 left-0 w-full h-[230px] z-0" viewBox="0 0 480 230" fill="none">
            <path d="M -15 90 C 20 30, 105 25, 175 60" stroke="#bfdbfe" strokeWidth="1.4" fill="none" opacity="0.85" />
            <path d="M -20 230 C 45 170, 165 170, 245 230 Z" fill="#dbeafe" fillOpacity="0.7" />
            <path d="M 195 230 C 280 160, 410 160, 500 230 Z" fill="#cbe4fe" fillOpacity="0.75" />
            <ellipse cx="320" cy="185" rx="155" ry="32" fill="#a8d4fd" fillOpacity="0.45" />
          </svg>

          {/* Desktop Sidebar Layout */}
          <div className={styles.desktopStory}>
            {/* Top Content Block: Header + Headline + 3 Feature Highlights */}
            <div className="flex flex-col">
              {/* 1. TOP BRAND HEADER: MOSSIE ERP | MADE FOR YOUR BUSINESS */}
              <div className="relative z-10 flex items-center gap-3.5">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/images/logo/mossierplogo.webp"
                    alt="Mossie ERP Logo"
                    width={54}
                    height={36}
                    priority
                    className="h-9 w-auto object-contain"
                  />
                  <div className="text-[19px] leading-none tracking-tight">
                    <span className="font-extrabold text-[#0B192C]">Mossie </span>
                    <span className="font-bold text-[#006fc9]">ERP</span>
                  </div>
                </div>

                <div className="h-8 w-[1.5px] bg-slate-300/80" />

                <div className="text-[10px] font-bold uppercase tracking-[0.16em] leading-[1.35] text-[#475569]">
                  MADE FOR YOUR<br />
                  BUSINESS
                </div>
              </div>

              {/* 2. HERO HEADLINE & 3-LINE SUBTITLE */}
              <div className="relative z-10 mt-7 sm:mt-8">
                <h2 className="text-[36px] sm:text-[39px] xl:text-[42px] font-black text-[#081a38] leading-[1.12] tracking-[-0.03em] m-0 font-sans">
                  Your business.<br />
                  <span className="bg-gradient-to-r from-[#006fc9] via-[#0082dc] to-[#005fae] bg-clip-text text-transparent">
                    One clear view.
                  </span>
                </h2>

                <p className="mt-4 text-[14.5px] sm:text-[15px] text-[#475569] font-normal leading-[1.6] max-w-[420px] m-0">
                  Bring your people, processes, and possibilities together. Get a personalized walkthrough of Mossie ERP.
                </p>
              </div>

              {/* 3. 3-COLUMN HORIZONTAL FEATURE ITEMS ROW */}
              <div className="relative z-10 mt-8 sm:mt-9 grid grid-cols-3 gap-3.5 sm:gap-4">
                {/* Col 1: See It in action */}
                <div className="flex flex-col items-start">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#f0f7ff] border border-[#cde2fc] shadow-[0_3px_10px_rgba(2,132,199,0.09)] flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-[#006fc9]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16V5" />
                    </svg>
                  </div>
                  <div className="text-[13.5px] sm:text-[14px] font-bold text-[#091e3a] leading-tight">
                    See It in action
                  </div>
                  <p className="text-[11.5px] sm:text-[12px] text-[#475569] leading-[1.45] mt-1.5 m-0">
                    Explore real workflows for your business.
                  </p>
                </div>

                {/* Col 2: Discuss your needs */}
                <div className="flex flex-col items-start">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#f0f7ff] border border-[#cde2fc] shadow-[0_3px_10px_rgba(2,132,199,0.09)] flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-[#006fc9]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                  </div>
                  <div className="text-[13.5px] sm:text-[14px] font-bold text-[#091e3a] leading-tight">
                    Discuss your needs
                  </div>
                  <p className="text-[11.5px] sm:text-[12px] text-[#475569] leading-[1.45] mt-1.5 m-0">
                    Get module guidance from our experts.
                  </p>
                </div>

                {/* Col 3: Plan your next step */}
                <div className="flex flex-col items-start">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#f0f7ff] border border-[#cde2fc] shadow-[0_3px_10px_rgba(2,132,199,0.09)] flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-[#006fc9]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <div className="text-[13.5px] sm:text-[14px] font-bold text-[#091e3a] leading-tight">
                    Plan your next step
                  </div>
                  <p className="text-[11.5px] sm:text-[12px] text-[#475569] leading-[1.45] mt-1.5 m-0">
                    Find the right setup for your team.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. BOTTOM 3D PERSPECTIVE TABLET DASHBOARD + FLOATING "8 MODULES" CARD */}
            <div className="relative z-10 mt-auto pt-4 pb-2 w-full">
              <div className={`${styles.tablet3dWrap} relative mx-auto w-full max-w-[450px]`}>
                {/* 3D White Tablet Shell */}
                <div className={`${styles.tablet3dCard} rounded-[22px] bg-gradient-to-b from-white to-[#edf5fd] p-2 sm:p-2.5 border border-white`}>
                  <div className="rounded-[16px] bg-white border border-slate-200/80 overflow-hidden grid grid-cols-12 shadow-xs">
                    {/* Left Mini Sidebar (4 cols) */}
                    <div className="col-span-4 bg-[#f8fbff] p-2.5 sm:p-3 border-r border-slate-100/90 flex flex-col justify-between">
                      <div>
                        {/* Mini Logo Header */}
                        <div className="flex items-center gap-1.5 mb-2.5 px-0.5">
                          <Image
                            src="/images/logo/mossierplogo.webp"
                            alt="Mossie ERP"
                            width={20}
                            height={14}
                            className="h-3.5 w-auto object-contain"
                          />
                          <span className="text-[10px] leading-none tracking-tight">
                            <strong className="font-extrabold text-[#0b2545]">Mossie</strong>
                            <span className="font-semibold text-[#006fc9]"> ERP</span>
                          </span>
                        </div>

                        {/* 6 Interactive Sidebar Menu Items */}
                        <div className="space-y-1 text-[9.5px]">
                          {(["Dashboard", "Sales", "Purchase", "Inventory", "Production", "Accounting"] as TabletModuleKey[]).map((key) => {
                            const isActive = activeTabletModule === key;
                            return (
                              <button
                                key={key}
                                type="button"
                                onClick={() => setActiveTabletModule(key)}
                                className={`w-full text-left font-semibold px-2 py-1.5 rounded-[7px] flex items-center gap-1.5 transition-all duration-150 cursor-pointer ${
                                  isActive
                                    ? "bg-[#e0f0ff] text-[#006fc9] font-bold shadow-2xs"
                                    : "text-slate-600 hover:bg-slate-100/80 font-medium"
                                }`}
                              >
                                {key === "Dashboard" && (
                                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" />
                                  </svg>
                                )}
                                {key === "Sales" && (
                                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h2l2.2 11h10.6l2-8H6" />
                                  </svg>
                                )}
                                {key === "Purchase" && (
                                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 11H4L5 9z" />
                                  </svg>
                                )}
                                {key === "Inventory" && (
                                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                  </svg>
                                )}
                                {key === "Production" && (
                                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                  </svg>
                                )}
                                {key === "Accounting" && (
                                  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="7" r="3.5" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
                                  </svg>
                                )}
                                <span className="truncate">{key}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Right Main Overview Area (8 cols) */}
                    <div className="col-span-8 bg-white p-3 sm:p-3.5 flex flex-col justify-between">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[12.5px] sm:text-[13px] font-extrabold text-[#091e3a]">
                          {currentMetrics.title}
                        </span>
                        <button
                          type="button"
                          onClick={() => setTabletPeriodIndex((prev) => (prev + 1) % TABLET_PERIODS.length)}
                          className="text-[9px] font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-md px-2 py-0.5 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>{TABLET_PERIODS[tabletPeriodIndex]}</span>
                          <span className="text-[7.5px] text-slate-400">▼</span>
                        </button>
                      </div>

                      {/* 2 KPI Cards */}
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="bg-[#f9fbff] border border-slate-100 rounded-lg p-2 sm:p-2.5 flex items-end justify-between gap-1 shadow-2xs">
                          <div>
                            <div className="text-[8.5px] font-medium text-slate-400">Total Revenue</div>
                            <div className="text-[12.5px] sm:text-[13.5px] font-extrabold text-[#091e3a] tracking-tight mt-0.5">
                              {currentMetrics.rev}
                            </div>
                            <div className="text-[8px] sm:text-[8.5px] font-bold text-[#10b981] mt-0.5">
                              {currentMetrics.revUp}
                            </div>
                          </div>
                          <div className="flex items-end gap-[2px] h-5 sm:h-5.5 shrink-0">
                            <span className="w-[3px] h-2 bg-[#bfdbfe] rounded-t-xs" />
                            <span className="w-[3px] h-3 bg-[#93c5fd] rounded-t-xs" />
                            <span className="w-[3px] h-4.5 bg-[#60a5fa] rounded-t-xs" />
                            <span className="w-[3px] h-5 sm:h-5.5 bg-[#006fc9] rounded-t-xs" />
                          </div>
                        </div>

                        <div className="bg-[#f9fbff] border border-slate-100 rounded-lg p-2 sm:p-2.5 flex items-end justify-between gap-1 shadow-2xs">
                          <div>
                            <div className="text-[8.5px] font-medium text-slate-400">Total Orders</div>
                            <div className="text-[12.5px] sm:text-[13.5px] font-extrabold text-[#091e3a] tracking-tight mt-0.5">
                              {currentMetrics.ord}
                            </div>
                            <div className="text-[8px] sm:text-[8.5px] font-bold text-[#10b981] mt-0.5">
                              {currentMetrics.ordUp}
                            </div>
                          </div>
                          <div className="flex items-end gap-[2px] h-5 sm:h-5.5 shrink-0">
                            <span className="w-[3px] h-1.5 bg-[#bfdbfe] rounded-t-xs" />
                            <span className="w-[3px] h-2.5 bg-[#93c5fd] rounded-t-xs" />
                            <span className="w-[3px] h-4 bg-[#60a5fa] rounded-t-xs" />
                            <span className="w-[3px] h-5 sm:h-5.5 bg-[#006fc9] rounded-t-xs" />
                          </div>
                        </div>
                      </div>

                      {/* Sales Trend Chart */}
                      <div className="bg-[#fbfdff] border border-slate-100 rounded-lg p-2 sm:p-2.5 shadow-2xs">
                        <div className="text-[9.5px] sm:text-[10px] font-extrabold text-[#091e3a] mb-1">Sales Trend</div>
                        <svg viewBox="0 0 215 68" className="w-full h-auto overflow-visible select-none">
                          <defs>
                            <linearGradient id="popupSalesTrendGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#006fc9" stopOpacity="0.32" />
                              <stop offset="100%" stopColor="#006fc9" stopOpacity="0.02" />
                            </linearGradient>
                          </defs>
                          <text x="2" y="17" fontSize="7" fill="#94a3b8">80</text>
                          <line x1="14" y1="15" x2="210" y2="15" stroke="#f1f5f9" strokeWidth="1" />
                          <text x="2" y="36" fontSize="7" fill="#94a3b8">40</text>
                          <line x1="14" y1="34" x2="210" y2="34" stroke="#f1f5f9" strokeWidth="1" />
                          <line x1="14" y1="52" x2="210" y2="52" stroke="#e2e8f0" strokeWidth="1" />

                          <path
                            d="M 20 46 C 45 46, 65 44, 85 43 C 105 42, 115 30, 135 26 C 150 22, 160 12, 175 14 C 185 15, 195 19, 205 21 L 205 52 L 20 52 Z"
                            fill="url(#popupSalesTrendGrad)"
                          />
                          <path
                            d="M 20 46 C 45 46, 65 44, 85 43 C 105 42, 115 30, 135 26 C 150 22, 160 12, 175 14 C 185 15, 195 19, 205 21"
                            fill="none"
                            stroke="#006fc9"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                          />

                          <g fontSize="7.5" fontWeight="500" fill="#64748b" textAnchor="middle">
                            <text x="45" y="64">Feb</text>
                            <text x="85" y="64">Mar</text>
                            <text x="125" y="64">Apr</text>
                            <text x="165" y="64">May</text>
                            <text x="195" y="64">Jun</text>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom-Left Badge: "8 Modules / One Connected Platform" */}
                <div className="absolute -bottom-3.5 -left-2 z-20 bg-white rounded-2xl px-4 py-2.5 shadow-[0_14px_32px_rgba(9,30,58,0.18)] border border-white flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f0f7ff] text-[#006fc9] flex items-center justify-center shrink-0 shadow-2xs">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L3 8l9 5 9-5-9-5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12.5l9 5 9-5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l9 5 9-5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[13px] sm:text-[13.5px] font-extrabold text-[#091e3a] leading-tight">
                      8 Modules
                    </div>
                    <div className="text-[10.5px] font-medium text-[#475569] leading-tight mt-0.5">
                      One Connected Platform
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smartphone Top Hero Banner Layout */}
          <div className={styles.mobileStory}>
            <div className={styles.mobileBrandRow}>
              <div className={styles.mobileBrand}>
                <Image
                  src="/images/logo/mossierplogo.webp"
                  alt="Mossie ERP"
                  width={28}
                  height={19}
                  className={styles.mobileBrandLogo}
                />
                <span className={styles.mobileBrandName}>
                  Mossie <span>ERP</span>
                </span>
              </div>
            </div>
            <p className={styles.storyEyebrow}>POWERING MODERN ENTERPRISES</p>
            <h2 className={styles.storyMobileTitle}>Your business. One clear view.</h2>
            <p className={styles.storyMobileDesc}>
              Bring your people, processes, and possibilities together. Get a personalized walkthrough of Mossie ERP.
            </p>
          </div>
        </aside>

        {/* Right Action Form */}
        <div className={styles.formPane}>
          {submitted ? (
            <section className={styles.ready}>
              <div className={styles.readyHeaderRow}>
                <div className={styles.readyIcon}>
                  <CheckCheck size={28} />
                </div>
                <button
                  type="button"
                  className={styles.close}
                  onClick={onClose}
                  aria-label="Close enquiry popup"
                >
                  <X size={16} />
                </button>
              </div>
              <p className={styles.eyebrow}>A calmer start begins here</p>
              <h2 id="enquiry-ready-title" ref={successTitleRef} tabIndex={-1}>
                Enquiry submitted successfully.
              </h2>
              <p id="enquiry-ready-description">
                Thank you, <strong>{fullNameDisplay || "Guest"}</strong>, for your interest in Mossie ERP. Our product architecture team will contact you shortly to schedule your demo.
              </p>
              <div className={styles.requestSummary}>
                <span>Your selected modules</span>
                <p>{selectedNames.join(" · ")}</p>
                {(fields.preferredDate || fields.preferredTime) && (
                  <div className={styles.scheduleSummary}>
                    <span>Preferred schedule</span>
                    <p>
                      {[
                        fields.preferredDate,
                        fields.preferredTime ? formatTime12h(fields.preferredTime) : "",
                      ]
                        .filter(Boolean)
                        .join(" at ")}
                    </p>
                  </div>
                )}
              </div>
              <button type="button" className={styles.submit} onClick={onClose}>
                Continue exploring <ArrowRight size={17} />
              </button>
            </section>
          ) : (
            <>
              <div className={styles.formHeaderRow}>
                <div className={styles.formHeaderContent}>
                  <p className={styles.eyebrow}>{copy.eyebrow}</p>
                  <h2 id="enquiry-title" className={styles.title}>
                    {copy.title}
                  </h2>
                </div>
                <button
                  type="button"
                  className={styles.close}
                  onClick={onClose}
                  aria-label="Close enquiry popup"
                >
                  <X size={16} />
                </button>
              </div>

              <p id="enquiry-description" className={styles.intro}>
                {copy.description}
              </p>

              {apiError && (
                <div className={styles.apiError} role="alert">
                  {apiError}
                </div>
              )}

              <form noValidate onSubmit={handleSubmit}>
                <div className={styles.fields}>
                  {/* First Name */}
                  <div className={styles.field}>
                    <label htmlFor="enquiry-firstName">
                      First name <span aria-hidden="true">*</span>
                    </label>
                    <div className={styles.inputWrap}>
                      <User className={styles.inputIcon} size={15} aria-hidden="true" />
                      <input
                        ref={firstNameRef}
                        id="enquiry-firstName"
                        name="firstName"
                        autoComplete="given-name"
                        placeholder="First name"
                        value={fields.firstName}
                        onChange={(event) => updateField("firstName", event.target.value)}
                        maxLength={50}
                        required
                        disabled={isSubmitting}
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? "enquiry-firstName-error" : undefined}
                      />
                    </div>
                    {errors.firstName && (
                      <p id="enquiry-firstName-error" className={styles.error}>
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className={styles.field}>
                    <label htmlFor="enquiry-lastName">
                      Last name <span aria-hidden="true">*</span>
                    </label>
                    <div className={styles.inputWrap}>
                      <User className={styles.inputIcon} size={15} aria-hidden="true" />
                      <input
                        id="enquiry-lastName"
                        name="lastName"
                        autoComplete="family-name"
                        placeholder="Last name"
                        value={fields.lastName}
                        onChange={(event) => updateField("lastName", event.target.value)}
                        maxLength={50}
                        required
                        disabled={isSubmitting}
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? "enquiry-lastName-error" : undefined}
                      />
                    </div>
                    {errors.lastName && (
                      <p id="enquiry-lastName-error" className={styles.error}>
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className={styles.field}>
                    <label htmlFor="enquiry-mobile">
                      Phone number <span aria-hidden="true">*</span>
                    </label>
                    <div className={styles.inputWrap}>
                      <Phone className={styles.inputIcon} size={15} aria-hidden="true" />
                      <input
                        id="enquiry-mobile"
                        name="mobile"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={fields.mobile}
                        onChange={(event) => updateField("mobile", event.target.value)}
                        maxLength={25}
                        required
                        disabled={isSubmitting}
                        aria-invalid={!!errors.mobile}
                        aria-describedby={errors.mobile ? "enquiry-mobile-error" : undefined}
                      />
                    </div>
                    {errors.mobile && (
                      <p id="enquiry-mobile-error" className={styles.error}>
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className={styles.field}>
                    <label htmlFor="enquiry-email">
                      Work email <span aria-hidden="true">*</span>
                    </label>
                    <div className={styles.inputWrap}>
                      <Mail className={styles.inputIcon} size={15} aria-hidden="true" />
                      <input
                        id="enquiry-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="name@company.com"
                        value={fields.email}
                        onChange={(event) => updateField("email", event.target.value)}
                        maxLength={254}
                        required
                        disabled={isSubmitting}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "enquiry-email-error" : undefined}
                      />
                    </div>
                    {errors.email && (
                      <p id="enquiry-email-error" className={styles.error}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className={styles.field}>
                    <label htmlFor="enquiry-company">
                      Company name <small>(optional)</small>
                    </label>
                    <div className={styles.inputWrap}>
                      <Building2 className={styles.inputIcon} size={15} aria-hidden="true" />
                      <input
                        id="enquiry-company"
                        name="company"
                        autoComplete="organization"
                        placeholder="Company name"
                        value={fields.company}
                        onChange={(event) => updateField("company", event.target.value)}
                        maxLength={120}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Team Size */}
                  <div className={styles.field}>
                    <label htmlFor="enquiry-team-size">
                      Team size <small>(optional)</small>
                    </label>
                    <div className={`${styles.inputWrap} ${styles.selectWrap}`}>
                      <Users className={styles.inputIcon} size={15} aria-hidden="true" />
                      <select
                        id="enquiry-team-size"
                        name="teamSize"
                        value={fields.teamSize}
                        onChange={(event) => updateField("teamSize", event.target.value)}
                        disabled={isSubmitting}
                      >
                        <option value="">Select team size</option>
                        <option>1–10 employees</option>
                        <option>11–50 employees</option>
                        <option>51–200 employees</option>
                        <option>201–500 employees</option>
                        <option>501+ employees</option>
                      </select>
                      <ChevronDown className={styles.selectArrow} size={14} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className={styles.field}>
                    <label htmlFor="enquiry-date">
                      Preferred date <small>(optional)</small>
                    </label>
                    <div className={styles.inputWrap}>
                      <Calendar className={styles.inputIcon} size={15} aria-hidden="true" />
                      <input
                        id="enquiry-date"
                        name="preferredDate"
                        type="date"
                        min={minDate || undefined}
                        value={fields.preferredDate}
                        onChange={(event) => updateField("preferredDate", event.target.value)}
                        disabled={isSubmitting}
                        className={styles.dateInput}
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div className={styles.field}>
                    <label htmlFor="enquiry-time">
                      Preferred time <small>(optional)</small>
                    </label>
                    <div className={styles.inputWrap}>
                      <Clock className={styles.inputIcon} size={15} aria-hidden="true" />
                      <input
                        id="enquiry-time"
                        name="preferredTime"
                        type="time"
                        value={fields.preferredTime}
                        onChange={(event) => updateField("preferredTime", event.target.value)}
                        disabled={isSubmitting}
                        className={styles.timeInput}
                      />
                    </div>
                  </div>

                  {/* Modules Multi-select */}
                  <div className={`${styles.field} ${styles.fullWidth}`}>
                    <p id="enquiry-modules-label" className={styles.fieldLabel}>
                      Which modules interest you? <span aria-hidden="true">*</span>
                    </p>
                    <details
                      ref={detailsRef}
                      className={styles.modulePicker}
                      onKeyDown={(event) => {
                        if (event.key === "Escape" && event.currentTarget.open) {
                          event.preventDefault();
                          event.stopPropagation();
                          event.currentTarget.open = false;
                          document.getElementById("enquiry-modules")?.focus();
                        }
                      }}
                    >
                      <summary
                        id="enquiry-modules"
                        aria-labelledby="enquiry-modules-label enquiry-selection"
                        aria-describedby={errors.modules ? "enquiry-modules-error" : "enquiry-modules-hint"}
                        aria-invalid={!!errors.modules}
                      >
                        <div className={styles.summaryContent}>
                          <Layers3 className={styles.summaryIcon} size={15} aria-hidden="true" />
                          <span
                            id="enquiry-selection"
                            className={modules.length ? undefined : styles.placeholder}
                          >
                            {selection}
                          </span>
                        </div>
                        <ChevronDown size={15} />
                      </summary>

                      <div className={styles.moduleOptions}>
                        <div className={styles.moduleToolbar}>
                          <span>Choose one or more</span>
                          <button
                            type="button"
                            onClick={() =>
                              updateModules(
                                modules.length === 8
                                  ? []
                                  : POPUP_CTA_MODULES.map((module) => module.id)
                              )
                            }
                          >
                            {modules.length === 8 ? "Clear selection" : "Select all 8"}
                          </button>
                        </div>
                        <div
                          className={styles.moduleGrid}
                          role="group"
                          aria-labelledby="enquiry-modules-label"
                        >
                          {POPUP_CTA_MODULES.map((module) => (
                            <label key={module.id}>
                              <input
                                type="checkbox"
                                name="modules"
                                value={module.id}
                                checked={modules.includes(module.id)}
                                onChange={(event) =>
                                  updateModules(
                                    event.target.checked
                                      ? [...modules, module.id]
                                      : modules.filter((id) => id !== module.id)
                                  )
                                }
                              />
                              <span>{module.name}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </details>
                    {errors.modules ? (
                      <p id="enquiry-modules-error" className={styles.error}>
                        {errors.modules}
                      </p>
                    ) : (
                      <p id="enquiry-modules-hint" className={styles.hint}>
                        {request.module && modules.includes(request.module)
                          ? "Selected for this module page. You can customize or add more modules."
                          : "Choose one, a few, or the whole platform."}
                      </p>
                    )}
                  </div>
                </div>

                {Object.values(errors).some(Boolean) && (
                  <p className={styles.error} role="alert">
                    Please check the highlighted fields above.
                  </p>
                )}

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className={styles.spinner} size={18} />
                      Submitting request...
                    </>
                  ) : (
                    <>
                      {copy.action}
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>

                <div className={styles.trustBadge}>
                  <Lock size={12} className={styles.trustLock} aria-hidden="true" />
                  <span>Your information is kept confidential.</span>
                </div>

                <p className={styles.privacy}>
                  By submitting, you agree to be contacted about your inquiry. Read our{" "}
                  <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </Link>
                  .
                </p>

               
              </form>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}
