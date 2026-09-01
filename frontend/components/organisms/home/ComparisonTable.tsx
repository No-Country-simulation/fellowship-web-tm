import React from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface RowData {
  id: string;
  method: string | React.ReactNode;
  observes: string;
  contextReal: boolean | "pink" | "turquoise";
  sustained: boolean | "pink" | "turquoise";
  evidence: boolean | "pink" | "turquoise";
  highlighted?: boolean;
}

const rows: RowData[] = [
  {
    id: "cv",
    method: "CV",
    observes: "Declaración propia",
    contextReal: false,
    sustained: false,
    evidence: false,
  },
  {
    id: "interview",
    method: "Entrevista",
    observes: "Snapshot de un momento",
    contextReal: false,
    sustained: false,
    evidence: false,
  },
  {
    id: "assessment",
    method: "Assessment",
    observes: "Evaluación aislada",
    contextReal: false,
    sustained: false,
    evidence: false,
  },
  {
    id: "bootcamp",
    method: "Bootcamp",
    observes: "Habilidades enseñadas",
    contextReal: false,
    sustained: false,
    evidence: false,
  },
  {
    id: "internship",
    method: "Pasantía",
    observes: "Desempeño post-contratación",
    contextReal: "pink",
    sustained: "pink",
    evidence: false,
  },
  {
    id: "nocountry",
    method: (
      <div className="flex items-center select-none">
        <Image
          src="/logos/NoCountry.png"
          alt="No Country"
          width={100}
          height={32}
          className="object-contain h-[22px] w-auto"
        />
      </div>
    ),
    observes: "Comportamiento en ejecución real",
    contextReal: "turquoise",
    sustained: "turquoise",
    evidence: "turquoise",
    highlighted: true,
  },
];

export default function ComparisonTable() {
  const renderMark = (value: boolean | "pink" | "turquoise") => {
    if (value === "pink") {
      return (
        <span className="text-[#FF0094] font-black text-lg select-none">✓</span>
      );
    }
    if (value === "turquoise" || value === true) {
      return (
        <span className="text-[#02BEEF] font-black text-lg select-none">✓</span>
      );
    }
    return (
      <span className="text-zinc-400 font-extrabold text-base select-none">✕</span>
    );
  };

  return (
    <section
      id="un-cambio-de-paradigma"
      className="w-full bg-[#fcfcfc] py-20 md:py-28 text-zinc-900 border-b border-zinc-100"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Badge */}
        <div className="flex items-center gap-3 mb-6 select-none">
          <div className="h-[2px] w-6 bg-gradient-to-r from-[#FF0094] to-[#02BEEF] rounded-full shrink-0" />
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
            SIMULACION LABORAL
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-[40px] font-bold text-zinc-900 tracking-tight leading-tight mb-3">
            Un cambio de paradigma.
          </h2>
          <p className="text-sm md:text-[15px] text-zinc-500 max-w-3xl leading-relaxed">
            Así se diferencia la Simulación Laboral de otros modelos de validación de talento:
          </p>
        </div>

        {/* Table Container with custom overflow control */}
        <div className="w-full border border-zinc-200/60 rounded-2xl overflow-hidden shadow-sm bg-white">
          <div className="w-full overflow-x-auto">
            <Table className="min-w-[800px] w-full border-collapse">
              <TableHeader className="bg-zinc-50/50">
                <TableRow className="border-b border-zinc-100 hover:bg-transparent">
                  <TableHead className="text-[11px] font-black tracking-widest text-zinc-600 uppercase py-4 px-6 h-auto text-left">
                    MÉTODO
                  </TableHead>
                  <TableHead className="text-[11px] font-black tracking-widest text-zinc-600 uppercase py-4 px-6 h-auto text-left">
                    QUÉ OBSERVA
                  </TableHead>
                  <TableHead className="text-[11px] font-black tracking-widest text-zinc-600 uppercase py-4 px-6 h-auto text-center">
                    CONTEXTO REAL
                  </TableHead>
                  <TableHead className="text-[11px] font-black tracking-widest text-zinc-600 uppercase py-4 px-6 h-auto text-center">
                    SOSTENIDO EN EL TIEMPO
                  </TableHead>
                  <TableHead className="text-[11px] font-black tracking-widest text-zinc-600 uppercase py-4 px-6 h-auto text-center">
                    EVIDENCIA ANTES DE CONTRATAR
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className={cn(
                      "border-b border-zinc-100 transition-colors duration-200",
                      row.highlighted
                        ? "bg-gradient-to-r from-[#FF0094]/[0.03] to-[#02BEEF]/[0.01] hover:from-[#FF0094]/[0.05] hover:to-[#02BEEF]/[0.02] border-l-[4px] border-l-[#FF0094] border-b-zinc-200/60"
                        : "hover:bg-zinc-50/40 border-l-[4px] border-l-transparent"
                    )}
                  >
                    {/* Método */}
                    <TableCell className={cn(
                      "py-4 px-6 text-sm font-semibold h-14 text-left",
                      row.highlighted ? "text-zinc-950 font-black" : "text-zinc-800"
                    )}>
                      {row.method}
                    </TableCell>

                    {/* Qué Observa */}
                    <TableCell className={cn(
                      "py-4 px-6 text-sm font-medium h-14 text-left",
                      row.highlighted ? "text-zinc-800 font-bold" : "text-zinc-500"
                    )}>
                      {row.observes}
                    </TableCell>

                    {/* Contexto Real */}
                    <TableCell className="py-4 px-6 h-14 text-center">
                      {renderMark(row.contextReal)}
                    </TableCell>

                    {/* Sostenido en el Tiempo */}
                    <TableCell className="py-4 px-6 h-14 text-center">
                      {renderMark(row.sustained)}
                    </TableCell>

                    {/* Evidencia Antes de Contratar */}
                    <TableCell className="py-4 px-6 h-14 text-center">
                      {renderMark(row.evidence)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

      </div>
    </section>
  );
}
