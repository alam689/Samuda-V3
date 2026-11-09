import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";
import { asset } from "../lib/asset.js";

// Each certificate is shown as a "seal" card: a white medallion inside a rotating
// ring, on a green gradient panel with a light sweep and glow on hover.
export const CERTS = [
  {
    key: "iso",
    tag: "Quality Management System",
    title: "ISO 9001:2015",
    text: "Documented procedures, laboratory control at every stage and continual improvement, so every batch meets specification.",
    seal: (
      <svg className="seal__iso" viewBox="0 0 100 100" aria-hidden="true">
        <text x="50" y="48" textAnchor="middle" fontSize="30" fontWeight="800" fill="currentColor" letterSpacing="1">ISO</text>
        <text x="50" y="72" textAnchor="middle" fontSize="19" fontWeight="700" fill="currentColor">9001</text>
      </svg>
    ),
  },
  {
    key: "sirim",
    tag: "Certification & audit",
    title: "SIRIM QAS",
    text: "Independent third-party certification and audit by SIRIM QAS International against recognised international standards.",
    img: "assets/img/certs/sirim-qas.png",
  },
  {
    key: "sgs",
    tag: "Inspection & testing",
    title: "SGS",
    text: "Inspection, verification and testing by SGS — independent confidence in product quality and specification.",
    img: "assets/img/certs/sgs.png",
  },
  {
    key: "gcerti",
    tag: "System certification",
    title: "G-CERTI",
    text: "Management-system certification and surveillance audits by G-CERTI System Service, supporting continual improvement.",
    img: "assets/img/certs/g-certi.png",
  },
];

// Small round seal (logo on a white medallion) — used in the home hero strip.
export function CertMini({ cert }) {
  return (
    <i className={`hcert__seal hcert__seal--${cert.key}`} aria-hidden="true">
      {cert.img ? <img src={asset(cert.img)} alt="" loading="lazy" /> : cert.seal}
      <b className="hcert__tick"><Icon name="check"/></b>
    </i>
  );
}

export default function Certifications({ mist = false }) {
  // A link to #cert-<key> (e.g. from the home hero) briefly spotlights that card.
  const { hash } = useLocation();
  const spot = hash.startsWith("#cert-") ? hash.slice(6) : null;
  return (
    <section className={`section${mist ? " section--mist" : ""}`} id="certifications" aria-labelledby="cert-title">
      <div className="container">
        <div className="section-head reveal">
          <div><p className="eyebrow">Certifications</p><h2 className="h2" id="cert-title">Certified to <em>international</em> standards.</h2></div>
          <p className="muted">Our quality management system and products are assessed by internationally recognised certification and inspection bodies.</p>
        </div>
        <ul className="certs" aria-label="Certifications">
          {CERTS.map((c, i) => (
            <li id={`cert-${c.key}`} className={`cert cert--${c.key} reveal${spot === c.key ? " is-spot" : ""}`} style={{ "--d": `${90 * i}ms` }} key={spot === c.key ? `${c.key}-${hash}` : c.key}>
              <span className="cert__glow" aria-hidden="true"></span>
              <span className="cert__shine" aria-hidden="true"></span>
              <div className="seal">
                <span className="seal__ring" aria-hidden="true"></span>
                <span className="seal__face">
                  {c.img ? <img src={asset(c.img)} alt={`${c.title} logo`} loading="lazy" /> : c.seal}
                </span>
                <span className="seal__check" aria-hidden="true"><Icon name="check"/></span>
              </div>
              <p className="cert__tag"><Icon name="award"/> {c.tag}</p>
              <h3 className="cert__title">{c.title}</h3>
              <p className="cert__text">{c.text}</p>
            </li>
          ))}
        </ul>
        <div className="certs__foot reveal">
          <p>Certificate copies, scope and validity details are available to customers on request.</p>
          <Link className="btn btn--primary" to="/contact?doc=Certificates#rfq">Request certificate copies <Icon name="arrow"/></Link>
        </div>
      </div>
    </section>
  );
}
