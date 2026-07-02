import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lumina Dental — Luxury Cosmetic Dentistry for Your Perfect Smile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(ellipse at top right, rgba(15,118,110,0.55), transparent 55%), radial-gradient(ellipse at bottom left, rgba(212,175,55,0.18), transparent 50%), #0B1414",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#D4AF37",
            fontFamily: "monospace",
          }}
        >
          <div style={{ width: 32, height: 1, background: "rgba(212,175,55,0.6)" }} />
          Luxury Cosmetic Dentistry
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 78,
            lineHeight: 1.05,
            color: "#FAFAF8",
            fontFamily: "Georgia, serif",
            maxWidth: 920,
          }}
        >
          Lumina Dental
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 34,
            fontStyle: "italic",
            color: "#D4AF37",
            fontFamily: "Georgia, serif",
          }}
        >
          for your perfect smile.
        </div>
      </div>
    ),
    { ...size }
  );
}
