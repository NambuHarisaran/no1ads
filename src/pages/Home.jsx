import Seo from '../components/Seo.jsx';
import Faq from '../sections/Faq.jsx';
import Prologue from '../story/Prologue.jsx';
import ActNoise from '../story/ActNoise.jsx';
import ActOneBrief from '../story/ActOneBrief.jsx';
import ActYear from '../story/ActYear.jsx';
import ActOnAir from '../story/ActOnAir.jsx';
import ActRemembered from '../story/ActRemembered.jsx';
import ActEras from '../story/ActEras.jsx';
import Epilogue from '../story/Epilogue.jsx';
import StoryNav from '../story/StoryNav.jsx';

/**
 * Home is a scroll story — "Every brand starts in the dark" — where the
 * visitor's brand is the hero and Number One Ads is the guide:
 * Prologue → I The noise → II One brief → III A year in Tamil Nadu →
 * IV On air → V Remembered → VI Five eras → Epilogue (CTA), then the FAQ
 * (kept for visitors and for the FAQPage structured data).
 * See DESIGN.md for the motion system and tokens.
 */
export default function Home() {
  return (
    <>
      <Seo
        title="Number One Ads — 360° Advertising Agency | Madurai | 25 Years of Legacy"
        description="Madurai's most trusted 360° advertising agency since 2000. Creative design, digital marketing, LED signage, ACP elevation, exhibition stalls, roadshows & branding across Tamil Nadu."
        path="/"
      />
      <div className="st-story">
        <Prologue />
        <ActNoise />
        <ActOneBrief />
        <ActYear />
        <ActOnAir />
        <ActRemembered />
        <ActEras />
        <Epilogue />
        <StoryNav />
      </div>
      <Faq />
    </>
  );
}
