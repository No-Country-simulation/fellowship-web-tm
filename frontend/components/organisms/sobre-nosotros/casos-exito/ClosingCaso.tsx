import { Reveal } from "@/components/ui/reveal";

export default function ClosingCaso() {
  return (
    <section className="bg-[#F9F9F9] text-[#0a0a0f] border-t border-[#ECECEC] py-24">
      <div className="max-w-[680px] mx-auto px-6">
        <Reveal>
          <span className="block text-[13px] font-bold tracking-[0.2em] uppercase text-[#8a8a94] mb-4">
            Esto es lo que queda
          </span>
          <p className="font-extrabold text-[23px] md:text-[36px] leading-tight tracking-tight text-[#0a0a0f]">
            &ldquo;El talento se demuestra{" "}
            <span className="bg-gradient-to-r from-[#FF0094] to-[#02BEEF] bg-clip-text text-transparent">
              trabajando
            </span>
            .&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}