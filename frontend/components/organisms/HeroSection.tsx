"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const handleScrollToComoFunciona = (perfil: string) => {
    // Hacer scroll suave hasta la sección "como-funciona"
    document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
    // Acá podrías setear un estado global o query param para activar la pestaña correspondiente.
    // Ejemplo simple: actualizar la URL con ?perfil=empresa
    router.push(`/?perfil=${perfil}`, { scroll: false });
  };

  return (
    <section className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Columna izquierda */}
        <div className="space-y-6">
          {/* Tag de próxima simulación */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Próxima simulación laboral: 15 Sept 2026 - Abierta
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
            El eslabón que faltaba entre la formación y el empleo
          </h1>

          <p className="text-base md:text-lg text-neutral-600 dark:text-zinc-300 max-w-md">
            Conectamos talento junior con desafíos reales a través de simulaciones de trabajo intensivas.
          </p>

          {/* Botones de enrutamiento (ghost buttons con hover degradado) */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleScrollToComoFunciona("talento")}
              className="group text-left px-6 py-4 rounded-xl border border-neutral-300 dark:border-zinc-700 bg-transparent hover:bg-gradient-to-r hover:from-[#FE0096] hover:to-[#01249C] hover:text-white transition-all duration-300"
            >
              <span className="font-semibold">Para talentos</span>
              <p className="text-sm opacity-80">Ganá experiencia ejecutando en equipo</p>
            </button>
            <button
              onClick={() => handleScrollToComoFunciona("empresa")}
              className="group text-left px-6 py-4 rounded-xl border border-neutral-300 dark:border-zinc-700 bg-transparent hover:bg-gradient-to-r hover:from-[#FE0096] hover:to-[#01249C] hover:text-white transition-all duration-300"
            >
              <span className="font-semibold">Para empresas</span>
              <p className="text-sm opacity-80">Encontrá talento validado en acción</p>
            </button>
            <button
              onClick={() => handleScrollToComoFunciona("institucion")}
              className="group text-left px-6 py-4 rounded-xl border border-neutral-300 dark:border-zinc-700 bg-transparent hover:bg-gradient-to-r hover:from-[#FE0096] hover:to-[#01249C] hover:text-white transition-all duration-300"
            >
              <span className="font-semibold">Para instituciones</span>
              <p className="text-sm opacity-80">Potenciá la empleabilidad de tus estudiantes</p>
            </button>
          </div>
        </div>

        {/* Columna derecha: simulación en vivo */}
        <div className="bg-neutral-800 dark:bg-zinc-900 rounded-2xl p-6 min-h-[400px] flex flex-col justify-between text-white">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            Live Simulation
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-sm text-zinc-300">Equipos trabajando ahora mismo:</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold">23</p>
                <p className="text-xs text-zinc-400">Equipos activos</p>
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-zinc-400">Países</p>
              </div>
            </div>
            {/* Acá podés poner una mini tabla o más info */}
          </div>
        </div>
      </div>
    </section>
  );
}