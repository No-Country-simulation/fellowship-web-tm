import SeisDimensiones from "@/components/organisms/simulacion-laboral/que-observamos/SeisDimensiones";
import LoQueSigue from "@/components/organisms/simulacion-laboral/que-observamos/LoQueSigue";
import Footer from "@/components/organisms/shared/Footer";
import CTAFinal from "@/components/organisms/shared/CTAFinal";

export default function QueObservamosPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <SeisDimensiones />
      <LoQueSigue />
      <CTAFinal />
      <Footer />
    </main>
  );
}
