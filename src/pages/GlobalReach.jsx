import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../lib/hooks.js";
import WorldMap from "../components/WorldMap.jsx";

export default function GlobalReach() {
  usePageMeta("Global Reach", "Samuda Chemical serves customers in Bangladesh and export markets across Asia, Africa, Europe and beyond.");
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true"></div>
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>Global Reach</span></nav>
          <p className="eyebrow eyebrow--light">Global reach</p>
          <h1 className="page-hero__title reveal-words">Made in Bangladesh. <em>Trusted</em> abroad.</h1>
          <p className="page-hero__lead reveal">Alongside our domestic customers, we export to markets across Asia, Africa, Europe and beyond.</p>
        </div>
      </section>

      <section className="section section--dark" style={{ paddingTop: "48px" }}>
        <div className="container">
          <div className="reveal"><WorldMap/></div>
          <div className="reach-lower">
            <div className="reveal">
              <div className="big-stat"><span className="big-stat__n"><span data-count="30">30</span><sup>+</sup></span><span className="big-stat__l">countries reached through our export business</span></div>
              <p className="lead-text on-dark">Our export team coordinates documentation, packaging and logistics from our Dhaka head office, working with customers and freight partners to deliver product safely to destination.</p>
            </div>
            <div className="reveal" style={{ "--d": "120ms" }}>
              <ul className="feature-list">
              <li><Icon name="doc"/><div><strong>Export documentation</strong><span>Commercial and shipping documents prepared for each consignment.</span></div></li>
              <li><Icon name="box"/><div><strong>Export packaging</strong><span>Packaging suited to the product and mode of transport.</span></div></li>
              <li><Icon name="truck"/><div><strong>Logistics coordination</strong><span>Planning with freight partners for dependable delivery.</span></div></li>
            </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow">Working with us</p>
            <h2 className="h2">International buyers, <em>welcome</em>.</h2>
          </div>
          <div className="cards-3">
            <article className="icard reveal"><Icon name="mail"/><h3>1. Share your requirement</h3><p>Product, grade, quantity, packaging and destination port.</p></article>
            <article className="icard reveal" style={{ "--d": "80ms" }}><Icon name="doc"/><h3>2. Receive specifications</h3><p>We share TDS, SDS and a tailored commercial offer.</p></article>
            <article className="icard reveal" style={{ "--d": "160ms" }}><Icon name="truck"/><h3>3. Ship with confidence</h3><p>Order confirmation, production, documentation and dispatch.</p></article>
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }} className="reveal"><Link className="btn btn--primary" to="/contact#rfq">Send an export inquiry <Icon name="arrow"/></Link></div>
        </div>
      </section>
    </>
  );
}
