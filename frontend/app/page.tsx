import EmpresasCarousel from "@/components/organisms/EmpresasCarousel";
import ShowcaseSection from "@/components/organisms/ShowcaseSection";
import ParadigmaSection from "@/components/organisms/ParadigmaSection";
import QuePuedeSimularse from "@/components/sections/QuePuedeSimularse";
import EvidenciaConductual from "@/components/sections/EvidenciaConductual";
import CasosDeUso from "@/components/sections/CasosDeUso";
import CasoOracle from "@/components/sections/CasoOracle";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FraseSection from "@/components/sections/FraseSection";
import Footer from "@/components/sections/Footer";
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
       <QuePuedeSimularse />
      <EvidenciaConductual />
      <CasosDeUso />
      <CasoOracle />
      <ComparisonTable />
      <FraseSection />
      <Footer />
    </main>
  );
}