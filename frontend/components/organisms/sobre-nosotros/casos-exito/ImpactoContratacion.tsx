"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

interface MetricCard {
  label: string;
  value: string;
  valueColor?: string;
  small?: boolean;
}

interface ShortlistRow {
  name: string;
  roleLocation: string;
  experiences: string;
  score: number;
}

const metrics: MetricCard[] = [
  { label: "CVs por leer", value: "0" },
  { label: "Horas de screening", value: "−82%", valueColor: "#0CFCA7" },
  { label: "De lista a entrevista", value: "3 días", small: true },
];

const shortlist: ShortlistRow[] = [
  { name: "Camila Rossi", roleLocation: "AI Engineer · Buenos Aires, AR", experiences: "4 experiencias", score: 94 },
  { name: "Diego Fuentes", roleLocation: "Backend · Bogotá, CO", experiences: "3 experiencias", score: 91 },
  { name: "Valentina Cruz", roleLocation: "Data Scientist · CDMX, MX", experiences: "5 experiencias", score: 88 },
];

export default function ImpactoContratacion() {
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = leaderboardRef.current;
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
    <section id="ce-jobready" className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[720px]">
            <SectionBadge>06 Impacto en contratación</SectionBadge>
            <h2 className="mt-4 text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-tight">
              Talento job-ready,{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                a disposición para entrevistar
              </em>
            </h2>
          </div>
          <p className="mt-4 max-w-[560px] text-[15px] leading-[1.7] text-[#9CA3AF]">
            El decisor no arranca de un pool de CVs: obtiene perfiles con conducta observada, comparables en una
            sola vista.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-9 grid grid-cols-2 md:grid-cols-3 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="bg-[#0c0d21] border border-[#1C1B29] rounded-xl p-4">
                <div className="text-[11.5px] font-semibold text-[#9CA3AF]">{m.label}</div>
                <div
                  className={`mt-2 font-['DM_Sans'] font-extrabold text-white ${m.small ? "text-base" : "text-2xl"}`}
                  style={{ color: m.valueColor }}
                >
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div ref={leaderboardRef}>
          <Reveal delay={200}>
            <p className="mt-8 mb-3.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#939393]">
              Shortlist · ordenada por conducta observada
            </p>
            <div className="flex flex-col gap-2.5">
              {shortlist.map((row) => (
                <div
                  key={row.name}
                  className="grid grid-cols-[20px_1fr_40px] md:grid-cols-[24px_1fr_90px_1fr_40px] items-center gap-3 py-2.5 border-b border-[#2D2B40]"
                >
                  <span className="text-[12px] font-extrabold text-[#FF0094]">★</span>
                  <span className="text-[13px] font-bold text-white">
                    {row.name} <em className="not-italic font-medium text-[#939393] ml-1">{row.roleLocation}</em>
                  </span>
                  <span className="hidden md:block text-[11px] text-[#939393]">{row.experiences}</span>
                  <div className="hidden md:block h-[7px] rounded-full bg-[#2D2B40] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#FF0094] to-[#02BEEF] transition-all duration-[1100ms] ease-out"
                      style={{ width: started ? `${row.score}%` : "0%" }}
                    />
                  </div>
                  <span className="text-[13px] font-extrabold text-white text-right">{row.score}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-3.5 text-[11.5px] text-[#939393]">574 perfiles validados · 5 sugeridos para esta búsqueda</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
