# Next.js Base

A Kelor Project Base for a Next.js app: the output of `create-next-app@16.4.2`
with TypeScript, the App Router, Tailwind CSS, ESLint and a `src/` folder.

## Placeholders

Blocks can add code at these standard placeholders:

| File | Placeholder | For |
| --- | --- | --- |
| `src/app/layout.tsx` | `// kelor:imports` | imports for the root layout |
| `src/app/layout.tsx` | `{/* kelor:providers */}` | components rendered on every page, after `{children}` |
| `src/app/providers.tsx` | `// kelor:imports` | imports for the provider list |
| `src/app/providers.tsx` | `// kelor:wrappers` | providers that wrap every page, one entry each, such as `ThemeProvider,` |
| `.env.example` | `# kelor:env` | environment variables the project needs |
| `docs/README.md` | `<!-- kelor:docs -->` | sections of the project's documentation |

Blocks add npm packages to `package.json` with their `packages` key.

## Changes from create-next-app

- The placeholders above.
- `src/app/providers.tsx`, a client component that nests the providers in its list around the app; the root layout renders `<Providers>{children}</Providers>`. Providers listed first wrap the others.
- `suppressHydrationWarning` on `<html>`, because theme providers change its attributes before React loads.
- `.env.example` is added and un-ignored in `.gitignore`, because `create-next-app` ignores every environment file.
- The README that `create-next-app` writes is in `docs/README.md`, because Kelor leaves this root `README.md` out of projects.
- `LICENSE` is Next.js's MIT licence, because the files come from Next.js.

## Use it

Generate a project from this Base in Kelor's Builder, then:

```sh
npm install
npm run dev
```

## Licence

The files come from [Next.js](https://github.com/vercel/next.js)'s `create-next-app` and are under its MIT licence; see [LICENSE](LICENSE).
