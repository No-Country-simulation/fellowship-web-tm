import React from "react";

interface Category {
  id: string;
  name: string;
  colorClass: string;
  items: string[];
}

const categories: Category[] = [
  {
    id: "conocimientos",
    name: "CONOCIMIENTOS",
    colorClass: "text-[#02BEEF]",
    items: [
      "AI",
      "Data Science",
      "Software / Web Development",
      "Game Development",
      "UX/UI",
      "Marketing",
      "Product",
      "Cloud",
      "Web3",
      "otros",
    ],
  },
  {
    id: "roles",
    name: "ROLES",
    colorClass: "text-[#FF0094]",
    items: [
      "AI Engineer",
      "Frontend",
      "Backend",
      "UX/UI",
      "Data Analyst",
      "Product Designer",
      "Growth",
      "otros",
    ],
  },
  {
    id: "desafios",
    name: "DESAFÍOS",
    colorClass: "text-indigo-400",
    items: [
      "Automatizar un proceso",
      "Crear un agente de IA",
      "Construir un producto",
      "Analizar datos",
      "Diseñar una experiencia",
      "Lanzar una campaña",
      "Resolver un problema de negocio",
    ],
  },
  {
    id: "sectores",
    name: "SECTORES",
    colorClass: "text-emerald-400",
    items: [
      "Fintech",
      "Healthtech",
      "EdTech",
      "AI Retail",
      "Healthcare",
      "Impacto Social",
      "otros",
    ],
  },
];

export default function QuePuedeSimularse() {
  return (
    <section
      id="que-puede-simularse"
      className="w-full bg-[#090a15] py-20 md:py-28 text-white border-t border-b border-white/10"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Badge with horizontal gradient line */}
        <div className="flex items-center gap-3 mb-6 select-none">
          <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
            INFRAESTRUCTURA
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-[40px] font-bold text-white tracking-tight leading-tight mb-4">
            ¿Qué puede simularse?
          </h2>
          <p className="text-sm md:text-[15px] text-zinc-400 max-w-3xl leading-relaxed">
            La infraestructura es agnóstica al desafío: cualquier disciplina, rol o problema de negocio del ámbito digital puede convertirse en una simulación laboral.
          </p>
        </div>

        {/* Content Rows with clean horizontal lines */}
        <div className="border-b border-white/10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8 py-5 border-t border-white/10 items-start"
            >
              {/* Category Title */}
              <h3 className={`text-xs font-extrabold tracking-[0.12em] uppercase md:pt-0.5 ${category.colorClass}`}>
                {category.name}
              </h3>

              {/* Items List */}
              <div className="flex flex-wrap items-center gap-y-2 text-sm md:text-[15px] text-zinc-300 font-medium leading-relaxed">
                {category.items.map((item, index) => (
                  <span key={item} className="inline-flex items-center">
                    <span className="cursor-default select-all">
                      {item}
                    </span>
                    {index < category.items.length - 1 && (
                      <span className="mx-2.5 text-zinc-600 font-semibold select-none">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
