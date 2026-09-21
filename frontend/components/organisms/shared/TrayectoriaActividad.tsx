"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

// Panel "Trayectoria de Actividad". Es el mismo que muestra la home dentro de
// EvidenciaConductual (pestaña Trajectory); vive acá para poder usarlo también
// en otras páginas (por ejemplo el detalle de equipo del showcase) sin copiarlo.

const chartConfig = {
  talent1: { label: "Talento 1", color: "#00F5A0" },
  talent2: { label: "Talento 2", color: "#FF9F00" },
  talent3: { label: "Talento 3", color: "#02BEEF" },
  talent4: { label: "Talento 4", color: "#8b5cf6" },
  talent5: { label: "Talento 5", color: "#D946EF" },
} satisfies ChartConfig;

const chartData = [
  { name: "Sem 1", talent1: 20, talent2: 19, talent3: 17, talent4: 15, talent5: 13 },
  { name: "Sem 2", talent1: 57, talent2: 50, talent3: 43, talent4: 37, talent5: 30 },
  { name: "Sem 3", talent1: 48, talent2: 42, talent3: 36, talent4: 30, talent5: 24 },
  { name: "Sem 4", talent1: 60, talent2: 53, talent3: 47, talent4: 40, talent5: 33 },
  { name: "Sem 5", talent1: 53, talent2: 47, talent3: 40, talent4: 33, talent5: 27 },
  { name: "Sem 6", talent1: 67, talent2: 59, talent3: 51, talent4: 43, talent5: 35 },
  { name: "Sem 7", talent1: 60, talent2: 52, talent3: 44, talent4: 36, talent5: 28 },
  { name: "Sem 8", talent1: 70, talent2: 61, talent3: 53, talent4: 44, talent5: 35 },
  { name: "Actual", talent1: 75, talent2: 65, talent3: 56, talent4: 47, talent5: 37 },
];

const CustomDot = (props: any) => {
  const { cx, cy, index } = props;
  if (index === 8) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4.5}
        fill={props.stroke}
        stroke="none"
      />
    );
  }
  return null;
};

export default function TrayectoriaActividad() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h4 className="text-[17px] font-bold text-white mb-0.5">Trayectoria de Actividad</h4>
        <p className="text-xs text-zinc-500 mb-6">Índice 0-100 por talento, semana a semana.</p>

        {/* Pill selectors */}
        <div className="flex gap-2 mb-6 select-none">
          <span className="text-xs px-3.5 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-400 cursor-default">Sem 1</span>
          <span className="text-xs px-3.5 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-400 cursor-default">Sem 3</span>
          <span className="text-xs px-3.5 py-1 rounded-full bg-[#FF0094] text-white font-semibold cursor-default">Actual</span>
        </div>

        {/* Recharts */}
        <div className="w-full h-60 mt-4 select-none">
          <ChartContainer config={chartConfig} className="w-full h-full aspect-auto">
            <LineChart
              data={chartData}
              margin={{ top: 15, right: 15, left: 15, bottom: 5 }}
            >
              <CartesianGrid
                vertical={false}
                stroke="rgba(255, 255, 255, 0.04)"
                strokeDasharray="4 4"
              />
              <XAxis dataKey="name" hide />
              <YAxis domain={[0, 100]} hide />
              <ChartTooltip
                cursor={false}
                isAnimationActive={false}
                content={<ChartTooltipContent />}
              />
              <ReferenceLine
                x="Actual"
                stroke="rgba(217, 70, 239, 0.35)"
                strokeDasharray="3 3"
              />
              <Line
                type="monotone"
                dataKey="talent1"
                stroke="var(--color-talent1)"
                strokeWidth={2.5}
                dot={<CustomDot />}
                activeDot={false}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="talent2"
                stroke="var(--color-talent2)"
                strokeWidth={2.5}
                dot={<CustomDot />}
                activeDot={false}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="talent3"
                stroke="var(--color-talent3)"
                strokeWidth={2.5}
                dot={<CustomDot />}
                activeDot={false}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="talent4"
                stroke="var(--color-talent4)"
                strokeWidth={2.5}
                dot={<CustomDot />}
                activeDot={false}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="talent5"
                stroke="var(--color-talent5)"
                strokeWidth={2.5}
                dot={<CustomDot />}
                activeDot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>

      {/* Footer block */}
      <div className="flex items-center gap-3 pt-5 border-t border-white/5 mt-4">
        {/* Avatars */}
        <div className="flex -space-x-1.5 select-none">
          <div className="w-6 h-6 rounded-full bg-[#8b5cf6] border border-[#0c0d21] flex items-center justify-center text-[10px] font-black text-white">M</div>
          <div className="w-6 h-6 rounded-full bg-[#ec4899] border border-[#0c0d21] flex items-center justify-center text-[10px] font-black text-white">L</div>
          <div className="w-6 h-6 rounded-full bg-[#3b82f6] border border-[#0c0d21] flex items-center justify-center text-[10px] font-black text-white">C</div>
          <div className="w-6 h-6 rounded-full bg-zinc-800 border border-[#0c0d21] flex items-center justify-center text-[8px] font-bold text-zinc-400">+5</div>
        </div>
        <span className="text-[13px] text-zinc-400 font-medium">Peer Review en curso — 5 de 8 completados</span>
      </div>
    </div>
  );
}
