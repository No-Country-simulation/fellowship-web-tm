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

const leaderboard: LeaderboardRow[] = [
  { rank: 1, team: "Equipo 18", project: "FinAI", meetings: "18 encuentros", score: 94 },
  { rank: 2, team: "Equipo 49", project: "EnergyAI", meetings: "16 encuentros", score: 88 },
  { rank: 3, team: "Equipo 29", project: "FinAI", meetings: "14 encuentros", score: 81 },
  { rank: 4, team: "Equipo 4", project: "Techmind", meetings: "12 encuentros", score: 73 },
];

const skills: SkillRow[] = [
  { name: "Comunicación", score: 9.2 },
  { name: "Adaptación", score: 8.7 },
  { name: "Liderazgo", score: 8.5 },
];

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
            <div className="mt-9 flex flex-col gap-2.5">
              {leaderboard.map((row) => (
                <div
                  key={row.rank}
                  className="grid grid-cols-[20px_1fr_40px] md:grid-cols-[24px_1fr_90px_1fr_40px] items-center gap-3 py-2.5 border-b border-[#2D2B40]"
                >
                  <span className="text-[12px] font-extrabold text-[#FF0094]">{row.rank}</span>
                  <span className="text-[13px] font-bold text-white">
                    {row.team} <em className="not-italic font-medium text-[#939393] ml-1">{row.project}</em>
                  </span>
                  <span className="hidden md:block text-[11px] text-[#939393]">{row.meetings}</span>
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

          <Reveal delay={150}>
            <p className="mt-3.5 text-[11.5px] text-[#939393]">106 equipos participando · 97 equipos activos</p>
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
