import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import servicePages from './data/servicePages.js';

// React Router's data-router `lazy` expects a module of route props
// ({ Component, loader, ... }), but our pages use `export default`. This
// adapter bridges the two while keeping each inner page code-split.
const lazyPage = loader => async () => {
  const m = await loader();
  return { Component: m.default };
};

// Route table consumed by vite-react-ssg (build-time prerender) and by the
// client router. The landing page is eager so it paints instantly; heavier
// inner pages stay code-split.
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', lazy: lazyPage(() => import('./pages/About.jsx')) },
      { path: 'services', lazy: lazyPage(() => import('./pages/ServicesPage.jsx')) },
      {
        path: 'services/:slug',
        lazy: lazyPage(() => import('./pages/ServiceDetail.jsx')),
        // Prerender a static HTML file for every service page.
        getStaticPaths: () => servicePages.map(s => `services/${s.slug}`),
      },
      { path: 'work', lazy: lazyPage(() => import('./pages/Work.jsx')) },
      { path: 'contact', lazy: lazyPage(() => import('./pages/ContactPage.jsx')) },
      { path: '*', lazy: lazyPage(() => import('./pages/NotFound.jsx')) },
    ],
  },
];
