"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SimulacionFormInstituciones() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="bg-white text-[#0a0a0f] pt-0 pb-20">
      <div className="max-w-[640px] mx-auto px-6">
        <Reveal>
          <div className="border border-[#ECECEC] bg-[#FAFAFA] rounded-2xl p-6 md:p-8">
            {/* Hablá directo con Leandro */}
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 md:h-16 md:w-16 shrink-0 rounded-full overflow-hidden border-2 border-[#ECECEC]">
                <Image
                  src="/people/leandro-buzeta-bernasconi.png"
                  alt="Leandro Buzeta Bernasconi"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 64px, 56px"
                />
              </div>
              <div>
                <p className="font-bold text-[#0a0a0f]">Hablá directo con Leandro</p>
                <p className="text-sm text-[#55555f]">Founder, No Country</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-[#55555f] leading-relaxed">
              Contanos un poco de tu programa y te responde personalmente.
            </p>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#ECECEC] bg-white text-sm text-[#0a0a0f] placeholder:text-[#8a8a94] focus:outline-none focus:border-[#FF0094]/50 focus:ring-1 focus:ring-[#FF0094]/20 transition"
                />
                <input
                  type="text"
                  placeholder="Institución"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#ECECEC] bg-white text-sm text-[#0a0a0f] placeholder:text-[#8a8a94] focus:outline-none focus:border-[#FF0094]/50 focus:ring-1 focus:ring-[#FF0094]/20 transition"
                />
              </div>

              <input
                type="email"
                placeholder="Email institucional"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#ECECEC] bg-white text-sm text-[#0a0a0f] placeholder:text-[#8a8a94] focus:outline-none focus:border-[#FF0094]/50 focus:ring-1 focus:ring-[#FF0094]/20 transition"
              />

              <textarea
                placeholder="Contanos sobre tu programa (opcional)"
                rows={2}
                className="w-full px-4 py-3 rounded-lg border border-[#ECECEC] bg-white text-sm text-[#0a0a0f] placeholder:text-[#8a8a94] focus:outline-none focus:border-[#FF0094]/50 focus:ring-1 focus:ring-[#FF0094]/20 transition resize-none"
              />

              <button
                type="submit"
                disabled={enviado}
                className={`w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition ${
                  enviado
                    ? "bg-[#0CFCA7]/20 text-[#0a9e6b] cursor-default"
                    : "border border-[#FF0094]/35 text-[#FF0094] bg-transparent hover:bg-[#FF0094]/10"
                }`}
              >
                {enviado ? "Enviado ✓" : "Enviar a Leandro"}
                {!enviado && <ArrowRight className="h-4 w-4" strokeWidth={2} />}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}