import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

interface TeaserCard {
  kicker: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
}

const cards: TeaserCard[] = [
  {
    kicker: "Repasar el mecanismo",
    title: "Cómo funciona",
    desc: "Volvé a la convocatoria, la composición de equipos, el desafío y las cinco semanas de ejecución.",
    cta: "Volver a Cómo funciona",
    href: "/simulacion-laboral/como-funciona",
  },
  {
    kicker: "Qué insights genera",
    title: "Del patrón al insight",
    desc: "Índice de Actividad, trayectoria, peer review — y por qué predicen mejor que un CV.",
    cta: "Ver los insights",
    href: "/simulacion-laboral/que-insights-genera",
  },
];

export default function LoQueSigue() {
  return (
    <section className="w-full bg-[#000115] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-4 md:px-8">
        <Reveal className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 mb-4 select-none">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Lo que sigue</span>
          </div>
          <h2 className="text-3xl md:text-[42px] font-bold tracking-tight leading-tight text-white">
            De estos patrones,{" "}
            <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              a un insight
            </em>
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-zinc-400">
            Estas seis dimensiones son lo que se observa en crudo. Desde acá podés seguir en dos direcciones.
          </p>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={100 + i * 80}>
              <Link
                href={card.href}
                className="group block h-full rounded-2xl border border-white/10 hover:border-[#FF0094]/40 hover:bg-[#FF0094]/5 hover:-translate-y-1 p-6 md:p-7 transition-all duration-300"
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] bg-[linear-gradient(90deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                  {card.kicker}
                </div>
                <h4 className="mt-2.5 text-lg font-bold text-white">{card.title}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-400">{card.desc}</p>
                <div className="mt-3.5 flex items-center gap-1.5 text-[13.5px] font-bold text-white group-hover:text-[#FF0094] transition-colors duration-300">
                  {card.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
