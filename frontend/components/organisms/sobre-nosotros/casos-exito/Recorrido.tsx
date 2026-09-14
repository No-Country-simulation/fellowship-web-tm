"use client";

import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

interface Stage {
  number: string;
  title: string;
  description: string;
}

const stages: Stage[] = [
  { number: "01", title: "Convocatoria", description: "Invitación solo para estudiantes certificados de Oracle." },
  {
    number: "02",
    title: "Creación de equipos",
    description: "Squads multidisciplinarios y multiculturales asignados según criterios definidos.",
  },
  { number: "03", title: "Kickoff", description: "Inicio, reglas del juego, desafío y objetivos del equipo." },
  {
    number: "04",
    title: "Colaboración y desarrollo",
    description: "Trabajo sostenido en equipo con deadlines y entregables por etapa.",
  },
  {
    number: "05",
    title: "Demo Day",
    description: "Presentación final del producto ante jurado, mentores y empresas.",
  },
];

export default function Recorrido() {
  return (
    <section id="ce-recorrido" className="bg-[#f2f2f5] text-[#0a0a0f] border-t border-[#e4e4e8] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[720px]">
            <SectionBadge>03 El recorrido</SectionBadge>
            <h2 className="mt-4 text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-tight">
              Cinco etapas que reproducen{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                un equipo de trabajo real
              </em>
            </h2>
          </div>
          <p className="mt-4 max-w-[560px] text-[15px] leading-[1.7] text-[#55555f]">
            De la convocatoria al Demo Day. Duración: 6 semanas · 100% remota y colaborativa.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col">
          {stages.map((stage, i) => (
            <Reveal key={stage.number} delay={100 + i * 80}>
              <div className={`grid grid-cols-[56px_1fr] gap-[22px] py-7 ${i === 0 ? "" : "border-t border-[#ececec]"}`}>
                <span className="pt-0.5 text-[13px] font-extrabold text-[#FF0094]">{stage.number}</span>
                <div>
                  <h4 className="text-[18px] font-extrabold text-[#0a0a0f]">{stage.title}</h4>
                  <p className="mt-1.5 text-[14.5px] italic text-[#55555f]">{stage.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100 + stages.length * 80}>
          <p
            className="mt-2 max-w-[640px] text-xl font-bold leading-[1.45] text-[#0a0a0f] pl-[22px] py-3 bg-[rgba(255,0,148,0.05)] border-l-[3px] border-transparent"
            style={{ borderImage: "linear-gradient(90deg,#FF0094,#02BEEF) 1" }}
          >
            Cada etapa deja evidencia observable del comportamiento del equipo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
