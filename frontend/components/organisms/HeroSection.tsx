import Link from "next/link";

const stats = [
  { valor: "30,000+", label: "TALENTS", color: "text-[#ff00a0]" },
  { valor: "5000+", label: "TEAMS", color: "text-[#00d1ff]" },
  {
    valor: "100+",
    label: "COUNTRIES",
    color: "bg-linear-to-r from-[#ff00a0] to-[#00d1ff] bg-clip-text text-transparent",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-[#040414] px-4 md:px-8 pt-10 md:pt-16 pb-12">
      <div className="max-w-[1300px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[13px] font-bold text-[#9ca3af] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff00a0]" />
          SIMULACIÓN LABORAL
        </div>

        <div className="max-w-4xl flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            <span className="block md:whitespace-nowrap">
              Observá cómo trabaja el talento.
            </span>
            <span className="block bg-linear-to-r from-[#ff00a0] via-[#a855f7] to-[#00d1ff] bg-clip-text text-transparent">
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

        {/* Stats en el margen inferior del hero */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center px-8 relative ${idx !== 2 ? "md:after:absolute md:after:right-0 md:after:top-2 md:after:h-12 md:after:w-px md:after:bg-[#2d2b40]" : ""}`}
            >
              <div className={`text-4xl md:text-5xl font-extrabold ${stat.color}`}>
                {stat.valor}
              </div>
              <div className="text-[13px] font-bold text-[#6b7280] tracking-widest mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}