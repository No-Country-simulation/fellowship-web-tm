import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
      <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
        {children}
      </span>
    </div>
  );
}