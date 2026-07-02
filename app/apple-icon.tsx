import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1414",
        }}
      >
        <span
          style={{
            fontSize: 110,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            color: "#D4AF37",
          }}
        >
          L
        </span>
      </div>
    ),
    { ...size }
  );
}
