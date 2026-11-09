import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../lib/hooks.js";

export default function News() {
  usePageMeta("News", "News and announcements from Samuda Chemical Complex Limited.");
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true"></div>
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>News</span></nav>
          <p className="eyebrow eyebrow--light">Newsroom</p>
          <h1 className="page-hero__title reveal-words">News &amp; <em>announcements</em>.</h1>
          <p className="page-hero__lead reveal">Company updates, product news and announcements from Samuda Chemical.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="empty-state reveal">
            <Icon name="doc"/>
            <h2>Stay tuned</h2>
            <p className="muted">Our latest news and announcements will be published here. For media inquiries, please contact our team.</p>
            <Link className="btn btn--outline" to="/contact#general">Media contact <Icon name="arrow"/></Link>
          </div>
        </div>
      </section>
    </>
  );
}
