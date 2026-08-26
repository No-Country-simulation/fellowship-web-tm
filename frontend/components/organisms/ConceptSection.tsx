import { Reveal } from "@/components/ui/reveal";

export default function ConceptSection() {
  return (
    <section id="que-es" className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#939393]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_12px_#FF0094]" />
              01 — El concepto
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              Qué es{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                una simulación laboral
              </em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 max-w-2xl text-lg font-semibold text-white leading-relaxed">
            Trabajo real, en equipo, sobre un problema real de una empresa real — durante un tiempo definido.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-4 max-w-xl text-[15px] text-[#9CA3AF] leading-relaxed">
            Plazos reales, compañeros que no elegiste, un entregable que alguien va a evaluar. La plataforma registra quién comunica, quién lidera, quién sostiene el ritmo.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 max-w-2xl border border-[#1C1B29] rounded-2xl bg-[#0C0C16] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1C1B29] text-[11px] font-bold uppercase tracking-widest text-[#939393]">
              <span className="h-3 w-3 rounded-full bg-[linear-gradient(90deg,#FF0094,#02BEEF)]" />
              Ejemplo
            </div>
            <div className="p-5 text-[15px] text-[#C7C9D3] leading-relaxed">
              Cinco personas que no se conocían diseñan el triage conversacional de una healthtech.
              <div className="flex mt-4 -space-x-2">
                {[
                  { initials: "FE", bg: "#C06ECF" },
                  { initials: "UX", bg: "#646CF6" },
                  { initials: "DS", bg: "#0CFCA7" },
                  { initials: "BE", bg: "#FF0094" },
                  { initials: "PM", bg: "#02BEEF" },
                ].map((member) => (
                  <div
                    key={member.initials}
                    className="h-8 w-8 rounded-full border-2 border-[#0C0C16] flex items-center justify-center text-[11px] font-bold text-black"
                    style={{ backgroundColor: member.bg }}
                  >
                    {member.initials}
                  </div>
                ))}
              </div>
              <p className="mt-3">Nadie les dice cómo organizarse — eso también es parte de lo que se observa.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}