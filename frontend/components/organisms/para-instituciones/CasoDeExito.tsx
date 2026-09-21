"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

// Oracle y Alura tienen mucho margen transparente en el archivo, por eso las
// alturas de caja son mucho mayores que lo que se ve (ONE casi no tiene margen).
// Oracle es un wordmark muy ancho y Alura uno muy corto, así que se ajustaron
// respecto de la home: Oracle un poco más chico y Alura un poco más grande,
// para que los tres tengan un peso visual parecido. Por debajo de 360px se
// achican para que entren en una sola fila y ONE no baje solo a una segunda línea.
const logos = [
  { src: "/logos/oracle.png", alt: "Oracle", width: 190, height: 91, className: "h-[52px] min-[360px]:h-[58px] md:h-[66px]" },
  { src: "/logos/alura.png", alt: "Alura", width: 280, height: 280, className: "h-[70px] min-[360px]:h-[80px] md:h-[90px]" },
  { src: "/logos/one.png", alt: "ONE Next Education", width: 308, height: 163, className: "h-[24px] min-[360px]:h-[28px] md:h-[32px]" },
];

const stats = [
  { value: "830", label: "Participantes" },
  { value: "106", label: "Equipos" },
  { value: "74", label: "Contratados" },
];

export default function CasoDeExito() {
  return (
    <section className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <SectionBadge>10 Caso de éxito</SectionBadge>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
            De formación{" "}
            <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              a experiencia laboral
            </em>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] text-[#9CA3AF] leading-relaxed">
            Oracle Next Education integró Simulación Laboral a su programa: un hackathon remoto con equipos
            multidisciplinarios y evidencia de desempeño registrada de punta a punta.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-['DM_Sans'] font-extrabold text-3xl bg-[linear-gradient(90deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                  {s.value}
                </span>
                <span className="mt-1 text-xs text-[#9CA3AF]">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Logos: mismos archivos y alturas que en la home (CasoOracle). La caja
            tiene alto fijo y los logos se centran en ella: así el aire transparente
            de los archivos no agranda el espacio entre las estadísticas y el botón. */}
        <Reveal delay={125}>
          <div className="mt-9 flex h-[28px] md:h-8 items-center gap-x-4 min-[360px]:gap-x-6 select-none">
            {logos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`${logo.className} w-auto shrink-0 opacity-90 object-contain pointer-events-none`}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Link
            href="/sobre-nosotros/casos-exito"
            className="mt-9 inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium border border-[rgba(255,0,148,0.35)] text-[#FF0094] hover:bg-[rgba(255,0,148,0.2)] transition"
          >
            Ver el caso completo
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
