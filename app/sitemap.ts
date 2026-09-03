import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

const routes = [
  "",
  "/services",
  "/anti-aging",
  "/team",
  "/forms",
  "/supplements",
  "/weight-loss-trials",
  "/kits",
  "/contact",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `https://phillipscliniclv.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));

  const articles: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://phillipscliniclv.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...pages, ...articles];
}
