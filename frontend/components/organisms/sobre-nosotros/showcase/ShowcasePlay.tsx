import { Reveal } from "@/components/ui/reveal";

// Pestaña "Showcase Play": por ahora es solo un placeholder (la pestaña está,
// pero todavía no tiene funcionalidad).
export default function ShowcasePlay() {
  return (
    <Reveal>
      <div className="mx-auto my-10 max-w-[420px] rounded-2xl border border-[#1C1B29] bg-[#0C0C16] px-6 py-10 text-center">
        <div className="mb-3.5 text-[32px]" aria-hidden>
          🎮
        </div>
        <h3 className="mb-2 text-[18px] font-extrabold text-white">Showcase Play</h3>
        <p className="text-[13px] leading-[1.6] text-[#939393]">
          Estamos preparando esta sección — vas a poder recorrer los proyectos como un feed, uno
          por uno.
        </p>
        <span className="mt-4 inline-flex rounded-full border border-[#2D2B40] bg-[#181932] px-3 py-1.5 text-[11px] font-bold text-[#C7C9D3]">
          En desarrollo
        </span>
      </div>
    </Reveal>
  );
}
