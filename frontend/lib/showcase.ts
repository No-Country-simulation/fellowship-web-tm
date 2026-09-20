export interface ShowcaseTeam {
  id: string;
  label: string;
  members: string[];
  meetings: number;
  deliverablesDone: number;
  deliverablesTotal: number;
}

// Los equipos son propios de cada edición: el "Equipo 1" de Julio no es el
// mismo que el "Equipo 1" de Abril, aunque hayan resuelto el mismo proyecto.
export interface ShowcaseEdition {
  month: string;
  teams: ShowcaseTeam[];
}

export interface ShowcaseProject {
  id: string;
  title: string;
  solves: string;
  vertical: string;
  editions: ShowcaseEdition[];
}

export const BRAND_COLORS = ["#FF0094", "#02BEEF", "#C06ECF", "#646CF6", "#0CFCA7"];

function hashSeed(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

// Mismo criterio que el mockup: cada vertical siempre cae en el mismo color.
export function verticalColor(vertical: string) {
  return BRAND_COLORS[hashSeed(vertical) % BRAND_COLORS.length];
}

export function countTeams(project: ShowcaseProject) {
  return project.editions.reduce((total, edition) => total + edition.teams.length, 0);
}

export function pluralize(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`;
}

// Datos de ejemplo (ilustrativos, no son datos reales del sitio). Reemplazar
// por la fuente real cuando exista.
export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "trazaverde",
    title: "TrazaVerde",
    solves:
      "Certifica prácticas agropecuarias sustentables con un QR verificable, sin intermediarios.",
    vertical: "AgTech",
    editions: [
      {
        month: "Julio 2026",
        teams: [
          { id: "tv-jul-1", label: "Equipo 1", members: ["Rocío", "Bruno", "Camila", "Diego"], meetings: 12, deliverablesDone: 4, deliverablesTotal: 4 },
          { id: "tv-jul-2", label: "Equipo 2", members: ["Valentina", "Marco", "Lucía"], meetings: 9, deliverablesDone: 3, deliverablesTotal: 4 },
          { id: "tv-jul-3", label: "Equipo 3", members: ["Iván", "Sofía", "Tomás", "Julieta", "Nicolás"], meetings: 15, deliverablesDone: 4, deliverablesTotal: 4 },
        ],
      },
      {
        month: "Abril 2026",
        teams: [
          { id: "tv-abr-1", label: "Equipo 1", members: ["Agustina", "Mateo", "Rocío"], meetings: 10, deliverablesDone: 4, deliverablesTotal: 4 },
          { id: "tv-abr-2", label: "Equipo 2", members: ["Bruno", "Camila", "Diego", "Valentina"], meetings: 11, deliverablesDone: 3, deliverablesTotal: 4 },
        ],
      },
    ],
  },
  {
    id: "saludconecta",
    title: "SaludConecta",
    solves:
      "Turnos y seguimiento post-consulta para centros de salud de baja conectividad.",
    vertical: "HealthTech",
    editions: [
      {
        month: "Julio 2026",
        teams: [
          { id: "sc-jul-1", label: "Equipo 1", members: ["Marco", "Lucía", "Iván"], meetings: 14, deliverablesDone: 4, deliverablesTotal: 4 },
          { id: "sc-jul-2", label: "Equipo 2", members: ["Sofía", "Tomás", "Julieta", "Nicolás"], meetings: 8, deliverablesDone: 3, deliverablesTotal: 4 },
        ],
      },
      {
        month: "Junio 2026",
        teams: [
          { id: "sc-jun-1", label: "Equipo 1", members: ["Agustina", "Mateo", "Rocío", "Bruno", "Camila"], meetings: 16, deliverablesDone: 4, deliverablesTotal: 4 },
          { id: "sc-jun-2", label: "Equipo 2", members: ["Diego", "Valentina", "Marco"], meetings: 9, deliverablesDone: 3, deliverablesTotal: 4 },
          { id: "sc-jun-3", label: "Equipo 3", members: ["Lucía", "Iván", "Sofía", "Tomás"], meetings: 12, deliverablesDone: 4, deliverablesTotal: 4 },
        ],
      },
    ],
  },
  {
    id: "logiflow",
    title: "LogiFlow",
    solves:
      "Optimiza rutas de última milla para pymes de logística con flotas chicas.",
    vertical: "Logistics",
    editions: [
      {
        month: "Julio 2026",
        teams: [
          { id: "lf-jul-1", label: "Equipo 1", members: ["Julieta", "Nicolás", "Agustina"], meetings: 11, deliverablesDone: 4, deliverablesTotal: 4 },
          { id: "lf-jul-2", label: "Equipo 2", members: ["Mateo", "Rocío", "Bruno", "Camila"], meetings: 13, deliverablesDone: 3, deliverablesTotal: 4 },
        ],
      },
    ],
  },
  {
    id: "agrodata",
    title: "AgroData",
    solves:
      "Predice rendimiento de cultivos combinando datos satelitales y clima local.",
    vertical: "AI/Machine Learning",
    editions: [
      {
        month: "Julio 2026",
        teams: [
          { id: "ad-jul-1", label: "Equipo 1", members: ["Diego", "Valentina", "Marco", "Lucía", "Iván"], meetings: 15, deliverablesDone: 4, deliverablesTotal: 4 },
          { id: "ad-jul-2", label: "Equipo 2", members: ["Sofía", "Tomás", "Julieta"], meetings: 10, deliverablesDone: 3, deliverablesTotal: 4 },
          { id: "ad-jul-3", label: "Equipo 3", members: ["Nicolás", "Agustina", "Mateo", "Rocío"], meetings: 12, deliverablesDone: 4, deliverablesTotal: 4 },
          { id: "ad-jul-4", label: "Equipo 4", members: ["Bruno", "Camila", "Diego"], meetings: 8, deliverablesDone: 3, deliverablesTotal: 4 },
        ],
      },
    ],
  },
];
