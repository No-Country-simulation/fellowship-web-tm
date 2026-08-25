import EmpresasCarousel from "@/components/organisms/EmpresasCarousel";
import QuePuedeSimularse from "@/components/organisms/QuePuedeSimularse";
import EvidenciaConductual from "@/components/organisms/EvidenciaConductual";
import CasosDeUso from "@/components/organisms/CasosDeUso";
import CasoOracle from "@/components/organisms/CasoOracle";
import ComparisonTable from "@/components/organisms/ComparisonTable";
import FraseSection from "@/components/organisms/FraseSection";
import Footer from "@/components/organisms/Footer";
import HeroSection from "@/components/organisms/HeroSection";
import LiveSimulation from "@/components/organisms/LiveSimulation";
import SimulationDefinition from "@/components/organisms/SimulationDefinition";
import FAQSection from "@/components/organisms/FAQSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <EmpresasCarousel />
      <HeroSection />
      <LiveSimulation />
      <SimulationDefinition />
      <QuePuedeSimularse />
      <EvidenciaConductual />
      <CasosDeUso />
      <CasoOracle />
      <ComparisonTable />
      <FraseSection />
      <FAQSection />
      <Footer />
    </main>
  );
}