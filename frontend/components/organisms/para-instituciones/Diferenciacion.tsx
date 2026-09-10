"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

const enLugarDe = ["Contenidos", "Profesores", "Certificaciones", "Horas de formación"];

const potentePara = [
  "Bootcamps",
  "Universidades",
  "Academias",
  "Programas públicos",
  "Programas corporativos",
  "Iniciativas de empleabilidad",
];

export default function Diferenciacion() {
  const listRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
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
    <section className="bg-white text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionBadge>09 — Diferenciación</SectionBadge>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              Diferenciá tu propuesta educativa{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                con experiencia real
              </em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-[1.4fr_1px_1fr] gap-9 border border-[#ECECEC] rounded-2xl bg-[#FCFCFC] p-8">
            {/* Columna 1: en lugar de */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-[#8a8a94] mb-4">
                En lugar de competir solamente por
              </span>
              <ul ref={listRef} className="flex flex-col">
                {enLugarDe.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[15.5px] font-bold text-[#0a0a0f] border-b border-[#ECECEC] last:border-b-0 py-3"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateX(0)" : "translateX(-14px)",
                      transition: `opacity .4s ease ${i * 70}ms, transform .4s ease ${i * 70}ms`,
                    }}
                  >
                    <span className="text-[#FF0094] font-extrabold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#ECECEC] mx-auto" />

            {/* Columna 2: podés ofrecer */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-[#8a8a94] mb-4">
                Podés ofrecer
              </span>
              <p className="text-[17px] font-bold text-[#0a0a0f] leading-snug">
                Una experiencia de trabajo colaborativo como parte del recorrido educativo.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-9 text-[15px] text-[#55555f]">Especialmente potente para:</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {potentePara.map((chip, i) => (
              <Reveal key={chip} delay={230 + i * 70}>
                <span className="inline-flex rounded-full bg-white border border-[#ECECEC] px-4 py-2.5 text-[13.5px] font-bold text-[#0a0a0f] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  {chip}
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
