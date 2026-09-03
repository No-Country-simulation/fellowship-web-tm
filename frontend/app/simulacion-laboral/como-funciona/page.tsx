import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import HeroSL from "@/components/organisms/simulacion-laboral/HeroSL";
import PuntoDePartida from "@/components/organisms/simulacion-laboral/como-funciona/PuntoDePartida";
import Agrupamiento from "@/components/organisms/simulacion-laboral/como-funciona/Agrupamiento";
import Insumo from "@/components/organisms/simulacion-laboral/como-funciona/Insumo";
import LineaDeTiempo from "@/components/organisms/simulacion-laboral/como-funciona/LineaDeTiempo";
import LoQueSeRegistra from "@/components/organisms/simulacion-laboral/como-funciona/LoQueSeRegistra";
import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";

const title = "Cómo funciona una Simulación Laboral";
const description =
  "El proceso paso a paso: agrupamiento en equipos, desafíos reales, línea de tiempo y qué datos de comportamiento se registran durante la simulación.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/simulacion-laboral/como-funciona` },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/simulacion-laboral/como-funciona`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function ComoFuncionaPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <HeroSL />
      <PuntoDePartida />
      <Agrupamiento />
      <Insumo />
      <LineaDeTiempo />
      <LoQueSeRegistra />
      <CTAFinal />
      <Footer />
    </main>
  );
}