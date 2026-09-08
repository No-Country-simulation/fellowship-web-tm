"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function CTAInstituciones() {
  return (
    <section className="bg-white text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[640px] mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
            ¿Qué podría simular{" "}
            <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              tu programa?
            </em>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-5 text-[15px] text-[#55555f] leading-relaxed">
            Diseñemos una experiencia alrededor de los conocimientos, perfiles y objetivos de tu próxima cohorte.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium border border-[#FF0094] text-[#FF0094] hover:bg-[rgba(255,0,148,0.08)] transition"
          >
            Diseñar una Simulación
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 text-[13px] text-[#55555f]">
            Para instituciones educativas, academias, bootcamps y programas de formación.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
