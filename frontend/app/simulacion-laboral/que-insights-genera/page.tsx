import Programa from "@/components/organisms/simulacion-laboral/que-insights-genera/Programa";
import SenalAlInsight from "@/components/organisms/simulacion-laboral/que-insights-genera/SenalAlInsight";
import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";

export default function QueInsightsGeneraPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <Programa />
      <SenalAlInsight />
      <CTAFinal />
      <Footer />
    </main>
  );
}
