"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

interface ChallengeBar {
  name: string;
  description: string;
  color: string;
  widthPct: number;
  value: string;
}

interface RoleBar {
  name: string;
  widthPct: number;
  value: string;
}

const challenges: ChallengeBar[] = [
  {
    name: "FinAI",
    description: "Asistente de IA para administración financiera personal",
    color: "#FF0094",
    widthPct: 100,
    value: "38 equipos",
  },
  {
    name: "EnergyAI",
    description: "Plataforma AI-based de eficiencia energética",
    color: "#C06ECF",
    widthPct: 92,
    value: "35 equipos",
  },
  {
    name: "Techmind",
    description: "Organizador inteligente de conocimiento, AI-based",
    color: "#02BEEF",
    widthPct: 87,
    value: "33 equipos",
  },
];

const roles: RoleBar[] = [
  { name: "Backend", widthPct: 100, value: "268" },
  { name: "Front End", widthPct: 87, value: "232" },
  { name: "Data Scientist", widthPct: 66, value: "178" },
  { name: "AI Engineer", widthPct: 57, value: "152" },
];

const stack = ["OCI", "Java", "Python", "Spring Boot"];

function BarRow({
  label,
  description,
  widthPct,
  value,
  color,
  started,
}: {
  label: string;
  description?: string;
  widthPct: number;
  value: string;
  color?: string;
  started: boolean;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[170px_1fr_70px] items-center gap-2 sm:gap-3">
      <span className="text-[13px] font-bold text-[#0a0a0f]">
        {label}
        {description && (
          <em className="block not-italic font-normal text-[11px] text-[#8a8a94] mt-0.5">{description}</em>
        )}
      </span>
      <div className="h-[7px] rounded-full bg-[#ececec] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-[1100ms] ease-out"
          style={{
            width: started ? `${widthPct}%` : "0%",
            background: color ?? "linear-gradient(90deg,#FF0094,#02BEEF)",
          }}
        />
      </div>
      <span className="text-[12.5px] font-bold text-[#0a0a0f] text-right">{value}</span>
    </div>
  );
}

export default function Alcance() {
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
    <section id="ce-alcance" className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ececec] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[720px]">
            <SectionBadge>01  Alcance</SectionBadge>
            <h2 className="mt-4 text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-tight">
              830 personas, 106 equipos,{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                tres productos con IA
              </em>
            </h2>
          </div>
          <p className="mt-4 max-w-[560px] text-[15px] leading-[1.7] text-[#55555f]">
            Equipos multidisciplinarios armados desde cero, trabajando en paralelo sobre tres productos con IA
            definidos a partir de necesidades relevadas con empleadores de la región.
          </p>
        </Reveal>

        <div ref={barsRef}>
          <Reveal delay={100}>
            <p className="mt-8 mb-3.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#8a8a94]">
              Tres desafíos · definidos con necesidades relevadas a empleadores
            </p>
            <div className="flex flex-col gap-3">
              {challenges.map((c) => (
                <BarRow
                  key={c.name}
                  label={c.name}
                  description={c.description}
                  widthPct={c.widthPct}
                  value={c.value}
                  color={c.color}
                  started={started}
                />
              ))}
            </div>
          </Reveal>

          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Reveal delay={200}>
              <p className="mb-3.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#8a8a94]">
                Roles por equipo
              </p>
              <div className="flex flex-col gap-3">
                {roles.map((r) => (
                  <BarRow key={r.name} label={r.name} widthPct={r.widthPct} value={r.value} started={started} />
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="mb-3.5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#8a8a94]">
                Stack en juego
              </p>
              <div className="flex flex-wrap gap-2.5">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="text-[13.5px] font-bold px-[18px] py-[10px] rounded-full bg-white border border-[#ececec] text-[#0a0a0f] shadow-[0_1px_2px_rgba(0,0,0,.04)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-3.5 text-[11.5px] text-[#8a8a94]">
                Tecnologías aplicadas sobre el producto, no en ejercicios de práctica.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
