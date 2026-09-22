import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import { getLastModified } from "@/lib/lastModified";
import Footer from "@/components/organisms/shared/Footer";
import HeroShowcase from "@/components/organisms/sobre-nosotros/showcase/HeroShowcase";
import Showcase from "@/components/organisms/sobre-nosotros/showcase/Showcase";

const title = "Showcase de Talento Real";
const description =
  "Explorá los proyectos de equipos reales en nuestras simulaciones laborales y hackathones — desafíos reales, evidencia real de cómo trabajan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/sobre-nosotros/showcase` },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/sobre-nosotros/showcase`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function Page() {
  const lastUpdated = getLastModified(
    "app/sobre-nosotros/showcase/page.tsx",
  );
  const pageUrl = `${siteConfig.url}/sobre-nosotros/showcase`;

  return (
    <main className="flex flex-col bg-[#000115]">
      <HeroShowcase />
      <Showcase />
      <Footer lastUpdated={{ date: lastUpdated, url: pageUrl }} />
    </main>
  );
}