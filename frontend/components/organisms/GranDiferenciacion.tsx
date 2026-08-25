interface PropCard {
  num: string;
  title: string;
  desc: string;
  color: string;
  emergence?: boolean;
}

const propCards: PropCard[] = [
  {
    num: "01",
    title: "Tiempo",
    desc: "La observación ocurre durante semanas, no durante una única instancia.",
    color: "#FF0094",
  },
  {
    num: "02",
    title: "Contexto",
    desc: "Las personas trabajan sobre problemas concretos, con entregables y restricciones.",
    color: "#02BEEF",
  },
  {
    num: "03",
    title: "Equipo",
    desc: "Los participantes dependen de otras personas para avanzar.",
    color: "#C06ECF",
  },
  {
    num: "04",
    title: "Emergencia",
    desc: "Aparecen comportamientos, roles y patrones que no fueron declarados previamente.",
    color: "#0CFCA7",
    emergence: true,
  },
];

export default function GranDiferenciacion() {
  return (
    <section className="w-full bg-[#000115] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Badge with gradient line */}
        <div className="flex items-center gap-3 mb-6 select-none">
          <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
            La gran diferenciación
          </span>
        </div>

        {/* Header */}
        <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight leading-tight max-w-2xl">
          Cuatro propiedades que{" "}
          <span className="bg-gradient-to-r from-[#FF0094] to-[#02BEEF] bg-clip-text text-transparent">
            solo
          </span>{" "}
          aparecen en simulación
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {propCards.map((card) => (
            <div
              key={card.num}
              className="group relative bg-[#0c0d21]/40 hover:bg-[#15162e] border border-white/15 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 overflow-hidden"
              style={
                card.emergence
                  ? { boxShadow: `inset 0 0 0 0px ${card.color}00` }
                  : undefined
              }
            >
              {card.emergence && (
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${card.color}40`,
                    background: `linear-gradient(180deg, ${card.color}0f, transparent 60%)`,
                  }}
                />
              )}

              <span className="relative text-xs font-bold tracking-[0.1em] text-zinc-500">
                {card.num}
              </span>

              <div
                className="relative w-[26px] h-[3px] rounded-full my-3.5 transition-all duration-300 group-hover:w-[40px]"
                style={{ background: card.color }}
              />

              <h3 className="relative text-lg font-extrabold text-white">
                {card.title}
              </h3>
              <p className="relative mt-2.5 text-sm text-zinc-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
