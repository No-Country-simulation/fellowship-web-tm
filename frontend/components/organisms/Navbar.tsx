"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "FAQ'S", href: "/#faqs" },
  { label: "Showcase", href: "/#showcase" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-300/50 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Isotipo / Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded bg-neutral-800 dark:bg-zinc-200" />
            <span className="font-bold text-neutral-900 dark:text-white">No Country</span>
          </Link>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-700 dark:text-zinc-300 hover:text-neutral-900 dark:hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-bold text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-zinc-400 transition"
            >
              Iniciar sesión
            </Link>
          </div>

          {/* Botón hamburguesa mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded text-neutral-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Menú mobile */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-neutral-700 dark:text-zinc-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-sm font-bold text-neutral-900 dark:text-white"
            >
              Iniciar sesión
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}