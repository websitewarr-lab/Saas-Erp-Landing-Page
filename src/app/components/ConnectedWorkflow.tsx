"use client";

import React, { useEffect, useRef, type CSSProperties } from "react";

export default function ConnectedWorkflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<SVGPathElement>(null);
  const pulseRef = useRef<SVGGElement>(null);
  const tailRef = useRef<SVGUseElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;
    const pulse = pulseRef.current;
    const tail = tailRef.current;
    if (!section || !rail || !pulse || !tail) return;

    const stages = Array.from(section.querySelectorAll<SVGGElement>(".stage"));
    const stageBodies = stages.map((s) => s.querySelector<SVGGElement>(".stage-body"));
    const stageNames = Array.from(section.querySelectorAll<SVGTextElement>(".stage-name"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let hoveredIndex: number | null = null;
    let isSectionHovered = false;
    const currentPops = stages.map(() => 0);

    const onSectionEnter = () => {
      isSectionHovered = true;
    };
    const onSectionLeave = () => {
      isSectionHovered = false;
      hoveredIndex = null;
    };

    const viewport = section.closest<HTMLElement>(".flow-viewport");
    section.addEventListener("mouseenter", onSectionEnter);
    section.addEventListener("mouseleave", onSectionLeave);
    if (viewport) {
      viewport.addEventListener("mouseenter", onSectionEnter);
      viewport.addEventListener("mouseleave", onSectionLeave);
    }

    const enterHandlers = stages.map((_, index) => () => {
      hoveredIndex = index;
      isSectionHovered = true;
    });
    const leaveHandlers = stages.map((_, index) => () => {
      if (hoveredIndex === index) {
        hoveredIndex = null;
      }
    });

    stages.forEach((stage, index) => {
      stage.addEventListener("mouseenter", enterHandlers[index]);
      stage.addEventListener("mouseleave", leaveHandlers[index]);
    });
    stageNames.forEach((nameEl, index) => {
      nameEl.addEventListener("mouseenter", enterHandlers[index]);
      nameEl.addEventListener("mouseleave", leaveHandlers[index]);
      nameEl.style.cursor = "pointer";
    });

    const LEAD_IN_MS = 500;
    const TRAVEL_MS = 13600;
    const REST_MS = 1800;
    const CYCLE_MS = LEAD_IN_MS + TRAVEL_MS + REST_MS;
    const ENTRANCE_MS = 1250;

    let railLength = 0;
    try {
      railLength = rail.getTotalLength();
    } catch {
      railLength = 525;
    }

    if (!railLength || isNaN(railLength)) return;

    // Precompute the rail and exact distances to each pedestal
    const sampleCount = 1400;
    const samples = Array.from({ length: sampleCount + 1 }, (_, index) => {
      try {
        const point = rail.getPointAtLength((index / sampleCount) * railLength);
        return { x: point.x, y: point.y };
      } catch {
        return { x: 46 + (index / sampleCount) * 510, y: 96 };
      }
    });

    const arrivalTimes = stages.map((_, index) => {
      const center = 46 + index * 63.75;
      let closest = 0;
      for (let i = 1; i <= sampleCount; i++) {
        if (Math.abs(samples[i].x - center) < Math.abs(samples[closest].x - center)) closest = i;
      }
      return (closest / sampleCount) * TRAVEL_MS;
    });

    let animationFrame = 0;
    let lastFrame: number | null = null;
    let elapsed = -ENTRANCE_MS;
    let inView = true;
    let ready = false;

    function smoothstep(value: number) {
      const x = Math.max(0, Math.min(1, value));
      return x * x * (3 - 2 * x);
    }

    function clearIllumination() {
      if (pulse) pulse.style.opacity = "0";
      if (tail) tail.style.opacity = "0";
      currentPops.fill(0);
      stages.forEach((stage, index) => {
        stage.style.setProperty("--energy", "0");
        stage.style.setProperty("--ripple", "0");
        const body = stageBodies[index];
        if (body) body.removeAttribute("transform");
        const name = stageNames[index];
        if (name) {
          name.style.fill = "";
          name.style.fontWeight = "";
        }
      });
    }

    function render(time: number) {
      if (!pulse || !tail) return;
      const travelTime = Math.max(0, time - LEAD_IN_MS);
      const progress = Math.min(travelTime / TRAVEL_MS, 1);
      const samplePosition = progress * sampleCount;
      const startIndex = Math.floor(samplePosition);
      const endIndex = Math.min(startIndex + 1, sampleCount);
      const fraction = samplePosition - startIndex;
      const x = samples[startIndex].x + (samples[endIndex].x - samples[startIndex].x) * fraction;
      const y = samples[startIndex].y + (samples[endIndex].y - samples[startIndex].y) * fraction;
      const visibility = smoothstep(time / 450) * (1 - smoothstep((travelTime - TRAVEL_MS) / 550));

      pulse.setAttribute("transform", `translate(${x.toFixed(3)} ${y.toFixed(3)})`);
      pulse.style.opacity = visibility.toFixed(3);
      tail.setAttribute("stroke-dashoffset", (25 - progress * railLength).toFixed(3));
      tail.style.opacity = (visibility * 0.85).toFixed(3);

      stages.forEach((stage, index) => {
        const isHovered = hoveredIndex === index;
        let targetPop = 0;
        let targetEnergy = 0;
        let targetRipple = 0;

        if (hoveredIndex !== null) {
          // When a stage is hovered: auto-traverse stops and only the hovered stage highlights
          if (isHovered) {
            targetPop = 1;
            targetEnergy = 1;
            targetRipple = 0.35;
          } else {
            targetPop = 0;
            targetEnergy = 0;
            targetRipple = 0;
          }
        } else {
          // Normal auto-traversal
          const age = time - LEAD_IN_MS - arrivalTimes[index];
          targetEnergy = age < 0 ? smoothstep((age + 450) / 450) : 1 - smoothstep(age / 1250);
          targetRipple = age >= 0 && age < 1100 ? Math.sin((Math.PI * age) / 1100) * 0.5 : 0;

          if (age >= -380 && age < 0) {
            targetPop = smoothstep((age + 380) / 380);
          } else if (age >= 0 && age <= 420) {
            targetPop = 1;
          } else if (age > 420 && age <= 1350) {
            targetPop = 1 - smoothstep((age - 420) / 930);
          } else {
            targetPop = 0;
          }
        }

        // Smooth spring transition for in-place pop swelling
        currentPops[index] += (targetPop - currentPops[index]) * 0.22;
        if (Math.abs(targetPop - currentPops[index]) < 0.003) {
          currentPops[index] = targetPop;
        }

        const pop = currentPops[index];
        const energy = Math.max(targetEnergy, pop);
        const ripple = Math.max(targetRipple, pop * 0.35);

        stage.style.setProperty("--energy", energy.toFixed(3));
        stage.style.setProperty("--ripple", ripple.toFixed(3));
        stage.style.setProperty(
          "--ripple-scale",
          (1 + pop * 0.08).toFixed(3)
        );

        // Increase size a little in place (no translation/movement)
        const body = stageBodies[index];
        if (body) {
          if (pop > 0.005) {
            const scale = 1 + pop * 0.10;
            body.setAttribute("transform", `scale(${scale.toFixed(3)})`);
          } else {
            body.removeAttribute("transform");
          }
        }

        const name = stageNames[index];
        if (name) {
          if (pop > 0.25) {
            name.style.fill = "var(--brand-accent, #006fc9)";
            name.style.fontWeight = "800";
          } else {
            name.style.fill = "";
            name.style.fontWeight = "";
          }
        }
      });
    }

    function tick(timestamp: number) {
      if (lastFrame !== null && !isSectionHovered) {
        elapsed += timestamp - lastFrame;
      }
      lastFrame = timestamp;
      if (elapsed >= 0) render(elapsed % CYCLE_MS);
      animationFrame = requestAnimationFrame(tick);
    }

    function synchronizePlayback() {
      cancelAnimationFrame(animationFrame);
      lastFrame = null;
      if (reducedMotion.matches) clearIllumination();
      if (ready && !reducedMotion.matches && !document.hidden && inView) {
        animationFrame = requestAnimationFrame(tick);
      }
    }

    const onVisibilityChange = () => synchronizePlayback();
    const onReducedMotionChange = () => synchronizePlayback();

    document.addEventListener("visibilitychange", onVisibilityChange);
    reducedMotion.addEventListener("change", onReducedMotionChange);

    const observer = new IntersectionObserver((entries) => {
      inView = entries[0]?.isIntersecting ?? true;
      synchronizePlayback();
    });
    observer.observe(section);

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        if (!reducedMotion.matches) section.classList.add("motion-ready");
        ready = true;
        synchronizePlayback();
      });
    } else {
      if (!reducedMotion.matches) section.classList.add("motion-ready");
      ready = true;
      synchronizePlayback();
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.removeEventListener("change", onReducedMotionChange);
      section.removeEventListener("mouseenter", onSectionEnter);
      section.removeEventListener("mouseleave", onSectionLeave);
      if (viewport) {
        viewport.removeEventListener("mouseenter", onSectionEnter);
        viewport.removeEventListener("mouseleave", onSectionLeave);
      }
      stages.forEach((stage, index) => {
        stage.removeEventListener("mouseenter", enterHandlers[index]);
        stage.removeEventListener("mouseleave", leaveHandlers[index]);
      });
      stageNames.forEach((nameEl, index) => {
        nameEl.removeEventListener("mouseenter", enterHandlers[index]);
        nameEl.removeEventListener("mouseleave", leaveHandlers[index]);
      });
    };
  }, []);

  return (
    <section className="relative py-6 sm:py-10 bg-white overflow-hidden" id="flow">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flow-viewport"
          tabIndex={0}
          aria-label="Complete business flow. On narrow screens, scroll horizontally to explore all nine stages."
        >
          <div
            ref={sectionRef}
            className="business-flow"
            aria-labelledby="flow-heading"
            aria-describedby="flow-subtitle"
          >
            <p className="section-label">
             
            </p>
            <h2 id="flow-heading" className="flow-heading">
              Complete Business Flow
            </h2>
            <p id="flow-subtitle" className="subtitle">
              From first lead to final reports — fully connected, no manual handoffs.
            </p>

            <svg
              className="flow-art"
              viewBox="0 0 600 156"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* One shared palette and one shared pedestal; every icon is vector geometry. */}
                <linearGradient
                  id="rail-color"
                  x1="46"
                  y1="96"
                  x2="556"
                  y2="96"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8eeaff" />
                  <stop offset=".24" stopColor="#76d5fc" />
                  <stop offset=".44" stopColor="#a2a2fa" />
                  <stop offset=".65" stopColor="#68dcf5" />
                  <stop offset="1" stopColor="#ac9bf6" />
                </linearGradient>

                <linearGradient
                  id="platform-top"
                  x1="-13"
                  y1="-12"
                  x2="10"
                  y2="15"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ffffff" />
                  <stop offset=".5" stopColor="#f8fcff" />
                  <stop offset="1" stopColor="#e6f3ff" />
                </linearGradient>

                <linearGradient
                  id="platform-edge"
                  x1="-23"
                  y1="0"
                  x2="23"
                  y2="8"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#b7dafa" />
                  <stop offset=".45" stopColor="#94c5e6" />
                  <stop offset=".53" stopColor="#80b7e0" />
                  <stop offset="1" stopColor="#b1d8ef" />
                </linearGradient>

                <linearGradient
                  id="platform-edge-cyan"
                  x1="-23"
                  y1="0"
                  x2="23"
                  y2="8"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#a2e5fa" />
                  <stop offset=".45" stopColor="#87d0ee" />
                  <stop offset=".53" stopColor="#69bce2" />
                  <stop offset="1" stopColor="#a2dcf3" />
                </linearGradient>

                <linearGradient
                  id="platform-edge-violet"
                  x1="-23"
                  y1="0"
                  x2="23"
                  y2="8"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#d4cdfb" />
                  <stop offset=".43" stopColor="#b3a9ed" />
                  <stop offset=".53" stopColor="#948add" />
                  <stop offset="1" stopColor="#b0a6eb" />
                </linearGradient>

                <linearGradient
                  id="halo-white"
                  x1="0"
                  y1="-29"
                  x2="0"
                  y2="6"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ffffff" stopOpacity=".98" />
                  <stop offset=".64" stopColor="#f9fcff" stopOpacity=".76" />
                  <stop offset="1" stopColor="#e6f5ff" stopOpacity=".45" />
                </linearGradient>

                <radialGradient id="ambient">
                  <stop stopColor="#719ded" stopOpacity=".35" />
                  <stop offset="1" stopColor="#8fbdf6" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="active-ambient">
                  <stop stopColor="#5ecfff" stopOpacity=".52" />
                  <stop offset=".6" stopColor="#8981ff" stopOpacity=".14" />
                  <stop offset="1" stopColor="#a0b8ff" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="pulse-corona">
                  <stop stopColor="#ffffff" />
                  <stop offset=".17" stopColor="#d5fbff" stopOpacity=".95" />
                  <stop offset=".4" stopColor="#4ecaff" stopOpacity=".75" />
                  <stop offset="1" stopColor="#7487ff" stopOpacity="0" />
                </radialGradient>

                <linearGradient
                  id="blue-front"
                  x1="-12"
                  y1="-20"
                  x2="10"
                  y2="3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6ee1ff" />
                  <stop offset=".44" stopColor="#2aabf4" />
                  <stop offset="1" stopColor="#2262df" />
                </linearGradient>

                <linearGradient
                  id="blue-side"
                  x1="0"
                  y1="-20"
                  x2="9"
                  y2="3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#268def" />
                  <stop offset="1" stopColor="#194dbb" />
                </linearGradient>

                <linearGradient id="blue-top">
                  <stop stopColor="#b2eaff" />
                  <stop offset="1" stopColor="#65b7ff" />
                </linearGradient>

                <radialGradient id="head-blue" cx="28%" cy="23%" r="80%">
                  <stop stopColor="#6bdbff" />
                  <stop offset=".42" stopColor="#2eacfb" />
                  <stop offset=".8" stopColor="#1c7be9" />
                  <stop offset="1" stopColor="#1954c5" />
                </radialGradient>

                <linearGradient
                  id="document-front"
                  x1="-8"
                  y1="-22"
                  x2="7"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8ce3ff" />
                  <stop offset=".45" stopColor="#44bdf4" />
                  <stop offset="1" stopColor="#228cdd" />
                </linearGradient>

                <linearGradient
                  id="document-paper"
                  x1="-4"
                  y1="-19"
                  x2="3"
                  y2="-2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#edfcff" />
                  <stop offset="1" stopColor="#a5eaff" />
                </linearGradient>

                <linearGradient
                  id="violet-front"
                  x1="-9"
                  y1="-19"
                  x2="8"
                  y2="4"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9589ff" />
                  <stop offset=".45" stopColor="#7265f4" />
                  <stop offset="1" stopColor="#4544d8" />
                </linearGradient>

                <linearGradient
                  id="violet-side"
                  x1="0"
                  y1="-21"
                  x2="8"
                  y2="2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6059f5" />
                  <stop offset="1" stopColor="#343dcc" />
                </linearGradient>

                <linearGradient id="violet-top">
                  <stop stopColor="#b5b2ff" />
                  <stop offset="1" stopColor="#7d83ff" />
                </linearGradient>

                <linearGradient
                  id="box-front"
                  x1="-10"
                  y1="-18"
                  x2="1"
                  y2="3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ffc886" />
                  <stop offset="1" stopColor="#e58c47" />
                </linearGradient>

                <linearGradient
                  id="box-side"
                  x1="0"
                  y1="-14"
                  x2="11"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#e7a064" />
                  <stop offset="1" stopColor="#c67639" />
                </linearGradient>

                <linearGradient id="box-top">
                  <stop stopColor="#ffe0b4" />
                  <stop offset="1" stopColor="#f1b57d" />
                </linearGradient>

                <filter
                  id="platform-shadow"
                  x="-40%"
                  y="-45%"
                  width="180%"
                  height="230%"
                  colorInterpolationFilters="sRGB"
                >
                  <feDropShadow dx="0" dy="4" stdDeviation="2.5" floodColor="#527bb3" floodOpacity=".26" />
                  <feDropShadow dx="0" dy="1" stdDeviation=".7" floodColor="#739fce" floodOpacity=".22" />
                </filter>

                <filter
                  id="icon-shadow"
                  x="-45%"
                  y="-30%"
                  width="190%"
                  height="185%"
                  colorInterpolationFilters="sRGB"
                >
                  <feDropShadow dx="0" dy="1.4" stdDeviation=".9" floodColor="#467fc7" floodOpacity=".3" />
                </filter>

                <filter id="soft-glow" x="-100%" y="-100%" width="300%" height="300%" colorInterpolationFilters="sRGB">
                  <feGaussianBlur stdDeviation="2" />
                </filter>

                <filter id="rail-glow" x="-5%" y="-90%" width="110%" height="280%" colorInterpolationFilters="sRGB">
                  <feGaussianBlur stdDeviation="1.7" />
                </filter>

                <path
                  id="pedestal-side"
                  d="M-22 0 Q-22-2-19-3 L-4-12 Q0-14 4-12 L19-3 Q22-2 22 0 V5 Q22 7 19 9 L4 17 Q0 19-4 17 L-19 9 Q-22 7-22 5Z"
                />
                <path
                  id="pedestal-top"
                  d="M-20-3 L-4-12 Q0-14 4-12 L20-3 Q24 0 20 3 L4 12 Q0 14-4 12 L-20 3 Q-24 0-20-3Z"
                />

                <g id="pedestal">
                  <ellipse cx="0" cy="12" rx="29" ry="12" fill="url(#ambient)" />
                  <g filter="url(#platform-shadow)">
                    <use href="#pedestal-side" fill="var(--edge, url(#platform-edge))" />
                    <path
                      d="M-21 4 L-4 14 Q0 16 4 14 L21 4"
                      fill="none"
                      stroke="#eefaff"
                      strokeWidth=".55"
                      opacity=".52"
                    />
                    <use href="#pedestal-top" fill="url(#platform-top)" stroke="#ffffff" strokeWidth=".65" />
                  </g>
                  <circle cx="0" cy="-11.5" r="18.2" fill="url(#halo-white)" />
                  <path
                    d="M-17.7-11.5 A18 18 0 0 1 17.7-11.5"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth=".65"
                    opacity=".82"
                  />
                </g>

                <g id="activation">
                  <ellipse className="stage-light" cx="0" cy="-2" rx="31" ry="27" fill="url(#active-ambient)" />
                  <use
                    className="stage-light"
                    href="#pedestal-top"
                    fill="none"
                    stroke="#86dfff"
                    strokeWidth="1.6"
                    filter="url(#soft-glow)"
                  />
                  <ellipse
                    className="arrival-ring"
                    cx="0"
                    cy="1"
                    rx="23"
                    ry="13"
                    fill="none"
                    stroke="#80bbff"
                    strokeWidth=".65"
                  />
                </g>

                {/* Lead: a rounded, shaded person, with a spherical head. */}
                <g id="icon-lead" transform="scale(1.05)">
                  <ellipse cx="0" cy="0" rx="10" ry="2.9" fill="#3e80d8" opacity=".12" />
                  <path
                    d="M-8.8-3.5 Q-8.8-9.6-4.1-11 L3.4-11.2 Q8.4-9.5 8.8-4.6 V-.5 Q7 2.1.2 2.2 Q-6.6 2.1-8.8-.3Z"
                    fill="url(#blue-front)"
                  />
                  <path d="M1-10.7 Q8.1-10.3 8.8-4.6 V-.5 Q7.6 1.7 1 2.2Z" fill="url(#blue-side)" opacity=".65" />
                  <path
                    d="M-6.8-3.7 Q-6.9-8.4-3.5-9.2"
                    fill="none"
                    stroke="#a0e9ff"
                    strokeWidth="1.15"
                    strokeLinecap="round"
                    opacity=".65"
                  />
                  <ellipse cx="-.1" cy="-15.2" rx="5.25" ry="5.8" fill="url(#head-blue)" />
                  <path
                    d="M-3.6-17 Q-3.2-19.4-.8-19.6"
                    fill="none"
                    stroke="#b6edff"
                    strokeWidth=".85"
                    strokeLinecap="round"
                    opacity=".75"
                  />
                </g>

                {/* Quotation: folded paper in a deep cyan document sleeve. */}
                <g id="icon-quotation">
                  <path
                    d="M-6.4-18.9-1.9-20.6 4.8-20.6 8.9-16.5 8.9-.8 Q8.8.5 7.6.7 L-3.3 2.2Z"
                    fill="url(#blue-side)"
                  />
                  <path
                    d="M-7.6-18.5 Q-7.7-20-5.9-20.2 L3.7-21.1 7.2-17.1 V-.5 Q7.2.8 5.6 1L-5.8 2 Q-7.6 2.1-7.6.3Z"
                    fill="url(#document-front)"
                    stroke="#65bdf2"
                    strokeWidth=".45"
                  />
                  <path d="M-4.4-17.3 2.8-18 4.7-15.8V-1.9L-4.4-.9Z" fill="url(#document-paper)" />
                  <path d="M2.8-20.6V-16.4L6.8-16.8Z" fill="#258ce3" />
                  <path d="M-5.9-16.7V-.4" stroke="#b9f3ff" strokeWidth=".7" strokeLinecap="round" opacity=".8" />
                  <path
                    d="M-2.8-13.6 2.9-14.1 M-2.8-10.6 2.9-11.1 M-2.8-7.6 1.6-8 M-2.8-4.6 .3-4.9"
                    fill="none"
                    stroke="#39a9e7"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  <path d="M-6.1-18.9-.8-19.5" fill="none" stroke="#d7f9ff" strokeWidth=".75" strokeLinecap="round" />
                </g>

                {/* Sales: a small 3D cart, tilted slightly toward the viewer. */}
                <g id="icon-sales">
                  <path
                    d="M-10.4-18.8H-6.8L-3.2-6.4Q-3-5 -1.4-5H7.7"
                    fill="none"
                    stroke="#246cce"
                    strokeWidth="2.15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M-5.8-16.3 11.2-18.2 7.8-7.4-2.9-6.4Z" fill="url(#blue-side)" />
                  <path
                    d="M-6.2-16.8 9.2-18.1 6.8-9.3-3.9-8.2Z"
                    fill="url(#blue-front)"
                    stroke="#65c9ff"
                    strokeWidth=".55"
                  />
                  <path d="M-3.9-14.4 6.5-15.3 5.1-11.3-2.9-10.6Z" fill="#91e4ff" opacity=".8" />
                  <path d="M-1.4-14.6-.7-10.8 M2.4-14.8 1.8-11.1" stroke="#36a4ee" strokeWidth=".7" />
                  <path d="M8.5-17.6 11.4-20.2" stroke="#548bf1" strokeWidth="2" strokeLinecap="round" />
                  <path d="M-10.4-19.7H-6.7" stroke="#8bd9ff" strokeWidth="1.1" strokeLinecap="round" />
                  <ellipse cx="-1.9" cy="-1.8" rx="2.05" ry="2.4" fill="#2265bd" />
                  <ellipse cx="6.6" cy="-2.1" rx="1.95" ry="2.35" fill="#2265bd" />
                  <ellipse cx="-2.4" cy="-2.3" rx=".75" ry="1" fill="#7fcefb" />
                  <ellipse cx="6.1" cy="-2.6" rx=".75" ry="1" fill="#7fcefb" />
                </g>

                {/* Purchase keeps the reference's warm kraft box as its single warm accent. */}
                <g id="icon-purchase">
                  <path
                    d="M-11.2-17.6-.7-23.3 10.9-17.9 .2-12Z"
                    fill="url(#box-top)"
                    stroke="#edbd8a"
                    strokeWidth=".35"
                  />
                  <path d="M-11.2-17.6.2-12 .2 2-11.2-3.6Z" fill="url(#box-front)" />
                  <path d="M.2-12 10.9-17.9 10.9-3.7 .2 2Z" fill="url(#box-side)" />
                  <path d="M-5.7-20.5 5.7-14.9V-9.7L3.7-8.6V-13.7L-7.8-19.4Z" fill="#b69a88" />
                  <path d="M4.6-20.4-6.5-14.4V-9.5L-4.7-8.6V-13.6L6.5-19.5Z" fill="#d1b5a0" />
                  <path
                    d="M-6-20.1 5.1-14.6 M-10.5-17.1.3-11.6V1.1"
                    fill="none"
                    stroke="#ffe1b5"
                    strokeWidth=".6"
                    opacity=".7"
                  />
                  <path d="M-6.5-10.7-4.8-9.9" stroke="#8e7a70" strokeWidth=".65" />
                </g>

                <g id="inventory-cube">
                  <path d="M-7-10 0-14 7-10 0-6Z" fill="url(#violet-top)" />
                  <path d="M-7-10 0-6V3L-7-1Z" fill="url(#violet-front)" />
                  <path d="M0-6 7-10V-1L0 3Z" fill="url(#violet-side)" />
                  <path d="M-6.6-9.7-.1-6V2.5" fill="none" stroke="#9ab4ff" strokeWidth=".45" opacity=".7" />
                  <path d="M-4.4-6.8-2.5-5.7V-2.8L-4.4-3.8Z" fill="#a8bcff" opacity=".35" />
                </g>
                <g id="icon-inventory">
                  <use href="#inventory-cube" transform="translate(-5.6 -1.4) scale(.91)" />
                  <use href="#inventory-cube" transform="translate(5.2 -1.1) scale(.91)" />
                  <use href="#inventory-cube" transform="translate(0 -13.8) scale(.96)" />
                </g>

                {/* Delivery: bevelled cargo body, separate cab, windshield, and wheels. */}
                <g id="icon-delivery">
                  <path d="M-12.3-20.4-6.4-23.3 5.6-18.1-.7-14.7Z" fill="url(#blue-top)" />
                  <path d="M-12.3-20.4-.7-15V-.9L-12.3-5.6Z" fill="url(#blue-front)" />
                  <path d="M-.7-15 5.6-18.1V-5L-.7-.9Z" fill="url(#blue-side)" />
                  <path d="M1.2-13.6 6.6-16.2 11.6-13.6 12.1-6.9 14.9-4.9V.2L9.3 3.3 1.2-.1Z" fill="url(#blue-front)" />
                  <path d="M9.3-10.8 11.6-13.6 12.1-6.9 14.9-4.9V.2L9.3 3.3Z" fill="url(#blue-side)" />
                  <path d="M3-12.2 6.7-13.7 8.5-12.6V-7.7L3-9.5Z" fill="#155bb2" />
                  <path d="M9.7-11 10.9-12.2 11.2-7.6 9.7-6.9Z" fill="#a1e2ff" />
                  <path d="M-11.5-18.5-2.1-14.3" stroke="#9be3ff" strokeWidth=".7" />
                  <path d="M-10.8-6.1-.9-2.2 1.3-3.1 9.2.1" fill="none" stroke="#1461bd" strokeWidth="1.4" />
                  <ellipse cx="-6.9" cy="-3.5" rx="2.6" ry="3.2" fill="#184884" transform="rotate(-18 -6.9 -3.5)" />
                  <ellipse cx="-7.2" cy="-3.7" rx="1.2" ry="1.7" fill="#72b5e9" transform="rotate(-18 -7.2 -3.7)" />
                  <ellipse cx="8.5" cy=".9" rx="2.8" ry="3.3" fill="#184884" transform="rotate(-18 8.5 .9)" />
                  <ellipse cx="8.2" cy=".7" rx="1.3" ry="1.8" fill="#72b5e9" transform="rotate(-18 8.2 .7)" />
                  <path d="M12.8-3.1 14.3-3.9V-2.2L12.8-1.5Z" fill="#d4f4ff" />
                </g>

                <g id="icon-invoice">
                  <path d="M-6.8-19.5 3.5-21 7.4-17.1V.3L-6.8 1.2Z" fill="url(#blue-side)" />
                  <path
                    d="M-8.2-18.5Q-8.2-19.5-6.9-19.6L2.6-20.5 6.1-16.6V.2L-8.2 1.3Z"
                    fill="url(#document-front)"
                  />
                  <path d="M-5.7-17.2 1.6-17.9 3.9-15.3V-1.9L-5.7-1.2Z" fill="url(#document-paper)" />
                  <path d="M2.6-20.5V-16L6.1-16.6Z" fill="#258bdd" />
                  <path
                    d="M-3.5-13.6.5-13.9 M-3.5-10.4 2.1-10.8 M-3.5-7.3 2.1-7.7 M-3.5-4.3-.1-4.5"
                    stroke="#47abe0"
                    strokeWidth="1.05"
                    strokeLinecap="round"
                  />
                  <path d="M-7-17.1V-.4" fill="none" stroke="#b3f0ff" strokeWidth=".65" opacity=".8" />
                </g>

                <g id="bank-column">
                  <path d="M-1.6-13.2 1.2-13.6 1.2-3.4-1.6-3Z" fill="url(#blue-front)" />
                  <path d="M.2-13.5 1.2-13.6 1.2-3.4.2-3.3Z" fill="#4369cf" />
                  <path d="M-1-12.6V-4.3" stroke="#c6e7ff" strokeWidth=".6" />
                  <path d="M-2-3.4 1.6-3.8V-2.6L-2-2.2Z" fill="#6c9eef" />
                </g>
                <g id="icon-accounting" transform="scale(.93)">
                  <path d="M-10.2-16.7 0-22.1 10.1-17V-14.9L.2-19.3-10.2-14.5Z" fill="url(#blue-side)" />
                  <path d="M-10.2-17.1 0-22.5 10.1-17.4 0-16.2Z" fill="#7dabfb" />
                  <path d="M-8.3-17 0-21.3 8.1-17.1Z" fill="#b0cfff" />
                  <path d="M-4.8-17.6 0-20 4.5-17.8Z" fill="#578ee9" />
                  <path d="M-9.6-16.2 9.5-16.6V-14.8L-9.6-14.4Z" fill="#4381de" />
                  <use href="#bank-column" transform="translate(-6 0)" />
                  <use href="#bank-column" />
                  <use href="#bank-column" transform="translate(6 0)" />
                  <path d="M-8.8-2.5 8.7-3 10.1-1.1-10.2-.6Z" fill="#a3c8ff" />
                  <path d="M-10.2-.6 10.1-1.1V1.1L-10.2 1.6Z" fill="#507de2" />
                  <path d="M-9.7-.2 9.5-.6" stroke="#92b8ff" strokeWidth=".55" />
                </g>

                <g id="icon-reports" transform="scale(.9)">
                  <path
                    d="M-9.1-19.8V.3H10"
                    fill="none"
                    stroke="#7671e8"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M-9.7-19.9V-.4H9.7" fill="none" stroke="#a5b6ff" strokeWidth=".7" strokeLinecap="round" />
                  <path d="M-6.7-8.4-3.7-9.4V-1.2L-6.7-.9Z" fill="url(#violet-front)" />
                  <path d="M-3.7-9.4-2.8-8.7V-.6L-3.7-1.2Z" fill="url(#violet-side)" />
                  <path d="M-1.8-12.7 1.2-13.6V-1.3L-1.8-.9Z" fill="url(#blue-front)" />
                  <path d="M1.2-13.6 2.1-12.9V-.6L1.2-1.3Z" fill="url(#blue-side)" />
                  <path d="M3.4-15.3 6.4-16.1V-1.3L3.4-.9Z" fill="url(#violet-front)" />
                  <path d="M6.4-16.1 7.3-15.4V-.6L6.4-1.3Z" fill="url(#violet-side)" />
                  <path
                    d="M-5.3-11.6-.4-16 3.4-14.7 8.1-20.4"
                    fill="none"
                    stroke="#7c87f4"
                    strokeWidth="1.05"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="-.4" cy="-16" r="1.3" fill="#7da7fc" />
                  <circle cx="8.1" cy="-20.4" r="1.75" fill="#7766eb" />
                  <circle cx="7.65" cy="-20.85" r=".55" fill="#b6bfff" />
                </g>

                {/* The rail is ONE unbroken path. Stage centers are exactly 63.75 units apart. */}
                <path
                  ref={railRef}
                  id="business-rail"
                  d="M46 96
                  C59 109 68 109 77.875 96 S96.75 83 109.75 96
                  C122.75 109 131.75 109 141.625 96 S160.5 83 173.5 96
                  C186.5 109 195.5 109 205.375 96 S224.25 83 237.25 96
                  C250.25 109 259.25 109 269.125 96 S288 83 301 96
                  C314 109 323 109 332.875 96 S351.75 83 364.75 96
                  C377.75 109 386.75 109 396.625 96 S415.5 83 428.5 96
                  C441.5 109 450.5 109 460.375 96 S479.25 83 492.25 96
                  C505.25 98 514.25 98 524.125 96 S543 94 556 96"
                />
              </defs>

              <g className="connections" fill="none" strokeLinecap="round">
                <use
                  href="#business-rail"
                  stroke="url(#rail-color)"
                  strokeWidth="4.5"
                  opacity=".2"
                  filter="url(#rail-glow)"
                />
                <use
                  href="#business-rail"
                  transform="translate(0 2)"
                  stroke="url(#rail-color)"
                  strokeWidth="1.5"
                  opacity=".4"
                />
                <use href="#business-rail" stroke="url(#rail-color)" strokeWidth="2.3" opacity=".62" />
                <use
                  href="#business-rail"
                  transform="translate(0 -.4)"
                  stroke="#f5ffff"
                  strokeWidth=".55"
                  opacity=".65"
                />
                <use
                  ref={tailRef}
                  id="pulse-tail"
                  href="#business-rail"
                  stroke="#65cfff"
                  strokeWidth="3.4"
                  strokeDasharray="25 2000"
                  filter="url(#rail-glow)"
                />
              </g>

              <g ref={pulseRef} id="data-pulse" transform="translate(46 96)">
                <ellipse rx="7.5" ry="4.8" fill="url(#pulse-corona)" />
                <ellipse rx="2.6" ry="1.25" fill="#b7f5ff" />
                <circle r="1.25" fill="#ffffff" />
              </g>

              {/* 9 Stage Nodes */}
              <g className="stage" data-stage="0" transform="translate(46 96)" style={{ cursor: "pointer" }}>
                <rect x="-31" y="-35" width="62" height="90" fill="#000000" opacity="0" pointerEvents="all" />
                <g className="stage-body">
                  <use href="#pedestal" />
                  <use href="#activation" />
                  <use className="icon-light" href="#icon-lead" filter="url(#soft-glow)" />
                  <use href="#icon-lead" filter="url(#icon-shadow)" />
                </g>
              </g>

              <g
                className="stage"
                data-stage="1"
                transform="translate(109.75 96)"
                style={{ "--edge": "url(#platform-edge-cyan)", cursor: "pointer" } as CSSProperties}
              >
                <rect x="-31" y="-35" width="62" height="90" fill="#000000" opacity="0" pointerEvents="all" />
                <g className="stage-body">
                  <use href="#pedestal" />
                  <use href="#activation" />
                  <use className="icon-light" href="#icon-quotation" filter="url(#soft-glow)" />
                  <use href="#icon-quotation" filter="url(#icon-shadow)" />
                </g>
              </g>

              <g className="stage" data-stage="2" transform="translate(173.5 96)" style={{ cursor: "pointer" }}>
                <rect x="-31" y="-35" width="62" height="90" fill="#000000" opacity="0" pointerEvents="all" />
                <g className="stage-body">
                  <use href="#pedestal" />
                  <use href="#activation" />
                  <use className="icon-light" href="#icon-sales" filter="url(#soft-glow)" />
                  <use href="#icon-sales" filter="url(#icon-shadow)" />
                </g>
              </g>

              <g
                className="stage"
                data-stage="3"
                transform="translate(237.25 96)"
                style={{ "--edge": "url(#platform-edge-violet)", cursor: "pointer" } as CSSProperties}
              >
                <rect x="-31" y="-35" width="62" height="90" fill="#000000" opacity="0" pointerEvents="all" />
                <g className="stage-body">
                  <use href="#pedestal" />
                  <use href="#activation" />
                  <use className="icon-light" href="#icon-purchase" filter="url(#soft-glow)" />
                  <use href="#icon-purchase" filter="url(#icon-shadow)" />
                </g>
              </g>

              <g
                className="stage"
                data-stage="4"
                transform="translate(301 96)"
                style={{ "--edge": "url(#platform-edge-violet)", cursor: "pointer" } as CSSProperties}
              >
                <rect x="-31" y="-35" width="62" height="90" fill="#000000" opacity="0" pointerEvents="all" />
                <g className="stage-body">
                  <use href="#pedestal" />
                  <use href="#activation" />
                  <use className="icon-light" href="#icon-inventory" filter="url(#soft-glow)" />
                  <use href="#icon-inventory" filter="url(#icon-shadow)" />
                </g>
              </g>

              <g className="stage" data-stage="5" transform="translate(364.75 96)" style={{ cursor: "pointer" }}>
                <rect x="-31" y="-35" width="62" height="90" fill="#000000" opacity="0" pointerEvents="all" />
                <g className="stage-body">
                  <use href="#pedestal" />
                  <use href="#activation" />
                  <use className="icon-light" href="#icon-delivery" filter="url(#soft-glow)" />
                  <use href="#icon-delivery" filter="url(#icon-shadow)" />
                </g>
              </g>

              <g
                className="stage"
                data-stage="6"
                transform="translate(428.5 96)"
                style={{ "--edge": "url(#platform-edge-cyan)", cursor: "pointer" } as CSSProperties}
              >
                <rect x="-31" y="-35" width="62" height="90" fill="#000000" opacity="0" pointerEvents="all" />
                <g className="stage-body">
                  <use href="#pedestal" />
                  <use href="#activation" />
                  <use className="icon-light" href="#icon-invoice" filter="url(#soft-glow)" />
                  <use href="#icon-invoice" filter="url(#icon-shadow)" />
                </g>
              </g>

              <g className="stage" data-stage="7" transform="translate(492.25 96)" style={{ cursor: "pointer" }}>
                <rect x="-31" y="-35" width="62" height="90" fill="#000000" opacity="0" pointerEvents="all" />
                <g className="stage-body">
                  <use href="#pedestal" />
                  <use href="#activation" />
                  <use className="icon-light" href="#icon-accounting" filter="url(#soft-glow)" />
                  <use href="#icon-accounting" filter="url(#icon-shadow)" />
                </g>
              </g>

              <g className="stage" data-stage="8" transform="translate(556 96)" style={{ cursor: "pointer" }}>
                <rect x="-31" y="-35" width="62" height="90" fill="#000000" opacity="0" pointerEvents="all" />
                <g className="stage-body">
                  <use href="#pedestal" />
                  <use href="#activation" />
                  <use className="icon-light" href="#icon-reports" filter="url(#soft-glow)" />
                  <use href="#icon-reports" filter="url(#icon-shadow)" />
                </g>
              </g>

              {/* Stage Text Labels */}
              <g textAnchor="middle">
                <text className="stage-name" x="46" y="132.1">Lead</text>
                <text className="stage-description" x="46" y="142.2">Capture &amp; Score</text>

                <text className="stage-name" x="109.75" y="132.1">Quotation</text>
                <text className="stage-description" x="109.75" y="142.2">CPQ &amp; Estimate</text>

                <text className="stage-name" x="173.5" y="132.1">Sales Order</text>
                <text className="stage-description" x="173.5" y="142.2">Confirm &amp; Lock</text>

                <text className="stage-name" x="237.25" y="132.1">Purchase</text>
                <text className="stage-description" x="237.25" y="142.2">Procure &amp; POs</text>

                <text className="stage-name" x="301" y="132.1">Inventory</text>
                <text className="stage-description" x="301" y="142.2">Stock &amp; Multi-Bin</text>

                <text className="stage-name" x="364.75" y="132.1">Delivery</text>
                <text className="stage-description" x="364.75" y="142.2">Dispatch &amp; Track</text>

                <text className="stage-name" x="428.5" y="132.1">Invoice</text>
                <text className="stage-description" x="428.5" y="142.2">Bill &amp; E-Invoice</text>

                <text className="stage-name" x="492.25" y="132.1">Accounting</text>
                <text className="stage-description" x="492.25" y="142.2">General Ledger</text>

                <text className="stage-name" x="556" y="132.1">Reports</text>
                <text className="stage-description" x="556" y="142.2">BI &amp; Analytics</text>
              </g>
            </svg>

            <ol className="sr-only">
              <li>Lead — Capture &amp; Score</li>
              <li>Quotation — CPQ &amp; Estimate</li>
              <li>Sales Order — Confirm &amp; Lock</li>
              <li>Purchase — Procure &amp; POs</li>
              <li>Inventory — Stock &amp; Multi-Bin</li>
              <li>Delivery — Dispatch &amp; Track</li>
              <li>Invoice — Bill &amp; E-Invoice</li>
              <li>Accounting — General Ledger</li>
              <li>Reports — BI &amp; Analytics</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
