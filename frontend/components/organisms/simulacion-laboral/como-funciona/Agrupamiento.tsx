"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const TOTAL_PROFILES = 50;

const getProfileSrc = (num: number) =>
  `/people/equipo/perfil${String(num).padStart(2, "0")}.png`;

const paises = [
  { code: "ar", name: "Argentina" },
  { code: "br", name: "Brasil" },
  { code: "cl", name: "Chile" },
  { code: "co", name: "Colombia" },
  { code: "mx", name: "México" },
  { code: "pe", name: "Perú" },
  { code: "uy", name: "Uruguay" },
  { code: "es", name: "España" },
  { code: "ec", name: "Ecuador" },
  { code: "ve", name: "Venezuela" },
  { code: "py", name: "Paraguay" },
  { code: "bo", name: "Bolivia" },
  { code: "cr", name: "Costa Rica" },
  { code: "pa", name: "Panamá" },
  { code: "gt", name: "Guatemala" },
  { code: "hn", name: "Honduras" },
  { code: "sv", name: "El Salvador" },
  { code: "ni", name: "Nicaragua" },
  { code: "cu", name: "Cuba" },
  { code: "do", name: "República Dominicana" },
];

const roles = [
  "AI Engineer",
  "Architect",
  "Automation Specialist",
  "Autonomous Agent Engineer",
  "Backend Developer",
  "Frontend Developer",
  "BI Analyst",
  "BI Developer",
  "Blockchain Developer",
  "Data Scientist",
  "DevOps Engineer",
  "ML Engineer",
  "QA Engineer",
  "UX Designer",
  "Product Manager",
];

const chips = [
  "Multidisciplinarios",
  "Multiculturales",
  "Distribuidos",
  "Asignados aleatoriamente o bajo reglas definidas",
];

const nodes = [
  { cx: 150, cy: 20 },  // top
  { cx: 262, cy: 100 }, // right
  { cx: 218, cy: 232 }, // bottom right
  { cx: 82, cy: 232 },  // bottom left
  { cx: 38, cy: 100 },  // left
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

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomProfiles(count: number) {
  const all = Array.from({ length: TOTAL_PROFILES }, (_, i) => i + 1);
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all.slice(0, count).map((num) => ({
    src: getProfileSrc(num),
    pais: getRandomItem(paises),
    rol: getRandomItem(roles),
  }));
}

export default function Agrupamiento() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [visibleNodes, setVisibleNodes] = useState<boolean[]>(Array(nodes.length).fill(false));
  const [drawnEdges, setDrawnEdges] = useState<boolean[]>(Array(edges.length).fill(false));
  const [profiles, setProfiles] = useState<ReturnType<typeof getRandomProfiles> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    nodes.forEach((_, i) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleNodes((prev) => prev.map((v, idx) => (idx === i ? true : v)));
        }, 300 + i * 250)
      );
    });
    const totalNodeTime = 300 + nodes.length * 250;
    timeouts.push(
      setTimeout(() => {
        setDrawnEdges(Array(edges.length).fill(true));
      }, totalNodeTime)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const changeProfiles = () => {
      setProfiles(getRandomProfiles(5));
      const delay = 1000 + Math.random() * 1500;
      timeoutRef.current = setTimeout(changeProfiles, delay);
    };
    changeProfiles();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [started]);

  const getRolePosition = (node: { cx: number; cy: number }) => {
    if (node.cx > 150) {
      return { textAnchor: "start" as const, x: node.cx + 36 };
    } else if (node.cx < 150) {
      return { textAnchor: "end" as const, x: node.cx - 36 };
    } else {
      return { textAnchor: "start" as const, x: node.cx + 36 };
    }
  };

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
          <div ref={wrapRef} className="mt-12 flex justify-center">
            <svg viewBox="-20 -20 340 340" className="w-80 md:w-[30rem] flex-shrink-0 overflow-visible">
              <defs>
                <linearGradient
                  id="nc-line-grad"
                  gradientUnits="userSpaceOnUse"
                  x1="0" y1="0" x2="320" y2="0"
                >
                  <stop offset="0%" stopColor="#FF0094" />
                  <stop offset="100%" stopColor="#02BEEF" />
                </linearGradient>
              </defs>

              {edges.map((edge, i) => (
                <line
                  key={`edge-${i}`}
                  x1={edge.x1}
                  y1={edge.y1}
                  x2={edge.x2}
                  y2={edge.y2}
                  stroke="url(#nc-line-grad)"
                  strokeWidth="6"
                  opacity={drawnEdges[i] ? 1 : 0}
                  strokeDasharray="400"
                  strokeDashoffset={drawnEdges[i] ? "0" : "400"}
                  style={{ transition: "stroke-dashoffset 0.8s ease, opacity 0.2s ease" }}
                />
              ))}

              {nodes.map((node, i) => {
                const rolePos = getRolePosition(node);
                return (
                  <g
                    key={`node-${i}`}
                    style={{
                      opacity: visibleNodes[i] ? 1 : 0,
                      transform: visibleNodes[i] ? "scale(1)" : "scale(0.4)",
                      transformOrigin: `${node.cx}px ${node.cy}px`,
                      transition: "opacity 0.5s cubic-bezier(0.2,0.8,0.2,1), transform 0.5s cubic-bezier(0.2,0.8,0.2,1)",
                    }}
                  >
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={28}
                      fill="none"
                      stroke="#2D2B40"
                      strokeWidth="2"
                    />

                    <foreignObject x={node.cx - 28} y={node.cy - 28} width="56" height="56">
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          backgroundColor: "#0C0C16",
                        }}
                      >
                        {profiles?.[i] && (
                          <img
                            src={profiles[i].src}
                            alt={`Perfil ${i + 1}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        )}
                      </div>
                    </foreignObject>

                    {profiles?.[i] && (
                      <foreignObject x={node.cx + 8} y={node.cy + 8} width="20" height="20">
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            backgroundColor: "#000115",
                            border: "1px solid #2D2B40",
                          }}
                        >
                          <span
                            className={`fi fi-${profiles[i].pais.code}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "block",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                      </foreignObject>
                    )}

                    <text
                      x={rolePos.x}
                      y={node.cy + 4}
                      textAnchor={rolePos.textAnchor}
                      fontSize="10"
                      fill="#9CA3AF"
                      fontWeight={600}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {profiles?.[i]?.rol}
                    </text>
                  </g>
                );
              })}
            </svg>
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