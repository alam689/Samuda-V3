import { Link } from "react-router-dom";
import Certifications from "../components/Certifications.jsx";
import Icon from "../components/Icon.jsx";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../lib/hooks.js";

export default function Quality() {
  usePageMeta("Quality & Sustainability", "Quality assurance, product safety and environmental responsibility at Samuda Chemical Complex Limited.");
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" style={{ backgroundImage: `url(${asset("assets/img/lab-1280.webp")})` }} aria-hidden="true"></div>
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>Quality &amp; Sustainability</span></nav>
          <p className="eyebrow eyebrow--light">Quality &amp; Sustainability</p>
          <h1 className="page-hero__title reveal-words">Quality you can <em>measure</em>. Responsibility you can trust.</h1>
          <p className="page-hero__lead reveal">Consistent products, safe operations and care for the environment are central to how we manufacture.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div><p className="eyebrow">Quality assurance</p><h2 className="h2">A disciplined approach to <em>quality</em>.</h2></div>
            <p className="muted">Quality is built into each stage of production — not inspected in at the end.</p>
          </div>
          <div className="cards-4">
            <article className="icard reveal"><Icon name="box"/><h3>Incoming inspection</h3><p>Raw materials are sampled and verified against specification before use.</p></article>
            <article className="icard reveal" style={{ "--d": "80ms" }}><Icon name="gear"/><h3>In-process control</h3><p>Key parameters are monitored throughout production.</p></article>
            <article className="icard reveal" style={{ "--d": "160ms" }}><Icon name="microscope"/><h3>Finished-goods testing</h3><p>Each batch is analysed in our laboratory before release.</p></article>
            <article className="icard reveal" style={{ "--d": "240ms" }}><Icon name="doc"/><h3>Traceability</h3><p>Batch documentation and retained samples for every delivery.</p></article>
          </div>
        </div>
      </section>

      <Certifications mist />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">Product safety</p>
            <h2 className="h2">Clear information for <em>safe</em> use.</h2>
            <p className="lead-text">We provide product-specific Safety Data Sheets and handling guidance so customers can store, use and transport our products safely.</p>
            <ul className="feature-list">
              <li><Icon name="doc"/><div><strong>Safety Data Sheets</strong><span>Available on request for each product and grade.</span></div></li>
              <li><Icon name="shield"/><div><strong>Labelling &amp; packaging</strong><span>Containers labelled with product and hazard information.</span></div></li>
              <li><Icon name="users"/><div><strong>Customer guidance</strong><span>Advice on storage, handling and protective equipment.</span></div></li>
            </ul>
            <Link className="btn btn--primary" to="/contact?doc=SDS#rfq">Request documents <Icon name="arrow"/></Link>
          </div>
          <div className="reveal" style={{ "--d": "120ms" }}>
            <div className="quote-card">
              <Icon name="award"/>
              <h3>Certificates &amp; compliance</h3>
              <p>Copies of our ISO 9001 certificate and other compliance documents, including scope and validity, are available to customers on request. Please contact our team and we will share the relevant documents.</p>
              <Link className="link-arrow" to="/contact#general">Contact our team <Icon name="arrow"/></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head reveal">
            <div><p className="eyebrow">Sustainability</p><h2 className="h2">Responsible chemistry for a <em>greener</em> tomorrow.</h2></div>
            <p>We are committed to reducing the environmental footprint of our operations and supporting the communities around us.</p>
          </div>
          <div className="cards-3">
            <article className="icard reveal"><Icon name="drop"/><h3>Water stewardship</h3><p>Responsible water use and treatment of process effluent at our facility.</p></article>
            <article className="icard reveal" style={{ "--d": "80ms" }}><Icon name="leaf"/><h3>Cleaner products</h3><p>Ion-exchange membrane electrolysis with low energy use and no pollution, and products such as hydrogen peroxide that break down to water and oxygen.</p></article>
            <article className="icard reveal" style={{ "--d": "160ms" }}><Icon name="users"/><h3>People &amp; community</h3><p>Safe workplaces governed by 54 documented policies, and positive relationships with our neighbours in Gazaria.</p><p style={{ marginTop: "14px" }}><Link className="link-arrow" to="/policies">Company policies <Icon name="arrow"/></Link></p></article>
          </div>
        </div>
      </section>
    </>
  );
}
