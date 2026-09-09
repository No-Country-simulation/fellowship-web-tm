"use client";

import { Reveal } from "@/components/ui/reveal";
import { Briefcase, Users, Gavel, Star } from "lucide-react";

const actores = [
  {
    icon: Briefcase,
    color: "#FF0094",
    title: "Empresas",
    desc: "Presentan desafíos, observan talento o participan de instancias de evaluación.",
  },
  {
    icon: Users,
    color: "#02BEEF",
    title: "Mentores",
    desc: "Acompañan equipos y aportan experiencia profesional.",
  },
  {
    icon: Gavel,
    color: "#C06ECF",
    title: "Jurados",
    desc: "Evalúan resultados y participan en demos o instancias finales.",
  },
  {
    icon: Star,
    color: "#646CF6",
    title: "Profesionales",
    desc: "Contribuyen como referentes, speakers o reviewers.",
  },
];

export default function Ecosistema() {
  return (
    <section className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#939393]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_12px_#FF0094]" />
              07 — Ecosistema
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              Abrí el programa <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">al ecosistema profesional</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-4 text-[15px] text-[#9CA3AF]">La simulación puede involucrar:</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {actores.map((actor, i) => {
            const Icon = actor.icon;
            return (
              <Reveal key={actor.title} delay={150 + i * 80}>
                <div className="bg-[#0C0C16] border border-[#1C1B29] rounded-2xl p-6 h-full">
                  <Icon className="h-6 w-6" style={{ color: actor.color }} strokeWidth={1.6} />
                  <h3 className="mt-3 font-bold">{actor.title}</h3>
                  <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">{actor.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
          <div className="mt-10 max-w-xl border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
            <p className="text-base text-[#D1D5DB] leading-relaxed">
              El programa deja de ser una experiencia cerrada entre institución y alumno, y se convierte en un punto de encuentro con el ecosistema profesional.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}