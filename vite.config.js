import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

const SITE_URL = 'https://no1ads.in';

export default defineConfig({
  plugins: [
    react(),
    // Generates sitemap.xml + robots.txt into the build output.
    Sitemap({
      hostname: SITE_URL,
      dynamicRoutes: [
        '/about', '/services', '/work', '/contact',
        '/services/creative-design', '/services/digital-marketing',
        '/services/branding-identity', '/services/led-signage',
        '/services/acp-elevation', '/services/signage-boards',
        '/services/exhibition-stalls', '/services/roadshow-outdoor',
        '/services/in-shop-branding', '/services/printing',
        '/services/film-photography',
      ],
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
