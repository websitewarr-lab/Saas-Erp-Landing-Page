<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
# GEMINI.md - MossiERP Landing Page & Platform Showcase

## Project Overview
This repository contains the marketing, landing page, and product module showcase for **MossiERP** ("One calm platform for your whole business"), a unified SaaS ERP solution integrating Finance, HRMS, CRM, Inventory, Production, Projects, Sales, and Purchasing.

- **Repository**: `kapilmenaria/Saas-Erp-Landing-Page`
- **Application Type**: Next.js App Router marketing & product discovery application
- **Target Audience**: Growing enterprises, operations leads, finance directors, and business executives

---

## Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) 16.3.4 (App Router)
- **UI Runtime**: React 19.2.8 / React DOM 19.2.8
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS (`@tailwindcss/postcss`) and OKLCH color token system defined in [`src/app/globals.css`](file:///home/kaps/Documents/package/src/app/globals.css)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript 5 (Strict type checking)
- **Fonts**: Inter (`--font-inter`), Space Grotesk (`--font-space-grotesk`), JetBrains Mono (`--font-jetbrains-mono`) loaded via `next/font/google` in [`src/app/layout.tsx`](file:///home/kaps/Documents/package/src/app/layout.tsx)
- **Linting**: ESLint 9 with `eslint-config-next`

---

## Directory Structure

```
├── public/                 # Static assets, branding, and preview images
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout (fonts, metadata, body container)
│       ├── page.tsx        # Main homepage landing experience
│       ├── globals.css     # Tailwind v4 imports, @theme tokens, OKLCH design variables
│       ├── sitemap.ts      # Root dynamic sitemap
│       ├── robots.ts       # Search crawler robot directives
│       ├── components/     # Homepage & shared UI blocks
│       │   ├── SiteHeader.tsx             # Main navigation bar & mobile menu
│       │   ├── SiteFooter.tsx             # Site footer with module/legal links
│       │   ├── HeroLaptopShowcase.tsx     # Hero interactive laptop / ERP mockup
│       │   ├── HeroBackground.tsx         # Ambient visual background / gradients
│       │   ├── PlatformModulesShowcase.tsx# ERP module tabbed switcher
│       │   ├── ConnectedWorkflow.tsx      # Cross-module workflow visualization
│       │   ├── IntegrationsEcosystem.tsx  # Third-party integrations grid
│       │   ├── IndustrySolutions.tsx      # Industry-specific ERP offerings
│       │   ├── ModuleDetailTemplate.tsx   # Reusable layout template for deep-dive module pages
│       │   └── modules/                   # Module metadata, feature items, showcase data
│       ├── modules/        # Dedicated deep-dive routes for each ERP module
│       │   ├── page.tsx    # Modules catalog / directory page
│       │   ├── sitemap.ts  # Modules sub-sitemap
│       │   ├── accounting/ # Accounting & Finance
│       │   ├── crm/        # CRM & Sales pipeline
│       │   ├── hrms/       # HRMS, Payroll & Attendance
│       │   ├── inventory/  # Inventory & Multi-warehouse
│       │   ├── production/ # Manufacturing & Work orders
│       │   ├── project/    # Project Management & Timesheets
│       │   ├── purchase/   # Purchase Orders & Vendor Management
│       │   └── sales/      # Sales Orders & Invoicing
│       ├── privacy-policy/        # Legal: Privacy Policy
│       ├── terms-and-conditions/  # Legal: Terms & Conditions
│       └── cancellation-policy/   # Legal: Cancellation Policy
├── package.json            # Project dependencies and run scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js compiler and build configuration
└── AGENTS.md               # Upstream Next.js version agent directives
```

---

## Development & Build Commands

Always run commands from the repository root:

```bash
# Start local development server (defaults to http://localhost:3000)
npm run dev

# Run full production build (includes TypeScript type checking and page generation)
npm run build

# Start production server after building
npm run start

# Run ESLint validation
npm run lint
```

---

## Agent Coding Guidelines & Constraints

1. **Next.js Modern Conventions & Breaking Changes**
   - Heed all notices in [`AGENTS.md`](file:///home/kaps/Documents/package/AGENTS.md). Next.js 15+ / 16 includes breaking changes compared to earlier versions (e.g., asynchronous request headers, cookies, params, searchParams).
   - Use Server Components by default for static data, SEO, and static layouts.
   - Use `"use client"` only at component boundaries that require browser APIs, local state (`useState`, `useEffect`), or interactive Framer Motion animations.

2. **Tailwind CSS v4 & Styling Rules**
   - The project uses Tailwind CSS v4. Styles are registered via `@import "tailwindcss";` and `@theme inline` in [`src/app/globals.css`](file:///home/kaps/Documents/package/src/app/globals.css).
   - Utilize existing OKLCH theme variables (`var(--primary)`, `var(--muted)`, `var(--surface)`, `var(--border)`, `var(--card)`) rather than hardcoding arbitrary RGB/HEX color values.
   - Ensure high contrast and accessibility standards across light and dark backgrounds.

3. **TypeScript & Type Safety**
   - Avoid `any`. Define clear types and interfaces for component props, data models, and icon component types (e.g. `type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;`).
   - Keep exported components properly typed and avoid implicit return types where ambiguous.

4. **Component Cleanliness & Performance**
   - Keep components modular. Decompose complex interactive mockups into manageable sub-components.
   - For images, prefer Next.js `<Image />` component with appropriate `sizes`, `priority`, or `loading="lazy"` attributes when serving raster graphics.
   - Ensure animations in Framer Motion respect `prefers-reduced-motion` and do not cause unnecessary re-renders or layout thrashing.

5. **Verification Checklist**
   - Before completing tasks, always run `npm run lint` and verify type validity (`npx tsc --noEmit` or `npm run build`).
   - Preserve existing comments and docstrings.
