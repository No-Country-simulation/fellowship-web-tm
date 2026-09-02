"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const rows = [
  {
    color: "#FF0094",
    badge: "01",
    persona: "Participación",
    personaQ: "¿Sostiene su involucramiento durante la experiencia?",
    equipo: "Distribución de participación",
    equipoQ: "¿Está concentrada en pocas personas?",
  },
  {
    color: "#02BEEF",
    badge: "02",
    persona: "Colaboración",
    personaQ: "¿Cómo contribuye al trabajo de otras personas?",
    equipo: "Interdependencia",
    equipoQ: "¿Las personas dependen unas de otras para avanzar?",
  },
  {
    color: "#C06ECF",
    badge: "03",
    persona: "Comunicación",
    personaQ: "¿Cómo se integra a los canales y dinámicas del equipo?",
    equipo: "Comunicación",
    equipoQ: "¿Cómo circula la información?",
  },
  {
    color: "#646CF6",
    badge: "04",
    persona: "Ejecución",
    personaQ: "¿Qué produce y cómo evoluciona su contribución?",
    equipo: "Coordinación",
    equipoQ: "¿Cómo se organiza el trabajo?",
  },
  {
    color: "#0CFCA7",
    badge: "05",
    persona: "Trayectoria",
    personaQ: "¿Cómo cambia su comportamiento a lo largo de la experiencia?",
    equipo: "Evolución",
    equipoQ: "¿Cómo cambia la dinámica del equipo durante el proyecto?",
  },
  {
    color: "#FF0094",
    badge: "06",
    persona: "Roles emergentes",
    personaQ: "¿Qué papel termina ocupando dentro del equipo?",
    equipo: "Roles",
    equipoQ: "¿Qué funciones aparecen espontáneamente?",
  },
  {
    color: "#02BEEF",
    badge: "07",
    persona: "Autonomía",
    personaQ: "¿Propone, decide y desbloquea?",
    equipo: "",
    equipoQ: "",
    empty: true,
  },
];

export default function ParticipanteEquipo() {
  const tableRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = tableRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
              01–02 — Participante y Equipo
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              De la persona <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">al sistema</em>
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          <Reveal delay={100}>
            <p className="text-[15px] text-[#55555f] leading-relaxed">
              <b className="text-[#0a0a0f] font-bold">Persona.</b> La simulación permite construir una visión más amplia que la que surge de una credencial o una instancia puntual de evaluación.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-[15px] text-[#55555f] leading-relaxed">
              <b className="text-[#0a0a0f] font-bold">Equipo.</b> Acá cambia completamente el objeto de observación: el trabajo no ocurre en individuos aislados.
            </p>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div ref={tableRef} className="mt-10 border border-[#ECECEC] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#FAFAFA] border-b border-[#ECECEC]">
              <span className="hidden md:block px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-[#8a8a94] border-r border-[#ECECEC]">
                Persona
              </span>
              <span className="hidden md:block px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-[#8a8a94]">
                Equipo
              </span>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.badge}
                className="grid grid-cols-1 md:grid-cols-2 border-b border-[#ECECEC] relative transition-opacity duration-500"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(8px)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Columna Persona */}
                <div className="px-6 py-5 border-b md:border-b-0 md:border-r border-[#ECECEC]" data-label="Persona">
                  <span className="inline-block text-[10.5px] font-bold text-white px-2 py-1 rounded-full mb-2" style={{ backgroundColor: row.color }}>
                    {row.badge}
                  </span>
                  <h4 className="text-lg font-bold">{row.persona}</h4>
                  <p className="mt-1 text-[13px] italic text-[#8a8a94]">{row.personaQ}</p>
                </div>

                {/* Columna Equipo */}
                <div className="px-6 py-5" data-label="Equipo">
                  {row.empty ? (
                    <p className="text-sm text-[#c4c4cc] italic flex items-center h-full">
                      Solo se observa a nivel individual
                    </p>
                  ) : (
                    <>
                      <h4 className="text-[15px] font-semibold text-[#3a3a42]">{row.equipo}</h4>
                      <p className="mt-1 text-[13px] italic text-[#8a8a94]">{row.equipoQ}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <Reveal delay={400}>
            <div className="border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
              <p className="text-base text-[#0a0a0f] leading-relaxed">
                No observamos solamente qué rol tiene una persona. Observamos cómo se comporta cuando tiene que trabajar con otras personas.
              </p>
            </div>
          </Reveal>
          <Reveal delay={450}>
            <div className="border-l-[3px] border-[#FF0094] bg-[rgba(255,0,148,0.05)] rounded-r-lg pl-6 pr-4 py-4">
              <p className="text-base text-[#0a0a0f] leading-relaxed">
                El trabajo no ocurre en individuos aislados. Muchas capacidades solamente pueden observarse cuando una persona interactúa con otras.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}