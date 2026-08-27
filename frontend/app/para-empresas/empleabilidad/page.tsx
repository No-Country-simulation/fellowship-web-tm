import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

const title = "Empleabilidad para instituciones";
const description =
  "Mejorá la empleabilidad de tus estudiantes con simulaciones laborales reales que generan evidencia de desempeño verificable.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/para-empresas/empleabilidad` },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/para-empresas/empleabilidad`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function Page() {
  return null;
}
