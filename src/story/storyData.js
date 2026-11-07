// Story content for the home page — "Every brand starts in the dark".
// All copy is grounded in real facts already in the repo (est. 2000, Kochadai
// studio, the three group companies, real clients, real festival creatives,
// real TVCs).

import gallery from '../data/gallery.json';
import services from '../data/services.json';
import videos, { CHANNEL_URL, watchUrl } from '../data/videos.js';
import clients from '../data/clients.js';

const g = slug => gallery.find(item => item.slug === slug) || {};
const s = slug => services.find(item => item.slug === slug) || {};

export { CHANNEL_URL, watchUrl };

/** Story chapters — drives StoryNav and section ids. */
export const ACTS = [
  { id: 'prologue', num: '', title: 'Prologue' },
  { id: 'act-noise', num: 'I', title: 'The noise' },
  { id: 'act-brief', num: 'II', title: 'One brief' },
  { id: 'act-year', num: 'III', title: 'A year in Tamil Nadu' },
  { id: 'act-onair', num: 'IV', title: 'On air' },
  { id: 'act-remembered', num: 'V', title: 'Remembered' },
  { id: 'act-eras', num: 'VI', title: 'Five eras' },
  { id: 'act-epilogue', num: '', title: 'Your chapter' },
];

export const NOISE_STATEMENT =
  'Ten thousand shopfronts. One festival season. Most brands get walked past.';
export const NOISE_PAYOFF = 'Some get remembered for twenty-five years.';

export const MARQUEE = [
  'Creative design ✦ LED signage ✦ ACP elevation ✦ Brand films ✦ ',
  'Roadshows ✦ Exhibition stalls ✦ Printing ✦ Digital ✦ Retail branding ✦ ',
];

/** Act II — one brief, seven crafts. */
export const CHAPTERS = [
  {
    id: 'idea',
    short: 'A sketch in our Kochadai studio: who you are and who you need to reach.',
    title: 'The idea',
    text: 'It starts with a sketch on a table in our Kochadai studio — who you are, who you need to reach, and what they should feel when they see you.',
    link: { to: '/services/creative-design', label: 'Creative design' },
    caption: 'Brand identity · concept board',
    media: { type: 'img', src: g('swirl').full, lqip: g('swirl').lqip, pos: 'center 40%' },
  },
  {
    id: 'artwork',
    short: 'Artwork a whole street can read in two seconds.',
    title: 'The artwork',
    text: 'Then the idea becomes artwork a whole street can read in two seconds — handbills, hoardings and festival creatives, print-ready.',
    link: { to: '/services/printing', label: 'Printing' },
    caption: 'Akshaya Tritiya handbill · print-ready',
    media: { type: 'img', src: g('akshaya-thiruthi-handbill-02').full, lqip: g('akshaya-thiruthi-handbill-02').lqip, pos: 'center 30%' },
  },
  {
    id: 'build',
    short: 'Cut, bent and fitted in our own fabrication unit.',
    title: 'The build',
    text: 'Fabricated in our own unit, Triple A Signage — ACP elevations, channel letters and façades cut, bent and fitted by the same family.',
    link: { to: '/services/acp-elevation', label: 'ACP elevation' },
    caption: 'ACP elevation · fabricated by Triple A Signage',
    media: { type: 'img', src: s('acp-elevation').image, lqip: s('acp-elevation').lqip, pos: 'center 35%' },
  },
  {
    id: 'switch-on',
    short: 'Dusk falls. Your name lights up first.',
    title: 'The switch-on',
    text: 'Dusk falls over Madurai. Your name lights up — and for the first time, the street notices you before it notices anyone else.',
    link: { to: '/services/led-signage', label: 'LED signage' },
    caption: 'LED signage · switched on at dusk',
    media: { type: 'img', src: s('led-signage').image, lqip: s('led-signage').lqip, pos: 'center', night: true },
  },
  {
    id: 'street',
    short: 'Roadshows and bus media carry it across the city.',
    title: 'The street',
    text: 'Roadshows and Infobus transit media carry it down every route in the city — your brand, moving through the places your customers already are.',
    link: { to: '/services/roadshow-outdoor', label: 'Roadshow & outdoor' },
    caption: 'Roadshow · on the move with Infobus',
    media: { type: 'img', src: s('roadshow').image, lqip: s('roadshow').lqip, pos: 'center 40%' },
  },
  {
    id: 'screen',
    short: 'Thirty seconds a whole district remembers.',
    title: 'The screen',
    text: 'Thirty seconds a whole district remembers. TVCs and brand films written, shot and edited in-house.',
    link: { to: '/services/film-photography', label: 'Film & photography' },
    caption: 'TVC · Theni Anantham Silks, Aranmanai opening',
    media: { type: 'yt', id: videos[0].id, alt: videos[0].title },
  },
  {
    id: 'feed',
    short: 'And it follows them home, on every phone.',
    title: 'The feed',
    text: 'And it follows them home — on every phone, every festival, every offer. Search, social and streaming, run by the people who made the artwork.',
    link: { to: '/services/digital-marketing', label: 'Digital marketing' },
    caption: 'Social campaigns · every festival, every phone',
    media: {
      type: 'collage',
      items: ['ring-post-copy', 'pongal', 'social-media-post-16'].map(slug => ({ src: g(slug).thumb, lqip: g(slug).lqip, alt: g(slug).title })),
    },
  },
];

export const GROUP = [
  { name: 'Number One Ads', role: 'Idea · design · media', logo: '/assets/logo.png' },
  { name: 'Triple A Signage', role: 'Fabrication · LED · ACP', logo: '/group/triple-a-signage.webp' },
  { name: 'Infobus Advertising', role: 'Transit · bus media', logo: '/group/infobus-advertising.webp' },
];

/** Act III — the festival calendar. Ordered by date. */
export const FESTIVALS = [
  { month: 'Jan', season: 'Winter Season', title: 'New Year', tag: 'Festive Retail Launch', slug: 'photo-2024-12-30-16-21-52' },
  { month: 'Jan', season: 'Harvest Festival', title: 'Thai Pongal', tag: 'Flagship Campaign', slug: 'pongal' },
  { month: 'Jan', season: 'Harvest Festival', title: 'Maatu Pongal', tag: 'Tradition & Heritage', slug: 'maatu-pongal-2025' },
  { month: 'Jan', season: 'National Pride', title: 'Republic Day', tag: 'Institutional Campaign', slug: 'republic-day-cor' },
  { month: 'Apr', season: 'Spring Season', title: 'Tamil New Year', tag: 'New Collections Launch', slug: 'tamil-new-year-2-copy' },
  { month: 'Apr', season: 'Gold & Prosperity', title: 'Akshaya Tritiya', tag: 'Jewellery Marquee', slug: 'akshaya-thirithi' },
  { month: 'May', season: 'Summer Season', title: 'Labour Day', tag: 'Brand Tribute', slug: 'labour-day' },
  { month: 'Aug', season: 'Monsoon Season', title: 'Vinayagar Chathurthi', tag: 'Auspicious Beginnings', slug: 'vinayagar-chathurthi-copy' },
  { month: 'Oct', season: 'Festival of Lights', title: 'Diwali', tag: 'Grand Season Finale', slug: 'photo-2024-11-05-18-22-33' },
  { month: 'Dec', season: 'Year-End Season', title: 'Christmas', tag: 'Holiday Showcase', slug: 'christmas-2' },
].map(f => ({ ...f, img: g(f.slug).thumb, lqip: g(f.slug).lqip, alt: g(f.slug).title }));

/** Act IV — films. First is the feature. */
export const FILMS = [videos[0], videos[1], videos[2]];

/** Act V — clients with logos split evenly into two marquee rows. */
const logoClients = clients.filter(c => Boolean(c.logo));
const half = Math.ceil(logoClients.length / 2);
export const CLIENT_ROWS = [
  logoClients.slice(0, half),
  logoClients.slice(half),
];

export const QUOTES = {
  feature: {
    quote:
      'Number One Ads handled our showroom ACP elevation, LED signage and launch roadshow as one unified team. Twenty years on, they remain our first call for every brand launch across Madurai.',
    name: 'Senthil Kumar',
    role: 'Managing Director · Flagship Jewellery & Silk Showroom, Madurai',
  },
  minis: [
    {
      quote:
        'From festive campaign artwork to the final installed storefront boards across our branches, the finish was flawless.',
      name: 'Priya Rajan',
      role: 'Marketing Head · Multi-Outlet Retail Group',
    },
    {
      quote:
        'Our exhibition stall and TVC launch were the most talked-about in our category — on a festival deadline.',
      name: 'Arun Vetri',
      role: 'Founder · Regional Consumer & Food Brand',
    },
  ],
};

/** Act VI — five eras (grey → orange ramp = lights coming on). */
export const ERAS = [
  { name: 'Print', years: '2000', desc: 'Ink, paper, typography — where every brand story began.', color: '#B9B2AA' },
  { name: 'Outdoor', years: '2003', desc: 'Hoardings and roadshows — owning the streetscape.', color: '#D4A27A' },
  { name: 'Broadcast', years: '2008', desc: 'TVCs, film and photography — brands brought to life on screen.', color: '#E08A45' },
  { name: 'Digital', years: '2018', desc: 'Social, search and streaming — precision storytelling at scale.', color: '#E87722' },
  { name: 'AI', years: '2023', desc: 'AI-assisted films and personalised campaigns — the next switch-on.', color: '#FF8A2B' },
];

export const STATS = [
  { to: 25, suffix: '+', label: 'Years in Madurai' },
  { to: 3000, suffix: '+', label: 'Projects delivered', separator: ',' },
  { to: 2000, suffix: '+', label: 'Brands served', separator: ',' },
];

/** Epilogue — the wall of lit signs. */
const cBySlug = slug => clients.find(c => c.slug === slug);
export const SIGNS = [
  cBySlug('thangamayil'),
  cBySlug('ramraj-cotton'),
  cBySlug('tulsi-diamonds'),
  cBySlug('anandam-silks'),
  cBySlug('preethi'),
  cBySlug('krt-thanga-maligai'),
  cBySlug('smj'),
  cBySlug('saastha'),
  cBySlug('prestige'),
  cBySlug('apollo-hospitals'),
  cBySlug('kalimark'),
].filter(Boolean);
