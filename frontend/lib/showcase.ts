export interface ShowcaseTeam {
  id: string;
  label: string;
  members: string[];
  meetings: number;
  deliverablesDone: number;
  deliverablesTotal: number;
  repoUrl?: string;
  demoUrl?: string;
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
  sector: string;
  need: string;
  solution: string;
  stack: string[];
  demoNotes: string[];
  editions: ShowcaseEdition[];
}

export type CountryCode = "AR" | "BR" | "CO" | "PE" | "MX" | "CL";

export const COUNTRY_NAMES: Record<CountryCode, string> = {
  AR: "Argentina",
  BR: "Brasil",
  CO: "Colombia",
  PE: "Perú",
  MX: "México",
  CL: "Chile",
};

export interface ShowcaseMember {
  name: string;
  role: string;
  country: CountryCode;
  // Índice de actividad (0-100), una entrada por semana.
  weeks: number[];
}

export interface ShowcaseTeamDetail {
  project: ShowcaseProject;
  edition: ShowcaseEdition;
  team: ShowcaseTeam;
  members: ShowcaseMember[];
  demoDuration: string;
  feedback: "sólido" | "en desarrollo";
}

export const BRAND_COLORS = ["#FF0094", "#02BEEF", "#C06ECF", "#646CF6", "#0CFCA7"];

function hashSeed(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function countTeams(project: ShowcaseProject) {
  return project.editions.reduce((total, edition) => total + edition.teams.length, 0);
}

export function pluralize(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`;
}

export function teamHref(team: ShowcaseTeam) {
  return `/sobre-nosotros/showcase/${team.id}`;
}

export function weeklyAverage(weeks: number[]) {
  return Math.round(weeks.reduce((sum, value) => sum + value, 0) / weeks.length);
}

export function getAllTeamIds() {
  return showcaseProjects.flatMap((project) =>
    project.editions.flatMap((edition) => edition.teams.map((team) => team.id))
  );
}

// Los integrantes solo tienen nombre en los datos de ejemplo; rol, país y
// trayectoria se generan de forma determinística a partir del equipo, así que
// siempre dan lo mismo. Reemplazar por los datos reales cuando existan.
const ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "UX/UI Designer",
  "Fullstack Developer",
  "QA Tester",
  "Data Analyst",
  "Product Manager",
];
const COUNTRY_CODES = Object.keys(COUNTRY_NAMES) as CountryCode[];
const WEEK_COUNT = 8;

function buildMember(teamId: string, name: string, index: number): ShowcaseMember {
  const seed = `${teamId}|${name}|${index}`;
  const step = 1 + (hashSeed(`${seed}|step`) % 4);
  let value = 45 + (hashSeed(`${seed}|base`) % 40);
  const weeks = Array.from({ length: WEEK_COUNT }, (_, week) => {
    if (week > 0) {
      const noise = (hashSeed(`${seed}|${week}`) % 5) - 2;
      value = Math.min(98, Math.max(30, value + step + noise));
    }
    return value;
  });
  return {
    name,
    role: ROLES[(hashSeed(teamId) + index) % ROLES.length],
    country: COUNTRY_CODES[hashSeed(`${seed}|country`) % COUNTRY_CODES.length],
    weeks,
  };
}

export function getTeamDetail(teamId: string): ShowcaseTeamDetail | undefined {
  for (const project of showcaseProjects) {
    for (const edition of project.editions) {
      const team = edition.teams.find((t) => t.id === teamId);
      if (!team) continue;

      const members = team.members.map((name, i) => buildMember(team.id, name, i));
      const average = weeklyAverage(members.flatMap((m) => m.weeks));
      const minutes = 4 + (hashSeed(`${team.id}|min`) % 5);
      const seconds = hashSeed(`${team.id}|sec`) % 60;

      return {
        project,
        edition,
        team,
        members,
        demoDuration: `${minutes}:${String(seconds).padStart(2, "0")}`,
        feedback: average >= 60 ? "sólido" : "en desarrollo",
      };
    }
  }
  return undefined;
}

// Datos de ejemplo (ilustrativos, no son datos reales del sitio). Reemplazar
// por la fuente real cuando exista.
const projectSeed: ShowcaseProject[] = [
  {
    id: "trazaverde",
    title: "TrazaVerde",
    solves:
      "Certifica prácticas agropecuarias sustentables con un QR verificable, sin intermediarios.",
    vertical: "AgTech",
    sector: "Sustentabilidad · Agro",
    need: "Los pequeños productores agropecuarios no tienen forma simple de certificar y comunicar sus prácticas sustentables a compradores mayoristas, perdiendo acceso a mercados que exigen trazabilidad de origen.",
    solution:
      "Una plataforma donde el productor registra sus prácticas (uso de agua, insumos, rotación de cultivos) y genera un certificado digital verificable que el comprador valida con un QR, sin intermediarios.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS S3", "Tailwind CSS"],
    demoNotes: [
      "El equipo muestra el flujo completo: un productor cargando sus prácticas de manejo de agua y suelo, la generación automática del certificado y la validación del QR desde el celular de un comprador ficticio.",
      "Los primeros minutos son contexto del problema; la demo funcional arranca después.",
    ],
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
    sector: "Salud · Conectividad",
    need: "Los centros de salud rurales trabajan con conexión inestable y sin un sistema simple para dar turnos ni hacer seguimiento después de la consulta, lo que aumenta el ausentismo y el abandono de tratamientos.",
    solution:
      "Una app que funciona sin conexión para agendar turnos y enviar recordatorios y seguimientos post-consulta, y que sincroniza los datos cuando vuelve la señal.",
    stack: ["React Native", "Node.js", "SQLite", "Firebase"],
    demoNotes: [
      "El equipo simula una jornada en un centro de salud sin señal: la recepcionista agenda turnos y, al volver la conexión, todo se sincroniza sin perder datos.",
      "Después muestra el seguimiento post-consulta y los recordatorios que recibe el paciente.",
    ],
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
    sector: "Logística · Pymes",
    need: "Las pymes de logística con flotas chicas arman a mano sus rutas de última milla, con recorridos poco eficientes y mucho gasto en combustible.",
    solution:
      "Un optimizador que recibe los pedidos del día y propone el orden de entrega más corto para cada vehículo, con ajustes en tiempo real ante demoras.",
    stack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Google Maps API"],
    demoNotes: [
      "El equipo carga una lista de pedidos del día y muestra cómo la herramienta reparte las entregas entre tres vehículos y dibuja el recorrido de cada uno.",
      "Luego simula una demora en una entrega para mostrar el reajuste de la ruta en vivo.",
    ],
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
    sector: "Agro · Datos",
    need: "Los productores deciden qué y cuándo sembrar con poca información sobre el rendimiento esperado, lo que vuelve riesgosa cada campaña.",
    solution:
      "Un modelo que combina imágenes satelitales y datos de clima local para predecir el rendimiento por lote y mostrarlo en un tablero simple.",
    stack: ["Python", "scikit-learn", "Pandas", "FastAPI", "Streamlit"],
    demoNotes: [
      "El equipo muestra el tablero con la predicción de rendimiento de tres lotes y explica qué variables pesan más en cada resultado.",
      "También compara la predicción con el rendimiento real de campañas anteriores para mostrar el margen de error.",
    ],
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

// Links de ejemplo (placeholders): todos los equipos tienen repositorio y video
// de Demo Day, así "Ver repositorio" y las opciones de "Compartir" se ven igual
// en todas las páginas de equipo. Son links falsos de example.com; reemplazar
// por los reales cuando existan (en los datos reales cada equipo trae el suyo).
export const showcaseProjects: ShowcaseProject[] = projectSeed.map((project) => ({
  ...project,
  editions: project.editions.map((edition) => ({
    ...edition,
    teams: edition.teams.map((team) => ({
      ...team,
      repoUrl: team.repoUrl ?? `https://example.com/${team.id}/repositorio`,
      demoUrl: team.demoUrl ?? `https://example.com/${team.id}/demo-day`,
    })),
  })),
}));
