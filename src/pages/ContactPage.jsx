import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Contact from '../sections/Contact.jsx';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Number One Ads — Advertising Agency in Madurai"
        description="Start your project with Number One Ads. Email contact@no1ads.in or reach our Madurai studio for design, signage, branding, exhibitions and roadshows across Tamil Nadu."
        path="/contact"
      />
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Let's Talk."
        subtitle="From a single signboard to a city-wide campaign — we're ready when you are."
        crumb="Contact"
      />
      <Contact showHeading={false} />
    </>
  );
}
