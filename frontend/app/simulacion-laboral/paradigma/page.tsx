import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import HeroSL from "@/components/organisms/simulacion-laboral/HeroSL";
import GapSection from "@/components/organisms/simulacion-laboral/paradigma/GapSection";
import ConceptSection from "@/components/organisms/simulacion-laboral/paradigma/ConceptSection";
import TesisSection from "@/components/organisms/simulacion-laboral/paradigma/TesisSection";
import TimeSection from "@/components/organisms/simulacion-laboral/paradigma/TimeSection";
import ContrasteSection from "@/components/organisms/simulacion-laboral/paradigma/ContrasteSection";
import Diferencias from "@/components/organisms/simulacion-laboral/paradigma/Diferencias";
import GranDiferenciacion from "@/components/organisms/simulacion-laboral/paradigma/GranDiferenciacion";
import EvidenciaEnVivo from "@/components/organisms/simulacion-laboral/paradigma/EvidenciaEnVivo";
import ElMecanismo from "@/components/organisms/simulacion-laboral/paradigma/ElMecanismo";
import Closing from "@/components/organisms/simulacion-laboral/paradigma/Closing";
import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";
import { getLastModified } from "@/lib/lastModified";

const title = "El paradigma de la Simulación Laboral";
const description =
  "Por qué el CV ya no alcanza: cómo la Simulación Laboral genera evidencia real de cómo trabaja el talento, en vez de promesas en un papel.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/simulacion-laboral/paradigma` },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/simulacion-laboral/paradigma`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function ParadigmaPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <HeroSL />
      <GapSection />
      <ConceptSection />
      <TesisSection />
      <TimeSection />
      <ContrasteSection />
      <Diferencias />
      <GranDiferenciacion />
      <EvidenciaEnVivo />
      <ElMecanismo />
      <Closing />
      <CTAFinal />
      <Footer
        lastUpdated={{
          date: getLastModified("app/simulacion-laboral/paradigma/page.tsx"),
          url: `${siteConfig.url}/simulacion-laboral/paradigma`,
        }}
      />
    </main>
  );
}
