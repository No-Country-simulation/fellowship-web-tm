import Image from "next/image";

const empresas = [
  { src: "/logos/alura.png", alt: "Alura" },
  { src: "/logos/angola.png", alt: "Angola" },
  { src: "/logos/anima.png", alt: "Anima" },
  { src: "/logos/one.png", alt: "ONE" },
  { src: "/logos/oracle_v2.png", alt: "Oracle" },
  { src: "/logos/pmi.png", alt: "PMI" },
  { src: "/logos/visent.png", alt: "Visent" },
];

export default function EmpresasCarousel() {
  const marqueeLogos = [...empresas, ...empresas];

  return (
    <section className="w-full py-10 md:py-14 bg-[#000115] overflow-hidden">
      <p className="text-center text-xs md:text-sm font-bold tracking-[2px] text-[#9ca3af] uppercase mb-8 px-4">
        Empresas que simulan con nosotros
      </p>
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
                className="object-contain h-8 md:h-10 w-auto"
              />
            </div>
          ))}
        </div>

        {/* Pista 2 */}
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
                className="object-contain h-8 md:h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}