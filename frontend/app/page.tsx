import HeroSection from "@/components/organisms/HeroSection";
import EmpresasCarousel from "@/components/organisms/EmpresasCarousel";
import ShowcaseSection from "@/components/organisms/ShowcaseSection";
import ParadigmaSection from "@/components/organisms/ParadigmaSection";
import QuePuedeSimularse from "@/components/sections/QuePuedeSimularse";
import EvidenciaConductual from "@/components/sections/EvidenciaConductual";
import ComoFunciona from "@/components/sections/ComoFunciona";
import CasoOracle from "@/components/sections/CasoOracle";
import Testimonios from "@/components/sections/Testimonios";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <EmpresasCarousel />
      <ShowcaseSection />
      <ParadigmaSection />
      <QuePuedeSimularse />
      <EvidenciaConductual />
      <ComoFunciona />
      <CasoOracle />
      <Testimonios />
      <Footer />
    </main>
  );
}