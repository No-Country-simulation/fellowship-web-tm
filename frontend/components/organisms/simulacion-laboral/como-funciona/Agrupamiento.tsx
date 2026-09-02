"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const colors = ["#FF0094", "#02BEEF", "#C06ECF", "#646CF6", "#0CFCA7"];

const chips = [
  "Multidisciplinarios",
  "Multiculturales",
  "Distribuidos",
  "Asignados aleatoriamente o bajo reglas definidas",
];

// Orden visual: 1 → 5 → 4 → 3 → 2
const nodes = [
  { cx: 150, cy: 20 },  // node 1
  { cx: 262, cy: 100 }, // node 5
  { cx: 218, cy: 232 }, // node 4
  { cx: 82, cy: 232 },  // node 3
  { cx: 38, cy: 100 },  // node 2
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
  const [visibleNodes, setVisibleNodes] = useState<boolean[]>(Array(nodes.length).fill(false));
  const [drawnEdges, setDrawnEdges] = useState<boolean[]>(Array(edges.length).fill(false));
  const [nodeColors, setNodeColors] = useState<string[]>(Array(nodes.length).fill(colors[0]));

  // Activar cuando entra en viewport
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

  // Secuencia: primero nodos uno por uno, después líneas
  useEffect(() => {
    if (!started) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    // Aparecen los nodos en orden numérico
    nodes.forEach((_, i) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleNodes((prev) => prev.map((v, idx) => (idx === i ? true : v)));
        }, 300 + i * 250)
      );
    });

    // Después de que aparezcan todos, se dibujan las líneas
    const totalNodeTime = 300 + nodes.length * 250;
    timeouts.push(
      setTimeout(() => {
        setDrawnEdges(Array(edges.length).fill(true));
      }, totalNodeTime)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [started]);

  // Colores aleatorios por nodo, independientes
  useEffect(() => {
    if (!started) return;

    const intervals = nodes.map((_, i) => {
      return setInterval(() => {
        setNodeColors((prev) => {
          const next = [...prev];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          next[i] = randomColor;
          return next;
        });
      }, 1000 + Math.random() * 1500);
    });

    return () => intervals.forEach(clearInterval);
  }, [started]);

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
<svg viewBox="-20 -20 340 340" className="w-96 md:w-[36rem] flex-shrink-0">
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

              {/* Nodos */}
              {nodes.map((node, i) => (
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
                    fill={nodeColors[i]}
                  />
                  <g transform={`translate(${node.cx},${node.cy})`} stroke="#fff" strokeWidth="1.8" fill="none">
                    <circle cx="0" cy="-5" r="5" fill="#fff" stroke="none" />
                    <path d="M-9 10c0-6 4-10 9-10s9 4 9 10" />
                  </g>
                </g>
              ))}
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