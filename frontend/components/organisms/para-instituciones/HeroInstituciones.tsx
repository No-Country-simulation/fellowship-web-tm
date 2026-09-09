"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { target: 628, suffix: "", label: "Participantes" },
  { target: 85, suffix: "", label: "Equipos" },
];

const rows = [
  { label: "Equipo 03 · Desafío Fintech", w: 82 },
  { label: "Equipo 07 · Desafío Healthtech", w: 64 },
  { label: "Equipo 12 · Desafío Retail", w: 91 },
];

function CountUp({ target, started }: { target: number; started: boolean }) {
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

  return <span>{value}</span>;
}

function PreviewCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
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
    <div
      ref={cardRef}
      className="bg-[#0b0c18] border border-[#2D2B40] rounded-[18px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
        transition: "opacity .9s cubic-bezier(.2,.8,.2,1) .5s, transform .9s cubic-bezier(.2,.8,.2,1) .5s",
      }}
    >
      {/* Topbar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#2D2B40]">
        <span className="w-2 h-2 rounded-full bg-[#2D2B40]" />
        <span className="w-2 h-2 rounded-full bg-[#2D2B40]" />
        <span className="w-2 h-2 rounded-full bg-[#2D2B40]" />
        <span className="ml-2 text-[11px] font-bold text-[#939393] tracking-[0.02em]">
          Vista previa · Panel institucional
        </span>
      </div>

      <div className="px-5 pt-[22px] pb-5">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2.5">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0C0C16] border border-[#2D2B40] rounded-[10px] p-3 text-center">
              <div className="font-['DM_Sans'] font-extrabold text-[19px] bg-[linear-gradient(90deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                <CountUp target={s.target} started={inView} />
              </div>
              <div className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.04em] text-[#939393]">
                {s.label}
              </div>
            </div>
          ))}
          <div className="bg-[#0C0C16] border border-[#2D2B40] rounded-[10px] p-3 text-center">
            <div className="font-['DM_Sans'] font-extrabold text-[19px] bg-[linear-gradient(90deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              4–6
            </div>
            <div className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.04em] text-[#939393]">
              Semanas
            </div>
          </div>
        </div>

        {/* Rows */}
        <div className="mt-4 flex flex-col gap-[11px]">
          {rows.map((row) => (
            <div key={row.label}>
              <span className="text-[11px] font-semibold text-[#C7C9D3]">{row.label}</span>
              <div className="mt-1.5 h-[5px] bg-[#2D2B40] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[linear-gradient(90deg,#FF0094,#02BEEF)] rounded-full"
                  style={{
                    width: inView ? `${row.w}%` : "0%",
                    transition: "width 1.4s cubic-bezier(.2,.8,.2,1) 1s",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-[18px] pt-3.5 border-t border-[#2D2B40] flex items-center gap-2 text-[10.5px] text-[#939393]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#0CFCA7] shadow-[0_0_6px_#0CFCA7] shrink-0 animate-pulse"
          />
          Entregables y evidencia generándose en tiempo real
        </div>
      </div>
    </div>
  );
}

export default function HeroInstituciones() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#000115]">
      {/* Glows de fondo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(255,0,148,0.18),transparent_65%)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-2/3 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(2,190,239,0.13),transparent_65%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#939393]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_12px_#FF0094]" />
              For education &amp; training programs
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-extrabold tracking-tight leading-[1.05]">
              <span className="block text-[clamp(22px,3.2vw,32px)] font-bold text-white/90">
                Llevá el trabajo real
              </span>
              <span className="block mt-1 text-[clamp(34px,5.6vw,54px)] bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                a tus programas de formación.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base md:text-lg text-[#9CA3AF] leading-relaxed">
              Integrá Simulaciones Laborales a tus programas para que los participantes trabajen en equipos sobre
              desafíos reales, desarrollen experiencia práctica y generen evidencia de cómo trabajan.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium border border-[rgba(255,0,148,0.35)] text-[#FF0094] hover:bg-[rgba(255,0,148,0.2)] transition"
              >
                Diseñar una simulación
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>

              <Link
                href="/simulacion-laboral/como-funciona"
                className="inline-flex items-center px-6 py-3 rounded-md text-sm font-medium border border-[#2D2B40] text-white hover:bg-white/5 transition"
              >
                Ver cómo funciona
              </Link>
            </div>
          </Reveal>
        </div>

        <PreviewCard />
      </div>
    </section>
  );
}
