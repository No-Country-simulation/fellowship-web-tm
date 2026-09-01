import React from "react";

export default function FraseSection() {
  return (
    <section
      id="frase-section"
      className="w-full bg-[#fcfcfc] py-20 md:py-28 text-zinc-900 border-b border-zinc-100"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-zinc-900 tracking-tight leading-tight max-w-4xl">
          "Hay cosas importantes sobre una persona que solamente pueden conocerse observándola trabajar."
        </h2>
        <p className="text-sm md:text-[15px] text-zinc-500 max-w-3xl leading-relaxed mt-6">
          No necesitamos destruir el CV. Necesitamos cambiar la unidad de valor de la contratación: de credenciales a evidencia.
        </p>
      </div>
    </section>
  );
}
