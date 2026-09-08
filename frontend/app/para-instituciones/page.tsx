import TalentPipeline from "@/components/organisms/para-instituciones/TalentPipeline";
import Diferenciacion from "@/components/organisms/para-instituciones/Diferenciacion";
import CasoDeExito from "@/components/organisms/para-instituciones/CasoDeExito";
import Adaptable from "@/components/organisms/para-instituciones/Adaptable";

export default function Page() {
  return (
    <main>
      <TalentPipeline />
      <Diferenciacion />
      <CasoDeExito />
      <Adaptable />
    </main>
  );
}