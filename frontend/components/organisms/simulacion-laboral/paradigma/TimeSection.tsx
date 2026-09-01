"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const weeks = [
  { label: "Sem. 1", width: 35 },
  { label: "Sem. 2", width: 52 },
  { label: "Sem. 3", width: 48 },
  { label: "Sem. 4", width: 78 },
  { label: "Sem. 5", width: 94 },
];

export default function TimeSection() {
  const barsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tiempo" className="bg-[#F2F2F5] text-[#0a0a0f] border-t border-[#E4E4E8] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
              02 — El factor decisivo
            </div>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              El tiempo es lo único que{" "}
              <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
                no se puede falsificar
              </em>
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
          <div ref={barsRef} className="flex flex-col gap-3">
            {weeks.map((week) => (
              <div key={week.label} className="flex items-center gap-4">
                <span className="w-16 text-xs font-bold text-[#8a8a94]">{week.label}</span>
                <div className="flex-1 h-2.5 bg-[#E4E4E8] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[linear-gradient(90deg,#FF0094,#02BEEF)] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: started ? `${week.width}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <Reveal delay={200}>
            <div>
              <p className="text-xl font-bold leading-snug">
                Una entrevista se prepara. Una simulación se sostiene.
              </p>
              <p className="mt-3 text-[15px] text-[#55555f] leading-relaxed">
                No hay forma de fingir presencia durante cinco semanas. Si alguien desaparece en la semana 3, queda registrado.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}