import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TeamDetail from "@/components/organisms/sobre-nosotros/showcase/TeamDetail";
import { siteConfig } from "@/lib/seo";
import { getAllTeamIds, getTeamDetail } from "@/lib/showcase";

interface TeamPageProps {
  params: Promise<{ equipo: string }>;
}

export function generateStaticParams() {
  return getAllTeamIds().map((equipo) => ({ equipo }));
}

export async function generateMetadata({
  params,
}: TeamPageProps): Promise<Metadata> {
  const { equipo } = await params;
  const detail = getTeamDetail(equipo);
  if (!detail) return {};

  const { project, edition, team } = detail;
  const title = `${project.title} — ${team.label} · ${edition.month}`;
  const url = `${siteConfig.url}/sobre-nosotros/showcase/${team.id}`;

  return {
    title,
    description: project.solves,
    alternates: { canonical: url },
    // Los datos son de ejemplo: sacar esta línea cuando haya equipos reales.
    robots: { index: false },
    openGraph: {
      title,
      description: project.solves,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { equipo } = await params;
  const detail = getTeamDetail(equipo);
  if (!detail) notFound();

  return (
    <main className="flex flex-col bg-[#000115]">
      <TeamDetail detail={detail} />
    </main>
  );
}
