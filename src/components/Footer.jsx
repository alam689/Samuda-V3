import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import Logo from "./Logo.jsx";
import { CATEGORIES } from "../data/catalog.js";

export default function Footer() {
  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <h2 className="footer__cta-title">Let&rsquo;s build something <em>remarkable</em> together.</h2>
          <Link className="btn btn--light" to="/contact">Talk to our team <Icon name="arrow" /></Link>
        </div>
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo light />
            <p>Samuda Chemical Complex Limited — a concern of T.K. Group — is the largest caustic soda and hydrogen peroxide plant in Bangladesh.</p>
          </div>
          <div>
            <h3 className="footer__h">Company</h3>
            <ul>
              <li><Link to="/about">About Samuda</Link></li>
              <li><Link to="/plants">Our Plants</Link></li>
              <li><Link to="/manufacturing">Manufacturing</Link></li>
              <li><Link to="/quality-sustainability">Quality &amp; Sustainability</Link></li>
              <li><Link to="/global-reach">Global Reach</Link></li>
              <li><Link to="/policies">Company Policies</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer__h">Products</h3>
            <ul>
              {CATEGORIES.map((c) => <li key={c.slug}><Link to={`/products?category=${c.slug}`}>{c.name}</Link></li>)}
              <li><Link to="/industries">Industries we serve</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer__h">Get in touch</h3>
            <address><strong>Head Office</strong><br />T.K. Bhaban, 13 Karwan Bazar<br />Dhaka-1215, Bangladesh</address>
            <address><strong>Factory</strong><br />Sikirgaon, Gazaria<br />Munshiganj, Bangladesh</address>
            <p><a href="mailto:info@scclbd.com">info@scclbd.com</a></p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Samuda Chemical Complex Limited. All rights reserved.</p>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#main" onClick={toTop}>Back to top &uarr;</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
