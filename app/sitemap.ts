import type { MetadataRoute } from "next";
import { PROFILE_PIC, SITE_URL } from "@/src/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1, images: [PROFILE_PIC] }];
}
