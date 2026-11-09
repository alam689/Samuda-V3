import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { asset } from "../lib/asset.js";
import { useInquiry } from "../lib/inquiry.jsx";
import { CATEGORIES, CATS, PRODUCTS, productsFor, productsIn } from "../data/catalog.js";

export const productUrl = (p) => `/products/${p.slug}`;

export function ProductImg({ product, sizes = "(max-width: 680px) 100vw, 320px", eager = false }) {
  return (
    <img
      src={asset(`assets/img/products/${product.image}.webp`)}
      sizes={sizes}
      alt={`${product.name} — Samuda Chemical product sample`}
      loading={eager ? undefined : "lazy"}
    />
  );
}

export function AddToInquiry({ name, variant = "chip" }) {
  const { has, toggle } = useInquiry();
  const on = has(name);
  if (variant === "ghost") {
    return (
      <button className="btn btn--ghost" type="button" aria-pressed={on} onClick={() => toggle(name)}>
        <Icon name={on ? "check" : "plus"} /> {on ? "In your inquiry list" : "Add to inquiry list"}
      </button>
    );
  }
  return (
    <button
      className={`add-btn${on ? " is-added" : ""}`}
      type="button"
      aria-pressed={on}
      aria-label={`${on ? "Remove" : "Add"} ${name} ${on ? "from" : "to"} inquiry list`}
      onClick={() => toggle(name)}
    >
      <Icon name="plus" />
      <span>{on ? "Added" : "Inquiry"}</span>
    </button>
  );
}

export function ProductCard({ product: p, hidden = false }) {
  const cat = CATS[p.category];
  return (
    <article className="pcard reveal" hidden={hidden}>
      <Link
        className={p.image ? "pcard__media pcard__media--photo" : `pcard__media pcard__media--${p.category}`}
        to={productUrl(p)}
        tabIndex={-1}
        aria-hidden="true"
      >
        {p.image ? (
          <ProductImg product={p} />
        ) : (
          <>
            <span className="pcard__formula">{p.formula}</span>
            <Icon name={cat.icon} className="pcard__icon" />
          </>
        )}
        <span className="pcard__tag">{p.form}</span>
      </Link>
      <div className="pcard__body">
        <p className="pcard__cat">{p.chemical}</p>
        <h3 className="pcard__title"><Link to={productUrl(p)}>{p.name}</Link></h3>
        <p className="pcard__text">{p.short}</p>
        {p.capacityShort && (
          <p className="pcard__cap"><Icon name="factory" /><span>{p.capacityShort}</span></p>
        )}
        <div className="pcard__actions">
          <Link className="link-arrow" to={productUrl(p)}>Details <Icon name="arrow" /></Link>
          <AddToInquiry name={p.name} />
        </div>
      </div>
    </article>
  );
}

// Feeds the pointer position to CSS so the card's soft spotlight follows the cursor.
function trackSpotlight(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function CategoryCards() {
  return CATEGORIES.map((c, i) => {
    const items = productsIn(c.slug);
    return (
      <article key={c.slug} className={`ccard ccard--${c.slug} reveal`} style={{ "--d": `${i * 80}ms` }} onPointerMove={trackSpotlight}>
        <span className="ccard__ring" aria-hidden="true" />
        <span className="ccard__shine" aria-hidden="true" />
        <Icon name={c.icon} className="ccard__mark" />
        <div className="ccard__top">
          <span className="ccard__num">0{i + 1}</span>
          <span className="ccard__count">{items.length} products</span>
          <Icon name={c.icon} className="ccard__icon" />
        </div>
        <h3 className="ccard__title">{c.name}</h3>
        <p className="ccard__text">{c.short}</p>
        <ul className="ccard__list">
          {items.slice(0, 6).map((p) => (
            <li key={p.slug}><Link to={productUrl(p)}>{p.name}</Link></li>
          ))}
          {items.length > 6 && (
            <li><Link to={`/products?category=${c.slug}`}>+ {items.length - 6} more</Link></li>
          )}
        </ul>
        <Link className="link-arrow" to={`/products?category=${c.slug}`}>Explore range <Icon name="arrow" /></Link>
      </article>
    );
  });
}

export function ProductGallery() {
  return PRODUCTS.filter((p) => p.image).map((p, i) => (
    <Link key={p.slug} className="gallery__item reveal" style={{ "--d": `${i * 60}ms` }} to={productUrl(p)}>
      <span className="gallery__img"><ProductImg product={p} sizes="300px" /></span>
      <span className="gallery__cap"><strong>{p.name}</strong><small>{p.chemical}</small></span>
    </Link>
  ));
}

export function IndustryProducts({ industry }) {
  return CATEGORIES.map((c) => {
    const items = productsFor(industry).filter((p) => p.category === c.slug);
    if (!items.length) return null;
    return (
      <div className="ipgroup" key={c.slug}>
        <p className="ipgroup__h">
          <span className={`ipgroup__dot ipgroup__dot--${c.slug}`} />
          {c.name}<b>{items.length}</b>
        </p>
        <div className="ipgrid">
          {items.map((p, i) => (
            <Link key={p.slug} className="ipc reveal" style={{ "--d": `${i * 40}ms` }} to={productUrl(p)}>
              {p.image ? (
                <span className="ipc__thumb"><ProductImg product={p} sizes="56px" /></span>
              ) : (
                <span className={`ipc__thumb ipc__thumb--${p.category}`}>{p.formula}</span>
              )}
              <span className="ipc__text"><strong>{p.name}</strong><small>{p.chemical}</small></span>
              <Icon name="arrow" className="ico ipc__go" />
            </Link>
          ))}
        </div>
      </div>
    );
  });
}

export function IndustryThumbs({ industry }) {
  return productsFor(industry).filter((p) => p.image).slice(0, 4).map((p) => (
    <span key={p.slug} className="avatar"><ProductImg product={p} sizes="48px" /></span>
  ));
}
