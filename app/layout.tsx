import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import data, { PROFILE_PIC, SITE_URL } from "@/src/lib/constants";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const title = "Yash Garg | Full Stack Developer";
const description =
  "Yash Garg is a full stack developer building web products with Next.js and TypeScript for early-stage startups.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  authors: [{ name: data.name, url: SITE_URL }],
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e10" },
  ],
};

const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: data.name,
  url: SITE_URL,
  image: PROFILE_PIC,
  description: data.about[0],
  jobTitle: data.title,
  worksFor: { "@type": "Organization", name: "Clinsight AI", url: "https://clinsight.ai/" },
  email: `mailto:${data.social.email}`,
  alumniOf: { "@type": "CollegeOrUniversity", name: data.education.school },
  award: data.awards,
  knowsAbout: data.skills.flatMap((s) => s.items),
  sameAs: [data.social.github, data.social.linkedin, data.social.twitter, data.social.medium],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: data.name, inLanguage: "en", publisher: { "@id": person["@id"] } },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: title,
      description,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": person["@id"] },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
