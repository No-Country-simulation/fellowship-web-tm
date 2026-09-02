"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const teams = [
  { color: "#FF0094", label: "Equipo A" },
  { color: "#02BEEF", label: "Equipo B" },
  { color: "#C06ECF", label: "Equipo C" },
  { color: "#646CF6", label: "Equipo D" },
  { color: "#0CFCA7", label: "Equipo E" },
];

const chips = [
  "Multidisciplinarios",
  "Multiculturales",
  "Distribuidos",
  "Asignados aleatoriamente o bajo reglas definidas",
];

const nodes = [
  { cx: 150, cy: 20 },
  { cx: 262, cy: 100 },
  { cx: 218, cy: 232 },
  { cx: 82, cy: 232 },
  { cx: 38, cy: 100 },
];

const edges = nodes.map((_, i) => {
  const next = nodes[(i + 1) % nodes.length];
  return {
    x1: nodes[i].cx,
    y1: nodes[i].cy,
    x2: next.cx,
    y2: next.cy,
  };
});

export default function Agrupamiento() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [teamIndex, setTeamIndex] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
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
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setTeamIndex((prev) => (prev + 1) % teams.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [started]);

  const currentTeam = teams[teamIndex];

  return (
    <section className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#939393]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_12px_#FF0094]" />
              02 — El agrupamiento
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              No elegís a tu equipo. <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">Trabajás con él.</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div ref={wrapRef} className="mt-12 flex flex-col md:flex-row items-center gap-10">
            {/* Pentágono */}
            <svg viewBox="0 0 300 280" className="w-56 md:w-64 flex-shrink-0">
              {edges.map((edge, i) => (
                <line
                  key={`edge-${i}`}
                  x1={edge.x1}
                  y1={edge.y1}
                  x2={edge.x2}
                  y2={edge.y2}
                  stroke={currentTeam.color}
                  strokeWidth="1.5"
                  opacity="0.55"
                  style={{
                    transition: "stroke 1s ease",
                    strokeDashoffset: started ? "0" : "620",
                  }}
                  strokeDasharray="620"
                />
              ))}

              {nodes.map((node, i) => (
                <g
                  key={`node-${i}`}
                  style={{
                    opacity: started ? 1 : 0,
                    transform: started ? "scale(1)" : "scale(0.6)",
                    transformOrigin: `${node.cx}px ${node.cy}px`,
                    transition: `opacity .5s cubic-bezier(.2,.8,.2,1) ${i * 120}ms, transform .5s cubic-bezier(.2,.8,.2,1) ${i * 120}ms`,
                  }}
                >
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={26}
                    fill={currentTeam.color}
                    style={{ transition: "fill 1s ease" }}
                  />
                  <g transform={`translate(${node.cx},${node.cy})`} stroke="#fff" strokeWidth="1.8" fill="none">
                    <circle cx="0" cy="-5" r="5" fill="#fff" stroke="none" />
                    <path d="M-9 10c0-6 4-10 9-10s9 4 9 10" />
                  </g>
                </g>
              ))}
            </svg>

            {/* Caption */}
            <div className="max-w-sm">
              <span
                className="inline-block text-xs font-bold tracking-wide text-white px-4 py-2 rounded-full transition-colors duration-700"
                style={{ backgroundColor: currentTeam.color }}
              >
                {currentTeam.label}
              </span>
              <p className="mt-4 text-[13.5px] text-[#9CA3AF] leading-relaxed">
                Mismo pentágono, personas distintas. Cada color es una composición de equipo posible.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="mt-8 text-sm text-[#9CA3AF]">Equipos:</p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {chips.map((chip, i) => (
              <Reveal key={chip} delay={280 + i * 80}>
                <span className="inline-flex rounded-full bg-[#0C0C16] border border-[#2D2B40] px-4 py-2 text-[13.5px] font-bold text-white">
                  {chip}
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-10 max-w-xl border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
            <p className="text-base text-[#D1D5DB] leading-relaxed">
              La aleatoriedad es importante: evita que las personas se agrupen solamente con quienes ya conocen o con perfiles similares.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}