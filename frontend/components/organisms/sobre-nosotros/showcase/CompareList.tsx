"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import {
  Check,
  ChevronDown,
  CircleCheck,
  MessageSquare,
  TrendingUp,
  Users,
  Video,
  X,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import GithubIcon from "./GithubIcon";
import TechChip from "./TechChip";
import {
  countTeams,
  pluralize,
  showcaseProjects,
  teamActivity,
  teamHref,
  teamMessages,
  teamScore,
  type ShowcaseEdition,
  type ShowcaseProject,
  type ShowcaseTeam,
} from "@/lib/showcase";

// Réplica de showcase-v16-comparar-20-equipos.html: elegís un proyecto → tocás
// equipos (hasta 5) → cada uno toma un color, se suma al gráfico y aparece su
// tarjeta de detalle abajo. Volvés a tocarlo y se saca.
const COMPARE_MAX = 5;
const COMPARE_COLORS = ["#FF0094", "#02BEEF", "#A855F7", "#646CF6", "#0CFCA7"];

type Selected = { teamId: string; color: string };

type Props = {
  onPlay?: () => void;
};

// "Equipo 3" → "E03"
function teamCode(team: ShowcaseTeam) {
  const n = team.label.match(/\d+/)?.[0] ?? "0";
  return `E${n.padStart(2, "0")}`;
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ─── Selector de proyecto ───

function ProjectSelect({
  project,
  onChange,
}: {
  project: ShowcaseProject | null;
  onChange: (p: ShowcaseProject | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative mb-5">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border bg-[#0C0C16] px-5 py-3.5 text-left text-white transition-colors duration-200 hover:border-[#3d3b55]",
          open ? "border-[#3d3b55]" : "border-[#2D2B40]",
        )}
      >
        <span>
          <span className="mb-[5px] block text-[9.5px] font-bold uppercase tracking-[.14em] text-[#939393]">
            Proyecto
          </span>
          <span
            className={cn(
              "block text-[15.5px]",
              project ? "font-bold text-white" : "font-semibold text-[#939393]",
            )}
          >
            {project ? project.title : "Seleccioná un proyecto"}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 flex-none text-[#939393] transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {project && (
        <button
          type="button"
          title="Quitar proyecto"
          aria-label="Quitar proyecto"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
            onChange(null);
          }}
          className="absolute right-[52px] top-1/2 flex h-[26px] w-[26px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg border border-[#2D2B40] bg-[#181932] text-[#939393] transition duration-200 hover:border-[#FF0094] hover:text-white"
        >
          <X className="h-3 w-3" strokeWidth={2.4} />
        </button>
      )}

      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-[300px] overflow-y-auto rounded-xl border border-[#2D2B40] bg-[#181932] p-1.5 shadow-[0_16px_32px_rgba(0,0,0,.45)]"
        >
          {showcaseProjects.map((p) => (
            <button
              key={p.id}
              type="button"
              role="option"
              aria-selected={p.id === project?.id}
              onClick={() => {
                setOpen(false);
                onChange(p);
              }}
              className={cn(
                "flex w-full cursor-pointer items-center justify-between gap-2.5 rounded-lg px-3 py-2.5 text-left text-[13px] font-semibold text-white",
                p.id === project?.id ? "bg-[rgba(255,0,148,.1)]" : "hover:bg-white/5",
              )}
            >
              <span>{p.title}</span>
              <span className="whitespace-nowrap text-[11px] font-medium text-[#939393]">
                {pluralize(countTeams(p), "equipo", "equipos")}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Gráfico: grilla 0–100, S1–S8, una línea con puntos por equipo ───

const W = 480;
const H = 270;
const L = 34;
const R = 10;
const T = 10;
const B = 28;
const WEEKS = 8;
const PW = W - L - R;
const PH = H - T - B;
const x = (i: number) => L + (PW * i) / (WEEKS - 1);
const y = (v: number) => T + PH * (1 - v / 100);

function CompareChart({
  items,
  hoveredId,
}: {
  items: { team: ShowcaseTeam; color: string }[];
  hoveredId: string | null;
}) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Trayectoria semanal de los equipos seleccionados"
      className="block h-auto w-full overflow-visible"
    >
      {[0, 25, 50, 75, 100].map((v) => (
        <g key={v}>
          <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="#1C1B29" strokeWidth={1} />
          <text x={L - 10} y={y(v) + 3} fill="#939393" fontSize={8.5} textAnchor="end">
            {v}
          </text>
        </g>
      ))}
      {Array.from({ length: WEEKS }, (_, i) => (
        <text key={i} x={x(i)} y={H - 8} fill="#939393" fontSize={8.5} textAnchor="middle">
          S{i + 1}
        </text>
      ))}
      {items.length === 0 && (
        <text
          x={L + PW / 2}
          y={T + PH / 2 + 3}
          fill="#939393"
          fontSize={10}
          textAnchor="middle"
        >
          Seleccioná equipos para ver su trayectoria
        </text>
      )}
      {/* Cada línea nueva se dibuja de izquierda a derecha y sus puntos
          aparecen uno por uno (animaciones .cmp-line / .cmp-dot en
          globals.css). Al pasar el mouse por un equipo elegido, su línea se
          resalta y las demás se atenúan. */}
      {items.map(({ team, color }) => {
        const wk = teamActivity(team.id);
        const pts = wk.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
        const dimmed = hoveredId !== null && hoveredId !== team.id;
        const focused = hoveredId === team.id;
        return (
          <g
            key={team.id}
            className="transition-opacity duration-300"
            style={{ opacity: dimmed ? 0.18 : 1 }}
          >
            <polyline
              points={pts}
              pathLength={1}
              fill="none"
              stroke={color}
              strokeWidth={focused ? 2.8 : 2}
              strokeLinejoin="round"
              strokeLinecap="round"
              className="cmp-line transition-[stroke-width] duration-200"
              style={{ filter: focused ? `drop-shadow(0 0 4px ${color})` : undefined }}
            />
            {wk.map((v, i) => (
              <circle
                key={i}
                cx={x(i).toFixed(1)}
                cy={y(v).toFixed(1)}
                r={i === WEEKS - 1 ? 3.6 : 2.6}
                fill={i === WEEKS - 1 ? "#0C0C16" : color}
                stroke={i === WEEKS - 1 ? color : undefined}
                strokeWidth={i === WEEKS - 1 ? 2 : undefined}
                className="cmp-dot"
                style={{ animationDelay: `${0.1 + i * 0.09}s` }}
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Tile seleccionable de equipo ───

function TeamTile({
  team,
  edition,
  selectedColor,
  lastColor,
  disabled,
  onToggle,
  onHover,
}: {
  team: ShowcaseTeam;
  edition: ShowcaseEdition;
  selectedColor?: string;
  lastColor?: string;
  disabled: boolean;
  onToggle: () => void;
  onHover: (hovering: boolean) => void;
}) {
  const selected = !!selectedColor;
  const score = teamScore(team.id);
  // Al deseleccionar, el color se mantiene (lastColor) hasta que termina de desvanecerse.
  const style = {
    "--team-color": selectedColor ?? lastColor ?? "#fff",
    ...(selectedColor && {
      borderColor: selectedColor,
      background: `color-mix(in srgb, ${selectedColor} 9%, #181932)`,
      boxShadow: `0 0 0 1px ${selectedColor}, 0 0 16px -2px color-mix(in srgb, ${selectedColor} 55%, transparent)`,
    }),
  } as CSSProperties;

  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-disabled={disabled}
      title={`${team.label} · ${edition.month}`}
      onClick={() => !disabled && onToggle()}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={style}
      className={cn(
        "relative flex flex-col rounded-xl border border-[#2D2B40] bg-[#181932] p-3.5 text-left transition-[border-color,box-shadow,background-color,opacity] duration-200 ease-in-out hover:border-[#44425e]",
        disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
      )}
    >
      {/* Código del equipo + check que aparece al seleccionarlo */}
      <span className="flex items-center justify-between">
        <span className="text-[13px] font-extrabold tracking-[.02em] text-white">
          {teamCode(team)}
        </span>
        <span
          aria-hidden
          className={cn(
            "flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[var(--team-color)] text-white shadow-[0_0_10px_-1px_var(--team-color)] transition-[opacity,scale] duration-[280ms] ease-[cubic-bezier(.34,1.56,.64,1)]",
            selected ? "scale-100 opacity-100" : "scale-50 opacity-0",
          )}
        >
          <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
        </span>
      </span>

      {/* Score: el dato principal, grande y con su barra */}
      <span className="mt-3 flex items-baseline gap-1">
        <span className="text-[26px] font-extrabold leading-none text-white">{score}</span>
        <span className="text-[9.5px] font-bold uppercase tracking-[.12em] text-[#939393]">
          score
        </span>
      </span>
      <span className="mt-2 block h-1 overflow-hidden rounded-full bg-[#2D2B40]">
        <span
          className="block h-full rounded-full transition-[background-color] duration-300"
          style={{
            width: `${score}%`,
            background: selected ? "var(--team-color)" : "#55536e",
          }}
        />
      </span>

      {/* El resto de los datos, chicos y con ícono, separados del score */}
      <span className="mt-3 grid grid-cols-3 gap-1 border-t border-[#2D2B40] pt-3">
        <MiniStat icon={MessageSquare} label="Mensajes" value={teamMessages(team.id)} />
        <MiniStat icon={Video} label="Reuniones" value={team.meetings} />
        <MiniStat
          icon={CircleCheck}
          label="Entregables"
          value={`${team.deliverablesDone}/${team.deliverablesTotal}`}
        />
      </span>
    </button>
  );
}

function MiniStat({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: number | string;
}) {
  return (
    <span title={label} className="flex flex-col items-center gap-1">
      <Icon aria-hidden className="h-3 w-3 text-[#939393]" />
      <span className="text-[12px] font-bold leading-none text-white">{value}</span>
      <span className="sr-only">{label}</span>
    </span>
  );
}

// ─── Tarjeta de detalle (una por equipo seleccionado) ───

const iconBtn =
  "inline-flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-[#2D2B40] bg-[#000115] py-2.5 text-[#939393] transition duration-200 hover:border-[#02BEEF] hover:text-[#02BEEF]";

function CompareCard({
  project,
  edition,
  team,
  color,
  onPlay,
}: {
  project: ShowcaseProject;
  edition: ShowcaseEdition;
  team: ShowcaseTeam;
  color: string;
  onPlay?: () => void;
}) {
  const metrics: [string, string | number][] = [
    ["Integrantes", team.members.length],
    ["Reuniones", team.meetings],
    ["Mensajes", teamMessages(team.id)],
    ["Entregables", `${team.deliverablesDone}/${team.deliverablesTotal}`],
  ];

  return (
    <div className="flex h-full min-w-0 flex-col gap-4 rounded-2xl border border-[#1C1B29] bg-[#0C0C16] p-5 transition-colors duration-200 hover:border-[#2D2B40]">
      <Link href={teamHref(team)} className="group block border-b border-[#1C1B29] pb-3.5">
        <div className="flex items-center gap-2 text-[15px] font-extrabold text-white transition-colors group-hover:text-[#02BEEF]">
          <span
            className="h-[9px] w-[9px] flex-none rounded-full"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          />
          {teamCode(team)}
        </div>
        <div className="mt-[3px] text-[11.5px] text-[#939393]">
          {team.label} · {edition.month}
        </div>
      </Link>

      <div className="flex items-baseline gap-1.5">
        <span className="text-[34px] font-extrabold leading-none text-white">
          {teamScore(team.id)}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[.04em] text-[#939393]">
          puntaje
        </span>
      </div>

      <div className="flex flex-col gap-[9px]">
        {metrics.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-[12.5px]">
            <span className="text-[#939393]">{label}</span>
            <span className="font-bold text-white">{value}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-[5px]">
        {project.stack.slice(0, 4).map((t, i) => (
          <TechChip key={t} name={t} color={COMPARE_COLORS[i % COMPARE_COLORS.length]} />
        ))}
      </div>

      {/* Tres accesos: repositorio / ficha del equipo / Showcase Play */}
      <div className="mt-auto flex gap-2">
        <a
          href={team.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Ver repositorio"
          aria-label="Ver repositorio"
          className={iconBtn}
        >
          <GithubIcon className="h-[15px] w-[15px]" />
        </a>
        <Link href={teamHref(team)} title="Ver equipo" aria-label="Ver equipo" className={iconBtn}>
          <Users className="h-[15px] w-[15px]" />
        </Link>
        <button
          type="button"
          onClick={onPlay}
          title="Ver en Showcase Play"
          aria-label="Ver en Showcase Play"
          className={iconBtn}
        >
          <PlayIcon className="h-[15px] w-[15px]" />
        </button>
      </div>
    </div>
  );
}

// ─── Sección completa ───

export default function CompareList({ onPlay }: Props) {
  const [project, setProject] = useState<ShowcaseProject | null>(null);
  const [selected, setSelected] = useState<Selected[]>([]);
  const [lastColors, setLastColors] = useState<Record<string, string>>({});
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  function handleProjectChange(p: ShowcaseProject | null) {
    setProject(p);
    setSelected([]);
    setLastColors({});
  }

  // El color se asigna por orden de selección (primer color libre de la
  // paleta), así dos equipos elegidos nunca comparten color en el gráfico.
  function toggleTeam(teamId: string) {
    if (selected.some((s) => s.teamId === teamId)) {
      setSelected(selected.filter((s) => s.teamId !== teamId));
      return;
    }
    if (selected.length >= COMPARE_MAX) return;
    const used = selected.map((s) => s.color);
    const color = COMPARE_COLORS.find((c) => !used.includes(c)) ?? COMPARE_COLORS[0];
    setSelected([...selected, { teamId, color }]);
    setLastColors({ ...lastColors, [teamId]: color });
  }

  const full = selected.length >= COMPARE_MAX;
  const colorOf = (teamId: string) => selected.find((s) => s.teamId === teamId)?.color;

  // Equipos elegidos, en el orden en que se eligieron
  const items = project
    ? selected.flatMap(({ teamId, color }) =>
        project.editions.flatMap((edition) =>
          edition.teams
            .filter((team) => team.id === teamId)
            .map((team) => ({ team, edition, color })),
        ),
      )
    : [];

  const multiEdition = (project?.editions.length ?? 0) > 1;

  return (
    // Ancho de toda la sección = 5 tarjetas de detalle lado a lado; si la
    // pantalla es más angosta, se achica.
    <div
      style={
        {
          "--cmp-w": "min(1464px, calc(100vw - 48px))",
          width: "var(--cmp-w)",
          marginLeft: "calc(50% - var(--cmp-w) / 2)",
        } as CSSProperties
      }
    >
      <div className="pb-2.5 pt-[34px]">
        <div className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[.14em] text-[#939393] before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#FF0094] before:content-['']">
          Comparar equipos
        </div>
        <h2 className="mb-7 mt-3.5 max-w-[540px] text-[30px] font-extrabold leading-[1.2] tracking-[-.01em] text-white">
          Elegí un proyecto y compará hasta 5 equipos.
        </h2>

        <ProjectSelect project={project} onChange={handleProjectChange} />

        {!project ? (
          <div className="flex flex-col items-center justify-center gap-2.5 rounded-[14px] border border-dashed border-[#2D2B40] bg-[#0C0C16] px-5 py-[70px] text-center text-[13.5px] text-[#939393]">
            <TrendingUp className="h-[30px] w-[30px] text-[#2D2B40]" strokeWidth={1.8} />
            <strong className="text-[15px] text-white">Todavía no elegiste un proyecto</strong>
            <span>Seleccioná un proyecto arriba para ver sus equipos y compararlos.</span>
          </div>
        ) : (
          <div className="grid grid-cols-2 items-stretch gap-5 max-[860px]:grid-cols-1">
            <div className="flex min-w-0 flex-col rounded-[14px] border border-[#2D2B40] bg-[#0C0C16] px-[22px] py-5">
              <div className="mb-3.5 flex items-center justify-between gap-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#939393]">
                  Trayectoria semanal — índice de actividad
                </span>
              </div>
              <CompareChart
                items={items}
                hoveredId={items.some((it) => it.team.id === hoveredId) ? hoveredId : null}
              />
            </div>

            <div className="flex min-w-0 flex-col rounded-[14px] border border-[#2D2B40] bg-[#0C0C16] px-[22px] py-5">
              <div className="mb-3.5 flex items-center justify-between gap-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#939393]">
                  Equipos
                </span>
                <span className="text-[11px] text-[#939393]">
                  <b className="font-bold text-white">{selected.length}</b>/{COMPARE_MAX}{" "}
                  seleccionados
                </span>
              </div>
              {/* El alto lo marca el gráfico: la lista no suma alto propio
                  (contain:size) y scrollea si hay más equipos. */}
              <div className="-mr-1.5 min-h-0 flex-[1_1_0] overflow-y-auto pr-1.5 [contain:size] [scrollbar-color:#2D2B40_transparent] [scrollbar-width:thin] max-[860px]:max-h-[420px] max-[860px]:flex-none max-[860px]:[contain:none]">
                {project.editions.map((edition, ei) => (
                  <div key={edition.month}>
                    {multiEdition && (
                      <div
                        className={cn(
                          "mb-2.5 text-[9.5px] font-bold uppercase tracking-[.14em] text-[#939393]",
                          ei === 0 ? "mt-1" : "mt-[18px]",
                        )}
                      >
                        Edición: {edition.month}
                      </div>
                    )}
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(132px,1fr))] gap-3">
                      {edition.teams.map((team) => {
                        const color = colorOf(team.id);
                        return (
                          <TeamTile
                            key={team.id}
                            team={team}
                            edition={edition}
                            selectedColor={color}
                            lastColor={lastColors[team.id]}
                            disabled={!color && full}
                            onToggle={() => toggleTeam(team.id)}
                            onHover={(hovering) =>
                              setHoveredId(hovering ? team.id : null)
                            }
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {project && items.length > 0 && (
        <div className="mt-7 border-t border-[#1C1B29] pt-6">
          <div className="mb-4">
            <h4 className="mb-[3px] text-[15px] font-extrabold text-white">
              Comparación en detalle
            </h4>
            <p className="text-[12.5px] text-[#939393]">
              Stack, mensajes y accesos rápidos de cada equipo que seleccionaste.
            </p>
          </div>
          {/* overflow-y-hidden: la animación de entrada (Reveal) baja cada
              tarjeta 28px; con overflow-x-auto eso generaba un scroll vertical
              mientras duraba. El scroll horizontal queda para pantallas chicas. */}
          <div className="grid grid-cols-[repeat(5,minmax(220px,1fr))] gap-4 overflow-x-auto overflow-y-hidden pb-2.5 pt-1">
            {items.map(({ team, edition, color }) => (
              <Reveal key={team.id}>
                <CompareCard
                  project={project}
                  edition={edition}
                  team={team}
                  color={color}
                  onPlay={onPlay}
                />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
