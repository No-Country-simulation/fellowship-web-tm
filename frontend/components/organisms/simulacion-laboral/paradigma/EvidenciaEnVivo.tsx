"use client";

import { useEffect, useRef, useState } from "react";
import { Gauge, Users, Star, CheckCircle2, MessageSquare, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

function QuoteColumn({
  icon,
  title,
  color,
  quotes,
}: {
  icon: string;
  title: string;
  color: string;
  quotes: string[];
}) {
  return (
    <div>
      <div className="text-[13.5px] font-bold mb-3.5" style={{ color }}>
        {icon} {title}
      </div>
      {quotes.map((q) => (
        <blockquote
          key={q}
          className="text-[13px] text-zinc-300 italic leading-relaxed py-3 border-b border-white/5 last:border-none"
        >
          "{q}"
        </blockquote>
      ))}
    </div>
  );
}

function CountUp({
  target,
  started,
  suffix = "",
}: {
  target: number;
  started: boolean;
  suffix?: string;
}) {
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
      {value}
      {suffix}
    </span>
  );
}

interface Metric {
  icon: React.ElementType;
  color: string;
  label: string;
  content: React.ReactNode;
  sub?: React.ReactNode;
  bar?: number;
}

const skillsData: [string, number, number][] = [
  ["Accountability", 9.6, 9.0],
  ["Teamwork", 9.4, 9.0],
  ["Communication", 9.4, 9.0],
  ["Time Management", 9.4, 9.0],
  ["Adaptability", 9.3, 9.0],
  ["Critical Thinking", 9.3, 9.0],
  ["Attention to Detail", 9.3, 9.0],
  ["Empathy", 9.3, 9.0],
  ["Problem Solving", 9.3, 9.0],
  ["Conflict Resolution", 9.2, 9.0],
  ["Creativity", 9.2, 9.0],
  ["Resilience", 8.8, 9.0],
  ["Leadership", 8.2, 9.0],
];

const fortalezas = [
  "Muy comprometido con el equipo. Toma la iniciativa.",
  "Fue un gusto trabajar en equipo, hubo ayuda y empatía en los momentos difíciles.",
  "Posee mucho pensamiento crítico y sabe llevar al equipo.",
];

const mejoras = [
  "Reforzar la comunicación y la documentación en próximos proyectos.",
  "Podría acompañar más de cerca a compañeros con menos experiencia.",
  "Seguir trabajando la gestión del tiempo bajo presión.",
];

export default function EvidenciaEnVivo() {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const metrics: Metric[] = [
    {
      icon: Gauge,
      color: "#FF0094",
      label: "Índice de actividad",
      content: (
        <>
          <CountUp target={87} started={started} />
          <span className="text-zinc-500 text-lg">/100</span>
        </>
      ),
      bar: 87,
    },
    {
      icon: Users,
      color: "#02BEEF",
      label: "Pool de la simulación",
      content: <CountUp target={628} started={started} />,
      sub: (
        <>
          Distribuidos en <b className="text-zinc-300">85</b> equipos activos
        </>
      ),
    },
    {
      icon: Star,
      color: "#0CFCA7",
      label: "Peer review promedio",
      content: (
        <>
          9.2<span className="text-zinc-500 text-lg">/10</span>
        </>
      ),
      sub: "11 reseñas de tus compañeros",
    },
    {
      icon: CheckCircle2,
      color: "#646CF6",
      label: "Reuniones asistidas",
      content: <CountUp target={14} started={started} />,
    },
    {
      icon: MessageSquare,
      color: "#C06ECF",
      label: "Mensajes enviados",
      content: <CountUp target={103} started={started} />,
    },
    {
      icon: Clock,
      color: "#FF0094",
      label: "Tiempo en reuniones",
      content: (
        <>
          <CountUp target={6} started={started} suffix="h" />{" "}
          <CountUp target={20} started={started} suffix="m" />
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f2f2f5] py-12 md:py-28 text-[#0a0a0f]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4 md:mb-6 select-none">
            <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#8a8a94] uppercase">
              04 — La evidencia, en vivo
            </span>
          </div>
          <h2 className="text-2xl md:text-[40px] font-bold tracking-tight leading-tight max-w-2xl">
            Así se ve <span className="bg-gradient-to-r from-[#FF0094] to-[#02BEEF] bg-clip-text text-transparent">tu resultado</span> al terminar
          </h2>
          <p className="mt-3 text-sm md:text-[15px] text-[#55555f] max-w-xl">
            No es una nota ni un certificado. Al cerrar la simulación, cada participante ve exactamente esto.
          </p>
        </Reveal>

        {/* Mockup del dashboard real */}
        <Reveal delay={150} className="mt-10 md:mt-12">
        <div
          ref={cardRef}
          className="bg-[#080911] border border-white/10 rounded-[18px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          {/* Topbar */}
          <div className="flex gap-1.5 px-4 md:px-5 py-3.5 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>

          <div className="p-6 md:p-8 text-white">
            {/* Tag + Title */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10.5px] font-extrabold tracking-[0.06em] text-black bg-[#F5A623] px-2.5 py-1 rounded">
                CIERRE
              </span>
              <span className="text-[11.5px] font-semibold text-zinc-500 tracking-[0.03em]">
                Simulación laboral · Septiembre 2025
              </span>
            </div>
            <h3 className="mt-2.5 text-2xl md:text-[28px] font-extrabold">Resultado final</h3>

            {/* Banner */}
            <div className="mt-5 flex gap-3.5 p-4 md:p-5 border border-[#F5A623]/30 bg-[#F5A623]/[0.06] rounded-xl">
              <span className="text-xl shrink-0">🏆</span>
              <div>
                <b className="text-[14.5px]">Simulación finalizada.</b>
                <p className="mt-1 text-[13px] text-zinc-400 leading-relaxed">
                  Este resumen refleja tu actividad y participación — no es una nota de aprobación. Medimos presencia, colaboración y cómo te vieron tus compañeros.
                </p>
              </div>
            </div>

            {/* Métricas */}
            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3">
              {metrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="bg-[#0c0d21] border border-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-1.5 text-[11.5px] font-bold text-zinc-400">
                      <Icon className="w-3.5 h-3.5" style={{ color: m.color }} />
                      {m.label}
                    </div>
                    <div className="mt-2 text-2xl font-extrabold">{m.content}</div>
                    {m.sub && <div className="mt-1 text-[11.5px] text-zinc-500">{m.sub}</div>}
                    {m.bar !== undefined && (
                      <div className="mt-2.5 h-[5px] bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#FF0094] to-[#02BEEF] transition-all duration-1000 ease-out"
                          style={{ width: started ? `${m.bar}%` : "0%" }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Peer review vs autoevaluación */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <h4 className="text-base font-bold">
                Peer review vs. autoevaluación{" "}
                <span className="text-zinc-500 font-medium">— 13 soft skills</span>
              </h4>
              <p className="mt-1.5 text-[13px] text-zinc-400">
                El puntaje que te dieron tus compañeros, comparado con tu propia autopercepción.
              </p>
              <div className="flex gap-5 mt-4 mb-2.5 text-[11.5px] font-semibold text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <i className="w-2 h-2 rounded-sm bg-gradient-to-r from-[#FF0094] to-[#02BEEF] inline-block" />
                  Recibido
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="w-2 h-2 rounded-sm bg-zinc-600 inline-block" />
                  Autopercepción
                </span>
              </div>

              <div>
                {skillsData.map(([name, recv, self]) => (
                  <div
                    key={name}
                    className="grid grid-cols-[100px_1fr_36px_1fr_36px] md:grid-cols-[120px_1fr_46px_1fr_46px] items-center gap-2.5 py-2 border-b border-white/5 last:border-none text-[12px] md:text-[12.5px]"
                  >
                    <span className="text-zinc-300 font-semibold truncate">{name}</span>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FF0094] to-[#02BEEF] transition-all duration-700 ease-out"
                        style={{ width: started ? `${recv * 10}%` : "0%" }}
                      />
                    </div>
                    <span className="text-[#02BEEF] font-bold">{recv.toFixed(1)}</span>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-zinc-600 transition-all duration-700 ease-out"
                        style={{ width: started ? `${self * 10}%` : "0%" }}
                      />
                    </div>
                    <span className="text-zinc-500 font-bold">{self.toFixed(1)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Áreas de fortaleza / mejora */}
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              <QuoteColumn icon="★" title="Áreas de fortaleza" color="#0CFCA7" quotes={fortalezas} />
              <QuoteColumn icon="↗" title="Áreas de mejora" color="#02BEEF" quotes={mejoras} />
            </div>
          </div>
        </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="mt-7 max-w-xl font-bold text-[17px] md:text-[20px] leading-snug">
            Ningún dato se carga a mano. Se construye solo, a medida que el equipo trabaja.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
