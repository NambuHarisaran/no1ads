// Single source of truth for the individual /services/:slug pages.
//
// Each service: slug, label (short, for cards/nav), title (page H1),
// tagline, intro[] (paragraphs), deliverables[] (what's included),
// image (optional — a /services webp), and an optional `feature` flag for
// special blocks (digital-marketing renders Partners + BNI).

const servicePages = [
  {
    slug: 'creative-design',
    label: 'Creative Design',
    title: 'Creative Design',
    tagline: 'Brand-led artwork, crafted to the last pixel',
    intro: [
      'Every campaign starts on the drawing board. Our design team turns a brief into concepts, layouts and final art that are ready for print, screen or fabrication — without a single detail lost in translation.',
      'From a single festival creative to a full visual identity, the same obsession applies: clean typography, sharp colour and artwork built to the exact spec of wherever it will live.',
    ],
    deliverables: [
      'Print & outdoor artwork (hoardings, handbills, brochures)',
      'Social media creatives & campaign sets',
      'Packaging & point-of-sale design',
      'Festival & offer creatives',
      'Print-ready files for every format',
      'Brand-consistent templates',
    ],
    image: '/services/design.webp',
    // Selected creatives from our own portfolio — shown as a showcase grid.
    gallery: [
      '/gallery/necklece-thumb.webp',
      '/gallery/spark-jwellery-copy-thumb.webp',
      '/gallery/ring-post-copy-thumb.webp',
      '/gallery/charm-thumb.webp',
      '/gallery/minimal-magic-thumb.webp',
      '/gallery/swirl-thumb.webp',
      '/gallery/mangalyam-copy-thumb.webp',
      '/gallery/social-media-post-16-thumb.webp',
      '/gallery/akshaya-thirithi-thumb.webp',
    ],
  },
  {
    slug: 'digital-marketing',
    label: 'Digital Marketing',
    title: 'Digital Marketing',
    tagline: 'Precision storytelling across every screen',
    intro: [
      'We plan, create and run digital campaigns that put your brand in front of the right people — on search, social, audio and streaming. Strategy, creative and media buying sit under one roof, so your message stays consistent from the first ad to the final conversion.',
      'As an active member of BNI Chanakyaas, Madurai, we also bring a strong local business network to the table — referrals, partnerships and word-of-mouth that pure online advertising can’t buy.',
    ],
    deliverables: [
      'Google Search & Display campaigns',
      'Meta (Facebook & Instagram) advertising',
      'Spotify audio advertising',
      'Connected-TV & streaming ads',
      'Social media management & content',
      'Performance tracking & monthly reporting',
    ],
    feature: 'digital',
  },
  {
    slug: 'branding-identity',
    label: 'Branding & Identity',
    title: 'Branding & Identity',
    tagline: 'Identities that carve out lasting mindspace',
    intro: [
      'A brand is more than a logo — it is the feeling people get the moment they see you. We build identities that are distinct, consistent and built to last across every touchpoint.',
      'Logo, colour, typography and tone are documented into a system your whole team — and ours — can apply with confidence, on a signboard or a social post.',
    ],
    deliverables: [
      'Logo & wordmark design',
      'Brand colour & typography systems',
      'Brand guidelines documents',
      'Stationery & collateral',
      'Brand naming & taglines',
      'Rebrand & identity refresh',
    ],
  },
  {
    slug: 'led-signage',
    label: 'LED Signage',
    title: 'LED Signage',
    tagline: 'High-impact illumination, day and night',
    intro: [
      'Glowing storefronts, channel letters and digital LED displays that command attention after dark. Designed, manufactured and installed by our own signage unit, Triple A Signage.',
      'We engineer for Tamil Nadu conditions — heat, dust and monsoon — so the sign looks as sharp in year five as it did on day one.',
    ],
    deliverables: [
      'LED channel letters & 3D lit signage',
      'Glow sign & lollipop boards',
      'Digital LED video displays',
      'Façade & rooftop signage',
      'In-house fabrication & installation',
      'Maintenance & service',
    ],
    image: '/services/led-signage.webp',
  },
  {
    slug: 'acp-elevation',
    label: 'ACP Elevation',
    title: 'ACP Elevation',
    tagline: 'Premium façades that transform buildings',
    intro: [
      'Aluminium composite panel elevation that turns a plain building front into a branded landmark. Precise fabrication, clean joints and finishes that hold their colour for years.',
      'From showroom fronts to multi-storey façades, our crews handle structure, cladding and signage as one integrated job.',
    ],
    deliverables: [
      'ACP façade design & cladding',
      'Showroom & shopfront elevation',
      'Structural framework & fixing',
      'Integrated signage & lighting',
      'Weather-grade finishes',
      'End-to-end installation',
    ],
    image: '/services/acp-elevation.webp',
  },
  {
    slug: 'signage-boards',
    label: 'Signage Boards',
    title: 'Signage Boards',
    tagline: 'Durable storefront & directional boards',
    intro: [
      'Name boards, directional signage and storefront boards built to brand spec and made to last. Flex, ACP, acrylic, metal — the right material for the right job.',
      'Every board is produced and installed by our own teams, so colour, size and finish match your brand exactly.',
    ],
    deliverables: [
      'Name & storefront boards',
      'Directional & wayfinding signage',
      'Acrylic & metal letter signage',
      'Backlit & non-lit boards',
      'Safety & compliance signage',
      'Site survey & installation',
    ],
    image: '/services/signage-boards.webp',
  },
  {
    slug: 'exhibition-stalls',
    label: 'Exhibition Stalls',
    title: 'Exhibition Stalls',
    tagline: 'Show-stopping stalls, built end to end',
    intro: [
      'A great stall earns footfall and gets photographed. We design and execute exhibition and expo stalls that pull crowds and make your brand the one people remember.',
      'Concept, 3D design, fabrication, on-site build and teardown — handled by one team so you can focus on your visitors.',
    ],
    deliverables: [
      '3D stall design & visualisation',
      'Custom fabrication & branding',
      'Lighting, AV & display integration',
      'On-site installation & dismantling',
      'Promotional & POS elements',
      'Logistics across Tamil Nadu',
    ],
    image: '/services/exhibition-stall.webp',
  },
  {
    slug: 'roadshow-outdoor',
    label: 'Roadshow & Outdoor',
    title: 'Roadshow & Outdoor Media',
    tagline: 'Take your brand to the streets',
    intro: [
      'Mobile activations, hoardings, transit media and on-ground roadshows that put your brand where the people are. We plan routes, build the units and run the activation start to finish.',
      'Through our transit-media company Infobus Advertising, we also place brands on buses and vehicles across every route in the region.',
    ],
    deliverables: [
      'Roadshow planning & production',
      'Hoardings & outdoor media',
      'Bus & transit advertising',
      'Mobile van & LED-truck campaigns',
      'Promoter & activation teams',
      'Permits & site management',
    ],
    image: '/services/roadshow.webp',
  },
  {
    slug: 'in-shop-branding',
    label: 'In-Shop Branding',
    title: 'In-Shop Branding',
    tagline: 'Turn footfall into sales',
    intro: [
      'The last few feet matter most. We brand retail interiors and point-of-sale so that customers who walk in actually convert — and remember you when they leave.',
      'Wall graphics, displays, standees and POS, designed and installed to feel like a natural part of the store.',
    ],
    deliverables: [
      'Retail interior branding',
      'Point-of-sale displays',
      'Wall & pillar graphics',
      'Standees & danglers',
      'Window & shutter branding',
      'Roll-out across multiple outlets',
    ],
    image: '/services/in-shop.webp',
  },
  {
    slug: 'printing',
    label: 'Printing',
    title: 'Printing Solutions',
    tagline: 'Premium print, every format and scale',
    intro: [
      'From a crisp visiting card to a building-sized flex, our printing solutions cover every format and scale — always on time, always to spec.',
      'Offset, digital and large-format under one roof, with colour management that keeps your brand consistent across every piece.',
    ],
    deliverables: [
      'Large-format flex & vinyl',
      'Offset & digital printing',
      'Brochures, handbills & catalogues',
      'Stickers, labels & packaging',
      'Banners, standees & backdrops',
      'Bulk runs to deadline',
    ],
  },
  {
    slug: 'film-photography',
    label: 'Film & Photography',
    title: 'Film & Photography',
    tagline: 'Brands brought to life on screen',
    intro: [
      'From TV commercials to product and catalogue shoots, we translate your brand into compelling visual stories — scripted, shot and edited in-house.',
      'Concept to final cut: direction, production, photography and post, delivered for broadcast, social and web.',
    ],
    deliverables: [
      'TV commercials (TVC)',
      'Product & catalogue photography',
      'Corporate & brand films',
      'Social & ad-film content',
      'Editing, grading & post-production',
      'Scriptwriting & direction',
    ],
    // Renders the full YouTube catalogue + a product-shoot image showcase.
    showcase: 'film',
    // Product / catalogue shoot stills. Drop image paths (e.g. '/shoots/xxx.webp')
    // here as they're added — the section only renders when this has entries.
    productShoots: [],
  },
];

export function getServiceBySlug(slug) {
  return servicePages.find(s => s.slug === slug);
}

export default servicePages;
