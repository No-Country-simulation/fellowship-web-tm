"use client";

import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

const stops = [
  { cx: 60, cy: 65 },
  { cx: 235, cy: 65 },
  { cx: 410, cy: 65 },
  { cx: 585, cy: 65 },
];

const labels = ["Formación", "Simulación", "Evidencia", "Visibilidad del talento", "Oportunidades laborales"];

export default function TalentPipeline() {
  return (
    <section className="bg-white text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionBadge>08 — Talent pipeline</SectionBadge>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              Convertí la experiencia{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                en un puente hacia oportunidades
              </em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-5 max-w-[560px] text-[15px] text-[#55555f] leading-relaxed">
            Las empresas pueden involucrarse en las experiencias y observar talento mientras trabaja.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 max-w-[800px]">
            <svg viewBox="0 0 800 130" className="w-full h-auto block">
              <defs>
                <linearGradient id="tp-final-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF0094" />
                  <stop offset="100%" stopColor="#02BEEF" />
                </linearGradient>
              </defs>

              <path id="tp-runway-path" fill="none" stroke="#e4e4e8" strokeWidth={2} d="M60,65 L740,65" />

              {stops.map((s, i) => (
                <circle key={i} cx={s.cx} cy={s.cy} r={8} fill="#fff" stroke="#c4c4cc" strokeWidth={2} />
              ))}
              <circle cx={740} cy={65} r={24} fill="url(#tp-final-grad)" />
              <text
                x={740}
                y={65}
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="'DM Sans', sans-serif"
                fontWeight={800}
                fontSize={18}
                fill="#000"
              >
                ✓
              </text>

              <circle r={6} fill="#FF0094" style={{ filter: "drop-shadow(0 0 5px #FF0094)" }}>
                <animateMotion dur="4.5s" repeatCount="indefinite" begin="0s">
                  <mpath href="#tp-runway-path" />
                </animateMotion>
              </circle>
              <circle r={6} fill="#02BEEF" style={{ filter: "drop-shadow(0 0 5px #02BEEF)" }}>
                <animateMotion dur="4.5s" repeatCount="indefinite" begin="-2.25s">
                  <mpath href="#tp-runway-path" />
                </animateMotion>
              </circle>
            </svg>

            <div className="mt-3 flex flex-col md:flex-row md:justify-between gap-2.5 md:gap-1.5 text-left md:text-center">
              {labels.map((label, i) => (
                <span
                  key={label}
                  className={
                    i === labels.length - 1
                      ? "flex-1 text-[11.5px] font-bold bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent"
                      : "flex-1 text-[11.5px] font-bold text-[#71717a]"
                  }
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-11 max-w-xl border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
            <span className="block text-[11px] font-bold uppercase tracking-widest text-[#8a8a94]">Staffing</span>
            <p className="mt-1 text-base text-[#0a0a0f] leading-relaxed">
              Cuando existe una necesidad concreta de incorporación, la evidencia generada durante la experiencia
              puede convertirse en un punto de partida para procesos de selección y staffing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
