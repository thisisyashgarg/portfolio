import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: "#18181b", color: "#fafafa", fontSize: 92, fontWeight: 600, letterSpacing: -4 }}>
        YG
      </div>
    ),
    size,
  );
}
