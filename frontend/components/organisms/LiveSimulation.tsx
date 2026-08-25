const badges = [
  { texto: "7 Desafíos", clase: "border-[#fbbf24] text-[#fbbf24]" },
  { texto: "224 Inscripciones", clase: "border-[#a855f7] text-[#a855f7]" },
  { texto: "28 Equipos", clase: "border-[#ff00a0] text-[#ff00a0]" },
  { texto: "14 Países", clase: "border-[#00d1ff] text-[#00d1ff]" },
];

const equipos = [
  {
    nombre: "Team 07",
    rol: "Healthtech",
    proyecto: "Triage conversacional vía WhatsApp — Backend",
    iniciales: ["M", "M"],
    color: "bg-[#a855f7]",
    count: "+6",
    miembros: 8,
    docs: 2,
    ultimaAct: "hace 4m",
  },
  {
    nombre: "Team 19",
    rol: "Product Design",
    proyecto: "Branding y UX del marketplace de salud mental",
    iniciales: ["C", "C"],
    color: "bg-[#f472b6]",
    count: "+7",
    miembros: 9,
    docs: 3,
    ultimaAct: "hace 1m",
  },
  {
    nombre: "Team 03",
    rol: "Web App Development",
    proyecto: "MVP — Web App del marketplace de psicólogos",
    iniciales: ["A", "R"],
    color: "bg-[#a78bfa]",
    count: "+8",
    miembros: 10,
    docs: 1,
    ultimaAct: "hace 2m",
  },
  {
    nombre: "Team 12",
    rol: "Data Science",
    proyecto: "Modelo de matching paciente-psicólogo",
    iniciales: ["S", "F"],
    color: "bg-[#f9a8d4]",
    count: "+5",
    miembros: 7,
    docs: 0,
    ultimaAct: "hace 19m",
  },
];

export default function LiveSimulation() {
  return (
    <section id="live" className="bg-[#000115] px-4 md:px-8 py-14">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-2">
          <div className="inline-flex items-center gap-2 text-[13px] font-bold text-[#9ca3af]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff00a0]" />
            EQUIPOS COLABORANDO EN VIVO
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mt-1">Esto está ocurriendo ahora.</h2>
        <p className="text-[#9ca3af] text-base mt-2 mb-10 max-w-2xl">
          No es una ilustración: es una ventana a una simulación laboral real,
          ejecutándose en este momento.
        </p>

        <div className="bg-[#0c0c16] border border-[#1e1d2d] rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Encabezado card */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00d1ff]" />
              <span className="font-bold text-lg">Simulación Laboral — Semana 3 de 5</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge.texto}
                  className={`px-3 py-1 rounded-full text-xs font-bold border ${badge.clase}`}
                >
                  {badge.texto}
                </span>
              ))}
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-1.5 bg-[#2d2b40] rounded-full overflow-hidden">
              <div
                className="h-full w-[60%] bg-linear-to-r from-[#ff00a0] to-[#00d1ff] rounded-full"
              />
            </div>
            <span className="text-[#6b7280] font-semibold text-sm">60% del ciclo completado</span>
          </div>

          {/* Lista de equipos */}
          <div className="flex flex-col">
            {equipos.map((equipo) => (
              <div
                key={equipo.nombre}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-5 border-b border-[#1c1b29] last:border-b-0"
              >
                <div className="flex flex-col min-w-[140px]">
                  <span className="font-bold text-sm">{equipo.nombre}</span>
                  <span className="text-[13px] text-[#6b7280]">{equipo.rol}</span>
                </div>

                <div className="font-medium text-sm flex-1 min-w-[160px] text-white/90">
                  {equipo.proyecto}
                </div>

                <div className="flex items-center gap-5 text-[#9ca3af] text-sm flex-wrap">
                  <div className="flex items-center">
                    {equipo.iniciales.map((inicial, i) => (
                      <div
                        key={i}
                        className={`${equipo.color} h-8 w-8 rounded-full border-2 border-[#0c0c16] flex items-center justify-center text-xs font-bold text-white -ml-2 first:ml-0`}
                      >
                        {inicial}
                      </div>
                    ))}
                    <div className="bg-[#1e1d2d] h-8 w-8 rounded-full border-2 border-[#0c0c16] flex items-center justify-center text-xs font-semibold -ml-2">
                      {equipo.count}
                    </div>
                  </div>
                  <span>👤 {equipo.miembros}</span>
                  <span>📄 {equipo.docs}</span>
                  <span>🕒 {equipo.ultimaAct}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center text-[#9ca3af] pt-6 mt-6 border-t border-[#1c1b29] font-medium">
            Hay 24 equipos más trabajando ahora mismo →{" "}
            <a href="#" className="text-[#ff00a0] font-bold hover:underline">
              Ver Simulación ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}