# davis-portfolio

Source for [djtom98.github.io](https://djtom98.github.io) — built with Next.js 16, TailwindCSS, and `next-themes`.

## Stack

- **Next.js 16** (App Router, static export)
- **TailwindCSS v4**
- **next-themes** (dark/light mode)

## Development

```bash
npm install
npm run dev
```

## Deployment

Pushes to `main` automatically build and deploy the static output to [djtom98/djtom98.github.io](https://github.com/djtom98/djtom98.github.io) via GitHub Actions.

**Required secret:** `PAGES_TOKEN` — a GitHub Personal Access Token with `repo` scope, added to this repository's Settings → Secrets.

## Editing content

All content lives in [`app/data.ts`](app/data.ts) — update that file to change experience, projects, skills, etc.
