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
  return (
    <section className="w-full py-14 bg-[#040414] border-b border-[#1c1b29]">
      <div className="text-center text-sm font-bold tracking-[2px] text-[#9ca3af] uppercase mb-8 flex items-center justify-center gap-4">
        <span className="h-[2px] w-24 bg-[repeating-linear-gradient(90deg,#ff00a0,#ff00a0_2px,transparent_2px,transparent_5px)]" />
        Companies simulating with us
        <span className="h-[2px] w-24 bg-[repeating-linear-gradient(90deg,#ff00a0,#ff00a0_2px,transparent_2px,transparent_5px)]" />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 px-6">
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
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}