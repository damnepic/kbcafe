// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kbcafe.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  // /beginner-ai is an experimental, noindex section; keep it out of the sitemap too
  integrations: [sitemap({ filter: (page) => !page.includes('/beginner-ai') })],
});
