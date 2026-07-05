# Kevin Zhou Portfolio

Modern Next.js App Router portfolio migrated from the previous GitHub Pages + Jekyll site.

## Migration Plan

- Audit legacy Jekyll pages (`index.md`, `projects.md`, `learning.md`, `experience.md`, `about.md`, `journal.md`) and keep the original files during migration for comparison.
- Map Jekyll concepts to Next.js: `_config.yml` becomes `content/site.ts`, layouts/includes become React components, `assets/` is copied to `public/assets/`, and page markdown becomes typed content plus markdown blog entries.
- Use route-based App Router pages for `/`, `/about`, `/projects`, `/projects/[slug]`, `/research`, `/blog`, `/blog/[slug]`, `/resume`, `/cv`, `/contact`, `/uses`, and `/playground`.
- Deploy on Vercel normally, or GitHub Pages via `next build` static export. Set `GITHUB_PAGES=true` and `NEXT_PUBLIC_REPOSITORY_NAME=<repo>` if deploying to a project page that needs a base path.
- Use a restrained pixel UI language: crisp borders, stepped corners, monospace controls, high-contrast focus states, and limited accents.
- Main tradeoffs: static export cannot use server-only runtime features or dynamic image optimization, so images are unoptimized and content is file/data driven at build time.

## Project Structure

```txt
app/                  App Router routes, metadata, global styles
components/pixel/     Reusable pixel-themed UI primitives
components/site/      Layout, navigation, page-specific composition
content/              Typed portfolio data and markdown blog entries
lib/                  Content loading, helpers, and types
public/assets/        Migrated static assets from Jekyll assets/
```

## Development

```bash
npm install
npm run dev
npm run build
```

## Dependency Audit Note

`npm audit` currently reports a moderate PostCSS advisory through Next's internal `postcss@8.4.31` dependency. Do not run `npm audit fix --force` for this project: npm proposes downgrading to `next@9.3.3`, which would remove App Router support and break the migration.

The app's own PostCSS toolchain resolves to a patched `postcss@8.5.x`; the remaining finding is inside Next's hard-pinned dependency metadata. Track Next releases and upgrade Next when a compatible release bumps its internal PostCSS dependency.

## Migration Checklist

- Move any future `_posts` files into `content/blog/*.md` with frontmatter.
- Add long project writeups by extending `content/projects.ts` and, if needed, adding a markdown renderer similar to blog.
- Replace remaining Jekyll-only Liquid references with typed React props.
- Confirm all public assets are referenced through `/assets/...`.
- For GitHub Pages project repos, configure `GITHUB_PAGES=true` and `NEXT_PUBLIC_REPOSITORY_NAME`.
