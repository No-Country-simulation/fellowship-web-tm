import { Reveal } from "@/components/ui/reveal";

const orbitNodes = [
  { cx: 105, cy: 150, label: "Learning" },
  { cx: 105, cy: 330, label: "Knowledge" },
  { cx: 395, cy: 150, label: "Evidence" },
  { cx: 395, cy: 330, label: "Work" },
];

const legend = [
  { label: "Aplican conocimientos", color: "#FF0094" },
  { label: "Trabajan en equipo", color: "#02BEEF" },
  { label: "Producen entregables", color: "#C06ECF" },
  { label: "Reciben feedback", color: "#646CF6" },
  { label: "Generan evidencia", color: "#0CFCA7" },
];

const dotColors = legend.map((l) => l.color);

export default function Programa() {
  return (
    <section className="w-full bg-[#000115] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-4 md:px-8">
        <Reveal className="max-w-[720px]">
          <div className="flex items-center gap-3 mb-6 select-none">
            <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">04 — Programa</span>
          </div>
          <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight leading-tight">
            Una capa de evidencia que{" "}
            <em className="not-italic bg-[linear-gradient(135deg,#FF0094,#02BEEF)] bg-clip-text text-transparent">
              conecta formación y trabajo
            </em>
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-zinc-400">
            La Simulación Laboral puede funcionar como una instancia donde los participantes:
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-11 flex flex-col items-center gap-6">
            <svg viewBox="0 0 500 460" className="w-full max-w-[440px] h-auto">
              <defs>
                <linearGradient id="programa-ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF0094" />
                  <stop offset="100%" stopColor="#02BEEF" />
                </linearGradient>
              </defs>

              <path
                id="programaOrbitPath"
                d="M250,90 A160,160 0 1 1 250,410 A160,160 0 1 1 250,90 Z"
                fill="none"
                stroke="url(#programa-ring-grad)"
                strokeWidth={1.5}
                strokeDasharray="5 7"
                opacity={0.5}
              />

              {orbitNodes.map((n) => (
                <line
                  key={`spoke-${n.label}`}
                  x1={250}
                  y1={230}
                  x2={n.cx}
                  y2={n.cy}
                  stroke="#2D2B40"
                  strokeWidth={1.5}
                />
              ))}

              {orbitNodes.map((n) => (
                <g key={n.label}>
                  <circle cx={n.cx} cy={n.cy} r={38} fill="#0C0C16" stroke="#2D2B40" strokeWidth={1.5} />
                  <text
                    x={n.cx}
                    y={n.cy}
                    fontFamily="'DM Sans', sans-serif"
                    fontWeight={700}
                    fontSize={12}
                    fill="#C7C9D3"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {n.label}
                  </text>
                </g>
              ))}

              <g>
                <circle cx={250} cy={230} r={86} fill="#0c0d21" />
                <text
                  x={250}
                  y={215}
                  fontFamily="'DM Sans', sans-serif"
                  fontWeight={800}
                  fontSize={19}
                  fill="#fff"
                  textAnchor="middle"
                >
                  Simulación
                </text>
                <text
                  x={250}
                  y={238}
                  fontFamily="'DM Sans', sans-serif"
                  fontWeight={800}
                  fontSize={19}
                  fill="#fff"
                  textAnchor="middle"
                >
                  Laboral
                </text>
                <text x={250} y={263} fontSize={9.5} fill="#939393" fontWeight={600} textAnchor="middle">
                  Execution · Collaboration
                </text>
                <text x={250} y={278} fontSize={9.5} fill="#939393" fontWeight={600} textAnchor="middle">
                  Decisions · Delivery · Observation
                </text>
              </g>

              {dotColors.map((color, i) => (
                <circle key={color} r={7} fill={color} style={{ filter: "drop-shadow(0 0 4px currentColor)" }}>
                  <animateMotion dur="9s" repeatCount="indefinite" begin={`${-i * 1.8}s`}>
                    <mpath href="#programaOrbitPath" />
                  </animateMotion>
                </circle>
              ))}
            </svg>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 max-w-[560px]">
              {legend.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-zinc-400">
                  <i className="h-[9px] w-[9px] rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
