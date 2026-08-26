import Link from "next/link";
import Diferencias from "@/components/organisms/Diferencias";
import GranDiferenciacion from "@/components/organisms/GranDiferenciacion";
import EvidenciaEnVivo from "@/components/organisms/EvidenciaEnVivo";
import ElMecanismo from "@/components/organisms/ElMecanismo";

export default function ParaTalentoPage() {
  return (
    <main className="bg-[#000115] text-white min-h-screen">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="inline-flex items-center gap-2 text-[13px] font-bold text-[#9ca3af] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff0094]" />
          PARA TALENTO
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-[-0.025em] text-[#F9F9F9]">
          Ganá experiencia real.
          <span className="block bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
            Demostrá cómo trabajás.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[#9ca3af] leading-relaxed">
          Participá en simulaciones laborales abiertas y gratuitas. Formá equipo,
          ejecutá desafíos reales y generá evidencia observable de tu desempeño.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <Link
            href="/#live"
            className="px-6 py-3 rounded-md text-sm font-medium transition bg-transparent text-[#FF0094] border border-[rgba(255,0,148,0.35)] hover:bg-[rgba(255,0,148,0.35)]"
          >
            Ver simulación activa
          </Link>
          <Link
            href="/#simulacion"
            className="px-6 py-3 rounded-md text-sm font-medium transition bg-transparent text-[rgba(255,255,255,0.48)] border border-[rgba(255,255,255,0.18)] hover:bg-white/10"
          >
            Conocer más
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="font-bold text-xl">Simulación Laboral Abierta</h2>
            <p className="mt-2 text-sm text-[#9ca3af]">
              Gratuita, 100% remota. Equipos multidisciplinarios ejecutan desafíos reales durante 5 semanas.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="font-bold text-xl">Evidencia Conductual</h2>
            <p className="mt-2 text-sm text-[#9ca3af]">
              La plataforma captura datos de comportamiento en tiempo real. Tu trabajo queda documentado.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="font-bold text-xl">Conexión con Empresas</h2>
            <p className="mt-2 text-sm text-[#9ca3af]">
              Empresas observan tu desempeño y pueden contactarte sin proceso de selección tradicional.
            </p>
          </div>
        </div>
      </div>

      <Diferencias />
      <GranDiferenciacion />
      <EvidenciaEnVivo />
      <ElMecanismo />
    </main>
  );
}