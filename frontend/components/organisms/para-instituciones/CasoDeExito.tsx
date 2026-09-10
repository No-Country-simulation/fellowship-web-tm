"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Rocket } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
  { prefix: "", target: 830, suffix: "", label: "Participantes" },
  { prefix: "", target: 106, suffix: "", label: "Equipos" },
  { prefix: "+", target: 21, suffix: "", label: "Países" },
  { prefix: "", target: 6, suffix: "", label: "Semanas" },
  { prefix: "", target: 574, suffix: "", label: "Talento job-ready" },
  { prefix: "", target: 74, suffix: "", label: "Contratados" },
];

const challenges = [
  { name: "FinAI", teams: 38 },
  { name: "EnergyAI", teams: 35 },
  { name: "Techmind", teams: 33 },
];

const funnel = [
  { target: 1240, label: "Participación", widthPct: 100 },
  { target: 892, label: "Finalización", widthPct: 72 },
  { target: 574, label: "Talento job-ready", widthPct: 46 },
  { target: 412, label: "Entrevistas", widthPct: 33 },
  { target: 74, label: "Contratados", widthPct: 6 },
];

const footStats = [
  { value: "−82%", label: "horas de screening" },
  { value: "220K", label: "alcance orgánico" },
  { value: "3 días", label: "de lista a entrevista" },
  { value: "13%", label: "talento contratado" },
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
            className="mt-9 max-w-[760px] bg-[#080911] border border-white/10 rounded-[18px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
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
                  Oracle Next Education × No Country · Hackathon ONE G9
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
                830 estudiantes de ONE resolvieron tres desafíos con IA en formato de hackathon remota, en equipos
                multidisciplinarios, con evidencia de desempeño registrada de punta a punta.
              </p>

              {/* Banner */}
              <div className="mt-5 flex gap-3.5 p-4 md:p-5 border border-[#02BEEF]/25 bg-[#02BEEF]/[0.06] rounded-xl">
                <div className="w-9 h-9 rounded-full bg-[#02BEEF]/10 flex items-center justify-center shrink-0">
                  <Rocket className="w-4 h-4 text-[#02BEEF]" />
                </div>
                <p className="text-[13px] md:text-[13.5px] text-zinc-300 leading-relaxed pt-1.5">
                  +600.000 personas impactadas por ONE con capacitación en tecnología 100% gratuita en LATAM.
                </p>
              </div>

              {/* Métricas reales */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-[#0c0d21] border border-white/5 rounded-xl p-4">
                    <div className="text-[11.5px] font-semibold text-zinc-400">{m.label}</div>
                    <div className="mt-2 text-2xl font-extrabold">
                      {m.prefix}
                      <CountUp target={m.target} started={started} suffix={m.suffix} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tres desafíos */}
              <h4 className="mt-6 text-[10.5px] font-extrabold uppercase tracking-widest text-zinc-500">
                Tres desafíos con IA, definidos con empleadores de la región
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {challenges.map((c) => (
                  <span
                    key={c.name}
                    className="text-xs font-bold px-3.5 py-2 rounded-full bg-[#0c0d21] border border-white/5 text-white"
                  >
                    {c.name} <b className="font-semibold text-zinc-500">· {c.teams} equipos</b>
                  </span>
                ))}
              </div>

              {/* Funnel: de la formación a la contratación */}
              <h4 className="mt-6 text-[10.5px] font-extrabold uppercase tracking-widest text-zinc-500">
                De la formación a la contratación
              </h4>
              <div className="mt-3 flex flex-col gap-2.5">
                {funnel.map((f) => (
                  <div key={f.label} className="grid grid-cols-[110px_1fr_60px] items-center gap-2.5 text-zinc-300">
                    <span className="text-[11px] font-semibold">{f.label}</span>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FF0094] to-[#02BEEF] transition-all duration-[1100ms] ease-out"
                        style={{ width: started ? `${f.widthPct}%` : "0%" }}
                      />
                    </div>
                    <span className="text-[11px] font-bold text-right text-white">
                      <CountUp target={f.target} started={started} />
                    </span>
                  </div>
                ))}
              </div>

              {/* Testimonio */}
              <div className="mt-7 pt-6 border-t border-white/5 flex gap-3.5">
                <Avatar className="h-11 w-11 rounded-full border-2 border-white/10 shrink-0">
                  <AvatarImage src="/people/amanda-gelumbauskas-2.jpg" alt="Amanda Gelumbauskas" asChild>
                    <Image
                      src="/people/amanda-gelumbauskas-2.jpg"
                      alt="Amanda Gelumbauskas"
                      width={44}
                      height={44}
                      className="object-cover"
                    />
                  </AvatarImage>
                  <AvatarFallback className="bg-zinc-800 text-white text-sm font-bold rounded-full w-full h-full flex items-center justify-center">
                    AG
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[13.5px] text-zinc-300 italic leading-relaxed">
                    "La calidad de los proyectos y el nivel de colaboración que vimos en los equipos fue
                    excepcional. No Country ha creado un modelo único para activar el ecosistema e identificar
                    talento real."
                  </p>
                  <p className="mt-2 text-[12px] text-zinc-500">
                    <span className="font-semibold text-zinc-300">Amanda Gelumbauskas</span> · LATAM Head of Oracle
                    Next Education
                  </p>
                </div>
              </div>

              {/* Stats de cierre */}
              <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-5">
                {footStats.map((s) => (
                  <span key={s.label} className="text-[11px] text-zinc-500">
                    <b className="text-white font-extrabold">{s.value}</b> {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
