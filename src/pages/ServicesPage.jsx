import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Services from '../sections/Services.jsx';
import ServicesDetail from '../sections/ServicesDetail.jsx';
import Process from '../sections/Process.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services — Advertising, Signage & Branding | Number One Ads, Madurai"
        description="Creative design, LED signage, ACP elevation, exhibition stalls, roadshows, in-shop branding, printing & more — full 360° advertising services delivered in-house across Tamil Nadu."
        path="/services"
      />
      <PageHero
        eyebrow="WHAT WE DO"
        title="Full-Spectrum Advertising, Built In-House"
        subtitle="Six creative disciplines and thirteen production capabilities — under one roof in Madurai."
        crumb="Services"
      />
      <Services />
      <ServicesDetail />
      <Process />
      <CtaBand
        eyebrow="TELL US WHAT YOU NEED"
        title="Have a brief? We'll turn it into something installed."
        text="Signboard, showroom elevation, exhibition stall or a full campaign — send it over and we'll scope it fast."
      />
    </>
  );
}
