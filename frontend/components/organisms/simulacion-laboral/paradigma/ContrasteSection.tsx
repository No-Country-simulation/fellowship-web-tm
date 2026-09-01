"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const contrastRows = [
  { left: "Conocimiento", right: "Aplicación" },
  { left: "Ejercicios", right: "Problemas abiertos" },
  { left: "Individual", right: "Equipo" },
  { left: "Condiciones controladas", right: "Contexto dinámico" },
  { left: "Resultado", right: "Proceso + resultado" },
  { left: "Snapshot", right: "Trayectoria" },
  { left: "Evaluación", right: "Observación" },
];

export default function ContrasteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
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
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#939393]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_12px_#FF0094]" />
              De medir a observar
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              De medir lo que una persona sabe
              <br />
              a observar{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                cómo trabaja
              </em>
            </h2>
          </div>
        </Reveal>

        <div ref={sectionRef} className="mt-10">
          <div className="grid grid-cols-[1fr_40px_1fr] items-center mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#939393]">Formación</span>
            <span></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF0094] text-right">Simulación Laboral</span>
          </div>
          {contrastRows.map((row, i) => (
            <div
              key={row.left}
              className={`grid grid-cols-[1fr_40px_1fr] items-center border-t border-[#1C1B29] py-4 transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-base md:text-lg font-bold text-[#6B7280]">{row.left}</span>
              <span className="text-center text-[#2D2B40]">→</span>
              <span className="text-base md:text-lg font-bold text-white text-right">{row.right}</span>
            </div>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-10 border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.06)] rounded-r-lg pl-6 pr-4 py-4 max-w-2xl">
            <p className="text-base md:text-lg font-semibold text-white leading-relaxed">
              No reemplazamos la formación. Agregamos la capa de evidencia que
              ocurre entre aprender y trabajar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}