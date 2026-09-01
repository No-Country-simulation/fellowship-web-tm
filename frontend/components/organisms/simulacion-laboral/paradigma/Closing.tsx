import { Reveal } from "@/components/ui/reveal";

export default function Closing() {
  return (
    <section className="w-full bg-[#F9F9F9] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="max-w-[680px]">
          <span className="block text-[13px] font-bold tracking-[0.2em] uppercase text-[#8a8a94] mb-4">
            Esto último es importante
          </span>
          <p className="font-extrabold text-[23px] md:text-[36px] leading-tight tracking-tight text-[#0a0a0f]">
            Observamos qué ocurre cuando{" "}
            <span className="bg-gradient-to-r from-[#FF0094] to-[#02BEEF] bg-clip-text text-transparent">
              el trabajo empieza
            </span>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
