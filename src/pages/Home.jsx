import { useEffect } from "react";
import { Link } from "react-router-dom";
import Certifications, { CERTS, CertMini } from "../components/Certifications.jsx";
import Icon from "../components/Icon.jsx";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../lib/hooks.js";
import { CategoryCards, ProductGallery } from "../components/products.jsx";
import { PRODUCTS } from "../data/catalog.js";
import WorldMap from "../components/WorldMap.jsx";

// Samuda Group sister concerns — shown in the band under the hero facts.
const CONCERNS = [
  { name: "Samuda Chemical Complex Ltd.", sector: "Chemical manufacturing", icon: "flask", current: true },
  { name: "Samuda Spec-Chem Ltd.", sector: "Specialty and textile chemicals", icon: "thread" },
  { name: "Samuda Food Products Ltd.", sector: "Food processing, soybean crushing", icon: "leaf" },
  { name: "Samuda Edible Oil Ltd.", sector: "Edible oil processing", icon: "drop" },
  { name: "Samuda Construction Ltd.", sector: "Construction materials, PHC piles", icon: "building" },
  { name: "Samuda Power Ltd.", sector: "Power generation", icon: "spark" },
  { name: "Samuda Shipping Ltd.", sector: "Shipping and marine transportation", icon: "ship" },
];

export default function Home() {
  usePageMeta(null, "Samuda Chemical Complex Limited (SCCL) manufactures industrial chemicals, textile auxiliaries, specialty and water-treatment chemicals in Bangladesh. Explore products and request a quote.");
  // keep the last-hovered industry panel expanded
  useEffect(() => {
    const panels = Array.from(document.querySelectorAll(".panel"));
    const handlers = panels.map((p) => {
      const h = () => panels.forEach((o) => o.classList.toggle("is-active", o === p));
      p.addEventListener("mouseenter", h);
      return [p, h];
    });
    return () => handlers.forEach(([p, h]) => p.removeEventListener("mouseenter", h));
  }, []);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img src={asset("assets/img/aerial-1920.webp")} srcSet={`${asset("assets/img/aerial-800.webp")} 800w, ${asset("assets/img/aerial-1920.webp")} 1920w`} sizes="100vw" alt="Aerial view of a chemical manufacturing plant with storage tanks and pipe racks" fetchpriority="high" />
        </div>
        <svg className="hero__lines" viewBox="0 0 600 500" aria-hidden="true">
          <path d="M40 420 C 160 300, 220 380, 320 250 S 480 120, 580 60"/>
          <path d="M0 300 C 120 260, 200 160, 330 180 S 520 260, 600 200"/>
          <circle cx="320" cy="250" r="34"/><circle cx="330" cy="180" r="70"/>
          <circle className="node" cx="320" cy="250" r="4"/><circle className="node" cx="580" cy="60" r="3"/><circle className="node" cx="160" cy="327" r="3"/>
        </svg>

        <div className="container hero__content">
          <p className="eyebrow eyebrow--light reveal">Samuda Chemical Complex Limited</p>
          <h1 className="hero__title reveal-words" id="hero-title">Chemistry that powers <em>Bangladesh&rsquo;s</em> industry.</h1>
          <p className="hero__lead reveal" style={{ "--d": "200ms" }}>One of the largest caustic soda and hydrogen peroxide producers in Bangladesh — making the basic chemicals, textile auxiliaries and calcium carbonate that keep mills, factories and treatment plants running.</p>
          <div className="hero__actions reveal" style={{ "--d": "320ms" }}>
            <Link className="btn btn--primary" to="/products">Explore Products <Icon name="arrow"/></Link>
            <Link className="btn btn--ghost" to="/about">About Samuda</Link>
          </div>
        </div>

        <div className="hero__facts hero__certs">
          <div className="container">
            <ul aria-label="Certifications">
              {CERTS.map((c) => (
                <li key={c.key}>
                  <Link className="hcert" to={`#cert-${c.key}`} title={`View ${c.title} certification`}>
                    <CertMini cert={c}/>
                    <div><strong>{c.title}</strong><span>{c.tag}</span></div>
                    <Icon name="arrow" className="ico hcert__go"/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero__group" role="region" aria-label="Samuda Group concerns">
          <div className="container hero__group-inner">
            <p className="hero__group-label"><span>Samuda Group</span>Our concerns</p>
            <div className="hero__group-viewport">
              <ul className="hero__group-track">
                {[...CONCERNS, ...CONCERNS].map((c, i) => (
                  <li key={i} className={c.current ? "is-current" : undefined} aria-hidden={i >= CONCERNS.length ? "true" : undefined}>
                    <Icon name={c.icon}/>
                    <div>
                      <strong>{c.name}{c.current && <em className="hero__group-tag">You&rsquo;re here</em>}</strong>
                      <small>{c.sector}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <span className="scroll-cue" aria-hidden="true">Scroll</span>
      </section>

      <section className="section" aria-labelledby="intro-title">
        <div className="container">
          <div className="intro">
            <p className="eyebrow">Who we are</p>
            <h2 className="statement reveal-words" id="intro-title">Since 2006, Samuda has been building the chemistry behind everyday products — <em>reliable</em> supply, consistent quality, and partners who understand your process.</h2>
          </div>
          <div className="stats">
            <div className="stat reveal"><span className="stat__num">2006</span><span className="stat__label">Year established</span></div>
            <div className="stat reveal" style={{ "--d": "100ms" }}><span className="stat__num"><span data-count="250">250</span><sup>MT</sup></span><span className="stat__label">Hydrogen peroxide per day</span></div>
            <div className="stat reveal" style={{ "--d": "200ms" }}><span className="stat__num"><span data-count="170">170</span><sup>MT</sup></span><span className="stat__label">Caustic soda flakes per day</span></div>
            <div className="stat reveal" style={{ "--d": "300ms" }}><span className="stat__num"><span data-count="30">30</span><sup>+</sup></span><span className="stat__label">Export countries reached</span></div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <span className="marquee__item"><i>H₂O₂</i> Hydrogen Peroxide</span>
          <span className="marquee__item"><i>NaOH</i> Caustic Soda</span>
          <span className="marquee__item"><i>Cl₂</i> Liquid Chlorine</span>
          <span className="marquee__item"><i>HCl</i> Hydrochloric Acid</span>
          <span className="marquee__item"><i>NaOCl</i> Sodium Hypochlorite</span>
          <span className="marquee__item"><i>CaCO₃</i> Calcium Carbonate</span>
          <span className="marquee__item"><i>CPW</i> Chlorinated Paraffin Wax</span>
          <span className="marquee__item"><i>Sp</i> SAMSOF PSS</span>
          <span className="marquee__item"><i>St</i> SAMPER STB</span>
          <span className="marquee__item"><i>Wf</i> SAMWET BLF</span>
          <span className="marquee__item"><i>H₂O₂</i> Hydrogen Peroxide</span>
          <span className="marquee__item"><i>NaOH</i> Caustic Soda</span>
          <span className="marquee__item"><i>Cl₂</i> Liquid Chlorine</span>
          <span className="marquee__item"><i>HCl</i> Hydrochloric Acid</span>
          <span className="marquee__item"><i>NaOCl</i> Sodium Hypochlorite</span>
          <span className="marquee__item"><i>CaCO₃</i> Calcium Carbonate</span>
          <span className="marquee__item"><i>CPW</i> Chlorinated Paraffin Wax</span>
          <span className="marquee__item"><i>Sp</i> SAMSOF PSS</span>
          <span className="marquee__item"><i>St</i> SAMPER STB</span>
          <span className="marquee__item"><i>Wf</i> SAMWET BLF</span>
        </div>
      </div>

      <section className="section section--mist" aria-labelledby="products-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Our products</p>
              <h2 className="h2" id="products-title">Three product families. <em>One</em> trusted source.</h2>
            </div>
            <p className="muted">{PRODUCTS.length} products — from bulk chlor-alkali chemicals to Samuda&rsquo;s own performance range of textile auxiliaries and calcium carbonate fillers.</p>
          </div>
          <div className="cgrid">
      <CategoryCards/>
          </div>
          <div className="section-head reveal" style={{ margin: "88px 0 28px" }}>
            <div><p className="eyebrow">From our production line</p><h2 className="h2" style={{ fontSize: "clamp(1.7rem,2.6vw,2.3rem)" }}>The Samuda <em>signature</em> range</h2></div>
            <Link className="link-arrow" to="/products">Full catalogue <Icon name="arrow"/></Link>
          </div>
          <div className="gallery"><ProductGallery/></div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="ind-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Industries we serve</p>
              <h2 className="h2" id="ind-title">Built for the sectors that <em>move</em> the economy.</h2>
            </div>
            <Link className="btn btn--ghost" to="/industries">Explore Industries <Icon name="arrow"/></Link>
          </div>
          <div className="panels">
            <article className="panel panel--textile is-active reveal" tabIndex="0">
              <span className="panel__num">01</span><Icon name="thread" className="panel__icon"/>
              <h3>Textile &amp; Garments</h3>
              <div className="panel__body"><p>Bleaching, scouring, dyeing and finishing chemistry for knit, woven and denim processing.</p><Link className="link-arrow" to="/industries#textile">Textile solutions <Icon name="arrow"/></Link></div>
            </article>
            <article className="panel panel--paper reveal" style={{ "--d": "80ms" }} tabIndex="0">
              <span className="panel__num">02</span><Icon name="doc" className="panel__icon"/>
              <h3>Paper &amp; Pulp</h3>
              <div className="panel__body"><p>Bleaching, brightening and filler chemicals for pulp and paper manufacturing.</p><Link className="link-arrow" to="/industries#paper">Paper solutions <Icon name="arrow"/></Link></div>
            </article>
            <article className="panel panel--water reveal" style={{ "--d": "160ms" }} tabIndex="0">
              <span className="panel__num">03</span><Icon name="drop" className="panel__icon"/>
              <h3>Water Treatment</h3>
              <div className="panel__body"><p>Disinfection, pH control and regeneration chemicals for municipal and industrial water.</p><Link className="link-arrow" to="/industries#water">Water solutions <Icon name="arrow"/></Link></div>
            </article>
            <article className="panel panel--other reveal" style={{ "--d": "240ms" }} tabIndex="0">
              <span className="panel__num">04</span><Icon name="gear" className="panel__icon"/>
              <h3>Other Manufacturing</h3>
              <div className="panel__body"><p>Plastics, footwear, soaps and detergents, and general chemical processing.</p><Link className="link-arrow" to="/industries#other">Manufacturing solutions <Icon name="arrow"/></Link></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="plants-title">
        <div className="container">
          <div className="section-head reveal">
            <div><p className="eyebrow">Our plants</p><h2 className="h2" id="plants-title">An integrated complex on the <em>Meghna</em>.</h2></div>
            <p className="muted">Chlor-alkali, hydrogen peroxide and calcium carbonate plants at Gazaria, Munshiganj — powered by our own 28.19 MW station.</p>
          </div>
          <div className="plants-show">
            <Link className="pshow reveal" to="/plants#chlor-alkali"><img src={asset("assets/img/plants/chlorine-plant.webp")} alt="Samuda chlorine plant" loading="lazy" /><Icon name="arrow"/><span className="pshow__body"><small>01 · Chlor-Alkali</small><strong>Caustic soda, chlorine &amp; HCl</strong><span>Ion-exchange membrane electrolysis</span></span></Link>
            <Link className="pshow reveal" style={{ "--d": "80ms" }} to="/plants#hydrogen-peroxide"><img src={asset("assets/img/plants/iso-tank.webp")} alt="Samuda ISO tank for hydrogen peroxide" loading="lazy" /><Icon name="arrow"/><span className="pshow__body"><small>02 · Hydrogen Peroxide</small><strong>Up to 250 MT/day</strong></span></Link>
            <Link className="pshow reveal" style={{ "--d": "160ms" }} to="/plants#calcium-carbonate"><img src={asset("assets/img/plants/caco3-plant.webp")} alt="Samuda calcium carbonate plant" loading="lazy" /><Icon name="arrow"/><span className="pshow__body"><small>03 · Calcium Carbonate</small><strong>Coated &amp; uncoated</strong></span></Link>
            <Link className="pshow reveal" style={{ "--d": "240ms" }} to="/plants#samuda-power"><img src={asset("assets/img/plants/power-plant.webp")} alt="Samuda Power engine hall" loading="lazy" /><Icon name="arrow"/><span className="pshow__body"><small>04 · Samuda Power</small><strong>28.19 MW captive power</strong></span></Link>
            <Link className="pshow reveal" style={{ "--d": "320ms" }} to="/plants#hydrogen-peroxide"><img src={asset("assets/img/plants/h2o2-jars.webp")} alt="Hydrogen peroxide jars ready for dispatch" loading="lazy" /><Icon name="arrow"/><span className="pshow__body"><small>Dispatch</small><strong>Jars, drums &amp; ISO tanks</strong></span></Link>
          </div>
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="mfg-title">
        <div className="container split">
          <div className="frame-stack reveal">
            <div className="frame frame--tall">
              <img src={asset("assets/img/plants/chlorine-plant.webp")} alt="Process vessels at the Samuda chlorine plant" loading="lazy" />
            </div>
            <div className="frame frame--small">
              <img src={asset("assets/img/plants/qc-lab.webp")} alt="Samuda quality-control chemist testing a sample in the laboratory" loading="lazy" />
            </div>
            <div className="badge-float"><Icon name="microscope"/><div><strong>In-house laboratory</strong><span>Batch testing &amp; QC</span></div></div>
          </div>
          <div className="reveal" style={{ "--d": "120ms" }}>
            <p className="eyebrow">Manufacturing &amp; quality</p>
            <h2 className="h2" id="mfg-title">Precision in every <em>batch</em>.</h2>
            <p className="lead-text">Our production is supported by laboratory testing at every critical stage — from incoming raw materials to the finished product leaving our gates.</p>
            <ul className="feature-list">
              <li><Icon name="factory"/><div><strong>Integrated production</strong><span>Process plant, storage and packaging at our Gazaria facility.</span></div></li>
              <li><Icon name="microscope"/><div><strong>Quality control</strong><span>Raw-material, in-process and finished-goods testing.</span></div></li>
              <li><Icon name="shield"/><div><strong>Safety first</strong><span>Trained teams, documented procedures and safe handling.</span></div></li>
            </ul>
            <div className="hero__actions"><Link className="btn btn--outline" to="/plants">Explore Our Plants <Icon name="arrow"/></Link><Link className="link-arrow" to="/manufacturing">Manufacturing &amp; QC <Icon name="arrow"/></Link></div>
          </div>
        </div>
      </section>

      <Certifications />

      <section className="section" aria-labelledby="about-title">
        <div className="container split split--rev">
          <div className="reveal">
            <ul className="facts">
              <li><Icon name="clock"/><div><small>Established</small><strong>2006</strong></div></li>
              <li><Icon name="users"/><div><small>Group</small><strong>A concern of T.K. Group, Bangladesh</strong></div></li>
              <li><Icon name="pin"/><div><small>Head office</small><strong>T.K. Bhaban, 13 Karwan Bazar, Dhaka-1215</strong></div></li>
              <li><Icon name="factory"/><div><small>Factory</small><strong>Sikirgaon, Gazaria, Munshiganj</strong></div></li>
            </ul>
          </div>
          <div className="reveal" style={{ "--d": "120ms" }}>
            <p className="eyebrow">About Samuda</p>
            <h2 className="h2" id="about-title">A Bangladeshi manufacturer with a <em>long-term</em> view.</h2>
            <p className="lead-text">Samuda Chemical Complex Limited (SCCL) is an industrial chemical manufacturer and a member of T.K. Group. We focus on delivering dependable products, responsive service and technical know-how to customers in Bangladesh and international markets.</p>
            <p>Our people are protected by a documented framework of 54 policies — from labour rights and equal pay to health, safety and anti-corruption.</p>
            <div className="hero__actions"><Link className="btn btn--outline" to="/about">Learn More <Icon name="arrow"/></Link><Link className="link-arrow" to="/policies">Company policies <Icon name="arrow"/></Link></div>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="reach-title">
        <div className="container">
          <div className="reach-head">
            <div className="reveal">
              <p className="eyebrow">Global presence</p>
              <h2 className="h2" id="reach-title" style={{ margin: "0" }}>From Bangladesh to the <em>world</em>.</h2>
            </div>
            <div className="reveal" style={{ "--d": "100ms" }}>
              <div className="big-stat"><span className="big-stat__n"><span data-count="30">30</span><sup>+</sup></span><span className="big-stat__l">countries reached through our export business</span></div>
              <p>We serve customers across Asia, Africa, Europe and beyond, with export documentation and logistics coordinated from our Dhaka head office.</p>
              <Link className="link-arrow" to="/global-reach">Our global reach <Icon name="arrow"/></Link>
            </div>
          </div>
          <div className="reveal" style={{ "--d": "150ms" }}><WorldMap/></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Looking for the right <em>chemical solution</em>?</h2>
              <p>Tell us about your process, volumes and delivery location. Our sales and technical team will get back to you with a tailored quotation.</p>
            </div>
            <div className="cta-band__actions">
              <Link className="btn btn--primary" to="/contact#rfq">Request a Quote <Icon name="arrow"/></Link>
              <Link className="btn btn--ghost" to="/contact#general">Contact Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
