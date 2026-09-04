import Image from "next/image";
import type { Metadata } from "next";
import EmpresasCarousel from "@/components/organisms/home/EmpresasCarousel";
import QuePuedeSimularse from "@/components/organisms/home/QuePuedeSimularse";
import EvidenciaConductual from "@/components/organisms/home/EvidenciaConductual";
import CasosDeUso from "@/components/organisms/home/CasosDeUso";
import CasoOracle from "@/components/organisms/home/CasoOracle";
import ComparisonTable from "@/components/organisms/home/ComparisonTable";
import FraseSection from "@/components/organisms/home/FraseSection";
import Footer from "@/components/organisms/shared/Footer";
import HeroSection from "@/components/organisms/home/HeroSection";
import LiveSimulation from "@/components/organisms/home/LiveSimulation";
import SimulationDefinition from "@/components/organisms/home/SimulationDefinition";
import FAQSection from "@/components/organisms/home/FAQSection";
import { getLastModified } from "@/lib/lastModified";
import { siteConfig } from "@/lib/seo";

const title = "Infraestructura de Simulación Laboral para Programas de Formación | No Country";
const description =
  "Convertí programas de formación en experiencias de trabajo observables. Simulación Laboral para crear equipos reales, observar colaboración y generar evidencia de empleabilidad.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title,
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <div className="relative bg-[#000115]">
        {/* Mapa de fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/brand/map.png"
            alt="Mapa global de simulaciones laborales"
            fill
            priority
            className="object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000115]/60 via-[#000115]/20 to-[#000115]" />
        </div>

        <div className="relative z-10">
          <EmpresasCarousel />
          <HeroSection />
        </div>
      </div>
      <LiveSimulation />
      <SimulationDefinition />
      <QuePuedeSimularse />
      <EvidenciaConductual />
      <CasosDeUso />
      <CasoOracle />
      <ComparisonTable />
      <FraseSection />
      <FAQSection />
      <Footer
        lastUpdated={{ date: getLastModified("app/page.tsx"), url: siteConfig.url }}
      />
    </main>
  );
}