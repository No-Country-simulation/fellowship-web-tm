## Sobre este proyecto

Este repo es la **landing page institucional de No Country**, construida en Next.js.

No Country es una plataforma de simulación laboral: equipos multidisciplinarios ejecutan un desafío real de una empresa durante varias semanas, y la plataforma captura evidencia real de cómo trabaja cada participante (actividad, peer review, entregables) — en vez de depender de un CV o una entrevista de una hora. Esa evidencia conecta a tres audiencias distintas: **talento** que necesita demostrar cómo trabaja, **empresas** que necesitan contratar sin apostar a ciegas, e **instituciones** que necesitan mostrar qué pasa con sus egresados después de formarlos.

Esta landing es la puerta de entrada pública para esas tres audiencias: instala el problema (por qué el CV no predice desempeño), explica el modelo, y dirige a cada visitante a su propio camino de conversión. La arquitectura completa de páginas y el argumento de cada sección están documentados en el doc de Fellowship del equipo — este README solo cubre cómo está organizado el código, no el contenido/copy de la landing en sí.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Estructura del proyecto

Este proyecto sigue **Atomic Design** para organizar los componentes de UI:

- `components/ui/` — átomos/primitivas de shadcn (button, avatar, table, chart, etc.). No se editan a mano, se agregan vía shadcn CLI.
- `components/organisms/` — bloques grandes y compuestos que arman la landing (Navbar, Hero, Footer, CasoOracle, FAQSection, etc.). Todo componente de sección de página va acá — no crear una carpeta `sections/` en paralelo.
- `app/` — rutas de Next.js (App Router). Cada `page.tsx` compone los organisms que necesita.

**Convención de nombres de assets** (`public/`):
- Subcarpetas por tipo: `public/logos/` (logos de empresas/partners), `public/people/` (fotos de personas para testimonios), `public/brand/` (assets propios de No Country).
- Nombres descriptivos en `kebab-case` (ej. `jorge-cobo.jpg`, `logos/alura.png`) — nunca dejar el nombre que genera una herramienta (`image-removebg-preview_2.png`, `descarga__3_.png`, etc.).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
