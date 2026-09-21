import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

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
  return null;
}
