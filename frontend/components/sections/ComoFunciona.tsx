"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProfileType = "talento" | "empresa" | "institucion";

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface ProfileContent {
  badge: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  steps: Step[];
}

const contentData: Record<ProfileType, ProfileContent> = {
  talento: {
    badge: "SIMULACIÓN LABORAL ABIERTA",
    title: "Simulación remota, ágil y de alto impacto",
    description:
      "Gratuita, 100% remoto. Equipos multidisciplinarios ejecutan desafíos reales durante 5 semanas. La plataforma captura datos de comportamiento en tiempo real. Cualquier persona puede participar.",
    ctaPrimary: "Quiero participar",
    ctaSecondary: "Preguntas frecuentes",
    steps: [
      {
        number: "01",
        title: "Inscripción",
        description: "Completá tus datos e intereses técnicos.",
      },
      {
        number: "02",
        title: "Asignación de Squad",
        description: "Te unís a un equipo multidisciplinario con PM, UX, Devs y QA.",
      },
      {
        number: "03",
        title: "Simulación Activa",
        description: "Desarrollo durante 5 semanas bajo marcos Scrum reales.",
      },
    ],
  },
  empresa: {
    badge: "TALENTO VALIDADO Y LISTO",
    title: "Evaluación de talento en entornos reales",
    description:
      "Reducí el riesgo y costos de contratación. Observá cómo trabajan los candidatos en equipo, bajo presión y con metodologías ágiles antes de incorporarlos a tu empresa.",
    ctaPrimary: "Contratar talento",
    ctaSecondary: "Preguntas frecuentes",
    steps: [
      {
        number: "01",
        title: "Definición del Perfil",
        description: "Configurá los requisitos técnicos y habilidades blandas requeridas.",
      },
      {
        number: "02",
        title: "Evaluación Activa",
        description: "Observá el desempeño del talento en squads simulando dinámicas reales.",
      },
      {
        number: "03",
        title: "Contratación Directa",
        description: "Accedé a reportes de comportamiento objetivos y contratá sin intermediarios.",
      },
    ],
  },
  institucion: {
    badge: "ALIANZA DE EMPLEABILIDAD",
    title: "Potenciá la empleabilidad de tu comunidad",
    description:
      "Conectá a tus estudiantes y egresados con simulaciones laborales reales al finalizar su formación. Ayudalos a dar el salto al mercado de trabajo con experiencia práctica comprobada.",
    ctaPrimary: "Crear alianza",
    ctaSecondary: "Preguntas frecuentes",
    steps: [
      {
        number: "01",
        title: "Integración",
        description: "Conectamos tu plan de estudios y requerimientos con nuestras simulaciones.",
      },
      {
        number: "02",
        title: "Simulación Activa",
        description: "Tus alumnos forman squads y construyen proyectos bajo marcos Scrum reales.",
      },
      {
        number: "03",
        title: "Inserción Laboral",
        description: "Visibilidad directa ante empresas aliadas y aceleración de perfiles técnicos.",
      },
    ],
  },
};

const tabs: { id: ProfileType; label: string }[] = [
  { id: "talento", label: "Talento" },
  { id: "empresa", label: "Empresa" },
  { id: "institucion", label: "Institución" },
];

export interface ComoFuncionaProps {
  defaultProfile?: ProfileType;
}

// Inner helper component to handle query parameters search inside Suspense
function ComoFuncionaParamsHandler({
  setActiveTab,
}: {
  setActiveTab: (tab: ProfileType) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const perfil = searchParams.get("perfil") || searchParams.get("tab");
    if (perfil) {
      const normalized = perfil
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Handles accents like 'institución' -> 'institucion'
      
      if (normalized === "talento") {
        setActiveTab("talento");
      } else if (normalized === "empresa") {
        setActiveTab("empresa");
      } else if (normalized === "institucion") {
        setActiveTab("institucion");
      }
    }
  }, [searchParams, setActiveTab]);

  return null;
}

function ComoFuncionaContent({ defaultProfile = "talento" }: ComoFuncionaProps) {
  const [activeTab, setActiveTab] = useState<ProfileType>(defaultProfile);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayTab, setDisplayTab] = useState<ProfileType>(defaultProfile);

  // Handle smooth transition when tab changes
  const handleTabChange = (tab: ProfileType) => {
    if (tab === activeTab) return;
    setIsTransitioning(true);
    setActiveTab(tab);
    setTimeout(() => {
      setDisplayTab(tab);
      setIsTransitioning(false);
    }, 180); // match transition duration
  };

  // Sync state if defaultProfile prop changes
  useEffect(() => {
    setActiveTab(defaultProfile);
    setDisplayTab(defaultProfile);
  }, [defaultProfile]);

  const content = contentData[displayTab];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* Search parameters reader wrapped in Suspense boundary */}
      <Suspense fallback={null}>
        <ComoFuncionaParamsHandler setActiveTab={handleTabChange} />
      </Suspense>

      {/* Header section */}
      <div className="text-center mb-12">
        <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-neutral-600 dark:text-neutral-400 uppercase">
          METODOLOGÍA ÁGIL
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white mt-2 tracking-tight">
          Cómo funciona
        </h2>

        {/* Tab controls */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1 bg-[#D4D4D8]/60 dark:bg-zinc-800/60 border border-neutral-300 dark:border-zinc-700 rounded-full select-none shadow-inner max-w-md w-full justify-between gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  "flex-1 text-center py-2 px-5 text-sm font-semibold rounded-full cursor-pointer transition-all duration-200",
                  activeTab === tab.id
                    ? "bg-[#9A9A9A] dark:bg-zinc-600 text-white shadow-sm"
                    : "text-neutral-700 dark:text-zinc-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-400/10 dark:hover:bg-zinc-700/20"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main card box with 2 columns layout */}
      <div className="border border-neutral-700 dark:border-zinc-700/80 bg-[#B3B3B3] dark:bg-zinc-900/65 rounded-[24px] p-6 md:p-12 shadow-lg transition-colors duration-300">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 transition-all duration-200 ease-in-out",
            isTransitioning ? "opacity-0 translate-y-2 scale-[0.995]" : "opacity-100 translate-y-0 scale-100"
          )}
        >
          {/* Left Column: Info and CTAs */}
          <div className="flex flex-col justify-between items-start space-y-6">
            <div className="space-y-4">
              {/* Badge with pulse dot animation */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-800 dark:bg-black/85 text-white text-[11px] font-bold tracking-wider rounded-full border border-zinc-700/40 shadow-sm uppercase select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {content.badge}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-tight">
                {content.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-800 dark:text-zinc-200 text-sm md:text-[15px] leading-relaxed max-w-lg">
                {content.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <Button
                className="h-12 px-6 bg-zinc-800 dark:bg-black/90 text-white hover:bg-zinc-900 dark:hover:bg-neutral-950 border border-zinc-700 dark:border-zinc-800 rounded-xl font-bold flex items-center justify-center gap-2 group cursor-pointer transition-all shadow-md active:translate-y-px"
                asChild
              >
                <a href="#contacto">
                  {content.ctaPrimary}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 border-2 border-neutral-700/60 dark:border-zinc-700 bg-neutral-200/40 dark:bg-zinc-800/20 text-neutral-900 dark:text-zinc-200 hover:bg-neutral-200/80 dark:hover:bg-zinc-800/60 rounded-xl font-bold cursor-pointer transition-all active:translate-y-px"
                asChild
              >
                <a href="#faq">{content.ctaSecondary}</a>
              </Button>
            </div>
          </div>

          {/* Right Column: Step Cards */}
          <div className="flex flex-col gap-4 justify-center">
            {content.steps.map((step, idx) => (
              <div
                key={step.number}
                className="flex items-center gap-5 p-4 md:p-5 bg-white/40 dark:bg-zinc-800/35 border border-white/20 dark:border-zinc-700/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/50 dark:hover:bg-zinc-800/45"
                style={{
                  transitionDelay: `${idx * 40}ms`
                }}
              >
                {/* Step number badge */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-600/35 dark:border-zinc-600 bg-neutral-100/50 dark:bg-zinc-800 text-base md:text-lg font-black text-neutral-800 dark:text-zinc-200 shrink-0 select-none shadow-sm">
                  {step.number}
                </div>

                {/* Step content */}
                <div className="flex flex-col space-y-0.5">
                  <h4 className="text-base md:text-lg font-extrabold text-neutral-950 dark:text-white tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-800 dark:text-zinc-300 font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ComoFunciona({ defaultProfile }: ComoFuncionaProps) {
  return (
    <section
      id="como-funciona"
      className="w-full bg-[#E5E5E5] dark:bg-black py-20 md:py-28 transition-colors duration-300 border-t border-b border-neutral-300/40 dark:border-zinc-900"
    >
      <ComoFuncionaContent defaultProfile={defaultProfile} />
    </section>
  );
}
