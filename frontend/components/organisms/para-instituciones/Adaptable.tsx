"use client";

import { Reveal } from "@/components/ui/reveal";

type SpecRow = {
  label: string;
  chips: string[];
};

const specs: SpecRow[] = [
  {
    label: "Disciplinas",
    chips: ["Technology", "Data", "AI", "Product", "Cybersecurity", "Marketing", "Business", "Web3", "Game Development", "Cloud"],
  },
  {
    label: "Sectores",
    chips: ["Technology", "Finance", "Education", "Retail", "Social Impact"],
  },
  {
    label: "Modalidades",
    chips: ["Remote", "Cohort-based"],
  },
  {
    label: "Duración",
    chips: ["Experiencias adaptables según objetivos y contexto"],
  },
  {
    label: "Desafíos",
    chips: ["Proyectos cargados por la institución o stakeholders"],
  },
  {
    label: "Soluciones a medida",
    chips: ["Funcionalidades adaptables según necesidades y contexto"],
  },
];

export default function Adaptable() {
  return (
    <section className="bg-[#f2f2f5] text-[#0a0a0f] border-t border-[#e4e4e8] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
              11 — Adaptable
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              La infraestructura{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                se adapta a tu programa
              </em>
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col">
          {specs.map((row, i) => (
            <Reveal key={row.label} delay={100 + i * 80}>
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-5 py-4 border-t border-[#e4e4e8] first:border-t-0">
                <span className="text-[12px] font-extrabold uppercase tracking-[0.06em] text-[#8a8a94] pt-1">
                  {row.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {row.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex rounded-full bg-white border border-[#e4e4e8] px-3.5 py-2 text-[12.5px] font-semibold text-[#3a3a42]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
