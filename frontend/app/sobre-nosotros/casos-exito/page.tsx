import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";
import Alcance from "@/components/organisms/sobre-nosotros/casos-exito/Alcance";
import { getLastModified } from "@/lib/lastModified";
import { siteConfig } from "@/lib/seo";

export default function CasosExitoPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <Alcance />
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
