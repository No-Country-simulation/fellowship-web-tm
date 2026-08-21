# Documentación de Componentes

## Navbar
- **Descripción:** Barra de navegación principal con menú responsive.
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `react`.
- **Uso:**
  ```tsx
  import Navbar from "@/components/organisms/Navbar";
  <Navbar />
  ```

## HeroSection
- **Descripción:** Hero principal con título, tag de próxima simulación y botones de enrutamiento.
- **Props:** Ninguna.
- **Dependencias:** `next/navigation`.
- **Uso:**
  ```tsx
  import HeroSection from "@/components/organisms/HeroSection";
  <HeroSection />
  ```

## EmpresasCarousel
- **Descripción:** Carrusel infinito de logos de empresas aliadas.
- **Props:** `empresas?: string[]` (opcional, por defecto usa lista interna).
- **Dependencias:** `next/image`.
- **Uso:**
  ```tsx
  import EmpresasCarousel from "@/components/organisms/EmpresasCarousel";
  <EmpresasCarousel />
  ```

## ShowcaseSection
- **Descripción:** Sección con métricas globales y placeholder de mapa.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:** import y colocar.

## ParadigmaSection
- **Descripción:** Frase de transición narrativa.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:** import y colocar.

## CasoOracle
- **Descripción:** Sección que presenta el caso de éxito del Hackathon Oracle Next Education (ONE), métricas clave, etapas del proceso y testimonios con fotos.
- **Props:** `className?: string` (opcional).
- **Dependencias:** `next/image`, `@/components/ui/avatar`, `@/lib/utils`.
- **Uso:**
  ```tsx
  import CasoOracle from "@/components/sections/CasoOracle";
  <CasoOracle />
  ```

## CasosDeUso
- **Descripción:** Tarjetas con casos de uso dirigidos a empresas y líderes de talento (Hire, Develop, Talent Brand).
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import CasosDeUso from "@/components/sections/CasosDeUso";
  <CasosDeUso />
  ```

## ComparisonTable
- **Descripción:** Tabla comparativa ("Un cambio de paradigma") entre modelos tradicionales de contratación (CV, Entrevista, Assessment, Bootcamp, Pasantía) y la Simulación Laboral de No Country.
- **Props:** Ninguna.
- **Dependencias:** `next/image`, `@/components/ui/table`, `@/lib/utils`.
- **Uso:**
  ```tsx
  import ComparisonTable from "@/components/sections/ComparisonTable";
  <ComparisonTable />
  ```

## EvidenciaConductual
- **Descripción:** Sección interactiva con pestañas y gráficos dinámicos que muestran la evidencia conductual y el progreso del talento (Trayectoria, Peer Review, Entregables y Evolución).
- **Props:** `className?: string` (opcional).
- **Dependencias:** `lucide-react`, `recharts`, `@/components/ui/chart`, `@/lib/utils`.
- **Uso:**
  ```tsx
  import EvidenciaConductual from "@/components/sections/EvidenciaConductual";
  <EvidenciaConductual />
  ```

## Footer
- **Descripción:** Pie de página principal con mensaje de marca, enlaces de navegación, redes sociales, derechos de autor y elementos geométricos decorativos.
- **Props:** `className?: string` (opcional).
- **Dependencias:** `@/lib/utils`.
- **Uso:**
  ```tsx
  import Footer from "@/components/sections/Footer";
  <Footer />
  ```

## FraseSection
- **Descripción:** Sección narrativa con frase reflexiva sobre el cambio de paradigma de credenciales a evidencia observando el trabajo real.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import FraseSection from "@/components/sections/FraseSection";
  <FraseSection />
  ```

## QuePuedeSimularse
- **Descripción:** Matriz interactiva de categorías (Conocimientos, Habilidades Blandas, Roles, Metodologías) que pueden ser simuladas en la plataforma.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import QuePuedeSimularse from "@/components/sections/QuePuedeSimularse";
  <QuePuedeSimularse />
  ```
