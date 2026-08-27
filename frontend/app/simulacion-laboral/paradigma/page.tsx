import HeroParadigma from "@/components/organisms/HeroParadigma";
import GapSection from "@/components/organisms/GapSection";
import ConceptSection from "@/components/organisms/ConceptSection";
import TesisSection from "@/components/organisms/TesisSection";
import TimeSection from "@/components/organisms/TimeSection";
import ContrasteSection from "@/components/organisms/ContrasteSection";
import Diferencias from "@/components/organisms/Diferencias";
import GranDiferenciacion from "@/components/organisms/GranDiferenciacion";
import EvidenciaEnVivo from "@/components/organisms/EvidenciaEnVivo";
import ElMecanismo from "@/components/organisms/ElMecanismo";
import Closing from "@/components/organisms/Closing";
import CTAFinal from "@/components/organisms/CTAFinal";
import Footer from "@/components/organisms/Footer";

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
