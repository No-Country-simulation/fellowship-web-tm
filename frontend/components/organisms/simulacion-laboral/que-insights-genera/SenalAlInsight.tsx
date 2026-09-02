"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

interface PatternItem {
  label: string;
  color: string;
}

const signalItems = ["Actividad", "Interacción", "Reuniones", "Entregables", "Peer review", "Trayectoria", "Aportes"];

const patternItems: PatternItem[] = [
  { label: "Consistencia", color: "#FF0094" },
  { label: "Colaboración", color: "#02BEEF" },
  { label: "Coordinación", color: "#C06ECF" },
  { label: "Evolución", color: "#646CF6" },
  { label: "Concentración", color: "#0a9e6b" },
  { label: "Roles emergentes", color: "#FF0094" },
];

const insightQuotes = [
  "Esta persona sostiene su participación y asume progresivamente un rol de coordinación.",
  "Este equipo concentra la producción en pocos participantes.",
  "La colaboración de una persona aumenta a medida que avanza el proyecto.",
];

// Orden de la cascada: bloque Signals, flecha, bloque Patterns, flecha, bloque Insights.
const STEP_DELAYS = [0, 700, 900, 1600, 1800];

export default function SenalAlInsight() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [stepsIn, setStepsIn] = useState<boolean[]>(() => new Array(STEP_DELAYS.length).fill(false));

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeouts = STEP_DELAYS.map((delay, i) =>
              setTimeout(() => {
                setStepsIn((prev) => prev.map((v, idx) => (idx === i ? true : v)));
              }, delay)
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="w-full bg-[#F9F9F9] py-20 md:py-28 text-zinc-900">
      <div className="max-w-[1120px] mx-auto px-4 md:px-8">
        <Reveal className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 mb-4 select-none">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">
              De la señal al insight
            </span>
          </div>
          <h2 className="text-3xl md:text-[42px] font-bold tracking-tight leading-tight text-[#0a0a0f]">
            El mismo dato,{" "}
            <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              en tres niveles
            </em>
          </h2>
        </Reveal>

        <div ref={wrapRef} className="mt-9 flex max-w-[620px] flex-col items-start">
          {/* Signals */}
          <div
            className="w-full transition-all duration-500 ease-out"
            style={{
              opacity: stepsIn[0] ? 1 : 0,
              transform: stepsIn[0] ? "translateY(0)" : "translateY(14px)",
            }}
          >
            <div className="text-[15px] font-extrabold uppercase tracking-[0.02em] text-[#0a0a0f]">Signals</div>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {signalItems.map((label, i) => (
                <span
                  key={label}
                  className="rounded-full border border-[#ececec] bg-[#f4f4f6] px-3.5 py-1.5 text-[12.5px] font-semibold text-[#71717a] transition-all duration-300 ease-out"
                  style={{
                    opacity: stepsIn[0] ? 1 : 0,
                    transform: stepsIn[0] ? "translateY(0)" : "translateY(6px)",
                    transitionDelay: `${150 + i * 90}ms`,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div
            className="py-2.5 text-base text-[#c4c4cc] transition-opacity duration-500"
            style={{ opacity: stepsIn[1] ? 1 : 0 }}
          >
            ↓
          </div>

          {/* Patterns */}
          <div
            className="w-full transition-all duration-500 ease-out"
            style={{
              opacity: stepsIn[2] ? 1 : 0,
              transform: stepsIn[2] ? "translateY(0)" : "translateY(14px)",
            }}
          >
            <div className="text-[15px] font-extrabold uppercase tracking-[0.02em] text-[#0a0a0f]">Patterns</div>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {patternItems.map((item, i) => (
                <span
                  key={`${item.label}-${i}`}
                  className="rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold transition-all duration-300 ease-out"
                  style={{
                    opacity: stepsIn[2] ? 1 : 0,
                    transform: stepsIn[2] ? "translateY(0)" : "translateY(6px)",
                    transitionDelay: `${150 + i * 90}ms`,
                    color: stepsIn[2] ? item.color : "#71717a",
                    borderColor: stepsIn[2] ? item.color : "#ececec",
                    backgroundColor: stepsIn[2] ? "#fff" : "#f4f4f6",
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div
            className="py-2.5 text-base text-[#c4c4cc] transition-opacity duration-500"
            style={{ opacity: stepsIn[3] ? 1 : 0 }}
          >
            ↓
          </div>

          {/* Insights */}
          <div
            className="w-full transition-all duration-500 ease-out"
            style={{
              opacity: stepsIn[4] ? 1 : 0,
              transform: stepsIn[4] ? "translateY(0)" : "translateY(14px)",
            }}
          >
            <div className="text-[15px] font-extrabold uppercase tracking-[0.02em] bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              Insights
            </div>
            <div className="mt-3.5 flex flex-col gap-2.5">
              {insightQuotes.map((quote, i) => (
                <div
                  key={quote}
                  className="rounded-r-lg bg-[#fafafa] px-3.5 py-2.5 text-[13px] italic leading-relaxed text-[#3a3a42] transition-all duration-300 ease-out"
                  style={{
                    opacity: stepsIn[4] ? 1 : 0,
                    transform: stepsIn[4] ? "translateY(0)" : "translateY(6px)",
                    transitionDelay: `${150 + i * 90}ms`,
                    borderLeft: "2px solid #FF0094",
                    borderImage: "linear-gradient(90deg,#FF0094,#02BEEF) 1",
                  }}
                >
                  &ldquo;{quote}&rdquo;
                  <span className="mt-2.5 block text-[9.5px] font-bold uppercase tracking-[0.06em] text-[#FF0094]">
                    Ejemplo ilustrativo
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={150}>
          <p className="mt-[26px] max-w-[560px] text-[13px] text-[#71717a]">
            Estos son ejemplos ilustrativos del tipo de lectura que estos datos permiten — no una afirmación de que
            el sistema infiere esto automáticamente hoy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
