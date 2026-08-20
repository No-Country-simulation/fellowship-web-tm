import EmpresasCarousel from "@/components/organisms/EmpresasCarousel";
import HeroSection from "@/components/organisms/HeroSection";
import StatsSection from "@/components/organisms/StatsSection";
import LiveSimulation from "@/components/organisms/LiveSimulation";
import SimulationDefinition from "@/components/organisms/SimulationDefinition";
import FAQSection from "@/components/organisms/FAQSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#05040b]">
      <EmpresasCarousel />
      <HeroSection />
      <StatsSection />
      <LiveSimulation />
      <SimulationDefinition />
      <FAQSection />
      {/* Lorenzo agrega: ComoFunciona, CasoOracle, Testimonios, Footer */}
    </main>
  );
}