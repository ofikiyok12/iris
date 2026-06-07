# iris

## Commands

| Command | What it runs |
|---|---|
| `npm run dev` | `vite` — dev server at localhost:5173 |
| `npm run build` | `tsc && vite build` — type-check then bundle |
| `npm run preview` | `vite preview` — serve built output locally |

## TypeScript quirks

- `verbatimModuleSyntax`: use `import type { Foo }` for type-only imports, never `import { Foo }`.
- `erasableSyntaxOnly`: no enums, no namespaces, no parameter properties. Use `const` objects or unions instead of enums.
- `noEmit: true` — `tsc` is type-check only; `vite` handles all bundling/transpilation.

## Project structure

```
src/main.tsx        — React entry point
src/App.tsx         — root component, assembles all sections
src/components/     — section components (Navbar, Hero, etc.)
src/index.css       — Tailwind entry (@tailwind directives)
src/assets/         — imported asset files
public/             — served at root (/favicon.svg, /icons.svg)
```

- React 19 with Vite 8, Tailwind CSS 3 (PostCSS plugin).
- No test framework, linter, or formatter installed.
- No custom Vite config beyond `@vitejs/plugin-react`.
- Single package, not a monorepo.
- Custom Tailwind colors in `tailwind.config.js`: `off-white` (#F7F7F5), `indigo-dark` (#11154c), `blue-mid` (#305e8e), `teal-accent` (#3bb9ad).
