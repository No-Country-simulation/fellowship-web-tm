"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

interface Step {
  num: number;
  label: string;
  sub: string;
  color: string;
}

// Progresión de color rosa -> cyan a lo largo de los 4 pasos 
const steps: Step[] = [
  { num: 1, label: "Kick-off", sub: "Se conocen y planifican", color: "#FF0094" },
  { num: 2, label: "Ejecución", sub: "Semanas 1 a 3, en vivo", color: "#AB3FB2" },
  { num: 3, label: "Peer review", sub: "Evaluación anónima entre pares", color: "#567FD1" },
  { num: 4, label: "Demo Day", sub: "Las empresas ven el resultado", color: "#02BEEF" },
];

const dataPoints = [
  { num: "01", label: "Mensajes en los canales del equipo" },
  { num: "02", label: "Tiempo de conexión en la plataforma" },
  { num: "03", label: "Tiempo en reuniones de voz" },
];

export default function ElMecanismo() {
  const stepperRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = stepperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
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
    <section className="w-full bg-[#000115] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-6 select-none">
            <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
              05 — El mecanismo
            </span>
          </div>
          <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight leading-tight">
            Cinco semanas, en cuatro pasos
          </h2>
        </Reveal>

        {/* Stepper */}
        <Reveal delay={120} className="mt-14">
        <div
          ref={stepperRef}
          className="relative flex flex-col gap-8 md:flex-row md:justify-between md:gap-0"
        >
          {/* Línea base (solo desktop) */}
          <div className="hidden md:block absolute top-5 left-0 right-0 h-[2px] bg-white/10" />
          {/* Línea de progreso */}
          <div
            className="hidden md:block absolute top-5 left-0 h-[2px] bg-gradient-to-r from-[#FF0094] to-[#02BEEF] transition-[width] duration-[1400ms] ease-out"
            style={{ width: started ? "100%" : "0%" }}
          />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative flex md:flex-col items-center gap-4 md:gap-3 md:flex-1 text-left md:text-center"
            >
              <div
                className="relative z-[1] w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold border-2 shrink-0 transition-colors duration-500"
                style={{
                  borderColor: started ? "transparent" : "#2D2B40",
                  background: started ? step.color : "#0C0C16",
                  color: started ? "#fff" : "#939393",
                  transitionDelay: started ? `${i * 220}ms` : "0ms",
                }}
              >
                {step.num}
              </div>
              <div>
                <div className="text-xs font-bold text-white md:max-w-[110px]">{step.label}</div>
                <div className="mt-0.5 text-[11px] text-zinc-500 md:max-w-[120px]">{step.sub}</div>
              </div>
            </div>
          ))}
        </div>
        </Reveal>

        {/* Data trio */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {dataPoints.map((d, i) => (
            <Reveal key={d.num} delay={220 + i * 80}>
            <div
              className="h-full border border-white/10 rounded-2xl p-4.5 bg-[#0c0d21]/60 text-center"
            >
              <div className="text-2xl font-extrabold bg-gradient-to-r from-[#FF0094] to-[#02BEEF] bg-clip-text text-transparent">
                {d.num}
              </div>
              <div className="mt-1 text-[11.5px] text-zinc-500">{d.label}</div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
