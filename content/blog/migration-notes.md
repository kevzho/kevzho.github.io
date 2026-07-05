---
title: "Migrating from Jekyll to Next.js"
description: "Notes on turning the old portfolio into a typed App Router site with static export support."
date: "2026-07-04"
tags:
  - nextjs
  - portfolio
  - migration
---

The old site was a compact Jekyll portfolio with markdown pages, Liquid layouts, Sass partials, static assets, and a GitHub Pages deployment model.

The new site keeps the static-first philosophy but replaces templates with typed React components. Content that needs structure lives in TypeScript data files. Long-form writing lives in markdown under `content/blog`.

The migration is intentionally incremental: legacy files remain in the repository until every piece of content has an obvious home in the new app.
