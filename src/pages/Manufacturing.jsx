import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../lib/hooks.js";

export default function Manufacturing() {
  usePageMeta("Manufacturing", "Samuda Chemical's manufacturing facility at Gazaria, Munshiganj — production process, laboratory quality control, storage, packaging and dispatch.");
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" style={{ backgroundImage: `url(${asset("assets/img/aerial-1920.webp")})` }} aria-hidden="true"></div>
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>Manufacturing</span></nav>
          <p className="eyebrow eyebrow--light">Manufacturing</p>
          <h1 className="page-hero__title reveal-words">Where precision meets <em>scale</em>.</h1>
          <p className="page-hero__lead reveal">Our manufacturing facility at Sikirgaon, Gazaria brings together process plant, laboratory, storage and dispatch on one integrated site.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">The facility</p>
            <h2 className="h2">An integrated <em>chemical</em> complex.</h2>
            <p className="lead-text">Located in Gazaria, Munshiganj, our facility is designed to produce, test, store and dispatch industrial chemicals safely and efficiently.</p>
            <p><Link className="link-arrow" to="/plants">Explore each of our plants <Icon name="arrow"/></Link></p>
            <ul className="feature-list">
              <li><Icon name="factory"/><div><strong>Process plant</strong><span>Production units engineered for controlled, repeatable manufacturing.</span></div></li>
              <li><Icon name="box"/><div><strong>Bulk storage</strong><span>Dedicated tank farm and warehousing for liquid and solid products.</span></div></li>
              <li><Icon name="truck"/><div><strong>Packaging &amp; dispatch</strong><span>Filling, labelling and loading for road delivery across the country.</span></div></li>
            </ul>
          </div>
          <div className="reveal" style={{ "--d": "120ms" }}>
            <div className="frame frame--wide">
              <img src={asset("assets/img/aerial-1920.webp")} srcSet={`${asset("assets/img/aerial-800.webp")} 800w, ${asset("assets/img/aerial-1920.webp")} 1920w`} sizes="(max-width: 980px) 100vw, 50vw" alt="Aerial view of storage tanks and pipe racks at a chemical facility" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head reveal">
            <div><p className="eyebrow">How we work</p><h2 className="h2">From raw material to your <em>gate</em>.</h2></div>
            <p>Each stage is controlled and documented so that every delivery meets the agreed specification.</p>
          </div>
          <ol className="process">
            <li className="reveal"><span className="process__dot"><Icon name="box"/></span><h3>Raw materials</h3><p>Incoming materials are sampled and checked before use.</p></li>
            <li className="reveal" style={{ "--d": "80ms" }}><span className="process__dot"><Icon name="gear"/></span><h3>Production</h3><p>Controlled processing to defined operating procedures.</p></li>
            <li className="reveal" style={{ "--d": "160ms" }}><span className="process__dot"><Icon name="microscope"/></span><h3>Testing</h3><p>In-process and finished-goods analysis in our laboratory.</p></li>
            <li className="reveal" style={{ "--d": "240ms" }}><span className="process__dot"><Icon name="shield"/></span><h3>Packaging</h3><p>Filled and labelled in suitable, compliant containers.</p></li>
            <li className="reveal" style={{ "--d": "320ms" }}><span className="process__dot"><Icon name="truck"/></span><h3>Dispatch</h3><p>Planned logistics for reliable, on-time delivery.</p></li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split split--rev">
          <div className="reveal">
            <p className="eyebrow">Laboratory</p>
            <h2 className="h2">Tested before it <em>travels</em>.</h2>
            <p className="lead-text">Our in-house laboratory supports production with routine analysis of raw materials, in-process samples and finished goods.</p>
            <p>Batch records and retained samples help us trace every delivery and respond quickly to customer questions. Product-specific Technical Data Sheets and Safety Data Sheets are available on request.</p>
            <Link className="btn btn--outline" to="/quality-sustainability">Quality &amp; Sustainability <Icon name="arrow"/></Link>
          </div>
          <div className="reveal" style={{ "--d": "120ms" }}>
            <div className="frame frame--wide"><img src={asset("assets/img/plants/qc-lab.webp")} alt="Samuda quality-control chemist testing a sample" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow">Safety</p>
            <h2 className="h2">Safety is part of <em>every</em> process.</h2>
          </div>
          <div className="cards-4">
            <article className="icard reveal"><Icon name="users"/><h3>Trained people</h3><p>Operators trained in safe handling of hazardous chemicals.</p></article>
            <article className="icard reveal" style={{ "--d": "80ms" }}><Icon name="shield"/><h3>Protective equipment</h3><p>Appropriate PPE for each task and area of the site.</p></article>
            <article className="icard reveal" style={{ "--d": "160ms" }}><Icon name="doc"/><h3>Documented procedures</h3><p>Standard operating procedures for production and handling.</p></article>
            <article className="icard reveal" style={{ "--d": "240ms" }}><Icon name="spark"/><h3>Emergency readiness</h3><p>Preparedness to respond quickly and protect people.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
