import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';

// Heavier inner pages are code-split so the landing page stays lean.
const About = lazy(() => import('./pages/About.jsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'));
const Work = lazy(() => import('./pages/Work.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

const PageFallback = () => <div className="route-fallback" aria-hidden="true" />;

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="services"
          element={
            <Suspense fallback={<PageFallback />}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path="services/:slug"
          element={
            <Suspense fallback={<PageFallback />}>
              <ServiceDetail />
            </Suspense>
          }
        />
        <Route
          path="work"
          element={
            <Suspense fallback={<PageFallback />}>
              <Work />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageFallback />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
