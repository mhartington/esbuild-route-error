# Vite/esbuild reload test case

With a complex ID, it seems the dev server cannot parse the URL and returns a 404 when the page reloads.

## Steps to reproduce

- Clone and install deps
- `ng serve` and open the browser
- The URL should be `localhost:4200/us/browse/12`
- Make an edit to `src/pages/browse/browse.component.html`
- The page will reload and work fine.

In `src/app.routes.ts`, swap the route object in the initial load for the complex one.

Stop and start the dev server again

- The page will load fine
- Make an edit to `src/pages/browse/browse.component.html`
- The page will fail to load and throw a 404

