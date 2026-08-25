import Link from "next/link";
import Image from "next/image";

const stats = [
  { valor: "30,000+", label: "TALENTS", color: "text-[#ff0094]" },
  { valor: "5000+", label: "TEAMS", color: "text-[#02BEEF]" },
  { valor: "100+", label: "COUNTRIES", color: "text-[#c06ecf]" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-[#000115] px-4 md:px-8 pt-16 md:pt-20 pb-16 overflow-hidden">
      {/* Mapa de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/brand/map.png"
          alt="Mapa global de simulaciones laborales"
          fill
          priority
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000115]/60 via-[#000115]/20 to-[#000115]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-[1300px] mx-auto">
        {/* Resplandor rosado detrás del texto */}
        <div className="absolute -top-10 left-0 w-full max-w-2xl h-64 bg-[radial-gradient(ellipse_at_center,rgba(255,0,148,0.15),transparent_70%)] blur-2xl pointer-events-none" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 text-[13px] font-bold text-[#9ca3af] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff0094]" />
            SIMULACIÓN LABORAL
          </div>

          <div className="max-w-4xl flex flex-col gap-8">
            <h1 className="font-extrabold leading-[1.04] tracking-[-0.025em] text-[#F9F9F9]">
              <span className="block text-[clamp(30px,4.4vw,42px)]">
                Observá cómo trabaja el talento.
              </span>
              <span className="block mt-2 text-[clamp(34px,5.2vw,70px)] bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                Antes de contratarlo.
              </span>
            </h1>

            <p className="text-lg text-[#9ca3af] leading-relaxed max-w-2xl">
              No Country convierte experiencias reales de trabajo en equipo en
              evidencia observable sobre cómo las personas ejecutan, colaboran
              y resuelven problemas.
            </p>

            <div className="flex flex-wrap gap-5 mt-2">
              <Link
                href="/#live"
                className="px-6 py-3 rounded-md text-sm font-medium transition bg-transparent text-[#FF0094] border border-[rgba(255,0,148,0.35)] hover:bg-[rgba(255,0,148,0.35)]"
              >
                Explorar en vivo
              </Link>
              <Link
                href="/#simulacion"
                className="px-6 py-3 rounded-md text-sm font-medium transition bg-transparent text-[rgba(255,255,255,0.48)] border border-[rgba(255,255,255,0.18)] hover:bg-white/10"
              >
                Ver cómo funciona
              </Link>
            </div>

            <p className="text-sm text-[#6b7280] font-medium">
              Personas reales. Equipos reales. Semanas de ejecución. Evidencia real.
            </p>
          </div>
        </div>

        {/* Stats sobre el mapa de fondo */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
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