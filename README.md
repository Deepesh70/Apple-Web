# Apple-Web Landing page clone

A small, modern single-page site built with Vite + React that showcases 3D product models and interactive UI components. This repo contains a lightweight Apple-style product showcase with Three.js model viewers and modular React components.

## Highlights

- Fast development with Vite
- React + JSX components in `src/`
- Integrated 3D product viewers under `src/components/models/` using Three.js
- Static assets served from `public/` (fonts, models, videos)

## Tech stack

- Framework: React (JSX)
- Bundler: Vite
- 3D: three.js (project-specific viewers in `src/components/three/`)
- Styling: plain CSS (see `index.css`) and component-scoped styles

## Project structure (important files)

- `index.html` — Vite entry HTML
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — top-level App component
- `src/components/` — UI components (Navbar, Hero, Showcase, Features, Productviewer, etc.)
- `src/components/models/` — 3D model components (Macbook, Macbook-14, Macbook-16)
- `public/` — static assets (fonts, models, videos)
- `package.json` — scripts and dependencies
- `vite.config.js` — Vite configuration

## Quick start (Windows PowerShell)

Prerequisites:

- Node.js (recommended: 16.x or later)

Install dependencies:

```powershell
npm install
```

Run development server:

```powershell
npm run dev
```

Open the URL shown by Vite (typically `http://localhost:5173`) in your browser.

Build for production:

```powershell
npm run build
```

Preview production build locally:

```powershell
npm run preview
```

## Editing notes

- 3D models: static model assets live in `public/models/` (or `public/` subfolders). Component wrappers are in `src/components/models/` and `src/components/three/`.
- To add a new 3D model viewer, create a new component under `src/components/models/`, wire it into `Productviewer.jsx`, and add the model files to `public/models/`.
- UI: follow the existing component patterns (functional components, props-driven) and keep styles in `index.css` or component-local CSS modules if you add them.

## Scripts (from `package.json`)

- `dev` — run Vite dev server
- `build` — build production assets
- `preview` — locally preview the production build

## License

This project is licensed under the MIT License — see the `LICENSE` file for full terms.


