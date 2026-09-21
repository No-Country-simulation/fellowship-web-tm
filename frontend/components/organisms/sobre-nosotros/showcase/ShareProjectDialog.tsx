"use client";

import { useState } from "react";
import { Dialog } from "radix-ui";
import { ImageIcon, Share2, Video, X } from "lucide-react";
import GithubIcon from "@/components/organisms/sobre-nosotros/showcase/GithubIcon";

interface ShareProjectDialogProps {
  projectTitle: string;
  repoUrl?: string;
  demoUrl?: string;
}

type CopiedKind = "repo" | "demo";

function ShareOption({
  icon,
  title,
  description,
  disabled,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="mb-2 flex w-full cursor-pointer items-center gap-3 rounded-xl border border-[#1C1B29] p-3 text-left transition-colors last:mb-0 hover:border-[#2D2B40] focus-visible:outline-2 focus-visible:outline-[#02BEEF] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-[#1C1B29]"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#0c0d21] text-[#02BEEF]">
        {icon}
      </span>
      <span>
        <span className="block text-[13.5px] font-bold text-white">{title}</span>
        <span className="text-[11.5px] text-[#939393]">{description}</span>
      </span>
    </button>
  );
}

export default function ShareProjectDialog({
  projectTitle,
  repoUrl,
  demoUrl,
}: ShareProjectDialogProps) {
  const [status, setStatus] = useState<{ kind: CopiedKind; ok: boolean } | null>(
    null
  );

  async function copy(kind: CopiedKind, url: string) {
    let ok = true;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      ok = false;
    }
    setStatus({ kind, ok });
    window.setTimeout(() => setStatus(null), 2000);
  }

  function describe(
    kind: CopiedKind,
    url: string | undefined,
    idle: string,
    missing: string
  ) {
    if (!url) return missing;
    if (status?.kind === kind) {
      return status.ok ? "¡Link copiado!" : "No se pudo copiar el link";
    }
    return idle;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="inline-flex cursor-pointer items-center gap-[7px] rounded-md border border-[#2D2B40] px-[22px] py-3.5 text-sm font-medium text-[#F9F9F9] transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#02BEEF]">
        <Share2 className="size-4" />
        Compartir proyecto
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#000115]/70 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 motion-reduce:animate-none" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-40px)] max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] border border-[#1C1B29] bg-[#0C0C16] p-[22px] text-white outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 motion-reduce:animate-none">
          <div className="mb-1 flex items-center justify-between">
            <Dialog.Title className="text-base font-bold">
              Compartir proyecto
            </Dialog.Title>
            <Dialog.Close
              aria-label="Cerrar"
              className="flex size-7 cursor-pointer items-center justify-center rounded-lg text-[#939393] transition-colors hover:bg-[#0c0d21] hover:text-white focus-visible:outline-2 focus-visible:outline-[#02BEEF]"
            >
              <X className="size-4" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="mb-4 text-[12.5px] leading-normal text-[#939393]">
            {projectTitle} no depende de un deploy en vivo — compartilo con estas
            piezas de respaldo.
          </Dialog.Description>

          <ShareOption
            disabled
            icon={<ImageIcon className="size-[17px]" />}
            title="Descargar pieza compartible"
            description="Próximamente — imagen de marca lista para redes"
          />
          <ShareOption
            disabled={!repoUrl}
            onClick={repoUrl ? () => copy("repo", repoUrl) : undefined}
            icon={<GithubIcon className="size-[17px]" />}
            title="Copiar link al repositorio"
            description={describe(
              "repo",
              repoUrl,
              "Repo público en GitHub — no se cae con el tiempo",
              "Todavía no hay repositorio cargado"
            )}
          />
          <ShareOption
            disabled={!demoUrl}
            onClick={demoUrl ? () => copy("demo", demoUrl) : undefined}
            icon={<Video className="size-[17px]" />}
            title="Copiar link al video de demo day"
            description={describe(
              "demo",
              demoUrl,
              "Muestra el proyecto funcionando de punta a punta",
              "Todavía no hay video cargado"
            )}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
