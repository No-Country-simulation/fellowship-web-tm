"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

interface Metric {
  label: string;
  value: string;
  target?: number;
  suffix?: string;
}

const metrics: Metric[] = [
  { label: "Piezas compartidas", value: "1.480", target: 1480 },
  { label: "Menciones de marca", value: "640", target: 640 },
  { label: "Interacciones", value: "18.400", target: 18400 },
  { label: "Alcance orgánico", value: "220K", target: 220, suffix: "K" },
];

function CountUp({ target, suffix = "", started }: { target: number; suffix?: string; started: boolean }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 26) || 1;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setValue(current);
    }, 40);
    return () => clearInterval(interval);
  }, [started, target]);
  return <span>{value.toLocaleString("es-AR")}{suffix}</span>;
}

export default function EcosistemaContenido() {
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
    <section id="ce-ecosistema" className="bg-[#F2F2F5] text-[#0a0a0f] border-t border-[#E4E4E8] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[720px]">
            <SectionBadge>07 — Ecosistema y contenido orgánico</SectionBadge>
            <h2 className="mt-4 text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-tight">
              Cada actor{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                aportó y recibió valor
              </em>
            </h2>
          </div>
          <p className="mt-4 max-w-[600px] text-[15px] leading-[1.7] text-[#55555f]">
            905 personas conectadas en una sola edición: 830 graduados, 15 docentes y mentores, 60 decisores de
            empresa, 1 institución dueña del programa.
          </p>
        </Reveal>

        <div ref={ref} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-[#0c0d21] border border-[#1C1B29] rounded-xl p-4 text-center"
            >
              <div className="text-2xl md:text-[26px] font-extrabold text-white font-['DM_Sans']">
                {m.target ? <CountUp target={m.target} suffix={m.suffix} started={started} /> : m.value}
              </div>
              <div className="mt-1 text-[10.5px] font-bold tracking-widest text-[#939393] uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 max-w-[720px] border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
            <p className="text-base md:text-lg font-bold text-[#0a0a0f] leading-relaxed">
              USD 0 invertidos en pauta: la empresa cliente aparece en la historia profesional de cientos de
              personas, contada por ellas mismas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}