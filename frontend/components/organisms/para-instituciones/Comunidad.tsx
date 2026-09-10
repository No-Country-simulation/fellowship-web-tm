"use client";

import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

const acciones = [
  "Trabajar juntos",
  "Comunicarse",
  "Resolver",
  "Compartir",
  "Volver a interactuar",
];

const activaciones = [
  "Equipos",
  "Desafíos",
  "Comunidades",
  "Eventos",
  "Demos",
  "Peer review",
  "Espacios de networking",
];

export default function Comunidad() {
  return (
    <section className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionBadge>05 — Comunidad</SectionBadge>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              Una experiencia compartida <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">transforma una audiencia en comunidad</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-4 max-w-[560px] text-[15px] text-[#9CA3AF] leading-relaxed">
            Una formación puede reunir a miles de participantes. La simulación les da una razón para:
          </p>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {acciones.map((accion, i) => (
            <Reveal key={accion} delay={150 + i * 70}>
              <span className="inline-flex rounded-full bg-[#0C0C16] border border-[#2D2B40] px-4 py-2 text-[13.5px] font-bold text-white">
                {accion}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-8 text-sm text-[#9CA3AF]">La institución puede activar:</p>
        </Reveal>

        <div className="mt-3 flex flex-wrap gap-2.5">
          {activaciones.map((activacion, i) => (
            <Reveal key={activacion} delay={350 + i * 60}>
              <span className="inline-flex rounded-full bg-[#0C0C16] border border-[#2D2B40] px-4 py-2 text-[13.5px] font-bold text-white">
                {activacion}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="mt-10 max-w-xl border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
            <p className="text-base text-[#D1D5DB] leading-relaxed">
              Mayor participación y vínculos más fuertes entre participantes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}