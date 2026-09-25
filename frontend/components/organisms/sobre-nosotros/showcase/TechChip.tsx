import type { ComponentType } from "react";
import { Cloud, Code } from "lucide-react";
import {
  siFastapi,
  siFirebase,
  siGooglemaps,
  siNextdotjs,
  siNodedotjs,
  siPandas,
  siPostgresql,
  siPython,
  siReact,
  siScikitlearn,
  siSqlite,
  siStreamlit,
  siTailwindcss,
  type SimpleIcon,
} from "simple-icons";

// Logos de las tecnologías (simple-icons). simple-icons no incluye AWS (lo
// sacaron por marca registrada), así que ese usa un ícono genérico de nube, y
// cualquier tecnología que no esté en el mapa usa uno genérico de código.
const BRAND_ICONS: Record<string, SimpleIcon> = {
  React: siReact,
  "React Native": siReact,
  "Next.js": siNextdotjs,
  "Node.js": siNodedotjs,
  PostgreSQL: siPostgresql,
  "Tailwind CSS": siTailwindcss,
  SQLite: siSqlite,
  Firebase: siFirebase,
  Python: siPython,
  FastAPI: siFastapi,
  "Google Maps API": siGooglemaps,
  "scikit-learn": siScikitlearn,
  Pandas: siPandas,
  Streamlit: siStreamlit,
};

const FALLBACK_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "AWS S3": Cloud,
};

function TechIcon({ name }: { name: string }) {
  const brand = BRAND_ICONS[name];
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
        <path d={brand.path} />
      </svg>
    );
  }
  const Fallback = FALLBACK_ICONS[name] ?? Code;
  return <Fallback className="h-4 w-4" />;
}

export default function TechChip({ name, color }: { name: string; color: string }) {
  return (
    <span
      aria-label={name}
      style={{ background: `${color}1f`, color, borderColor: `${color}55` }}
      className="group relative flex h-8 w-8 flex-none cursor-default items-center justify-center rounded-[9px] border transition-transform duration-150 ease-in-out hover:-translate-y-0.5"
    >
      <TechIcon name={name} />
      {/* Tooltip con el nombre al pasar el mouse */}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-[calc(100%+6px)] left-1/2 z-10 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-[#2D2B40] bg-[#181932] px-2 py-1 text-[11px] font-semibold text-white opacity-0 shadow-[0_8px_20px_rgba(0,0,0,.45)] transition-[opacity,translate] duration-150 group-hover:translate-y-0 group-hover:opacity-100"
      >
        {name}
      </span>
    </span>
  );
}
