import Link from "next/link";
import { ArrowUpRight, ChevronLeft, Play, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import TrayectoriaActividad from "@/components/organisms/shared/TrayectoriaActividad";
import GithubIcon from "@/components/organisms/sobre-nosotros/showcase/GithubIcon";
import LinkedinIcon from "@/components/organisms/sobre-nosotros/showcase/LinkedinIcon";
import ShareProjectDialog from "@/components/organisms/sobre-nosotros/showcase/ShareProjectDialog";
import {
  BRAND_COLORS,
  COUNTRY_NAMES,
  weeklyAverage,
  type ShowcaseTeamDetail,
} from "@/lib/showcase";

const blockLabel =
  "mb-4 text-[12.5px] font-extrabold uppercase tracking-[0.05em] text-[#939393]";
const cardClass = "rounded-2xl border border-[#1C1B29] bg-[#0C0C16]";

export default function TeamDetail({ detail }: { detail: ShowcaseTeamDetail }) {
  const { project, edition, team, members, demoDuration, feedback } = detail;

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal>
          <Link
            href="/sobre-nosotros/showcase"
            className="mt-[26px] inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#939393] transition-colors hover:text-white"
          >
            <ChevronLeft className="size-3.5" />
            Volver al showcase
          </Link>
        </Reveal>

        {/* Encabezado */}
        <Reveal>
          <div className="flex flex-col gap-4 border-b border-[#1C1B29] pt-[22px] pb-[30px] md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="mb-2 text-[clamp(24px,3.2vw,30px)] leading-[1.15] font-extrabold">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-[7px] border border-[#1C1B29] bg-[#0c0d21] px-[11px] py-[5px] text-[11.5px] font-bold text-[#C7C9D3]">
                  {team.label}
                </span>
                <span className="rounded-[7px] border border-[#1C1B29] bg-[#0c0d21] px-[11px] py-[5px] text-[11.5px] font-bold text-[#C7C9D3]">
                  {project.sector}
                </span>
                <span className="rounded-[7px] bg-[#02BEEF]/12 px-[11px] py-[5px] text-[11.5px] font-bold text-[#02BEEF]">
                  Simulación laboral · {edition.month}
                </span>
                <span className="inline-flex items-center gap-[5px] rounded-[7px] bg-[#0CFCA7]/12 px-[11px] py-[5px] text-[11.5px] font-bold text-[#0CFCA7]">
                  <TrendingUp className="size-3" />
                  Feedback del equipo: {feedback}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <ShareProjectDialog
                projectTitle={project.title}
                repoUrl={team.repoUrl}
                demoUrl={team.demoUrl}
              />
              {team.repoUrl ? (
                <a
                  href={team.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#FF0094]/35 px-[26px] py-3.5 text-sm font-medium text-[#FF0094] transition-colors hover:bg-[#FF0094]/20 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#02BEEF]"
                >
                  <GithubIcon className="size-4" />
                  Ver repositorio
                </a>
              ) : (
                // El botón se muestra siempre; si el equipo todavía no cargó
                // su repositorio, queda deshabilitado en vez de desaparecer.
                <span
                  aria-disabled="true"
                  title="Este equipo todavía no cargó su repositorio"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-[#FF0094]/35 px-[26px] py-3.5 text-sm font-medium text-[#FF0094] opacity-40"
                >
                  <GithubIcon className="size-4" />
                  Ver repositorio
                </span>
              )}
            </div>
          </div>
        </Reveal>

        {/* Necesidad y solución */}
        <Reveal>
          <div className="border-b border-[#1C1B29] py-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className={`${cardClass} p-[22px]`}>
                <h3 className="mb-2 text-[15px] font-bold text-[#FF0094]">
                  Necesidad del negocio
                </h3>
                <p className="text-sm leading-[1.6] text-[#9CA3AF]">{project.need}</p>
              </div>
              <div className={`${cardClass} p-[22px]`}>
                <h3 className="mb-2 text-[15px] font-bold text-[#02BEEF]">
                  Solución del equipo
                </h3>
                <p className="text-sm leading-[1.6] text-[#9CA3AF]">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Demo Day */}
        <Reveal>
          <div className="border-b border-[#1C1B29] py-8">
            <h2 className={blockLabel}>Demo Day</h2>
            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-[1.4fr_1fr]">
              <VideoFrame duration={demoDuration} url={team.demoUrl} />
              <div className={`${cardClass} flex flex-col gap-2.5 p-[18px]`}>
                <span className="text-xs font-bold text-[#939393]">
                  Qué se ve en el video
                </span>
                {project.demoNotes.map((note) => (
                  <p key={note} className="text-[13.5px] leading-[1.55] text-[#9CA3AF]">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stack */}
        <Reveal>
          <div className="border-b border-[#1C1B29] py-8">
            <h2 className={blockLabel}>Stack tecnológico</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#2D2B40] bg-[#0c0d21] px-[13px] py-[7px] text-xs font-bold text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Integrantes + evidencia conductual */}
        <Reveal>
          <div className="border-b border-[#1C1B29] py-8">
            <h2 className={blockLabel}>Equipo · {members.length} integrantes</h2>
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2.5">
                {members.map((member, i) => {
                  const color = BRAND_COLORS[i % BRAND_COLORS.length];
                  return (
                    <div
                      key={`${member.name}-${i}`}
                      className={`${cardClass} flex items-center gap-3.5 rounded-[14px] px-4 py-[13px]`}
                    >
                      <span
                        className="flex size-[38px] shrink-0 items-center justify-center rounded-full text-[12.5px] font-extrabold text-black"
                        style={{ backgroundColor: color }}
                      >
                        {member.name.slice(0, 1)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[14.5px] font-bold text-white">
                          {member.name} {member.lastName}
                        </p>
                        <p className="mt-px mb-[5px] text-xs text-[#9CA3AF]">{member.role}</p>
                        <p className="flex items-center gap-[7px] text-xs text-[#939393]">
                          <span
                            className={`fi fi-${member.country.toLowerCase()} rounded-[2px]`}
                            aria-hidden
                          />
                          {COUNTRY_NAMES[member.country]}
                        </p>
                        <div className="mt-2 flex items-center gap-1.5">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`LinkedIn de ${member.name}`}
                            aria-label={`LinkedIn de ${member.name}`}
                            className="flex size-[25px] shrink-0 items-center justify-center rounded-[7px] border border-[#2D2B40] bg-[#000115] text-[#939393] transition-colors hover:border-[#02BEEF] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#02BEEF]"
                          >
                            <LinkedinIcon className="size-[13px]" />
                          </a>
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`GitHub de ${member.name}`}
                            aria-label={`GitHub de ${member.name}`}
                            className="flex size-[25px] shrink-0 items-center justify-center rounded-[7px] border border-[#2D2B40] bg-[#000115] text-[#939393] transition-colors hover:border-[#02BEEF] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#02BEEF]"
                          >
                            <GithubIcon className="size-[13px]" />
                          </a>
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <p
                          className="text-lg leading-none font-extrabold"
                          style={{ color }}
                        >
                          {weeklyAverage(member.weeks)}%
                        </p>
                        <p className="mt-[3px] text-[9.5px] tracking-[0.04em] text-[#939393] uppercase">
                          Prom. semanal
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mismo panel "Trayectoria de Actividad" que la home, dentro de
                  la misma tarjeta (mismas clases que en EvidenciaConductual). */}
              <div className="bg-[#0c0d21] border border-white/5 rounded-[20px] p-6 md:p-8 h-[480px] flex flex-col justify-between shadow-2xl">
                <TrayectoriaActividad />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Simulaciones en vivo */}
        <Reveal>
          <div className="pt-8">
            <div className="flex flex-wrap items-center justify-between gap-3.5 rounded-[14px] border border-[#1C1B29] bg-[#0c0d21] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="size-2 shrink-0 animate-pulse rounded-full bg-[#0CFCA7]" />
                <span className="text-[13px] text-[#9CA3AF]">
                  <b className="text-white">3 simulaciones</b> corriendo en vivo ahora
                  mismo
                </span>
              </div>
              <Link
                href="/#live"
                className="flex items-center gap-[5px] text-[12.5px] font-bold text-[#02BEEF]"
              >
                Ver equipos en acción
                <ArrowUpRight className="size-3" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Marco del video de Demo Day. Si el equipo tiene link, abre el video en otra pestaña.
function VideoFrame({ duration, url }: { duration: string; url?: string }) {
  const frameClass =
    "relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-[#1C1B29] bg-[#0C0C16] bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,148,0.22),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(2,190,239,0.22),transparent_55%)]";
  const content = (
    <>
      <span className="flex size-14 items-center justify-center rounded-full bg-white/95">
        <Play className="size-5 fill-[#000115] text-[#000115]" />
      </span>
      <span className="absolute bottom-3 left-3 rounded-md bg-[#000115]/70 px-[9px] py-1 text-[11.5px] font-bold text-[#C7C9D3]">
        {duration} · Presentación en vivo
      </span>
    </>
  );

  if (!url) return <div className={frameClass}>{content}</div>;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ver el video del Demo Day"
      className={`${frameClass} focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#02BEEF]`}
    >
      {content}
    </a>
  );
}
