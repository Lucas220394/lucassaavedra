# LucasSaavedra

Sitio web de **Lucas Saavedra** — cantante, compositor y productor musical uruguayo,
fundador de **PM Music Records** (Montevideo).

**En vivo:** https://lucas220394.github.io/lucassaavedra/

Construido con **Next.js 16 (App Router) + React 19 + Tailwind CSS v4**.
La estructura, los efectos, las transiciones, los botones y la tipografía están
tomados de la plantilla *Waveform* de Framer usada como referencia; los textos
(H1, H2, subtítulos y cuerpo) están en español y adaptados a la trayectoria de Lucas.

## Desarrollo

```bash
npm run dev     # http://localhost:3000
npm run build   # export estático -> ./out
```

## Despliegue en GitHub Pages

```bash
npm run deploy
```

Hace el export estático (`output: "export"` con `GITHUB_PAGES=true` →
`basePath: "/lucassaavedra"`) y publica `./out` en la rama `gh-pages`
mediante un worktree temporal. GitHub Pages sirve esa rama en:

**https://lucas220394.github.io/lucassaavedra/**

En local (`npm run dev` / `npm run build`) el sitio se sirve desde la raíz, sin `basePath`.

## Estructura

```
src/
  app/
    layout.tsx        # <html lang="es">, fuentes (Inter + Clash Display), metadata
    page.tsx          # composición de todas las secciones
    globals.css       # tokens de tema, tipografía, botones, keyframes (marquee, reveal, acordeón)
  components/
    Nav.tsx           # navegación fija con blur al hacer scroll + menú móvil
    Reveal.tsx        # animación de aparición al hacer scroll (IntersectionObserver)
    Counter.tsx       # contador animado para la sección de métricas
    Marquee.tsx       # cinta de texto en bucle infinito
    Faq.tsx           # acordeón de preguntas frecuentes
    ContactForm.tsx   # formulario de contacto (sin backend por ahora)
    Footer.tsx        # pie de página
  content/
    site.ts           # TODO el texto del sitio en un único módulo editable
```

## Secciones

Hero · Servicios · Trabajos · Nosotros · Métricas · Testimonios · Preguntas · Contactos · Footer

Anclas de navegación: `#servicios`, `#nosotros`, `#trabajos`, `#contacto`.

## Tipografía

- **Clash Display** (títulos, mayúsculas) — se carga desde Fontshare (`<link>` en `layout.tsx`).
- **Inter** (cuerpo) — vía `next/font`.

## Pendiente (según lo indicado)

- **Imágenes**: se usan temporalmente las URLs originales de la plantilla
  (`framerusercontent.com`). Reemplazar por fotos reales en `src/content/site.ts`
  y mover a `/public` o a un CDN. `next.config.ts` permite el dominio de Framer.
- **Redes sociales** (footer): los enlaces están en `#`. Cargar los reales en
  `footer.socials` dentro de `src/content/site.ts`.
- **Formulario de contacto**: `ContactForm.tsx` solo muestra un mensaje de éxito.
  Conectar un endpoint o servicio de formularios.
- **Email y teléfono**: `contact.email` / `contact.phone` en `site.ts` son
  provisionales.
- Los proyectos de "Trabajos" son los de la plantilla de referencia; actualizar
  con lanzamientos reales de PM Music Records. Los enlaces de "Escuchar en Spotify"
  apuntan al perfil real de Lucas Saavedra.
