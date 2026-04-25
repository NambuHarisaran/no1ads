import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export default function SEOHead({ 
  title, 
  description, 
  canonical = "/", 
  schema = null,
  ogImage = null,
  keywords = null 
}) {
  const base = "https://www.no1ads.in";
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${base}${canonical}`} />
      
      {/* OpenGraph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${base}${canonical}`} />
      <meta property="og:site_name" content="Number One Ads" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* JSON-LD Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

SEOHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  schema: PropTypes.object,
  ogImage: PropTypes.string,
  keywords: PropTypes.string,
};
