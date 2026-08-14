import ComoFunciona from "@/components/sections/ComoFunciona";
import CasoOracle from "@/components/sections/CasoOracle";
import Testimonios from "@/components/sections/Testimonios";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <ComoFunciona />
      <CasoOracle />
      <Testimonios />
      <Footer />
    </div>
  );
}
