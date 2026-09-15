"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

const stats = [
  { value: "830", label: "Participantes" },
  { value: "106", label: "Equipos" },
  { value: "74", label: "Contratados" },
];

export default function CasoDeExito() {
  return (
    <section className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionBadge>10 Caso de éxito</SectionBadge>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              De formación{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                a experiencia laboral
              </em>
            </h2>
            <p className="mt-4 text-[15px] text-[#9CA3AF] leading-relaxed">
              Oracle Next Education integró Simulación Laboral a su programa: un hackathon remoto con equipos
              multidisciplinarios y evidencia de desempeño registrada de punta a punta.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-['DM_Sans'] font-extrabold text-3xl bg-[linear-gradient(90deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                  {s.value}
                </span>
                <span className="mt-1 text-xs text-[#9CA3AF]">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Link
            href="/sobre-nosotros/casos-exito"
            className="mt-9 inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium border border-[rgba(255,0,148,0.35)] text-[#FF0094] hover:bg-[rgba(255,0,148,0.2)] transition"
          >
            Ver el caso completo
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
