"use client";

import { Reveal } from "@/components/ui/reveal";
import { Target, Users, Briefcase, BarChart2, Link2 } from "lucide-react";

const pasos = [
  {
    icon: Target,
    title: "Diseñamos el desafío",
    desc: "Adaptamos el contexto, disciplina, dificultad y objetivos a tu programa.",
  },
  {
    icon: Users,
    title: "Formamos equipos",
    desc: "Los participantes trabajan en equipos multidisciplinarios, con una dinámica diseñada para reproducir condiciones de trabajo colaborativo.",
  },
  {
    icon: Briefcase,
    title: "Ejecutan durante varias semanas",
    desc: "Trabajan sobre un desafío, toman decisiones, se organizan, producen entregables y enfrentan restricciones reales.",
  },
  {
    icon: BarChart2,
    title: "Generamos evidencia",
    desc: "La experiencia produce señales sobre participación, colaboración, comunicación, ejecución y trayectoria.",
  },
  {
    icon: Link2,
    title: "Conectamos la experiencia con oportunidades",
    desc: "La simulación puede involucrar empresas, mentores, jurados y otros actores del ecosistema.",
  },
];

export default function LaSolucion() {
  return (
    <section className="bg-[#F2F2F5] text-[#0a0a0f] border-t border-[#E4E4E8] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
              03 — La solución
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              Una experiencia laboral <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">integrada a tu programa</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-4 max-w-[560px] text-[15px] text-[#55555f] leading-relaxed">
            No Country convierte parte de tu programa en una experiencia de trabajo colaborativo.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {pasos.map((paso, i) => {
            const Icon = paso.icon;
            return (
              <Reveal key={paso.title} delay={150 + i * 80}>
                <div className="bg-white border border-[#ECECEC] rounded-2xl p-5 h-full">
                  <Icon className="h-6 w-6" style={{ color: "#FF0094" }} strokeWidth={1.6} />
                  <h3 className="mt-3 text-base font-bold leading-snug">{paso.title}</h3>
                  <p className="mt-2 text-sm text-[#55555f] leading-relaxed">{paso.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}