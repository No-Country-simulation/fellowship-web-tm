import Image from "next/image";

const empresas = [
  { src: "/alura.png", alt: "Alura" },
  { src: "/angola.png", alt: "Angola" },
  { src: "/anima.png", alt: "Anima" },
  { src: "/oracle.png", alt: "Oracle" },
  { src: "/pmi.png", alt: "PMI" },
  { src: "/visent.png", alt: "Visent" },
];

export default function EmpresasCarousel() {
  // Duplicamos los logos 4 veces por pista para asegurar que el ancho de la pista
  // sea mayor que el ancho de la pantalla (incluso en pantallas ultra-wide o 4K),
  // evitando así que se generen huecos negros al desplazarse.
  const marqueeLogos = [...empresas, ...empresas, ...empresas, ...empresas];

  return (
    <section className="w-full py-10 md:py-14 bg-[#040414] border-b border-[#1c1b29]">
      <div className="text-center text-xs md:text-sm font-bold tracking-[2px] text-[#9ca3af] uppercase mb-8 flex items-center justify-center gap-2 sm:gap-4 px-4">
        <span className="h-[2px] w-8 sm:w-16 md:w-24 bg-[repeating-linear-gradient(90deg,#ff00a0,#ff00a0_2px,transparent_2px,transparent_5px)] flex-shrink-0" />
        <span className="truncate">Companies simulating with us</span>
        <span className="h-[2px] w-8 sm:w-16 md:w-24 bg-[repeating-linear-gradient(90deg,#ff00a0,#ff00a0_2px,transparent_2px,transparent_5px)] flex-shrink-0" />
      </div>

      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        {/* Pista 1 */}
        <div className="flex gap-10 md:gap-16 items-center shrink-0 animate-marquee py-2 pr-10 md:pr-16">
          {marqueeLogos.map((empresa, idx) => (
            <div
              key={`track1-${idx}`}
              className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300 shrink-0"
            >
              <Image
                src={empresa.src}
                alt={empresa.alt}
                width={120}
                height={40}
                className="object-contain max-h-8 md:max-h-10 w-auto"
              />
            </div>
          ))}
        </div>

        {/* Pista 2 (Duplicado para loop infinito) */}
        <div className="flex gap-10 md:gap-16 items-center shrink-0 animate-marquee py-2 pr-10 md:pr-16" aria-hidden="true">
          {marqueeLogos.map((empresa, idx) => (
            <div
              key={`track2-${idx}`}
              className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300 shrink-0"
            >
              <Image
                src={empresa.src}
                alt={empresa.alt}
                width={120}
                height={40}
                className="object-contain max-h-8 md:max-h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}