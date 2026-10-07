import { bundle } from "@remotion/bundler";
import {
  getCompositions,
  openBrowser,
  renderMedia,
  renderStill,
} from "@remotion/renderer";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// This project is isolated from the website. Run from any working directory.
const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.resolve(root, "..");
const stillsOnly = process.argv.includes("--stills");
const selected = process.argv
  .find((arg) => arg.startsWith("--only="))
  ?.split("=")[1];
const browserExecutable =
  process.env.REMOTION_BROWSER_EXECUTABLE || "/usr/bin/google-chrome";
const names = {
  CRM: "crm",
  Sales: "sales",
  Inventory: "inventory",
  Purchase: "purchase",
  Production: "production",
  Accounting: "accounting",
  HRMS: "hrms",
  Projects: "project",
  "Homepage-Dashboard": "home-dashboard",
  "Homepage-Workflow": "home-workflow",
  "Homepage-Modules": "home-modules",
};

await mkdir(output, { recursive: true });
console.log("Bundling the eleven preview compositions…");
const serveUrl = await bundle({
  entryPoint: path.join(root, "src/index.ts"),
  publicDir: path.join(root, "public"),
  rspack: true,
});
const browser = await openBrowser("chrome", {
  browserExecutable,
  logLevel: "error",
});
const results = selected
  ? JSON.parse(
      await readFile(path.join(output, "render-results.json"), "utf8").catch(
        (error) => {
          if (error.code === "ENOENT") return "[]";
          throw error;
        },
      ),
    ).filter((result) => result.id !== selected)
  : [];
try {
  const compositions = await getCompositions(serveUrl, {
    puppeteerInstance: browser,
  });
  if (
    selected &&
    !compositions.some((composition) => composition.id === selected)
  ) {
    throw new Error("Unknown composition: " + selected);
  }
  for (const composition of compositions) {
    if (selected && composition.id !== selected) continue;
    const name = names[composition.id];
    if (!name) throw new Error("Unexpected composition: " + composition.id);
    const poster = path.join(output, name + "-poster.jpg");
    await renderStill({
      serveUrl,
      composition,
      puppeteerInstance: browser,
      output: poster,
      imageFormat: "jpeg",
      jpegQuality: 95,
      frame: 105,
      logLevel: "error",
    });
    console.log("Poster ready: " + composition.id);
    if (stillsOnly) continue;
    let checkpoint = -1;
    const video = path.join(output, name + "-preview.mp4");
    await renderMedia({
      serveUrl,
      composition,
      puppeteerInstance: browser,
      outputLocation: video,
      codec: "h264",
      pixelFormat: "yuv420p",
      crf: 20,
      imageFormat: "jpeg",
      jpegQuality: 95,
      concurrency: 3,
      muted: true,
      overwrite: true,
      logLevel: "error",
      onProgress: ({ progress }) => {
        const p = Math.floor(progress * 4);
        if (p !== checkpoint) {
          checkpoint = p;
          console.log(composition.id + " " + Math.min(100, p * 25) + "%");
        }
      },
    });
    results.push({
      id: composition.id,
      filename: path.basename(video),
      poster: path.basename(poster),
      width: composition.width,
      height: composition.height,
      fps: composition.fps,
      frames: composition.durationInFrames,
      duration: composition.durationInFrames / composition.fps,
    });
    console.log("Video ready: " + composition.id);
  }
} finally {
  await browser.close({ silent: true });
}
if (!stillsOnly)
  await writeFile(
    path.join(output, "render-results.json"),
    JSON.stringify(results, null, 2) + "\n",
  );
console.log(stillsOnly ? "Posters complete." : "Video rendering complete.");
