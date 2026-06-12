import { lazy, Suspense } from 'react';
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Timeline from './sections/Timeline.jsx';
import Services from './sections/Services.jsx';
import ServicesShowcase from './sections/ServicesShowcase.jsx';
import Evolution from './sections/Evolution.jsx';
import LegacyBanner from './sections/LegacyBanner.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import CursorDot from './components/CursorDot.jsx';

// The gallery carries the heaviest payload (manifest + lightbox), so it is
// code-split into its own chunk and rendered behind Suspense.
const Gallery = lazy(() => import('./sections/Gallery.jsx'));

export default function App() {
  return (
    <>
      <CursorDot />
      <Nav />
      <main>
        <Hero />
        <Timeline />
        <Services />
        <ServicesShowcase />
        <Evolution />
        <Suspense fallback={<div className="section-fallback" aria-hidden="true" />}>
          <Gallery />
        </Suspense>
        <LegacyBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
