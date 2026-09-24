import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { verticalColor } from "@/lib/showcase";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  solves: string;
  vertical: string;
  meta?: ReactNode;
  delay?: number;
  onSelect?: () => void;
};

// Card neutra (estilo showcase-sheet-grande.html): fondo oscuro, línea de
// color arriba y punto junto al vertical, con el color propio de cada vertical.
export default function ShowcaseCard({
  title,
  solves,
  vertical,
  meta,
  delay = 0,
  onSelect,
}: Props) {
  const accent = verticalColor(vertical);

  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "relative flex h-full w-full cursor-pointer flex-col gap-[13px] overflow-hidden rounded-2xl border border-[#1C1B29] bg-[#0C0C16] p-[18px] text-left",
          "transition-[transform,border-color] duration-200 ease-in-out",
          "hover:-translate-y-[3px] hover:border-[#2D2B40]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02BEEF]",
        )}
      >
        <span
          aria-hidden
          className="absolute left-0 right-0 top-0 h-[3px]"
          style={{ background: accent }}
        />

        <h3 className="line-clamp-2 text-[16px] font-bold leading-[1.3] text-white">
          {title}
        </h3>

        <p className="line-clamp-2 flex-1 text-[12.5px] leading-[1.5] text-[#9CA3AF]">
          {solves}
        </p>

        <div className="flex items-center justify-between gap-2.5 border-t border-[#1C1B29] pt-3">
          <span className="flex min-w-0 items-center gap-1.5 text-[11px] font-semibold text-[#C7C9D3]">
            <span
              aria-hidden
              className="h-[7px] w-[7px] flex-none rounded-full"
              style={{ background: accent }}
            />
            <span className="truncate">{vertical}</span>
          </span>
          {meta && (
            <span className="inline-flex flex-none items-center gap-[5px] whitespace-nowrap text-[11px] font-bold text-[#939393]">
              {meta}
            </span>
          )}
        </div>
      </button>
    </Reveal>
  );
}
