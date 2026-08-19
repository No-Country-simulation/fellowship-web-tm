import React from "react";

interface CardItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  highlighted?: boolean;
}

const useCases: CardItem[] = [
  {
    id: "hire",
    badge: "HIRE",
    title: "Contratá con evidencia.",
    description: "Observá cómo trabaja el talento antes de incorporarlo.",
    linkText: "Descubrir talento",
    href: "#",
  },
  {
    id: "develop",
    badge: "DEVELOP",
    title: "Aumenta el impacto de tus programas.",
    description: "Convertí la participación de una cohorte en evidencia observable de ejecución.",
    linkText: "Para instituciones",
    href: "#",
  },
  {
    id: "activate",
    badge: "ACTIVATE",
    title: "Convertí comunidades en visibilidad de marca.",
    description: "Diseñá experiencias donde las personas participan, colaboran y generan contenido alrededor de una organización o marca.",
    linkText: "Activar una comunidad",
    href: "#",
  },
  {
    id: "discover",
    badge: "DISCOVER",
    title: "Descubrí talento mientras trabaja.",
    description: "Observá equipos trabajando en desafíos reales antes de esperar a que los candidatos se postulen.",
    linkText: "Ver una simulación",
    href: "#",
  },
];

export default function CasosDeUso() {
  return (
    <section
      id="casos-de-uso"
      className="w-full bg-white py-20 md:py-28 text-zinc-900 border-b border-zinc-100"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Badge with gradient line */}
        <div className="flex items-center gap-3 mb-6 select-none">
          <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
            ONE INFRASTRUCTURE. MULTIPLE USE CASES.
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-[40px] font-bold text-zinc-900 tracking-tight leading-tight max-w-4xl">
            Una misma infraestructura. Diferentes decisiones.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item) => (
            <div
              key={item.id}
              className="p-[1.5px] bg-zinc-200/30 hover:bg-gradient-to-br hover:from-[#FF0094] hover:to-[#02BEEF] rounded-[20px] shadow-sm hover:shadow-xl transition-all duration-300 flex group"
            >
              <div className="bg-[#f8f9fa] group-hover:bg-white rounded-[19px] p-6 md:p-8 flex flex-col justify-between h-[360px] w-full transition-all duration-300">
                <div>
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-6 select-none">
                    <div className="h-[1.5px] w-4 bg-[#FF0094] rounded-full shrink-0" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#02BEEF] uppercase">
                      {item.badge}
                    </span>
                  </div>
                  
                  {/* Title & Desc */}
                  <h3 className="text-lg md:text-[19px] font-bold text-zinc-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-500 leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>

                {/* Link */}
                <div>
                  <a
                    href={item.href}
                    className="text-xs md:text-sm font-bold text-[#FF0094] hover:underline inline-flex items-center gap-1 group/link"
                  >
                    {item.linkText}
                    <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
