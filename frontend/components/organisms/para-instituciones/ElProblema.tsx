"use client";

import { Reveal } from "@/components/ui/reveal";
import { Download, GraduationCap, Link2 } from "lucide-react";
import SectionBadge from "@/components/ui/sectionBadge";

const problemas = [
  {
    icon: Download,
    color: "#FF0094",
    tag: "Problema 01",
    title: "Falta de experiencia",
    desc: "Muchos participantes terminan su formación sin haber trabajado en un equipo sobre un problema abierto.",
  },
  {
    icon: GraduationCap,
    color: "#02BEEF",
    tag: "Problema 02",
    title: "Difícil demostrar capacidades",
    desc: "Un certificado demuestra que alguien completó una formación. No necesariamente cómo trabaja.",
  },
  {
    icon: Link2,
    color: "#C06ECF",
    tag: "Problema 03",
    title: "Desconexión con el mercado",
    desc: "Las instituciones necesitan crear más oportunidades para que empresas y profesionales conozcan el talento que están formando.",
  },
];

export default function ElProblema() {
  return (
    <section className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionBadge>02 — El problema</SectionBadge>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              Formar talento es <em className="...">solo el comienzo</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-4 max-w-[560px] text-[15px] text-[#55555f] leading-relaxed">
            Las instituciones pueden enseñar conocimientos, certificar habilidades y acompañar a miles de personas. Pero existe una brecha entre <strong>aprender</strong> y <strong>trabajar</strong>.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {problemas.map((problema, i) => {
            const Icon = problema.icon;
            return (
              <Reveal key={problema.title} delay={150 + i * 100}>
                <div className="h-full border border-[#ECECEC] bg-white rounded-2xl p-6 hover:border-[#FF0094]/40 transition">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="h-6 w-6" style={{ color: problema.color }} strokeWidth={1.6} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a8a94]">
                      {problema.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{problema.title}</h3>
                  <p className="text-sm text-[#55555f] leading-relaxed">{problema.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
          <div className="mt-10 max-w-xl border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
            <p className="text-base text-[#0a0a0f] leading-relaxed">
              La Simulación Laboral agrega una capa de experiencia y evidencia entre la formación y el empleo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}