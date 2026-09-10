"use client";

import { useEffect, useRef, useState } from "react";
import { Rocket } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

function CountUp({ target, started, suffix = "" }: { target: number; started: boolean; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 26) || 1;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setValue(current);
    }, 40);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <span>
      {value.toLocaleString("es-AR")}
      {suffix}
    </span>
  );
}

const metrics = [
  { prefix: "+", target: 2500, suffix: "", label: "Participantes" },
  { prefix: "", target: 4, suffix: "", label: "Ediciones" },
  { prefix: "+", target: 25, suffix: "", label: "Países" },
  { prefix: "", target: 30, suffix: "", label: "Semanas" },
];

export default function CasoDeExito() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
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
    <section className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionBadge>10 — Caso de éxito</SectionBadge>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              De formación{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                a experiencia laboral
              </em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div
            ref={cardRef}
            className="mt-11 max-w-[720px] bg-[#080911] border border-white/10 rounded-[18px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            {/* Topbar */}
            <div className="flex gap-1.5 px-5 py-3.5 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>

            <div className="p-6 md:p-8">
              {/* Tag + meta */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[10.5px] font-extrabold tracking-[0.06em] text-black bg-[#02BEEF] px-2.5 py-1 rounded">
                  CASO REAL
                </span>
                <span className="text-[11.5px] font-semibold text-zinc-500 tracking-[0.03em]">
                  Oracle Next Education × No Country
                </span>
                <a
                  href="https://www.oracle.com/latam/education/oracle-next-education/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-zinc-500 hover:text-[#02BEEF] underline underline-offset-2 transition-colors normal-case tracking-normal font-normal"
                >
                  Verificado en oracle.com
                </a>
              </div>

              <p className="mt-4 text-[14.5px] text-zinc-300 leading-relaxed max-w-xl">
                Una experiencia de Simulación Laboral integrada a un programa de formación de talento tecnológico en
                LATAM.
              </p>

              {/* Banner */}
              <div className="mt-5 flex gap-3.5 p-4 md:p-5 border border-[#02BEEF]/25 bg-[#02BEEF]/[0.06] rounded-xl">
                <div className="w-9 h-9 rounded-full bg-[#02BEEF]/10 flex items-center justify-center shrink-0">
                  <Rocket className="w-4 h-4 text-[#02BEEF]" />
                </div>
                <p className="text-[13px] md:text-[13.5px] text-zinc-300 leading-relaxed pt-1.5">
                  Los participantes pasaron de aprender contenidos a trabajar en equipos sobre proyectos concretos
                  durante varias semanas.
                </p>
              </div>

              {/* Métricas reales */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-[#0c0d21] border border-white/5 rounded-xl p-4 text-center">
                    <div className="text-2xl md:text-[26px] font-extrabold">
                      {m.prefix}
                      <CountUp target={m.target} started={started} suffix={m.suffix} />
                    </div>
                    <div className="mt-1 text-[10.5px] font-bold tracking-widest text-zinc-500 uppercase">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
