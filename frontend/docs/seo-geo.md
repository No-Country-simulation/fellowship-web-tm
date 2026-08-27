# SEO y GEO — No Country

Registro de las mejoras de SEO (buscadores tradicionales) y GEO (motores generativos/IA) implementadas en el proyecto, basado en el checklist de 27 ideas del doc `Ideas-SEO-GEO-NoCountry.docx` (categorías: 🟢 SEO+GEO, 🔵 solo SEO, 🟣 solo GEO).

**Cómo usar este archivo:** cada vez que se implemente una mejora nueva, agregarla en "Implementado" con el mismo formato (qué es, en qué archivos, qué hace). Así queda un registro compartido de qué se hizo y qué falta, sin tener que volver a auditar el proyecto entero cada vez.

---

## Implementado

### Metadata optimizada por página 🟢 SEO + GEO

Cada página define su propio `title`, `description` y URL canónica, en vez de heredar un genérico para todo el sitio.

- `app/layout.tsx` — `metadataBase` + `title` con template (`%s | No Country`) que se aplica como fallback global.
- `app/page.tsx` (home) — título, descripción y `alternates.canonical` propios.
- `app/para-empresas/contratar/page.tsx` — idem.
- `app/para-empresas/empleabilidad/page.tsx` — idem.
- **Pendiente:** las 4 páginas de `/simulacion-laboral/*` (paradigma, como-funciona, que-insights-genera, que-observamos) todavía heredan el título genérico del layout.

### Schema.org / JSON-LD 🟢 SEO + GEO

Información estructurada sobre la organización, para que buscadores e IA entiendan qué es No Country sin tener que inferirlo del texto.

- `lib/seo.ts` — define `organizationJsonLd` (`@type: Organization`) y `websiteJsonLd` (`@type: WebSite`).
- `app/layout.tsx` — inyecta los dos como `<script type="application/ld+json">` en el `<body>`, disponibles en todas las páginas.

### Open Graph / metadata social 🔵 SEO

- `app/opengraph-image.tsx` — genera la imagen de preview dinámicamente con `next/og` (1200×630, fondo de marca, nombre + descripción del sitio) en vez de depender de una imagen estática.
- Cada página con metadata propia (home, para-empresas/contratar, para-empresas/empleabilidad) incluye también su objeto `openGraph` (`title`, `description`, `url`, `siteName`, `type`).

### Sitemap.xml 🔵 SEO

- `app/sitemap.ts` — lista las rutas públicas reales: `/`, `/simulacion-laboral/paradigma`, `/para-empresas/contratar`, `/para-empresas/empleabilidad`. Se actualiza a mano cada vez que se agrega o renombra una ruta.

### Robots.txt 🔵 SEO

- `app/robots.ts` — permite el rastreo de `/`, bloquea `/api/`, apunta al sitemap.

### URLs descriptivas 🟢 SEO + GEO

Las rutas usan slugs legibles en vez de IDs (`/para-empresas/contratar`, `/simulacion-laboral/paradigma`), ya desde la reestructuración de rutas anterior.

---

## Pendiente (del checklist original, no implementado todavía)

- **Metadata en `/simulacion-laboral/*`** — las 4 páginas nuevas necesitan su propio `title`/`description`/`openGraph`, mismo patrón que ya se usa en `para-empresas/*`.
- **FAQPage JSON-LD** — el `FAQSection` ya tiene contenido real (11 preguntas), falta envolverlo en su propio schema `FAQPage` para que Google pueda mostrarlo como rich snippet.
- **Contenido basado en preguntas reales / comparaciones especializadas** (🟣 GEO) — evaluar si conviene expandir alguna de las páginas de `/simulacion-laboral/*` con más profundidad de contenido.
- **Fecha de última actualización visible** (🟣 GEO) — no implementado.
- **Accesibilidad (a11y)** (🟢 SEO + GEO) — no auditado todavía.
- **Enlazado interno** (🟢 SEO + GEO) — no auditado todavía.
- Todo lo que depende de terceros (Wikipedia/Wikidata, backlinks, medir menciones en IA con Mentio, presencia en comunidades) queda fuera del alcance de código — es trabajo de contenido/marketing, no de este repo.

## Notas técnicas
