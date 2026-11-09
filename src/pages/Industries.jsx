import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../lib/hooks.js";
import { IndustryProducts, IndustryThumbs } from "../components/products.jsx";
import { industryCount } from "../data/catalog.js";

export default function Industries() {
  usePageMeta("Industries", "Samuda Chemical supplies chemicals for textile and garments, paper and pulp, water treatment and other manufacturing industries in Bangladesh and abroad.");
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" style={{ backgroundImage: `url(${asset("assets/img/aerial-1920.webp")})` }} aria-hidden="true"></div>
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>Industries</span></nav>
          <p className="eyebrow eyebrow--light">Industries we serve</p>
          <h1 className="page-hero__title reveal-words">Chemistry for the industries that <em>shape</em> Bangladesh.</h1>
          <p className="page-hero__lead reveal">Our products support essential processes across textiles, paper, water treatment and wider manufacturing. Explore each sector to see the products most often used.</p>
        </div>
      </section>

      <nav className="ind-jump" aria-label="Industries on this page">
        <div className="container ind-jump__grid">
          <a className="ind-tile ind-tile--textile reveal" href="#textile"><span className="ind-tile__n">01</span><Icon name="thread" className="ind-tile__icon"/><strong>Textile &amp; Garments</strong><small>{industryCount("textile")} products</small></a>
          <a className="ind-tile ind-tile--paper reveal" style={{ "--d": "70ms" }} href="#paper"><span className="ind-tile__n">02</span><Icon name="doc" className="ind-tile__icon"/><strong>Paper &amp; Pulp</strong><small>{industryCount("paper")} products</small></a>
          <a className="ind-tile ind-tile--water reveal" style={{ "--d": "140ms" }} href="#water"><span className="ind-tile__n">03</span><Icon name="drop" className="ind-tile__icon"/><strong>Water Treatment</strong><small>{industryCount("water")} products</small></a>
          <a className="ind-tile ind-tile--other reveal" style={{ "--d": "210ms" }} href="#other"><span className="ind-tile__n">04</span><Icon name="gear" className="ind-tile__icon"/><strong>Other Manufacturing</strong><small>{industryCount("other")} products</small></a>
        </div>
      </nav>


      <section className="section ind" id="textile">
        <div className="container ind__grid">
          <div className="ind__intro">
            <div className="ind-card ind-card--textile reveal">
              <span className="ind-card__n">01</span><Icon name="thread" className="ind-card__icon"/>
              <div className="ind-card__foot">
                <div className="avatars"><IndustryThumbs industry="textile"/></div>
                <span className="ind-card__count"><b>{industryCount("textile")}</b> products</span>
              </div>
            </div>
            <p className="eyebrow reveal">Textile &amp; Garments</p>
            <h2 className="h2 reveal">From greige to <em>finished</em> fabric.</h2>
            <p className="lead-text reveal">Bangladesh&rsquo;s textile and garment sector depends on consistent wet-processing chemistry. Alongside caustic soda and hydrogen peroxide, our own SAMSOF, SAMWET, SAMPER, SAMSEQ, SAMCRE and SAMNEU auxiliaries cover every stage of processing.</p>
            <ul className="proc reveal"><li>Scouring</li><li>Bleaching</li><li>Mercerizing</li><li>Dyeing</li><li>Neutralizing</li><li>Softening &amp; finishing</li></ul>
            <div className="hero__actions reveal"><Link className="btn btn--primary" to="/products?industry=textile">All textile products <Icon name="arrow"/></Link><Link className="link-arrow" to="/contact#rfq">Ask an expert <Icon name="arrow"/></Link></div>
          </div>
          <div className="ind__products"><IndustryProducts industry="textile"/></div>
        </div>
      </section>


      <section className="section section--mist ind" id="paper">
        <div className="container ind__grid">
          <div className="ind__intro">
            <div className="ind-card ind-card--paper reveal">
              <span className="ind-card__n">02</span><Icon name="doc" className="ind-card__icon"/>
              <div className="ind-card__foot">
                <div className="avatars"><IndustryThumbs industry="paper"/></div>
                <span className="ind-card__count"><b>{industryCount("paper")}</b> products</span>
              </div>
            </div>
            <p className="eyebrow reveal">Paper &amp; Pulp</p>
            <h2 className="h2 reveal">Brightness, strength and <em>efficiency</em>.</h2>
            <p className="lead-text reveal">Pulp and paper producers use our hydrogen peroxide and alkalis for pulping and bleaching — including wastepaper recycling — and our calcium carbonate to improve opacity and economics.</p>
            <ul className="proc reveal"><li>Pulping</li><li>Pulp bleaching</li><li>Wastepaper recycling</li><li>Filling &amp; coating</li></ul>
            <div className="hero__actions reveal"><Link className="btn btn--primary" to="/products?industry=paper">All paper products <Icon name="arrow"/></Link><Link className="link-arrow" to="/contact#rfq">Ask an expert <Icon name="arrow"/></Link></div>
          </div>
          <div className="ind__products"><IndustryProducts industry="paper"/></div>
        </div>
      </section>


      <section className="section ind" id="water">
        <div className="container ind__grid">
          <div className="ind__intro">
            <div className="ind-card ind-card--water reveal">
              <span className="ind-card__n">03</span><Icon name="drop" className="ind-card__icon"/>
              <div className="ind-card__foot">
                <div className="avatars"><IndustryThumbs industry="water"/></div>
                <span className="ind-card__count"><b>{industryCount("water")}</b> products</span>
              </div>
            </div>
            <p className="eyebrow reveal">Water Treatment</p>
            <h2 className="h2 reveal">Safe water for communities and <em>industry</em>.</h2>
            <p className="lead-text reveal">Municipal and industrial water operators rely on effective disinfection and pH control. Our chlorine, hypochlorite, hydrogen peroxide, acids and alkalis support drinking-water, process-water and effluent systems.</p>
            <ul className="proc reveal"><li>Disinfection</li><li>pH control</li><li>Resin regeneration</li><li>Effluent treatment</li></ul>
            <div className="hero__actions reveal"><Link className="btn btn--primary" to="/products?industry=water">All water products <Icon name="arrow"/></Link><Link className="link-arrow" to="/contact#rfq">Ask an expert <Icon name="arrow"/></Link></div>
          </div>
          <div className="ind__products"><IndustryProducts industry="water"/></div>
        </div>
      </section>


      <section className="section section--mist ind" id="other">
        <div className="container ind__grid">
          <div className="ind__intro">
            <div className="ind-card ind-card--other reveal">
              <span className="ind-card__n">04</span><Icon name="gear" className="ind-card__icon"/>
              <div className="ind-card__foot">
                <div className="avatars"><IndustryThumbs industry="other"/></div>
                <span className="ind-card__count"><b>{industryCount("other")}</b> products</span>
              </div>
            </div>
            <p className="eyebrow reveal">Other Manufacturing</p>
            <h2 className="h2 reveal">Versatile inputs for <em>diverse</em> processes.</h2>
            <p className="lead-text reveal">Plastics processors, metal finishers, soap and detergent makers, refineries, food and pharmaceutical manufacturers use our basic chemicals, chlorinated paraffin wax and calcium carbonate fillers as essential inputs.</p>
            <ul className="proc reveal"><li>Plastics &amp; PVC</li><li>Metal finishing</li><li>Soap &amp; detergents</li><li>Food &amp; pharma</li><li>Paints &amp; construction</li></ul>
            <div className="hero__actions reveal"><Link className="btn btn--primary" to="/products?industry=other">All manufacturing products <Icon name="arrow"/></Link><Link className="link-arrow" to="/contact#rfq">Ask an expert <Icon name="arrow"/></Link></div>
          </div>
          <div className="ind__products"><IndustryProducts industry="other"/></div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-band reveal">
            <div><h2>Don&rsquo;t see your <em>industry</em>?</h2><p>Our products are used in many more applications. Tell us about your process and we&rsquo;ll recommend a suitable solution.</p></div>
            <div className="cta-band__actions"><Link className="btn btn--primary" to="/contact#rfq">Talk to an Expert <Icon name="arrow"/></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
