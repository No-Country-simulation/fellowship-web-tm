import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

const title = "Contratar talento validado";
const description =
  "Accedé a perfiles de talento validados por simulaciones laborales reales, con semanas de comportamiento documentado y garantía de reemplazo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/para-empresas/contratar` },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/para-empresas/contratar`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function Page() {
  return null;
}
