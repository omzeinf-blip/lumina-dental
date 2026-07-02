import type { MetadataRoute } from "next";
import { TREATMENTS, BLOG_POSTS } from "@/lib/data";

const BASE = "https://luminadental.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/doctors",
    "/pricing",
    "/contact",
    "/book-appointment",
    "/blog",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const treatmentRoutes = TREATMENTS.filter((t) =>
    ["veneers", "invisalign", "teeth-whitening", "dental-implants", "smile-makeover"].includes(t.slug)
  ).map((t) => ({
    url: `${BASE}/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...blogRoutes];
}
