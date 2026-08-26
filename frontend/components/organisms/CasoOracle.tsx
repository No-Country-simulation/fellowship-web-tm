import { cn } from "@/lib/utils";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export interface CasoOracleProps {
  className?: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  companyLogo: string;
  fallbackInitials: string;
  logoClass?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "amanda-gelumbauskas",
    name: "Amanda Gelumbauskas",
    role: "LATAM Head of Oracle One Education",
    company: "Oracle",
    quote:
      "“La calidad de los proyectos y el nivel de colaboración que vimos en los equipos fue excepcional. No Country ha creado un modelo único para identificar talento real.”",
    image: "/people/amanda-gelumbauskas-2.jpg",
    companyLogo: "/logos/one.png",
    fallbackInitials: "AG",
    logoClass: "h-5 md:h-6 max-w-[90px] opacity-80",
  },
  {
    id: "christian-velaszo",
    name: "Christian Velaszo Argañaraz",
    role: "Head of Alura Latam",
    company: "Alura",
    quote:
      "“Ver a los equipos trabajar en tiempo real nos dio una perspectiva invaluable sobre cómo colaboran y resuelven problemas. Identificamos varios candidatos que se alinean perfectamente con nuestra cultura.”",
    image: "/people/christian-velaszo-arganaraz.jpg",
    companyLogo: "/logos/alura.png",
    fallbackInitials: "CV",
    logoClass: "h-14 md:h-18 max-w-[160px] opacity-100",
  },
];

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
          <a
            href="https://www.oracle.com/latam/education/oracle-next-education/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-zinc-500 hover:text-[#02BEEF] underline underline-offset-2 transition-colors ml-2 normal-case tracking-normal font-normal"
          >
            Verificado en oracle.com
          </a>
        </div>

        {/* Title and Logos Block */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-4">
          <h2 className="text-3xl md:text-[40px] font-bold text-white tracking-tight leading-tight">
            Hackathon Oracle Next Education
          </h2>
          <div className="flex items-center gap-5">
            <div className="hidden lg:block h-8 w-[1px] bg-white/10" />
            <div className="flex items-center gap-6 select-none">
              <img src="/logos/oracle.png" alt="Oracle" className="h-[64px] md:h-[72px] opacity-90 object-contain" />
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
            <p className="text-xs md:text-[13px] text-zinc-300 font-medium leading-relaxed mb-1">
              Talento, equipos, empresas y referidos conectados en el mismo ciclo de evidencia.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0c0d21]/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-[160px] hover:border-white/10 transition-all duration-300">
            <div className="flex items-center gap-2 select-none">
              <div className="h-[1.5px] w-4 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
              <span className="text-[9px] font-bold tracking-[0.25em] text-zinc-500 uppercase">OBSERVACIÓN</span>
            </div>
            <p className="text-xs md:text-[13px] text-zinc-300 font-medium leading-relaxed mb-7">
              Comportamiento, colaboración y ejecución bajo presión real.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0c0d21]/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-[160px] hover:border-white/10 transition-all duration-300">
            <div className="flex items-center gap-2 select-none">
              <div className="h-[1.5px] w-4 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
              <span className="text-[9px] font-bold tracking-[0.25em] text-zinc-500 uppercase">RESULTADO</span>
            </div>
            <p className="text-xs md:text-[13px] text-zinc-300 font-medium leading-relaxed mb-7">
              Talento identificado por evidencia, no por credenciales.
            </p>
          </div>
        </div>

        {/* Testimonials Quotes Header */}
        <div className="mt-16 mb-8">
          <div className="flex items-center gap-3 mb-2 select-none">
            <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-zinc-500 uppercase">
              LO QUE DICEN LOS TOMADORES DE DECISIÓN
            </span>
          </div>
        </div>

        {/* Testimonials Quotes Grid (2 featured decision-maker cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative overflow-hidden bg-[#0c0d21]/40 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF0094] to-[#02BEEF]" />

              {/* Decorative large quote mark */}
              <Quote className="absolute -top-2 -right-2 w-24 h-24 text-white/[0.04] rotate-180 pointer-events-none" />

              {/* Quote text */}
              <p className="relative text-base md:text-lg text-zinc-100 italic font-medium leading-snug mb-10">
                {t.quote}
              </p>
              {/* Author Footer */}
              <div className="relative flex items-center justify-between pt-5 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 md:h-16 md:w-16 rounded-full border-2 border-white/10 shrink-0">
                    <AvatarImage src={t.image} alt={t.name} asChild>
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </AvatarImage>
                    <AvatarFallback className="bg-zinc-950 text-white text-base font-bold rounded-full w-full h-full flex items-center justify-center">
                      {t.fallbackInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-bold text-white">
                      {t.name}
                    </span>
                    <span className="text-xs md:text-sm text-zinc-400 mt-0.5">
                      {t.role}, <span className="text-zinc-300 font-semibold">{t.company}</span>
                    </span>
                  </div>
                </div>

                {/* Company Logo Badge */}
                <div className="hidden sm:flex items-center justify-end pl-3 select-none">
                  <img
                    src={t.companyLogo}
                    alt={t.company}
                    className={cn(
                      "w-auto object-contain",
                      t.logoClass || "h-6 md:h-7 max-w-[90px] opacity-90"
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
