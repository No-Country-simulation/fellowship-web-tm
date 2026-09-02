"use client";

import { Reveal } from "@/components/ui/reveal";

const verbos = [
  "Construir",
  "Diseñar",
  "Analizar",
  "Investigar",
  "Desarrollar",
  "Resolver",
  "Lanzar",
  "Optimizar",
];

const fuentes = [
  "Empresa",
  "Institución",
  "Sector",
  "Caso ficcionalizado",
];

export default function Insumo() {
  return (
    <section className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
              03 — El insumo
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              Un problema abierto. <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">No una respuesta correcta.</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 border border-[#ECECEC] rounded-2xl bg-[#FCFCFC] p-8">
            {/* Columna 1: verbos */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-[#8a8a94] mb-5">
                El desafío puede ser
              </span>
              <ul className="flex flex-col">
                {verbos.map((verbo, i) => (
                  <li
                    key={verbo}
                    className="flex items-center gap-3 text-[15.5px] font-bold text-[#0a0a0f] border-b border-[#ECECEC] last:border-b-0 py-3"
                    style={{
                      opacity: 0,
                      transform: "translateX(-14px)",
                      transition: "opacity .4s ease, transform .4s ease",
                      transitionDelay: `${i * 70}ms`,
                    }}
                  >
                    <span className="text-[#FF0094]">→</span>
                    {verbo}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#ECECEC] mx-auto" />

            {/* Columna 2: fuentes */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-[#8a8a94] mb-5">
                Y puede provenir de
              </span>
              <ul className="flex flex-col">
                {fuentes.map((fuente, i) => (
                  <li
                    key={fuente}
                    className="flex items-center gap-3 text-[15.5px] font-bold text-[#0a0a0f] border-b border-[#ECECEC] last:border-b-0 py-3"
                    style={{
                      opacity: 0,
                      transform: "translateX(-14px)",
                      transition: "opacity .4s ease, transform .4s ease",
                      transitionDelay: `${(i + verbos.length) * 70}ms`,
                    }}
                  >
                    <span className="text-[#FF0094]">→</span>
                    {fuente}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}