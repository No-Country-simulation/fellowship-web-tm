"use client";

import { Reveal } from "@/components/ui/reveal";
import FilterDropdown from "./FilterDropdown";
import { type CompareEntry } from "@/lib/showcase";

type Props = {
  entries: CompareEntry[];
  sectors: string[];
  months: string[];
  sector: string;
  month: string;
  onSectorChange: (v: string) => void;
  onMonthChange: (v: string) => void;
  onSelect?: (entry: CompareEntry) => void;
};

function CompareRow({
  entry,
  rank,
  onClick,
}: {
  entry: CompareEntry;
  rank: number;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02BEEF]"
    >
      <div className="grid grid-cols-[24px_1fr_90px_1fr_40px] items-center gap-3 border-b border-[#2D2B40] py-2.5">
        <span className="text-[12px] font-extrabold text-[#FF0094]">{rank}</span>
        <span className="truncate text-[13px] font-bold text-white">
          {entry.projectTitle}{" "}
          <em className="ml-1 font-medium not-italic text-[#939393]">
            {entry.teamLabel} · {entry.vertical}
          </em>
        </span>
        <span className="text-[11px] text-[#939393]">
          {entry.meetings} reuniones
        </span>
        <div className="h-1.5 overflow-hidden rounded-full bg-[#2D2B40]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#FF0094] to-[#02BEEF]"
            style={{ width: `${entry.score}%` }}
          />
        </div>
        <span className="text-right text-[13px] font-extrabold text-white">
          {entry.score}
        </span>
      </div>
      <div className="ml-9 mt-1 text-[11px] text-[#939393]">
        {entry.deliverablesDone}/{entry.deliverablesTotal} entregables ·{" "}
        {entry.messages} mensajes · Simulación laboral de {entry.month}
      </div>
    </button>
  );
}

export default function CompareList({
  entries,
  sectors,
  months,
  sector,
  month,
  onSectorChange,
  onMonthChange,
  onSelect,
}: Props) {
  return (
    <div>
      <div className="pt-6">
        <h2 className="mb-2 font-[family-name:var(--font-dm-sans)] text-[22px] font-extrabold text-white">
          Comparar equipos
        </h2>
        <p className="max-w-[580px] text-[13.5px] leading-[1.6] text-[#9CA3AF]">
          Pensado para una empresa que quiere ver, dentro de un mismo sector y mes,
          qué equipos rindieron mejor antes de decidir con quién avanzar.
        </p>
      </div>

      <div className="my-5 flex flex-wrap gap-2">
        <FilterDropdown
          label="Sector"
          value={sector}
          options={["Todos", ...sectors]}
          onChange={onSectorChange}
        />
        <FilterDropdown
          label="Mes"
          value={month}
          options={["Todos los meses", ...months]}
          onChange={onMonthChange}
        />
      </div>

      <p className="mb-3.5 mt-5 text-[13px] text-[#9CA3AF]">
        Comparando <strong className="text-[#F9F9F9]">{entries.length}</strong>{" "}
        equipos
      </p>

      <div className="flex flex-col">
        {entries.length === 0 ? (
          <div className="py-10 text-center text-[13.5px] text-[#939393]">
            No hay equipos que coincidan con estos filtros.
          </div>
        ) : (
          entries.map((entry, i) => (
            <Reveal key={entry.teamId} delay={i * 40}>
              <CompareRow
                entry={entry}
                rank={i + 1}
                onClick={onSelect ? () => onSelect(entry) : undefined}
              />
            </Reveal>
          ))
        )}
      </div>
    </div>
  );
}