import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

const SITE_URL = 'https://no1ads.in';

export default defineConfig({
  plugins: [
    react(),
    // Generates sitemap.xml + robots.txt into the build output.
    // Single-page site, so the only crawlable route is the homepage.
    Sitemap({
      hostname: SITE_URL,
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date(),
      robots: [{ userAgent: '*', allow: '/' }],
    }),
  ],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
});
