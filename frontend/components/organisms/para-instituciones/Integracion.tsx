"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

const genera = ["Experience", "Evidence", "Ecosystem", "Community", "Opportunities"];

export default function Integracion() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [slid, setSlid] = useState(false);
  const [flashing, setFlashing] = useState(false);
  const [unified, setUnified] = useState(false);
  const [spark1R, setSpark1R] = useState(0);
  const [spark1Opacity, setSpark1Opacity] = useState(0);
  const [spark2R, setSpark2R] = useState(0);
  const [spark2Opacity, setSpark2Opacity] = useState(0);
  const [plus1Visible, setPlus1Visible] = useState(false);
  const [plus2Visible, setPlus2Visible] = useState(false);

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

  useEffect(() => {
    if (!slid) return;

    // t1: spark + "+" + flash blanco (todo junto)
    const t1 = setTimeout(() => {
      setSpark1R(10);
      setSpark1Opacity(0.9);
      setSpark2R(10);
      setSpark2Opacity(0.9);
      setPlus1Visible(true);
      setPlus2Visible(true);
      setFlashing(true);
    }, 950);

    // t2: apagar spark + flash, encender color No Country
    const t2 = setTimeout(() => {
      setSpark1R(0);
      setSpark1Opacity(0);
      setSpark2R(0);
      setSpark2Opacity(0);
      setFlashing(false);
      setUnified(true);
    }, 950 + 220);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [slid]);

  // Opacidades por capa, según el estado actual de la pieza lateral.
  // - gris: visible mientras no haya ni flash ni color
  // - blanco: visible solo durante el flash
  // - color: visible solo después del flash
  const grayOpacity = flashing || unified ? 0 : 1;
  const whiteOpacity = flashing ? 0.85 : 0;
  const colorOpacity = unified ? 1 : 0;

  return (
    <section className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionBadge>12 Integración</SectionBadge>
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
            complementando contenidos, clases, mentorías y evaluaciones, y conectando el talento formado con
            las empresas que contratan.
          </p>
        </Reveal>

        <div ref={wrapRef} className="mt-11 flex flex-col lg:flex-row items-center gap-7">
          {/* Rompecabezas 3 piezas */}
          <div className="flex-[1.4] min-w-0 w-full max-w-[520px]">
            <svg viewBox="0 0 520 200" className="w-full h-auto overflow-visible">
              <defs>
                <linearGradient id="pi-int-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF0094" />
                  <stop offset="100%" stopColor="#02BEEF" />
                </linearGradient>
                <filter id="pi-int-flash-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Pieza 1: Tu programa */}
              <g
                style={{
                  opacity: slid ? 1 : 0.55,
                  transform: slid ? "translateX(0)" : "translateX(-30px)",
                  transition: "transform 1s cubic-bezier(.2,.8,.2,1), opacity .8s ease",
                }}
              >
                {/* Capa gris (estado aislada) */}
                <path
                  d="M 20,20 L 180,20 L 180,70 C 165,70 160,75 160,85 C 150,85 150,115 160,115 C 160,125 165,130 180,130 L 180,180 L 20,180 Z"
                  fill="#0C0C16"
                  stroke="#2D2B40"
                  strokeWidth={1.5}
                  style={{
                    opacity: grayOpacity,
                    transition: "opacity .25s ease",
                  }}
                />
                {/* Capa blanca (flash intermedio) */}
                <path
                  d="M 20,20 L 180,20 L 180,70 C 165,70 160,75 160,85 C 150,85 150,115 160,115 C 160,125 165,130 180,130 L 180,180 L 20,180 Z"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth={2}
                  filter="url(#pi-int-flash-glow)"
                  style={{
                    opacity: whiteOpacity,
                    transition: "opacity .18s ease",
                  }}
                />
                {/* Capa con color NC (estado unificada) */}
                <path
                  d="M 20,20 L 180,20 L 180,70 C 165,70 160,75 160,85 C 150,85 150,115 160,115 C 160,125 165,130 180,130 L 180,180 L 20,180 Z"
                  fill="url(#pi-int-grad)"
                  fillOpacity={0.14}
                  stroke="url(#pi-int-grad)"
                  strokeWidth={2}
                  style={{
                    opacity: colorOpacity,
                    transition: "opacity .7s ease",
                  }}
                />
                <text x="100" y="75" fontFamily="'DM Sans', sans-serif" fontWeight={800} fontSize={15} fill="#fff" textAnchor="middle">
                  Tu programa
                </text>
                <text x="100" y="115" fontSize={11.5} fontWeight={600} fill="#939393" textAnchor="middle">
                  Content
                </text>
                <text x="100" y="138" fontSize={11.5} fontWeight={600} fill="#939393" textAnchor="middle">
                  Classes
                </text>
                <text x="100" y="161" fontSize={11.5} fontWeight={600} fill="#939393" textAnchor="middle">
                  Mentoring
                </text>
              </g>

              {/* Pieza 2: Simulación Laboral (centro) */}
              <g
                style={{
                  opacity: slid ? 1 : 0.55,
                  transition: "opacity .8s ease",
                }}
              >
                <path
                  d="M 180,20 L 340,20 L 340,70 C 355,70 360,75 360,85 C 370,85 370,115 360,115 C 360,125 355,130 340,130 L 340,180 L 180,180 L 180,130 C 165,130 160,125 160,115 C 150,115 150,85 160,85 C 160,75 165,70 180,70 Z"
                  fill="url(#pi-int-grad)"
                  fillOpacity={0.14}
                  stroke="url(#pi-int-grad)"
                  strokeWidth={2}
                />
                {/* Logo No Country en blanco */}
                <image
                  href="/logos/NoCountry_blanco.png"
                  x="205"
                  y="80"
                  width="110"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>

              {/* Pieza 3: Empresas que contratan */}
              <g
                style={{
                  opacity: slid ? 1 : 0.55,
                  transform: slid ? "translateX(0)" : "translateX(30px)",
                  transition: "transform 1s cubic-bezier(.2,.8,.2,1), opacity .8s ease",
                }}
              >
                {/* Capa gris */}
                <path
                  d="M 340,20 L 500,20 L 500,180 L 340,180 L 340,130 C 355,130 360,125 360,115 C 370,115 370,85 360,85 C 360,75 355,70 340,70 Z"
                  fill="#0C0C16"
                  stroke="#2D2B40"
                  strokeWidth={1.5}
                  style={{
                    opacity: grayOpacity,
                    transition: "opacity .25s ease",
                  }}
                />
                {/* Capa blanca (flash) */}
                <path
                  d="M 340,20 L 500,20 L 500,180 L 340,180 L 340,130 C 355,130 360,125 360,115 C 370,115 370,85 360,85 C 360,75 355,70 340,70 Z"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth={2}
                  filter="url(#pi-int-flash-glow)"
                  style={{
                    opacity: whiteOpacity,
                    transition: "opacity .18s ease",
                  }}
                />
                {/* Capa color NC */}
                <path
                  d="M 340,20 L 500,20 L 500,180 L 340,180 L 340,130 C 355,130 360,125 360,115 C 370,115 370,85 360,85 C 360,75 355,70 340,70 Z"
                  fill="url(#pi-int-grad)"
                  fillOpacity={0.14}
                  stroke="url(#pi-int-grad)"
                  strokeWidth={2}
                  style={{
                    opacity: colorOpacity,
                    transition: "opacity .7s ease",
                  }}
                />
                <text x="420" y="90" fontFamily="'DM Sans', sans-serif" fontWeight={800} fontSize={14} fill="#fff" textAnchor="middle">
                  Empresas
                </text>
                <text x="420" y="113" fontFamily="'DM Sans', sans-serif" fontWeight={800} fontSize={14} fill="#fff" textAnchor="middle">
                  que contratan
                </text>
              </g>

              {/* Spark en la unión 1-2 */}
              <circle
                cx={180}
                cy={100}
                r={spark1R}
                fill="#fff"
                style={{
                  opacity: spark1Opacity,
                  filter: "drop-shadow(0 0 8px #fff)",
                  transition: "r .24s ease-out, opacity .24s ease-out",
                }}
              />
              <g
                style={{
                  opacity: plus1Visible ? 1 : 0,
                  transform: plus1Visible ? "scale(1)" : "scale(0.3)",
                  transformOrigin: "180px 100px",
                  transition: "opacity .4s cubic-bezier(.34,1.56,.64,1), transform .4s cubic-bezier(.34,1.56,.64,1)",
                }}
              >
                <text x="180" y="100" fontSize={18} fontWeight={800} fill="url(#pi-int-grad)" textAnchor="middle" dominantBaseline="central">
                  +
                </text>
              </g>

              {/* Spark en la unión 2-3 */}
              <circle
                cx={340}
                cy={100}
                r={spark2R}
                fill="#fff"
                style={{
                  opacity: spark2Opacity,
                  filter: "drop-shadow(0 0 8px #fff)",
                  transition: "r .24s ease-out, opacity .24s ease-out",
                }}
              />
              <g
                style={{
                  opacity: plus2Visible ? 1 : 0,
                  transform: plus2Visible ? "scale(1)" : "scale(0.3)",
                  transformOrigin: "340px 100px",
                  transition: "opacity .4s cubic-bezier(.34,1.56,.64,1), transform .4s cubic-bezier(.34,1.56,.64,1)",
                }}
              >
                <text x="340" y="100" fontSize={18} fontWeight={800} fill="url(#pi-int-grad)" textAnchor="middle" dominantBaseline="central">
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