// Schema Utility Functions for JSON-LD Generation

const BASE_URL = "https://www.no1ads.in";

/**
 * Generate Organization Schema - Global company information
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Number One Ads",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: "Award-winning creative and digital marketing agency in Chennai, India. 15+ years transforming brands with bold creative work that moves markets.",
  foundingDate: "2009",
  areaServed: "IN",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chennai",
    addressCountry: "IN"
  },
  sameAs: [
    "https://www.linkedin.com/company/no1ads",
    "https://www.instagram.com/no1ads",
    "https://www.facebook.com/no1ads"
  ]
});

/**
 * Generate LocalBusiness Schema - Local presence and contact info
 */
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Number One Ads",
  image: `${BASE_URL}/logo.png`,
  description: "Creative and digital marketing agency serving brands across India",
  telephone: "+91-9876543210",
  email: "hello@no1ads.in",
  url: BASE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chennai",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600000",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.0827",
    longitude: "80.2707"
  },
  areaServed: [
    "Chennai",
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "India"
  ],
  priceRange: "$$"
});

/**
 * Generate AggregateStatistic Schema - For stats grid on home page
 */
export const getAggregateStatisticSchema = (stats = []) => {
  const defaultStats = [
    { name: "Successful Campaigns", value: "200+" },
    { name: "Years of Excellence", value: "15+" },
    { name: "Specialized Services", value: "8" },
    { name: "Geographic Reach", value: "Pan-India" }
  ];

  const statItems = stats.length ? stats : defaultStats;

  return {
    "@context": "https://schema.org",
    "@type": "AggregateStatistic",
    name: "Number One Ads Agency Statistics",
    description: "Key achievements and statistics of Number One Ads creative agency",
    statistic: statItems.map((stat) => ({
      "@type": "Statistic",
      name: stat.name,
      about: "Number One Ads",
      statistic: stat.value
    }))
  };
};

/**
 * Generate Service Schema - For individual service pages
 */
export const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.fullDesc || service.shortDesc,
  url: `${BASE_URL}/services/${service.slug}`,
  image: `${BASE_URL}/services/${service.slug}.jpg`,
  serviceType: service.title,
  provider: {
    "@type": "LocalBusiness",
    name: "Number One Ads",
    url: BASE_URL
  },
  areaServed: {
    "@type": "Country",
    name: "IN"
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/contact?service=${service.slug}`,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  }
});

/**
 * Generate BreadcrumbList Schema - For service detail pages
 */
export const getBreadcrumbSchema = (breadcrumbs = []) => {
  const defaultBreadcrumbs = [
    { name: "Home", url: BASE_URL },
    { name: "Services", url: `${BASE_URL}/services` }
  ];

  const items = breadcrumbs.length ? breadcrumbs : defaultBreadcrumbs;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

/**
 * Generate FAQPage Schema - For service details with features as FAQ
 */
export const getFAQSchema = (faqs = []) => {
  if (!faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
};

/**
 * Generate VideoObject Schema - For video content
 */
export const getVideoSchema = (video) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.title,
  description: video.description,
  url: video.url,
  thumbnailUrl: video.thumbnail,
  uploadDate: video.uploadDate,
  duration: video.duration
});

/**
 * Merge multiple schemas into a single GraphQL-type structure
 */
export const mergeSchemas = (schemas = []) => {
  if (schemas.length === 0) return null;
  if (schemas.length === 1) return schemas[0];

  return {
    "@context": "https://schema.org",
    "@graph": schemas.map((schema) => {
      const { "@context": _, ...rest } = schema;
      return rest;
    })
  };
};