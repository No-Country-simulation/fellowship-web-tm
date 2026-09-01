"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

interface ChainNode {
  cx: number;
  cy: number;
  r: number;
  label: string;
  color?: string;
}

// Progresión rosa -> cian (marca NC) en vez de los colores sueltos del mockup.
const nodes: ChainNode[] = [
  { cx: 65, cy: 110, r: 22, label: "0", color: "#FF0094" },
  { cx: 190, cy: 65, r: 29, label: "1", color: "#CC26A6" },
  { cx: 320, cy: 125, r: 38, label: "2", color: "#9A4CB8" },
  { cx: 470, cy: 75, r: 48, label: "3", color: "#6772CB" },
  { cx: 650, cy: 130, r: 62, label: "4", color: "#3598DD" },
  { cx: 880, cy: 100, r: 82, label: "✓" },
];

const legend = [
  {
    title: "Semana 0 — Kick-off",
    desc: "Formación del equipo y planificación inicial.",
    border: "#e2e2e6",
  },
  {
    title: "Semanas 1 a 4 — Ejecución",
    desc: "Coordinación, decisiones y entregables a lo largo de todo el ciclo.",
    border: "#c4c4cc",
  },
  {
    title: "Cierre",
    desc: "Peer review, entrega final y presentación de resultados.",
    border: "#FF0094",
  },
];

export default function LineaDeTiempo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [nodesIn, setNodesIn] = useState<boolean[]>(() => new Array(nodes.length).fill(false));
  const [edgesDrawn, setEdgesDrawn] = useState<boolean[]>(() => new Array(nodes.length - 1).fill(false));

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
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Dibuja el nodo inicial y va destrabando línea + nodo siguiente en cascada.
  useEffect(() => {
    if (!started) return;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    setNodesIn((prev) => prev.map((_, i) => (i === 0 ? true : prev[i])));
    for (let i = 0; i < nodes.length - 1; i++) {
      timeouts.push(
        setTimeout(() => {
          setEdgesDrawn((prev) => prev.map((v, idx) => (idx === i ? true : v)));
        }, 180 + i * 230)
      );
      timeouts.push(
        setTimeout(() => {
          setNodesIn((prev) => prev.map((v, idx) => (idx === i + 1 ? true : v)));
        }, 320 + i * 230)
      );
    }
    return () => timeouts.forEach(clearTimeout);
  }, [started]);

  return (
    <section className="w-full bg-[#F9F9F9] py-20 md:py-28 text-zinc-900">
      <div className="max-w-[1120px] mx-auto px-4 md:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-6 select-none">
            <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
              04 — La línea de tiempo
            </span>
          </div>
          <h2 className="text-3xl md:text-[42px] font-bold text-[#0a0a0f] tracking-tight leading-tight">
            Ejecución
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div ref={wrapRef} className="mt-11">
            <svg viewBox="0 0 970 220" className="w-full h-auto block overflow-visible">
              <defs>
                <linearGradient id="cf-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF0094" />
                  <stop offset="100%" stopColor="#02BEEF" />
                </linearGradient>
              </defs>

              {nodes.slice(0, -1).map((n, i) => {
                const next = nodes[i + 1];
                return (
                  <line
                    key={`edge-${i}`}
                    x1={n.cx}
                    y1={n.cy}
                    x2={next.cx}
                    y2={next.cy}
                    stroke="url(#cf-line-grad)"
                    strokeWidth={2.5}
                    opacity={0.6}
                    strokeDasharray={400}
                    strokeDashoffset={edgesDrawn[i] ? 0 : 400}
                    style={{ transition: "stroke-dashoffset 1s cubic-bezier(.2,.8,.2,1)" }}
                  />
                );
              })}

              {nodes.map((n, i) => (
                <g
                  key={`node-${i}`}
                  style={{
                    opacity: nodesIn[i] ? 1 : 0,
                    transform: nodesIn[i] ? "scale(1)" : "scale(0.5)",
                    transformOrigin: `${n.cx}px ${n.cy}px`,
                    transition:
                      "opacity .5s cubic-bezier(.34,1.4,.64,1), transform .5s cubic-bezier(.34,1.4,.64,1)",
                    filter: "drop-shadow(0 8px 16px rgba(0,0,0,.18))",
                  }}
                >
                  <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.color ?? "url(#cf-line-grad)"} />
                  <text
                    x={n.cx}
                    y={n.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="'DM Sans', sans-serif"
                    fontWeight={800}
                    fontSize={n.color ? 15 : 22}
                    fill={n.color ? "#fff" : "#000"}
                  >
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-6">
          {legend.map((item, i) => (
            <Reveal key={item.title} delay={150 + i * 80}>
              <div className="pt-3.5" style={{ borderTop: `2px solid ${item.border}` }}>
                {i === 2 ? (
                  <h4 className="text-2xl font-extrabold bg-gradient-to-r from-[#FF0094] to-[#02BEEF] bg-clip-text text-transparent">
                    {item.title}
                  </h4>
                ) : (
                  <h4
                    className={
                      i === 1
                        ? "text-lg font-extrabold text-[#18181b]"
                        : "text-[15px] font-bold text-[#3a3a42]"
                    }
                  >
                    {item.title}
                  </h4>
                )}
                <p className={`mt-1.5 ${i === 1 ? "text-[13.5px] text-[#55555f]" : "text-[12.5px] text-[#8a8a94]"}`}>
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={350}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-xs font-extrabold tracking-[0.02em] text-black bg-gradient-to-r from-[#FF0094] to-[#02BEEF] px-4 py-2 rounded-full whitespace-nowrap">
              Duración típica: 4–6 semanas
            </span>
            <p className="text-[13.5px] text-[#55555f] m-0">
              La duración se adapta al objetivo y a la profundidad de la experiencia — no es un número fijo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
