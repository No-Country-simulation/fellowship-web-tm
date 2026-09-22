"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight, Mic } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

interface Speaker {
  name: string;
  photo: string;
  speaking?: boolean;
}

interface Observer {
  name: string;
  role: string;
  photo: string;
}

const productStats = [
  { label: "Conversión", value: "68%" },
  { label: "Tiempo alta", value: "1.2 min" },
  { label: "Drop-off", value: "−40%" },
];

const weeklyBars = [38, 52, 34, 64, 56, 100];

const funnelSteps = [
  { widthPct: 100, color: "#FF0094" },
  { widthPct: 62, color: "#FF0094" },
  { widthPct: 36, color: "#02BEEF" },
];

const speakers: Speaker[] = [
  { name: "Ana", photo: "/people/equipo/perfil12.png", speaking: true },
  { name: "Valeria", photo: "/people/equipo/perfil06.png" },
  { name: "Diego", photo: "/people/equipo/perfil05.png" },
];

const observers: Observer[] = [
  { name: "Sofía Ledesma", role: "Jurado · CTO", photo: "/people/equipo/perfil08.png" },
  { name: "Martín Aguirre", role: "Jurado · Talent Lead", photo: "/people/equipo/perfil02.png" },
  { name: "Camila Ferrer", role: "Mentora · Alura", photo: "/people/equipo/perfil07.png" },
];

const extraObserverPhotos = [
  "/people/equipo/perfil15.png",
  "/people/equipo/perfil22.png",
  "/people/equipo/perfil33.png",
];

const liveStats = [
  { target: 24, suffix: "", label: "Equipos presentando" },
  { target: 157, suffix: "", label: "Asistentes en vivo" },
  { target: 14, suffix: "", label: "Países conectados" },
  { target: 100, suffix: "%", label: "Remoto" },
];

const steps = ["Pitch de 5 min", "Demo del producto", "Q&A del jurado", "Evaluación y feedback"];

function CountUp({ target, started, suffix = "" }: { target: number; started: boolean; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 24) || 1;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setValue(current);
    }, 45);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export default function DemoDay() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
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

  return (
    <section id="ce-demoday" className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ececec] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[720px]">
            <SectionBadge>05 Demo Day</SectionBadge>
            <h2 className="mt-4 text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-tight">
              Los equipos presentaron en el{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                Demo Day
              </em>
            </h2>
          </div>
          <p className="mt-4 max-w-[600px] text-[15px] leading-[1.7] text-[#55555f]">
            La experiencia cerró con una presentación en vivo: cada equipo mostró su solución, defendió sus
            decisiones y respondió preguntas de mentores, decisores y empresas invitadas.
          </p>
        </Reveal>

        <div ref={contentRef} className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_120px_360px] gap-6 items-start">
          {/* Columna 1: pantalla compartida + stepper */}
          <Reveal delay={100}>
            <div className="bg-white border border-[#ececec] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#ececec]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF0094]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#e4e4e8]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#02BEEF]" />
                <span className="ml-2 text-[12px] font-bold text-[#8a8a94]">
                  Pantalla compartida · Demo del producto
                </span>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#FF0094]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF0094] animate-pulse" />
                  EN VIVO
                </span>
              </div>

              <div className="flex gap-5 p-6">
                <div className="hidden sm:flex flex-col gap-2.5 w-9 shrink-0 pt-1">
                  <span className="h-1.5 rounded-full bg-[#FF0094] w-full" />
                  <span className="h-1.5 rounded-full bg-[#ececec] w-full" />
                  <span className="h-1.5 rounded-full bg-[#ececec] w-full" />
                  <span className="h-1.5 rounded-full bg-[#ececec] w-2/3" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[19px] font-extrabold">FinAI</div>
                      <div className="text-[13px] text-[#8a8a94]">Panel de conversión · últimos 30 días</div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                      <span className="h-6 w-10 rounded-md bg-[#F5F5F7]" />
                      <span className="h-6 w-10 rounded-md bg-[linear-gradient(90deg,#FF0094,#02BEEF)]" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {productStats.map((s) => (
                      <div key={s.label} className="bg-[#F9F9F9] border border-[#ececec] rounded-lg p-3.5">
                        <div className="text-[18px] font-extrabold">{s.value}</div>
                        <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.04em] text-[#8a8a94]">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-[1.4fr_1fr] gap-5">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#8a8a94]">
                        Altas por semana
                      </div>
                      <div className="mt-3 flex items-end gap-2 h-[150px]">
                        {weeklyBars.map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-[3px] transition-all duration-700 ease-out"
                            style={{
                              height: started ? `${h}%` : "0%",
                              background:
                                i === weeklyBars.length - 1 ? "linear-gradient(180deg,#FF0094,#02BEEF)" : "#ececec",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#8a8a94]">Pasos</div>
                      <div className="mt-4 flex flex-col gap-3">
                        {funnelSteps.map((f, i) => (
                          <div key={i} className="h-2.5 rounded-full bg-[#ececec] overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-700 ease-out"
                              style={{ width: started ? `${f.widthPct}%` : "0%", background: f.color }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {steps.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-full bg-white border border-[#ececec] px-5 py-2.5 text-[13px] font-bold text-[#0a0a0f] whitespace-nowrap">
                    {step}
                  </span>
                  {i < steps.length - 1 && (
                    <ChevronRight className="w-4 h-4 shrink-0 text-[#c4c4cc]" strokeWidth={2} />
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Columna 2: participantes — solo en desktop, oculta cuando el layout se apila */}
          <Reveal delay={150} className="hidden lg:block">
            <div className="flex flex-col gap-4">
              {speakers.map((s) => (
                <div key={s.name} className="flex flex-col items-center gap-2">
                  <div
                    className={`relative w-full aspect-square rounded-xl overflow-hidden border-2 ${
                      s.speaking ? "border-[#FF0094]" : "border-[#ececec]"
                    }`}
                  >
                    <Image src={s.photo} alt={s.name} fill className="object-cover" sizes="120px" />
                    {s.speaking && (
                      <span className="absolute top-2 left-2 text-[9px] font-extrabold text-white bg-[#FF0094] px-2 py-1 rounded">
                        HABLA
                      </span>
                    )}
                  </div>
                  <span className="text-[12px] font-semibold text-[#8a8a94] flex items-center gap-1.5">
                    <Mic className="w-3 h-3" strokeWidth={2.5} />
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Columna 3: quién observa + stats */}
          <Reveal delay={200}>
            <div className="bg-white border border-[#ececec] rounded-2xl p-5">
              <div className="text-[10.5px] font-extrabold uppercase tracking-[0.08em] text-[#8a8a94]">
                Quién observa
              </div>
              <div className="mt-3 flex flex-col gap-3">
                {observers.map((o) => (
                  <div key={o.name} className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                      <Image src={o.photo} alt={o.name} fill className="object-cover" sizes="32px" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12.5px] font-bold text-[#0a0a0f] truncate">{o.name}</div>
                      <div className="text-[11px] text-[#8a8a94] truncate">{o.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3.5 pt-3.5 border-t border-[#ececec] flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  {extraObserverPhotos.map((photo, i) => (
                    <div
                      key={photo}
                      className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-white"
                      style={{ zIndex: extraObserverPhotos.length - i }}
                    >
                      <Image src={photo} alt="" fill className="object-cover" sizes="24px" />
                    </div>
                  ))}
                </div>
                <span className="text-[11.5px] text-[#8a8a94]">
                  <b className="text-[#0a0a0f] font-extrabold">+12</b> empresas invitadas
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {liveStats.map((s) => (
                <div key={s.label} className="bg-white border border-[#ececec] rounded-xl p-3.5">
                  <div className="text-[19px] font-extrabold font-['DM_Sans']">
                    <CountUp target={s.target} started={started} suffix={s.suffix} />
                  </div>
                  <div className="mt-0.5 text-[10.5px] font-semibold text-[#8a8a94] uppercase tracking-[0.02em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-10 max-w-[820px] text-[15px] leading-[1.8] text-[#55555f]">
            El Demo Day convierte semanas de trabajo en{" "}
            <span className="font-bold text-[#0a0a0f] underline decoration-2 decoration-[#FF0094] underline-offset-4">
              evidencia pública y observable
            </span>
            : no un certificado, una presentación defendida frente al mercado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
