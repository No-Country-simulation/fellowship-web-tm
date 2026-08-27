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

## Reveal (utilidad compartida)
- **Descripción:** Componente compartido de animación de entrada (fade-in + slide-up) al hacer scroll, usando `IntersectionObserver`. Se dispara una sola vez cuando el elemento entra en pantalla. Acepta un `delay` en milisegundos para escalonar la aparición de varios elementos en una misma grilla.
- **Props:** `children: React.ReactNode`, `delay?: number` (default `0`), `className?: string`.
- **Dependencias:** Ninguna externa (usa `react` — `useEffect`, `useRef`, `useState`).
- **Ubicación:** `@/components/ui/reveal` (no `organisms`, es una utilidad de UI reutilizable).
- **Uso:**
  ```tsx
  import { Reveal } from "@/components/ui/reveal";
  <Reveal delay={80}>
    <h2>Contenido que aparece al hacer scroll</h2>
  </Reveal>
  ```
- **Importante:** `Reveal` controla `transform`/`opacity` por `style` inline en su propio `div`. Si el contenido de adentro necesita su propio efecto de `hover` con `transform` (ej. `hover:-translate-y-1`), ese hover tiene que ir en un `div`/`Link` hijo separado, nunca en el mismo `className` que se le pasa a `Reveal` — si no, el `style` inline de `Reveal` pisa el hover de Tailwind. Ver `Diferencias.tsx`, `GranDiferenciacion.tsx` o `CTAFinal.tsx` como ejemplo del patrón correcto.

---

## Componentes de "Simulación Laboral — El Paradigma"

Sección de la página `/simulacion-laboral/paradigma` (aún sin ruta creada — actualmente se previsualizan montados en otra página). Comprende desde "03 — Comparación directa" hasta el CTA final; la mitad superior de esa página (Hero, El Gap, Qué es, Tesis, Tiempo, Contraste) la arma otro integrante del equipo.

### Diferencias
- **Descripción:** "03 — Comparación directa". Sección de fondo claro que compara la simulación laboral con Bootcamp, Assessment, Hackathon y Pasantía en 4 cards. Cada card muestra un ícono y, al pasar el mouse, revela el texto de la diferencia deslizándolo hacia arriba.
- **Props:** Ninguna.
- **Dependencias:** `lucide-react` (íconos `School`, `ListChecks`, `Timer`, `Briefcase`), `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Diferencias from "@/components/organisms/Diferencias";
  <Diferencias />
  ```

### GranDiferenciacion
- **Descripción:** "Cuatro propiedades que solo aparecen en simulación" (Tiempo, Contexto, Equipo, Emergencia). Sección de fondo oscuro con 4 cards, cada una con un color de acento distinto (rosa, cyan, violeta, verde) que crece al hacer hover. La card "Emergencia" tiene un glow adicional.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import GranDiferenciacion from "@/components/organisms/GranDiferenciacion";
  <GranDiferenciacion />
  ```

### EvidenciaEnVivo
- **Descripción:** "04 — La evidencia, en vivo". Sección de fondo claro con un mockup del dashboard de resultado final de la simulación: 6 métricas con conteo animado y barra de progreso, comparación de 13 soft skills (peer review vs. autoevaluación) con barras animadas, y dos columnas de quotes (fortalezas / áreas de mejora). Las animaciones se disparan con `IntersectionObserver` al entrar en pantalla.
- **Props:** Ninguna.
- **Dependencias:** `lucide-react` (íconos de métricas), `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import EvidenciaEnVivo from "@/components/organisms/EvidenciaEnVivo";
  <EvidenciaEnVivo />
  ```

### ElMecanismo
- **Descripción:** "05 — El mecanismo". Sección de fondo oscuro con un stepper de 4 pasos (Kick-off, Ejecución, Peer review, Demo Day): la línea de progreso se completa y los círculos se activan en cascada al entrar en pantalla, cada uno con un color sólido distinto en una progresión rosa → cyan. Debajo, 3 chips con los datos que captura la plataforma.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import ElMecanismo from "@/components/organisms/ElMecanismo";
  <ElMecanismo />
  ```

### Closing
- **Descripción:** Frase de cierre ("No es un CV. Es evidencia observable mientras ocurre.") sobre fondo claro, con fade-in al hacer scroll.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Closing from "@/components/organisms/Closing";
  <Closing />
  ```

### CTAFinal
- **Descripción:** CTA de cierre con los 3 caminos por audiencia (Para talento, Para empresas, Para instituciones), cada card linkeando a la ruta real correspondiente (`/simulacion-laboral/paradigma`, `/para-empresas/contratar`, `/para-empresas/empleabilidad`).
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import CTAFinal from "@/components/organisms/CTAFinal";
  <CTAFinal />
  ```

---

**Nota:** Todos los componentes se encuentran en `@/components/organisms` bajo Atomic Design. Los componentes `ShowcaseSection` y `ParadigmaSection` fueron reemplazados por `LiveSimulation`, `SimulationDefinition`, `FraseSection` y `HeroSection` actualizado.