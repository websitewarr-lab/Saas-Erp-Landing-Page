import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mossierp.com";
  const lastModified = new Date("2026-10-07T00:00:00.000Z");

  const mainRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/modules", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/cancellation-policy", priority: 0.3, changeFrequency: "monthly" as const },
  ];

  return mainRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
