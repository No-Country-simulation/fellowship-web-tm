import SeisDimensiones from "@/components/organisms/SeisDimensiones";
import LoQueSigue from "@/components/organisms/LoQueSigue";
import Footer from "@/components/organisms/Footer";

export default function QueObservamosPage() {
  return (
    <main className="flex flex-col bg-[#000115]">
      <SeisDimensiones />
      <LoQueSigue />
      <Footer />
    </main>
  );
}
