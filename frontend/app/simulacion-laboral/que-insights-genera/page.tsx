import HeroSL from "@/components/organisms/simulacion-laboral/HeroSL";
import ParticipanteEquipo from "@/components/organisms/simulacion-laboral/que-insights-genera/ParticipanteEquipo";
import Cohorte from "@/components/organisms/simulacion-laboral/que-insights-genera/Cohorte";
import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";
import Programa from "@/components/organisms/simulacion-laboral/que-insights-genera/Programa";
import SenalAlInsight from "@/components/organisms/simulacion-laboral/que-insights-genera/SenalAlInsight";

export default function QueInsightsGeneraPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <HeroSL />
      <ParticipanteEquipo />
      <Cohorte />
      <Programa />
      <SenalAlInsight />
      <CTAFinal />
      <Footer />
    </main>
  );
}