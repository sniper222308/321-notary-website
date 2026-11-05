# 321 Notary, LLC Website

A website for 321 Notary, LLC in Kane, Pennsylvania. It provides information about notary, vehicle title, registration, and recreational vehicle services, along with office hours and contact details. Built with Astro, TypeScript, and vanilla CSS.

The website includes a legal disclosure concerning the notary’s non-attorney status. The Kinzua Reservoir photograph is licensed through Adobe Stock.

## Deploy with Cloudflare Workers

The existing Cloudflare Workers deployment serves the static files built in `dist`. The GitHub connection deploys changes pushed to `main` using `npm run build`. Preserve the existing Workers build and deployment settings.

Set `SITE_URL` in the existing build environment to the site's production origin to enable canonical URLs and sitemap generation.

For Google Search Console, optionally set `PUBLIC_GOOGLE_SITE_VERIFICATION`, add the production sitemap URL to `public/robots.txt`, and submit the sitemap at `/sitemap-index.xml`.

## Pages CMS

Content is in `src/data/*.json`; `.pages.yml` defines the editor. Images uploaded through the CMS go to `public/uploads` and are served as `/uploads/...`. The hero uses a public URL rather than an Astro asset import so newly uploaded files work at build time. The optional owner photo replaces the existing badge. The current design has no other gallery; uploaded images appear only when selected in a supported photo field. Keep the hero a Kinzua Reservoir image to match its caption and alternative text.

Hours use 24-hour `HH:MM` strings and a closed flag for each day. The visible hours and structured data derive from these values. FAQ answers can use `{hours}`, `{address}`, `{phone}`, and `{email}` to insert current values. Legal disclosures and technical settings remain in code, outside the CMS.

### Owner setup

1. Visit https://app.pagescms.org/ and sign in with the GitHub account that owns the repository. Install and authorize the Pages CMS GitHub App, selecting **Only select repositories** and `sniper222308/321-notary-website`. Open the repository and select `main`. See https://pagescms.org/docs/quick-start/.
2. In the repository's Pages CMS collaborator management, invite Alena by email. Do not add her as a GitHub repository collaborator. Pages CMS documents email collaborators at https://pagescms.org/docs/configuration/collaborators/; confirm the hosted service offers the invitation controls in your account before relying on this workflow.
3. Give Alena https://app.pagescms.org/ and `CLIENT_EDITING_GUIDE.md`. She accepts the invitation and signs in with the invited email. No invitation is sent by this project.
4. Saving commits to the selected branch. Ensure `main` is selected and the existing Cloudflare Workers build/deploy connection is configured to deploy commits from `main` with `npm run build` and `dist` as the static output. No deployment settings are changed here. Confirm a collaborator-authored commit actually triggers the existing deployment after setup; GitHub App authentication and Cloudflare settings must be verified in the connected accounts.

Run `npm run check` and `npm run build` before deploying code changes. The hosted editor and its invitation flow require account access and have not been tested locally.
