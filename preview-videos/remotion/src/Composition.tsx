import React from "react";
import {
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/fonts";
import { Scene } from "./Scenes";
import {
  C,
  Icon,
  MODULES,
  staged,
  type ModuleKey,
  type PreviewProps,
} from "./ui";
import websiteContent from "./website-content.json";

void loadFont({
  family: "Mossie Inter",
  url: staticFile("inter-latin.woff2"),
  weight: "100 900",
});

const home = {
  "home-dashboard": {
    label: "Business overview",
    headline: "One calm platform for your whole business.",
    features: [
      "A shared business view",
      "Work across teams",
      "Eight connected modules",
    ],
    title: "Business dashboard",
  },
  "home-workflow": {
    label: "Connected workflows",
    headline: "Keep the context. Move the business forward.",
    features: [
      "Linked documents",
      "Shared operational context",
      "From inquiry to finance",
    ],
    title: "Connected workflow",
  },
  "home-modules": {
    label: "The Mossie platform",
    headline: "Your whole business, in one place.",
    features: [
      "Eight core modules",
      "One shared workspace",
      "Built around your teams",
    ],
    title: "Platform modules",
  },
};

export const ProductPreview: React.FC<PreviewProps> = ({ kind }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  const isHome = kind.startsWith("home-");
  const moduleKey = kind as ModuleKey;
  const config = isHome ? home[kind as keyof typeof home] : MODULES[moduleKey];
  const title = isHome
    ? home[kind as keyof typeof home].title
    : MODULES[moduleKey].short;
  const nav = isHome
    ? [
        "Business overview",
        "Module directory",
        "Connected workflow",
        "Reports & insights",
      ]
    : MODULES[moduleKey].nav;
  const active = isHome
    ? kind === "home-workflow"
      ? 2
      : kind === "home-modules"
        ? 1
        : 0
    : {
        crm: 2,
        sales: 2,
        inventory: 2,
        purchase: 2,
        production: 4,
        accounting: 1,
        hrms: 3,
        project: 2,
      }[moduleKey];
  const reveal = staged(t, 0, 0.45);
  return (
    <AbsoluteFill
      style={{
        fontFamily: '"Mossie Inter",sans-serif',
        color: C.ink,
        background: "#f5f9ff",
        overflow: "hidden",
      }}
    >
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 15% 0%, #dfedff 0%, transparent 55%), radial-gradient(ellipse at 92% 100%, #dbefff 0%, transparent 48%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 37,
          left: 62,
          right: 62,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 23,
            fontWeight: 750,
            letterSpacing: -0.8,
          }}
        >
          <span
            style={{
              display: "grid",
              placeItems: "center",
              width: 32,
              height: 32,
              borderRadius: 9,
              background: C.blue,
              color: "white",
              fontSize: 23,
            }}
          >
            m
          </span>
          Mossie
          <span
            style={{
              fontSize: 15,
              fontWeight: 550,
              color: C.muted,
              letterSpacing: 0,
              marginLeft: 2,
            }}
          >
            ERP
          </span>
        </div>
        <div
          style={{
            fontSize: 13,
            color: C.blue,
            fontWeight: 650,
            letterSpacing: 1.2,
            textTransform: "uppercase",
          }}
        >
          {isHome ? config.label : websiteContent[moduleKey].name}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 88,
          left: 62,
          fontSize: 37,
          fontWeight: 730,
          letterSpacing: -1.4,
          opacity: reveal,
          translate: `0px ${(1 - reveal) * 10}px`,
        }}
      >
        {config.headline}
      </div>
      <div
        style={{
          position: "absolute",
          top: 149,
          left: 60,
          width: 1480,
          height: 680,
          borderRadius: 19,
          background: "white",
          border: "1px solid #d7e4f2",
          boxShadow: "0 24px 65px #153d6820",
          overflow: "hidden",
          opacity: 0.92 + reveal * 0.08,
          translate: `0px ${(1 - reveal) * 12}px`,
        }}
      >
        <div
          style={{
            height: 41,
            boxSizing: "border-box",
            padding: "0 18px",
            background: "#f7f9fc",
            borderBottom: "1px solid " + C.line,
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
        >
          {["#ff7d77", "#f6c65c", "#63c991"].map((color) => (
            <span
              key={color}
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: color,
              }}
            />
          ))}
          <div style={{ marginLeft: 24, fontSize: 12, color: C.muted }}>
            Mossie ERP / {title}
          </div>
          <div style={{ marginLeft: "auto", fontSize: 11, color: C.muted }}>
            Illustrative preview
          </div>
        </div>
        <div style={{ display: "flex", height: 639 }}>
          <aside
            style={{
              width: 218,
              flexShrink: 0,
              background: C.navy,
              color: "#a7b8cc",
              padding: "23px 16px",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontSize: 18,
                color: "white",
                fontWeight: 700,
                padding: "0 10px 23px",
              }}
            >
              <Icon
                name={isHome ? "grid" : MODULES[moduleKey].icon}
                size={23}
              />
              {title}
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: 1.4,
                padding: "0 10px 13px",
                color: "#7b93ac",
              }}
            >
              WORKSPACE
            </div>
            {nav.map((item, i) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  fontSize: 12.5,
                  fontWeight: i === active ? 650 : 450,
                  padding: "13px 12px",
                  marginBottom: 5,
                  borderRadius: 8,
                  background: i === active ? "#204265" : "transparent",
                  color: i === active ? "#e5f2ff" : "#a7b8cc",
                }}
              >
                <Icon
                  name={
                    i === 0
                      ? "grid"
                      : i === nav.length - 1
                        ? "chart"
                        : "document"
                  }
                  size={16}
                />
                {item}
              </div>
            ))}
            <div
              style={{
                position: "absolute",
                left: 26,
                right: 24,
                bottom: 27,
                paddingTop: 17,
                borderTop: "1px solid #ffffff12",
                fontSize: 11,
                color: "#7f97b0",
              }}
            >
              Demo workspace
              <div style={{ marginTop: 6, color: "#b9c8d9", fontSize: 12 }}>
                Connected. Clear. Calm.
              </div>
            </div>
          </aside>
          <main style={{ flex: 1, minWidth: 0, background: "#f6f8fc" }}>
            <div
              style={{
                height: 49,
                background: "white",
                borderBottom: "1px solid " + C.line,
                display: "flex",
                alignItems: "center",
                padding: "0 27px",
                gap: 11,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 650 }}>{title}</span>
              <span style={{ fontSize: 12, color: C.muted }}>
                {" "}
                / {nav[active]}
              </span>
              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: 13,
                  color: C.muted,
                }}
              >
                <Icon name="search" size={17} />
                <span style={{ fontSize: 11 }}>Search workspace</span>
                <span style={{ height: 20, width: 1, background: C.line }} />
                <Icon name="bell" size={17} />
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: C.pale,
                    color: C.blue,
                    fontSize: 10,
                    fontWeight: 650,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  DE
                </span>
              </div>
            </div>
            <div style={{ padding: "23px 27px", boxSizing: "border-box" }}>
              <Scene kind={kind} t={t} />
            </div>
          </main>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 62,
          right: 62,
          display: "flex",
          alignItems: "center",
          gap: 19,
        }}
      >
        {config.features.map((feature, i) => (
          <div
            key={feature}
            style={{
              display: "flex",
              gap: 7,
              alignItems: "center",
              fontSize: 12,
              fontWeight: 550,
              color: "#47627e",
              opacity: 0.3 + staged(t, i * 0.23, i * 0.23 + 0.45) * 0.7,
            }}
          >
            <Icon name="check" size={14} color={C.blue} />
            {feature}
          </div>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 11, color: C.muted }}>
          Sample data · No live transactions
        </span>
      </div>
    </AbsoluteFill>
  );
};
