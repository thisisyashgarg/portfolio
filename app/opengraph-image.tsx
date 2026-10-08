import { ImageResponse } from "next/og";
import data, { PROFILE_PIC } from "@/src/lib/constants";

export const alt = `${data.name}, ${data.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "space-between", padding: 80, background: "#fafafa", color: "#18181b" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>{data.name}</div>
          <div style={{ fontSize: 56, color: "#5b5b66", marginTop: 16, letterSpacing: -2 }}>Full stack developer.</div>
          <div style={{ fontSize: 30, color: "#d4471f", marginTop: 48 }}>thisisyashgarg.com</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PROFILE_PIC} width={360} height={450} style={{ objectFit: "cover", borderRadius: 24 }} alt="" />
      </div>
    ),
    size,
  );
}
