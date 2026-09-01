import { Reveal } from "@/components/ui/reveal";

export default function TesisSection() {
  return (
    <section className="bg-[#0C0C16] border-t border-[#1C1B29] py-20">
      <div className="max-w-2xl mx-auto px-6">
        <Reveal>
          <div className="border-l-[3px] border-[#FF0094] pl-8">
            <p className="text-2xl md:text-3xl font-bold leading-snug tracking-tight">
              <span className="text-[#5C5E70]">La formación produce capacidades.</span>
              <br />
              <span className="text-white">
                La simulación permite observar cómo esas capacidades se convierten en comportamiento y ejecución.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}