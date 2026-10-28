import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import site from './src/data/siteConfig.js';
import servicePages from './src/data/servicePages.js';

const SITE_URL = site.url;

// ── Structured data (JSON-LD) ───────────────────────────────────────────────
// Built from the single source of truth (siteConfig) and injected into
// every prerendered page. FAQPage schema is scoped to pages that visibly render
// <Faq /> (see src/sections/Faq.jsx).
function buildJsonLd() {
  const address = {
    '@type': 'PostalAddress',
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.country,
  };
  if (site.streetAddress) address.streetAddress = site.streetAddress;
  if (site.postalCode) address.postalCode = site.postalCode;

  const sameAs = Object.values(site.social).filter(Boolean);

  const business = {
    '@type': 'AdvertisingAgency',
    '@id': `${SITE_URL}/#organization`,
    name: site.name,
    alternateName: site.legalName,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/assets/logo.png`,
    image: `${SITE_URL}/assets/logo.png`,
    description:
      "Madurai's most trusted 360° advertising agency since 2000, offering creative design, digital marketing, branding, LED signage, ACP elevation, signage boards, exhibition stalls, roadshows, outdoor and in-shop branding across Tamil Nadu.",
    slogan: '25 years of design, LED & ACP signage, brand films & on-ground campaigns',
    foundingDate: site.foundingYear,
    email: site.email,
    areaServed: site.areaServed,
    priceRange: '₹₹',
    address,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: site.openingHours.map(o => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: o.days,
      opens: o.opens,
      closes: o.closes,
    })),
    knowsAbout: [
      'Advertising', 'Branding', 'Graphic Design', 'Digital Marketing',
      'LED Signage', 'ACP Elevation', 'Exhibition Stalls', 'Outdoor Advertising',
      'Roadshow', 'Printing', 'Film Production',
    ],
    sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: site.email,
      areaServed: 'IN',
      availableLanguage: ['en', 'ta'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Advertising & Branding Services',
      itemListElement: servicePages.map(s => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
  if (site.phone) {
    business.telephone = site.phone;
    business.contactPoint.telephone = site.phone;
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: site.name,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  };

  return { '@context': 'https://schema.org', '@graph': [business, website] };
}

// Replaces the <!--__JSONLD__--> marker in index.html with the generated graph.
function jsonLdPlugin() {
  return {
    name: 'inject-jsonld',
    transformIndexHtml(html) {
      const json = JSON.stringify(buildJsonLd());
      const tag = `<script type="application/ld+json">${json}</script>`;
      return html.replace('<!--__JSONLD__-->', tag);
    },
  };
}

// AI answer engines + search crawlers we explicitly welcome (so the site is
// eligible to be indexed and cited). `*` already allows everyone; listing the
// major AI bots makes the intent unambiguous.
const AI_AGENTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'anthropic-ai',
  'Claude-Web', 'PerplexityBot', 'Perplexity-User', 'Google-Extended',
  'Applebot-Extended', 'CCBot', 'Amazonbot', 'Meta-ExternalAgent', 'Bytespider',
];

export default defineConfig({
  plugins: [
    react(),
    jsonLdPlugin(),
    // Generates sitemap.xml + robots.txt into the build output.
    Sitemap({
      hostname: SITE_URL,
      dynamicRoutes: [
        '/about', '/services', '/work', '/contact',
        ...servicePages.map(s => `/services/${s.slug}`),
      ],
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date(),
      robots: [
        { userAgent: '*', allow: '/' },
        ...AI_AGENTS.map(userAgent => ({ userAgent, allow: '/' })),
      ],
    }),
  ],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
});
