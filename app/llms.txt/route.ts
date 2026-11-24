import data, { RESUME_LINK, SITE_URL } from "@/src/lib/constants";

export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${data.name}`,
    "",
    `> ${data.title}. ${data.about.join(" ")}`,
    "",
    "## Work",
    ...data.experience.companies.map((c) => `- [${c.name}](${c.websiteLink}): ${c.role}, ${c.tenure}. ${c.description[0]}`),
    "",
    "## Projects",
    ...data.projects.map((p) => `- [${p.title}](${p.websiteLink}): ${p.description}`),
    "",
    "## Links",
    `- [Website](${SITE_URL})`,
    `- [Résumé](${RESUME_LINK})`,
    `- [GitHub](${data.social.github})`,
    `- [LinkedIn](${data.social.linkedin})`,
    `- [Twitter](${data.social.twitter})`,
    `- [Medium](${data.social.medium})`,
    `- Email: ${data.social.email}`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
