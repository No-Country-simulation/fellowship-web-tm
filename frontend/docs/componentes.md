# Documentación de Componentes — No Country (Atomic Design)

## Navbar
- **Descripción:** Barra de navegación principal con menú responsive. En desktop usa una grilla de tres columnas para centrar los links y dejar logo a la izquierda y login a la derecha. En mobile colapsa en menú hamburguesa.
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `next/image`, `react`.
- **Uso:**
  ```tsx
  import Navbar from "@/components/organisms/Navbar";
  <Navbar />
  ```

## HeroSection
- **Descripción:** Hero principal con tag "SIMULACIÓN LABORAL", titular en dos líneas con gradiente en la segunda línea, párrafo de contexto, CTAs "Explorar en vivo" y "Ver cómo funciona", y bloque de métricas (30.000+ Talents, 5.000+ Teams, 100+ Countries) integrado en el margen inferior.
- **Props:** Ninguna.
- **Dependencias:** `next/link`.
- **Uso:**
  ```tsx
  import HeroSection from "@/components/organisms/HeroSection";
  <HeroSection />
  ```

## EmpresasCarousel
- **Descripción:** Sección estática con logos de empresas aliadas. Los logos están en escala de grises y con opacidad reducida; al hacer hover se iluminan y recuperan color. No utiliza animación marquee.
- **Props:** Ninguna. La lista de logos es interna.
- **Dependencias:** `next/image`.
- **Uso:**
  ```tsx
  import EmpresasCarousel from "@/components/organisms/EmpresasCarousel";
  <EmpresasCarousel />
  ```

## LiveSimulation
- **Descripción:** Sección que muestra una simulación laboral en vivo. Incluye badges con desafíos, inscripciones, equipos y países, barra de progreso del ciclo y listado de equipos con proyecto, integrantes, documentos y última actividad.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import LiveSimulation from "@/components/organisms/LiveSimulation";
  <LiveSimulation />
  ```

## SimulationDefinition
- **Descripción:** Sección de fondo blanco que define qué es la simulación laboral y presenta los 5 pasos del proceso: Challenge, Teams, Execution, Observation y Evidence.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import SimulationDefinition from "@/components/organisms/SimulationDefinition";
  <SimulationDefinition />
  ```

## QuePuedeSimularse
- **Descripción:** Matriz interactiva de categorías (Conocimientos, Habilidades Blandas, Roles, Metodologías) que pueden ser simuladas en la plataforma.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import QuePuedeSimularse from "@/components/organisms/QuePuedeSimularse";
  <QuePuedeSimularse />
  ```

## EvidenciaConductual
- **Descripción:** Sección interactiva con pestañas y gráficos dinámicos que muestran la evidencia conductual y el progreso del talento (Trayectoria, Peer Review, Entregables y Evolución).
- **Props:** `className?: string` (opcional).
- **Dependencias:** `lucide-react`, `recharts`, `@/components/ui/chart`, `@/lib/utils`.
- **Uso:**
  ```tsx
  import EvidenciaConductual from "@/components/organisms/EvidenciaConductual";
  <EvidenciaConductual />
  ```

## CasosDeUso
- **Descripción:** Tarjetas con casos de uso dirigidos a empresas y líderes de talento (Hire, Develop, Talent Brand).
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import CasosDeUso from "@/components/organisms/CasosDeUso";
  <CasosDeUso />
  ```

## CasoOracle
- **Descripción:** Sección que presenta el caso de éxito del Hackathon Oracle Next Education (ONE), métricas clave, etapas del proceso y testimonios con fotos.
- **Props:** `className?: string` (opcional).
- **Dependencias:** `next/image`, `@/components/ui/avatar`, `@/lib/utils`.
- **Uso:**
  ```tsx
  import CasoOracle from "@/components/organisms/CasoOracle";
  <CasoOracle />
  ```

## ComparisonTable
- **Descripción:** Tabla comparativa ("Un cambio de paradigma") entre modelos tradicionales de contratación (CV, Entrevista, Assessment, Bootcamp, Pasantía) y la Simulación Laboral de No Country.
- **Props:** Ninguna.
- **Dependencias:** `next/image`, `@/components/ui/table`, `@/lib/utils`.
- **Uso:**
  ```tsx
  import ComparisonTable from "@/components/organisms/ComparisonTable";
  <ComparisonTable />
  ```

## FraseSection
- **Descripción:** Sección narrativa con frase reflexiva sobre el cambio de paradigma de credenciales a evidencia observando el trabajo real.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import FraseSection from "@/components/organisms/FraseSection";
  <FraseSection />
  ```

## FAQSection
- **Descripción:** Sección de preguntas frecuentes generales. Implementada con `<details>` y `<summary>`. Las respuestas son claras y directas para aportar utilidad SEO/GEO.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import FAQSection from "@/components/organisms/FAQSection";
  <FAQSection />
  ```

## Footer
- **Descripción:** Pie de página principal con mensaje de marca, enlaces de navegación, redes sociales, derechos de autor y elementos geométricos decorativos.
- **Props:** `className?: string` (opcional).
- **Dependencias:** `@/lib/utils`.
- **Uso:**
  ```tsx
  import Footer from "@/components/organisms/Footer";
  <Footer />
  ```

---

**Nota:** Todos los componentes se encuentran en `@/components/organisms` bajo Atomic Design. Los componentes `ShowcaseSection` y `ParadigmaSection` fueron reemplazados por `LiveSimulation`, `SimulationDefinition`, `FraseSection` y `HeroSection` actualizado.