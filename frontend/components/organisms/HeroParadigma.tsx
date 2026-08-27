import Link from "next/link";
import { Users, Target, Clock, BarChart2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const flowNodes = [
  { icon: Users, label: "Equipo al azar", color: "#FF0094" },
  { icon: Target, label: "Desafío real", color: "#02BEEF" },
  { icon: Clock, label: "5 semanas", color: "#C06ECF" },
  { icon: BarChart2, label: "Evidencia", color: "#0CFCA7" },
];

export default function HeroParadigma() {
  return (
<section className="relative min-h-[calc(100vh-64px)] flex items-end pt-16 pb-12 overflow-hidden bg-[#000115]">      {/* Glows de fondo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(255,0,148,0.18),transparent_65%)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-2/3 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(2,190,239,0.13),transparent_65%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 w-full">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#939393]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_12px_#FF0094]" />
            Un cambio de paradigma
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 font-extrabold tracking-tight leading-[1.05]">
            <span className="block text-[clamp(22px,3.2vw,32px)] font-bold text-white/90">
              De las credenciales a la
            </span>
            <span className="block mt-1 text-[clamp(34px,5.6vw,54px)] bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              evidencia observable.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-base md:text-lg text-[#9CA3AF] leading-relaxed">
            No es un curso, ni un test, ni un hackathon, ni una pasantía. Es la
            única forma de ver cómo trabaja alguien antes de contratarlo.
          </p>
        </Reveal>

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

        <Reveal delay={400}>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#evidencia"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium border border-[rgba(255,0,148,0.35)] text-[#FF0094] hover:bg-[rgba(255,0,148,0.2)] transition"
            >
              Ver la evidencia
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href="#como-funciona"
              className="inline-flex items-center px-6 py-3 rounded-md text-sm font-medium border border-[#2D2B40] text-white hover:bg-white/5 transition"
            >
              Cómo funciona
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}