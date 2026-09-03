import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nocountry.tech'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/simulacion-laboral/paradigma`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/simulacion-laboral/como-funciona`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/simulacion-laboral/que-observamos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/simulacion-laboral/que-insights-genera`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // --- Rutas pendientes  ---
    // Descomentar cada bloque en el mismo commit en que esa pagina reciba
    // contenido real. No agregar antes: ver criterio en docs/seo-geo.md.
    //
    // "Para Talento" y "Para Instituciones" no tienen URL propia: en el
    // Navbar apuntan a /simulacion-laboral/paradigma y
    // /para-empresas/empleabilidad (ya listadas/pendientes mas abajo).
    // "Manifiesto", "Showcase" y "Casos de Exito" son anclas dentro de la
    // Home (/#manifiesto, /#showcase, /#casos), no rutas separadas — no
    // necesitan entrada en el sitemap. "Iniciar sesion" (/login) se deja
    // afuera a proposito: es una pagina de accion, no contenido a indexar.
    //
    // {
    //   url: `${baseUrl}/para-empresas/contratar`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/para-empresas/producto`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/para-empresas/expansion`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // },
  ]
}
