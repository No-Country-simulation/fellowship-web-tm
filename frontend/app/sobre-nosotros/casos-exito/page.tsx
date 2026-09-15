import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";
import HeroCasoExito from "@/components/organisms/sobre-nosotros/casos-exito/HeroCasoExito";
import Alcance from "@/components/organisms/sobre-nosotros/casos-exito/Alcance";
import AlcanceRegional from "@/components/organisms/sobre-nosotros/casos-exito/AlcanceRegional";
import Recorrido from "@/components/organisms/sobre-nosotros/casos-exito/Recorrido";
import ComoSeMide from "@/components/organisms/sobre-nosotros/casos-exito/ComoSeMide";
import DemoDay from "@/components/organisms/sobre-nosotros/casos-exito/DemoDay";
import ImpactoContratacion from "@/components/organisms/sobre-nosotros/casos-exito/ImpactoContratacion";
import { getLastModified } from "@/lib/lastModified";
import { siteConfig } from "@/lib/seo";

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
      <CTAFinal />
      <Footer
        lastUpdated={{
          date: getLastModified("app/sobre-nosotros/casos-exito/page.tsx"),
          url: `${siteConfig.url}/sobre-nosotros/casos-exito`,
        }}
      />
    </main>
  );
}
