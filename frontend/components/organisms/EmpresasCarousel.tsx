import Image from "next/image";

const empresas = [
  { src: "/logos/alura.png", alt: "Alura" },
  { src: "/logos/angola.png", alt: "Angola" },
  { src: "/logos/anima.png", alt: "Anima" },
  { src: "/logos/oracle_v2.png", alt: "Oracle" },
  { src: "/logos/pmi.png", alt: "PMI" },
  { src: "/logos/visent.png", alt: "Visent" },
];

export default function EmpresasCarousel() {
  return (
    <section className="w-full py-10 md:py-14 bg-[#040414]">
      <div className="text-center text-xs md:text-sm font-bold tracking-[2px] text-[#9ca3af] uppercase mb-8 flex items-center justify-center gap-2 sm:gap-4 px-4">
        <span className="h-[2px] w-8 sm:w-16 md:w-24 bg-[repeating-linear-gradient(90deg,#ff00a0,#ff00a0_2px,transparent_2px,transparent_5px)] flex-shrink-0" />
        <span className="truncate">Companies simulating with us</span>
        <span className="h-[2px] w-8 sm:w-16 md:w-24 bg-[repeating-linear-gradient(90deg,#ff00a0,#ff00a0_2px,transparent_2px,transparent_5px)] flex-shrink-0" />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 px-6">
        {empresas.map((empresa, idx) => (
          <div
            key={idx}
            className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
          >
            <Image
              src={empresa.src}
              alt={empresa.alt}
              width={120}
              height={40}
              className="object-contain max-h-12 md:max-h-14 w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}