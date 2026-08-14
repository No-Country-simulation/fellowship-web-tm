import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      id="footer"
      className={cn(
        "w-full bg-zinc-950 text-zinc-300 py-16 border-t border-zinc-900 transition-colors duration-300",
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12">
          {/* Column 1: Brand details */}
          <div className="flex flex-col space-y-4">
            <span className="text-xl md:text-2xl font-black tracking-wider text-white uppercase select-none">
              No Country
            </span>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              La plataforma líder en simulación de trabajo real que potencia la inserción de talento calificado en LATAM.
            </p>
            {/* Social media links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Twitter"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all shadow-sm"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all shadow-sm"
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
                href="#"
                aria-label="GitHub"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all shadow-sm"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Para Talento */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase select-none">
              PARA TALENTO
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Simulaciones abiertas
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Historias de éxito
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Para Empresas */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase select-none">
              PARA EMPRESAS
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Contratar graduados
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Modelo de validación
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Ecosistema */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase select-none">
              ECOSISTEMA
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Instituciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  ShowCase
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Hackaton
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer Banda Inferior */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row md:justify-between items-center gap-4">
          <span className="text-xs text-zinc-500 font-medium select-none text-center md:text-left">
            © 2026 No Country. Todos los derechos reservados.
          </span>
          {/* Legal Links */}
          <div className="flex gap-6 text-xs font-semibold text-zinc-400">
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
              Politicas de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
