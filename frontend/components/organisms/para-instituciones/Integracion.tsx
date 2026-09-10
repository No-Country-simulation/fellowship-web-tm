"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

const genera = ["Experience", "Evidence", "Ecosystem", "Community", "Opportunities"];

export default function Integracion() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [slid, setSlid] = useState(false);
  const [sparkR, setSparkR] = useState(0);
  const [sparkOpacity, setSparkOpacity] = useState(0);
  const [plusVisible, setPlusVisible] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSlid(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Réplica del timing del mockup: a los 950ms del slide, el destello "pop-ea".
  useEffect(() => {
    if (!slid) return;
    const t1 = setTimeout(() => {
      setSparkR(10);
      setSparkOpacity(0.9);
      setPlusVisible(true);
    }, 950);
    const t2 = setTimeout(() => {
      setSparkR(0);
      setSparkOpacity(0);
    }, 950 + 240);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [slid]);

  return (
    <section className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionBadge>12 — Integración</SectionBadge>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              No reemplaza tu formación.{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                La potencia.
              </em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-5 max-w-[560px] text-[15px] text-zinc-400 leading-relaxed">
            La Simulación Laboral puede incorporarse como una experiencia dentro del recorrido existente,
            complementando contenidos, clases, mentorías y evaluaciones.
          </p>
        </Reveal>

        <div ref={wrapRef} className="mt-11 flex flex-col lg:flex-row items-center gap-7">
          {/* Venn / rompecabezas */}
          <div className="flex-[1.3] min-w-0 w-full max-w-[420px]">
            <svg viewBox="0 0 340 200" className="w-full h-auto overflow-visible">
              <defs>
                <linearGradient id="pi-int-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF0094" />
                  <stop offset="100%" stopColor="#02BEEF" />
                </linearGradient>
              </defs>

              {/* Pieza izquierda: Tu programa */}
              <g
                style={{
                  opacity: slid ? 1 : 0.55,
                  transform: slid ? "translateX(0)" : "translateX(-26px)",
                  transition: "transform 1s cubic-bezier(.2,.8,.2,1), opacity .8s ease",
                }}
              >
                <path
                  d="M20,20 L180,20 L180,70 A30,30 0 0 1 180,130 L180,180 L20,180 Z"
                  fill="#0C0C16"
                  stroke="#2D2B40"
                  strokeWidth={1.5}
                />
                <text x="95" y="75" fontFamily="'DM Sans', sans-serif" fontWeight={800} fontSize={15} fill="#fff" textAnchor="middle">
                  Tu programa
                </text>
                <text x="95" y="115" fontSize={11.5} fontWeight={600} fill="#939393" textAnchor="middle">
                  Content
                </text>
                <text x="95" y="138" fontSize={11.5} fontWeight={600} fill="#939393" textAnchor="middle">
                  Classes
                </text>
                <text x="95" y="161" fontSize={11.5} fontWeight={600} fill="#939393" textAnchor="middle">
                  Mentoring
                </text>
              </g>

              {/* Pieza derecha: Simulación laboral */}
              <g
                style={{
                  opacity: slid ? 1 : 0.55,
                  transform: slid ? "translateX(0)" : "translateX(26px)",
                  transition: "transform 1s cubic-bezier(.2,.8,.2,1), opacity .8s ease",
                }}
              >
                <path
                  d="M180,180 L180,130 A30,30 0 0 1 180,70 L180,20 L340,20 L340,180 Z"
                  fill="url(#pi-int-grad)"
                  fillOpacity={0.14}
                  stroke="url(#pi-int-grad)"
                  strokeWidth={2}
                />
                <text x="262" y="100" fontFamily="'DM Sans', sans-serif" fontWeight={800} fontSize={15} fill="url(#pi-int-grad)" textAnchor="middle">
                  Simulación
                </text>
                <text x="262" y="122" fontFamily="'DM Sans', sans-serif" fontWeight={800} fontSize={15} fill="url(#pi-int-grad)" textAnchor="middle">
                  Laboral
                </text>
              </g>

              {/* Destello al unirse */}
              <circle
                cx={180}
                cy={100}
                r={sparkR}
                fill="#fff"
                style={{
                  opacity: sparkOpacity,
                  filter: "drop-shadow(0 0 8px #fff)",
                  transition: "r .24s ease-out, opacity .24s ease-out",
                }}
              />

              {/* El + en el medio del círculo, justo donde encajan las piezas */}
              <g
                style={{
                  opacity: plusVisible ? 1 : 0,
                  transform: plusVisible ? "scale(1)" : "scale(0.3)",
                  transformOrigin: "180px 100px",
                  transition: "opacity .4s cubic-bezier(.34,1.56,.64,1), transform .4s cubic-bezier(.34,1.56,.64,1)",
                }}
              >
                <text x="180" y="100" fontSize={20} fontWeight={800} fill="url(#pi-int-grad)" textAnchor="middle" dominantBaseline="central">
                  +
                </text>
              </g>
            </svg>
          </div>

          <div className="text-[22px] text-[#2D2B40] rotate-90 lg:rotate-0 shrink-0">→</div>

          {/* Genera */}
          <div
            className="flex-1 min-w-[260px] rounded-2xl p-[22px_24px]"
            style={{
              border: "1px solid transparent",
              borderImage: "linear-gradient(90deg,#FF0094,#02BEEF) 1",
              background: "#0c0d21",
            }}
          >
            <span className="block text-[11px] font-extrabold uppercase tracking-[0.08em] text-zinc-500 mb-3.5">
              Genera
            </span>
            <div className="flex flex-wrap gap-2">
              {genera.map((item) => (
                <span
                  key={item}
                  className="text-[12.5px] font-bold px-3.5 py-[7px] rounded-full bg-[#0C0C16] text-white border border-[#2D2B40]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
