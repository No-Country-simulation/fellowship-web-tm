"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Search, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import FilterDropdown from "./FilterDropdown";
import ShowcaseCard from "./ShowcaseCard";
import CompareList from "./CompareList";
import ShowcasePlay from "./ShowcasePlay";
import ShowcasePagination from "./ShowcasePagination";
import ProjectSheet from "./ProjectSheet";
import {
  HACK_TEAMS,
  countTeams,
  filterShowcaseProjects,
  getAllProjectMonths,
  getAllProjectSectors,
  getAllProjectVerticals,
  pluralize,
  showcaseProjects,
  parseCompareSearch,
  teamHref,
  type CompareSelection,
  type ShowcaseProject,
  type ShowcaseSelection,
} from "@/lib/showcase";

const PAGE_SIZE = 6;

type Tab = "sim" | "hack" | "play" | "compare";

type Props = {
  onSelectItem?: (selection: ShowcaseSelection) => void;
};

const TABS: { value: Tab; label: ReactNode }[] = [
  { value: "sim", label: "Simulaciones laborales" },
  { value: "hack", label: "Hackathones" },
  {
    value: "play",
    label: (
      <>
        Showcase{" "}
        <span className="bg-gradient-to-br from-[#FF0094] to-[#02BEEF] bg-clip-text font-extrabold text-transparent">
          Play
        </span>
      </>
    ),
  },
  { value: "compare", label: "Comparar equipos" },
];

export default function Showcase({ onSelectItem }: Props) {
  const [tab, setTab] = useState<Tab>("sim");
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("Todos");
  const [vertical, setVertical] = useState("Todas");
  const [fecha, setFecha] = useState("Todos los meses");
  const [page, setPage] = useState(1);

  const [sheetProject, setSheetProject] = useState<ShowcaseProject | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const tabsRef = useRef<HTMLDivElement>(null);

  // Link compartido de "Comparar equipos" (?comparar=…&equipos=…): abre esa
  // pestaña con el proyecto y los equipos ya elegidos. Se lee al montar (y no
  // con useSearchParams) para que el resto de la página se siga generando
  // como HTML estático, que es lo que lee Google.
  const [compareInit, setCompareInit] = useState<CompareSelection | null>(null);
  useEffect(() => {
    const shared = parseCompareSearch(window.location.search);
    if (!shared) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincroniza con la URL una sola vez al entrar
    setCompareInit(shared);
    setTab("compare");
    tabsRef.current?.scrollIntoView({ block: "start" });
  }, []);

  const months = useMemo(() => getAllProjectMonths(), []);
  const verticals = useMemo(() => getAllProjectVerticals(), []);
  const sectors = useMemo(() => getAllProjectSectors(), []);

  const filteredProjects = useMemo(
    () => filterShowcaseProjects({ query, sector, vertical, month: fecha }),
    [query, sector, vertical, fecha],
  );

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = filteredProjects.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  // El botón "Ver en Showcase Play" de Comparar equipos todavía no apunta a
  // nada real: por ahora solo lleva a la pestaña de Showcase Play.
  function goToPlay() {
    setTab("play");
    tabsRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  // Handlers que resetean la página junto al filtro (sin useEffect)
  function handleQueryChange(v: string) {
    setQuery(v);
    setPage(1);
  }
  function handleSectorChange(v: string) {
    setSector(v);
    setPage(1);
  }
  function handleVerticalChange(v: string) {
    setVertical(v);
    setPage(1);
  }
  function handleFechaChange(v: string) {
    setFecha(v);
    setPage(1);
  }

  function handleProjectClick(project: ShowcaseProject) {
    setSheetProject(project);
    setSheetOpen(true);
    onSelectItem?.({ kind: "project", project });
  }

  return (
    <section className="px-6 pb-[110px] pt-[20px]">
      <div className="mx-auto max-w-[1120px]">
        {/* Tabs */}
        <div
          ref={tabsRef}
          role="group"
          aria-label="Tipo de proyecto"
          className="inline-flex flex-wrap gap-1 rounded-xl border border-[#1C1B29] bg-[#0C0C16] p-1"
        >
          {TABS.map((t) => {
            const active = t.value === tab;
            return (
              <button
                key={t.value}
                type="button"
                onClick={() => setTab(t.value)}
                className={cn(
                  "whitespace-nowrap rounded-[9px] px-4 py-2 text-[13px] transition",
                  active
                    ? "bg-[#0c0d21] font-semibold text-white shadow-[inset_0_0_0_1px_#2D2B40]"
                    : "font-semibold text-[#939393] hover:text-[#C7C9D3]",
                )}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Filtros + búsqueda */}
        {(tab === "sim" || tab === "hack") && (
          <>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <div className="flex min-w-[240px] flex-1 items-center gap-2.5 rounded-lg border border-[#1C1B29] bg-[#0C0C16] px-3.5 py-2.5 transition focus-within:border-[#FF0094]">
                <Search className="h-[15px] w-[15px] flex-none text-[#939393]" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleQueryChange(e.target.value)}
                  placeholder="Buscar por equipo, integrante o tecnología…"
                  className="w-full bg-transparent text-[13.5px] text-[#F9F9F9] placeholder:text-[#939393] focus:outline-none"
                />
              </div>

              <FilterDropdown
                label="Sector"
                value={sector}
                options={["Todos", ...sectors]}
                onChange={handleSectorChange}
              />
              <FilterDropdown
                label="Vertical"
                value={vertical}
                options={["Todas", ...verticals]}
                onChange={handleVerticalChange}
              />
              <FilterDropdown
                label="Fecha"
                value={fecha}
                options={["Todos los meses", ...months]}
                onChange={handleFechaChange}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pb-1 pt-6 text-[13px] text-[#9CA3AF]">
              <span>
                <strong className="text-[#F9F9F9]">
                  {tab === "hack" ? HACK_TEAMS.length : filteredProjects.length}
                </strong>{" "}
                {tab === "hack" ? "equipos encontrados" : "proyectos encontrados"}
              </span>
              <span>
                {tab === "hack"
                  ? "Hackathones · organizadas con empresas"
                  : `Simulaciones laborales · ${showcaseProjects.length} proyectos`}
              </span>
            </div>
          </>
        )}

        {/* Simulaciones */}
        {tab === "sim" && (
          <div className="pt-6">
            {pageItems.length === 0 ? (
              <div className="py-10 text-center text-[13.5px] text-[#939393]">
                No hay proyectos que coincidan con estos filtros.
              </div>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 md:grid-cols-[repeat(auto-fill,minmax(258px,1fr))]">
                {pageItems.map((p, i) => {
                  const teamCount = countTeams(p);
                  const editions = p.editions.length;
                  return (
                    <ShowcaseCard
                      key={p.id}
                      title={p.title}
                      solves={p.solves}
                      vertical={p.vertical}
                      delay={i * 60}
                      onSelect={() => handleProjectClick(p)}
                      meta={
                        <>
                          <Users className="h-[13px] w-[13px] flex-none" />
                          {pluralize(teamCount, "equipo", "equipos")}
                          {editions > 1 ? ` · ${editions} ediciones` : ""}
                        </>
                      }
                    />
                  );
                })}
              </div>
            )}
            <ShowcasePagination
              page={safePage}
              totalPages={totalPages}
              onChange={setPage}
            />
          </div>
        )}

        {/* Hackathones */}
        {tab === "hack" && (
          <div className="pt-6">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 md:grid-cols-[repeat(auto-fill,minmax(258px,1fr))]">
              {HACK_TEAMS.map((h, i) => {
                const sealInitials = h.seal ? h.seal.slice(0, 2).toUpperCase() : null;
                return (
                  <ShowcaseCard
                    key={h.id}
                    title={h.title}
                    solves={h.solves}
                    vertical={h.vertical}
                    delay={i * 60}
                    onSelect={
                      onSelectItem
                        ? () => onSelectItem({ kind: "hack", hack: h })
                        : undefined
                    }
                    meta={
                      h.seal && sealInitials ? (
                        <>
                          <span className="flex h-[18px] w-[18px] items-center justify-center flex-none rounded-[5px] border border-[#2D2B40] bg-[#181932] text-[8.5px] font-extrabold text-[#02BEEF]">
                            {sealInitials}
                          </span>
                          {h.seal}
                        </>
                      ) : undefined
                    }
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Showcase Play */}
        {tab === "play" && <ShowcasePlay />}

        {/* Comparar */}
        {tab === "compare" && (
          <CompareList
            key={compareInit ? "shared" : "default"}
            onPlay={goToPlay}
            initial={compareInit}
          />
        )}
      </div>

      {/* Sheet de Lorenzo, montado acá. teamHref viene de @/lib/showcase */}
      <ProjectSheet
        project={sheetProject}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        teamHref={teamHref}
      />
    </section>
  );
}