import ElProblema from "@/components/organisms/para-instituciones/ElProblema";
import LaSolucion from "@/components/organisms/para-instituciones/LaSolucion";
import Beneficios from "@/components/organisms/para-instituciones/Beneficios";
import Comunidad from "@/components/organisms/para-instituciones/Comunidad";
import VisibilidadOrganica from "@/components/organisms/para-instituciones/VisibilidadOrganica";
import Ecosistema from "@/components/organisms/para-instituciones/Ecosistema";

export default function ParaInstitucionesPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <ElProblema />
      <LaSolucion />
      <Beneficios />
      <Comunidad />
      <VisibilidadOrganica />
      <Ecosistema />
      {/* Componentes de Lorenzo: Talent pipeline, Diferenciación, etc. */}
    </main>
  );
}