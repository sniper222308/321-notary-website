import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL to the verified production origin for canonical URLs and sitemap generation.
export default defineConfig({ site: process.env.SITE_URL || undefined, integrations: [sitemap()] });
