"use client";

import Link from "next/link";
import { Users, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  BRAND_COLORS,
  countTeams,
  pluralize,
  type ShowcaseProject,
  type ShowcaseTeam,
} from "@/lib/showcase";
import { cn } from "@/lib/utils";

interface ProjectSheetProps {
  project: ShowcaseProject | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Si se pasa, cada equipo es un link a su página. */
  teamHref?: (team: ShowcaseTeam) => string;
}

const rowClass =
  "block w-full rounded-[14px] border border-[#1C1B29] bg-[#0c0d21] px-4 py-[15px] text-left";

function TeamRow({
  team,
  href,
}: {
  team: ShowcaseTeam;
  href?: string;
}) {
  const body = (
    <>
      <p className="mb-[11px] text-[14.5px] font-bold text-white">{team.label}</p>
      <div className="flex">
        {team.members.map((name, i) => (
          <span
            key={`${name}-${i}`}
            title={name}
            className="-ml-[9px] flex size-8 items-center justify-center rounded-full border-2 border-[#0c0d21] text-[11px] font-bold text-black first:ml-0"
            style={{ backgroundColor: BRAND_COLORS[i % BRAND_COLORS.length] }}
          >
            {name.slice(0, 1)}
          </span>
        ))}
      </div>
      <p className="mt-2.5 text-[11.5px] text-[#939393]">
        {team.meetings} reuniones · {team.deliverablesDone}/{team.deliverablesTotal} entregables
      </p>
    </>
  );

  if (!href) return <div className={rowClass}>{body}</div>;

  return (
    <Link
      href={href}
      className={cn(
        rowClass,
        "transition duration-200 hover:-translate-y-0.5 hover:border-[#2D2B40] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02BEEF]"
      )}
    >
      {body}
    </Link>
  );
}

export default function ProjectSheet({
  project,
  open,
  onOpenChange,
  teamHref,
}: ProjectSheetProps) {
  const totalTeams = project ? countTeams(project) : 0;
  const multiEdition = !!project && project.editions.length > 1;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {project && (
        <SheetContent>
          <div className="flex items-start justify-between gap-3.5">
            <div>
              <p className="mb-[7px] text-[11px] font-bold uppercase tracking-[0.06em] text-[#939393]">
                {project.vertical}
              </p>
              <SheetTitle className="text-[22px] leading-[1.2]">
                {project.title}
              </SheetTitle>
            </div>
            <SheetClose
              aria-label="Cerrar"
              className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-lg text-[#939393] transition hover:bg-[#0c0d21] hover:text-white focus-visible:outline-2 focus-visible:outline-[#02BEEF]"
            >
              <X className="size-4" />
            </SheetClose>
          </div>

          <SheetDescription className="mt-3.5 text-sm leading-[1.65]">
            {project.solves}
          </SheetDescription>

          <div className="mt-[18px] flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-[5px] whitespace-nowrap rounded-full border border-[#2D2B40] bg-[#0c0d21] px-3 py-1.5 text-[11.5px] font-bold text-[#C7C9D3]">
              <Users className="size-[13px]" />
              {pluralize(totalTeams, "equipo participante", "equipos participantes")}
            </span>
            <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#2D2B40] bg-[#0c0d21] px-3 py-1.5 text-[11.5px] font-bold text-[#C7C9D3]">
              {multiEdition
                ? `${project.editions.length} ediciones`
                : `Simulación laboral de ${project.editions[0].month}`}
            </span>
          </div>

          <h4 className="mt-7 mb-4 text-[12.5px] font-extrabold uppercase tracking-[0.05em] text-[#939393]">
            Equipos que participaron
          </h4>

          {/* Con más de una edición, los equipos se agrupan por mes para que
              quede claro que "Equipo 1" de Julio no es el de Abril. */}
          <div className="flex flex-col">
            {project.editions.map((edition) => (
              <div
                key={edition.month}
                className="flex flex-col gap-2.5 [&+&]:mt-3 [&+&]:border-t [&+&]:border-[#1C1B29] [&+&]:pt-5"
              >
                {multiEdition && (
                  <p className="text-[13px] font-bold text-[#C7C9D3]">
                    Simulación laboral de {edition.month}
                  </p>
                )}
                {edition.teams.map((team) => (
                  <TeamRow
                    key={team.id}
                    team={team}
                    href={teamHref?.(team)}
                  />
                ))}
              </div>
            ))}
          </div>
        </SheetContent>
      )}
    </Sheet>
  );
}
