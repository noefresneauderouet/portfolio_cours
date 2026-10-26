// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Remplace par ton vrai domaine Vercel une fois le projet deploye.
const SITE = 'https://portfolio-nfd.vercel.app';

export default defineConfig({
  site: SITE,
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false, // "/" = FR, "/en/" = EN
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
