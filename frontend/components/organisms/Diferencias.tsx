import { School, ListChecks, Timer, Briefcase } from "lucide-react";

interface DiffCard {
  icon: React.ElementType;
  tag: string;
  title: string;
  detail: string;
}

const diffCards: DiffCard[] = [
  {
    icon: School,
    tag: "Bootcamp",
    title: "Enseña. No mide.",
    detail:
      "Enseña habilidades técnicas. La simulación mide cómo se aplican bajo presión real, en equipo. Son complementarios, no competidores.",
  },
  {
    icon: ListChecks,
    tag: "Assessment",
    title: "Un momento. No un patrón.",
    detail:
      "Mide conocimiento en modo test, en condiciones artificiales. La simulación mide comportamiento sostenido, sin que el foco sea \"ser evaluado\".",
  },
  {
    icon: Timer,
    tag: "Hackathon",
    title: "48 horas no predicen 5 semanas.",
    detail:
      "Presión extrema y corta. Alguien puede brillar un fin de semana y desaparecer en la semana 3 de un proyecto real.",
  },
  {
    icon: Briefcase,
    tag: "Pasantía",
    title: "No es comparable entre personas.",
    detail:
      "Cada pasantía ocurre en una cultura distinta. La simulación estandariza el entorno — todos enfrentan condiciones similares.",
  },
];

export default function Diferencias() {
  return (
    <section className="w-full bg-white py-12 md:py-28 text-zinc-900 border-b border-zinc-100">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Badge with gradient line */}
        <div className="flex items-center gap-3 mb-4 md:mb-6 select-none">
          <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
            03 — Comparación directa
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-8 md:mb-14">
          <h2 className="text-2xl md:text-[40px] font-bold text-zinc-900 tracking-tight leading-tight max-w-4xl">
            No es lo mismo que...
          </h2>
          <p className="mt-3 text-sm md:text-[15px] text-zinc-500">
            Pasá el mouse sobre cada card para ver la diferencia.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {diffCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.tag}
                className="p-[1.5px] bg-zinc-200/30 hover:bg-gradient-to-br hover:from-[#FF0094] hover:to-[#02BEEF] rounded-[20px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex group"
              >
                <div className="relative bg-[#f8f9fa] group-hover:bg-white rounded-[19px] p-5 md:p-7 flex flex-col justify-between min-h-[190px] md:min-h-[260px] h-full w-full overflow-hidden transition-all duration-300">
                  <div>
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-3 md:mb-5 select-none">
                      <Icon
                        className="w-4 h-4 text-[#FF0094] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                        strokeWidth={2.25}
                      />
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#02BEEF] uppercase">
                        {card.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-[18px] font-bold text-zinc-900 tracking-tight leading-snug transition-transform duration-300 group-hover:-translate-y-1">
                      {card.title}
                    </h3>
                  </div>

                  {/* Detail — se desliza hacia arriba al hacer hover */}
                  <p className="text-xs md:text-sm text-zinc-500 leading-relaxed mt-2 md:mt-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    {card.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
