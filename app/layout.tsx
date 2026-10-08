import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import data, { PROFILE_PIC } from "@/src/lib/constants";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const siteUrl = "https://thisisyashgarg.com";
const title = "Yash Garg | Full Stack Developer";
const description =
  "Yash Garg is a full stack developer building web and mobile products with Next.js, React Native and TypeScript for early-stage startups.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: data.name, url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: data.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", creator: "@thisisyashgargg", title, description },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: data.name,
  url: siteUrl,
  image: PROFILE_PIC,
  jobTitle: data.title,
  email: `mailto:${data.social.email}`,
  alumniOf: { "@type": "CollegeOrUniversity", name: data.education.school },
  knowsAbout: data.skills.flatMap((s) => s.items),
  sameAs: [data.social.github, data.social.linkedin, data.social.twitter],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
        {children}
      </body>
    </html>
  );
}
