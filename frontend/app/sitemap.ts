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
    {
      url: `${baseUrl}/para-instituciones`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre-nosotros/casos-exito`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // --- Rutas pendientes  ---
    // Descomentar cada bloque en el mismo commit en que esa pagina reciba
    // contenido real. No agregar antes: ver criterio en docs/seo-geo.md.
    //
    // "Para Talento" sigue sin URL propia: en el Navbar apunta a
    // /simulacion-laboral/paradigma. "Para Instituciones" y "Casos de
    // Exito" SI tienen ruta propia ahora (ver arriba) — dejaron de ser
    // alias/anclas. "Manifiesto" sigue siendo un ancla dentro de la Home
    // (/#manifiesto), no una ruta separada. "Showcase" va a dejar de serlo
    // (carpeta ya creada en sobre-nosotros/showcase, todavia stub — ver
    // bloque comentado abajo). "Iniciar sesion" (/login) se deja afuera a
    // proposito: es una pagina de accion, no contenido a indexar.
    //
    // {
    //   url: `${baseUrl}/sobre-nosotros/showcase`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
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
