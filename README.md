# kevin zhou

Personal site, built with the Next.js App Router and exported as a static site to GitHub Pages.

## Structure

```txt
app/                  routes (/, /now, /timeline, /hobbies), layout, global styles
components/site/      intro, nav, collage, age dock, footer, social icons
components/now/       now-page rows
components/hobbies/   bulletin board, piano, typing test, lift bars, playlist, fun-fact quiz
content/              editable site content: now.ts, timeline.ts, hobbies.ts, site.ts
lib/                  age math, intro boot script
public/assets/        photos, icons, favicons, resume
```

Most updates are content-only: edit the files in `content/`.

Older URLs (`/experience`, `/about`, `/learning`, etc.) re-export the new pages so existing links keep working.

## Development

```bash
npm install
npm run dev
npm run build   # static export to out/
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the static export and publishes `out/` to GitHub Pages (Pages source: **GitHub Actions**). `public/.nojekyll` keeps Pages from running Jekyll on the output.

## Dependency audit note

`npm audit` reports a moderate PostCSS advisory through Next's internal `postcss@8.4.31`. Don't run `npm audit fix --force`: it proposes downgrading to `next@9.3.3`, which removes App Router support. Upgrade Next when a release bumps its internal PostCSS.
