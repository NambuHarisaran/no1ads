import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found — Number One Ads" description="The page you were looking for could not be found." path="/404" />
      <section className="notfound-section">
        <div className="container notfound-inner">
          <div className="notfound-code" aria-hidden="true">404</div>
          <h1 className="notfound-title">This page took a different route.</h1>
          <p className="notfound-text">
            The link may be old or mistyped — but our work is all still here.
          </p>
          <div className="notfound-ctas">
            <Link to="/" className="btn-orange">Back to Home →</Link>
            <Link to="/work" className="ghost-link">View Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
