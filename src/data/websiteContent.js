// Centralized, design-agnostic content store for the entire Number One Ads website.
// Any agent redesigning the UI or rebuilding scaffolded components can import
// copy, navigation, section data, and image paths directly from this module.

import site, { displayPhone, whatsappLink } from './siteConfig.js';
import servicePages, { getServiceBySlug } from './servicePages.js';
import services from './services.json';
import gallery from './gallery.json';
import clients from './clients.js';
import faqs from './faqs.js';
import group from './group.js';
import partners from './partners.js';
import videos, { CHANNEL_URL, featuredVideos, watchUrl, thumbUrl } from './videos.js';

export const brandAssets = {
  logo: '/assets/logo.png',
  legacyBadge25: '/assets/25.png',
  legacyBadge25Base: '/assets/25.base.png',
  bniLogo: '/assets/bni.webp',
  bniLogoAlt: '/assets/bni-logo-freelogovectors.net_-640x400.webp',
  clientsBannerComposite: '/Clients2-500x284.jpg',
};

export const navigation = {
  logo: {
    src: brandAssets.logo,
    alt: 'number one ads',
    href: '/',
  },
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: {
    label: 'Get in Touch',
    href: '/contact',
  },
};

export const footerContent = {
  logo: {
    src: brandAssets.logo,
    alt: 'number one ads',
    href: '/',
  },
  tagline:
    "Madurai's 360° advertising agency. Twenty-five years of design, signage, branding and on-ground execution across Tamil Nadu.",
  exploreTitle: 'Explore',
  exploreLinks: navigation.links,
  servicesTitle: 'Services',
  serviceLinks: [
    { label: 'Creative Design', href: '/services/creative-design' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'LED Signage', href: '/services/led-signage' },
    { label: 'ACP Elevation', href: '/services/acp-elevation' },
    { label: 'Exhibition Stalls', href: '/services/exhibition-stalls' },
    { label: 'Roadshow & Outdoor', href: '/services/roadshow-outdoor' },
  ],
  contactTitle: 'Get in Touch',
  ctaLink: { label: 'Start a project →', href: '/contact' },
  bottomTagline: '25 YEARS OF LEGACY',
};

export const homeContent = {
  seo: {
    title: 'Number One Ads — 360° Advertising Agency | Madurai | 25 Years of Legacy',
    description:
      "Madurai's most trusted 360° advertising agency since 2000. Creative design, digital marketing, LED signage, ACP elevation, exhibition stalls, roadshows & branding across Tamil Nadu.",
    path: '/',
  },
  hero: {
    eyebrow: 'EST. 2000 · MADURAI, INDIA',
    srTitle: 'Number One Ads — 360° Advertising Agency in Madurai, Tamil Nadu',
    headline: '360° ADVERTISING AGENCY',
    subheadline: '25 years of precision, creativity & legacy',
    primaryCta: { label: 'Explore Our Work', href: '/work' },
    secondaryCta: { label: 'Our Story →', href: '/about' },
    badgeImage: {
      src: brandAssets.legacyBadge25,
      alt: '25 Years of Legacy',
    },
    tickerItems: [
      'CREATIVE DESIGN & DEVELOPMENT',
      'DIGITAL MARKETING',
      'EXHIBITION DESIGN & CONDUCTION',
      'EVENT PLANNING',
      'ROADSHOW & OUTDOOR MEDIA SOLUTIONS',
      'RETAIL BRANDING',
      'SIGNAGE SOLUTIONS',
      'PRINTING',
    ],
  },
  coreServicesSection: {
    eyebrow: 'WHAT WE DO',
    headline: 'Full-Spectrum Creative Solutions',
    cta: { label: 'Explore All Services →', href: '/services' },
    items: [
      {
        num: '01',
        iconKey: 'design',
        title: 'Creative Design',
        body: 'Expert brand craft from concept to final art. Every pixel refined with purpose and precision.',
        slug: 'creative-design',
        href: '/services/creative-design',
      },
      {
        num: '02',
        iconKey: 'media',
        title: 'Digital Marketing',
        body: 'Search, social, audio and streaming campaigns — strategy, creative and media buying under one roof.',
        slug: 'digital-marketing',
        href: '/services/digital-marketing',
      },
      {
        num: '03',
        iconKey: 'print',
        title: 'Printing Solutions',
        body: 'Premium print across all formats and scales — hoarding, handbills, brochures — meeting every deadline.',
        slug: 'printing',
        href: '/services/printing',
      },
      {
        num: '04',
        iconKey: 'film',
        title: 'Film & Photography',
        body: 'From TVCs to product shoots, we translate your brand into compelling visual stories.',
        slug: 'film-photography',
        href: '/services/film-photography',
      },
      {
        num: '05',
        iconKey: 'events',
        title: 'Roadshow & Events',
        body: 'End-to-end roadshow production and event design that commands attention at every venue.',
        slug: 'roadshow-outdoor',
        href: '/services/roadshow-outdoor',
      },
      {
        num: '06',
        iconKey: 'brand',
        title: 'Branding & Identity',
        body: "Building brand identities that carve a distinct, lasting space in consumers' minds.",
        slug: 'branding-identity',
        href: '/services/branding-identity',
      },
    ],
  },
  servicesShowcaseSection: {
    eyebrow: 'SERVICES IN THE FIELD',
    headline: 'Where Our Work Meets the Real World',
    subheadline:
      'From illuminated façades to roadshows — explore the on-ground services we deliver across Tamil Nadu.',
    items: services,
  },
  groupSection: {
    eyebrow: 'ONE GROUP, THREE SPECIALISTS',
    headline: 'The Number One Ads Group',
    intro:
      'Three companies under one roof — so a single brief can move from idea to artwork to fabricated signage to bus media without ever leaving the family.',
    companies: group,
  },
  evolutionSection: {
    eyebrow: 'THE EVOLUTION',
    headline: "How Advertising Has Changed. How We've Stayed Ahead.",
    eras: [
      {
        name: 'Print Era',
        description: 'Ink, paper, typography — where every brand story began.',
        years: '2000–2003',
      },
      {
        name: 'Outdoor Era',
        description: 'Hoardings, roadshows, visibility — owning the streetscape.',
        years: '2003–2008',
      },
      {
        name: 'Broadcast Era',
        description: 'TVC, film, photography — brands brought to life on screen.',
        years: '2008–2018',
      },
      {
        name: 'Digital Era',
        description: 'Social, digital, data — precision storytelling at scale.',
        years: '2018–2023',
      },
      {
        name: 'AI Era',
        description: 'Artificial intelligence — personalized, proactive marketing.',
        years: '2023–Present',
      },
    ],
  },
  galleryPreviewSection: {
    eyebrow: 'OUR WORK',
    headline: 'Built for Brands That Mean Business',
    subheadline:
      'A quarter-century of campaigns, festivals and storefronts — every piece designed, printed and installed in-house.',
    cta: { label: 'View All Work →', href: '/work' },
    items: gallery.slice(0, 9),
  },
  youtubeAdsSection: {
    eyebrow: 'ON AIR',
    headline: "Ads We've Shot & Released",
    subheadline:
      'Commercials, brand films and campaign reels produced in-house — watch the latest on our YouTube channel.',
    cta: { label: 'Visit @No1ads on YouTube →', href: CHANNEL_URL },
    featuredVideos,
  },
  testimonialsSection: {
    eyebrow: 'WHAT CLIENTS SAY',
    headline: "Trusted by Tamil Nadu's boldest brands",
    featured: {
      quote:
        'Number One Ads handled our showroom elevation, signage and launch roadshow as one team. Twenty years on, they are still the first call for anything brand-related.',
      name: 'Senthil Kumar',
      role: 'Managing Director, Automobile Showroom',
    },
    supporting: [
      {
        quote:
          'From concept artwork to the final installed board, the finish was flawless. They understand how a brand should feel on the street, not just on paper.',
        name: 'Priya Rajan',
        role: 'Marketing Head, Retail Chain',
      },
      {
        quote:
          'Our exhibition stall was the most photographed at the expo. A tight brief and tighter deadline turned into something genuinely premium.',
        name: 'Arun Vetri',
        role: 'Founder, FMCG Brand',
      },
    ],
  },
  legacyBannerSection: {
    ghostNumber: '25',
    eyebrow: 'A LEGACY BUILT ON',
    headline: 'TRUST, CRAFT & COMMITMENT',
    subheadline: "Since 2000 — Madurai's Most Trusted Advertising Partner",
  },
  faqSection: {
    eyebrow: 'QUESTIONS & ANSWERS',
    headline: 'Frequently Asked Questions',
    items: faqs,
  },
  ctaBand: {
    eyebrow: "LET'S BUILD SOMETHING ICONIC",
    title: 'Ready to make your brand impossible to ignore?',
    text: 'From a single signboard to a city-wide campaign — tell us where you want to be seen.',
    buttonLabel: 'Start a Project →',
    to: '/contact',
  },
};

export const aboutContent = {
  seo: {
    title: 'About Number One Ads — 25 Years of Advertising in Madurai',
    description:
      'The story of Number One Ads: from first print campaigns in 2000 to a full 360° advertising agency delivering design, signage, branding and events across Tamil Nadu.',
    path: '/about',
  },
  hero: {
    eyebrow: 'OUR STORY',
    title: 'Twenty-Five Years of Building Brands in Madurai',
    subtitle:
      'One agency, every era of advertising — print, outdoor, broadcast, digital and now AI.',
    crumb: 'About',
  },
  story: {
    paragraphs: [
      'Number One Ads began in 2000 with a simple promise: make local brands impossible to ignore. We started with print and a small team in Madurai — and never stopped expanding what one agency could do under a single roof.',
      'Over twenty-five years we grew from hand-finished hoardings into a complete 360° partner: creative design, LED and ACP signage, exhibition stalls, roadshows, retail branding, film and digital. Because design, production and installation all happen in-house, our clients deal with one team that owns the outcome from the first sketch to the final bolt on the wall.',
      'The tools have changed many times. The standard has not. Most of the brands we started with in the early years are still with us today — and that trust is the real measure of these twenty-five years.',
    ],
    quickStats: [
      { value: '2000', label: 'Founded in Madurai' },
      { value: '3000+', label: 'Projects delivered' },
      { value: '2000+', label: 'Clients served' },
      { value: '360°', label: 'In-house capability' },
    ],
  },
  timelineSection: {
    eyebrow: 'OUR JOURNEY',
    headline: '25 Years of Advertising Excellence',
    subtext: "From print to pixels — we've been telling Tamil Nadu's brand stories since 2000.",
    milestones: [
      { year: '2000', description: 'Founded in Madurai. First print campaigns for local businesses.' },
      { year: '2003', description: 'Expanded into outdoor hoarding & roadshow advertising.' },
      { year: '2008', description: 'Film production wing launched. First TVC shoots.' },
      { year: '2013', description: 'Exhibition & event design division established.' },
      { year: '2018', description: 'Digital marketing & social media services added.' },
      { year: '2024', description: '25 Years. 360° capabilities. One agency.' },
    ],
    counters: [
      { target: 25, suffix: '+', label: 'Years' },
      { target: 3000, suffix: '+', label: 'Projects' },
      { target: 2000, suffix: '+', label: 'Clients' },
    ],
  },
  valuesSection: {
    eyebrow: 'WHAT WE STAND FOR',
    headline: 'Four things we refuse to compromise',
    intro:
      'Twenty-five years, every era of advertising — these are the constants that kept Madurai’s biggest brands coming back.',
    values: [
      {
        no: '01',
        title: 'Trust first',
        body: 'A handshake in 2000 still means the same thing today. Most of our clients have stayed with us for over a decade — that is the only credential that matters.',
      },
      {
        no: '02',
        title: 'Craft, obsessively',
        body: 'Every pixel, every weld, every print pass is checked twice. We finish the work the way we would for our own brand, then once more.',
      },
      {
        no: '03',
        title: '360° under one roof',
        body: 'Design, print, fabrication and installation are all ours. No middlemen, no finger-pointing, no surprises on site.',
      },
      {
        no: '04',
        title: 'Always a step ahead',
        body: 'From hand-painted boards to AI-assisted campaigns, we have moved with every era of advertising — and led most of them locally.',
      },
    ],
  },
  bniSection: {
    logo: {
      src: brandAssets.bniLogo,
      alt: 'BNI — Business Network International',
    },
    eyebrow: 'PROUD MEMBER · BNI CHANAKYAAS, MADURAI',
    title: 'Backed by Madurai’s strongest business network',
    body: 'Number One Ads is an active member of BNI Chanakyaas, Madurai — a referral network of trusted local businesses. It’s how we connect our clients with the right partners, and how good work keeps coming back to us.',
    cta: {
      label: 'View our member profile →',
      href: 'https://bnimadurai.in/madurai-bni-chanakyaas/en-IN/memberdetails?encryptedMemberId=AHtWAzjKAR3ZABanIzloYg%3D%3D&cmsv3=true&name=Jaiganesh+A',
    },
  },
  clientsWallSection: {
    eyebrow: 'OUR VALUABLE CLIENTS',
    marqueeEyebrow: '3000+ PROJECTS · 2000+ CLIENTS · 25 YEARS',
    headline: 'Brands That Trust Us With Theirs',
    subheadline:
      'From Madurai’s biggest silk and jewellery houses to hospitality and retail — a few of the names we’re proud to have branded over the years.',
    clients,
  },
  ctaBand: {
    eyebrow: 'WORK WITH US',
    title: "Let's add your brand to the next twenty-five years.",
    text: 'From a single signboard to a city-wide campaign — tell us where you want to be seen.',
    buttonLabel: 'Get in Touch →',
    to: '/contact',
  },
};

export const servicesPageContent = {
  seo: {
    title: 'Services — Advertising, Signage & Branding | Number One Ads, Madurai',
    description:
      'Creative design, LED signage, ACP elevation, exhibition stalls, roadshows, in-shop branding, printing & more — full 360° advertising services delivered in-house across Tamil Nadu.',
    path: '/services',
  },
  hero: {
    eyebrow: 'WHAT WE DO',
    title: 'Full-Spectrum Advertising, Built In-House',
    subtitle:
      'Six creative disciplines and thirteen production capabilities — under one roof in Madurai.',
    crumb: 'Services',
  },
  capabilitiesSection: {
    eyebrow: 'SIGNAGE & ON-GROUND',
    headline: 'Every Surface, Every Format, One Crew',
    subheadline:
      'Thirteen production capabilities — designed, fabricated and installed by our own teams across Tamil Nadu. Numbers below are recent project counts.',
    pageForSlug: {
      design: 'creative-design',
      'led-signage': 'led-signage',
      'signage-boards': 'signage-boards',
      'acp-elevation': 'acp-elevation',
      'exhibition-stall': 'exhibition-stalls',
      roadshow: 'roadshow-outdoor',
      'in-shop': 'in-shop-branding',
      'backlight-board': 'signage-boards',
      'pylon-branding': 'signage-boards',
      'lamp-post-branding': 'roadshow-outdoor',
      standee: 'in-shop-branding',
      signage: 'led-signage',
      'auto-back-branding': 'roadshow-outdoor',
    },
    items: services,
  },
  processSection: {
    eyebrow: 'HOW WE WORK',
    headline: 'From brief to installed — one team, four moves',
    steps: [
      {
        num: '01',
        title: 'Discover',
        body: 'We learn your brand, audience and goals — and walk the actual site or market before a single line is drawn.',
      },
      {
        num: '02',
        title: 'Design',
        body: 'Concepts, artwork and 3D mock-ups. You see exactly how it will look before anything is produced.',
      },
      {
        num: '03',
        title: 'Produce',
        body: 'Print, fabrication, LED and ACP work happen in-house with materials chosen to last in Tamil Nadu weather.',
      },
      {
        num: '04',
        title: 'Install & sustain',
        body: 'Our crew installs on-site and stays on call for maintenance, refreshes and the next campaign.',
      },
    ],
  },
  ctaBand: {
    eyebrow: 'TELL US WHAT YOU NEED',
    title: "Have a brief? We'll turn it into something installed.",
    text: "Signboard, showroom elevation, exhibition stall or a full campaign — send it over and we'll scope it fast.",
    buttonLabel: 'Start a Project →',
    to: '/contact',
  },
};

export const workPageContent = {
  seo: {
    title: 'Our Work — Advertising & Branding Portfolio | Number One Ads',
    description:
      'Browse a quarter-century of Number One Ads creative work — social campaigns, handbills, festive creatives and brand design produced in-house in Madurai, Tamil Nadu.',
    path: '/work',
  },
  hero: {
    eyebrow: 'PORTFOLIO',
    title: 'Our Work, Up Close',
    subtitle:
      'Campaigns, festivals and storefronts — every piece designed, printed and installed by our own teams.',
    crumb: 'Work',
  },
  gallerySection: {
    eyebrow: 'THE PORTFOLIO',
    headline: 'Built for Brands That Mean Business',
    subheadline: 'Filter by category, or scroll the full archive. Tap any piece to view it large.',
    categories: ['All', 'Social Media', 'Handbills & Print', 'Festive', 'Brand Design'],
    items: gallery,
  },
  ctaBand: {
    eyebrow: 'LIKE WHAT YOU SEE?',
    title: 'Your brand could be the next piece in this gallery.',
    text: 'From a single signboard to a city-wide campaign — tell us where you want to be seen.',
    buttonLabel: 'Start a Project →',
    to: '/contact',
  },
};

export const contactPageContent = {
  seo: {
    title: 'Contact Number One Ads — Advertising Agency in Madurai',
    description:
      'Start your project with Number One Ads. Email contact@no1ads.in or reach our Madurai studio for design, signage, branding, exhibitions and roadshows across Tamil Nadu.',
    path: '/contact',
  },
  hero: {
    eyebrow: 'GET IN TOUCH',
    title: "Let's Talk.",
    subtitle: "From a single signboard to a city-wide campaign — we're ready when you are.",
    crumb: 'Contact',
  },
  section: {
    eyebrowWhenShown: 'READY TO BUILD SOMETHING GREAT?',
    headlineWhenShown: "Let's Talk.",
    intro:
      'Tell us about your brand, your site and your timeline. We reply fast and, for local projects, can visit to measure and quote in person.',
    formFields: [
      { label: 'Name', name: 'name', type: 'text', required: true },
      { label: 'Email', name: 'email', type: 'email', required: true },
      { label: 'Message', name: 'message', type: 'textarea', rows: 4, required: true },
    ],
    submitButton: {
      idle: 'Send Message →',
      sending: 'Sending…',
    },
    messages: {
      success: "Thanks! Your message has been sent — we'll reply soon.",
      missingKey: 'Form is not configured yet. Please email contact@no1ads.in directly.',
      networkError: 'Network error. Please check your connection and try again.',
    },
  },
};

export const notFoundContent = {
  seo: {
    title: 'Page Not Found — Number One Ads',
    description: 'The page you were looking for could not be found.',
    path: '/404',
  },
  code: '404',
  title: 'This page took a different route.',
  text: 'The link may be old or mistyped — but our work is all still here.',
  primaryCta: { label: 'Back to Home →', href: '/' },
  secondaryCta: { label: 'View Our Work', href: '/work' },
};

export {
  site,
  displayPhone,
  whatsappLink,
  servicePages,
  getServiceBySlug,
  services,
  gallery,
  clients,
  faqs,
  group,
  partners,
  videos,
  CHANNEL_URL,
  featuredVideos,
  watchUrl,
  thumbUrl,
};
