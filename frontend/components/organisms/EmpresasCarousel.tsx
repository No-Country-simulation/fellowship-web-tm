import Image from "next/image";

const empresas = [
  { src: "/logos/oracle_v2.png", alt: "Oracle" },
  { src: "/logos/alura.png", alt: "Alura" },
  { src: "/logos/one.png", alt: "ONE" },
  { src: "/logos/tecnologico-de-monterrey-blue-med.png", alt: "Tec de Monterrey" },
  { src: "/logos/Stellar_Logo.png", alt: "Stellar" },
  { src: "/logos/DraperUniversity.png", alt: "Draper University" },
  { src: "/logos/Eidos.png", alt: "Eidos Global" },
];

export default function EmpresasCarousel() {
  const marqueeLogos = [...empresas, ...empresas];

  return (
    <section className="relative w-full py-10 md:py-14 overflow-hidden">
      <p className="text-center text-xs md:text-sm font-bold tracking-[2px] text-[#9ca3af] uppercase mb-8 px-4">
        Empresas que confían en nosotros
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