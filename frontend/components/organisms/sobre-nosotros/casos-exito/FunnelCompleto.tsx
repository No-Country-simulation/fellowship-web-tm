"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

const funnel = [
  { label: "Participación", target: 1240, widthPct: 100 },
  { label: "Finalización", target: 892, widthPct: 72 },
  { label: "Talento job-ready", target: 574, widthPct: 46 },
  { label: "Interacciones", target: 1133, widthPct: 91 },
  { label: "Entrevistas", target: 412, widthPct: 33 },
  { label: "Contratados", target: 74, widthPct: 6, final: true, extra: "13%" },
];

export default function FunnelCompleto() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
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
    <section id="ce-funnel" className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[720px]">
            <SectionBadge>08 — De punta a punta</SectionBadge>
            <h2 className="mt-4 text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-tight">
              De la formación a la contratación,{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                medido completo
              </em>
            </h2>
          </div>
        </Reveal>

        <div ref={ref} className="mt-9 flex flex-col gap-2.5 max-w-[560px]">
          {funnel.map((f) => (
            <div
              key={f.label}
              className="grid grid-cols-[110px_1fr_60px] items-center gap-2.5"
            >
              <span className={`text-[11px] font-semibold ${f.final ? "text-[#FF0094] font-extrabold" : "text-[#C7C9D3]"}`}>
                {f.label}
              </span>
              <div className="h-1.5 rounded-full bg-[#2D2B40] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#FF0094] to-[#02BEEF] transition-all duration-[1100ms] ease-out"
                  style={{ width: started ? `${f.widthPct}%` : "0%" }}
                />
              </div>
              <span className={`text-[11px] font-bold text-right ${f.final ? "text-[#FF0094] font-extrabold" : "text-white"}`}>
                {f.target.toLocaleString("es-AR")}
                {f.extra && <em className="not-italic text-[#939393] font-semibold text-[10px] ml-1">{f.extra}</em>}
              </span>
            </div>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-6 text-[11.5px] text-[#939393]">
            Reporte para Oracle Next Education · Cohorte Grupo 9 · Jul—Ago 2026 · 100% remota
          </p>
        </Reveal>
      </div>
    </section>
  );
}