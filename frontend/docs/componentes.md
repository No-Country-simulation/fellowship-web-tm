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
