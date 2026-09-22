"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 830, suffix: "", label: "Participantes" },
  { target: 106, suffix: "", label: "Equipos" },
  { target: 3, suffix: "", label: "Desafíos con IA" },
  { target: 100, suffix: "%", label: "Remota · LATAM" },
];

// Mismos archivos y alturas que en la sección "Hackathon Oracle Next
// Education" de la home (CasoOracle): Oracle y Alura tienen mucho margen
// transparente en el archivo, por eso van más altos que ONE (logo apilado,
// casi sin margen) — así los tres tienen un peso visual parecido.
const logos = [
  { src: "/logos/oracle.png", alt: "Oracle", width: 190, height: 91, className: "h-[56px] md:h-[64px]" },
  { src: "/logos/alura.png", alt: "Alura", width: 280, height: 280, className: "h-[56px] md:h-[64px]" },
  { src: "/logos/one.png", alt: "ONE Next Education", width: 308, height: 163, className: "h-6 md:h-7" },
];

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
      {value}
      {suffix}
    </span>
  );
}

export default function HeroCasoExito() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
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
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#000115]">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(255,0,148,0.18),transparent_65%)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-2/3 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(2,190,239,0.13),transparent_65%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#939393]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_12px_#FF0094]" />
            Hackathon ONE G9
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 max-w-[880px] font-extrabold tracking-tight leading-[1.05]">
            <span className="block text-[clamp(22px,3.2vw,32px)] font-bold text-white/90">
              Oracle Next Education:
            </span>
            <span className="block mt-1.5 text-[clamp(34px,5.6vw,54px)] bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              de la formación a la experiencia laboral.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-[600px] text-[17px] leading-relaxed text-[#9CA3AF]">
            830 estudiantes de ONE resolvieron tres desafíos con IA en formato de hackathon remota, en equipos
            multidisciplinarios, con evidencia de desempeño registrada de punta a punta.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-9 flex h-7 items-center gap-x-6 select-none">
            {logos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`${logo.className} w-auto shrink-0 opacity-90 object-contain`}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div ref={statsRef} className="mt-9 flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-['DM_Sans'] font-extrabold text-[clamp(26px,3.2vw,34px)] text-white">
                  <CountUp target={s.target} started={started} suffix={s.suffix} />
                </span>
                <span className="mt-0.5 text-xs text-[#9CA3AF]">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={350}>
          <p className="mt-[22px] pt-[18px] border-t border-[#2D2B40] text-[13px] text-[#9CA3AF]">
            <b className="text-[#02BEEF] font-extrabold">+600.000</b> personas impactadas por ONE con capacitación en
            tecnología 100% gratuita en LATAM
          </p>
        </Reveal>
      </div>
    </section>
  );
}
