import { cn } from "@/lib/utils";

export interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      id="footer"
      className={cn(
        "w-full bg-[#090a15] text-zinc-300 py-20 md:py-24 border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-300",
        className
      )}
    >
      {/* Decorative Rotated Geometric Squares (Diamonds) */}
      <div className="absolute top-1/2 -left-24 w-72 h-72 border border-white/5 rounded-[40px] rotate-45 pointer-events-none hidden md:block -translate-y-1/2 select-none" />
      <div className="absolute top-1/2 -right-24 w-72 h-72 border border-white/5 rounded-[40px] rotate-45 pointer-events-none hidden md:block -translate-y-1/2 select-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center relative">
        
        {/* Section Badge with gradient line */}
        <div className="flex items-center gap-3 mb-6 select-none z-10">
          <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
            EMPEZÁ AHORA
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-[40px] font-bold text-white tracking-tight leading-tight text-center max-w-2xl mb-10 z-10">
          ¿Cómo querés participar?
        </h2>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-4xl px-4 z-10 mb-14">
          <a
            href="/empresas/contratar"
            className="w-full sm:w-auto min-w-[190px] bg-transparent border border-white/10 hover:border-[#FF0094]/30 hover:bg-[#FF0094]/5 transition-all duration-300 text-zinc-200 text-xs md:text-sm font-semibold py-3 px-6 rounded-xl text-center cursor-pointer select-none"
          >
            Quiero contratar
          </a>
          <a
            href="/talento"
            className="w-full sm:w-auto min-w-[240px] bg-transparent border border-white/10 hover:border-[#02BEEF]/30 hover:bg-[#02BEEF]/5 transition-all duration-300 text-zinc-200 text-xs md:text-sm font-semibold py-3 px-6 rounded-xl text-center cursor-pointer select-none"
          >
            Quiero realizar una simulación laboral
          </a>
          <a
            href="/talento/registro"
            className="w-full sm:w-auto min-w-[190px] bg-transparent border border-white/10 hover:border-[#FF0094]/30 hover:bg-[#FF0094]/5 transition-all duration-300 text-zinc-200 text-xs md:text-sm font-semibold py-3 px-6 rounded-xl text-center cursor-pointer select-none"
          >
            Quiero participar
          </a>
        </div>
      </div>
    </footer>
  );
}
