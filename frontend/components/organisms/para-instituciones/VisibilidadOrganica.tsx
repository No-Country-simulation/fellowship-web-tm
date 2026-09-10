"use client";

import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

const flujo = ["Experiencia", "Contenido", "Participantes", "Redes", "Alcance"];

const pasosAmplificacion = [
  {
    title: "Sistema genera",
    desc: "La plataforma genera piezas dinámicas a partir de hitos de la experiencia.",
  },
  {
    title: "Adaptado a la marca",
    desc: "Usa la estética e identidad de la organización, sin trabajo extra de marketing.",
  },
  {
    title: "Distribuido por participantes",
    desc: "Cada participante comparte la experiencia en sus propias redes.",
  },
  {
    title: "Amplificación orgánica",
    desc: "Cada equipo se convierte en un punto de distribución, más allá de tus propios canales.",
  },
];

export default function VisibilidadOrganica() {
  return (
    <section className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionBadge>06 — Visibilidad orgánica</SectionBadge>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              Convertí la experiencia de tu comunidad <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">en contenido para tu marca</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-4 max-w-[560px] text-[15px] text-[#55555f] leading-relaxed">
            La Simulación Laboral incorpora piezas de contenido dinámicas generadas automáticamente por el sistema, adaptadas a la identidad visual de cada organización.
          </p>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {flujo.map((item, i) => (
            <Reveal key={item} delay={150 + i * 70}>
              <div className="flex items-center gap-2">
                <span className="inline-flex rounded-lg bg-white border border-[#ECECEC] px-3 py-2 text-sm font-bold text-[#0a0a0f]">
                  {item}
                </span>
                {i < flujo.length - 1 && <span className="text-[#c4c4cc]">→</span>}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-10 font-bold text-[#0a0a0f]">¿Cómo funciona?</p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {pasosAmplificacion.map((paso, i) => (
            <Reveal key={paso.title} delay={350 + i * 100}>
              <div className="bg-white border border-[#ECECEC] rounded-2xl p-5 h-full">
                <h4 className="font-bold">{paso.title}</h4>
                <p className="mt-2 text-sm text-[#55555f] leading-relaxed">{paso.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={700}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[#ECECEC] bg-white rounded-2xl p-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#8a8a94]">Beneficio 01</span>
              <h4 className="mt-2 font-bold">Más contenido. Menos trabajo de marketing.</h4>
              <p className="mt-2 text-sm text-[#55555f]">La institución obtiene contenido asociado a su marca durante toda la experiencia sin tener que producir manualmente cada pieza.</p>
            </div>
            <div className="border border-[#ECECEC] bg-white rounded-2xl p-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#8a8a94]">Beneficio 02</span>
              <h4 className="mt-2 font-bold">Más distribución. Menos dependencia de canales propios.</h4>
              <p className="mt-2 text-sm text-[#55555f]">La comunicación no queda limitada a las redes de la institución: los propios participantes distribuyen la experiencia a sus audiencias.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}