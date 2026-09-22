"use client";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function ShowcasePagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;

  const iconBtn =
    "flex h-6 w-6 flex-none items-center justify-center rounded-md text-[#939393] transition hover:bg-[#0c0d21] hover:text-[#C7C9D3] disabled:opacity-30 disabled:pointer-events-none";

  return (
    <div className="mt-4 flex items-center justify-end gap-0.5">
      <button
        type="button"
        aria-label="Primera página"
        disabled={page === 1}
        onClick={() => onChange(1)}
        className={iconBtn}
      >
        <ChevronsLeft className="h-3 w-3" />
      </button>
      <button
        type="button"
        aria-label="Página anterior"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={iconBtn}
      >
        <ChevronLeft className="h-3 w-3" />
      </button>

      <div className="mx-0.5 flex items-center gap-px">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
          const active = p === page;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              className={cn(
                "min-w-6 rounded-md px-1 py-0 text-[11.5px] font-semibold tabular-nums transition",
                active
                  ? "bg-[#0c0d21] font-bold text-white shadow-[inset_0_0_0_1px_#2D2B40]"
                  : "text-[#939393] hover:bg-[#0c0d21] hover:text-[#C7C9D3]",
              )}
              style={{ height: 24 }}
            >
              {p}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Página siguiente"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className={iconBtn}
      >
        <ChevronRight className="h-3 w-3" />
      </button>
      <button
        type="button"
        aria-label="Última página"
        disabled={page === totalPages}
        onClick={() => onChange(totalPages)}
        className={iconBtn}
      >
        <ChevronsRight className="h-3 w-3" />
      </button>
    </div>
  );
}