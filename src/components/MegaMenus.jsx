import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { asset } from "../lib/asset.js";
import { CATEGORIES, PRODUCTS, productsIn } from "../data/catalog.js";
import { productUrl } from "./products.jsx";

function Feature({ to, img, label, title, text, cta }) {
  return (
    <Link className="mm__feature" to={to}>
      <img src={asset(`assets/img/${img}`)} alt="" loading="lazy" />
      <span className="mm__feature-body">
        <small>{label}</small>
        <strong>{title}</strong>
        <span>{text}</span>
        <span className="mm__feature-cta">{cta} <Icon name="arrow" /></span>
      </span>
    </Link>
  );
}

function Foot({ icon, text, to, cta }) {
  return (
    <div className="mm__foot">
      <p><Icon name={icon} /><span>{text}</span></p>
      <Link className="btn btn--primary btn--sm" to={to}>{cta} <Icon name="arrow" /></Link>
    </div>
  );
}

const TAGLINES = { basic: "Bulk chemicals", performance: "Samuda textile auxiliaries", calcium: "Fillers & minerals" };

export function ProductsMenu() {
  return (
    <>
      <div className="mm">
        <Feature
          to="/products" img="plants/chlorine-plant.webp" label="Catalogue"
          title={<>{PRODUCTS.length} products.<br /><em>Three</em> families.</>}
          text="From bulk chlor-alkali chemicals to our own performance range."
          cta="Browse all products"
        />
        <div className="mm__cols">
          {CATEGORIES.map((c, i) => {
            const items = productsIn(c.slug);
            return (
              <div key={c.slug} className={`mm__col mm__col--${c.slug}`} style={{ "--i": i }}>
                <Link className="mm__head" to={`/products?category=${c.slug}`}>
                  <span className="mm__icon"><Icon name={c.icon} /></span>
                  <span className="mm__title"><strong>{c.name}</strong><small>{items.length} products · {TAGLINES[c.slug]}</small></span>
                  <Icon name="arrow" className="ico mm__go" />
                </Link>
                <ul className="mm__list">
                  {items.map((p) => (
                    <li key={p.slug}>
                      <Link to={productUrl(p)}>
                        <span className="mm__name">{p.name}</span>
                        {c.slug === "performance" ? <small>{p.chemical}</small> : <span className="mm__f">{p.formula}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
                {c.slug === "calcium" && (
                  <Link className="mm__promo" to="/plants">
                    <img src={asset("assets/img/plants/caco3-plant.webp")} alt="" loading="lazy" />
                    <span><small>Our plants</small><strong>See where it&rsquo;s made</strong></span>
                    <Icon name="arrow" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Foot icon="doc" text="Need a TDS, SDS or a custom grade? Our technical team will help." to="/contact#rfq" cta="Request a Quote" />
    </>
  );
}

const COMPANY_GROUPS = [
  ["users", "Who we are", "Our story and reach", [
    ["/about", "users", "About Samuda", "Our story, mission and locations"],
    ["/global-reach", "globe", "Global Reach", "Exporting to 30+ countries"],
    ["/news", "doc", "News", "Company announcements"],
    ["/careers", "spark", "Careers", "Build your future with us"],
  ]],
  ["factory", "How we work", "Standards we live by", [
    ["/manufacturing", "factory", "Manufacturing", "Facilities, process and laboratory"],
    ["/quality-sustainability", "leaf", "Quality & Sustainability", "QA, safety and environment"],
    ["/policies", "shield", "Company Policies", "Labour rights, ethics and governance"],
  ]],
];

export function CompanyMenu() {
  return (
    <>
      <div className="mm">
        <Feature
          to="/about" img="plants/caco3-plant.webp" label="Since 2006"
          title={<>Chemistry for a <em>better</em> tomorrow.</>}
          text="A concern of T.K. Group and the largest caustic soda and hydrogen peroxide plant in Bangladesh."
          cta="About Samuda"
        />
        <div className="mm__cols mm__cols--company">
          {COMPANY_GROUPS.map(([ic, title, sub, links], i) => (
            <div key={title} className="mm__col" style={{ "--i": i }}>
              <div className="mm__head mm__head--static">
                <span className="mm__icon"><Icon name={ic} /></span>
                <span className="mm__title"><strong>{title}</strong><small>{sub}</small></span>
              </div>
              <ul className="mm__links">
                {links.map(([to, li, name, desc]) => (
                  <li key={to}>
                    <Link className="mm__link" to={to}>
                      <span className="mm__link-ico"><Icon name={li} /></span>
                      <span className="mm__link-text"><strong>{name}</strong><small>{desc}</small></span>
                      <Icon name="arrow" className="ico mm__link-go" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mm__col mm__col--glance" style={{ "--i": 2 }}>
            <div className="mm__glance">
              <p className="mm__glance-h">At a glance</p>
              <div className="mm__stat"><b>2006</b><span>Established</span></div>
              <div className="mm__stat"><b>30+</b><span>Export countries</span></div>
              <div className="mm__stat"><b>54</b><span>Documented policies</span></div>
              <div className="mm__stat"><b>T.K.</b><span>Group concern</span></div>
              <Link className="mm__glance-link" to="/policies#labour-rights">
                <Icon name="shield" /><span>Labour Rights &amp; Appointment Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Foot icon="pin" text="Head office: T.K. Bhaban, 13 Karwan Bazar, Dhaka · Factory: Sikirgaon, Gazaria, Munshiganj" to="/contact" cta="Contact us" />
    </>
  );
}

export const PLANT_CARDS = [
  ["chlor-alkali", "chlorine-plant", "01", "Chlor-Alkali", "Caustic soda, chlorine, HCl & hypochlorite", "Up to 170 MT/day flakes"],
  ["hydrogen-peroxide", "iso-tank", "02", "Hydrogen Peroxide", "35%, 50% & 60% technical grades", "Up to 250 MT/day"],
  ["calcium-carbonate", "caco3-plant", "03", "Calcium Carbonate", "Coated, uncoated & filler compound", "Up to 5,500 MT/month"],
  ["samuda-power", "power-plant", "04", "Samuda Power", "Three Wärtsilä natural-gas engines", "28.19 MW"],
];

export function PlantsMenu() {
  return (
    <>
      <div className="mm">
        <Feature
          to="/plants" img="aerial-800.webp" label="Gazaria complex"
          title={<>One complex.<br /><em>Four</em> plants.</>}
          text="An integrated chemical complex on the banks of the Meghna, powered by our own station."
          cta="Explore our plants"
        />
        <div className="mm__cols mm__cols--plants">
          {PLANT_CARDS.map(([anchor, img, n, name, desc, cap], i) => (
            <Link key={anchor} className="mm__plant" style={{ "--i": i }} to={`/plants#${anchor}`}>
              <span className="mm__plant-img">
                <img src={asset(`assets/img/plants/${img}.webp`)} alt="" loading="lazy" />
                <span className="mm__plant-n">{n}</span>
              </span>
              <span className="mm__plant-body">
                <strong>{name}</strong><small>{desc}</small>
                <span className="mm__plant-cap"><Icon name="factory" />{cap}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <Foot icon="users" text="Plant visits for customers and partners are available by appointment." to="/contact#general" cta="Arrange a visit" />
    </>
  );
}
