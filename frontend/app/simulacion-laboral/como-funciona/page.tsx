import LineaDeTiempo from "@/components/organisms/LineaDeTiempo";
import LoQueSeRegistra from "@/components/organisms/LoQueSeRegistra";
import CTAFinal from "@/components/organisms/CTAFinal";
import Footer from "@/components/organisms/Footer";

export default function ComoFuncionaPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <LineaDeTiempo />
      <LoQueSeRegistra />
      <CTAFinal />
      <Footer />
    </main>
  );
}
