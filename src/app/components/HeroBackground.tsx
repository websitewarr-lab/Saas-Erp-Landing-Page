// Precomputed clean static values to prevent SSR/client floating-point precision hydration discrepancies
const PERSPECTIVE_RAYS = [
  { xBottom: -300, strokeWidth: "1.2" },
  { xBottom: -243.33, strokeWidth: "0.75" },
  { xBottom: -186.67, strokeWidth: "1.2" },
  { xBottom: -130, strokeWidth: "0.75" },
  { xBottom: -73.33, strokeWidth: "1.2" },
  { xBottom: -16.67, strokeWidth: "0.75" },
  { xBottom: 40, strokeWidth: "1.2" },
  { xBottom: 96.67, strokeWidth: "0.75" },
  { xBottom: 153.33, strokeWidth: "1.2" },
  { xBottom: 210, strokeWidth: "0.75" },
  { xBottom: 266.67, strokeWidth: "1.2" },
  { xBottom: 323.33, strokeWidth: "0.75" },
  { xBottom: 380, strokeWidth: "1.2" },
  { xBottom: 436.67, strokeWidth: "0.75" },
  { xBottom: 493.33, strokeWidth: "1.2" },
  { xBottom: 550, strokeWidth: "0.75" },
  { xBottom: 606.67, strokeWidth: "1.2" },
  { xBottom: 663.33, strokeWidth: "0.75" },
  { xBottom: 720, strokeWidth: "1.2" },
  { xBottom: 776.67, strokeWidth: "0.75" },
  { xBottom: 833.33, strokeWidth: "1.2" },
  { xBottom: 890, strokeWidth: "0.75" },
  { xBottom: 946.67, strokeWidth: "1.2" },
  { xBottom: 1003.33, strokeWidth: "0.75" },
  { xBottom: 1060, strokeWidth: "1.2" },
  { xBottom: 1116.67, strokeWidth: "0.75" },
  { xBottom: 1173.33, strokeWidth: "1.2" },
  { xBottom: 1230, strokeWidth: "0.75" },
  { xBottom: 1286.67, strokeWidth: "1.2" },
  { xBottom: 1343.33, strokeWidth: "0.75" },
  { xBottom: 1400, strokeWidth: "1.2" },
  { xBottom: 1456.67, strokeWidth: "0.75" },
  { xBottom: 1513.33, strokeWidth: "1.2" },
  { xBottom: 1570, strokeWidth: "0.75" },
  { xBottom: 1626.67, strokeWidth: "1.2" },
  { xBottom: 1683.33, strokeWidth: "0.75" },
  { xBottom: 1740, strokeWidth: "1.2" },
];

const TRANSVERSE_LINES = [
  { y: 110.62, strokeWidth: 1.05 },
  { y: 127.32, strokeWidth: 1.09 },
  { y: 147.77, strokeWidth: 1.13 },
  { y: 171.82, strokeWidth: 1.19 },
  { y: 199.36, strokeWidth: 1.24 },
  { y: 230.3, strokeWidth: 1.31 },
  { y: 264.57, strokeWidth: 1.38 },
  { y: 302.09, strokeWidth: 1.47 },
  { y: 342.79, strokeWidth: 1.55 },
  { y: 386.63, strokeWidth: 1.65 },
  { y: 433.56, strokeWidth: 1.75 },
  { y: 480.0, strokeWidth: 1.85 },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* 1. TOP AMBIENT WARM SUNRISE GLOW (Peach / Coral behind headline & buttons) */}
      <div 
        className="absolute top-[-70px] left-1/2 -translate-x-1/2 w-[920px] h-[500px] rounded-full opacity-85"
        style={{
          background: "radial-gradient(ellipse 65% 55% at 52% 38%, rgba(251, 146, 60, 0.32) 0%, rgba(254, 215, 170, 0.48) 28%, rgba(255, 237, 213, 0.25) 58%, transparent 80%)",
          filter: "blur(45px)",
        }}
      />
      <div 
        className="absolute top-[20px] right-[18%] w-[480px] h-[360px] rounded-full opacity-65"
        style={{
          background: "radial-gradient(circle, rgba(251, 113, 133, 0.24) 0%, rgba(254, 215, 170, 0.38) 45%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />

      {/* 2. LEFT FLANK AMBIENT CYAN/TEAL BEAM (Behind left cards) */}
      <div 
        className="absolute top-[30%] left-[2%] xl:left-[5%] w-[420px] h-[450px] rounded-full opacity-70"
        style={{
          background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(56, 189, 248, 0.35) 0%, rgba(20, 184, 166, 0.2) 45%, transparent 75%)",
          filter: "blur(55px)",
        }}
      />

      {/* 3. RIGHT FLANK AMBIENT SKY/INDIGO BEAM (Behind right cards) */}
      <div 
        className="absolute top-[30%] right-[2%] xl:right-[5%] w-[420px] h-[450px] rounded-full opacity-70"
        style={{
          background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(56, 189, 248, 0.35) 0%, rgba(99, 102, 241, 0.2) 45%, transparent 75%)",
          filter: "blur(55px)",
        }}
      />

      {/* 4. UPPER TECH DOT MATRIX PATTERN */}
      <div 
        className="absolute top-0 inset-x-0 h-[500px] opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#0F172A 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
        }}
      />

      {/* Subtle tech crosshairs in upper atmosphere */}
      <div className="absolute top-16 left-[9%] text-slate-400/40 text-[12px] font-mono">+</div>
      <div className="absolute top-16 right-[9%] text-slate-400/40 text-[12px] font-mono">+</div>
      <div className="absolute top-48 left-[17%] text-slate-400/30 text-[12px] font-mono">+</div>
      <div className="absolute top-48 right-[17%] text-slate-400/30 text-[12px] font-mono">+</div>

      {/* 5. LUMINOUS 3D PERSPECTIVE BLUE GRID FLOOR (Zoho Screenshot 2 Style) */}
      <div className="absolute bottom-0 inset-x-0 h-[480px] flex flex-col justify-end">
        {/* Floor Sky-Blue Ambient Wash */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(224, 242, 254, 0.4) 0%, rgba(186, 230, 253, 0.8) 35%, rgba(147, 197, 253, 0.88) 70%, rgba(219, 234, 254, 0.95) 100%)",
            maskImage: "linear-gradient(to top, black 88%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 88%, transparent 100%)",
          }}
        />

        {/* Center Horizon Light Burst */}
        <div 
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[720px] h-[170px] rounded-full opacity-75"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 255, 255, 0.98) 0%, rgba(56, 189, 248, 0.65) 42%, transparent 80%)",
            filter: "blur(25px)",
          }}
        />

        {/* Crisp Perspective Grid SVG */}
        <svg 
          className="w-full h-full absolute inset-0 overflow-visible opacity-80"
          viewBox="0 0 1440 480"
          preserveAspectRatio="none"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, transparent 24%, black 44%, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 24%, black 44%, black 100%)",
          }}
        >
          <defs>
            <linearGradient id="rayFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="transverseFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.95" />
              <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Perspective Rays radiating from center horizon (x: 720, y: 86) */}
          {PERSPECTIVE_RAYS.map((ray, i) => (
            <line
              key={`ray-${i}`}
              x1={720}
              y1={86}
              x2={ray.xBottom}
              y2={480}
              stroke="url(#rayFade)"
              strokeWidth={ray.strokeWidth}
            />
          ))}

          {/* Transverse (Horizontal) Lines exponentially spaced towards foreground */}
          {TRANSVERSE_LINES.map((line, i) => (
            <line
              key={`transverse-${i}`}
              x1={0}
              y1={line.y}
              x2={1440}
              y2={line.y}
              stroke="url(#transverseFade)"
              strokeWidth={line.strokeWidth}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

