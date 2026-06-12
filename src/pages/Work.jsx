import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Gallery from '../sections/Gallery.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function Work() {
  return (
    <>
      <Seo
        title="Our Work — Advertising & Branding Portfolio | Number One Ads"
        description="Browse a quarter-century of Number One Ads creative work — social campaigns, handbills, festive creatives and brand design produced in-house in Madurai, Tamil Nadu."
        path="/work"
      />
      <PageHero
        eyebrow="PORTFOLIO"
        title="Our Work, Up Close"
        subtitle="Campaigns, festivals and storefronts — every piece designed, printed and installed by our own teams."
        crumb="Work"
      />
      <Gallery
        showFilter
        eyebrow="THE PORTFOLIO"
        heading="Built for Brands That Mean Business"
        sub="Filter by category, or scroll the full archive. Tap any piece to view it large."
      />
      <CtaBand
        variant="orange"
        eyebrow="LIKE WHAT YOU SEE?"
        title="Your brand could be the next piece in this gallery."
        buttonLabel="Start a Project →"
      />
    </>
  );
}
