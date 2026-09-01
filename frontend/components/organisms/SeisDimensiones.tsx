"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

interface Dimension {
  icon: React.ReactNode;
  title: string;
  desc: string;
  q?: string;
  note?: string;
  chips: string[];
  signal?: string;
  questions?: string[];
}

const DURATION = 5200;
const FADE_OUT_MS = 220;

const dimensions: Dimension[] = [
  {
    icon: <path d="M2 12h4l2.5-7 4 14 2.5-7H22" />,
    title: "Participación",
    desc: "Mide si alguien está presente, con qué frecuencia y qué tan sostenida es esa presencia a lo largo de toda la experiencia.",
    q: "¿Está presente en el proceso?",
    chips: ["Frecuencia", "Continuidad", "Presencia", "Participación a lo largo del tiempo", "Evolución"],
    signal: "compromiso / consistencia",
  },
  {
    icon: (
      <>
        <circle cx="8.5" cy="10" r="3.2" />
        <circle cx="15.5" cy="10" r="3.2" />
        <path d="M3 20c0-3.2 2.5-5.5 5.5-5.5S14 16.8 14 20" />
        <path d="M10 20c0-3.2 2.5-5.5 5.5-5.5S21 16.8 21 20" />
      </>
    ),
    title: "Colaboración",
    desc: "Qué tanto interactúa con sus compañeros, cómo coordina el trabajo y si ayuda a destrabar el avance de otros.",
    q: "¿Cómo trabaja con otras personas?",
    chips: [
      "Interacción con el equipo",
      "Coordinación",
      "Contribución al avance",
      "Capacidad de desbloquear",
      "Reciprocidad",
      "Dependencia de otros",
    ],
    signal: "capacidad de trabajar en equipo",
  },
  {
    icon: (
      <>
        <path d="M4 5h16v10H9l-4 4V5z" />
        <path d="M8 9h8M8 12h5" />
      </>
    ),
    title: "Comunicación",
    desc: "Cómo se integra a los canales y a la dinámica de comunicación que define cada simulación.",
    q: "¿Cómo se integra al sistema de comunicación del equipo?",
    note: "Según las herramientas y permisos definidos para cada simulación, podemos observar:",
    chips: ["Participación en canales", "Reuniones", "Sincronización", "Comunicación asincrónica", "Patrones de interacción"],
  },
  {
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />,
    title: "Ejecución",
    desc: "Si esa presencia se traduce en producción real: entregables concretos y avances verificables del proyecto.",
    q: "¿Convierte participación en producción?",
    chips: ["Entregables", "Avances", "Cumplimiento", "Contribuciones concretas", "Evolución del proyecto"],
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5z" />
      </>
    ),
    title: "Autonomía y toma de decisiones",
    desc: "Si propone soluciones, toma la iniciativa, y puede avanzar y destrabar problemas sin instrucciones constantes.",
    note: "Puede surgir de:",
    chips: [
      "Observación de actividad",
      "Entregables",
      "Decisiones documentadas",
      "Peer review",
      "Facilitadores / mentores",
      "Evaluación del desafío",
    ],
    questions: ["¿Propone soluciones?", "¿Toma iniciativa?", "¿Desbloquea problemas?", "¿Necesita instrucciones constantes?"],
  },
  {
    icon: (
      <>
        <path d="M3 16l5-5 4 4 8-9" />
        <path d="M14 6h6v6" />
      </>
    ),
    title: "Adaptación y trayectoria",
    desc: "Cómo cambia su comportamiento — si acelera, si cae, y cómo se recupera — a medida que cambia el contexto.",
    q: "¿Cómo cambia su comportamiento a medida que cambia el contexto?",
    chips: ["Evolución", "Consistencia", "Aceleración", "Caída", "Recuperación", "Adaptación al equipo", "Respuesta a nuevas exigencias"],
  },
];

function Icon({ children, size }: { children: React.ReactNode; size: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={size >= 30 ? 1.5 : 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export default function SeisDimensiones() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [progressOn, setProgressOn] = useState(false);
  const [started, setStarted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (idx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    setProgressOn(false);
    setRevealed(false);
    setFading(true);
    fadeTimeoutRef.current = setTimeout(() => {
      setCurrent(idx);
      setFading(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setRevealed(true)));
    }, FADE_OUT_MS + 40);
  };

  // Arranca la primera vez que la sección entra en el viewport.
  useEffect(() => {
    const el = containerRef.current;
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
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    requestAnimationFrame(() => requestAnimationFrame(() => setRevealed(true)));
  }, [started]);

  // Auto-avance: cuando el contenido termina de revelarse, arranca la barra
  // de progreso y programa el pase a la siguiente dimensión.
  useEffect(() => {
    if (!started || !revealed) return;
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setProgressOn(true)));
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % dimensions.length);
    }, DURATION);
    return () => {
      cancelAnimationFrame(raf);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealed, started]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  const handleTabClick = (idx: number) => {
    if (idx === current) return;
    goTo(idx);
  };

  const dim = dimensions[current];

  const textBlocks: React.ReactNode[] = [
    <div key="head" className="flex items-center gap-3.5">
      <span className="flex shrink-0 text-[#FF0094]">
        <Icon size={30}>{dim.icon}</Icon>
      </span>
      <h3 className="text-xl md:text-[22px] font-extrabold text-[#0a0a0f]">{dim.title}</h3>
    </div>,
    <p key="desc" className="max-w-[540px] text-[15px] font-medium leading-relaxed text-[#3a3a42]">
      {dim.desc}
    </p>,
  ];
  if (dim.q) textBlocks.push(<p key="q" className="max-w-[520px] text-[14.5px] italic text-[#8a8a94]">{dim.q}</p>);
  if (dim.note) textBlocks.push(<p key="note" className="text-[13px] text-[#8a8a94]">{dim.note}</p>);

  const itemCount = textBlocks.length + (dim.signal ? 1 : 0);
  const pillsStart = itemCount * 90 + 60;

  return (
    <section id="qo-dimensiones" className="w-full bg-white py-20 md:py-28 text-zinc-900">
      <div className="max-w-[1120px] mx-auto px-4 md:px-8">
        <Reveal className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 mb-4 select-none">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF0094] shadow-[0_0_10px_#FF0094]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8a94]">Seis dimensiones</span>
          </div>
          <h2 className="text-3xl md:text-[42px] font-bold tracking-tight leading-tight text-[#0a0a0f]">
            Lo que una simulación{" "}
            <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              hace visible
            </em>
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#55555f]">
            Elegí una dimensión, o dejá que avancen solas.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div ref={containerRef} className="mt-10">
            {/* Tabs */}
            <div className="flex gap-1 overflow-x-auto border-b border-[#ececec] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {dimensions.map((d, i) => (
                <button
                  key={d.title}
                  type="button"
                  onClick={() => handleTabClick(i)}
                  className={`relative flex min-w-[90px] md:min-w-[110px] flex-1 flex-col items-center gap-1.5 px-2 pb-3.5 pt-4 transition-colors duration-300 ${
                    i === current ? "text-[#0a0a0f]" : "text-[#a0a0a8]"
                  }`}
                >
                  <span className="absolute left-1 right-1 top-0 h-[2.5px] overflow-hidden rounded-full bg-[#ececec]">
                    <span
                      className="block h-full bg-[linear-gradient(90deg,#FF0094,#02BEEF)]"
                      style={{
                        width: i < current || (i === current && progressOn) ? "100%" : "0%",
                        transition: i === current ? `width ${DURATION}ms linear` : "none",
                      }}
                    />
                  </span>
                  <Icon size={20}>{d.icon}</Icon>
                  <span className="text-center text-[10px] md:text-[11px] font-bold leading-tight">{d.title}</span>
                </button>
              ))}
            </div>

            {/* Panel */}
            <div
              className="mt-[30px] min-h-[260px] transition-all ease-out"
              style={{
                transitionDuration: `${FADE_OUT_MS}ms`,
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(-8px)" : "translateY(0)",
              }}
            >
              <div className="flex flex-col gap-3.5">
                {textBlocks.map((node, i) => (
                  <div
                    key={i}
                    className="transition-all duration-[400ms] ease-out"
                    style={{
                      opacity: revealed ? 1 : 0,
                      transform: revealed ? "translateY(0)" : "translateY(10px)",
                      transitionDelay: `${i * 90}ms`,
                    }}
                  >
                    {node}
                  </div>
                ))}
              </div>

              <div className="mt-[18px] flex flex-wrap gap-2">
                {dim.chips.map((chip, i) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#ececec] bg-[#f4f4f6] px-3.5 py-2 text-[13px] font-semibold text-[#3a3a42] transition-all duration-300 ease-out"
                    style={{
                      opacity: revealed ? 1 : 0,
                      transform: revealed ? "translateY(0)" : "translateY(8px)",
                      transitionDelay: `${pillsStart + i * 55}ms`,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {dim.signal && (
                <p
                  className="mt-[18px] text-[13.5px] text-[#55555f] transition-all duration-[400ms] ease-out"
                  style={{
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateY(0)" : "translateY(10px)",
                    transitionDelay: `${(textBlocks.length + 0) * 90}ms`,
                  }}
                >
                  Señal: <b className="font-bold text-[#FF0094]">{dim.signal}</b>
                </p>
              )}

              {dim.questions && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {dim.questions.map((question, i) => (
                    <span
                      key={question}
                      className="rounded-full border border-[#FF0094]/[0.18] bg-[#FF0094]/[0.06] px-3.5 py-1.5 text-[12.5px] font-semibold text-[#c0007a] transition-all duration-300 ease-out"
                      style={{
                        opacity: revealed ? 1 : 0,
                        transform: revealed ? "translateY(0)" : "translateY(8px)",
                        transitionDelay: `${pillsStart + (dim.chips.length + i) * 55}ms`,
                      }}
                    >
                      {question}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
