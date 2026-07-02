import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lumina Dental — Luxury Cosmetic Dentistry",
    short_name: "Lumina Dental",
    description:
      "Luxury cosmetic dentistry for your perfect smile — bespoke veneers, whitening, and full smile design.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1414",
    theme_color: "#0F766E",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
