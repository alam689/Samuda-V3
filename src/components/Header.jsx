import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";
import Logo from "./Logo.jsx";
import { CompanyMenu, PlantsMenu, ProductsMenu } from "./MegaMenus.jsx";
import { useInquiry } from "../lib/inquiry.jsx";

const MENUS = [
  { key: "company", label: "Company", Panel: CompanyMenu,
    match: ["/about", "/manufacturing", "/quality-sustainability", "/policies", "/global-reach", "/news"] },
  { key: "products", label: "Products", Panel: ProductsMenu, match: ["/products"] },
  { key: "plants", label: "Our Plants", Panel: PlantsMenu, match: ["/plants"] },
];
const LINKS = [["/industries", "Industries"], ["/careers", "Careers"], ["/contact", "Contact"]];
const DRAWER = [
  ["/", "Home"], ["/about", "About Samuda"], ["/products", "Products"], ["/plants", "Our Plants"],
  ["/industries", "Industries"], ["/manufacturing", "Manufacturing"], ["/quality-sustainability", "Quality & Sustainability"],
  ["/policies", "Company Policies"], ["/global-reach", "Global Reach"], ["/news", "News"], ["/careers", "Careers"], ["/contact", "Contact"],
];

export default function Header() {
  const { pathname } = useLocation();
  const { items, bump } = useInquiry();
  const [open, setOpen] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [bumping, setBumping] = useState(false);
  const toggleRef = useRef(null);

  // close menus on navigation
  useEffect(() => { setOpen(null); setDrawer(false); }, [pathname]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") { setOpen(null); setDrawer(false); } };
    const onClick = () => setOpen(null);
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", drawer);
    const close = () => window.innerWidth > 1100 && setDrawer(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [drawer]);

  useEffect(() => {
    if (!bump) return;
    setBumping(true);
    const t = setTimeout(() => setBumping(false), 500);
    return () => clearTimeout(t);
  }, [bump]);

  return (
    <>
      <div className="utility" role="region" aria-label="Quick contact">
        <div className="container utility__inner">
          <p className="utility__note">A concern of T.K. Group · Manufacturing in Bangladesh since 2006</p>
          <ul className="utility__links">
            <li><a href="mailto:info@scclbd.com"><Icon name="mail" /><span>info@scclbd.com</span></a></li>
            <li><Link to="/contact#offices"><Icon name="pin" /><span>Karwan Bazar, Dhaka</span></Link></li>
          </ul>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <Link className="brand" to="/" aria-label="Samuda Chemical Complex Limited — home"><Logo /></Link>

          <nav className="nav" aria-label="Main">
            <ul className="nav__list">
              {MENUS.map(({ key, label, Panel, match }) => {
                const active = match.some((m) => pathname.startsWith(m));
                return (
                  <li
                    key={key}
                    className={`nav__item nav__item--drop nav__item--mega${open === key ? " is-open" : ""}`}
                    data-active={active ? "" : undefined}
                    onMouseLeave={() => open === key && setOpen(null)}
                  >
                    <button
                      className="nav__link"
                      type="button"
                      aria-expanded={open === key}
                      aria-controls={`menu-${key}`}
                      onClick={(e) => { e.stopPropagation(); setOpen(open === key ? null : key); }}
                    >
                      {label} <Icon name="chevron" />
                    </button>
                    <div className="dropdown dropdown--mega" id={`menu-${key}`} onClick={(e) => e.stopPropagation()}>
                      <Panel />
                    </div>
                  </li>
                );
              })}
              {LINKS.map(([to, label]) => (
                <li key={to} className="nav__item" data-active={pathname.startsWith(to) ? "" : undefined}>
                  <NavLink className="nav__link" to={to}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <Link
              className={`inquiry-pill${items.length ? " has-items" : ""}${bumping ? " bump" : ""}`}
              to="/contact#rfq"
              aria-label={`Inquiry list, ${items.length} product${items.length === 1 ? "" : "s"}`}
            >
              <Icon name="doc" /><span className="inquiry-pill__count">{items.length}</span>
            </Link>
            <Link className="btn btn--primary btn--sm header-cta" to="/contact#rfq">Request a Quote <Icon name="arrow" /></Link>
            <button
              ref={toggleRef}
              className="menu-toggle"
              type="button"
              aria-expanded={drawer}
              aria-controls="drawer"
              onClick={() => setDrawer((d) => !d)}
            >
              <span className="sr-only">{drawer ? "Close menu" : "Open menu"}</span>
              <span className="menu-toggle__bars" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div className="drawer" id="drawer" hidden={!drawer}>
        <nav className="drawer__nav" aria-label="Mobile">
          {DRAWER.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
        </nav>
        <Link className="btn btn--primary btn--block" to="/contact#rfq">Request a Quote <Icon name="arrow" /></Link>
      </div>
    </>
  );
}
