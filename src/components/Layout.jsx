import { Outlet } from 'react-router-dom';
import Nav from '../sections/Nav.jsx';
import Footer from '../sections/Footer.jsx';
import CursorDot from './CursorDot.jsx';
import ScrollToTop from './ScrollToTop.jsx';

export default function Layout() {
  return (
    <>
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
