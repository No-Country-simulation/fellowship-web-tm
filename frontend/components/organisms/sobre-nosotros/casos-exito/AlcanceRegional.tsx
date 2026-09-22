"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

interface CountryBar {
  code: string;
  name: string;
  widthPct: number;
  value: string;
}

const regionStats = [
  { n: "+21", l: "Países" },
  { n: "2", l: "Idiomas · ES + PT" },
];

// Ancho de barra proporcional al valor más alto (Brasil = 197 = 100%).
const countries: CountryBar[] = [
  { code: "br", name: "Brasil", widthPct: 100, value: "197" },
  { code: "mx", name: "México", widthPct: 61, value: "120" },
  { code: "co", name: "Colombia", widthPct: 56, value: "111" },
  { code: "ar", name: "Argentina", widthPct: 50, value: "98" },
  { code: "pe", name: "Perú", widthPct: 22, value: "43" },
  { code: "ve", name: "Venezuela", widthPct: 18, value: "35" },
];

function CountryBarRow({ code, name, widthPct, value, started }: CountryBar & { started: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[170px_1fr_70px] items-center gap-2 sm:gap-3">
      <span className="flex items-center gap-2 text-[13px] font-bold text-white">
        <span className={`fi fi-${code} w-[18px] h-[13px] rounded-[2px] shrink-0`} />
        {name}
      </span>
      <div className="h-[7px] rounded-full bg-[#2D2B40] overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#FF0094] to-[#02BEEF] transition-all duration-[1100ms] ease-out"
          style={{ width: started ? `${widthPct}%` : "0%" }}
        />
      </div>
      <span className="text-[12.5px] font-bold text-white text-right">{value}</span>
    </div>
  );
}

export default function AlcanceRegional() {
  const barsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
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
    <section id="ce-region" className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[720px]">
            <SectionBadge>02 Alcance regional</SectionBadge>
            <h2 className="mt-4 text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-tight">
              El talento participó desde{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                toda la región
              </em>
            </h2>
          </div>
          <p className="mt-4 max-w-[560px] text-[15px] leading-[1.7] text-[#9CA3AF]">
            Se asignaron equipos con personas de distintos países y corrió en dos idiomas, español y portugués,
            respetando disponibilidad y diversidad.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-11 flex gap-8">
            {regionStats.map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="text-[28px] font-extrabold">{s.n}</span>
                <span className="mt-0.5 text-[11.5px] text-[#8A8A94]">{s.l}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div ref={barsRef}>
          <Reveal delay={100}>
            <p className="mt-8 mb-3.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#8A8A94]">
              Distribución por país
            </p>
            <div className="flex flex-col gap-3">
              {countries.map((c) => (
                <CountryBarRow key={c.name} {...c} started={started} />
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-3.5 text-[11.5px] text-[#8A8A94]">+15 países más con participación activa</p>
        </Reveal>

        <Reveal delay={200}>
          <p
            className="mt-9 max-w-[640px] text-xl font-bold leading-[1.45] pl-[22px] py-3 bg-[rgba(255,0,148,0.05)] border-l-[3px] border-transparent"
            style={{ borderImage: "linear-gradient(90deg,#FF0094,#02BEEF) 1" }}
          >
            Los equipos se arman sin fronteras ni barrera de idioma: la diversidad de origen es parte de la
            simulación.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
