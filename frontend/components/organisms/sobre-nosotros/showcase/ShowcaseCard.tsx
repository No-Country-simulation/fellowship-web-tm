import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  solves: string;
  vertical: string;
  meta?: ReactNode;
  /** Fondo de la card: #FF0094 (simulación laboral) o #02BEEF (hackathone). */
  bgColor: string;
  delay?: number;
  onSelect?: () => void;
};

export default function ShowcaseCard({
  title,
  solves,
  vertical,
  meta,
  bgColor,
  delay = 0,
  onSelect,
}: Props) {
  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "group flex h-full w-full flex-col gap-[13px] rounded-2xl border border-transparent p-[18px] text-left",
          "transition-[transform,filter] duration-200",
          "hover:-translate-y-[3px] hover:brightness-110",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        )}
        style={{ backgroundColor: bgColor }}
      >
        <h3 className="line-clamp-2 font-[family-name:var(--font-dm-sans)] text-[16px] font-bold leading-[1.3] text-white">
          {title}
        </h3>

        <p className="line-clamp-2 flex-1 text-[12.5px] leading-[1.5] text-white/90">
          {solves}
        </p>

        <div className="flex items-center justify-between gap-2.5 border-t border-white/25 pt-3">
          <span className="flex min-w-0 items-center gap-1.5 text-[11px] font-semibold text-white/95">
            <span
              aria-hidden
              className="h-1.5 w-1.5 flex-none rounded-full bg-white/80"
            />
            <span className="truncate">{vertical}</span>
          </span>
          {meta && (
            <span className="inline-flex flex-none items-center gap-[5px] whitespace-nowrap text-[11px] font-bold text-white/90">
              {meta}
            </span>
          )}
        </div>
      </button>
    </Reveal>
  );
}