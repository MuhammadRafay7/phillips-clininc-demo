import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/anti-aging",
  "/team",
  "/reviews",
  "/forms",
  "/supplements",
  "/weight-loss-trials",
  "/kits",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://phillipscliniclv.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}
