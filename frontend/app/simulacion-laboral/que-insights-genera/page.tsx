import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import HeroSL from "@/components/organisms/simulacion-laboral/HeroSL";
import ParticipanteEquipo from "@/components/organisms/simulacion-laboral/que-insights-genera/ParticipanteEquipo";
import Cohorte from "@/components/organisms/simulacion-laboral/que-insights-genera/Cohorte";
import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";
import Programa from "@/components/organisms/simulacion-laboral/que-insights-genera/Programa";
import SenalAlInsight from "@/components/organisms/simulacion-laboral/que-insights-genera/SenalAlInsight";
import { getLastModified } from "@/lib/lastModified";

const title = "Qué insights genera una Simulación Laboral";
const description =
  "De la señal al insight: qué datos de comportamiento se generan a nivel participante, equipo, cohorte y programa durante una simulación laboral.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/simulacion-laboral/que-insights-genera` },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/simulacion-laboral/que-insights-genera`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function QueInsightsGeneraPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <HeroSL />
      <ParticipanteEquipo />
      <Cohorte />
      <Programa />
      <SenalAlInsight />
      <CTAFinal />
      <Footer
        lastUpdated={{
          date: getLastModified("app/simulacion-laboral/que-insights-genera/page.tsx"),
          url: `${siteConfig.url}/simulacion-laboral/que-insights-genera`,
        }}
      />
    </main>
  );
}