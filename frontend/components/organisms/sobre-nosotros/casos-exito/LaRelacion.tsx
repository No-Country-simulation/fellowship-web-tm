"use client";

import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

const stats = [
  { value: "4", label: "Acuerdos consecutivos" },
  { value: "+2.500", label: "Perfiles validados conductualmente" },
];

export default function LaRelacion() {
  return (
    <section id="ce-relacion" className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[720px]">
            <SectionBadge>09 — La relación</SectionBadge>
            <h2 className="mt-4 text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-tight">
              No es una edición única
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 max-w-[720px] text-[18px] md:text-[19px] font-semibold leading-relaxed text-[#0a0a0f]">
            Oracle Next Education necesitaba una forma de conectar a sus graduados con empresas empleadoras sin
            depender de procesos de selección tradicionales.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={150 + i * 80}>
              <div className="flex flex-col">
                <span className="font-['DM_Sans'] font-extrabold text-[28px] md:text-[32px] bg-[linear-gradient(90deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                  {s.value}
                </span>
                <span className="mt-1 text-[11.5px] text-[#71717a] font-semibold">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-8 max-w-[600px] text-[15px] leading-[1.7] text-[#55555f]">
            Con decisores y mentores de Oracle observando el desempeño en tiempo real desde el dashboard de
            empresas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}