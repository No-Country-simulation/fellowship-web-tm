import { Reveal } from "@/components/ui/reveal";

export default function HeroShowcase() {
  return (
    <section className="relative overflow-hidden px-6 pb-[70px] pt-[150px]">
      {/* Glows decorativos, misma paleta de marca que el resto del sitio */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[10%] left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-[40px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,0,148,0.18), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[70%] top-[20%] h-[700px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-[40px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(2,190,239,0.13), transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1120px] flex-col">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#939393]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_12px_#FF0094]" />
            Sobre Nosotros — Showcase
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 font-[family-name:var(--font-dm-sans)] font-extrabold leading-[1.05] tracking-[-0.025em]">
            <span className="block text-[clamp(22px,3.2vw,32px)] font-bold text-[#F9F9F9] opacity-90">
              Desafíos reales,
            </span>
            <span className="mt-1.5 block bg-gradient-to-r from-[#FF0094] to-[#02BEEF] bg-clip-text text-[clamp(34px,5.6vw,54px)] text-transparent">
              equipos reales.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-[600px] text-[17px] leading-[1.65] text-[#9CA3AF]">
            Explorá los proyectos y el comportamiento de los equipos en nuestras
            simulaciones laborales y hackathones — con la misma evidencia que ven
            las empresas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}