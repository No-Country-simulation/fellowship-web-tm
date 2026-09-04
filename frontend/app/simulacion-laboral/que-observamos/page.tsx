import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import HeroSL from "@/components/organisms/simulacion-laboral/HeroSL";
import SeisDimensiones from "@/components/organisms/simulacion-laboral/que-observamos/SeisDimensiones";
import LoQueSigue from "@/components/organisms/simulacion-laboral/que-observamos/LoQueSigue";
import Footer from "@/components/organisms/shared/Footer";
import CTAFinal from "@/components/organisms/shared/CTAFinal";
import { getLastModified } from "@/lib/lastModified";

const title = "Qué observamos en una Simulación Laboral";
const description =
  "Las seis dimensiones de comportamiento que se observan durante una simulación laboral, y qué sigue después de participar.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/simulacion-laboral/que-observamos` },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/simulacion-laboral/que-observamos`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function QueObservamosPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <HeroSL />
      <SeisDimensiones />
      <LoQueSigue />
      <CTAFinal />
      <Footer
        lastUpdated={{
          date: getLastModified("app/simulacion-laboral/que-observamos/page.tsx"),
          url: `${siteConfig.url}/simulacion-laboral/que-observamos`,
        }}
      />
    </main>
  );
}
