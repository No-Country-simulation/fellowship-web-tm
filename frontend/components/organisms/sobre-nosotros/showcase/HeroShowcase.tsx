import { Reveal } from "@/components/ui/reveal";

export default function HeroShowcase() {
  return (
    <section className="px-6 pb-[40px] pt-[160px]">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#939393]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_12px_#FF0094]" />
            Sobre Nosotros — Showcase
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 font-[family-name:var(--font-dm-sans)] font-extrabold leading-[1.05] tracking-[-0.025em]">
            <span className="block text-[clamp(32px,5vw,52px)] font-bold text-[#F9F9F9]">
              Desafíos reales,
            </span>
            <span className="mt-2 block bg-gradient-to-r from-[#FF0094] to-[#02BEEF] bg-clip-text text-[clamp(40px,6.5vw,72px)] text-transparent">
              equipos reales.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-[720px] text-[19px] leading-[1.6] text-[#9CA3AF]">
            Explorá los proyectos y el comportamiento de los equipos en nuestras
            simulaciones laborales y hackathones — con la misma evidencia que ven
            las empresas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}