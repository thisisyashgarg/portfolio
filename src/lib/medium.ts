import data from "@/src/lib/constants";

export type MediumPost = { title: string; url: string; date: string };

const FEED = data.social.medium.replace("medium.com/", "medium.com/feed/");

const field = (item: string, tag: string) =>
  item.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`))?.[1].trim() ?? "";

export async function mediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch(FEED, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Medium feed ${res.status}`);
    const xml = await res.text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => ({
      title: field(item, "title"),
      url: field(item, "link").split("?")[0],
      date: new Date(field(item, "pubDate")).toISOString().slice(0, 10),
    }));
  } catch (e) {
    console.error("medium feed failed", e);
    return [];
  }
}
