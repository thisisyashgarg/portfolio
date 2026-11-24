import type { MetadataRoute } from "next";
import data from "@/src/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${data.name}, ${data.title}`,
    short_name: data.name,
    description: data.about[0],
    start_url: "/",
    display: "browser",
    background_color: "#fafafa",
    theme_color: "#fafafa",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
