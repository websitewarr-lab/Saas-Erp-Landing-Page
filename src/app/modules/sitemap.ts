import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mossierp.com";
  const lastModified = new Date();

  const moduleSlugs = [
    "",
    "crm",
    "inventory",
    "purchase",
    "sales",
    "production",
    "accounting",
    "hrms",
    "project",
  ];

  return moduleSlugs.map((slug) => {
    const routePath = slug ? `/modules/${slug}` : "/modules";
    const priority = slug === "" ? 0.85 : 0.9;

    return {
      url: `${baseUrl}${routePath}`,
      lastModified,
      changeFrequency: "weekly",
      priority,
    };
  });
}

