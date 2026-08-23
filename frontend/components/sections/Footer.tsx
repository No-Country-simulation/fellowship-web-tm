import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      id="footer"
      className={cn(
        "w-full bg-[#05040d] text-zinc-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden transition-colors duration-300",
        className
      )}
    >
      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF0094]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#02BEEF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative rotated geometric diamonds */}
      <div className="absolute top-20 -left-20 w-64 h-64 border border-white/5 rounded-[40px] rotate-45 pointer-events-none hidden lg:block select-none" />
      <div className="absolute bottom-20 -right-20 w-64 h-64 border border-white/5 rounded-[40px] rotate-45 pointer-events-none hidden lg:block select-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Integrated CTA Hero Banner Card */}
        

        {/* 4 Navigation Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Column 1: Brand (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col space-y-5 pr-0 lg:pr-8">
            <Link href="/" className="inline-block self-start group">
              <Image
                src="/icon.png"
                alt="No Country Logo"
                width={160}
                height={48}
                unoptimized
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              La plataforma líder en simulación de trabajo real que potencia la inserción de talento calificado en LATAM.
            </p>

            {/* Social media links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://chat.whatsapp.com/I4LvahrbJLH3SYMd2WFrkp?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.483 1.332 5.001L2 22l5.143-1.337c1.472.802 3.136 1.226 4.864 1.227h.005c5.505 0 9.988-4.478 9.99-9.985 0-2.667-1.039-5.176-2.927-7.062A9.923 9.923 0 0 0 12.012 2zm5.795 14.153c-.244.688-1.42 1.314-1.956 1.365-.503.048-1.156.072-3.665-.964-3.21-1.326-5.267-4.606-5.427-4.82-.16-.214-1.306-1.74-1.306-3.32 0-1.58.823-2.358 1.116-2.68.293-.322.639-.403.852-.403.214 0 .428.002.614.011.199.01.464-.075.726.554.267.641.91 2.222.99 2.383.08.16.133.348.026.561-.106.214-.16.347-.32.534-.16.187-.336.417-.48.56-.16.16-.327.334-.141.653.187.32.83 1.368 1.782 2.217 1.225 1.093 2.257 1.432 2.577 1.593.32.16.507.133.694-.08.187-.213.799-.933 1.012-1.253.213-.32.427-.267.72-.16.293.107 1.866.88 2.186 1.04.32.16.533.24.613.373.08.133.08.773-.164 1.461z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/nocountrytalent/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:bg-sky-500/10 hover:border-sky-500/40 transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nocountry.tech/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:bg-[#FF0094]/10 hover:border-[#FF0094]/40 transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Para Talento */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase select-none flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF0094]" />
              PARA TALENTO
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link
                  href="/talento"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 block py-0.5"
                >
                  Simulaciones abiertas
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 block py-0.5"
                >
                  Historias de éxito
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 block py-0.5"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Para Empresas */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase select-none flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#02BEEF]" />
              PARA EMPRESAS
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link
                  href="/empresas/contratar"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 block py-0.5"
                >
                  Contratar graduados
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 block py-0.5"
                >
                  Modelo de validación
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Ecosistema */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase select-none flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              ECOSISTEMA
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 block py-0.5"
                >
                  Instituciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 block py-0.5"
                >
                  ShowCase
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 block py-0.5"
                >
                  Hackaton
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 block py-0.5"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer Banda Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:justify-between items-center gap-4">
          <span className="text-xs text-zinc-500 font-medium select-none text-center md:text-left">
            © 2026 No Country. Todos los derechos reservados.
          </span>
          {/* Legal Links */}
          <div className="flex gap-6 text-xs font-medium text-zinc-400">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Términos de servicio
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Políticas de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
