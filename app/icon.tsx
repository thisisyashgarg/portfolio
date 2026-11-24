import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: "#18181b", color: "#fafafa", fontSize: 260, fontWeight: 600, letterSpacing: -12 }}>
        YG
      </div>
    ),
    size,
  );
}
