"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import ProjectSheet from "@/components/organisms/sobre-nosotros/showcase/ProjectSheet";
import {
  countTeams,
  pluralize,
  showcaseProjects,
  teamHref,
  verticalColor,
  type ShowcaseProject,
} from "@/lib/showcase";

// Mini grilla de proyectos para probar el sheet mientras se arma el resto de
// la página. Cuando exista el grid real del showcase, las cards de ahí abren
// el mismo <ProjectSheet /> y este componente se puede borrar.
export default function ProyectosPreview() {
  const [selected, setSelected] = useState<ShowcaseProject | null>(null);
  const [open, setOpen] = useState(false);

  function openProject(project: ShowcaseProject) {
    setSelected(project);
    setOpen(true);
  }

  return (
    <section className="border-t border-[#1C1B29] py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <h2 className="text-[22px] font-extrabold">Proyectos</h2>
        <p className="mt-2 max-w-[580px] text-[13.5px] leading-relaxed text-[#9CA3AF]">
          Tocá un proyecto para ver los equipos que lo resolvieron.
        </p>

        <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 md:grid-cols-[repeat(auto-fill,minmax(258px,1fr))]">
          {showcaseProjects.map((project) => {
            const accent = verticalColor(project.vertical);
            const teams = countTeams(project);
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => openProject(project)}
                className="relative flex cursor-pointer flex-col gap-[13px] overflow-hidden rounded-2xl border border-[#1C1B29] bg-[#0C0C16] p-[18px] text-left transition duration-200 hover:-translate-y-[3px] hover:border-[#2D2B40] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#02BEEF]"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ backgroundColor: accent }}
                />
                <span className="line-clamp-2 text-base font-bold leading-[1.3] text-white">
                  {project.title}
                </span>
                <span className="line-clamp-2 flex-1 text-[12.5px] leading-normal text-[#9CA3AF]">
                  {project.solves}
                </span>
                <span className="flex items-center justify-between gap-2.5 border-t border-[#1C1B29] pt-3">
                  <span className="flex min-w-0 items-center gap-1.5 truncate text-[11px] font-semibold text-[#C7C9D3]">
                    <span
                      className="size-[7px] shrink-0 rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                    {project.vertical}
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-[5px] whitespace-nowrap text-[11px] font-bold text-[#939393]">
                    <Users className="size-[13px]" />
                    {pluralize(teams, "equipo", "equipos")}
                    {project.editions.length > 1 &&
                      ` · ${project.editions.length} ediciones`}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <ProjectSheet
        project={selected}
        open={open}
        onOpenChange={setOpen}
        teamHref={teamHref}
      />
    </section>
  );
}
