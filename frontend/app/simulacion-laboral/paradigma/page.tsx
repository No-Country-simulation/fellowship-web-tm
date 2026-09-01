import HeroParadigma from "@/components/organisms/simulacion-laboral/paradigma/HeroParadigma";
import GapSection from "@/components/organisms/simulacion-laboral/paradigma/GapSection";
import ConceptSection from "@/components/organisms/simulacion-laboral/paradigma/ConceptSection";
import TesisSection from "@/components/organisms/simulacion-laboral/paradigma/TesisSection";
import TimeSection from "@/components/organisms/simulacion-laboral/paradigma/TimeSection";
import ContrasteSection from "@/components/organisms/simulacion-laboral/paradigma/ContrasteSection";
import Diferencias from "@/components/organisms/simulacion-laboral/paradigma/Diferencias";
import GranDiferenciacion from "@/components/organisms/simulacion-laboral/paradigma/GranDiferenciacion";
import EvidenciaEnVivo from "@/components/organisms/simulacion-laboral/paradigma/EvidenciaEnVivo";
import ElMecanismo from "@/components/organisms/simulacion-laboral/paradigma/ElMecanismo";
import Closing from "@/components/organisms/simulacion-laboral/paradigma/Closing";
import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";

export default function ParadigmaPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <HeroParadigma />
      <GapSection />
      <ConceptSection />
      <TesisSection />
      <TimeSection />
      <ContrasteSection />
      <Diferencias />
      <GranDiferenciacion />
      <EvidenciaEnVivo />
      <ElMecanismo />
      <Closing />
      <CTAFinal />
      <Footer />
    </main>
  );
}
