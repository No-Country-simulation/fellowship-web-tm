import { Users } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import {
  countTeams,
  pluralize,
  type ShowcaseProject,
} from "@/lib/showcase";

type Props = {
  project: ShowcaseProject;
  delay?: number;
  onSelect?: () => void;
};

export default function ProjectCard({ project, delay = 0, onSelect }: Props) {
  const teamCount = countTeams(project);
  const editions = project.editions.length;

  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "group relative flex h-full w-full flex-col gap-[13px] overflow-hidden rounded-2xl border border-[#1C1B29] bg-[#0C0C16] p-[18px] text-left",
          "transition-[border-color,transform] duration-200",
          "hover:-translate-y-[3px] hover:border-[#2D2B40]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02BEEF]",
        )}
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ background: "#FF0094" }}
        />

        <h3 className="line-clamp-2 font-[family-name:var(--font-dm-sans)] text-[16px] font-bold leading-[1.3] text-white">
          {project.title}
        </h3>

        <p className="line-clamp-2 flex-1 text-[12.5px] leading-[1.5] text-[#9CA3AF]">
          {project.solves}
        </p>

        <div className="flex items-center justify-between gap-2.5 border-t border-[#1C1B29] pt-3">
          <span className="flex min-w-0 items-center gap-1.5 text-[11px] font-semibold text-[#C7C9D3]">
            <span
              className="h-[7px] w-[7px] flex-none rounded-full"
              style={{ background: "#FF0094" }}
            />
            <span className="truncate">{project.vertical}</span>
          </span>
          <span className="inline-flex flex-none items-center gap-[5px] whitespace-nowrap text-[11px] font-bold text-[#939393]">
            <Users className="h-3 w-3" />
            {pluralize(teamCount, "equipo", "equipos")}
            {editions > 1 ? ` · ${editions} ediciones` : ""}
          </span>
        </div>
      </button>
    </Reveal>
  );
}