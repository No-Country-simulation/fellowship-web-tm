import TalentPipeline from "@/components/organisms/para-instituciones/TalentPipeline";
import Diferenciacion from "@/components/organisms/para-instituciones/Diferenciacion";
import CasoDeExito from "@/components/organisms/para-instituciones/CasoDeExito";
import Adaptable from "@/components/organisms/para-instituciones/Adaptable";
import Integracion from "@/components/organisms/para-instituciones/Integracion";

export default function Page() {
  return (
    <main>
      <TalentPipeline />
      <Diferenciacion />
      <CasoDeExito />
      <Adaptable />
      <Integracion />
    </main>
  );
}