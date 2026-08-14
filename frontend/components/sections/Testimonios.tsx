"use client";

import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "No Country me dio la confianza que ninguna academia me pudo dar. Coordinar tareas con devs de otros países me preparó para mi puesto actual.",
    name: "Lucía Fernández",
    role: "Junior Frontend Dev",
    company: "Globant",
    initials: "LF"
  },
  {
    id: 2,
    quote:
      "Participar de la simulación laboral me dio la experiencia de trabajar en equipo real que necesitaba para pasar las entrevistas y conseguir mi primer empleo.",
    name: "Mateo Rodríguez",
    role: "Full Stack Developer",
    company: "Mercado Libre",
    initials: "MR"
  },
  {
    id: 3,
    quote:
      "Coordinar como PM en squads multidisciplinarios fue clave para entender metodologías ágiles de verdad. Una experiencia invaluable para mi carrera.",
    name: "Valeria Gómez",
    role: "Product Manager",
    company: "Accenture",
    initials: "VG"
  },
];

export interface TestimoniosProps {
  className?: string;
}

export default function Testimonios({ className }: TestimoniosProps) {
  // Duplicate list to create a seamless infinite scrolling effect
  const extendedTestimonials = [...mockTestimonials, ...mockTestimonials];

  return (
    <section
      id="testimonios"
      className={cn(
        "w-full bg-[#E5E5E5] dark:bg-black py-20 md:py-28 transition-colors duration-300 border-b border-neutral-300/40 dark:border-zinc-900 relative overflow-hidden",
        className
      )}
    >
      {/* Styles for smooth infinite marquee movement with hover-pause state */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-container-custom {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          animation: marquee 40s linear infinite;
        }
        .marquee-container-custom:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-16">
        {/* Header section */}
        <div className="text-center">
          {/* Badge with pulse dot animation */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-800 dark:bg-black/80 text-white text-[11px] font-bold tracking-wider rounded-full border border-zinc-700/45 shadow-sm uppercase select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            VOCES DE LA COMUNIDAD
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mt-3 tracking-tight">
            Lo que dicen quienes ya participaron
          </h2>
        </div>
      </div>

      {/* Testimonials Slider Area */}
      <div className="w-full relative py-4">
        {/* Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#E5E5E5] dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#E5E5E5] dark:from-black to-transparent z-10 pointer-events-none" />

        {/* Marquee Wrapper */}
        <div className="w-full overflow-hidden">
          <div className="marquee-container-custom px-4">
            {extendedTestimonials.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0 p-6 bg-[#B3B3B3] dark:bg-zinc-900/65 border border-neutral-700 dark:border-zinc-700/80 rounded-2xl shadow-md hover:shadow-lg flex flex-col justify-between space-y-6 transition-all duration-300 hover:bg-neutral-300/20 dark:hover:bg-zinc-800/45 select-none"
              >
                {/* Quote details */}
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-neutral-900 dark:text-zinc-400 opacity-40 transform rotate-180 shrink-0" />
                  <p className="text-neutral-950 dark:text-zinc-100 text-sm md:text-[15px] leading-relaxed font-semibold">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author row */}
                <div className="flex items-center gap-4 border-t border-neutral-600/20 dark:border-zinc-700/30 pt-4">
                  {/* Initials avatar icon */}
                  <div className="w-10 h-10 rounded-full bg-zinc-800 dark:bg-zinc-700 border border-zinc-700/40 flex items-center justify-center text-white text-xs font-black shrink-0 select-none shadow-sm uppercase">
                    {item.initials}
                  </div>
                  {/* Name and contextual role info */}
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-neutral-950 dark:text-white leading-tight">
                      {item.name}
                    </span>
                    <span className="text-xs text-neutral-800 dark:text-zinc-400 font-medium">
                      {item.role} @ {item.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
