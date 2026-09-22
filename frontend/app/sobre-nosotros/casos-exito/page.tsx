import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";
import HeroCasoExito from "@/components/organisms/sobre-nosotros/casos-exito/HeroCasoExito";
import Alcance from "@/components/organisms/sobre-nosotros/casos-exito/Alcance";
import AlcanceRegional from "@/components/organisms/sobre-nosotros/casos-exito/AlcanceRegional";
import Recorrido from "@/components/organisms/sobre-nosotros/casos-exito/Recorrido";
import ComoSeMide from "@/components/organisms/sobre-nosotros/casos-exito/ComoSeMide";
import DemoDay from "@/components/organisms/sobre-nosotros/casos-exito/DemoDay";
import ImpactoContratacion from "@/components/organisms/sobre-nosotros/casos-exito/ImpactoContratacion";
import EcosistemaContenido from "@/components/organisms/sobre-nosotros/casos-exito/EcosistemaContenido";
import FunnelCompleto from "@/components/organisms/sobre-nosotros/casos-exito/FunnelCompleto";
import LaRelacion from "@/components/organisms/sobre-nosotros/casos-exito/LaRelacion";
import TestimoniosCaso from "@/components/organisms/sobre-nosotros/casos-exito/TestimoniosCaso";
import ClosingCaso from "@/components/organisms/sobre-nosotros/casos-exito/ClosingCaso";
import { getLastModified } from "@/lib/lastModified";
import { siteConfig } from "@/lib/seo";
import type { Metadata } from "next";

const title = "Caso de éxito: Oracle Next Education";
const description =
  "830 estudiantes de Oracle Next Education resolvieron desafíos reales en equipos, con evidencia de desempeño documentada de punta a punta.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/sobre-nosotros/casos-exito` },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/sobre-nosotros/casos-exito`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function CasosExitoPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <HeroCasoExito />
      <Alcance />
      <AlcanceRegional />
      <Recorrido />
      <ComoSeMide />
      <DemoDay />
      <ImpactoContratacion />
      <EcosistemaContenido />
      <FunnelCompleto />
      <LaRelacion />
      <TestimoniosCaso />
      <ClosingCaso />
      
      <Footer
        lastUpdated={{
          date: getLastModified("app/sobre-nosotros/casos-exito/page.tsx"),
          url: `${siteConfig.url}/sobre-nosotros/casos-exito`,
        }}
      />
    </main>
  );
}