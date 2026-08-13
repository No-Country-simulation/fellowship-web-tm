import { cn } from "@/lib/utils";

export interface CasoOracleProps {
  className?: string;
}

export default function CasoOracle({ className }: CasoOracleProps) {
  return (
    <section
      id="caso-oracle"
      className={cn(
        "w-full bg-[#E5E5E5] dark:bg-black py-20 md:py-28 transition-colors duration-300 border-b border-neutral-300/40 dark:border-zinc-900",
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header section */}
        <div className="text-center mb-12">
          <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-neutral-600 dark:text-neutral-400 uppercase">
            VALIDACIÓN CORPORATIVA
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mt-2 tracking-tight">
            Empresas que ya confían en el modelo
          </h2>
        </div>

        {/* Card box with 2 columns layout */}
        <div className="border border-neutral-700 dark:border-zinc-700/80 bg-[#B3B3B3] dark:bg-zinc-900/65 rounded-[24px] p-6 md:p-12 shadow-lg transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left Column: Info and Metrics */}
            <div className="flex flex-col justify-between items-start space-y-6">
              <div className="space-y-4">
                {/* Badge with pulse dot animation */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-800 dark:bg-black/80 text-white text-[11px] font-bold tracking-wider rounded-full border border-zinc-700/45 shadow-sm uppercase select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  CASO DE ESCALA
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-tight">
                  Oracle Next Education (ONE)
                </h3>

                {/* Description */}
                <p className="text-neutral-800 dark:text-zinc-200 text-sm md:text-[15px] leading-relaxed max-w-lg">
                  Oracle Next Education integra las simulaciones laborales de No Country como parte central de su programa de formación en LATAM, permitiendo que miles de graduados obtengan su primera validación práctica en proyectos reales de escala continental.
                </p>
              </div>

              {/* Divider line */}
              <div className="border-t border-neutral-600/30 dark:border-zinc-700/50 w-full max-w-md my-2" />

              {/* Metrics */}
              <div className="flex flex-row gap-10 sm:gap-16 pt-2">
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-black text-neutral-950 dark:text-white tracking-tight">
                    +4,000
                  </span>
                  <span className="text-xs md:text-sm text-neutral-800 dark:text-zinc-400 mt-1 font-medium">
                    Simulados egresados
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-black text-neutral-950 dark:text-white tracking-tight">
                    94%
                  </span>
                  <span className="text-xs md:text-sm text-neutral-800 dark:text-zinc-400 mt-1 font-medium">
                    Índice de satisfacción
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Styled Placeholder Image container box */}
            <div className="w-full h-full min-h-[250px] md:min-h-[350px] bg-neutral-200/50 dark:bg-zinc-800/30 border border-neutral-400/40 dark:border-zinc-700/50 rounded-2xl flex flex-col items-center justify-center p-6 text-center select-none">
              <div className="relative flex flex-col items-center justify-center space-y-4">
                <span className="text-xs font-semibold tracking-wider text-neutral-800 dark:text-zinc-300 uppercase">
                    Logo / Contenido Visual
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
