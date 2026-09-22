import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { type ShowcaseHackTeam } from "@/lib/showcase";

type Props = {
  hack: ShowcaseHackTeam;
  delay?: number;
  onSelect?: () => void;
};

export default function HackCard({ hack, delay = 0, onSelect }: Props) {
  const live = hack.status === "live";
  const sealInitials = hack.seal ? hack.seal.slice(0, 2).toUpperCase() : null;

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

        <div className="flex justify-end">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.05em]",
              live ? "text-[#0CFCA7]" : "text-[#939393]",
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 flex-none rounded-full",
                live ? "animate-pulse bg-[#0CFCA7]" : "bg-[#939393]",
              )}
            />
            {live ? "En curso" : "Finalizada"}
          </span>
        </div>

        <h3 className="line-clamp-2 font-[family-name:var(--font-dm-sans)] text-[16px] font-bold leading-[1.3] text-white">
          {hack.title}
        </h3>

        <p className="line-clamp-2 flex-1 text-[12.5px] leading-[1.5] text-[#9CA3AF]">
          {hack.solves}
        </p>

        <div className="flex items-center justify-between gap-2.5 border-t border-[#1C1B29] pt-3">
          <span className="flex min-w-0 items-center gap-1.5 text-[11px] font-semibold text-[#C7C9D3]">
            <span
              className="h-[7px] w-[7px] flex-none rounded-full"
              style={{ background: "#FF0094" }}
            />
            <span className="truncate">{hack.vertical}</span>
          </span>
          {hack.seal && sealInitials && (
            <span className="inline-flex flex-none items-center gap-1.5 whitespace-nowrap text-[10.5px] font-bold text-[#939393]">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border border-[#2D2B40] bg-[#0c0d21] text-[8.5px] font-extrabold text-[#02BEEF]">
                {sealInitials}
              </span>
              {hack.seal}
            </span>
          )}
        </div>
      </button>
    </Reveal>
  );
}