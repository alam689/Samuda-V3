import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../lib/hooks.js";

export default function About() {
  usePageMeta("About Us", "Learn about Samuda Chemical Complex Limited (SCCL), an industrial chemical manufacturer in Bangladesh established in 2006 and a concern of T.K. Group.");
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" style={{ backgroundImage: `url(${asset("assets/img/plant-1000.webp")})` }} aria-hidden="true"></div>
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>About Samuda</span></nav>
          <p className="eyebrow eyebrow--light">About Samuda</p>
          <h1 className="page-hero__title reveal-words">Chemistry for a <em>better</em> tomorrow.</h1>
          <p className="page-hero__lead reveal">Samuda Chemical Complex Limited is an industrial chemical manufacturer based in Bangladesh, supplying essential chemicals and textile auxiliaries to the industries that drive the national economy.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">Our story</p>
            <h2 className="h2">Rooted in Bangladesh. <em>Built</em> for industry.</h2>
            <p className="lead-text">Samuda Chemical Complex Limited (SCCL) was incorporated in 2006 in Bangladesh under the Companies Act, 1994. A concern of T.K. Group, it is the largest caustic soda and hydrogen peroxide plant in Bangladesh today.</p>
            <p>From our manufacturing facility at Sikirgaon, Gazaria in Munshiganj, we produce basic chemicals, Samuda&rsquo;s own performance chemicals for textiles, and calcium carbonate. Our commercial and corporate teams operate from T.K. Bhaban in Karwan Bazar, Dhaka.</p>
            <p>Since its inception as the first company in Bangladesh to produce hydrogen peroxide at up to 70% concentration, SCCL has kept raising the bar in technological competence. Today our chlor-alkali, hydrogen peroxide and calcium carbonate plants are supported by our own 28.19 MW power station.</p>
            <p>Our approach is simple: make dependable products, test them carefully, deliver them on time, and stand behind our customers with practical technical support.</p>
            <div className="hero__actions"><Link className="btn btn--outline" to="/plants">Our Plants <Icon name="arrow"/></Link><Link className="link-arrow" to="/policies">Company policies <Icon name="arrow"/></Link></div>
          </div>
          <div className="reveal" style={{ "--d": "120ms" }}>
            <div className="frame frame--tall">
              <img src={asset("assets/img/plants/caco3-plant.webp")} alt="Samuda plant storage tanks and process structures at Gazaria" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <div className="section-head reveal">
            <div><p className="eyebrow">Purpose</p><h2 className="h2">What guides us</h2></div>
          </div>
          <div className="mv">
            <article className="mv__card mv__card--dark reveal">
              <span className="mv__label">Mission</span>
              <h3>To supply industry with reliable, high-quality chemicals and the technical support customers need to run better processes.</h3>
            </article>
            <article className="mv__card reveal" style={{ "--d": "100ms" }}>
              <span className="mv__label">Vision</span>
              <h3>To be a trusted chemical partner for manufacturers in Bangladesh and the markets we serve abroad.</h3>
            </article>
          </div>
          <div className="values" style={{ marginTop: "72px" }}>
            <div className="reveal"><b>i.</b><h3>Quality</h3><p>Consistent products backed by laboratory testing.</p></div>
            <div className="reveal" style={{ "--d": "80ms" }}><b>ii.</b><h3>Safety</h3><p>Safe handling for our people, customers and communities.</p></div>
            <div className="reveal" style={{ "--d": "160ms" }}><b>iii.</b><h3>Integrity</h3><p>Honest information and long-term relationships.</p></div>
            <div className="reveal" style={{ "--d": "240ms" }}><b>iv.</b><h3>Responsibility</h3><p>Care for the environment we operate in.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="locations">
        <div className="container">
          <div className="section-head reveal">
            <div><p className="eyebrow">Locations</p><h2 className="h2">Where to <em>find</em> us</h2></div>
            <p className="muted">Visits to our manufacturing facility are by appointment. Please contact our team to arrange.</p>
          </div>
          <div className="loc-cards">
            <article className="loc reveal">
              <span className="loc__tag">Corporate</span>
              <h3>Head Office</h3>
              <address>T.K. Bhaban, 13 Karwan Bazar<br />Dhaka-1215, Bangladesh</address>
              <a className="link-arrow" href="https://www.google.com/maps/search/?api=1&amp;query=T.K.+Bhaban+Karwan+Bazar+Dhaka" target="_blank" rel="noopener">Get directions <Icon name="arrow"/></a>
              <Icon name="pin" className="loc__bg"/>
            </article>
            <article className="loc reveal" style={{ "--d": "100ms" }}>
              <span className="loc__tag">Manufacturing</span>
              <h3>Factory</h3>
              <address>Sikirgaon, Gazaria<br />Munshiganj, Bangladesh</address>
              <Link className="link-arrow" to="/manufacturing">About our facility <Icon name="arrow"/></Link>
              <Icon name="factory" className="loc__bg"/>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-band reveal">
            <div><h2>Let&rsquo;s <em>work</em> together.</h2><p>Whether you need a single product or a long-term supply partner, our team is ready to help.</p></div>
            <div className="cta-band__actions"><Link className="btn btn--primary" to="/contact#rfq">Request a Quote <Icon name="arrow"/></Link><Link className="btn btn--ghost" to="/products">View Products</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
