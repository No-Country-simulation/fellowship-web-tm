"use client";

import { Reveal } from "@/components/ui/reveal";

const chips = [
  "Población",
  "Perfiles",
  "Conocimientos",
  "Cantidad de participantes",
  "Objetivos",
  "Contexto",
  "Criterios de participación",
];

export default function PuntoDePartida() {
  return (
    <section className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
              01 — El punto de partida
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              La institución <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">define el terreno</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-4 max-w-[560px] text-[15px] text-[#55555f] leading-relaxed">
            Antes de que exista un equipo, alguien define las condiciones bajo las que va a ocurrir la observación.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2.5 max-w-2xl">
          {chips.map((chip, i) => (
            <Reveal key={chip} delay={150 + i * 70}>
              <span className="inline-flex rounded-full bg-white border border-[#ECECEC] px-4 py-2 text-[13.5px] font-bold text-[#0a0a0f]">
                {chip}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-10 max-w-xl border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
            <span className="block text-[11px] font-bold uppercase tracking-widest text-[#8a8a94]">
              Resultado
            </span>
            <p className="mt-1 text-lg font-bold text-[#0a0a0f]">
              Una cohorte lista para ser observada en un contexto común.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}