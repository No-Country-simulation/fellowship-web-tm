"use client";

import { Reveal } from "@/components/ui/reveal";
import { Handshake, ClipboardCheck, Share2, Network } from "lucide-react";
import SectionBadge from "@/components/ui/sectionBadge";

const beneficios = [
  {
    icon: Handshake,
    color: "#FF0094",
    title: "Experiencia colaborativa",
    desc: "Tus participantes dejan de practicar solamente: trabajan en equipos reales, con problemas abiertos, plazos y decisiones compartidas.",
    resultado: "Experiencia concreta que incorporan a su trayectoria profesional.",
  },
  {
    icon: ClipboardCheck,
    color: "#02BEEF",
    title: "Evidencia de comportamiento y ejecución",
    desc: "El aprendizaje se convierte en evidencia mostrable: ejecución, colaboración y entregables reales, no solo “completó el programa”.",
    resultado: "Mayor capacidad para demostrar experiencia frente al mercado.",
  },
  {
    icon: Share2,
    color: "#C06ECF",
    title: "Visibilidad orgánica",
    desc: "Cada experiencia genera contenido de marca automáticamente, distribuido por los propios participantes en sus redes.",
    resultado: "Más alcance para tu marca, menos trabajo de marketing.",
  },
  {
    icon: Network,
    color: "#646CF6",
    title: "Activación de ecosistema",
    desc: "Empresas, mentores, jurados y profesionales se suman a la experiencia, que deja de ser un circuito cerrado institución-alumno.",
    resultado: "Posicionamiento institucional dentro del ecosistema profesional.",
  },
];

export default function Beneficios() {
  return (
    <section className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionBadge>04 Beneficios</SectionBadge>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              ¿Qué cambia cuando incorporás{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                una Simulación Laboral?
              </em>
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {beneficios.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={100 + i * 100}>
                <div className="bg-white border border-[#ECECEC] rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${b.color}14` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: b.color }} strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-bold text-[#8a8a94]">{String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#0a0a0f]">{b.title}</h3>
                  <p className="mt-2 text-sm text-[#55555f] leading-relaxed flex-1">{b.desc}</p>

                  <div className="mt-5 pt-4 border-t border-[#ECECEC]">
                    <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#8a8a94]">
                      Resultado
                    </span>
                    <p className="mt-1 text-sm font-bold text-[#0a0a0f] leading-snug">{b.resultado}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
