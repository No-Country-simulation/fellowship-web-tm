"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

interface LeaderboardRow {
  rank: number;
  team: string;
  project: string;
  meetings: string;
  score: number;
}

interface SkillRow {
  name: string;
  score: number;
}

// Mismos 6 equipos y valores que la tabla "Comparar equipos" del PDF del
// caso (página 5).
const leaderboard: LeaderboardRow[] = [
  { rank: 1, team: "Equipo 18", project: "FinAI", meetings: "18 encuentros", score: 94 },
  { rank: 2, team: "Equipo 49", project: "EnergyAI", meetings: "16 encuentros", score: 88 },
  { rank: 3, team: "Equipo 29", project: "FinAI", meetings: "14 encuentros", score: 81 },
  { rank: 4, team: "Equipo 4", project: "Techmind", meetings: "12 encuentros", score: 73 },
  { rank: 5, team: "Equipo 13", project: "Techmind", meetings: "9 encuentros", score: 64 },
  { rank: 6, team: "Equipo 66", project: "EnergyAI", meetings: "7 encuentros", score: 51 },
];

const skills: SkillRow[] = [
  { name: "Comunicación", score: 9.2 },
  { name: "Adaptación", score: 8.7 },
  { name: "Liderazgo", score: 8.5 },
];

// Mismo grid en la cabecera y en cada fila, así las columnas quedan
// alineadas. "Proyecto" no va pegado a "Equipo": tiene su propia columna con
// aire de los dos lados (de ahí las columnas vacías #spacer), quedando cerca
// del centro de la fila. En mobile se oculta la cabecera y "Proyecto" vuelve
// a ir pegado al nombre del equipo (mismo criterio que "Reuniones" y la
// barra, que también se ocultan).
const rowGrid =
  "grid-cols-[20px_1fr_40px] md:grid-cols-[24px_140px_1fr_120px_1fr_96px_180px]";
const headerLabel =
  "text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#939393]";

export default function ComoSeMide() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
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
    <section id="ce-medicion" className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[720px]">
            <SectionBadge>04 Cómo se mide</SectionBadge>
            <h2 className="mt-4 text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-tight">
              Comparar equipos según{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                actividad y colaboración
              </em>
            </h2>
          </div>
          <p className="mt-4 max-w-[560px] text-[15px] leading-[1.7] text-[#9CA3AF]">
            La plataforma ordenó a todos los equipos por índice de actividad. En una sola vista se identifica quién
            está ejecutando, quién se reúne y quién necesita acompañamiento.
          </p>
        </Reveal>

        <div ref={contentRef}>
          <Reveal delay={100}>
            <div className={`hidden md:grid ${rowGrid} gap-3 pb-2 border-b border-[#2D2B40]`}>
              <span className={headerLabel}>#</span>
              <span className={headerLabel}>Equipo</span>
              <span aria-hidden />
              <span className={headerLabel}>Proyecto</span>
              <span aria-hidden />
              <span className={headerLabel}>Reuniones</span>
              <span className={headerLabel}>Índice de actividad</span>
            </div>

            <div className="mt-2.5 md:mt-0 flex flex-col gap-2.5">
              {leaderboard.map((row) => (
                <div
                  key={row.rank}
                  className={`grid ${rowGrid} items-center gap-3 py-2.5 border-b border-[#2D2B40]`}
                >
                  <span className="text-[12px] font-extrabold text-[#FF0094]">{row.rank}</span>
                  <span className="text-[13px] font-bold text-white">
                    {row.team}
                    <em className="md:hidden not-italic font-medium text-[#939393] ml-1">{row.project}</em>
                  </span>
                  <span aria-hidden className="hidden md:block" />
                  <span className="hidden md:block text-[13px] font-medium text-[#C7C9D3]">{row.project}</span>
                  <span aria-hidden className="hidden md:block" />
                  <span className="hidden md:block text-[11px] text-[#939393]">{row.meetings}</span>
                  <div className="hidden md:flex items-center gap-2.5">
                    <div className="h-[7px] flex-1 rounded-full bg-[#2D2B40] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FF0094] to-[#02BEEF] transition-all duration-[1100ms] ease-out"
                        style={{ width: started ? `${row.score}%` : "0%" }}
                      />
                    </div>
                    <span className="w-8 text-[13px] font-extrabold text-white text-right">{row.score}</span>
                  </div>
                  {/* En mobile no hay barra (se oculta desde md): solo el número. */}
                  <span className="md:hidden text-[13px] font-extrabold text-white text-right">{row.score}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-2xl font-extrabold text-white">106</span>
              <span className="text-[13px] text-[#939393]">equipos participando</span>
              <span className="mx-1 text-[#2D2B40]">·</span>
              <span className="text-2xl font-extrabold text-[#02BEEF]">97</span>
              <span className="text-[13px] text-[#939393]">equipos activos</span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 mb-3.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#939393]">
              Peer review · 13 habilidades blandas evaluadas por pares
            </p>
            <div className="flex flex-col gap-2.5 max-w-[420px]">
              {skills.map((skill) => (
                <div key={skill.name} className="grid grid-cols-[110px_1fr_32px] items-center gap-2.5">
                  <span className="text-[12px] font-semibold text-white">{skill.name}</span>
                  <div className="h-[6px] rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#FF0094] to-[#02BEEF] transition-all duration-1000 ease-out"
                      style={{ width: started ? `${skill.score * 10}%` : "0%" }}
                    />
                  </div>
                  <span className="text-[11.5px] font-bold text-[#02BEEF]">{skill.score}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-3.5 text-[11.5px] text-[#939393]">
              Evaluación cruzada + autoevaluación, escala 1–10. Todos evalúan a todos, y cada uno también se evalúa a
              sí mismo.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
