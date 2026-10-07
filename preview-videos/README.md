# Mossie ERP preview videos

Eleven five-second, silent Remotion animations: eight module previews and three homepage previews.

Open `index.html` directly in a browser to play, filter and download the videos. No server or website build is required for the gallery.

Every MP4 is 1600 × 900, 30 fps, 150 frames, H.264 with yuv420p pixels. Each has a matching JPEG poster. `manifest.json` lists shown features, website routes, and the website feature/workflow titles used as the content reference. The clips select key features rather than showing every feature in five seconds.

These are illustrative product windows with fictional sample data, not recordings of the live ERP. Accounting and project visuals are based on website descriptions; the prior live account review could not verify those areas. Animated document links and status changes do not establish that the live system implements those automations. No employee information, contact information or login credentials is included.

## Videos

| File | Preview |
| --- | --- |
| `crm-preview.mp4` | CRM deal pipeline and follow-ups |
| `sales-preview.mp4` | Sales order and fulfillment |
| `inventory-preview.mp4` | Warehouse transfer and tracking |
| `purchase-preview.mp4` | Supplier comparison and purchase flow |
| `production-preview.mp4` | Shop-floor progress and quality |
| `accounting-preview.mp4` | Ledger, bank status and cash flow |
| `hrms-preview.mp4` | Workforce inputs and payroll preparation |
| `project-preview.mp4` | Gantt timeline, time and costs |
| `home-dashboard-preview.mp4` | Business overview |
| `home-workflow-preview.mp4` | Connected operational journey |
| `home-modules-preview.mp4` | Eight-module platform overview |

## Edit or render again

The separate `remotion/` project contains its own dependencies and lockfile. It does not change the website's package.json or production source.

```bash
cd preview-videos/remotion
npm ci
npm run dev -- --port=3400
npm run lint
node render-previews.mjs
```

The render script uses `/usr/bin/google-chrome` by default. Set `REMOTION_BROWSER_EXECUTABLE` to a different installed Chrome path if needed. Render posters with `node render-previews.mjs --stills`, or one composition with `node render-previews.mjs --only=HRMS`.

Edit `src/Scenes.tsx` for module workflows, `src/Composition.tsx` for the product window, and `src/ui.tsx` for shared styling. `src/Root.tsx` registers all eleven compositions. `src/website-content.json` preserves a sanitized content reference from the website. The Inter font is copied from the existing project's locally available font.

No production integration has been performed. The gallery and clips are ready for review before any website changes.
