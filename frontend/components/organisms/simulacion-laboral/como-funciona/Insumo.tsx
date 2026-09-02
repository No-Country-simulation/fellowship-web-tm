"use client";

import { useEffect, useRef, useState } from "react";
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

const ejemplosDesafios = [
  {
    titulo: "Rediseñar la experiencia de onboarding",
    descripcion:
      "Un equipo multidisciplinario analiza el flujo actual, propone mejoras y entrega un prototipo validado con usuarios.",
  },
  {
    titulo: "Construir un MVP para una healthtech",
    descripcion:
      "Desarrollar un producto funcional en 5 semanas, desde la investigación hasta el deploy, trabajando con roles diversos.",
  },
  {
    titulo: "Optimizar la conversión de un e-commerce",
    descripcion:
      "Investigar el comportamiento del usuario, identificar fricciones y ejecutar experimentos para mejorar métricas clave.",
  },
];

export default function Insumo() {
  const listRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
              03 — El insumo
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              Un problema abierto. <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">No una respuesta correcta.</em>
            </h2>
            <p className="mt-5 text-lg text-[#55555f] leading-relaxed max-w-2xl">
              El desafío es el punto de partida de la simulación. No se trata de
              resolver un ejercicio con una solución única, sino de enfrentar un
              problema real que obliga a investigar, decidir, construir y
              comunicar en equipo.
            </p>
          </div>
        </Reveal>

        {/* Ejemplos de desafíos */}
        <Reveal delay={150}>
          <div className="mt-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#8a8a94] mb-4">
              Ejemplos de desafíos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ejemplosDesafios.map((ejemplo) => (
                <div
                  key={ejemplo.titulo}
                  className="border border-[#ECECEC] bg-white rounded-2xl p-6 hover:border-[#FF0094]/40 hover:shadow-sm transition"
                >
                  <h4 className="font-bold text-[#0a0a0f] text-lg leading-snug">
                    {ejemplo.titulo}
                  </h4>
                  <p className="mt-3 text-sm text-[#55555f] leading-relaxed">
                    {ejemplo.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Verbos y fuentes */}
        <Reveal delay={250}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 border border-[#ECECEC] rounded-2xl bg-[#FCFCFC] p-8">
            {/* Columna 1: verbos */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-[#8a8a94] mb-5">
                El desafío puede ser
              </span>
              <ul ref={listRef} className="flex flex-col">
                {verbos.map((verbo, i) => (
                  <li
                    key={verbo}
                    className="flex items-center gap-3 text-[15.5px] font-bold text-[#0a0a0f] border-b border-[#ECECEC] last:border-b-0 py-3"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateX(0)" : "translateX(-14px)",
                      transition: `opacity .4s ease ${i * 70}ms, transform .4s ease ${i * 70}ms`,
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
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateX(0)" : "translateX(-14px)",
                      transition: `opacity .4s ease ${(i + verbos.length) * 70}ms, transform .4s ease ${(i + verbos.length) * 70}ms`,
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

        {/* Cierre */}
        <Reveal delay={400}>
          <div className="mt-10 max-w-2xl border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
            <p className="text-base text-[#0a0a0f] leading-relaxed">
              El desafío define el terreno de juego. La forma de resolverlo queda
              en manos del equipo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}