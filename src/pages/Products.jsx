import { useMemo, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { ProductCard } from "../components/products.jsx";
import { CATEGORIES, INDUSTRIES, PRODUCTS } from "../data/catalog.js";
import { usePageMeta } from "../lib/hooks.js";

export default function Products() {
  usePageMeta("Products", "Browse Samuda Chemical's basic chemicals, performance textile auxiliaries and calcium carbonate. Search, filter and request a quote.");
  const [params, setParams] = useSearchParams();
  const searchRef = useRef(null);
  const category = params.get("category") || "";
  const industry = params.get("industry") || "";
  const q = params.get("q") || "";

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    setParams(next, { replace: true });
  };
  const reset = () => { setParams({}, { replace: true }); searchRef.current?.focus(); };

  const visible = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return new Set(PRODUCTS.filter((p) =>
      (!category || p.category === category) &&
      (!industry || p.industries.includes(industry)) &&
      (!needle || [p.name, p.formula, p.chemical, p.short].join(" ").toLowerCase().includes(needle))
    ).map((p) => p.slug));
  }, [q, category, industry]);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>Products</span></nav>
          <p className="eyebrow eyebrow--light">Product catalogue</p>
          <h1 className="page-hero__title reveal-words">Find the <em>right</em> chemistry.</h1>
          <p className="page-hero__lead reveal">Search our range by name or filter by product family and industry. Add products to your inquiry list and request a single consolidated quotation.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="toolbar" role="search">
            <div className="toolbar__row">
              <div className="search">
                <Icon name="search" />
                <label className="sr-only" htmlFor="q">Search products</label>
                <input
                  id="q" ref={searchRef} type="search" autoComplete="off" value={q}
                  placeholder="Search by product name or formula, e.g. H₂O₂"
                  onChange={(e) => update("q", e.target.value)}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="industry">Filter by industry</label>
                <select id="industry" value={industry} onChange={(e) => update("industry", e.target.value)}>
                  <option value="">All industries</option>
                  {Object.entries(INDUSTRIES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </div>
            </div>
            <div className="chips" aria-label="Filter by product family">
              <button className="chip" type="button" aria-pressed={!category} onClick={() => update("category", "")}>All products</button>
              {CATEGORIES.map((c) => (
                <button
                  key={c.slug} className="chip" type="button" aria-pressed={category === c.slug}
                  onClick={() => update("category", category === c.slug ? "" : c.slug)}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="result-meta" style={{ marginBottom: 20 }}>
            <span aria-live="polite">{visible.size} {visible.size === 1 ? "product" : "products"}</span>
            <button type="button" onClick={reset}>Clear filters</button>
          </div>

          <div className="pgrid">
            {PRODUCTS.map((p) => <ProductCard key={p.slug} product={p} hidden={!visible.has(p.slug)} />)}
          </div>

          <div className={`empty${visible.size === 0 ? " is-shown" : ""}`}>
            <Icon name="search" />
            <h2 className="h3">No products match your search</h2>
            <p className="muted">Try a different name, or tell us what you need — we may still be able to help.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn btn--outline" type="button" onClick={reset}>Clear filters</button>
              <Link className="btn btn--primary" to="/contact#rfq">Ask our team <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mist section--tight">
        <div className="container cards-3">
          <article className="icard reveal"><Icon name="doc" /><h3>Technical documents</h3><p>Technical Data Sheets and Safety Data Sheets are available on request for each product and grade.</p></article>
          <article className="icard reveal" style={{ "--d": "80ms" }}><Icon name="box" /><h3>Grades &amp; packaging</h3><p>Concentrations, grades and pack sizes vary by product. Share your requirement and we will advise.</p></article>
          <article className="icard reveal" style={{ "--d": "160ms" }}><Icon name="users" /><h3>Technical support</h3><p>Not sure which product suits your process? Our team will help you choose.</p></article>
        </div>
      </section>
    </>
  );
}
