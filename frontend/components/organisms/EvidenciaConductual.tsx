"use client";

import React, { useState } from "react";
import { BarChart2, Users, FileText, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  Cell,
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

type TabType = "trajectory" | "peerReview" | "deliverables" | "evolution";

interface TabItem {
  id: TabType;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tabs: TabItem[] = [
  {
    id: "trajectory",
    title: "Trajectory",
    description: "Consistencia a lo largo de la ejecución.",
    icon: BarChart2,
  },
  {
    id: "peerReview",
    title: "Peer Review",
    description: "Cómo lo ve el equipo con el que trabajó.",
    icon: Users,
  },
  {
    id: "deliverables",
    title: "Deliverables",
    description: "Lo que efectivamente se produjo.",
    icon: FileText,
  },
  {
    id: "evolution",
    title: "Evolution Over Time",
    description: "Cómo cambia el desempeño entre simulaciones.",
    icon: TrendingUp,
  },
];

const categoryIconColors: Record<TabType, string> = {
  trajectory: "text-[#FF0094]",
  peerReview: "text-[#a855f7]",
  deliverables: "text-[#02BEEF]",
  evolution: "text-[#3b82f6]",
};

const chartConfig = {
  talent1: { label: "Talento 1", color: "#00F5A0" },
  talent2: { label: "Talento 2", color: "#FF9F00" },
  talent3: { label: "Talento 3", color: "#02BEEF" },
  talent4: { label: "Talento 4", color: "#8b5cf6" },
  talent5: { label: "Talento 5", color: "#D946EF" },
  performance: { label: "Desempeño", color: "#02BEEF" },
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

const barChartData = [
  { name: "Sim 1", performance: 55, fill: "rgba(20, 110, 120, 0.6)" },
  { name: "Sim 2", performance: 73, fill: "rgba(14, 116, 144, 0.7)" },
  { name: "Sim 3", performance: 82, fill: "#02BEEF" },
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

export default function EvidenciaConductual() {
  const [activeTab, setActiveTab] = useState<TabType>("trajectory");

  return (
    <section
      id="evidencia-conductual"
      className="w-full bg-[#090a15] py-20 md:py-28 text-white border-b border-white/10"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-6 select-none">
          <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
            EVIDENCIA CONDUCTUAL
          </span>
        </div>

        {/* Section Title & Description */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-[40px] font-bold text-white tracking-tight leading-tight mb-4 max-w-4xl">
            El resultado no es un certificado. Es evidencia de cómo trabaja una persona.
          </h2>
          <p className="text-sm md:text-[15px] text-zinc-400 max-w-3xl leading-relaxed">
            La ejecución genera señales que permiten observar patrones de participación, consistencia, colaboración y producción a lo largo del tiempo.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 items-start mb-16">
          
          {/* Left Column */}
          <div className="bg-[#0c0d21] border border-white/5 rounded-[20px] p-6 md:p-8 h-[480px] flex flex-col justify-between transition-all duration-300 shadow-2xl">
            
            {/* TRAJECTORY PANEL */}
            {activeTab === "trajectory" && (
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
            )}

            {/* PEER REVIEW PANEL */}
            {activeTab === "peerReview" && (
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-[17px] font-bold text-white mb-0.5">Peer Review</h4>
                  <p className="text-xs text-zinc-500 mb-6">Ficha de candidato — cómo lo evalúa su equipo.</p>
                  
                  {/* Candidate row */}
                  <div className="flex items-center justify-between mb-6 bg-[#13152c]/50 border border-white/5 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      {/* Hex/Squircle Avatar */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FF0094] to-[#02BEEF] flex items-center justify-center text-white text-base font-extrabold select-none shadow-md">
                        LC
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[15px] font-bold text-white leading-tight">Lucía Correa</span>
                        <span className="text-[11px] text-zinc-400 mt-0.5">Frontend Jr - AR Argentina</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-[#02BEEF] flex items-center justify-end gap-1 leading-none select-none">
                        9.0 <span className="text-sm">★</span>
                      </div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mt-1">27 reseñas</div>
                    </div>
                  </div>

                  {/* Progress bars list */}
                  <div className="space-y-4">
                    {[
                      { label: "Trabajo en equipo", score: "9.5", pct: "95%" },
                      { label: "Proactividad", score: "9.4", pct: "94%" },
                      { label: "Comunicación", score: "9.2", pct: "92%" },
                      {
                        label: (
                          <>
                            Resolución de<br />problemas
                          </>
                        ),
                        score: "8.8",
                        pct: "88%",
                      },
                    ].map((row, idx) => (
                      <div key={idx} className="grid grid-cols-[145px_1fr_30px] items-center gap-3">
                        <span className="text-xs text-zinc-400 font-semibold leading-tight">{row.label}</span>
                        <div className="h-[6px] w-full bg-[#1a1b32] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full"
                            style={{ width: row.pct }}
                          />
                        </div>
                        <span className="text-xs text-white font-bold text-right">{row.score}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer block */}
                <div className="text-[11px] text-zinc-500 pt-5 border-t border-white/5 select-none font-medium">
                  3 equipos de simulación · 15 semanas · Datos en contexto real
                </div>
              </div>
            )}

            {/* DELIVERABLES PANEL */}
            {activeTab === "deliverables" && (
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-[17px] font-bold text-white mb-0.5">Deliverables</h4>
                  <p className="text-xs text-zinc-500 mb-6">Lo que efectivamente se produjo durante la simulación.</p>
                  
                  {/* Checks list */}
                  <div className="space-y-3.5">
                    
                    {/* Item 1 */}
                    <div className="flex items-center justify-between p-3.5 bg-[#13152c]/50 border border-white/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <span className="text-[#00F5A0] font-black text-base select-none">✓</span>
                        <span className="text-xs md:text-sm text-zinc-300 font-medium">42 pull requests mergeados</span>
                      </div>
                      {/* GitHub Icon */}
                      <svg className="w-5 h-5 text-zinc-400 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-between p-3.5 bg-[#13152c]/50 border border-white/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <span className="text-[#00F5A0] font-black text-base select-none">✓</span>
                        <span className="text-xs md:text-sm text-zinc-300 font-medium">1 producto funcional entregado</span>
                      </div>
                      <div className="flex gap-1.5 select-none shrink-0">
                        <span className="text-[10px] font-bold text-zinc-300 bg-[#1c1e3a] px-2 py-0.5 rounded border border-white/10">JS</span>
                        <span className="text-[10px] font-bold text-zinc-300 bg-[#1c1e3a] px-2 py-0.5 rounded border border-white/10">React</span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center justify-between p-3.5 bg-[#13152c]/50 border border-white/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <span className="text-[#00F5A0] font-black text-base select-none">✓</span>
                        <span className="text-xs md:text-sm text-zinc-300 font-medium">Documentación técnica completa</span>
                      </div>
                      {/* Notion Logo SVG */}
                      <svg className="w-4 h-4 shrink-0 fill-current text-zinc-400" viewBox="0 0 24 24">
                        <path d="M4.222 2.015L2.247 3.99c-.198.198-.247.543-.1.741l2.42 3.16.05-.05c-.15-.494-.05-.988.247-1.284L7.53 3.89c.3-.3.74-.346 1.086-.148l11.458 6.716c.395.247.395.692.148 1.037L10.3 22.954c-.247.395-.691.395-1.037.148L1.623 16.5c-.395-.247-.494-.691-.247-1.086l.691-.988c.247-.395.692-.395 1.087-.148l5.828 3.556L17.72 6.558 7.398 2.311c-.346-.148-.74-.1-.938.1L4.222 2.015z"/>
                      </svg>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-center justify-between p-3.5 bg-[#13152c]/50 border border-white/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <span className="text-[#00F5A0] font-black text-base select-none">✓</span>
                        <span className="text-xs md:text-sm text-zinc-300 font-medium">Demo Day presentado ante el equipo referente</span>
                      </div>
                      {/* Figma Logo SVG */}
                      <svg className="w-4.5 h-6 shrink-0" viewBox="0 0 38 57" fill="none">
                        <path d="M9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.2533 38 0 42.2533 0 47.5C0 52.7467 4.2533 57 9.5 57Z" fill="#0ACF83"/>
                        <path d="M0 28.5C0 23.2533 4.2533 19 9.5 19H19V38H9.5C4.2533 38 0 33.7467 0 28.5Z" fill="#A259FF"/>
                        <path d="M0 9.5C0 4.2533 4.2533 0 9.5 0H19V19H9.5C4.2533 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
                        <path d="M19 0H28.5C33.7467 0 38 4.2533 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
                        <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5Z" fill="#1ABC9C"/>
                      </svg>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* EVOLUTION PANEL */}
            {activeTab === "evolution" && (
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-[17px] font-bold text-white mb-0.5">Evolution Over Time</h4>
                  <p className="text-xs text-zinc-500 mb-6">Cómo cambia el desempeño entre simulaciones.</p>
                  
                  {/* Columns chart using Shadcn / Recharts */}
                  <div className="w-full h-60 max-w-[240px] mx-auto mt-4 select-none">
                    <ChartContainer config={chartConfig} className="w-full h-full aspect-auto">
                      <BarChart
                        data={barChartData}
                        margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
                      >
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#a1a1aa", fontSize: 10 }}
                        />
                        <YAxis domain={[0, 100]} hide />
                        <ChartTooltip
                          cursor={false}
                          isAnimationActive={false}
                          content={<ChartTooltipContent />}
                        />
                        <Bar
                          dataKey="performance"
                          radius={[4, 4, 0, 0]}
                          barSize={44}
                          isAnimationActive={false}
                        >
                          {barChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ChartContainer>
                  </div>
                  <div className="text-xs text-zinc-400 pt-5 border-t border-white/5">
                    Cada participación repetida muestra una curva de mejora sostenida en ejecución.
                  </div>
                </div>  

                {/* Footer block */}
              </div>
            )}

          </div>

          {/* Right Column: Tab Selectors list */}
          <div className="flex flex-col gap-4">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer flex gap-4 items-start",
                    isActive
                      ? "bg-[#13152c] border-white/10 shadow-lg text-white"
                      : "bg-[#0c0d21]/30 border-white/5 hover:bg-[#0c0d21]/60 hover:border-white/10 text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  <div className="shrink-0 pt-0.5">
                    <TabIcon
                      className={cn(
                        "w-5 h-5 transition-all duration-300",
                        isActive ? categoryIconColors[tab.id] : cn(categoryIconColors[tab.id], "opacity-50")
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    <span className={cn(
                      "font-bold text-sm md:text-base",
                      isActive ? "text-white" : "text-zinc-300"
                    )}>
                      {tab.title}
                    </span>
                    <span className="text-xs text-zinc-500 leading-normal">
                      {tab.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Footer Navigation Tagline */}
        <div className="w-full text-center md:text-left select-none text-[11px] md:text-xs text-zinc-500 tracking-wider font-semibold border-t border-white/5 pt-8">
          Activity <span className="text-zinc-600">+</span> Trajectory <span className="text-zinc-600">+</span> Peer Review <span className="text-zinc-600">+</span> Deliverables <span className="text-zinc-600">→</span> <span className="text-[#02BEEF] font-bold">Behavioral Evidence</span>
        </div>

      </div>
    </section>
  );
}
