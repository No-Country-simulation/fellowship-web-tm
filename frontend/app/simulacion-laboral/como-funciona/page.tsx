import HeroSL from "@/components/organisms/simulacion-laboral/HeroSL";
import PuntoDePartida from "@/components/organisms/simulacion-laboral/como-funciona/PuntoDePartida";
import Agrupamiento from "@/components/organisms/simulacion-laboral/como-funciona/Agrupamiento";
import Insumo from "@/components/organisms/simulacion-laboral/como-funciona/Insumo";
import LineaDeTiempo from "@/components/organisms/simulacion-laboral/como-funciona/LineaDeTiempo";
import LoQueSeRegistra from "@/components/organisms/simulacion-laboral/como-funciona/LoQueSeRegistra";
import CTAFinal from "@/components/organisms/shared/CTAFinal";
import Footer from "@/components/organisms/shared/Footer";

export default function ComoFuncionaPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <HeroSL />
      <PuntoDePartida />
      <Agrupamiento />
      <Insumo />
      <LineaDeTiempo />
      <LoQueSeRegistra />
      <CTAFinal />
      <Footer />
    </main>
  );
}