import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const signals: { label: string; border: string }[] = [
  { label: "Participación", border: "#FF0094" },
  { label: "Colaboración", border: "#02BEEF" },
  { label: "Comunicación", border: "#C06ECF" },
  { label: "Trayectoria", border: "#646CF6" },
  { label: "Entregables", border: "#0CFCA7" },
  { label: "Peer review", border: "#FF0094" },
];

interface TeaserCard {
  kicker: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
}

const cards: TeaserCard[] = [
  {
    kicker: "Qué observamos",
    title: "Las variables que capturamos",
    desc: "Mensajes, tiempo de conexión, tiempo en reuniones de voz — y el dashboard que ven las empresas en vivo.",
    cta: "Ver qué observamos",
    href: "/simulacion-laboral/que-observamos",
  },
  {
    kicker: "Qué insights genera",
    title: "Del dato a la evidencia",
    desc: "Cómo esas señales se convierten en el Índice de Actividad y el peer review — y por qué predicen mejor que un CV.",
    cta: "Ver los insights",
    href: "/simulacion-laboral/que-insights-genera",
  },
];

export default function LoQueSeRegistra() {
  return (
    <section className="w-full bg-[#000115] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-4 md:px-8">
        <Reveal className="max-w-[720px]">
          <div className="flex items-center gap-3 mb-6 select-none">
            <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
              05 — Lo que se registra
            </span>
          </div>
          <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight leading-tight">
            Señales que{" "}
            <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              se registran solas
            </em>
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-zinc-400">
            Durante la ejecución se registran señales de:
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {signals.map((signal, i) => (
            <Reveal key={signal.label} delay={100 + i * 70}>
              <span
                className="inline-flex rounded-full bg-[#0C0C16] px-4.5 py-2.5 text-[13.5px] font-bold text-white border transition-colors duration-300"
                style={{ borderColor: signal.border }}
              >
                {signal.label}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="mt-11 grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={550 + i * 80}>
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
