import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { AddToInquiry, ProductCard, ProductImg } from "../components/products.jsx";
import { BY_SLUG, CATS, INDUSTRIES, relatedTo } from "../data/catalog.js";
import { usePageMeta } from "../lib/hooks.js";
import NotFound from "./NotFound.jsx";

const HANDLING =
  "Use face shields, protective clothing, gloves and boots when handling. Avoid contact with skin and eyes. " +
  "If splashed in the eyes, rinse immediately with plenty of water for 10–15 minutes and seek medical advice. " +
  "On skin contact, wash immediately with soap and water and remove soiled clothing.";

function SpecTable({ title, head, rows }) {
  return (
    <div className="spec-table reveal">
      <h3 className="spec-table__title">{title}</h3>
      <div className="spec-table__scroll">
        <table>
          <thead><tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>{r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const p = BY_SLUG[slug];
  usePageMeta(p ? `${p.name} — ${CATS[p.category].name}` : "Product not found", p ? `${p.name} (${p.chemical}) by Samuda Chemical Complex Limited. ${p.short}` : undefined);
  if (!p) return <NotFound />;

  const cat = CATS[p.category];
  const quote = `/contact?product=${encodeURIComponent(p.name)}`;
  const tables = [...(p.properties ? [{ title: "Typical properties", head: ["Property", "Value"], rows: p.properties }] : []), ...(p.tables || [])];
  const facts = [
    ["flask", "Chemical name", p.chemical],
    ["box", "Physical state", p.form],
    ...(p.capacity ? [["factory", "Production capacity", p.capacity]] : []),
    ...(p.packaging ? [["truck", "Packaging", p.packaging]] : []),
  ];
  const glance = [
    ["Category", cat.name], ["Chemical name", p.chemical], ["Physical form", p.form],
    ...(p.capacityShort ? [["Capacity", p.capacityShort]] : []),
    ["Packaging", p.packaging || "Contact us for options"],
  ];

  return (
    <>
      <section className="page-hero page-hero--product">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><Link to="/products">Products</Link><span>/</span>
            <Link to={`/products?category=${cat.slug}`}>{cat.name}</Link>
          </nav>
          <div className="pdetail-hero">
            <div>
              <p className="eyebrow eyebrow--light">{cat.name}</p>
              <h1 className="page-hero__title">{p.name}{p.category === "performance" && <sup className="reg">®</sup>}</h1>
              <p className="pdetail-hero__chem">{p.chemical}</p>
              <p className="page-hero__lead">{p.short}</p>
              <div className="hero__actions">
                <Link className="btn btn--primary" to={`${quote}#rfq`}>Request a Quote <Icon name="arrow" /></Link>
                <AddToInquiry name={p.name} variant="ghost" />
              </div>
            </div>
            {p.image ? (
              <div className="pshot">
                <div className="pshot__frame"><ProductImg product={p} sizes="(max-width: 980px) 90vw, 440px" eager /></div>
                <span className="pshot__chip pshot__chip--a"><Icon name="box" /><span><small>Form</small>{p.form}</span></span>
                {p.capacityShort && (
                  <span className="pshot__chip pshot__chip--b"><Icon name="factory" /><span><small>Capacity</small>{p.capacityShort}</span></span>
                )}
              </div>
            ) : (
              <div className={`formula-tile formula-tile--${p.category}`} aria-hidden="true">
                <span className="formula-tile__f">{p.formula}</span>
                <span className="formula-tile__n">{p.form}</span>
                <svg className="formula-tile__orbit" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="78" /><circle cx="100" cy="100" r="96" />
                  <circle className="dot" cx="178" cy="100" r="4" /><circle className="dot" cx="31" cy="140" r="3" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="kfacts-wrap">
        <div className="container">
          <div className="kfacts">
            {facts.map(([ic, k, v], i) => (
              <div key={k} className="kfact reveal" style={{ "--d": `${i * 70}ms` }}>
                <Icon name={ic} /><small>{k}</small><strong>{v}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container pdetail">
          <div className="pdetail__main">
            <div className="reveal">
              <p className="eyebrow">Overview</p>
              <h2 className="h2">About {p.name}</h2>
              <div className="lead-text">{p.overview.map((t) => <p key={t}>{t}</p>)}</div>
            </div>

            {p.features && (
              <div className="reveal">
                <h3 className="h3">Special features</h3>
                <ul className="check-list">{p.features.map((f) => <li key={f}><Icon name="check" /><span>{f}</span></li>)}</ul>
              </div>
            )}

            {tables.length > 0 && (
              <div>
                <p className="eyebrow reveal">Technical data</p>
                <h2 className="h2 reveal">Specifications</h2>
                {tables.map((t) => <SpecTable key={t.title} {...t} />)}
              </div>
            )}

            {(p.dosage || p.usage) && (
              <div className="reveal">
                <h3 className="h3">Application &amp; recommended dosage</h3>
                {p.dosage && (
                  <div className="dose-grid">
                    {p.dosage.map(([proc, dose, note], i) => (
                      <div key={proc} className="dose reveal" style={{ "--d": `${i * 70}ms` }}>
                        <small>{proc}</small><strong>{dose}</strong>{note && <span>{note}</span>}
                      </div>
                    ))}
                  </div>
                )}
                {p.usage?.map((u) => <p key={u}>{u}</p>)}
              </div>
            )}

            {p.applications && (
              <div className="reveal">
                <h3 className="h3">Uses &amp; applications</h3>
                <ul className="check-list">{p.applications.map((a) => <li key={a}><Icon name="check" /><span>{a}</span></li>)}</ul>
              </div>
            )}

            <div className="reveal">
              <h3 className="h3">Industries</h3>
              <div className="chips">
                {p.industries.map((k) => <Link key={k} className="chip chip--static" to={`/industries#${k}`}>{INDUSTRIES[k]}</Link>)}
              </div>
            </div>

            {p.technology && (
              <div className="reveal">
                <h3 className="h3">Technology supported by</h3>
                <ul className="tech-list">{p.technology.map((t) => <li key={t}><Icon name="gear" /><span>{t}</span></li>)}</ul>
              </div>
            )}

            <div className="safety reveal">
              <Icon name="shield" />
              <div>
                <h3 className="h3">Handling &amp; safety</h3>
                <p>{HANDLING}</p>
                {p.storage && <p><strong>Storage:</strong> {p.storage}</p>}
                <p className="muted" style={{ margin: 0 }}>Always refer to the product Safety Data Sheet (SDS), available on request.</p>
              </div>
            </div>
          </div>

          <aside className="pdetail__aside reveal">
            <div className="spec-card">
              <h2 className="spec-card__title">At a glance</h2>
              <dl className="spec">{glance.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
              <div className="docs">
                <Link className="doc-link" to={`${quote}&doc=TDS#rfq`}><Icon name="doc" /><span><strong>Technical Data Sheet</strong><small>Available on request</small></span></Link>
                <Link className="doc-link" to={`${quote}&doc=SDS#rfq`}><Icon name="shield" /><span><strong>Safety Data Sheet</strong><small>Available on request</small></span></Link>
              </div>
              <Link className="btn btn--primary btn--block" to={`${quote}#rfq`}>Request a Quote <Icon name="arrow" /></Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <div className="section-head reveal">
            <div><p className="eyebrow">Related</p><h2 className="h2">You may also need</h2></div>
            <Link className="link-arrow" to="/products">All products <Icon name="arrow" /></Link>
          </div>
          <div className="pgrid">{relatedTo(p).map((q) => <ProductCard key={q.slug} product={q} />)}</div>
        </div>
      </section>
    </>
  );
}
