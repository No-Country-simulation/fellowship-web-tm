"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";

type NavLink = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Para empresas", href: "/#empresas" },
  {
    label: "Simulación Laboral",
    children: [
      { label: "Paradigma", href: "/simulacion-laboral/paradigma" },
      { label: "Cómo funciona", href: "/simulacion-laboral/como-funciona" },
      { label: "Qué observamos", href: "/simulacion-laboral/que-observamos" },
      { label: "Qué insights genera", href: "/simulacion-laboral/que-insights-genera" },
    ],
  },
  { label: "Casos", href: "/#casos" },
  { label: "Showcase", href: "/#showcase" },
  { label: "Manifiesto", href: "/#manifiesto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  return (
    <nav className="bg-[#000115] border-b border-[#1c1b29] px-4 md:px-8">
      <div className="max-w-[1300px] mx-auto">
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:h-16 md:gap-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/logos/NoCountry.png"
              alt="No Country"
              width={120}
              height={40}
              priority
              className="object-contain"
            />
          </Link>

          {/* Links centrados en la columna central */}
          <div className="flex items-center justify-center gap-8 min-w-0">
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenuPrimitive.Root key={link.label}>
                  <DropdownMenuPrimitive.Trigger className="group flex items-center gap-1 text-[15px] font-medium text-[#9ca3af] hover:text-white transition outline-none data-[state=open]:text-white whitespace-nowrap">
                    {link.label}
                    <span className="inline-flex transition-transform duration-200 group-data-[state=open]:-rotate-180">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </DropdownMenuPrimitive.Trigger>
                  <DropdownMenuPrimitive.Portal>
                    <DropdownMenuPrimitive.Content
                      align="start"
                      sideOffset={16}
                      className="z-50 min-w-[220px] rounded-lg border border-[#1c1b29] bg-[#000115] p-1.5 shadow-lg shadow-black/40 origin-top data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
                    >
                      {link.children.map((child) => (
                        <DropdownMenuPrimitive.Item key={child.href} asChild>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-[#9ca3af] outline-none transition hover:bg-white/5 hover:text-white data-[highlighted]:bg-white/5 data-[highlighted]:text-white"
                          >
                            {child.label}
                          </Link>
                        </DropdownMenuPrimitive.Item>
                      ))}
                    </DropdownMenuPrimitive.Content>
                  </DropdownMenuPrimitive.Portal>
                </DropdownMenuPrimitive.Root>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  className="text-[15px] font-medium text-[#9ca3af] hover:text-white transition whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Login a la derecha, estilo correcto */}
          <Link
            href="/login"
            className="justify-self-end shrink-0 px-6 py-3 rounded-md text-sm font-medium transition bg-transparent text-[#FF0094] border border-[rgba(255,0,148,0.35)] hover:bg-[rgba(255,0,148,0.35)]"
          >
            Iniciar sesión
          </Link>
        </div>

        {/* Mobile top bar */}
        <div className="md:hidden flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src="/logos/NoCountry.png"
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

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => setMobileSubOpen(!mobileSubOpen)}
                    aria-expanded={mobileSubOpen}
                    className="flex items-center justify-between text-sm font-medium text-[#9ca3af] hover:text-white"
                  >
                    {link.label}
                    <span
                      className={`inline-flex transition-transform duration-200 ${mobileSubOpen ? "-rotate-180" : ""}`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  {mobileSubOpen && (
                    <div className="flex flex-col gap-3 pl-4 border-l border-[#1c1b29]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileSubOpen(false);
                          }}
                          className="text-sm font-medium text-[#9ca3af] hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-[#9ca3af] hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-6 py-3 rounded-md text-sm font-medium transition bg-transparent text-[#FF0094] border border-[rgba(255,0,148,0.35)] hover:bg-[rgba(255,0,148,0.35)]"
            >
              Iniciar sesión
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}