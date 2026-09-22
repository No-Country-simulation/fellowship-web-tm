import { cn } from "@/lib/utils";

type Status = "live" | "done";

type Props = {
  status: Status;
  className?: string;
};

export default function StatusBadge({ status, className }: Props) {
  const live = status === "live";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.05em]",
        live ? "text-[#0CFCA7]" : "text-[#939393]",
        className,
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
  );
}