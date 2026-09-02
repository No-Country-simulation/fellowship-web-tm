"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const cohorteChips = [
  "Patrones de participación",
  "Diferencias entre equipos",
  "Comportamientos recurrentes",
  "Diversidad de perfiles",
  "Evolución colectiva",
  "Distribución de roles",
  "Patrones de colaboración",
];

const individuals = [
  "#FF0094",
  "#02BEEF",
  "#C06ECF",
  "#646CF6",
  "#0CFCA7",
  "#FF0094",
  "#02BEEF",
  "#C06ECF",
  "#646CF6",
];

export default function Cohorte() {
  const visualRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = visualRef.current;
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
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
              03 — Cohorte
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              De casos individuales a <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">patrones colectivos</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-4 max-w-[560px] text-[15px] italic text-[#55555f]">
           &ldquo;Podemos observar patrones cuando miramos a muchas personas participando de una misma experiencia.&rdquo;
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-[15px] text-[#55555f]">Una cohorte permite identificar:</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {cohorteChips.map((chip, i) => (
              <Reveal key={chip} delay={250 + i * 70}>
                <span className="inline-flex rounded-full bg-white border border-[#ECECEC] px-4 py-2 text-[13.5px] font-bold text-[#0a0a0f]">
                  {chip}
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div ref={visualRef} className="mt-12 max-w-lg">
            {/* Individuals */}
            <div className="flex items-center gap-5">
              <span className="w-24 text-[11px] font-bold uppercase tracking-widest text-[#8a8a94] shrink-0">
                Individuals
              </span>
              <div className="flex flex-wrap gap-2">
                {individuals.map((color, i) => (
                  <span
                    key={`ind-${i}`}
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: color,
                      opacity: visible ? 1 : 0,
                      transform: visible ? "scale(1)" : "scale(0.5)",
                      transition: `opacity .4s ease ${i * 60}ms, transform .4s ease ${i * 60}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="pl-24 py-4 text-[#c4c4cc]">↓</div>

            {/* Teams */}
            <div className="flex items-center gap-5">
              <span className="w-24 text-[11px] font-bold uppercase tracking-widest text-[#8a8a94] shrink-0">
                Teams
              </span>
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={`team-${i}`}
                    className="h-4 w-9 rounded-full bg-[linear-gradient(90deg,#FF0094,#02BEEF)]"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "scaleX(1)" : "scaleX(0.4)",
                      transformOrigin: "left",
                      transition: `opacity .5s ease ${i * 90}ms, transform .5s ease ${i * 90}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="pl-24 py-4 text-[#c4c4cc]">↓</div>

            {/* Cohort */}
            <div className="flex items-center gap-5">
              <span className="w-24 text-[11px] font-bold uppercase tracking-widest text-[#8a8a94] shrink-0">
                Cohort
              </span>
              <div
                className="h-4 w-56 rounded-full bg-[linear-gradient(90deg,#FF0094,#02BEEF)]"
                style={{
                  transform: visible ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform .7s cubic-bezier(.2,.8,.2,1) .5s",
                }}
              />
            </div>

            <p className="mt-8 text-[15px] font-bold text-[#0a0a0f] max-w-md">
              Cuantas más personas participan, mayor es la capacidad de observar patrones colectivos.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}