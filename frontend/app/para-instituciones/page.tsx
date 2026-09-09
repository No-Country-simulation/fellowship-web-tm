import ElProblema from "@/components/organisms/para-instituciones/ElProblema";
import LaSolucion from "@/components/organisms/para-instituciones/LaSolucion";
import Beneficios from "@/components/organisms/para-instituciones/Beneficios";
import Comunidad from "@/components/organisms/para-instituciones/Comunidad";
import VisibilidadOrganica from "@/components/organisms/para-instituciones/VisibilidadOrganica";
import Ecosistema from "@/components/organisms/para-instituciones/Ecosistema";
import TalentPipeline from "@/components/organisms/para-instituciones/TalentPipeline";
import Diferenciacion from "@/components/organisms/para-instituciones/Diferenciacion";
import CasoDeExito from "@/components/organisms/para-instituciones/CasoDeExito";
import Adaptable from "@/components/organisms/para-instituciones/Adaptable";
import Integracion from "@/components/organisms/para-instituciones/Integracion";
import CTAInstituciones from "@/components/organisms/para-instituciones/CTAInstituciones";
import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";
import { siteConfig } from "@/lib/seo";
import { getLastModified } from "@/lib/lastModified";

export default function Page() {
  return (
    <main className="flex flex-col bg-[#000115]">
      {/* Secciones 02 a 07 — Augusto */}
      <ElProblema />
      <LaSolucion />
      <Beneficios />
      <Comunidad />
      <VisibilidadOrganica />
      <Ecosistema />

      {/* Secciones 08 a 13 — Lorenzo */}
      <TalentPipeline />
      <Diferenciacion />
      <CasoDeExito />
      <Adaptable />
      <Integracion />
      <CTAInstituciones />
      <CTAFinal />

      <Footer
        lastUpdated={{
          date: getLastModified("app/para-instituciones/page.tsx"),
          url: `${siteConfig.url}/para-instituciones`,
        }}
      />
    </main>
  );
}