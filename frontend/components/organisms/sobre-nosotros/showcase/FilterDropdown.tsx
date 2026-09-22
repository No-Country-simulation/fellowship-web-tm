"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  className?: string;
};

export default function FilterDropdown({
  label,
  value,
  options,
  onChange,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  return (
    <div ref={ref} className={cn("relative flex-none", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-2 whitespace-nowrap rounded-lg border border-[#1C1B29] bg-[#0c0d21] px-3 py-2 text-[12.5px] font-semibold text-[#939393] transition",
          "hover:border-[#2D2B40] hover:text-white",
        )}
      >
        {label}: {value}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "-rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-30 flex min-w-[190px] flex-col gap-px rounded-xl border border-[#1C1B29] bg-[#0C0C16] p-1.5 shadow-2xl shadow-black/50">
          {options.map((opt) => {
            const active = opt === value;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={cn(
                  "w-full rounded-lg px-3 py-2 text-left text-[13px] transition",
                  active
                    ? "bg-[rgba(255,0,148,0.1)] font-bold text-white"
                    : "font-medium text-[#C7C9D3] hover:bg-[#0c0d21] hover:text-white",
                )}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}