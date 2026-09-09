"use client";

import { Reveal } from "@/components/ui/reveal";

const experienciaItems = [
  "Problemas abiertos",
  "Equipos nuevos",
  "Responsabilidades compartidas",
  "Plazos",
  "Herramientas de colaboración",
  "Entregables",
  "Decisiones",
];

const empleabilidadItems = [
  "Ejecución",
  "Colaboración",
  "Participación",
  "Trayectoria",
  "Entregables",
  "Feedback",
];

export default function Beneficios() {
  return (
    <section className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
              04 — Beneficios
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              ¿Qué cambia cuando incorporás <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">una Simulación Laboral?</em>
            </h2>
          </div>
        </Reveal>

        {/* Experiencia */}
        <Reveal delay={100}>
          <h3 className="mt-10 text-xl font-bold">01 — Experiencia</h3>
          <p className="mt-2 text-lg text-[#0a0a0f]">Tus participantes dejan de practicar solamente. Empiezan a trabajar.</p>
          <p className="mt-2 text-sm text-[#55555f]">La simulación les permite enfrentarse a:</p>
        </Reveal>

        <div className="mt-4 flex flex-wrap gap-2.5">
          {experienciaItems.map((item, i) => (
            <Reveal key={item} delay={150 + i * 60}>
              <span className="inline-flex rounded-full bg-white border border-[#ECECEC] px-4 py-2 text-[13.5px] font-bold text-[#0a0a0f]">
                {item}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-8 max-w-xl border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
            <span className="block text-[11px] font-bold uppercase tracking-widest text-[#8a8a94]">Resultado</span>
            <p className="mt-1 text-lg font-bold text-[#0a0a0f]">
              Una experiencia concreta de trabajo que pueden incorporar a su trayectoria profesional.
            </p>
          </div>
        </Reveal>

        {/* Empleabilidad */}
        <Reveal delay={500}>
          <h3 className="mt-14 text-xl font-bold">02 — Empleabilidad</h3>
          <p className="mt-2 text-lg text-[#0a0a0f]">Convertí el aprendizaje en evidencia que se puede mostrar.</p>
        </Reveal>

        <Reveal delay={550}>
          <div className="mt-6 border border-[#ECECEC] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-5 bg-[#FAFAFA] border-b md:border-b-0 md:border-r border-[#ECECEC]">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-[#8a8a94] mb-2">Antes</span>
                <p className="text-[#55555f]">Completó el programa.</p>
              </div>
              <div className="p-5 bg-white">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-[#FF0094] mb-2">Con Simulación Laboral</span>
                <p className="font-bold text-[#0a0a0f]">Trabajé 5 semanas en un equipo multidisciplinario sobre un desafío concreto.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {empleabilidadItems.map((item, i) => (
            <Reveal key={item} delay={600 + i * 60}>
              <span className="inline-flex rounded-full bg-white border border-[#ECECEC] px-4 py-2 text-[13.5px] font-bold text-[#0a0a0f]">
                {item}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={800}>
          <div className="mt-8 max-w-xl border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
            <span className="block text-[11px] font-bold uppercase tracking-widest text-[#8a8a94]">Resultado</span>
            <p className="mt-1 text-lg font-bold text-[#0a0a0f]">
              Mayor capacidad para demostrar experiencia y capacidades frente al mercado.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}