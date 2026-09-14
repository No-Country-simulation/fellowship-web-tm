import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";
import Alcance from "@/components/organisms/sobre-nosotros/casos-exito/Alcance";
import AlcanceRegional from "@/components/organisms/sobre-nosotros/casos-exito/AlcanceRegional";
import Recorrido from "@/components/organisms/sobre-nosotros/casos-exito/Recorrido";
import { getLastModified } from "@/lib/lastModified";
import { siteConfig } from "@/lib/seo";

export default function CasosExitoPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <Alcance />
      <AlcanceRegional />
      <Recorrido />
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
