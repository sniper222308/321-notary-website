# 321 Notary, LLC website

A static Astro, TypeScript and vanilla CSS website for 321 Notary, LLC in Kane, Pennsylvania.

## Development

Run `npm install`, `npm run dev`, `npm run check`, and `npm run build`. Use `npm run preview` to preview the build. Business information and services are centralized in `src/data/site.ts`.

## Cloudflare Pages

Connect the GitHub repository with production branch `main`, build command `npm run build` and output directory `dist`. Set `SITE_URL` to the verified production origin to enable canonical URLs and the sitemap. Add the sitemap URL to `public/robots.txt` and submit it in Google Search Console. Optionally set `PUBLIC_GOOGLE_SITE_VERIFICATION` and enable Cloudflare Web Analytics through the dashboard. Never commit credentials.

## Reservoir image

The supplied Adobe Stock image is stored in `src/assets/kinzua-reservoir.jpg` and rendered using Astro's image optimization. Confirm the Adobe Stock license permits this website use and retain the licensing record before publication.

## Owner confirmation before launch

- Confirm contact details, hours, appointment policy and services remain current, including which transactions the agency services cover.
- Confirm the reservoir image license and any required credit; optionally provide an office photograph and approved introduction.
- Approve a transaction-specific what-to-bring checklist.
- Have the owner and qualified counsel review Pennsylvania non-attorney notary disclaimer requirements and other regulatory details.
- Confirm the production domain, connect Cloudflare Pages, set `SITE_URL`, update `robots.txt`, and verify Search Console.
