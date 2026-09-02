# Brighter Sites Marketing

Public marketing website for Brighter Sites, built with Astro and deployed as a static site through Cloudflare Pages.

## Production

- Canonical site: `https://brightersites.app`
- Cloudflare Pages project: `brighter-sites-marketing`
- Production branch: `main`
- Build output: `dist/`
- Node requirement: see `package.json`
- `www.brightersites.app` permanently redirects to the canonical apex domain.
- `brightersite.app` and `www.brightersite.app` are typo-protection domains that permanently redirect to `brightersites.app` while preserving path and query string.

Cloudflare Pages is connected to GitHub. Changes merged to `main` create the production deployment. Non-production branches can be reviewed through Cloudflare preview deployments before merge.

## Local development

```sh
npm ci
npm run dev
```

Astro normally serves the development site at `http://localhost:4321`.

## Production validation

Before requesting a production merge:

```sh
npm ci
npm run quality
```

`npm run quality` currently runs the Astro production build. The build must complete without errors and `git status -sb` should remain clean afterward.

Useful preview command after a successful build:

```sh
npm run preview
```

## Public routes

The production sitemap is generated from `src/pages/sitemap.xml.ts`. Public launch routes include the marketing pages plus Privacy and Terms once their launch versions are approved.

The client portal is a separate application at:

`https://portal.brightersites.app/portal`

The four public demonstration sites are also separate Cloudflare Pages projects and are linked from `/work/`.

## Security and indexing

- Canonical URLs are generated against `https://brightersites.app`.
- Security and cache response headers live in `public/_headers`.
- `public/robots.txt` points crawlers to the production sitemap.
- The marketing site uses the approved Brighter Sites first-party Website Intelligence analytics tracker. Production analytics configuration and privacy language should remain consistent with the deployed tracker.

## Release footer

The public footer uses:

- `Established August 2026`
- `Current Release vX.X`

The first public release is `v1.0`. Keep that value fixed through the first intentional public launch; increment it only for later released changes.

## Launch review notes

Privacy and Terms content should be reviewed against the actual Brighter Sites portal, project workflow, and current client agreements. Legal drafts are not a substitute for qualified attorney review. The About page intentionally retains the founder-photo placeholder until a real headshot is available.
