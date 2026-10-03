# mdc-web-cv

The 2019 version of my CV, built with
[Material Components Web](https://github.com/material-components/material-components-web).
Live at **[v1.lapprand.com](https://v1.lapprand.com/)**.

Kept as an archive. It is not maintained.

## Deploying

Cloudflare Workers, serving `./dist` as static assets. There is no build step in
the deploy path:

```bash
npx wrangler deploy
```

The Worker is named `mdc-web-cv`, and `v1.lapprand.com` is attached to it as a
custom domain.

## Why `dist/` is committed

Normally build output is gitignored. Here it is the deployed artifact, because
**the original build no longer runs**. The toolchain is from 2019:

- `node-sass@4.11` requires **Node 12 or older** and **Python 2.7**. On Node 24
  the install fails with `SyntaxError: Missing parentheses in call to 'print'`,
  because node-gyp probes the environment with Python 2 syntax.
- `webpack@4`, plus `extract-text-webpack-plugin@4.0.0-beta.0` and several other
  pinned betas.

Rebuilding that environment is possible — Node 12 plus Python 2.7 — but it isn't
worth it for a site that will never change again. So `dist/` holds the site
exactly as it was served, and the source stays in `app/` for reference.

`dist/` was mirrored from the old Netlify deployment in October 2026, with two
changes: Netlify's injected promotional comment was stripped from `index.html`,
and the dead `netlify.com` project links were fixed (below).

## History

Hosted on Netlify until October 2026, then moved to Cloudflare Workers. Netlify
had been injecting a promotional comment into the HTML at serve time — an ad
with UTM tracking, addressed at AI crawlers — which is gone.

Two links in the page pointed at Netlify-hosted projects. Both were dead by the
time of the move:

- **Manga Material** → now points to [manga.lapprand.com](https://manga.lapprand.com/)
- **Passatempo com Vue.js** → site is gone, so the link was dropped and the text kept

## Layout

```
app/               original source (HTML template, SCSS, JS, media)
webpack.config.js  2019 build config, outputs to dist/
dist/              the deployed site — committed, see above
wrangler.toml      Cloudflare Workers config
```
