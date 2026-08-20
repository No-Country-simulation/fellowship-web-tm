import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#040414] px-4 md:px-8 pt-20 pb-12">
      <div className="max-w-[1300px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[13px] font-bold text-[#9ca3af] mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff00a0]" />
          SIMULACIÓN LABORAL
        </div>

        <div className="max-w-4xl flex flex-col gap-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1]">
            Observá cómo trabaja el talento.
            <span className="block bg-linear-to-r from-[#ff00a0] to-[#00d1ff] bg-clip-text text-transparent">
              Antes de contratarlo.
            </span>
          </h1>

          <p className="text-lg text-[#9ca3af] leading-relaxed max-w-2xl">
            No Country convierte experiencias reales de trabajo en equipo en evidencia
            observable sobre cómo las personas ejecutan, colaboran y resuelven problemas.
          </p>

          <div className="flex flex-wrap gap-5 mt-2">
            <Link
              href="/#live"
              className="border border-[#ff00a0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff00a0] hover:text-black transition"
            >
              Explorar en vivo
            </Link>
            <Link
              href="/#simulacion"
              className="border border-[#4b5563] text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Ver cómo funciona
            </Link>
          </div>

          <p className="text-sm text-[#6b7280] font-medium mt-2">
            Personas reales. Equipos reales. Semanas de ejecución. Evidencia real.
          </p>
        </div>
      </div>
    </section>
  );
}