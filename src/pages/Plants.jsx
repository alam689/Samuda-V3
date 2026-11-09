import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../lib/hooks.js";
import { PRODUCTS } from "../data/catalog.js";

export default function Plants() {
  usePageMeta("Our Plants", "Samuda's integrated chemical complex at Gazaria, Munshiganj — chlor-alkali, hydrogen peroxide and calcium carbonate plants powered by the 28.19 MW Samuda Power station.");
  return (
    <>
      <section className="page-hero page-hero--tall">
        <div className="page-hero__bg" style={{ backgroundImage: `url(${asset("assets/img/plants/chlorine-plant.webp")})` }} aria-hidden="true"></div>
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>Our Plants</span></nav>
          <p className="eyebrow eyebrow--light">Our plants</p>
          <h1 className="page-hero__title reveal-words">Engineered for scale. Built for <em>reliability</em>.</h1>
          <p className="page-hero__lead reveal">An integrated chemical complex at Gazaria, Munshiganj — chlor-alkali, hydrogen peroxide and calcium carbonate plants, powered by our own natural-gas power station on the banks of the Meghna.</p>
          <nav className="plant-nav reveal" aria-label="Plants on this page">
            <a href="#chlor-alkali"><span>01</span>Chlor-Alkali</a>
            <a href="#hydrogen-peroxide"><span>02</span>Hydrogen Peroxide</a>
            <a href="#calcium-carbonate"><span>03</span>Calcium Carbonate</a>
            <a href="#samuda-power"><span>04</span>Samuda Power</a>
          </nav>
        </div>
      </section>

      <section className="capacity" aria-label="Production capacity">
        <div className="container">
          <div className="capacity__grid">
            <div className="cap reveal"><span className="cap__n"><span data-count="250">250</span></span><span className="cap__u">MT / day</span><span className="cap__l">Hydrogen peroxide</span></div>
            <div className="cap reveal" style={{ "--d": "80ms" }}><span className="cap__n"><span data-count="170">170</span></span><span className="cap__u">MT / day</span><span className="cap__l">Caustic soda flakes</span></div>
            <div className="cap reveal" style={{ "--d": "160ms" }}><span className="cap__n"><span data-count="180">180</span></span><span className="cap__u">MT / day</span><span className="cap__l">Hydrochloric acid</span></div>
            <div className="cap reveal" style={{ "--d": "240ms" }}><span className="cap__n"><span data-count="5500">5500</span></span><span className="cap__u">MT / month</span><span className="cap__l">Calcium carbonate</span></div>
            <div className="cap reveal" style={{ "--d": "320ms" }}><span className="cap__n">28.19</span><span className="cap__u">MW</span><span className="cap__l">Captive power</span></div>
          </div>
          <p className="capacity__note">Maximum rated production capacity. Actual output varies with grade and demand.</p>
        </div>
      </section>


      <section className="section plant" id="chlor-alkali">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <p className="plant__index">01</p>
              <p className="eyebrow">Chlor-Alkali Plant</p>
              <h2 className="h2">Salt, water and electricity — turned into <em>essential</em> chemistry.</h2>
              <p className="lead-text">Industrial raw salt is dissolved in water and purified. The concentrated brine is then electrolyzed to produce caustic soda, chlorine gas and hydrogen.</p>
              <p>The plant uses <strong>ion-exchange membrane technology</strong>, delivering superior product quality with low energy consumption and no pollution.</p>
              <div className="tech-badges">
                <span><Icon name="award"/> Superior quality</span>
                <span><Icon name="spark"/> Low energy use</span>
                <span><Icon name="leaf"/> No pollution</span>
              </div>
            </div>
            <div className="reveal" style={{ "--d": "120ms" }}>
              <figure className="frame frame--wide plant__photo">
                <img src={asset("assets/img/plants/chlorine-plant.webp")} alt="Chlorine plant with tall process vessels and blue steel structures at Samuda's Gazaria complex" loading="lazy" />
                <figcaption>Chlorine plant, Gazaria</figcaption>
              </figure>
            </div>
          </div>

          <div className="flow-card reveal">
            <div className="flow-card__head">
              <h3 className="h3">How the chlor-alkali process works</h3>
              <p className="muted">Ion-exchange membrane electrolysis</p>
            </div>
            <div className="flow-scroll">
              <svg className="flow" viewBox="0 0 1100 390" role="img" aria-labelledby="flow-title flow-desc">
                <title id="flow-title">Chlor-alkali process flow</title>
                <desc id="flow-desc">Industrial salt passes through a brine clarifier, two filters and a resin tower into brine storage. The purified brine is electrolyzed using electricity. The electrolyzer produces chlorine, which is treated before dispatch; hydrogen gas; and caustic soda, which is supplied as liquid or passed through a flaking unit to make 98% caustic soda flakes.</desc>
                <defs>
                  <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="flow__head"/></marker>
                </defs>

                <text className="flow__lane" x="15" y="22">BRINE PURIFICATION</text>
                <path className="flow__line" d="M145 70H185" markerEnd="url(#arr)"/>
                <path className="flow__line" d="M315 70H355" markerEnd="url(#arr)"/>
                <path className="flow__line" d="M485 70H525" markerEnd="url(#arr)"/>
                <path className="flow__line" d="M655 70H695" markerEnd="url(#arr)"/>
                <path className="flow__line" d="M825 70H865" markerEnd="url(#arr)"/>
                <path className="flow__line" d="M930 96V136" markerEnd="url(#arr)"/>
                <g className="flow__node"><rect x="15" y="44" width="130" height="52" rx="12"/><text x="80" y="75">Industrial salt</text></g>
                <g className="flow__node"><rect x="185" y="44" width="130" height="52" rx="12"/><text x="250" y="75">Brine clarifier</text></g>
                <g className="flow__node"><rect x="355" y="44" width="130" height="52" rx="12"/><text x="420" y="75">Filter</text></g>
                <g className="flow__node"><rect x="525" y="44" width="130" height="52" rx="12"/><text x="590" y="75">Filter</text></g>
                <g className="flow__node"><rect x="695" y="44" width="130" height="52" rx="12"/><text x="760" y="75">Resin tower</text></g>
                <g className="flow__node"><rect x="865" y="44" width="130" height="52" rx="12"/><text x="930" y="75">Brine storage</text></g>


                <g className="flow__core"><rect x="855" y="140" width="150" height="170" rx="16"/><text x="930" y="220">Electrolyzer</text><text className="flow__small" x="930" y="242">Ion-exchange membrane</text></g>
                <g className="flow__power"><rect x="870" y="342" width="120" height="36" rx="18"/><text x="930" y="365">⚡ Electricity</text></g>
                <path className="flow__line flow__line--power" d="M930 342V314" markerEnd="url(#arr)"/>


                <text className="flow__lane" x="15" y="135">PRODUCTS</text>
                <path className="flow__line" d="M855 165H719" markerEnd="url(#arr)"/>
                <g className="flow__node"><rect x="585" y="140" width="130" height="50" rx="12"/><text x="650" y="170">Chlorine treatment</text></g>
                <path className="flow__line" d="M585 165H499" markerEnd="url(#arr)"/>
                <g className="flow__out"><rect x="345" y="143" width="150" height="44" rx="22"/><text x="420" y="170">Chlorine · Cl₂</text></g>

                <path className="flow__line" d="M855 225H499" markerEnd="url(#arr)"/>
                <g className="flow__out"><rect x="345" y="203" width="150" height="44" rx="22"/><text x="420" y="230">Hydrogen · H₂</text></g>

                <path className="flow__line" d="M855 290H719" markerEnd="url(#arr)"/>
                <g className="flow__node"><rect x="585" y="265" width="130" height="50" rx="12"/><text x="650" y="288">Caustic soda</text><text className="flow__small" x="650" y="304">product receiver</text></g>
                <path className="flow__line" d="M585 290H489" markerEnd="url(#arr)"/>
                <g className="flow__node"><rect x="355" y="265" width="130" height="50" rx="12"/><text x="420" y="295">Flaking unit</text></g>
                <path className="flow__line" d="M355 290H259" markerEnd="url(#arr)"/>
                <g className="flow__out"><rect x="40" y="268" width="215" height="44" rx="22"/><text x="147" y="295">Caustic soda flakes · 98%</text></g>
                <path className="flow__line" d="M650 315V352H259" markerEnd="url(#arr)"/>
                <g className="flow__out flow__out--alt"><rect x="40" y="330" width="215" height="44" rx="22"/><text x="147" y="357">Liquid caustic soda</text></g>
              </svg>
            </div>
          </div>

          <div className="outputs">
            <h3 className="h3 reveal">Products from this complex</h3>
            <div className="outputs__grid">
              <Link className="output reveal" to="/products/caustic-soda"><span className="output__f">NaOH</span><strong>Caustic Soda</strong><small>Liquid 60–100 · Flakes 150–170 MT/day</small><Icon name="arrow"/></Link>
              <Link className="output reveal" style={{ "--d": "60ms" }} to="/products/liquid-chlorine"><span className="output__f">Cl₂</span><strong>Liquid Chlorine</strong><small>15–20 MT/day</small><Icon name="arrow"/></Link>
              <Link className="output reveal" style={{ "--d": "120ms" }} to="/products/hydrochloric-acid"><span className="output__f">HCl</span><strong>Hydrochloric Acid</strong><small>150–180 MT/day</small><Icon name="arrow"/></Link>
              <Link className="output reveal" style={{ "--d": "180ms" }} to="/products/sodium-hypochlorite"><span className="output__f">NaOCl</span><strong>Sodium Hypochlorite</strong><small>20–30 MT/day</small><Icon name="arrow"/></Link>
              <Link className="output reveal" style={{ "--d": "240ms" }} to="/products/chlorinated-paraffin-wax"><span className="output__f">CPW</span><strong>Chlorinated Paraffin Wax</strong><small>20 MT/day</small><Icon name="arrow"/></Link>
            </div>
          </div>

          <div className="partners reveal">
            <p className="plinks__h">Technology partners</p>
            <ul>
              <li>AKCC <small>Japan</small></li>
              <li>Bertram <small>Switzerland</small></li>
              <li>Carbone Lorraine <small>France</small></li>
              <li>Nuberg Engineering <small>India</small></li>
              <li>Kirloskar Pneumatic <small>India</small></li>
              <li>Sury Pumps &amp; Equipment <small>India</small></li>
            </ul>
          </div>
        </div>
      </section>


      <section className="section section--mist plant" id="hydrogen-peroxide">
        <div className="container">
          <div className="split split--rev">
            <div className="reveal">
              <p className="plant__index">02</p>
              <p className="eyebrow">Hydrogen Peroxide Plant</p>
              <h2 className="h2">Clean oxidizing power, up to <em>250 MT</em> a day.</h2>
              <p className="lead-text">Samuda technical-grade hydrogen peroxide is the most economical grade for industrial applications in which inorganic stabilizers are accepted.</p>
              <p>It bleaches chemical and mechanical pulp, recycled paper, and natural and synthetic fibers; acts as a desizing agent; safely detoxifies industrial wastes such as phenolics and reduced sulfur compounds; and is used in metal extraction and finishing. It decomposes to water and oxygen with no toxic residues.</p>
              <Link className="btn btn--outline" to="/products/hydrogen-peroxide">Product specifications <Icon name="arrow"/></Link>
            </div>
            <div className="reveal" style={{ "--d": "120ms" }}>
              <div className="conc" aria-label="Available concentrations">
                <div className="conc__item"><div className="conc__glass"><span className="conc__fill" style={{ "--h": "35%" }}></span></div><strong>35%</strong><small>SG 1.127</small></div>
                <div className="conc__item"><div className="conc__glass"><span className="conc__fill" style={{ "--h": "50%" }}></span></div><strong>50%</strong><small>SG 1.195</small></div>
                <div className="conc__item"><div className="conc__glass"><span className="conc__fill" style={{ "--h": "60%" }}></span></div><strong>60%</strong><small>SG 1.235</small></div>
              </div>
              <p className="conc__cap">Available concentrations (% w/w H₂O₂)</p>
            </div>
          </div>

          <div className="pack-grid">
            <figure className="pack reveal">
              <img src={asset("assets/img/plants/h2o2-jars.webp")} alt="Rows of blue 25 kg hydrogen peroxide jars ready for dispatch" loading="lazy" />
              <figcaption><strong>25 kg jars</strong><span>For mills and smaller-volume users</span></figcaption>
            </figure>
            <figure className="pack reveal" style={{ "--d": "100ms" }}>
              <img src={asset("assets/img/plants/iso-tank.webp")} alt="White Samuda-branded ISO tank container for bulk hydrogen peroxide" loading="lazy" />
              <figcaption><strong>ISO tanks</strong><span>For bulk and export shipments</span></figcaption>
            </figure>
            <div className="pack pack--stat reveal" style={{ "--d": "200ms" }}>
              <span className="pack__n">5,100–7,500</span>
              <span className="pack__u">MT per month</span>
              <p>Total hydrogen peroxide production capacity (170–250 MT/day).</p>
            </div>
          </div>
        </div>
      </section>


      <section className="section plant" id="calcium-carbonate">
        <div className="container split">
          <div className="reveal">
            <p className="plant__index">03</p>
            <p className="eyebrow">Calcium Carbonate Plant</p>
            <h2 className="h2">Mineral fillers for a <em>lighter</em> cost base.</h2>
            <p className="lead-text">Our dedicated plant produces coated and uncoated calcium carbonate powder and ready-to-use filler compounds for polymer processors.</p>
            <ul className="bar-list">
              <li><span>Uncoated CaCO₃</span><b>3,500–4,000 MT/month</b><i style={{ "--w": "100%" }}></i></li>
              <li><span>Coated CaCO₃</span><b>1,000–1,500 MT/month</b><i style={{ "--w": "37%" }}></i></li>
              <li><span>Filler compound</span><b>700–900 MT/month</b><i style={{ "--w": "22%" }}></i></li>
            </ul>
            <div className="hero__actions">
              <Link className="btn btn--outline" to="/products/calcium-carbonate">Calcium carbonate <Icon name="arrow"/></Link>
              <Link className="link-arrow" to="/products/calcium-carbonate-filler">Filler compound <Icon name="arrow"/></Link>
            </div>
          </div>
          <div className="reveal" style={{ "--d": "120ms" }}>
            <figure className="frame frame--wide plant__photo">
              <img src={asset("assets/img/plants/caco3-plant.webp")} alt="Samuda calcium carbonate plant with storage tanks and steel process structures" loading="lazy" />
              <figcaption>Calcium carbonate plant</figcaption>
            </figure>
          </div>
        </div>
      </section>


      <section className="section section--dark plant power" id="samuda-power">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <p className="plant__index plant__index--light">04</p>
              <p className="eyebrow">Samuda Power Limited</p>
              <h2 className="h2">Our own power. <em>Uninterrupted</em> production.</h2>
              <p className="lead-text on-dark">Samuda Power Limited (SPL), a sister concern of T.K. Group of Industries, generates and distributes power to Samuda Chemical Complex — one of the largest caustic soda and hydrogen peroxide plants in Bangladesh.</p>
              <p>The natural-gas-fired plant at Gazaria, Munshiganj, near the river Meghna, runs three Wärtsilä (Finland) reciprocating engines and was founded in 2009.</p>
            </div>
            <div className="reveal" style={{ "--d": "120ms" }}>
              <figure className="frame frame--wide plant__photo">
                <img src={asset("assets/img/plants/power-plant.webp")} alt="Engine hall of the Samuda Power plant with Wärtsilä reciprocating engines" loading="lazy" />
                <figcaption>Engine hall, Samuda Power</figcaption>
              </figure>
            </div>
          </div>
          <div className="power__stats">
            <div className="reveal"><b>28.19</b><span>MW installed capacity</span></div>
            <div className="reveal" style={{ "--d": "80ms" }}><b>3</b><span>Wärtsilä reciprocating engines</span></div>
            <div className="reveal" style={{ "--d": "160ms" }}><b>2009</b><span>Year founded</span></div>
            <div className="reveal" style={{ "--d": "240ms" }}><b>Gas</b><span>Natural-gas fired</span></div>
          </div>
          <div className="cards-3 power__services">
            <article className="icard reveal"><Icon name="gear"/><h3>Operation &amp; maintenance</h3><p>Comprehensive O&amp;M, troubleshooting and spare-parts supply for captive power plants across T.K. Group in Dhaka and Chittagong.</p></article>
            <article className="icard reveal" style={{ "--d": "80ms" }}><Icon name="spark"/><h3>Panel manufacturing</h3><p>Design and fabrication of LT switchgear, PFI, ATS, synchronizing and MCC panels for T.K. Group concerns across Bangladesh.</p></article>
            <article className="icard reveal" style={{ "--d": "160ms" }}><Icon name="users"/><h3>Skilled engineering team</h3><p>Self-motivated engineers and technicians supporting customers — and the country at large.</p></article>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-band reveal">
            <div><h2>See our plants <em>in person</em>.</h2><p>Plant visits for customers and partners are available by appointment. Contact our team to arrange a visit to Gazaria.</p></div>
            <div className="cta-band__actions"><Link className="btn btn--primary" to="/contact#general">Arrange a visit <Icon name="arrow"/></Link><Link className="btn btn--ghost" to="/products">View products</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
