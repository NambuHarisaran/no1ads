import Reveal from '../components/Reveal.jsx';
import ShinyText from '../components/ShinyText.jsx';
import SplitText from '../components/SplitText.jsx';

const CHANNEL_URL = 'https://www.youtube.com/@No1ads';

// To feature specific films, add YouTube video IDs here (e.g. 'dQw4w9WgXcQ').
// Each becomes a real thumbnail that links straight to the video. Until then,
// the cards link to the channel.
const VIDEO_IDS = [];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="rgba(232,119,34,0.92)" />
    <path d="M10 8l6 4-6 4V8z" fill="#0D0D0D" />
  </svg>
);

export default function YouTubeAds() {
  const cards = VIDEO_IDS.length
    ? VIDEO_IDS.map(id => ({
        href: `https://www.youtube.com/watch?v=${id}`,
        thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      }))
    : [{ href: CHANNEL_URL }, { href: CHANNEL_URL }, { href: CHANNEL_URL }];

  return (
    <section className="youtube-section" id="ads">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <ShinyText text="ON AIR" speed={5} color="#E87722" shineColor="#FFFFFF" />
          </div>
          <h2 className="headline youtube-headline">
            <SplitText
              text="Ads We've Shot & Released"
              splitType="chars"
              delay={20}
              duration={0.8}
              ease="power4.out"
              tag="span"
            />
          </h2>
          <p className="showcase-sub">
            Commercials, brand films and campaign reels produced in-house — watch the latest
            on our YouTube channel.
          </p>
        </Reveal>

        <Reveal className="youtube-grid" stagger={120}>
          {cards.map((c, i) => (
            <a className="youtube-card" key={i} href={c.href} target="_blank" rel="noreferrer" aria-label="Watch on YouTube">
              {c.thumb ? (
                <img className="youtube-thumb" src={c.thumb} alt="" loading="lazy" decoding="async" />
              ) : (
                <span className="youtube-thumb youtube-thumb--placeholder" />
              )}
              <span className="youtube-play"><PlayIcon /></span>
            </a>
          ))}
        </Reveal>

        <Reveal className="youtube-cta-row">
          <a className="btn-orange" href={CHANNEL_URL} target="_blank" rel="noreferrer">
            Visit @No1ads on YouTube →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
