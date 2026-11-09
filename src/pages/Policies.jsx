import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../lib/hooks.js";
import { COMMITMENTS, GROUPS, INTRO, POLICIES } from "../data/policies.js";

export default function Policies() {
  usePageMeta("Company Policies", "Samuda Chemical Complex Limited's company policies — labour rights and appointment, health and safety, environment, ethics and governance, and risk assessments.");
  const [lang, setLang] = useState("en");
  const [group, setGroup] = useState("");
  const [q, setQ] = useState("");

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return POLICIES.filter((p) => (!group || p.group === group) && (!needle || p.name.toLowerCase().includes(needle)));
  }, [group, q]);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" style={{ backgroundImage: `url(${asset("assets/img/plants/qc-lab.webp")})` }} aria-hidden="true" />
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>Company Policies</span></nav>
          <p className="eyebrow eyebrow--light">Company policies</p>
          <h1 className="page-hero__title reveal-words">Responsible by policy. <em>Committed</em> in practice.</h1>
          <p className="page-hero__lead reveal">A documented framework of policies and risk assessments guides how we treat our people, protect the environment and conduct business at our Gazaria factory.</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="stats stats--3" style={{ marginTop: 0, borderTop: 0 }}>
            <div className="stat reveal"><span className="stat__num"><span data-count={POLICIES.length}>{POLICIES.length}</span></span><span className="stat__label">Documented policies &amp; risk assessments</span></div>
            <div className="stat reveal" style={{ "--d": "100ms" }}><span className="stat__num"><span data-count={COMMITMENTS.length}>{COMMITMENTS.length}</span></span><span className="stat__label">Labour-rights commitments to every worker</span></div>
            <div className="stat reveal" style={{ "--d": "200ms" }}><span className="stat__num"><span data-count="7">7</span></span><span className="stat__label">Formal risk assessments</span></div>
          </div>
        </div>
      </section>

      <section className="section section--mist" id="labour-rights" data-lang={lang}>
        <div className="container">
          <div className="section-head reveal">
            <div><p className="eyebrow">Featured policy</p><h2 className="h2">Labour Rights &amp; <em>Appointment</em> Policy</h2></div>
            <div className="lang-toggle" role="group" aria-label="Policy language">
              <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>English</button>
              <button type="button" aria-pressed={lang === "bn"} onClick={() => setLang("bn")} lang="bn">বাংলা</button>
            </div>
          </div>

          <p className="lead-text policy-intro reveal" lang={lang === "bn" ? "bn" : undefined}>{INTRO[lang]}</p>

          <ol className="commit">
            {COMMITMENTS.map((c, i) => (
              <li key={c.title} className="reveal" style={{ "--d": `${(i % 4) * 40}ms` }}>
                <Icon name={c.icon} />
                <div>
                  <h3>{c.title}</h3>
                  {lang === "en" ? <p>{c.en}</p> : <p lang="bn">{c.bn}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="framework">
        <div className="container">
          <div className="section-head reveal">
            <div><p className="eyebrow">Policy framework</p><h2 className="h2">Everything we <em>stand</em> by.</h2></div>
            <p className="muted">Our 2020 policy manual covers people, fair treatment, health, safety, environment, ethics and risk. Search or filter the index below.</p>
          </div>

          <div className="policy-tools reveal">
            <div className="search">
              <Icon name="search" />
              <label className="sr-only" htmlFor="policy-q">Search policies</label>
              <input id="policy-q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search policies, e.g. overtime, safety, bribery" />
            </div>
            <div className="chips">
              {GROUPS.map(([key, label]) => (
                <button key={key || "all"} className="chip" type="button" aria-pressed={group === key} onClick={() => setGroup(key)}>
                  {label}{!key && ` (${POLICIES.length})`}
                </button>
              ))}
            </div>
          </div>

          <ul className="policy-grid" aria-live="polite">
            {shown.map((p) => <li key={p.n} data-policy={p.group}><span>{p.n}</span>{p.name}</li>)}
          </ul>
          <div className={`empty${shown.length === 0 ? " is-shown" : ""}`}>
            <Icon name="search" />
            <h3 className="h3">No policies match your search</h3>
            <p className="muted">Try another keyword or choose a different category.</p>
          </div>

          <div className="download reveal">
            <div className="download__icon"><Icon name="doc" /><span>PDF</span></div>
            <div className="download__body">
              <h3>Company Policy of Samuda Chemical Complex Ltd. (2020)</h3>
              <p className="muted">The complete policy manual, issued for the Gazaria factory. 81 pages · 2.0 MB · Mainly in Bengali.</p>
            </div>
            <a className="btn btn--primary" href={asset("assets/docs/samuda-company-policy-2020.pdf")} target="_blank" rel="noopener noreferrer">Download PDF <Icon name="arrow" /></a>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-band reveal">
            <div><h2>Questions about our <em>policies</em>?</h2><p>Customers, auditors and partners can request supporting documents or compliance information from our team.</p></div>
            <div className="cta-band__actions"><Link className="btn btn--primary" to="/contact#general">Contact us <Icon name="arrow" /></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
