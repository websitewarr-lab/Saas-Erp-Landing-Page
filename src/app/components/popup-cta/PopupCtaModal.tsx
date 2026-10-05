"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CheckCheck, ChevronDown, Layers3, ShieldCheck, X } from "lucide-react";
import PopupCtaIllustration from "./PopupCtaIllustration";
import { POPUP_CTA_MODULES, POPUP_CTA_COPY, type PopupCtaModule, type PopupCtaRequest } from "./popupCtaConfig";
import styles from "./PopupCtaModal.module.css";

interface ContactFields {
  name: string;
  mobile: string;
  email: string;
  company: string;
  teamSize: string;
}

type FieldErrors = Partial<Record<"name" | "mobile" | "email" | "modules", string>>;

export default function PopupCtaModal({
  request,
  onClose,
}: {
  request: PopupCtaRequest;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const successTitleRef = useRef<HTMLHeadingElement>(null);
  const pointerOutside = useRef(false);
  const [fields, setFields] = useState<ContactFields>({
    name: "",
    mobile: "",
    email: "",
    company: "",
    teamSize: "",
  });
  const [modules, setModules] = useState<PopupCtaModule[]>(
    request.module ? [request.module] : []
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
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
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) {
      document.body.style.paddingRight = `${
        parseFloat(getComputedStyle(document.body).paddingRight) + scrollbar
      }px`;
    }
    dialog.showModal();
    nameRef.current?.focus({ preventScroll: true });
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
    };
  }, []);

  useEffect(() => {
    if (submitted) successTitleRef.current?.focus();
  }, [submitted]);

  function updateField(field: keyof ContactFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    if (field === "name" || field === "email" || field === "mobile") {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function updateModules(next: PopupCtaModule[]) {
    setModules(next);
    if (next.length) {
      setErrors((current) => ({ ...current, modules: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FieldErrors = {};
    if (!fields.name.trim()) nextErrors.name = "Please enter your name.";
    const mobile = fields.mobile.trim();
    const digits = mobile.replace(/\D/g, "");
    if (!/^\+?[\d\s().-]+$/.test(mobile) || digits.length < 7 || digits.length > 15) {
      nextErrors.mobile = "Enter a valid mobile number with country code.";
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

    setSubmitted(true);
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
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="Close enquiry popup"
      >
        <X size={18} />
      </button>

      <div className={styles.layout}>
        {/* Left Tech Story Sidebar with Brand Accents */}
        <aside className={styles.story} aria-label="Your Mossie ERP walkthrough">
          <div className={styles.storyTop}>
            <div className={styles.logo}>
              <Image
                src="/images/logo/mossie-erp-brand.jpeg"
                alt="Mossie ERP"
                width={1254}
                height={1254}
                sizes="240px"
                loading="eager"
              />
            </div>
            <span className={styles.storyLabel}>
              <span /> MADE FOR YOUR BUSINESS
            </span>
          </div>

          <div className={styles.storyHeading}>
            <h2>
              Your business.
              <br />
              <span>One clear view.</span>
            </h2>
            <p>Bring your people, processes, and possibilities together.</p>
          </div>

          <PopupCtaIllustration />

          <ul className={styles.benefits}>
            <li>
              <Check size={15} />
              Explore the modules you need
            </li>
            <li>
              <Check size={15} />
              See how your workflows connect
            </li>
            <li>
              <Check size={15} />
              Get guided assistance for your team
            </li>
          </ul>

          <div className={styles.storyFooter}>
            <Layers3 size={15} />
            <span>8 modules. One calm connected platform.</span>
          </div>
        </aside>

        {/* Right Action Form */}
        <div className={styles.formPane}>
          {submitted ? (
            <section className={styles.ready}>
              <div className={styles.readyIcon}>
                <CheckCheck size={30} />
              </div>
              <p className={styles.eyebrow}>A calmer start begins here</p>
              <h2 id="enquiry-ready-title" ref={successTitleRef} tabIndex={-1}>
                Enquiry submitted successfully.
              </h2>
              <p id="enquiry-ready-description">
                Thank you, <strong>{fields.name.trim()}</strong>, for your interest in Mossie ERP. Our product architecture team will contact you shortly to schedule your demo.
              </p>
              <div className={styles.requestSummary}>
                <span>Your selected modules</span>
                <p>{selectedNames.join(" · ")}</p>
              </div>
              <button type="button" className={styles.submit} onClick={onClose}>
                Continue exploring <ArrowRight size={17} />
              </button>
            </section>
          ) : (
            <>
              <p className={styles.eyebrow}>{copy.eyebrow}</p>
              <h2 id="enquiry-title" className={styles.title}>
                {copy.title}
              </h2>
              <p id="enquiry-description" className={styles.intro}>
                {copy.description}
              </p>

              <form noValidate onSubmit={handleSubmit}>
                <div className={styles.fields}>
                  <div className={`${styles.field} ${styles.fullWidth}`}>
                    <label htmlFor="enquiry-name">
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      ref={nameRef}
                      id="enquiry-name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={fields.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      maxLength={100}
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="enquiry-name-error" className={styles.error}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="enquiry-mobile">
                      Mobile number <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="enquiry-mobile"
                      name="mobile"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={fields.mobile}
                      onChange={(event) => updateField("mobile", event.target.value)}
                      maxLength={25}
                      required
                      aria-invalid={!!errors.mobile}
                      aria-describedby={errors.mobile ? "enquiry-mobile-error" : undefined}
                    />
                    {errors.mobile && (
                      <p id="enquiry-mobile-error" className={styles.error}>
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="enquiry-email">
                      Work email address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="enquiry-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={fields.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      maxLength={254}
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "enquiry-email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="enquiry-email-error" className={styles.error}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="enquiry-company">
                      Company name <small>(optional)</small>
                    </label>
                    <input
                      id="enquiry-company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Your company"
                      value={fields.company}
                      onChange={(event) => updateField("company", event.target.value)}
                      maxLength={120}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="enquiry-team-size">
                      Team size <small>(optional)</small>
                    </label>
                    <div className={styles.selectWrap}>
                      <select
                        id="enquiry-team-size"
                        name="teamSize"
                        value={fields.teamSize}
                        onChange={(event) => updateField("teamSize", event.target.value)}
                      >
                        <option value="">Select team size</option>
                        <option>1–10 employees</option>
                        <option>11–50 employees</option>
                        <option>51–200 employees</option>
                        <option>201–500 employees</option>
                        <option>501+ employees</option>
                      </select>
                      <ChevronDown size={15} aria-hidden="true" />
                    </div>
                  </div>

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
                        <span
                          id="enquiry-selection"
                          className={modules.length ? undefined : styles.placeholder}
                        >
                          {selection}
                        </span>
                        <ChevronDown size={16} />
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

                <button type="submit" className={styles.submit}>
                  {copy.action}
                  <ArrowRight size={18} />
                </button>

                <p className={styles.privacy}>
                  By submitting, you agree to be contacted about your inquiry. Read our{" "}
                  <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </Link>
                  .
                </p>

                <div className={styles.formFooter}>
                  <ShieldCheck size={14} />
                  <span>No obligation. 14-day risk-free sandbox setup.</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}
