# Documentación de Componentes — No Country (Atomic Design)

## Navbar
- **Descripción:** Barra de navegación principal con menú responsive. En desktop usa una grilla de tres columnas para centrar los links y dejar logo a la izquierda y login a la derecha. En mobile colapsa en menú hamburguesa.
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `next/image`, `react`.
- **Uso:**
  ```tsx
  import Navbar from "@/components/organisms/shared/Navbar";
  <Navbar />
  ```

## HeroSection
- **Descripción:** Hero principal con tag "SIMULACIÓN LABORAL", titular en dos líneas con gradiente en la segunda línea, párrafo de contexto, CTAs "Explorar en vivo" y "Ver cómo funciona", y bloque de métricas (30.000+ Talents, 5.000+ Teams, 100+ Countries) integrado en el margen inferior.
- **Props:** Ninguna.
- **Dependencias:** `next/link`.
- **Uso:**
  ```tsx
  import HeroSection from "@/components/organisms/home/HeroSection";
  <HeroSection />
  ```

## EmpresasCarousel
- **Descripción:** Sección estática con logos de empresas aliadas. Los logos están en escala de grises y con opacidad reducida; al hacer hover se iluminan y recuperan color. No utiliza animación marquee.
- **Props:** Ninguna. La lista de logos es interna.
- **Dependencias:** `next/image`.
- **Uso:**
  ```tsx
  import EmpresasCarousel from "@/components/organisms/home/EmpresasCarousel";
  <EmpresasCarousel />
  ```

## LiveSimulation
- **Descripción:** Sección que muestra una simulación laboral en vivo. Incluye badges con desafíos, inscripciones, equipos y países, barra de progreso del ciclo y listado de equipos con proyecto, integrantes, documentos y última actividad.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import LiveSimulation from "@/components/organisms/home/LiveSimulation";
  <LiveSimulation />
  ```

## SimulationDefinition
- **Descripción:** Sección de fondo blanco que define qué es la simulación laboral y presenta los 5 pasos del proceso: Challenge, Teams, Execution, Observation y Evidence.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import SimulationDefinition from "@/components/organisms/home/SimulationDefinition";
  <SimulationDefinition />
  ```

## QuePuedeSimularse
- **Descripción:** Matriz interactiva de categorías (Conocimientos, Habilidades Blandas, Roles, Metodologías) que pueden ser simuladas en la plataforma.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import QuePuedeSimularse from "@/components/organisms/home/QuePuedeSimularse";
  <QuePuedeSimularse />
  ```

## EvidenciaConductual
- **Descripción:** Sección interactiva con pestañas y gráficos dinámicos que muestran la evidencia conductual y el progreso del talento (Trayectoria, Peer Review, Entregables y Evolución).
- **Props:** `className?: string` (opcional).
- **Dependencias:** `lucide-react`, `recharts`, `@/components/ui/chart`, `@/lib/utils`.
- **Uso:**
  ```tsx
  import EvidenciaConductual from "@/components/organisms/home/EvidenciaConductual";
  <EvidenciaConductual />
  ```

## CasosDeUso
- **Descripción:** Tarjetas con casos de uso dirigidos a empresas y líderes de talento (Hire, Develop, Talent Brand).
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import CasosDeUso from "@/components/organisms/home/CasosDeUso";
  <CasosDeUso />
  ```

## CasoOracle
- **Descripción:** Sección que presenta el caso de éxito del Hackathon Oracle Next Education (ONE), métricas clave, etapas del proceso y testimonios con fotos.
- **Props:** `className?: string` (opcional).
- **Dependencias:** `next/image`, `@/components/ui/avatar`, `@/lib/utils`.
- **Uso:**
  ```tsx
  import CasoOracle from "@/components/organisms/home/CasoOracle";
  <CasoOracle />
  ```

## ComparisonTable
- **Descripción:** Tabla comparativa ("Un cambio de paradigma") entre modelos tradicionales de contratación (CV, Entrevista, Assessment, Bootcamp, Pasantía) y la Simulación Laboral de No Country.
- **Props:** Ninguna.
- **Dependencias:** `next/image`, `@/components/ui/table`, `@/lib/utils`.
- **Uso:**
  ```tsx
  import ComparisonTable from "@/components/organisms/home/ComparisonTable";
  <ComparisonTable />
  ```

## FraseSection
- **Descripción:** Sección narrativa con frase reflexiva sobre el cambio de paradigma de credenciales a evidencia observando el trabajo real.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import FraseSection from "@/components/organisms/home/FraseSection";
  <FraseSection />
  ```

## FAQSection
- **Descripción:** Sección de preguntas frecuentes generales. Implementada con `<details>` y `<summary>`. Las respuestas son claras y directas para aportar utilidad SEO/GEO.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import FAQSection from "@/components/organisms/home/FAQSection";
  <FAQSection />
  ```

## Footer
- **Descripción:** Pie de página principal con mensaje de marca, enlaces de navegación, redes sociales, derechos de autor y elementos geométricos decorativos.
- **Props:** `className?: string` (opcional).
- **Dependencias:** `@/lib/utils`.
- **Uso:**
  ```tsx
  import Footer from "@/components/organisms/shared/Footer";
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

Sección de la página `/simulacion-laboral/paradigma`. Comprende desde el Hero hasta el CTA final: Hero, El Gap, Qué es, Tesis, Tiempo, Contraste, Comparación directa, Gran diferenciación, Evidencia en vivo, El mecanismo, Closing y CTA final.

### HeroParadigma
- **Descripción:** Hero principal de la página "Simulación Laboral — El Paradigma". Incluye eyebrow, titular con gradiente, descripción, flujo de 4 pasos con iconos de `lucide-react` y CTAs.
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `lucide-react`, `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import HeroParadigma from "@/components/organisms/simulacion-laboral/paradigma/HeroParadigma";
  <HeroParadigma />
  ```

### GapSection
- **Descripción:** Sección clara que muestra la brecha entre formación tradicional y simulación laboral. Incluye lista de métricas que puede medir un curso y pregunta disparadora con subrayado gradiente.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import GapSection from "@/components/organisms/simulacion-laboral/paradigma/GapSection";
  <GapSection />
  ```

### ConceptSection
- **Descripción:** Explica qué es una simulación laboral. Incluye descripción, párrafo de apoyo y ejemplo con avatares de roles.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import ConceptSection from "@/components/organisms/simulacion-laboral/paradigma/ConceptSection";
  <ConceptSection />
  ```

### TesisSection
- **Descripción:** Bloque oscuro con frase destacada sobre formación vs ejecución. Usa borde izquierdo rosa.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import TesisSection from "@/components/organisms/simulacion-laboral/paradigma/TesisSection";
  <TesisSection />
  ```

### TimeSection
- **Descripción:** Sección clara con barras animadas que representan el avance semana a semana de una simulación. Incluye texto explicativo sobre la imposibilidad de fingir constancia.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal` y animaciones propias con `IntersectionObserver`.
- **Uso:**
  ```tsx
  import TimeSection from "@/components/organisms/simulacion-laboral/paradigma/TimeSection";
  <TimeSection />
  ```

### ContrasteSection
- **Descripción:** Tabla comparativa animada entre formación tradicional y simulación laboral. Las filas se deslizan escalonadamente al entrar en pantalla. Incluye frase final con borde izquierdo rosa.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal` y animaciones propias con `IntersectionObserver`.
- **Uso:**
  ```tsx
  import ContrasteSection from "@/components/organisms/simulacion-laboral/paradigma/ContrasteSection";
  <ContrasteSection />
  ```

### Diferencias
- **Descripción:** "03 — Comparación directa". Sección de fondo claro que compara la simulación laboral con Bootcamp, Assessment, Hackathon y Pasantía en 4 cards. Cada card muestra un ícono y, al pasar el mouse, revela el texto de la diferencia deslizándolo hacia arriba.
- **Props:** Ninguna.
- **Dependencias:** `lucide-react` (íconos `School`, `ListChecks`, `Timer`, `Briefcase`), `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Diferencias from "@/components/organisms/simulacion-laboral/paradigma/Diferencias";
  <Diferencias />
  ```

### GranDiferenciacion
- **Descripción:** "Cuatro propiedades que solo aparecen en simulación" (Tiempo, Contexto, Equipo, Emergencia). Sección de fondo oscuro con 4 cards, cada una con un color de acento distinto (rosa, cyan, violeta, verde) que crece al hacer hover. La card "Emergencia" tiene un glow adicional.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import GranDiferenciacion from "@/components/organisms/simulacion-laboral/paradigma/GranDiferenciacion";
  <GranDiferenciacion />
  ```

### EvidenciaEnVivo
- **Descripción:** "04 — La evidencia, en vivo". Sección de fondo claro con un mockup del dashboard de resultado final de la simulación: 6 métricas con conteo animado y barra de progreso, comparación de 13 soft skills (peer review vs. autoevaluación) con barras animadas, y dos columnas de quotes (fortalezas / áreas de mejora). Las animaciones se disparan con `IntersectionObserver` al entrar en pantalla.
- **Props:** Ninguna.
- **Dependencias:** `lucide-react` (íconos de métricas), `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import EvidenciaEnVivo from "@/components/organisms/simulacion-laboral/paradigma/EvidenciaEnVivo";
  <EvidenciaEnVivo />
  ```

### ElMecanismo
- **Descripción:** "05 — El mecanismo". Sección de fondo oscuro con un stepper de 4 pasos (Kick-off, Ejecución, Peer review, Demo Day): la línea de progreso se completa y los círculos se activan en cascada al entrar en pantalla, cada uno con un color sólido distinto en una progresión rosa → cyan. Debajo, 3 chips con los datos que captura la plataforma.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import ElMecanismo from "@/components/organisms/simulacion-laboral/paradigma/ElMecanismo";
  <ElMecanismo />
  ```

### Closing
- **Descripción:** Frase de cierre ("No es un CV. Es evidencia observable mientras ocurre.") sobre fondo claro, con fade-in al hacer scroll.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Closing from "@/components/organisms/simulacion-laboral/paradigma/Closing";
  <Closing />
  ```

### CTAFinal
- **Descripción:** CTA de cierre con los 3 caminos por audiencia (Para talento, Para empresas, Para instituciones), cada card linkeando a la ruta real correspondiente (`/simulacion-laboral/paradigma`, `/para-empresas/contratar`, `/para-empresas/empleabilidad`).
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import CTAFinal from "@/components/organisms/shared/CTAFinal";
  <CTAFinal />
  ```

---

## Componentes de "Simulación Laboral — Qué observamos"

Sección de la página `/simulacion-laboral/que-observamos`. Comprende las 6 dimensiones que se observan durante la ejecución y el cierre hacia las otras dos sub-páginas.

### SeisDimensiones
- **Descripción:** "Seis dimensiones". Selector de dimensiones tipo "stories": 6 tabs (Participación, Colaboración, Comunicación, Ejecución, Autonomía y toma de decisiones, Adaptación y trayectoria), cada uno con un ícono y una barra de progreso que se llena sola en 5.2s y avanza automáticamente a la siguiente dimensión (o se puede clickear para saltar directo). Al cambiar de dimensión, el panel hace fade-out/fade-in y el contenido (título, descripción, pregunta, chips y "Señal") entra en cascada.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import SeisDimensiones from "@/components/organisms/simulacion-laboral/que-observamos/SeisDimensiones";
  <SeisDimensiones />
  ```

### LoQueSigue
- **Descripción:** "Lo que sigue". Cierre de la página con dos tarjetas que linkean a `/simulacion-laboral/como-funciona` y `/simulacion-laboral/que-insights-genera`.
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import LoQueSigue from "@/components/organisms/simulacion-laboral/que-observamos/LoQueSigue";
  <LoQueSigue />
  ```

---

## Componentes de "Simulación Laboral — Cómo funciona"

Sección de la página `/simulacion-laboral/como-funciona`. Cubre la línea de tiempo de ejecución y las señales que se registran durante el proceso.

### LineaDeTiempo
- **Descripción:** "04 — La línea de tiempo". Cadena de 6 nodos SVG que van creciendo de tamaño (0 → 1 → 2 → 3 → 4 → ✓), conectados por líneas que se "dibujan" en cascada al entrar en viewport. Usa una progresión de color rosa → cian (marca NC) en vez de colores sueltos. Debajo, una leyenda de 3 etapas (Semana 0, Semanas 1 a 4, Cierre) y un pill con la duración típica.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import LineaDeTiempo from "@/components/organisms/simulacion-laboral/como-funciona/LineaDeTiempo";
  <LineaDeTiempo />
  ```

### LoQueSeRegistra
- **Descripción:** "05 — Lo que se registra". Chips de las señales que se registran durante la ejecución (Participación, Colaboración, Comunicación, Trayectoria, Entregables, Peer review), cada uno con un borde de color distinto, entrando en cascada. Debajo, dos tarjetas de cierre hacia `/simulacion-laboral/que-observamos` y `/simulacion-laboral/que-insights-genera`.
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import LoQueSeRegistra from "@/components/organisms/simulacion-laboral/como-funciona/LoQueSeRegistra";
  <LoQueSeRegistra />
  ```

---

## Componentes de "Simulación Laboral — Qué insights genera"

Sección de la página `/simulacion-laboral/que-insights-genera`. Cubre cómo el programa conecta formación y trabajo, y cómo una señal se convierte en insight.

### Programa
- **Descripción:** "04 — Programa". Diagrama orbital: un hub central ("Simulación Laboral") conectado por spokes a 4 nodos (Learning, Knowledge, Evidence, Work), rodeado de un anillo punteado con gradiente rosa → cian. 5 puntos de colores orbitan continuamente alrededor del anillo usando animación SVG nativa (`<animateMotion>` sobre un `<mpath>`), sin depender de JS. Debajo, una leyenda con los 5 puntos de color y su significado.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Programa from "@/components/organisms/simulacion-laboral/que-insights-genera/Programa";
  <Programa />
  ```

### SenalAlInsight
- **Descripción:** "05 — De la señal al insight". Flujo vertical de 3 niveles (Signals → Patterns → Insights) que se revela en cascada al entrar en viewport: Signals muestra 7 chips neutros, Patterns muestra 6 chips coloreados por categoría (mismos acentos que `ElMecanismo`/`LoQueSeRegistra`), e Insights muestra 3 citas de ejemplo con borde izquierdo en gradiente y el tag "Ejemplo ilustrativo". Cierra con un disclaimer aclarando que son ejemplos ilustrativos, no inferencias automáticas del sistema.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import SenalAlInsight from "@/components/organisms/simulacion-laboral/que-insights-genera/SenalAlInsight";
  <SenalAlInsight />
  ```

---

**Nota:** Todos los componentes se encuentran en `@/components/organisms` bajo Atomic Design, organizados en subcarpetas por página (`home/`, `simulacion-laboral/<pagina>/`) y una carpeta `shared/` para los componentes usados en varias páginas (`Navbar`, `Footer`, `CTAFinal`). Los componentes `ShowcaseSection`, `StatsSection` y `ParadigmaSection` no se movieron a esa estructura porque no los usa ninguna página actualmente — fueron reemplazados por `LiveSimulation`, `SimulationDefinition`, `FraseSection` y `HeroSection` actualizado.