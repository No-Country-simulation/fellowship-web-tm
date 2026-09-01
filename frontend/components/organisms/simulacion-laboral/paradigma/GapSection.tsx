import { Reveal } from "@/components/ui/reveal";

const gapItems = [
  "Asistencia",
  "Aprobación",
  "Conocimientos",
  "Certificaciones",
  "Proyectos",
  "Satisfacción",
];

export default function GapSection() {
  return (
    <section className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
              El gap
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              La formación observa aprendizaje.
              <br />
              El mercado necesita observar{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                ejecución
              </em>
              .
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 text-[15px] text-[#55555f] max-w-[520px]">
            Un curso o una institución puede medir:
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3 max-w-[640px]">
          {gapItems.map((item, i) => (
            <Reveal key={item} delay={150 + i * 80}>
              <div className="flex items-center gap-2 text-[15px] text-[#3a3a42] border-b border-[#E4E4E8] py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#939393]" />
                {item}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-12 max-w-[700px] text-xl md:text-2xl font-bold leading-snug text-[#0a0a0f]">
            Pero queda una pregunta: ¿cómo se comporta esta persona cuando tiene que trabajar con otros, tomar decisiones, cumplir plazos y sostener la ejecución?
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-6 inline-block">
            <span className="text-2xl md:text-3xl font-extrabold relative pb-2">
              Ahí aparece la simulación laboral.
              <span className="absolute left-0 bottom-0 h-[3px] w-full bg-[linear-gradient(90deg,#FF0094,#02BEEF)] rounded-full" />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}