export const siteConfig = {
  name: "No Country",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nocountry.tech",
  description:
    "Simulaciones laborales que generan evidencia real de cómo trabaja el talento.",
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}/logos/NoCountry.png`,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};
