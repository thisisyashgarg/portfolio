import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/src/lib/constants";
import { getPost, posts } from "@/src/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: post.title, description: post.description, publishedTime: post.date, images: [post.image.src] },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [post.image.src] },
  };
}

const date = (d: string) => new Date(`${d}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function BlogPost({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: `https://thisisyashgarg.com${post.image.src}`,
    mainEntityOfPage: `https://thisisyashgarg.com/blog/${post.slug}`,
    author: { "@type": "Person", name: data.name, url: "https://thisisyashgarg.com" },
  };

  return (
    <main className="mx-auto max-w-xl px-4 py-16 text-[15px] leading-relaxed sm:px-6 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Link href="/" className="link text-muted">{data.name}</Link>
      <article className="mt-10">
        <h1 className="text-2xl font-medium leading-snug tracking-tight">{post.title}</h1>
        <p className="mt-2 text-sm text-muted">{date(post.date)}</p>
        <figure className="mt-8">
          <Image src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height} priority sizes="(min-width: 640px) 576px, 100vw" className="rounded-lg ring-1 ring-line" />
          <figcaption className="mt-2 text-center text-sm text-muted">{post.image.caption}</figcaption>
        </figure>
        <div className="post mt-8" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </main>
  );
}
