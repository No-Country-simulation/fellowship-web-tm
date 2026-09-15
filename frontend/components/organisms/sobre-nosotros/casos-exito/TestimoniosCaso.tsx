"use client";

import { Reveal } from "@/components/ui/reveal";
import SectionBadge from "@/components/ui/sectionBadge";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "La calidad de los proyectos y el nivel de colaboración que vimos en los equipos fue excepcional. No Country ha creado un modelo único para activar ecosistema e identificar talento real.",
    name: "Amanda Gelumbauskas",
    role: "LATAM Head of Oracle Next Education",
  },
  {
    quote:
      "Observar los equipos colaborar en tiempo real nos dio una perspectiva invaluable sobre cómo trabajan y resuelven problemas. Identificamos varios candidatos que se alinean perfectamente con nuestra cultura.",
    name: "Christian Velasco Argañaraz",
    role: "Head of Alura Latam",
  },
];

const organizaciones = [
  "Oracle",
  "Alura Latam",
  "John Deere",
  "Ficohsa",
  "Banco Azteca",
  "Get on Board",
  "MCIO",
  "Instituto PROA",
  "SoftSell",
];

export default function TestimoniosCaso() {
  return (
    <section id="ce-testimonios" className="bg-[#000115] text-white border-t border-[#1C1B29] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-[720px]">
            <SectionBadge>10 — Quién lo dice</SectionBadge>
            <h2 className="mt-4 text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-tight">
              La demanda entra a la experiencia{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                y decide adentro
              </em>
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={100 + i * 80}>
              <div className="border-l-2 border-[#FF0094] bg-white/[0.03] rounded-r-[10px] p-5 h-full">
                <p className="text-[13px] italic text-[#C7C9D3] leading-[1.6]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-3 flex flex-col">
                  <span className="text-[11.5px] font-bold text-white">{t.name}</span>
                  <span className="text-[10.5px] text-[#939393] mt-0.5">{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-10 text-[12.5px] font-extrabold uppercase tracking-[0.05em] text-[#939393]">
            Algunas de las organizaciones que participaron
          </p>
        </Reveal>

        <div className="mt-4 flex flex-wrap gap-2">
          {organizaciones.map((org, i) => (
            <Reveal key={org} delay={350 + i * 50}>
              <span className="inline-flex rounded-full bg-[#0C0C16] border border-[#2D2B40] px-4 py-2 text-[13px] font-bold text-white">
                {org}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}