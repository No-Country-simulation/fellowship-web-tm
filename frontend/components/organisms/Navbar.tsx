"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Para Talento", href: "/#talento" },
  { label: "Para empresas", href: "/#empresas" },
  { label: "Simulación Laboral", href: "/#simulacion" },
  { label: "Casos", href: "/#casos" },
  { label: "Showcase", href: "/#showcase" },
  { label: "Manifiesto", href: "/#manifiesto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#000115] border-b border-[#1c1b29] px-4 md:px-8">
      <div className="max-w-[1300px] mx-auto">
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:h-16">
          <Link href="/" className="justify-self-start">
            <Image
              src="/icon.png"
              alt="No Country"
              width={120}
              height={40}
              priority
              className="object-contain"
            />
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-[#9ca3af] hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/login"
            className="justify-self-end border border-[#ff00a0] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#ff00a0] hover:text-black transition"
          >
            Iniciar sesión
          </Link>
        </div>

        <div className="md:hidden flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src="/icon.png"
              alt="No Country"
              width={100}
              height={32}
              priority
              className="object-contain"
            />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-[#9ca3af] hover:bg-white/10 rounded"
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#9ca3af] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-white"
            >
              Iniciar sesión
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}