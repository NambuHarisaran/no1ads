import Seo from '../components/Seo.jsx';
import Hero from '../sections/Hero.jsx';
import Services from '../sections/Services.jsx';
import ServicesShowcase from '../sections/ServicesShowcase.jsx';
import Group from '../sections/Group.jsx';
import Evolution from '../sections/Evolution.jsx';
import Gallery from '../sections/Gallery.jsx';
import YouTubeAds from '../sections/YouTubeAds.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import LegacyBanner from '../sections/LegacyBanner.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function Home() {
  return (
    <>
      <Seo
        title="Number One Ads — 360° Advertising Agency | Madurai | 25 Years of Legacy"
        description="Madurai's most trusted 360° advertising agency since 2000. Creative design, digital marketing, LED signage, ACP elevation, exhibition stalls, roadshows & branding across Tamil Nadu."
        path="/"
      />
      <Hero />
      <Services />
      <ServicesShowcase />
      <Group />
      <Evolution />
      <Gallery preview />
      <YouTubeAds />
      <Testimonials />
      <LegacyBanner />
      <CtaBand variant="orange" />
    </>
  );
}
