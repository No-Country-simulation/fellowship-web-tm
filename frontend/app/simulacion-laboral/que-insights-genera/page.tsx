import HeroSL from "@/components/organisms/simulacion-laboral/HeroSL";
import ParticipanteEquipo from "@/components/organisms/simulacion-laboral/que-insights-genera/ParticipanteEquipo";
import Cohorte from "@/components/organisms/simulacion-laboral/que-insights-genera/Cohorte";
import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";

export default function QueInsightsGeneraPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <HeroSL />
      <ParticipanteEquipo />
      <Cohorte />
      <CTAFinal />
      <Footer />
    </main>
  );
}