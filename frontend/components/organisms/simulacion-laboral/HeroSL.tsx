"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Users, Target, Clock, BarChart2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const flowNodes = [
  { icon: Users, label: "Equipo al azar", color: "#FF0094" },
  { icon: Target, label: "Desafío real", color: "#02BEEF" },
  { icon: Clock, label: "5 semanas", color: "#C06ECF" },
  { icon: BarChart2, label: "Evidencia", color: "#0CFCA7" },
];

const content = {
  "/simulacion-laboral/paradigma": {
    eyebrow: "Un cambio de paradigma",
    line1: "Formar talento no es lo mismo que",
    line2: "demostrar cómo trabaja.",
    descripcion:
      "La Simulación Laboral crea un entorno de trabajo real donde los participantes ejecutan, colaboran y toman decisiones durante un período prolongado, generando evidencia observable de su desempeño en contexto.",
    ctaPrimario: { texto: "Ver cómo funciona", href: "/simulacion-laboral/como-funciona" },
    ctaSecundario: null,
    mostrarFlujo: true,
  },
  "/simulacion-laboral/como-funciona": {
    eyebrow: "El mecanismo",
    line1: "Diseñamos condiciones",
    line2: "para que el comportamiento emerja.",
    descripcion:
      "No armamos un examen. Armamos un contexto real donde el comportamiento no se puede fingir.",
    ctaPrimario: { texto: "Ver la línea de tiempo", href: "#cf-ejecucion" },
    ctaSecundario: { texto: "Volver a Paradigma", href: "/simulacion-laboral/paradigma" },
    mostrarFlujo: false,
  },
  "/simulacion-laboral/que-observamos": {
    eyebrow: "La observación",
    line1: "Observamos",
    line2: "patrones de trabajo.",
    descripcion:
      "No evaluamos respuestas correctas. Observamos cómo se comporta alguien cuando el trabajo es real.",
    ctaPrimario: { texto: "Ver las 6 dimensiones", href: "#qo-dimensiones" },
    ctaSecundario: { texto: "Volver a Cómo funciona", href: "/simulacion-laboral/como-funciona" },
    mostrarFlujo: false,
  },
  "/simulacion-laboral/que-insights-genera": {
    eyebrow: "Los insights",
    line1: "De la señal,",
    line2: "al patrón, al insight.",
    descripcion:
      "Los mismos datos dicen cosas distintas según la escala en la que los mires: una persona, un equipo, una cohorte, un programa.",
    ctaPrimario: { texto: "Ver el pipeline", href: "#qi-pipeline" },
    ctaSecundario: { texto: "Volver a Qué observamos", href: "/simulacion-laboral/que-observamos" },
    mostrarFlujo: false,
  },
};

export default function HeroSL() {
  const pathname = usePathname();
  const data =
    content[pathname as keyof typeof content] ??
    content["/simulacion-laboral/paradigma"];

  return (
    <section className="relative pt-16 pb-12 overflow-hidden bg-[#000115]">
      {/* Glows de fondo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(255,0,148,0.18),transparent_65%)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-2/3 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(2,190,239,0.13),transparent_65%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 w-full">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#939393]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_12px_#FF0094]" />
            {data.eyebrow}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 font-extrabold tracking-tight leading-[1.05]">
            <span className="block text-[clamp(22px,3.2vw,32px)] font-bold text-white/90">
              {data.line1}
            </span>
            <span className="block mt-1 text-[clamp(34px,5.6vw,54px)] bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              {data.line2}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-6 max-w-xl border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.06)] rounded-r-lg pl-6 pr-4 py-4">
            <p className="text-base md:text-lg text-[#D1D5DB] leading-relaxed">{data.descripcion}</p>
          </div>
        </Reveal>

        {data.mostrarFlujo && (
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-y-6">
              {flowNodes.map((node, idx, arr) => {
                const Icon = node.icon;
                return (
                  <div key={node.label} className="flex items-center">
                    <div className="flex flex-col items-center gap-2 min-w-[96px]">
                      <div className="h-11 w-11 rounded-xl bg-[#0C0C16] border border-[#1C1B29] flex items-center justify-center hover:-translate-y-1 transition">
                        <Icon className="h-5 w-5" strokeWidth={1.8} style={{ color: node.color }} />
                      </div>
                      <span className="text-[11px] font-semibold text-[#9CA3AF]">{node.label}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="flex-1 min-w-[26px] h-0.5 bg-[linear-gradient(90deg,rgba(255,0,148,0.5),rgba(2,190,239,0.5))] mx-1 relative -top-3" />
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        )}

        <Reveal delay={data.mostrarFlujo ? 400 : 300}>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={data.ctaPrimario.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium border border-[rgba(255,0,148,0.35)] text-[#FF0094] hover:bg-[rgba(255,0,148,0.2)] transition"
            >
              {data.ctaPrimario.texto}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>

            {data.ctaSecundario && (
              <Link
                href={data.ctaSecundario.href}
                className="inline-flex items-center px-6 py-3 rounded-md text-sm font-medium border border-[#2D2B40] text-white hover:bg-white/5 transition"
              >
                {data.ctaSecundario.texto}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}