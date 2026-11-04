# 321 Notary, LLC Website

A website for 321 Notary, LLC in Kane, Pennsylvania. It provides information about notary, vehicle title, registration, and recreational vehicle services, along with office hours and contact details. Built with Astro, TypeScript, and vanilla CSS.

## Deploy with Cloudflare Pages

1. Connect the `sniper222308/321-notary-website` GitHub repository to Cloudflare Pages.
2. Set the production branch to `main`, the build command to `npm run build`, and the output directory to `dist`.
3. Set the `SITE_URL` environment variable to the site's production origin to enable canonical URLs and sitemap generation.
4. Deploy. Future pushes to `main` will trigger new builds.

For Google Search Console, optionally set `PUBLIC_GOOGLE_SITE_VERIFICATION`, add the production sitemap URL to `public/robots.txt`, and submit the sitemap at `/sitemap-index.xml`.
