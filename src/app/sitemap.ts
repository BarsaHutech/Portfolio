import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";
  const routes = ["", "/work", "/about", "/services", "/contact"].map((p) => ({
    url: base + p,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return routes;
}
