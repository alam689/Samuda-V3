import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { usePageMeta } from "../lib/hooks.js";

export default function NotFound() {
  usePageMeta("Page not found");
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <p className="eyebrow eyebrow--light">Error 404</p>
          <h1 className="page-hero__title">This page has <em>moved</em> on.</h1>
          <p className="page-hero__lead">The page you were looking for doesn&rsquo;t exist. Try the product catalogue or head back home.</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/">Back to home <Icon name="arrow" /></Link>
            <Link className="btn btn--ghost" to="/products">View products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
