# Documentación de Componentes — No Country (Atomic Design)

## Navbar

- **Descripción:** Barra de navegación principal con menú responsive. En desktop usa una grilla de tres columnas para centrar los links y dejar logo a la izquierda y login a la derecha. En mobile colapsa en menú hamburguesa.
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `next/image`, `react`.
- **Uso:**
  ```tsx
  import Navbar from "@/components/organisms/shared/Navbar";
  <Navbar />;
  ```

## HeroSection

- **Descripción:** Hero principal con tag "SIMULACIÓN LABORAL", titular en dos líneas con gradiente en la segunda línea, párrafo de contexto, CTAs "Explorar en vivo" y "Ver cómo funciona", y bloque de métricas (30.000+ Talents, 5.000+ Teams, 100+ Countries) integrado en el margen inferior.
- **Props:** Ninguna.
- **Dependencias:** `next/link`.
- **Uso:**
  ```tsx
  import HeroSection from "@/components/organisms/home/HeroSection";
  <HeroSection />;
  ```

## EmpresasCarousel

- **Descripción:** Sección estática con logos de empresas aliadas. Los logos están en escala de grises y con opacidad reducida; al hacer hover se iluminan y recuperan color. No utiliza animación marquee.
- **Props:** Ninguna. La lista de logos es interna.
- **Dependencias:** `next/image`.
- **Uso:**
  ```tsx
  import EmpresasCarousel from "@/components/organisms/home/EmpresasCarousel";
  <EmpresasCarousel />;
  ```

## LiveSimulation

- **Descripción:** Sección que muestra una simulación laboral en vivo. Incluye badges con desafíos, inscripciones, equipos y países, barra de progreso del ciclo y listado de equipos con proyecto, integrantes, documentos y última actividad.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import LiveSimulation from "@/components/organisms/home/LiveSimulation";
  <LiveSimulation />;
  ```

## SimulationDefinition

- **Descripción:** Sección de fondo blanco que define qué es la simulación laboral y presenta los 5 pasos del proceso: Challenge, Teams, Execution, Observation y Evidence.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import SimulationDefinition from "@/components/organisms/home/SimulationDefinition";
  <SimulationDefinition />;
  ```

## QuePuedeSimularse

- **Descripción:** Matriz interactiva de categorías (Conocimientos, Habilidades Blandas, Roles, Metodologías) que pueden ser simuladas en la plataforma.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import QuePuedeSimularse from "@/components/organisms/home/QuePuedeSimularse";
  <QuePuedeSimularse />;
  ```

## EvidenciaConductual

- **Descripción:** Sección interactiva con pestañas y gráficos dinámicos que muestran la evidencia conductual y el progreso del talento (Trayectoria, Peer Review, Entregables y Evolución).
- **Props:** `className?: string` (opcional).
- **Dependencias:** `lucide-react`, `recharts`, `@/components/ui/chart`, `@/components/organisms/shared/TrayectoriaActividad` (el panel de la pestaña Trajectory, movido a un archivo compartido sin cambios), `@/lib/utils`.
- **Uso:**
  ```tsx
  import EvidenciaConductual from "@/components/organisms/home/EvidenciaConductual";
  <EvidenciaConductual />;
  ```

## CasosDeUso

- **Descripción:** Tarjetas con casos de uso dirigidos a empresas y líderes de talento (Hire, Develop, Talent Brand).
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import CasosDeUso from "@/components/organisms/home/CasosDeUso";
  <CasosDeUso />;
  ```

## CasoOracle

- **Descripción:** Sección que presenta el caso de éxito del Hackathon Oracle Next Education (ONE), métricas clave, etapas del proceso y testimonios con fotos.
- **Props:** `className?: string` (opcional).
- **Dependencias:** `next/image`, `@/components/ui/avatar`, `@/lib/utils`.
- **Uso:**
  ```tsx
  import CasoOracle from "@/components/organisms/home/CasoOracle";
  <CasoOracle />;
  ```

## ComparisonTable

- **Descripción:** Tabla comparativa ("Un cambio de paradigma") entre modelos tradicionales de contratación (CV, Entrevista, Assessment, Bootcamp, Pasantía) y la Simulación Laboral de No Country.
- **Props:** Ninguna.
- **Dependencias:** `next/image`, `@/components/ui/table`, `@/lib/utils`.
- **Uso:**
  ```tsx
  import ComparisonTable from "@/components/organisms/home/ComparisonTable";
  <ComparisonTable />;
  ```

## FraseSection

- **Descripción:** Sección narrativa con frase reflexiva sobre el cambio de paradigma de credenciales a evidencia observando el trabajo real.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import FraseSection from "@/components/organisms/home/FraseSection";
  <FraseSection />;
  ```

## FAQSection

- **Descripción:** Sección de preguntas frecuentes generales. Implementada con `<details>` y `<summary>`. Las respuestas son claras y directas para aportar utilidad SEO/GEO.
- **Props:** Ninguna.
- **Dependencias:** Ninguna externa.
- **Uso:**
  ```tsx
  import FAQSection from "@/components/organisms/home/FAQSection";
  <FAQSection />;
  ```

## Footer

- **Descripción:** Pie de página principal con mensaje de marca, enlaces de navegación, redes sociales, derechos de autor y elementos geométricos decorativos.
- **Props:** `className?: string` (opcional).
- **Dependencias:** `@/lib/utils`.
- **Uso:**
  ```tsx
  import Footer from "@/components/organisms/shared/Footer";
  <Footer />;
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
  </Reveal>;
  ```
- **Importante:** `Reveal` controla `transform`/`opacity` por `style` inline en su propio `div`. Si el contenido de adentro necesita su propio efecto de `hover` con `transform` (ej. `hover:-translate-y-1`), ese hover tiene que ir en un `div`/`Link` hijo separado, nunca en el mismo `className` que se le pasa a `Reveal` — si no, el `style` inline de `Reveal` pisa el hover de Tailwind. Ver `Diferencias.tsx`, `GranDiferenciacion.tsx` o `CTAFinal.tsx` como ejemplo del patrón correcto.

## SectionBadge (utilidad compartida)

- **Descripción:** Componente compartido para los badges de sección que combinan una barra gradiente (rosa → cian) con el texto en mayúsculas y tracking ancho. Reemplaza el patrón anterior del puntito rosa con glow por un formato unificado (línea + texto), que se usa en las secciones numeradas ("02 — El problema", "03 — La solución", etc.) y también en algunas secciones no numeradas ("Empezá ahora").
- **Props:** `children: React.ReactNode`, `className?: string` (opcional, para ajustar color del texto o márgenes).
- **Dependencias:** `@/lib/utils` (función `cn`).
- **Ubicación:** `@/components/ui/sectionBadge` (no `organisms`, es una utilidad de UI reutilizable).
- **Uso:**
  ```tsx
  import SectionBadge from "@/components/ui/sectionBadge";
  <SectionBadge>02 — El problema</SectionBadge>;
  ```
- **Importante:** El componente usa por defecto `text-zinc-500` para el texto. Si una sección necesita otro tono (ej. `text-[#939393]`), se puede pasar por `className`: `<SectionBadge className="text-[#939393]">02 — El problema</SectionBadge>`.

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
  <HeroParadigma />;
  ```

### GapSection

- **Descripción:** Sección clara que muestra la brecha entre formación tradicional y simulación laboral. Incluye lista de métricas que puede medir un curso y pregunta disparadora con subrayado gradiente.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import GapSection from "@/components/organisms/simulacion-laboral/paradigma/GapSection";
  <GapSection />;
  ```

### ConceptSection

- **Descripción:** Explica qué es una simulación laboral. Incluye descripción, párrafo de apoyo y ejemplo con avatares de roles.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import ConceptSection from "@/components/organisms/simulacion-laboral/paradigma/ConceptSection";
  <ConceptSection />;
  ```

### TesisSection

- **Descripción:** Bloque oscuro con frase destacada sobre formación vs ejecución. Usa borde izquierdo rosa.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import TesisSection from "@/components/organisms/simulacion-laboral/paradigma/TesisSection";
  <TesisSection />;
  ```

### TimeSection

- **Descripción:** Sección clara con barras animadas que representan el avance semana a semana de una simulación. Incluye texto explicativo sobre la imposibilidad de fingir constancia.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal` y animaciones propias con `IntersectionObserver`.
- **Uso:**
  ```tsx
  import TimeSection from "@/components/organisms/simulacion-laboral/paradigma/TimeSection";
  <TimeSection />;
  ```

### ContrasteSection

- **Descripción:** Tabla comparativa animada entre formación tradicional y simulación laboral. Las filas se deslizan escalonadamente al entrar en pantalla. Incluye frase final con borde izquierdo rosa.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal` y animaciones propias con `IntersectionObserver`.
- **Uso:**
  ```tsx
  import ContrasteSection from "@/components/organisms/simulacion-laboral/paradigma/ContrasteSection";
  <ContrasteSection />;
  ```

### Diferencias

- **Descripción:** "03 — Comparación directa". Sección de fondo claro que compara la simulación laboral con Bootcamp, Assessment, Hackathon y Pasantía en 4 cards. Cada card muestra un ícono y, al pasar el mouse, revela el texto de la diferencia deslizándolo hacia arriba.
- **Props:** Ninguna.
- **Dependencias:** `lucide-react` (íconos `School`, `ListChecks`, `Timer`, `Briefcase`), `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Diferencias from "@/components/organisms/simulacion-laboral/paradigma/Diferencias";
  <Diferencias />;
  ```

### GranDiferenciacion

- **Descripción:** "Cuatro propiedades que solo aparecen en simulación" (Tiempo, Contexto, Equipo, Emergencia). Sección de fondo oscuro con 4 cards, cada una con un color de acento distinto (rosa, cyan, violeta, verde) que crece al hacer hover. La card "Emergencia" tiene un glow adicional.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import GranDiferenciacion from "@/components/organisms/simulacion-laboral/paradigma/GranDiferenciacion";
  <GranDiferenciacion />;
  ```

### EvidenciaEnVivo

- **Descripción:** "04 — La evidencia, en vivo". Sección de fondo claro con un mockup del dashboard de resultado final de la simulación: 6 métricas con conteo animado y barra de progreso, comparación de 13 soft skills (peer review vs. autoevaluación) con barras animadas, y dos columnas de quotes (fortalezas / áreas de mejora). Las animaciones se disparan con `IntersectionObserver` al entrar en pantalla.
- **Props:** Ninguna.
- **Dependencias:** `lucide-react` (íconos de métricas), `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import EvidenciaEnVivo from "@/components/organisms/simulacion-laboral/paradigma/EvidenciaEnVivo";
  <EvidenciaEnVivo />;
  ```

### ElMecanismo

- **Descripción:** "05 — El mecanismo". Sección de fondo oscuro con un stepper de 4 pasos (Kick-off, Ejecución, Peer review, Demo Day): la línea de progreso se completa y los círculos se activan en cascada al entrar en pantalla, cada uno con un color sólido distinto en una progresión rosa → cyan. Debajo, 3 chips con los datos que captura la plataforma.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import ElMecanismo from "@/components/organisms/simulacion-laboral/paradigma/ElMecanismo";
  <ElMecanismo />;
  ```

### Closing

- **Descripción:** Frase de cierre ("No es un CV. Es evidencia observable mientras ocurre.") sobre fondo claro, con fade-in al hacer scroll.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Closing from "@/components/organisms/simulacion-laboral/paradigma/Closing";
  <Closing />;
  ```

### CTAFinal

- **Descripción:** CTA de cierre con los 3 caminos por audiencia (Para talento, Para empresas, Para instituciones), cada card linkeando a la ruta real correspondiente (`/simulacion-laboral/paradigma`, `/para-empresas/contratar`, `/para-instituciones`).
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import CTAFinal from "@/components/organisms/shared/CTAFinal";
  <CTAFinal />;
  ```

---

## Componentes de "Simulación Laboral — Qué observamos"

Sección de la página `/simulacion-laboral/que-observamos`. Comprende las 6 dimensiones que se observan durante la ejecución y el cierre hacia las otras dos sub-páginas.

### SeisDimensiones

- **Descripción:** "Seis dimensiones". Selector de dimensiones tipo "stories": 6 tabs (Participación, Colaboración, Comunicación, Ejecución, Autonomía y toma de decisiones, Adaptación y trayectoria), cada uno con un ícono y una barra de progreso que se llena sola en 5.2s y avanza automáticamente a la siguiente dimensión (o se puede clickear para saltar directo). Al cambiar de dimensión, el panel hace fade-out/fade-in y el contenido (título, descripción, pregunta, chips y "Señal") entra en cascada. Los tabs tienen hover que refuerza que son clickeables.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import SeisDimensiones from "@/components/organisms/simulacion-laboral/que-observamos/SeisDimensiones";
  <SeisDimensiones />;
  ```

### LoQueSigue

- **Descripción:** "Lo que sigue". Cierre de la página con dos tarjetas que linkean a `/simulacion-laboral/como-funciona` y `/simulacion-laboral/que-insights-genera`.
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import LoQueSigue from "@/components/organisms/simulacion-laboral/que-observamos/LoQueSigue";
  <LoQueSigue />;
  ```

---

## Componentes de "Simulación Laboral — Cómo funciona"

Sección de la página `/simulacion-laboral/como-funciona`. Cubre la línea de tiempo de ejecución y las señales que se registran durante el proceso.

### PuntoDePartida

- **Descripción:** "01 — El punto de partida". Sección clara que muestra los parámetros que define una institución al iniciar una simulación (población, perfiles, conocimientos, cantidad de participantes, objetivos, contexto, criterios de participación) y cierra con una frase de resultado: "Una cohorte lista para ser observada en un contexto común".
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import PuntoDePartida from "@/components/organisms/simulacion-laboral/como-funciona/PuntoDePartida";
  <PuntoDePartida />;
  ```

### Agrupamiento

- **Descripción:** "02 — El agrupamiento". Sección oscura con pentágono animado de 5 nodos que aparecen en orden, líneas con gradiente de marca y perfiles de personas reales con bandera de país y rol. Los perfiles cambian de forma sincronizada cada 3-5 segundos, con fotos y banderas posicionadas por CSS para evitar bugs de `foreignObject` en Safari iOS. Debajo, chips de características (Multidisciplinarios, Multiculturales, Distribuidos, Asignados aleatoriamente) y pull quote sobre la importancia de la aleatoriedad.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `next/image`, `flag-icons` (importado globalmente en `layout.tsx`).
- **Uso:**
  ```tsx
  import Agrupamiento from "@/components/organisms/simulacion-laboral/como-funciona/Agrupamiento";
  <Agrupamiento />;
  ```

### Insumo

- **Descripción:** "03 — El desafío". Sección clara que explica qué es un desafío y muestra ejemplos concretos de desafíos, junto con los verbos (Construir, Diseñar, Analizar, etc.) y las fuentes de donde puede provenir (Empresa, Institución, Startup, Caso ficcionalizado). Los items entran escalonados desde la izquierda.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Insumo from "@/components/organisms/simulacion-laboral/como-funciona/Insumo";
  <Insumo />;
  ```

### LineaDeTiempo

- **Descripción:** "04 — La línea de tiempo". Cadena de 6 nodos SVG que van creciendo de tamaño (0 → 1 → 2 → 3 → 4 → ✓), conectados por líneas que se "dibujan" en cascada al entrar en viewport. Usa una progresión de color rosa → cian (marca NC) en vez de colores sueltos. Debajo, una leyenda de 3 etapas (Semana 0, Semanas 1 a 4, Demo Day y cierre) y un pill con la duración típica.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import LineaDeTiempo from "@/components/organisms/simulacion-laboral/como-funciona/LineaDeTiempo";
  <LineaDeTiempo />;
  ```

### LoQueSeRegistra

- **Descripción:** "05 — Lo que se registra". Chips de las señales que se registran durante la ejecución (Participación, Colaboración, Comunicación, Trayectoria, Entregables, Peer review), cada uno con un borde de color distinto, entrando en cascada. Debajo, dos tarjetas de cierre hacia `/simulacion-laboral/que-observamos` y `/simulacion-laboral/que-insights-genera`.
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import LoQueSeRegistra from "@/components/organisms/simulacion-laboral/como-funciona/LoQueSeRegistra";
  <LoQueSeRegistra />;
  ```

---

## Componentes de "Simulación Laboral — Qué insights genera"

Sección de la página `/simulacion-laboral/que-insights-genera`. Cubre cómo el programa conecta formación y trabajo, y cómo una señal se convierte en insight.

### ParticipanteEquipo

- **Descripción:** "01–02 — Participante y Equipo". Sección clara con tabla comparativa entre perspectiva individual y de equipo. Las filas se deslizan escalonadamente al entrar en pantalla. Cierra con dos pull quotes que remarcan que el trabajo no ocurre en individuos aislados.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import ParticipanteEquipo from "@/components/organisms/simulacion-laboral/que-insights-genera/ParticipanteEquipo";
  <ParticipanteEquipo />;
  ```

### Cohorte

- **Descripción:** "03 — Cohorte". Sección clara con visual de escala Individuals → Teams → Cohort. Chips de patrones colectivos (Patrones de participación, Diferencias entre equipos, etc.) y cierre con frase sobre la capacidad de observar patrones cuando se mira a muchas personas.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Cohorte from "@/components/organisms/simulacion-laboral/que-insights-genera/Cohorte";
  <Cohorte />;
  ```

### Programa

- **Descripción:** "04 — Programa". Diagrama orbital: un hub central ("Simulación Laboral") conectado por spokes a 4 nodos (Learning, Knowledge, Evidence, Work), rodeado de un anillo punteado con gradiente rosa → cian. 5 puntos de colores orbitan continuamente alrededor del anillo usando animación SVG nativa (`<animateMotion>` sobre un `<mpath>`), sin depender de JS. Debajo, una leyenda con los 5 puntos de color y su significado.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Programa from "@/components/organisms/simulacion-laboral/que-insights-genera/Programa";
  <Programa />;
  ```

### SenalAlInsight

- **Descripción:** "05 — De la señal al insight". Flujo vertical de 3 niveles (Signals → Patterns → Insights) que se revela en cascada al entrar en viewport: Signals muestra 7 chips neutros, Patterns muestra 6 chips coloreados por categoría (mismos acentos que `ElMecanismo`/`LoQueSeRegistra`), e Insights muestra 3 citas de ejemplo con borde izquierdo en gradiente y el tag "Ejemplo ilustrativo". Cierra con un disclaimer aclarando que son ejemplos ilustrativos, no inferencias automáticas del sistema.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import SenalAlInsight from "@/components/organisms/simulacion-laboral/que-insights-genera/SenalAlInsight";
  <SenalAlInsight />;
  ```

---

## Componentes de "Para Instituciones"

Sección de la página `/para-instituciones`. Cubre desde el hero hasta el CTA final de la página.

### HeroInstituciones

- **Descripción:** "01 — Hero". Hero con eyebrow "For education & training programs", titular en dos líneas (la segunda con gradiente), descripción y dos CTAs (primario "Diseñar una solución" que hace scroll al `#contacto`, secundario "Ver cómo funciona" que linkea a `/simulacion-laboral/como-funciona`). A la derecha, un panel de vista previa tipo dashboard (subcomponente interno `PreviewCard`): topbar con 3 puntos y el título "Vista previa · Panel institucional", 3 stats (Participantes y Equipos con conteo animado, Semanas como texto fijo "4–6"), 3 filas de equipos con avatares superpuestos y barra de progreso (Fintech 82%, Healthtech 64%, Retail 91%) y un pie con punto verde pulsante. Los números y las barras se disparan con `IntersectionObserver`.
- **Props:** Ninguna.
- **Dependencias:** `next/link`, `next/image`, `lucide-react` (ícono `ArrowRight`), `@/components/ui/reveal`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import HeroInstituciones from "@/components/organisms/para-instituciones/HeroInstituciones";
  <HeroInstituciones />;
  ```

### ElProblema

- **Descripción:** "02 — El problema". Sección clara que presenta 3 problemas de las instituciones (falta de experiencia, difícil demostrar capacidades, desconexión con el mercado) en cards con iconos y colores de la paleta. Cierra con frase destacada sobre la Simulación Laboral como capa de experiencia y evidencia.
- **Props:** Ninguna.
- **Dependencias:** `lucide-react` (íconos `Download`, `GraduationCap`, `Link2`), `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import ElProblema from "@/components/organisms/para-instituciones/ElProblema";
  <ElProblema />;
  ```

### LaSolucion

- **Descripción:** "03 — La solución". Sección con 5 pasos (Diseñamos el desafío, Formamos equipos, Ejecutan varias semanas, Generamos evidencia, Conectamos la experiencia con oportunidades) presentados en cards con iconos de lucide y animaciones de entrada escalonadas.
- **Props:** Ninguna.
- **Dependencias:** `lucide-react` (íconos `Target`, `Users`, `Briefcase`, `BarChart2`, `Link2`), `@/components/ui/reveal`, `@/components/ui/sectionBadge`.
- **Uso:**
  ```tsx
  import LaSolucion from "@/components/organisms/para-instituciones/LaSolucion";
  <LaSolucion />;
  ```

### Beneficios

- **Descripción:** "04 — Beneficios". Sección que divide los beneficios en dos bloques: Experiencia (problemas abiertos, equipos, plazos, entregables, decisiones) y Empleabilidad (evidencias de ejecución, colaboración, trayectoria, feedback). Incluye comparación "Antes" vs "Con Simulación Laboral" y frases de resultado con borde izquierdo rosa.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `@/components/ui/sectionBadge`.
- **Uso:**
  ```tsx
  import Beneficios from "@/components/organisms/para-instituciones/Beneficios";
  <Beneficios />;
  ```

### Comunidad

- **Descripción:** "05 — Comunidad". Sección oscura que muestra cómo una experiencia compartida transforma una audiencia en comunidad: acciones (trabajar juntos, comunicarse, resolver, compartir) y elementos que la institución puede activar (equipos, desafíos, comunidades, eventos, demos, peer review, networking). Cierra con pull quote.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Comunidad from "@/components/organisms/para-instituciones/Comunidad";
  <Comunidad />;
  ```

### VisibilidadOrganica

- **Descripción:** "06 — Visibilidad orgánica". Sección clara que explica cómo la experiencia se convierte en contenido para la marca: flujo Experiencia → Contenido → Participantes → Redes → Alcance, y 4 pasos de amplificación (Sistema genera, Adaptado a la marca, Distribuido por participantes, Amplificación orgánica). Incluye dos cards de beneficio.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import VisibilidadOrganica from "@/components/organisms/para-instituciones/VisibilidadOrganica";
  <VisibilidadOrganica />;
  ```

### Ecosistema

- **Descripción:** "07 — Ecosistema". Sección oscura que presenta los actores del ecosistema profesional que pueden involucrarse en la simulación: Empresas, Mentores, Jurados, Profesionales. Cada uno en card con icono y color de la paleta. Cierra con pull quote.
- **Props:** Ninguna.
- **Dependencias:** `lucide-react` (íconos `Briefcase`, `Users`, `Gavel`, `Star`), `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import Ecosistema from "@/components/organisms/para-instituciones/Ecosistema";
  <Ecosistema />;
  ```

### TalentPipeline

- **Descripción:** "08 — Talent pipeline". Pista horizontal animada con 4 paradas y una final (ícono ✓), con dos luces (rosa y cian) que recorren el trayecto en loop vía `animateMotion` nativo de SVG. Debajo, las etiquetas del recorrido completo: Formación → Simulación → Evidencia → Visibilidad del talento → Oportunidades laborales. Cierra con un bloque "Staffing".
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import TalentPipeline from "@/components/organisms/para-instituciones/TalentPipeline";
  <TalentPipeline />;
  ```

### Diferenciacion

- **Descripción:** "09 — Diferenciación". Card comparativa de dos columnas: "en lugar de competir solamente por" (lista con ✕ — Contenidos, Profesores, Certificaciones, Horas de formación — que entra en cascada al hacer scroll) vs. "podés ofrecer" (texto destacado). Debajo, chips de a quién le sirve (Bootcamps, Universidades, Academias, Programas públicos, Programas corporativos, Iniciativas de empleabilidad).
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import Diferenciacion from "@/components/organisms/para-instituciones/Diferenciacion";
  <Diferenciacion />;
  ```

### CasoDeExito

- **Descripción:** "10 — Caso de éxito". Bloque compacto que resume el caso Oracle Next Education con las 3 métricas clave (830 participantes, 106 equipos, 74 contratados) y un CTA "Ver el caso completo" que redirige a `/sobre-nosotros/casos-exito`, donde vive el detalle completo. Reemplaza al bloque anterior para evitar duplicación de contenido entre páginas. Incluye los logos de Oracle, Alura y ONE (Oracle Next Education), los mismos archivos que en la sección "Hackathon Oracle Next Education" de la home (`CasoOracle`), con alturas ajustadas (ver "Importante"): van en una sola fila, entre las estadísticas y el botón "Ver el caso completo", en todos los tamaños. El título ("De formación a experiencia laboral") queda en una sola línea desde tablet (`md`); en celular baja a dos porque no entra. Los tres logos son PNG blancos sobre transparente (`/logos/oracle.png`, `/logos/alura.png`, `/logos/one.png`), pensados para fondo oscuro.
- **Props:** Ninguna.
- **Dependencias:** `next/image`, `next/link`, `lucide-react` (ícono `ArrowRight`), `@/components/ui/reveal`, `@/components/ui/sectionBadge`.
- **Importante:** Oracle y Alura tienen mucho margen transparente en el archivo, por eso las cajas son mucho más altas que lo que se ve. Respecto de la home, Oracle (wordmark muy ancho) se achicó un poco y Alura (wordmark muy corto) se agrandó un poco, para que los tres tengan un peso visual parecido: Oracle 58px (66px desde `md`), Alura 80px (90px desde `md`) y ONE 28px (32px desde `md`). La caja que contiene los logos tiene alto fijo (28px, 32px desde `md`) y los logos se centran en ella, así el margen transparente de los archivos no agranda el espacio entre las estadísticas y el botón (queda 36px arriba y 36px abajo). Por debajo de 360px se achican un poco para que entren en una sola fila (a 320px, ONE bajaba solo a una segunda línea). Si se cambia algún logo, hay que revisar de nuevo esas alturas.
- **Uso:**
  ```tsx
  import CasoDeExito from "@/components/organisms/para-instituciones/CasoDeExito";
  <CasoDeExito />;
  ```

### Adaptable

- **Descripción:** "11 — Adaptable". Lista de filas especificación → valor (Disciplinas, Sectores, Modalidades, Duración, Desafíos, Soluciones a medida), cada una con sus chips y su propio fade-in escalonado al hacer scroll.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `@/components/ui/sectionBadge`.
- **Uso:**
  ```tsx
  import Adaptable from "@/components/organisms/para-instituciones/Adaptable";
  <Adaptable />;
  ```

### Integracion

- **Descripción:** "12 — Integración". Animación de rompecabezas de 3 piezas: Tu programa (izquierda) | Simulación Laboral (centro) | Empresas que contratan (derecha). Las piezas laterales se deslizan y encajan; cuando se unen, aparece un destello blanco que activa el gradiente de marca en ellas. El centro muestra el logo de No Country en blanco. A la derecha, una flecha y el bloque "Genera" con los 5 resultados (Experience, Evidence, Ecosystem, Community, Opportunities).
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `@/components/ui/sectionBadge`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import Integracion from "@/components/organisms/para-instituciones/Integracion";
  <Integracion />;
  ```

### CTAInstituciones

- **Descripción:** CTA de cierre propio de la página ("¿Qué podría simular tu programa?"), con botón "Diseñar una solución" que hace scroll al `#contacto` para conectar con el formulario de Leandro. Aporta el título y la bajada; el bloque de contacto directo vive en `SimulacionFormInstituciones`, que se monta a continuación.
- **Props:** Ninguna.
- **Dependencias:** `lucide-react` (ícono `ArrowRight`), `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import CTAInstituciones from "@/components/organisms/para-instituciones/CTAInstituciones";
  <CTAInstituciones />;
  ```

### SimulacionFormInstituciones

- **Descripción:** Bloque de contacto directo. Card con la foto y datos de Leandro (Founder, No Country) y un formulario simple (nombre, institución, email institucional, mensaje opcional) con botón "Enviar a Leandro". Al enviar, el botón cambia a "Enviado ✓" (por ahora es solo estado local, sin backend). Tiene `id="contacto"` para recibir el scroll suave desde `CTAInstituciones` y el Hero.
- **Props:** Ninguna.
- **Dependencias:** `next/image`, `lucide-react` (ícono `ArrowRight`), `@/components/ui/reveal`, `react` (`useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import SimulacionFormInstituciones from "@/components/organisms/para-instituciones/SimulacionFormInstituciones";
  <SimulacionFormInstituciones />;
  ```

---

## Componentes de "Sobre Nosotros — Casos de Éxito"

Sección de la página `/sobre-nosotros/casos-exito`. Cubre el caso Oracle Next Education · Hackathon ONE G9 con datos reales y detallados.

### HeroCasoExito

- **Descripción:** Hero con eyebrow "Hackathon ONE G9", titular en dos líneas (la segunda con gradiente) y descripción con los números macro: 830 estudiantes de ONE, 3 desafíos con IA, equipos multidisciplinarios. Debajo, los logos de Oracle, Alura y ONE (mismos archivos y alturas que en la sección "Hackathon Oracle Next Education" de la home, `CasoOracle`). Después, 4 stats con conteo animado (830 participantes, 106 equipos, 3 desafíos con IA, 100% remota · LATAM) y línea de impacto sobre las +600.000 personas impactadas por ONE en LATAM.
- **Props:** Ninguna.
- **Dependencias:** `next/image`, `@/components/ui/reveal`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import HeroCasoExito from "@/components/organisms/sobre-nosotros/casos-exito/HeroCasoExito";
  <HeroCasoExito />;
  ```

### Alcance

- **Descripción:** "01 — Alcance". Sección clara que muestra el alcance del caso: 830 personas, 106 equipos, 3 productos con IA. Incluye barras horizontales con equipos por desafío (FinAI 38, EnergyAI 35, Techmind 33), un gráfico de barras verticales con roles por equipo (Backend, Front End, Data Scientist, AI Engineer) y chips con el stack técnico (OCI, Java, Python, Spring Boot).
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `@/components/ui/sectionBadge`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import Alcance from "@/components/organisms/sobre-nosotros/casos-exito/Alcance";
  <Alcance />;
  ```

### AlcanceRegional

- **Descripción:** "02 — Alcance regional". Sección oscura que muestra el alcance geográfico del caso: +21 países, 2 idiomas (ES + PT) y distribución por país con barras horizontales, ordenadas de mayor a menor (Brasil 197, México 120, Colombia 111, Argentina 98, Perú 43, Venezuela 35; el ancho de cada barra es proporcional al valor más alto) más una nota de +15 países adicionales.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `@/components/ui/sectionBadge`.
- **Uso:**
  ```tsx
  import AlcanceRegional from "@/components/organisms/sobre-nosotros/casos-exito/AlcanceRegional";
  <AlcanceRegional />;
  ```

### Recorrido

- **Descripción:** "03 — El recorrido". Sección clara que describe las 5 etapas del hackathon: Convocatoria, Creación de equipos, Kickoff, Colaboración y desarrollo, Demo Day. Cada etapa con su número y descripción.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `@/components/ui/sectionBadge`.
- **Uso:**
  ```tsx
  import Recorrido from "@/components/organisms/sobre-nosotros/casos-exito/Recorrido";
  <Recorrido />;
  ```

### ComoSeMide

- **Descripción:** "04 — Cómo se mide". Sección oscura que muestra cómo la plataforma ordena a los equipos por índice de actividad: leaderboard con los 6 equipos del PDF del caso (pág. 5: Equipo 18, 49, 29, 4, 13, 66), con cabecera de columnas (#, Equipo, Proyecto, Reuniones, Índice de actividad) desde `md` — "Proyecto" no va pegado a "Equipo": tiene su propia columna con aire de los dos lados (columnas vacías a modo de separador), cerca del centro de la fila. Por debajo de `md` no se muestra la cabecera y el proyecto vuelve a ir junto al nombre del equipo, igual que "Reuniones" y la barra, que también se ocultan (solo queda el número). Debajo, "106 equipos participando · 97 equipos activos" resaltado con números grandes (97 en color de acento) — mismos valores que el PDF. Cierra con comparativa de peer review de 13 habilidades blandas (Comunicación, Adaptación, Liderazgo como muestra).
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `@/components/ui/sectionBadge`.
- **Uso:**
  ```tsx
  import ComoSeMide from "@/components/organisms/sobre-nosotros/casos-exito/ComoSeMide";
  <ComoSeMide />;
  ```

### DemoDay

- **Descripción:** "05 — Demo Day". Sección clara que recrea la presentación final en vivo: mockup de pantalla compartida con el producto FinAI (stats de conversión, gráfico de altas por semana, funnel de pasos), columna de participantes que presentan (Ana, Valeria, Diego con badge "HABLA" en la activa, oculta en mobile/tablet), panel "Quién observa" (3 jurados + avatares de +12 empresas invitadas) y stats en vivo (24 equipos presentando, 157 asistentes, 14 países, 100% remoto). El layout usa 3 columnas en desktop. El contenedor es `max-w-[1120px] mx-auto px-6`, igual que el resto de las secciones de esta página — antes era `w-full px-6 md:px-12` (sin límite de ancho), por eso quedaba más ancho que las demás.
- **Props:** Ninguna.
- **Dependencias:** `next/image`, `lucide-react` (íconos `ChevronRight`, `Mic`), `@/components/ui/reveal`, `@/components/ui/sectionBadge`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import DemoDay from "@/components/organisms/sobre-nosotros/casos-exito/DemoDay";
  <DemoDay />;
  ```

### ImpactoContratacion

- **Descripción:** "06 — Impacto en contratación" ("Talento job-ready, a disposición para entrevistar"). Sección oscura con métricas del impacto en contratación: CVs por leer (0), horas de screening (−82%), de lista a entrevista (3 días), y shortlist de perfiles ordenados por conducta observada. Cada fila de la shortlist tiene foto de perfil, nombre y rol/ubicación, peer score + cantidad de reseñas (dato que figura en el caso ONE en PDF, distinto del índice de actividad que ordena la lista), cantidad de experiencias y una barra de score animada al entrar en pantalla. En mobile el peer score y las reseñas van debajo del nombre (se ocultan las columnas de experiencias y la barra). Cierra con nota de 574 perfiles validados y 5 sugeridos para la búsqueda.
- **Props:** Ninguna.
- **Dependencias:** `next/image`, `@/components/ui/reveal`, `@/components/ui/sectionBadge`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import ImpactoContratacion from "@/components/organisms/sobre-nosotros/casos-exito/ImpactoContratacion";
  <ImpactoContratacion />;
  ```

### EcosistemaContenido

- **Descripción:** "07 — Ecosistema y contenido orgánico". Sección clara que muestra el alcance orgánico del caso: 905 personas conectadas en una edición, y 4 métricas con conteo animado (1.480 piezas compartidas, 640 menciones de marca, 18.400 interacciones, 220K alcance orgánico). Cierra con pull quote destacando el costo cero en pauta.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `@/components/ui/sectionBadge`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Uso:**
  ```tsx
  import EcosistemaContenido from "@/components/organisms/sobre-nosotros/casos-exito/EcosistemaContenido";
  <EcosistemaContenido />;
  ```

### FunnelCompleto

- **Descripción:** "08 — De punta a punta" ("De la formación a la contratación, medido completo"). Sección oscura con funnel de 6 etapas (Participación 1.240 → Finalización 892 → Talento job-ready 574 → Interacciones 498 → Entrevistas 412 → Contratados 74) con barras animadas al entrar en pantalla; el ancho de cada barra es el valor como % de Participación (el primer escalón). La etapa final está resaltada en rosa. Es el único contenido de la sección, por eso las barras (10px de alto) y la tipografía son más grandes que en otras listas de la página: el valor de cada fila (info primaria, 17px extrabold DM Sans) se ve claramente más grande que su etiqueta (info secundaria, 14px semibold).
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `@/components/ui/sectionBadge`, `react` (`useEffect`, `useRef`, `useState` — es `"use client"`).
- **Importante:** El funnel tiene que ser descendente en todo momento (cada etapa es un subconjunto de la anterior) — si se cambia algún valor, hay que revisar que siga bajando de punta a punta y recalcular el `widthPct` de esa fila y de las siguientes.
- **Uso:**
  ```tsx
  import FunnelCompleto from "@/components/organisms/sobre-nosotros/casos-exito/FunnelCompleto";
  <FunnelCompleto />;
  ```

### LaRelacion

- **Descripción:** "09 — La relación". Sección clara que explica por qué no es una edición única: Oracle Next Education necesitaba conectar a sus graduados con empresas sin depender de procesos tradicionales. Muestra 2 stats destacados (4 acuerdos consecutivos, +2.500 perfiles validados) con gradiente de marca.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`, `@/components/ui/sectionBadge`.
- **Uso:**
  ```tsx
  import LaRelacion from "@/components/organisms/sobre-nosotros/casos-exito/LaRelacion";
  <LaRelacion />;
  ```

### TestimoniosCaso

- **Descripción:** "10 — Quién lo dice". Sección oscura con dos testimonios en cards con borde izquierdo rosa (Amanda Gelumbauskas de Oracle, Christian Velasco Argañaraz de Alura), cada uno con foto de perfil circular (`Avatar`, con fallback de iniciales si la imagen no carga) junto al nombre y rol. Mismas fotos que usan estos dos testimonios en `CasoOracle` (home): `/people/amanda-gelumbauskas-2.jpg` y `/people/christian-velaszo-arganaraz.jpg`. Debajo, chips con las organizaciones que participaron: Oracle, Alura Latam, John Deere, Ficohsa, Banco Azteca, Get on Board, MCIO, Instituto PROA, SoftSell.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/avatar`, `@/components/ui/reveal`, `@/components/ui/sectionBadge`.
- **Uso:**
  ```tsx
  import TestimoniosCaso from "@/components/organisms/sobre-nosotros/casos-exito/TestimoniosCaso";
  <TestimoniosCaso />;
  ```

### ClosingCaso

- **Descripción:** Frase de cierre ("El talento se demuestra trabajando.") sobre fondo claro, con "trabajando" en gradiente de marca. Cierra la narrativa del caso antes del `CTAFinal` compartido.
- **Props:** Ninguna.
- **Dependencias:** `@/components/ui/reveal`.
- **Uso:**
  ```tsx
  import ClosingCaso from "@/components/organisms/sobre-nosotros/casos-exito/ClosingCaso";
  <ClosingCaso />;
  ```

---

## Sheet (utilidad compartida)

- **Descripción:** Panel lateral que entra desde la derecha, con overlay oscuro. Ancho `94vw` hasta los 960px de viewport; desde ahí, `50vw` con un mínimo de 640px y un máximo de 920px (bastante más ancho que un sheet chico, pensado para el detalle de un proyecto con varios equipos). Está construido sobre `Dialog` de Radix, así que resuelve solo el foco, la tecla Esc, el click en el overlay y el bloqueo del scroll del fondo. Exporta `Sheet`, `SheetTrigger`, `SheetClose`, `SheetContent`, `SheetTitle` y `SheetDescription`.
- **Props:** Las de los primitivos de Radix (`open`, `onOpenChange`, etc.). `SheetContent` acepta `className` para ajustar el panel.
- **Dependencias:** `radix-ui`, `@/lib/utils`.
- **Ubicación:** `@/components/ui/sheet` (no `organisms`, es una utilidad de UI reutilizable).
- **Uso:**
  ```tsx
  <Sheet open={open} onOpenChange={setOpen}>
    <SheetContent>
      <SheetTitle>Título</SheetTitle>
      <SheetDescription>Descripción</SheetDescription>
    </SheetContent>
  </Sheet>
  ```
- **Importante:** Radix pide un `SheetTitle` (y un `SheetDescription`) dentro del contenido por accesibilidad; si faltan, avisa en consola. Como `globals.css` no define los tokens de shadcn (`bg-background`, etc.), los colores del panel son hex explícitos.

---

## Componentes de "Sobre Nosotros — Showcase"

Sección de la página `/sobre-nosotros/showcase`. Los datos de ejemplo y los tipos viven en `@/lib/showcase` (`ShowcaseProject`, `ShowcaseEdition`, `ShowcaseTeam`); son ilustrativos hasta que exista la fuente real.

### ProjectSheet

- **Descripción:** Sheet de proyecto. Se abre al tocar una card de proyecto y muestra la vertical, el título, qué resuelve, chips ("N equipos participantes" y la edición o "N ediciones") y la lista de equipos. Cada fila de equipo tiene: avatares superpuestos, "N reuniones · N/N entregables · N mensajes", el índice de actividad (barra + valor, `teamScore` de `@/lib/showcase`) y un botón de repositorio (ícono de GitHub, abre `team.repoUrl` en otra pestaña) — solo se muestra si el equipo tiene `repoUrl`. La fila tiene dos zonas clickeables independientes (la info del equipo, que navega a su página, y el botón de repositorio, que abre el link), por eso el contenedor de la fila es un `<div>` y no un `Link`: un `<a>` no puede ir anidado dentro de otro `Link`/`<a>`. Si el proyecto corrió en más de una edición, los equipos se agrupan por mes ("Simulación laboral de Julio 2026") con un separador, porque el "Equipo 1" de un mes no es el de otro. No muestra estado ("En curso" / "Finalizada") en ningún lado.
- **Props:** `project: ShowcaseProject | null`, `open: boolean`, `onOpenChange: (open: boolean) => void`, `teamHref?: (team: ShowcaseTeam) => string`. Si se pasa `teamHref`, la info de cada equipo es un `Link` a su página (ver `TeamDetail`); si no, es solo informativa. Para linkear a la página del equipo se usa `teamHref` de `@/lib/showcase`.
- **Dependencias:** `next/link`, `lucide-react` (íconos `Users`, `X`), `@/components/ui/sheet`, `GithubIcon`, `@/lib/showcase` (`teamScore`, `teamMessages`), `"use client"`.
- **Uso:**
  ```tsx
  import ProjectSheet from "@/components/organisms/sobre-nosotros/showcase/ProjectSheet";
  import { teamHref } from "@/lib/showcase";
  <ProjectSheet project={selected} open={open} onOpenChange={setOpen} teamHref={teamHref} />;
  ```
- **Importante:** El padre debe conservar el proyecto seleccionado al cerrar (poner solo `open` en `false`, sin volver `project` a `null`); si no, el contenido desaparece antes de que termine la animación de salida. Lo monta `Showcase.tsx` (la grilla de proyectos del showcase).

### TeamDetail

- **Descripción:** Página de un equipo, en la ruta dinámica `/sobre-nosotros/showcase/[equipo]` (el `id` del equipo, ej. `tv-jul-1`). De arriba hacia abajo: link "Volver al showcase"; encabezado con el nombre del proyecto, badges (equipo, sector, "Simulación laboral · mes", "Feedback del equipo") y los botones "Compartir proyecto" y "Ver repositorio" (este se muestra siempre: si el equipo tiene `repoUrl` es un link que abre en otra pestaña; si no, queda deshabilitado); tarjetas "Necesidad del negocio" y "Solución del equipo"; "Demo Day" (marco de video con duración + notas); "Stack tecnológico"; "Equipo · N integrantes" con la lista de integrantes (avatar, rol, bandera y país, promedio semanal) junto al mismo panel "Trayectoria de Actividad" de la home (`TrayectoriaActividad`, con los mismos datos de ejemplo Talento 1 a 5); y una franja final con link a `/#live`. No lleva hero propio ni cuadrado de iniciales al lado del título. La página (`[equipo]/page.tsx`) responde 404 si el `id` no existe y, mientras los datos sean de ejemplo, sale con `robots: { index: false }` y no está en el sitemap.
- **Props:** `detail: ShowcaseTeamDetail` (se obtiene con `getTeamDetail(id)` de `@/lib/showcase`).
- **Dependencias:** `next/link`, `lucide-react` (íconos `ArrowUpRight`, `ChevronLeft`, `Play`, `TrendingUp`), `@/components/ui/reveal`, `TrayectoriaActividad`, `ShareProjectDialog`, `GithubIcon`, `LinkedinIcon`, `@/lib/showcase`. Es un Server Component.
- **Uso:**
  ```tsx
  import TeamDetail from "@/components/organisms/sobre-nosotros/showcase/TeamDetail";
  <TeamDetail detail={detail} />;
  ```
- **Importante:** Los integrantes de los datos de ejemplo solo tienen nombre de pila; apellido, rol, país, LinkedIn, GitHub y trayectoria semanal se generan de forma determinística en `getTeamDetail`/`buildMember`. Cada integrante se muestra con nombre completo y, debajo del país, dos íconos chicos (LinkedIn y GitHub, `LinkedinIcon`/`GithubIcon`) que abren su perfil en otra pestaña. Cuando haya datos reales, se reemplaza esa función y el resto no cambia.

### ShareProjectDialog

- **Descripción:** Botón "Compartir proyecto" que abre un modal centrado (Radix `Dialog`) con tres opciones: "Descargar pieza compartible" (deshabilitada, "Próximamente"), "Copiar link al repositorio" y "Copiar link al video de demo day". Las dos de copiar están habilitadas solo si el equipo tiene `repoUrl` / `demoUrl`, y muestran "¡Link copiado!" o "No se pudo copiar el link".
- **Props:** `projectTitle: string`, `repoUrl?: string`, `demoUrl?: string`.
- **Dependencias:** `radix-ui` (`Dialog`), `lucide-react` (íconos `ImageIcon`, `Share2`, `Video`, `X`), `GithubIcon`, `"use client"`.
- **Uso:**
  ```tsx
  import ShareProjectDialog from "@/components/organisms/sobre-nosotros/showcase/ShareProjectDialog";
  <ShareProjectDialog projectTitle="TrazaVerde" repoUrl={team.repoUrl} demoUrl={team.demoUrl} />;
  ```

### GithubIcon

- **Descripción:** Ícono de GitHub inline (SVG). Existe porque `lucide-react` v1 ya no incluye íconos de marcas.
- **Props:** `className?: string`.
- **Dependencias:** Ninguna.
- **Uso:**
  ```tsx
  import GithubIcon from "@/components/organisms/sobre-nosotros/showcase/GithubIcon";
  <GithubIcon className="size-4" />;
  ```

### LinkedinIcon

- **Descripción:** Ícono de LinkedIn inline (SVG), mismo criterio que `GithubIcon`.
- **Props:** `className?: string`.
- **Dependencias:** Ninguna.
- **Uso:**
  ```tsx
  import LinkedinIcon from "@/components/organisms/sobre-nosotros/showcase/LinkedinIcon";
  <LinkedinIcon className="size-[13px]" />;
  ```

### TrayectoriaActividad (compartido)

- **Descripción:** Panel "Trayectoria de Actividad" completo, tal como se ve en la home: título, subtítulo ("Índice 0-100 por talento, semana a semana."), botones de semana (Sem 1 / Sem 3 / Actual), gráfico de 5 líneas con sus colores, línea punteada sobre "Actual" y el pie con avatares ("Peer Review en curso — 5 de 8 completados"). Se movió tal cual desde `EvidenciaConductual` (pestaña Trajectory) a este archivo para usar el mismo panel en la home y en la página de equipo del showcase, sin copiarlo. No se cambió nada de cómo se ve ni de sus datos.
- **Props:** Ninguna. Los datos (Talento 1 a 5) y los colores viven dentro del componente. Ocupa el alto de su contenedor (`h-full`), por eso se monta dentro de la tarjeta `h-[480px]` que usa la home.
- **Dependencias:** `recharts`, `@/components/ui/chart`, `"use client"`.
- **Ubicación:** `@/components/organisms/shared/TrayectoriaActividad`.
- **Uso:**
  ```tsx
  import TrayectoriaActividad from "@/components/organisms/shared/TrayectoriaActividad";
  <div className="bg-[#0c0d21] border border-white/5 rounded-[20px] p-6 md:p-8 h-[480px] flex flex-col justify-between shadow-2xl">
    <TrayectoriaActividad />
  </div>;
  ```

---

**Nota:** Todos los componentes se encuentran en `@/components/organisms` bajo Atomic Design, organizados en subcarpetas por página (`home/`, `simulacion-laboral/<pagina>/`, `para-instituciones/`, `sobre-nosotros/casos-exito/`) y una carpeta `shared/` para los componentes usados en varias páginas (`Navbar`, `Footer`, `CTAFinal`). Los componentes `ShowcaseSection`, `StatsSection` y `ParadigmaSection` no se movieron a esa estructura porque no los usa ninguna página actualmente — fueron reemplazados por `LiveSimulation`, `SimulationDefinition`, `FraseSection` y `HeroSection` actualizado.