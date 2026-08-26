import Link from "next/link";

interface PathCard {
  tag: string;
  desc: string;
  cta: string;
  href: string;
}

const paths: PathCard[] = [
  {
    tag: "Para talento",
    desc: "Demostrá cómo trabajás en equipo bajo presión real.",
    cta: "Participar",
    href: "/para-talento",
  },
  {
    tag: "Para empresas",
    desc: "Accedé a perfiles con semanas de comportamiento documentado.",
    cta: "Ver perfiles",
    href: "/para-empresas/contratar",
  },
  {
    tag: "Para instituciones",
    desc: "Somos el puente hacia el mercado laboral.",
    cta: "Coordinar",
    href: "/para-empresas/empleabilidad",
  },
];

export default function CTAFinal() {
  return (
    <section className="w-full bg-[#000115] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 select-none">
          <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
            Empezá ahora
          </span>
        </div>
        <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight leading-tight">
          Cada audiencia,{" "}
          <span className="bg-gradient-to-r from-[#FF0094] to-[#02BEEF] bg-clip-text text-transparent">
            su propio camino
          </span>
          .
        </h2>

        {/* Cards */}
        <div className="mt-11 grid grid-cols-1 md:grid-cols-3 gap-4">
          {paths.map((p) => (
            <Link
              key={p.tag}
              href={p.href}
              className="group border border-white/10 hover:border-[#FF0094]/40 hover:bg-[#FF0094]/5 hover:-translate-y-1 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2.5 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] bg-clip-text text-transparent">
                  {p.tag}
                </div>
                <p className="text-sm text-zinc-400 mb-4">{p.desc}</p>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-white group-hover:text-[#FF0094] transition-colors duration-300">
                {p.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
