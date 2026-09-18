# SEO y GEO — No Country

Registro de las mejoras de SEO (buscadores tradicionales) y GEO (motores generativos/IA) implementadas en el proyecto, basado en el checklist de 27 ideas del doc `Ideas-SEO-GEO-NoCountry.docx` (categorías: 🟢 SEO+GEO, 🔵 solo SEO, 🟣 solo GEO).

**Cómo usar este archivo:** cada vez que se implemente una mejora nueva, agregarla en "Implementado" con el mismo formato (qué es, en qué archivos, qué hace). Así queda un registro compartido de qué se hizo y qué falta, sin tener que volver a auditar el proyecto entero cada vez.

---

## Implementado

### Metadata optimizada por página 🟢 SEO + GEO

Cada página define su propio `title`, `description` y URL canónica, en vez de heredar un genérico para todo el sitio.

- `app/layout.tsx` — `metadataBase` + `title` con template (`%s | No Country`) que se aplica como fallback global.
- `app/page.tsx` (home) — título, descripción y `alternates.canonical` propios.
- `app/para-empresas/contratar/page.tsx` — idem (contenido todavía stub, description provisoria).
- `app/para-empresas/empleabilidad/page.tsx` — idem (contenido todavía stub, description provisoria).
- `app/simulacion-laboral/paradigma/page.tsx`, `como-funciona/page.tsx`, `que-insights-genera/page.tsx`, `que-observamos/page.tsx` — cada una con su propio title/description/canonical/openGraph.
- `app/para-instituciones/page.tsx` — idem, con copy basada en el Hero real.
- `app/sobre-nosotros/casos-exito/page.tsx` — idem, con los números reales del caso Oracle Next Education.
- `app/sobre-nosotros/showcase/page.tsx` — metadata cargada (stub), lista para cuando la página tenga contenido real.

### Schema.org / JSON-LD 🟢 SEO + GEO

Información estructurada sobre la organización y el contenido, para que buscadores e IA entiendan de qué trata cada cosa sin tener que inferirlo del texto.

- `lib/seo.ts` — define `organizationJsonLd` (`@type: Organization`) y `websiteJsonLd` (`@type: WebSite`).
- `app/layout.tsx` — inyecta los dos como `<script type="application/ld+json">` en el `<body>`, disponibles en todas las páginas.
- `components/organisms/home/FAQSection.tsx` — genera `faqJsonLd` (`@type: FAQPage`) a partir del mismo array `faqs` que renderiza el acordeón, así el schema nunca queda desincronizado del contenido visible. Solo vive en la Home, que es la única página con este componente.

### Open Graph / metadata social 🔵 SEO

- `app/opengraph-image.tsx` — genera la imagen de preview dinámicamente con `next/og` (1200×630, fondo de marca, nombre + descripción del sitio) en vez de depender de una imagen estática.
- Cada página con metadata propia (home, para-empresas/contratar, para-empresas/empleabilidad, simulacion-laboral/*, para-instituciones, sobre-nosotros/casos-exito) incluye también su objeto `openGraph` (`title`, `description`, `url`, `siteName`, `type`).

### Sitemap.xml 🔵 SEO

- `app/sitemap.ts` — lista las rutas públicas con contenido real: `/`, `/simulacion-laboral/paradigma`, `/simulacion-laboral/como-funciona`, `/simulacion-laboral/que-observamos`, `/simulacion-laboral/que-insights-genera`, `/para-instituciones`, `/sobre-nosotros/casos-exito`.
- **Criterio:** una URL entra al sitemap recién en el mismo commit en que la página tiene contenido real — no antes. Por eso `/para-empresas/contratar`, `/para-empresas/empleabilidad` y `/sobre-nosotros/showcase` (todavía `return null`) están afuera o comentadas; se agregan cuando se les cargue contenido. Se actualiza a mano cada vez que se agrega, renombra, o completa una ruta.

### Robots.txt 🔵 SEO

- `app/robots.ts` — permite el rastreo de `/`, bloquea `/api/`, apunta al sitemap.

### URLs descriptivas 🟢 SEO + GEO

Las rutas usan slugs legibles en vez de IDs (`/para-empresas/contratar`, `/simulacion-laboral/paradigma`, `/para-instituciones`, `/sobre-nosotros/casos-exito`), ya desde la reestructuración de rutas anterior.

### Fecha de última actualización visible 🟣 GEO (idea #23)

Tiene dos partes, para dos audiencias distintas: un texto visible (para el usuario) y un dato estructurado invisible (para buscadores/IA).

- `lib/lastModified.ts` — `getLastModified(filePath)` corre `git log -1 --format=%cI -- <archivo>` en build/request time y devuelve la fecha real del último commit que tocó ese `page.tsx`. No hay que mantenerla a mano. Si git no está disponible (ej. build sin historial), cae a `new Date()` como fallback.
- `components/organisms/shared/Footer.tsx` — acepta un prop opcional `lastUpdated: { date, url }`. Cuando se lo pasan, renderiza:
  - Texto visible junto a la línea de copyright: "Actualizado en {mes} {año}" (para el usuario, señal de confianza/vigencia).
  - JSON-LD `WebPage` con `dateModified` en ISO (invisible, para Google/IA — es el dato estructurado que Geoptie detectó como faltante en la auditoría del 3 de septiembre). Sin el prop, el footer se comporta igual que antes.
- Aplicado en Home, las 4 páginas de `/simulacion-laboral/*`, `/para-instituciones` y `/sobre-nosotros/casos-exito`, cada una le pasa su propio archivo a `getLastModified` (la fecha es específica de esa página, no global del sitio).
- **No aplicado** en `/para-empresas/contratar`, `/para-empresas/empleabilidad` y `/sobre-nosotros/showcase` — mismo criterio que el sitemap: no tiene sentido decir "actualizado" sobre una página sin contenido real.

### Archivo `llms.txt` 🟣 GEO (idea #26)

Índice en markdown plano pensado para que los modelos de lenguaje (ChatGPT, Perplexity, Gemini, Claude) lean información estructurada del sitio sin tener que interpretar el HTML. Es la primera acción concreta del checklist de GEO que ataca directamente la visibilidad en motores generativos.

- `public/llms.txt` — archivo estático servido por Next.js en la ruta `/llms.txt`. Contiene:
  - Definición de una línea de No Country (frase citable).
  - Párrafo de contexto sobre qué es la infraestructura de Simulación Laboral.
  - Audiencias (talento, empresas, instituciones) con una línea por cada una.
  - Modelo de negocio (simulación abierta, premium, staffing).
  - Casos de éxito (Oracle Next Education, Hackathon ONE G9) con números reales.
  - Links a las páginas principales del sitio.
  - Información de contacto y fecha de última actualización.
- **Cómo se usa:** los rastreadores de IA pueden consumirlo directamente cuando visitan el dominio, sin tener que inferir la información desde el contenido visual del sitio. El formato markdown plano es el estándar emergente que proponen varias herramientas de GEO (Mentio, Geoptie, etc.).
- **Actualización:** al ser un archivo estático, hay que editarlo a mano cuando cambian los datos clave (casos de éxito, modelo de negocio, audiencias). No requiere build ni deploy adicional — se sirve directo.

---