# Portfolio — Alvaro Castellarin

Portfolio personal one-page, desarrollado para la materia **Desarrollo y Metodologías Web** (UAI).

- **Sitio publicado:** https://portfolio-alvaro-castellarin.vercel.app <!-- actualizar con la URL real de Vercel -->

## Stack

- [Astro 7](https://astro.build) — generador de sitios estáticos (HTML sin JS innecesario).
- [Tailwind CSS 4](https://tailwindcss.com) — estilos utilitarios, integrado vía `@tailwindcss/vite`.
- TypeScript para los scripts del cliente (menú, tema, validación del formulario).
- Deploy en [Vercel](https://vercel.com).

## Funcionalidades

- Secciones: Inicio (hero), Sobre mí, Proyectos y Contacto, con navbar fija y menú responsive.
- HTML semántico (`header`, `nav`, `main`, `section`, `footer`, un solo `h1`) y link "Saltar al contenido".
- Responsive de 360 px a desktop, sin scroll horizontal.
- Modo claro / oscuro (respeta la preferencia del sistema y se recuerda la elección).
- Animaciones de aparición sutiles que se desactivan con `prefers-reduced-motion`.
- Formulario de contacto con validación de campos accesible (mensajes con `aria-live`, `aria-invalid`).
- CV descargable en PDF (se activa al agregar el archivo, ver abajo).

## Correrlo localmente

Requisitos: Node.js 22 o superior.

```bash
git clone https://github.com/AlvaroCastellarin/portfolio.git
cd portfolio
npm install
npm run dev
```

El sitio queda en http://localhost:4321.

| Comando           | Acción                                      |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga en vivo  |
| `npm run build`   | Genera el sitio estático en `dist/`         |
| `npm run preview` | Sirve localmente el build de producción     |

## Estructura

```
src/
├── data/site.ts        # Todo el contenido: perfil, habilidades, proyectos
├── layouts/Layout.astro
├── components/         # Header, Hero, About, Projects, Contact, Footer
├── pages/index.astro
└── styles/global.css
public/                 # favicon y CV en PDF
```

Para actualizar textos, proyectos o links alcanza con editar `src/data/site.ts`.
Para habilitar el botón de CV, agregar `public/cv-alvaro-castellarin.pdf` y poner `hasCv: true`.

## Deploy

Vercel detecta Astro automáticamente: importar el repositorio en vercel.com → *Add New Project* → *Deploy*.
Cada push a `main` genera un nuevo deploy.
