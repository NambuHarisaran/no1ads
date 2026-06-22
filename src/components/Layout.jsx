import { Outlet } from 'react-router-dom';
import Nav from '../sections/Nav.jsx';
import Footer from '../sections/Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import FloatingContact from './FloatingContact.jsx';
import Analytics from './Analytics.jsx';

export default function Layout() {
  return (
    <>
      <Analytics />
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
