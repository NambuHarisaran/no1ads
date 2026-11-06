import { Outlet } from 'react-router-dom';
import Nav from '../sections/Nav.jsx';
import Footer from '../sections/Footer.jsx';
import CursorDot from './CursorDot.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import SmoothScroll from '../motion/SmoothScroll.jsx';

export default function Layout() {
  return (
    <>
      <SmoothScroll />
      <CursorDot />
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
