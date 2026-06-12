import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import Timeline from '../sections/Timeline.jsx';
import Values from '../sections/Values.jsx';
import Group from '../sections/Group.jsx';
import Evolution from '../sections/Evolution.jsx';
import BniBadge from '../sections/BniBadge.jsx';
import ClientsWall from '../sections/ClientsWall.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import CtaBand from '../components/CtaBand.jsx';

const QUICK_STATS = [
  ['2000', 'Founded in Madurai'],
  ['3000+', 'Projects delivered'],
  ['2000+', 'Clients served'],
  ['360°', 'In-house capability'],
];

export default function About() {
  return (
    <>
      <Seo
        title="About Number One Ads — 25 Years of Advertising in Madurai"
        description="The story of Number One Ads: from first print campaigns in 2000 to a full 360° advertising agency delivering design, signage, branding and events across Tamil Nadu."
        path="/about"
      />
      <PageHero
        eyebrow="OUR STORY"
        title="Twenty-Five Years of Building Brands in Madurai"
        subtitle="One agency, every era of advertising — print, outdoor, broadcast, digital and now AI."
        crumb="About"
      />

      <section className="story-section">
        <div className="container story-grid">
          <Reveal className="story-copy">
            <p className="story-lead">
              Number One Ads began in 2000 with a simple promise: make local brands
              impossible to ignore. We started with print and a small team in Madurai —
              and never stopped expanding what one agency could do under a single roof.
            </p>
            <p>
              Over twenty-five years we grew from hand-finished hoardings into a complete
              360° partner: creative design, LED and ACP signage, exhibition stalls,
              roadshows, retail branding, film and digital. Because design, production and
              installation all happen in-house, our clients deal with one team that owns the
              outcome from the first sketch to the final bolt on the wall.
            </p>
            <p>
              The tools have changed many times. The standard has not. Most of the brands we
              started with in the early years are still with us today — and that trust is the
              real measure of these twenty-five years.
            </p>
          </Reveal>
          <Reveal className="story-stats" stagger={120}>
            {QUICK_STATS.map(([num, label]) => (
              <div className="story-stat" key={label}>
                <span className="story-stat-num">{num}</span>
                <span className="story-stat-label">{label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Timeline />
      <Values />
      <Group />
      <BniBadge />
      <Evolution />
      <ClientsWall />
      <Testimonials />
      <CtaBand
        variant="orange"
        eyebrow="WORK WITH US"
        title="Let's add your brand to the next twenty-five years."
        buttonLabel="Get in Touch →"
      />
    </>
  );
}
