import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export interface CasoOracleProps {
  className?: string;
}

export default function CasoOracle({ className }: CasoOracleProps) {
  return (
    <section
      id="caso-oracle"
      className={cn(
        "w-full bg-[#090a15] py-20 md:py-28 text-white border-t border-b border-white/10 transition-colors duration-300",
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Badge */}
        <div className="flex items-center gap-3 mb-6 select-none">
          <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
            CASO DE ÉXITO
          </span>
        </div>

        {/* Title and Logos Block */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-4">
          <h2 className="text-3xl md:text-[40px] font-bold text-white tracking-tight leading-tight">
            Hackathon Oracle Next Education
          </h2>
          <div className="flex items-center gap-5">
            <div className="hidden lg:block h-8 w-[1px] bg-white/10" />
            <div className="flex items-center gap-6 select-none">
              <img src="/logos/oracle.png" alt="Oracle" className="h-[15px] md:h-[18px] opacity-90 object-contain" />
              <img src="/logos/alura.png" alt="Alura" className="h-[64px] md:h-[72px] opacity-90 object-contain" />
              <img src="/logos/one.png" alt="ONE Next Education" className="h-[28px] md:h-[32px] opacity-90 object-contain" />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-sm md:text-[15px] text-zinc-400 max-w-3xl leading-relaxed">
          Una solución ecosistémica: conecta talento, equipos y empresas en el mismo ciclo de evidencia.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 py-10 mt-6 border-b border-white/5">
          <div className="flex flex-col">
            <span className="text-3xl md:text-[40px] font-black text-white leading-none tracking-tight">+1.200</span>
            <span className="text-[10px] font-extrabold tracking-widest text-zinc-500 mt-2.5 uppercase">PARTICIPANTES</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-[40px] font-black text-white leading-none tracking-tight">4</span>
            <span className="text-[10px] font-extrabold tracking-widest text-zinc-500 mt-2.5 uppercase">EDICIONES</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-[40px] font-black text-white leading-none tracking-tight">15</span>
            <span className="text-[10px] font-extrabold tracking-widest text-zinc-500 mt-2.5 uppercase">PAÍSES</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-[40px] font-black text-white leading-none tracking-tight">6</span>
            <span className="text-[10px] font-extrabold tracking-widest text-zinc-500 mt-2.5 uppercase">SEMANAS</span>
          </div>
          <div className="flex flex-col col-span-2 sm:col-span-1">
            <span className="text-3xl md:text-[40px] font-black text-[#02BEEF] leading-none tracking-tight">+50</span>
            <span className="text-[10px] font-extrabold tracking-widest text-zinc-500 mt-2.5 uppercase">EMPRESAS REFERIDAS</span>
          </div>
        </div>

        {/* Under metrics disclaimer */}
        <p className="text-[11px] md:text-xs text-zinc-500 mt-4 leading-normal select-none">
          *+50 empresas referidas observaron y contrataron talento reduciendo riesgos de contratación.
        </p>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {/* Card 1 */}
          <div className="bg-[#0c0d21]/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-[160px] hover:border-white/10 transition-all duration-300">
            <div className="flex items-center gap-2 select-none">
              <div className="h-[1.5px] w-4 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
              <span className="text-[9px] font-bold tracking-[0.25em] text-zinc-500 uppercase">PROBLEMA</span>
            </div>
            <p className="text-xs md:text-[13px] text-zinc-300 font-medium leading-relaxed mb-7">
              ONE necesitaba validar talento técnico a gran escala, más allá del CV.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0c0d21]/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-[160px] hover:border-white/10 transition-all duration-300">
            <div className="flex items-center gap-2 select-none">
              <div className="h-[1.5px] w-4 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
              <span className="text-[9px] font-bold tracking-[0.25em] text-zinc-500 uppercase">ECOSISTEMA</span>
            </div>
            <p className="text-xs md:text-[13px] text-zinc-300 font-medium leading-relaxed mb-1 ">
              Talento, equipos, empresas y referidos conectados en el mismo ciclo de evidencia.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0c0d21]/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-[160px] hover:border-white/10 transition-all duration-300">
            <div className="flex items-center gap-2 select-none">
              <div className="h-[1.5px] w-4 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
              <span className="text-[9px] font-bold tracking-[0.25em] text-zinc-500 uppercase">OBSERVACIÓN</span>
            </div>
            <p className="text-xs md:text-[13px] text-zinc-300 font-medium leading-relaxed mb-7 ">
              Comportamiento, colaboración y ejecución bajo presión real.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0c0d21]/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-[160px] hover:border-white/10 transition-all duration-300">
            <div className="flex items-center gap-2 select-none">
              <div className="h-[1.5px] w-4 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
              <span className="text-[9px] font-bold tracking-[0.25em] text-zinc-500 uppercase">RESULTADO</span>
            </div>
            <p className="text-xs md:text-[13px] text-zinc-300 font-medium leading-relaxed mb-7 ">
              Talento identificado por evidencia, no por credenciales.
            </p>
          </div>
        </div>

        {/* Testimonials Quotes Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Quote 1 */}
          <div className="bg-[#0c0d21]/20 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-white/10 transition-all duration-300">
            <p className="text-sm md:text-[15px] text-zinc-200 italic font-medium leading-relaxed mb-8">
              "Con No Country dejamos de evaluar CVs y empezamos a ver personas resolviendo problemas reales."
            </p>
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 rounded-full border border-white/10">
                <AvatarImage src="/amanda-gelumbauskas.png" alt="Amanda Gelumbauskas" />
                <AvatarFallback className="bg-zinc-950 text-white text-[11px] font-bold rounded-full w-full h-full flex items-center justify-center">
                  AG
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-white">Amanda Gelumabauskas</span>
                <span className="text-[10px] md:text-xs text-zinc-500 mt-0.5">Program Manager, Oracle Next Education</span>
              </div>
            </div>
          </div>

          {/* Quote 2 */}
          <div className="bg-[#0c0d21]/20 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-white/10 transition-all duration-300">
            <p className="text-sm md:text-[15px] text-zinc-200 italic font-medium leading-relaxed mb-8">
              "Volvimos cuatro veces porque los datos de ejecución nos daban una señal que ningún assessment tradicional podía darnos."
            </p>
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 rounded-full border border-white/10">
                <AvatarImage src="/christian-velaszo-arganaraz.jpg" alt="Christian Velasco" />
                <AvatarFallback className="bg-zinc-950 text-white text-[11px] font-bold rounded-full w-full h-full flex items-center justify-center">
                  CV
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-white">Christian Velasco</span>
                <span className="text-[10px] md:text-xs text-zinc-500 mt-0.5">Head of Talent, Alura</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
